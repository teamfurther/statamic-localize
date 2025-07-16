<?php

namespace Teamfurther\Localize\Http\Controllers;

use Statamic\Facades\Site;
use Illuminate\Http\Request;
use Teamfurther\Localize\Services\LangFileService;

class DashboardController
{
    private LangFileService $langFileService;

    public function __construct()
    {
        $this->langFileService = resolve(LangFileService::class);
    }

    public function index()
    {
        return view('localize::dashboard', [
            'site' => Site::selected()->handle(),
            'sites' => $this->getSites(),
        ]);
    }

    public function update(Request $request)
    {
        Site::all()->each(function (string $key) use ($request) {

            $translation = $request->input('translations');

            if (empty($translation) || empty($translation[$key])) {
                return;
            }

            $original = $this->langFileService->get($key);

            $updated = array_replace_recursive($original, $translation[$key]);

            $this->langFileService->put($key, $updated);
        });

        return response()->json([
            'status' => __('Saved'),
            'sites' => $this->getSites(),
        ]);
    }

    private function getSites()
    {
        return Site::all()->map(fn ($site) => [
            'handle' => $site->handle(),
            'name' => $site->name(),
            'translations' => $this->langFileService->get($site->handle()),
        ]);
    }
}
