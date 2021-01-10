<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class ChatMessage extends Model
{
    use HasFactory;

    protected $table = 'chat_message';

    protected $fillable = [
        'room_id', 'sender_type', 'content', 'status'
    ];

    public function room(): BelongsTo
    {
        return $this->belongsTo('App\Models\ChatRoom', 'room_id');
    }
}
