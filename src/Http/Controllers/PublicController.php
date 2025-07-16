<?php

namespace Teamfurther\Localize\Http\Controllers;

use Illuminate\Routing\Controller;
use Teamfurther\Localize\Services\LangFileService;

class PublicController extends Controller
{
    private LangFileService $langFileService;

    public function __construct()
    {
        $this->langFileService = resolve(LangFileService::class);
    }

    public function serve()
    {
        $site = \Request::segment(3);
        $path = $this->langFileService->path($site);

        return response()
            ->file($path, [
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#no-cache
                // does not mean we don't cache it, just that it has to revalidate
                'Cache-Control' => 'no-cache',
            ]);
    }
}
