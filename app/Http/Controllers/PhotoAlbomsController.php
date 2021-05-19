<?php

namespace App\Http\Controllers;

use App\Photos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\PhotoAlboms;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
class PhotoAlbomsController extends Controller
{
    //

    public function index($id)
    {
        return view('photo', compact($id));
    }

    public function getPhotos($id) {
        return response()->json(Photos::where('albom_id', '=', $id)->get());
    }
    public function fileStore(Request $request)
    {
        $upload_path = public_path('upload');
        $file_name = $request->file->getClientOriginalName();
        $generated_new_name = time() . '.' . $request->file->getClientOriginalExtension();
        $request->file->move($upload_path, $generated_new_name);
        $photo= Photos::create(array(
            'albom_id' => $request->albom_id,
            'photo_url' => "/upload/".$generated_new_name,
        ));
        return response()->json(['success' => 'You have successfully uploaded "' . $file_name . '"']);
    }
    public function addPhoto(Request $request) {
        $photo= Photos::create($request->all());
        return response()->json($photo);
    }

    public function delete($id) {
        $photo = Photos::where('id', '=', $id)->delete();
        return response()->json($photo);
    }

    public function addAlbom(Request $request){

        $validator = validator($request->all(),
        [
            'name' => 'required',
        ]
        );
        $alboms = new PhotoAlboms();

        if(!$validator->fails() ){
            $alboms->name = $request->name;
            $alboms->description = $request->description;
            $alboms->public = $request->public;
            $alboms->user_id = $request->user_id;
            $alboms->save();

            if($alboms){
                return response()->json($alboms)
                    ->setStatusCode('200');
            }

        }
        return response()
            ->json($validator->errors())
            ->setStatusCode(400, 'Bad Request');

    }

    public function editAlbom(Request $request , $id){

        $validator = validator($request->all(),
            [
                'name' => 'required',
                'description' => 'required',
            ]
        );


        if(!$validator->fails() ){


            $albom = DB::table('photo_alboms')
                ->where('id', $id)
                ->update(['name' => $request->name , 'description' => $request->description]);



            if($albom){
                return response()->json($albom)
                    ->setStatusCode('200');
            }

        }
        return response()
            ->json($validator->errors())
            ->setStatusCode(400, 'Bad Request');

    }

    public function getAlbom($id)
    {

        $alboms = PhotoAlboms::where(['user_id' => $id])->get();

        return response()
            ->json($alboms)
            ->setStatusCode(200, 'Success');
    }
    public function removeAlbom($id)
    {

        //$alboms = PhotoAlboms::where(['id' => $id])->get();
        DB::delete('delete from photo_alboms where id = ?',[$id]);

        return response()
            ->json('deleted')
            ->setStatusCode(200, 'Success');
    }
}
