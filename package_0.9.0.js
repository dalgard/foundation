Package.describe({
    summary: "Accounts Templates styled for Zurb Foundation.",
    version: "0.0.21",
    name: "splendido:accounts-templates-foundation",
    git: "https://github.com/splendido/accounts-templates-foundation.git",
});

Package.on_use(function(api, where) {
    api.use([
        'service-configuration@1.0.0',
        'accounts-base@1.0.0',
        'splendido:accounts-templates-core@0.0.21',
        'templating@1.0.4',
        'less@1.0.5'
    ], 'client');

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

    api.use([
        'service-configuration@1.0.0',
        'accounts-password@1.0.0',
        'accounts-base@1.0.0',
        'splendido:accounts-templates-core@0.0.21',
    ], 'server');

    api.imply([
        'splendido:accounts-templates-core@0.0.21',
        'service-configuration',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use([
        'splendido:accounts-templates-foundation',
        'splendido:accounts-templates-core@0.0.21',
    ]);
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-foundation_tests.js', ['client', 'server']);
});