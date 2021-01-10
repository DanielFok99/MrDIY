<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Chatmessage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_message', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')->constrained('chat_room');
            $table->string('sender_type');
            $table->string('content');
            $table->string('status')->comment('saved->distributed->seen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chat_message');
    }
}
