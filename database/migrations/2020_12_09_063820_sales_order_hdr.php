<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SalesOrderHdr extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_order_hdr', function (Blueprint $table) {
            $table->id();
            $table->string('sales_hdr_id');
            $table->string('total');
            $table->string('payment_method');
            $table->string('address');
            $table->string('name');
            $table->string('contact_num');
            $table->string('email');
            $table->string('active');
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
        Schema::dropIfExists('sales_order_hdr');
    }
}
