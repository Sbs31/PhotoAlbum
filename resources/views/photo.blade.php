@extends('layouts.app')

@section('content')


    <div class="container">
        <div class="row justify-content-center">
            <div class="col">


                    <photo-album
                        :albom_id="{{Request::route('id')}}"
                        :userid="{{ Auth::user()->id }}"
                    ></photo-album>

            </div>
        </div>
    </div>


@endsection

