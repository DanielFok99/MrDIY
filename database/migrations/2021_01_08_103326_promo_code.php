<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PromoCode extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promo_code', function (Blueprint $table) {
            $table->id();
            $table->string('promo_code');
            $table->decimal('rate', 8, 2);
            $table->string('type');
            $table->dateTime('expired_date');
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
        Schema::dropIfExists('promo_code');
    }
}
