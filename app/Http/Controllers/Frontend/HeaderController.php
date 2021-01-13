<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HeaderController extends Controller
{
    public function index()
    {

        $category_hdr = DB::table('category_hdr')
            ->select('category_hdr_description','category_hdr_id')
            ->where('category_hdr_active','=','yes')
            ->get();

//        $collection = collect(['hdr','dtl']);
//        $combined = $collection->combine([$category_hdr,$result]);
//        $combined->all();
        $collection = collect();
        $collection1 = collect();
        foreach ($category_hdr as $hdr) {


//            foreach ($result as $dtl){
//                $collection ->push(['dtl'=>$dtl->category_dtl_description]);
//            }
            $hdr_id = $hdr->category_hdr_id;
            $result = DB::table('category_hdr')
                ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
                ->select('category_dtl.category_dtl_description')
                ->where('category_hdr.category_hdr_active', '=', 'yes')
                ->where('category_dtl.category_dtl_active', '=', 'yes')
                ->where('category_hdr.category_hdr_id', '=', $hdr_id)
                ->get();


            $collection->push(['hdr' => $hdr->category_hdr_description, 'dtl' => $result]);

            $collection1 = collect(['category'=>$collection]);
            $collection ->all();
//            $collection1 ->push(['category'=>$collection]);
//            $collection1 ->all();

        }


        return view('pages.frontend.index',['header'=>$collection1]);
//        return response($collection1);
    }

    public  function test(){
        $category_hdrs = DB::table('category_hdr')
            ->select('category_hdr_description','category_hdr_id')
            ->where('category_hdr_active','=','yes')
            ->get();

//        $hdr_id = $hdr->category_hdr_id;
//        $hdr_id = 1;
//        $result = DB::table('category_hdr')
//            ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
//            ->select('category_dtl.category_dtl_description')
//            ->where('category_hdr.category_hdr_active', '=', 'yes')
//            ->where('category_dtl.category_dtl_active', '=', 'yes')
//            ->where('category_hdr.category_hdr_id', '=', $hdr_id)
//            ->get();

        $categoryHdr = collect();
        foreach ($category_hdrs as $item){
            $hdr_id =  $item->category_hdr_id;
            $details = collect();
            $category_dtl = DB::table('category_hdr')
                ->join('category_dtl', 'category_dtl.category_hdr_id', '=', 'category_hdr.category_hdr_id')
                ->select('category_dtl.category_dtl_description','category_dtl.category_dtl_id')
                ->where('category_hdr.category_hdr_active', '=', 'yes')
                ->where('category_dtl.category_dtl_active', '=', 'yes')
                ->where('category_hdr.category_hdr_id', '=', $hdr_id)
                ->get();

            foreach ($category_dtl as $dtlItem){
                $details->push($dtlItem);
            }


            $item->details = $details;
            $categoryHdr->push($item);
//            dd($item);
        }

//        echo  $categoryHdr;
        return view('pages.frontend.index',['header'=>$categoryHdr]);
    }
}
