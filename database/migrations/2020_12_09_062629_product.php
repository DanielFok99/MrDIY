<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Product extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->string('product_code')->unique()->primary();
            $table->string('product_description');
            $table->string('price');
            $table->string('category_dtl_id');
            $table->string('quantity');
            $table->string('rate');
            $table->string('product_status');
            $table->string('product_active');
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
        //
    }
}
