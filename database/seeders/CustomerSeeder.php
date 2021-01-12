<?php

namespace Database\Seeders;

use DB;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('ms_MY');

        $gender = $faker->randomElement([0, 1]);

        foreach (range(1, 10) as $index) {
            DB::table('customer')->insert([
                'email' => $faker->email,
                'customer_firstname' => $faker->firstName(),
                'customer_lastname' => $faker->lastName(),
                'gender' => $gender,
                'contact' => $faker->phoneNumber,
                'password' => Hash::make('password'),
                'status' => 'Active',
                'address' => $faker->address,
                'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
            ]);
        }
    }
}
