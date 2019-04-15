module.exports = {
    apps: [{
        name: 'Robust-Node-Scaffolding',
        script: './app-back-bundle.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        },
    }],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'https://github.com/MelodicCrypter/Robust-Node-Scaffolding',
            path: './app-back-bundle.js',
        },
    },
};
