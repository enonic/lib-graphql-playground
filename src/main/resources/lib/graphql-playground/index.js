const portalLib = require('/lib/xp/portal');

const mustacheLib = require('/lib/mustache');

function render(options) {
    const view = resolve('./template.html');
    return mustacheLib.render(view, {
        assetsUrl: portalLib.assetUrl({path: 'graphql-playground'})
    });
}

exports.render = render;