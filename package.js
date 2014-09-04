Package.describe({
    summary: "Accounts Templates styled for Zurb Foundation.",
    version: "0.0.25",
    name: "splendido:accounts-templates-foundation",
    git: "https://github.com/splendido/accounts-templates-foundation.git",
});

Package.on_use(function(api, where) {
    if (api.versionsFrom) {
        api.use([
            'service-configuration@1.0.0',
            'accounts-base@1.0.0',
            'splendido:accounts-templates-core@0.0.25',
            'templating@1.0.4',
            'less@1.0.5'
        ], 'client');
        api.use([
            'service-configuration@1.0.0',
            'accounts-password@1.0.0',
            'accounts-base@1.0.0',
            'splendido:accounts-templates-core@0.0.25',
        ], 'server');

        api.imply([
            'splendido:accounts-templates-core@0.0.25',
            'service-configuration',
        ], ['client', 'server']);
    }
    else{
        api.use([
            'service-configuration',
            'accounts-base',
            'accounts-templates-core',
            'templating',
            'less'
        ], 'client');
        api.use([
            'service-configuration',
            'accounts-password',
            'accounts-base',
            'accounts-templates-core',
        ], 'server');

        api.imply([
            'accounts-templates-core',
            'service-configuration',
        ], ['client', 'server']);
    }

    api.add_files([
        'lib/at_form.html',
        'lib/at_form.js',
        'lib/at_input.html',
        'lib/at_input.js',
        'lib/at_social.html',
        'lib/at_social.js',
        'lib/full_page_at_form.html',
        'lib/at_foundation.less'
    ], ['client']);
});

Package.on_test(function(api) {
    if (api.versionsFrom) {
        api.use([
            'splendido:accounts-templates-foundation',
            'splendido:accounts-templates-core@0.0.25',
        ]);
    }
    else{
        api.use([
            'accounts-templates-foundation',
            'accounts-templates-core',
        ]);
    }
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-foundation_tests.js', ['client', 'server']);
});