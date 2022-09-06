<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function latest($max){
        $posts = Post::where('is_published', true)
            ->orderBy('published_at', 'DESC')
            ->orderBy('created_at', 'DESC')
            ->get();
        return $posts->take($max);
    }

    public function paginate($page, $limit){
        $posts = Post::where('is_published', true)
            ->orderBy('published_at', 'DESC')
            ->orderBy('created_at', 'DESC')
            ->get();

        return $posts->skip(($page - 1) * $limit)->take($limit)->flatten();
    }

    public function count(){
        return response()->json([
            'total' => Post::where('is_published', true)->get()->count()
        ]);
    }

    public function show($slug){
        $post = Post::where('slug', $slug)->get();
        return $post->isNotEmpty() ? $post->first(): response()->json(['message' => 'Not Found'], 404);
    }
}
