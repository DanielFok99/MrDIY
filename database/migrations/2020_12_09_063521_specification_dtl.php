<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SpecificationDtl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('specification_dtl', function (Blueprint $table) {
            $table->string('specification_dtl_id')->unique()->primary();
            $table->string('specification_hdr_id');
            $table->string('specification_dtl_label');
            $table->string('specification_dtl_description');
            $table->string('specification_dtl_active');
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
