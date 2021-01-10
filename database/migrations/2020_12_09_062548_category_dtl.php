<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CategoryDtl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_dtl', function (Blueprint $table) {
            $table->string('category_dtl_id')->unique()->primary();
            $table->string('category_hdr_id');
            $table->string('category_dtl_description');
            $table->string('category_dtl_active');
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
        Schema::dropIfExists('category_dtl');
    }
}
