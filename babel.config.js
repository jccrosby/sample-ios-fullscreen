module.exports = function(api) {

    api.cache(true);

    const plugins = ['@babel/plugin-proposal-class-properties'];
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: 'last 2 versions, ie 11',
                debug: false,
                modules: false,
                useBuiltIns: false,
            },
        ],
        '@babel/preset-react',
    ];
    const env = {
        'test': {
            'presets': [
                [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'usage',
                        debug: false,
                    },
                ],
            ],
        },
    };

    return {

        plugins,
        presets,
        env,

    };

}
