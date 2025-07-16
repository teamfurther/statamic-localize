module.exports = {
    prefix: 'statamic-localize-',
    important: true,
    content: [
        './resources/views/**/*.{html,php}',
        './resources/js/**/*.{vue,js}',
    ],
    corePlugins: {
        preflight: false,
    },
}