const path = require('path');

// Controller for your homepage or index
const renderHome = (req, res) => {
    res.render('index', {
        // for es6Renderer
        locals: {
            pageTitle: 'Node Scaffolding | Hugh Caluscusin',
            coverTitle: 'Robust-Node-Scaffolding',
            repoAuthor: 'Hugh Caluscusin',
            repoAuthorSite: 'https://www.melodiccrypter.com/',
            repoAuthorGitLink: 'https://github.com/MelodicCrypter',
            repoLink: 'https://github.com/MelodicCrypter/Robust-Node-Scaffolding',
            handle: '@MelodicCrypter',
        },
        partials: {
            header: path.resolve('views/partials/header.html'),
            footer: path.resolve('views/partials/footer.html'),
        },
    });
};

module.exports = { renderHome };
