<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Chatroom extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_room', function (Blueprint $table) {
            $table->id();
            $table->foreignId('staff_id')->constrained('staff');
            $table->foreignId('customer_id')->constrained('customer');
            $table->unsignedBigInteger('product_id');
            $table->string('status')->comment('processing->complete');
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
        Schema::dropIfExists('chat_room');
    }
}
