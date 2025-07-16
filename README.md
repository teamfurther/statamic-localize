# Localize

> Localize allows you to easily translate i18n files within Statamic.

## Features

- **In-Panel Translation:** Translate i18n files directly within your Statamic control panel.
- **Laravel Localization Support:** Works with Laravel's JSON localization files.
- **Custom Files:** You can define the folder and files to be used for translations.
- **JSON API Exposure:** Optionally expose your i18n files as a JSON API for use in frontends or other services.

## Installation

You can install Localize using Composer:

From your project root, run:

```bash
composer require teamfurther/statamic-localize
```

## Configuration


### Publishing Configuration

After installation, you may wish to publish the package configuration:

```bash
php artisan vendor:publish --provider="Teamfurther\\Localize\\LocalizeServiceProvider"
```

This will create a `localize.php` config file in your `config` directory.

### Git Integration

If you use Statamic's Git integration and want to track changes to your language files, add the following path to `config/statamic/git.php`:

```php
'paths' => [
    // ...
    base_path('lang'),
],
```

## API

If you enable the JSON API, your translations can be accessed programmatically. See the package configuration for details.
If not changed the default route is `/api/localize/{lang}.json`

## Development

### Building Assets

This package uses Vite and Vue 3 for its frontend assets. To build the assets:

1. Install dependencies:
```bash
npm install
```

2. For development (with hot reloading):
```bash
npm run dev
```

3. For production build:
```bash
npm run build
```

## Support

For issues, feature requests, or contributions, please open an issue or pull request on [GitHub](https://github.com/teamfurther/statamic-localize).
