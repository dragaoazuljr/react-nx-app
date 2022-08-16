const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config, context) => {
    return {
        ...config,
        devServer: {
            ...config.devServer,
            proxy: {
                'http://localhost:4201': 'http://localhost:4201'
            },
        },
        plugins: [
            ...config.plugins,
            new ModuleFederationPlugin({
                name: 'reactRoot',
                remotes: {
                    child: 'remote@http://localhost:4201/remoteEntry.js'
                },
                shared: {
                    ...deps,
                    react: {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps.react
                    },
                    'react-dom': {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps['react-dom'],
                    },
                },
            }),
        ],
    };
};