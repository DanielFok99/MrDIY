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
//            $table->id();
            $table->string('product_id')->unique()->primary();
//            $table->id('product_id');
            $table->string('product_name');
            $table->text('product_description');
            // $table->text('specification');
            $table->string('price');
            $table->string('category_dtl_id');
            $table->string('quantity');
            $table->string('rate');
            $table->string('image_url');
            $table->string('gallery_url');
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
        Schema::dropIfExists('product');
    }
}
