<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SalesOrderDtl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_order_dtl', function (Blueprint $table) {
            $table->string('sales_dtl_id')->unique()->primary();
            $table->string('sales_hdr_id');
            $table->string('product_id');
            $table->string('quantity');
            $table->string('price');
            $table->string('total');
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
        Schema::dropIfExists('sales_order_dtl');
    }
}
