<?php

namespace App\Http\Controllers;

use App\Models\ChatMessage;
use App\Models\ChatRoom;
use App\Models\Customer;
use App\Models\Staff;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use stdClass;

class ChatController extends Controller
{
    public function test()
    {
        $customerId = 2;
        if (1 != null) {
            $staffId = 1;
        } else {
            $staffId = Staff::query()->inRandomOrder()->first()->id;

        }
        $productId = 4;
        $messageContent = 'Problem ';

        $chatRoom = ChatRoom::query()->firstOrCreate(
            ['customer_id' => $customerId, 'status' => 'processing'],
            ['staff_id' => $staffId, 'product_id' => $productId]
        );
        $chatRoom->save();
        $chatRoom->messages()->saveMany([
            new ChatMessage([
                'sender_type' => 'customer',
                'content' => $messageContent,
                'status' => 'saved'
            ]),
        ]);

        return response('Success');
    }

    public function updateRoomComplete(Request $request)
    {
        $roomId = $request->roomId;
        ChatRoom::query()->find($roomId)
            ->update([
                'status' => 'complete'
            ]);


    }

    public function getCustomerChatHistory(Request $request): JsonResponse
    {
        $customerId = $request->customerId;

        $message = ChatMessage::query()
            ->whereHas('room', function (Builder $query) use ($customerId) {
                $query->where('customer_id', $customerId);
            })
            ->select('id', 'sender_type', 'content', 'status', 'created_at')
            ->get();

        return response()->json($message);

    }

    public function getStaffChatRoom(Request $request): JsonResponse
    {
        $staffId = $request->input('staffId');

        $rooms = ChatRoom::query()
            ->where('staff_id', $staffId)
            ->where('status', 'processing')
            ->get();

        $roomList = collect();

        foreach ($rooms as $rawRoom) {
            $customer = Customer::query()->find($rawRoom->customer_id);
            $staff = Staff::query()->find($rawRoom->staff_id);
            $rawMessage = ChatRoom::query()->find($rawRoom->id)->messages()->orderBy('created_at', 'desc')->first();

            $room = new stdClass();
            $room->roomId = $rawRoom->id;
            $room->roomName = $customer->customer_firstname . ' ' . $customer->customer_lastname;
            $room->unreadCount = 0;

            $lastMessage = new stdClass();
            $lastMessage->content = $rawMessage->content;
            $lastMessage->sender_id = $rawMessage->sender_type == 'customer' ? 1 : 0;
            $lastMessage->username = $rawMessage->sender_type == 'customer' ? $customer->customer_firstname : $staff->staff_firstname;
            $lastMessage->timestamp = Carbon::parse($rawMessage->created_at)->toTimeString('minute');
            $lastMessage->date = Carbon::parse($rawMessage->created_at)->toDateString();
            switch ($rawMessage->status) {
                case 'saved':
                    {
                        $lastMessage->saved = true;
                        $lastMessage->distributed = false;
                        $lastMessage->seen = false;
                        $lastMessage->new = true;
                    }
                    break;
                case 'distributed':
                    {
                        $lastMessage->saved = true;
                        $lastMessage->distributed = true;
                        $lastMessage->seen = false;
                        $lastMessage->new = true;
                    }
                    break;
                case 'seen':
                    {
                        $lastMessage->saved = true;
                        $lastMessage->distributed = true;
                        $lastMessage->seen = true;
                        $lastMessage->new = true;
                    }
                    break;
            }
            $room->lastMessage = $lastMessage;

            $userList = collect();
            for ($c = 0; $c < 2; $c++) {
                $user = new stdClass();
                $user->_id = $c;
                if ($c == 0) {
                    $user->username = $staff->staff_firstname;
                } elseif ($c == 1) {
                    $user->username = $customer->customer_firstname;
                }
                $userList->push($user);
            }
            $room->users = $userList;


            $roomList->push($room);
//            $room->lastMessage =

        }

        return response()->json($roomList);
    }

    public function getStaffChatMessage(Request $request): JsonResponse
    {
        $roomId = $request->roomId;
        return response()->json($this->getMessage($roomId));
    }

    private function getMessage($chatRoomId): Collection
    {
        $rawMessages = ChatRoom::query()->find($chatRoomId)->messages()->get();

        $messageList = collect();
        foreach ($rawMessages as $rawMessage) {
            $message = new stdClass();
            $message->_id = $rawMessage->id;
            $message->content = $rawMessage->content;
            $message->sender_id = $rawMessage->sender_type == 'staff' ? 0 : 1;
            $message->date = Carbon::parse($rawMessage->created_at)->toDateString();
            $message->timestamp = Carbon::parse($rawMessage->created_at)->toTimeString('minute');
            switch ($rawMessage->status) {
                case 'saved':
                    {
                        $message->saved = true;
                        $message->distributed = false;
                        $message->seen = false;
                        $message->new = true;
                    }
                    break;
                case 'distributed':
                    {
                        $message->saved = true;
                        $message->distributed = true;
                        $message->seen = false;
                        $message->new = true;
                    }
                    break;
                case 'seen':
                    {
                        $message->saved = true;
                        $message->distributed = true;
                        $message->seen = true;
                        $message->new = true;
                    }
                    break;
            }
            $messageList->push($message);
        }

        return $messageList;
    }

    public function getStaffChatHistory(Request $request): JsonResponse
    {
        $staffId = $request->input('staffId');

        $rooms = ChatRoom::query()
            ->where('staff_id', $staffId)
            ->where('status', 'processing')
            ->get();
        $lists = collect();
        foreach ($rooms as $room) {
            $message = ChatMessage::query()
                ->where('room_id', $room->id)
                ->select('id', 'sender_type', 'content', 'status', 'created_at')
                ->get();

            $customer = Customer::query()
                ->find($room->customer_id);
            $customerFirstName = $customer->customer_firstname;
            $customerLastName = $customer->customer_lastname;

            $room->customer_name = $customerFirstName . ' ' . $customerLastName;

            $room->messages = $message;
            $roomId = $room->id;
            unset($room->id);
            $lists->put($roomId, $room);
        }

        return response()->json($lists);

    }

    public function customerInsert(Request $request)
    {
        $customerId = $request->customerId;
        if ($request->staffId != null) {
            $staffId = $request->staffId;
        } else {
            $staffId = Staff::query()->inRandomOrder()->first()->id;

        }
        $productId = $request->productId;
        $messageContent = $request->messageContent;

        $chatRoom = ChatRoom::query()->firstOrCreate(
            ['customer_id' => $customerId, 'status' => 'processing'],
            ['staff_id' => $staffId, 'product_id' => $productId]
        );
        $chatRoom->save();
        $chatRoom->messages()->saveMany([
            new ChatMessage([
                'sender_type' => 'customer',
                'content' => $messageContent,
                'status' => 'saved'
            ]),
        ]);

        return response('Success');
    }

    public function staffInsert(Request $request)
    {
        $chatRoomId = $request->roomId;
        $messageContent = $request->messageContent;

        $chatRoom = ChatRoom::query()->find($chatRoomId);
        //Update the 'updated_at' in chat_room table
        $chatRoom->touch();
        //Save the content via the model that belongTo
        $chatRoom->messages()
            ->save(
                new ChatMessage([
                    'sender_type' => 'staff',
                    'content' => $messageContent,
                    'status' => 'saved'
                ])
            );
        return response()->json($this->getMessage($chatRoomId));
    }

    public function updateMessageStatus(Request $request)
    {
//        saved->distributed->seen
        $messageId = $request->message_id;
        $action = $request->action;

        $message = ChatMessage::query()->find($messageId);
        switch ($action) {
            case 'd':
                {
                    $message->status = 'distributed';
                }
                break;
            case 's':
                {
                    $message->status = 'seen';
                }
                break;
        }
        $message->save();


    }
}
