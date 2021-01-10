<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class ChatRoom extends Model
{
    use HasFactory;

//    public $statusProcessing = 'processing';
//    public $statusComplete = 'complete';

    protected $table = 'chat_room';

    protected $fillable = [
        'staff_id', 'customer_id', 'product_id', 'status'
    ];

    public function messages(): HasMany
    {
        return $this->hasMany('App\Models\ChatMessage', 'room_id');
    }


}
