<?php

namespace Teamfurther\Localize\Services;

use Illuminate\Support\Facades\File;
use Statamic\Facades\Site;

class LangFileService
{
    public function path(string $site): string
    {
        $lang = Site::get($site);

        return base_path(config('localize.folder')."/{$lang->lang()}.json");
    }

    public function get(string $site): array
    {
        $path = LangFileService::path($site);

        if (! File::exists($path)) {
            return [];
        }

        return json_decode(File::get($path), true);
    }

    public function put(string $site, array $content): void
    {
        $json = json_encode(
            $content,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        );

        File::put(LangFileService::path($site), $json);
    }
}
