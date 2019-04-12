// Controller for your about page
const renderAbout = (req, res) => {
    res.render('about', {
        // for es6Renderer
        locals: {
            pageTitle: 'Node Scaffolding | Hugh Caluscusin',
            coverTitle: 'This is the About Page - Test only',
            repoAuthor: 'Hugh Caluscusin',
            repoAuthorSite: 'https://www.melodiccrypter.com/',
            repoAuthorGitLink: 'https://github.com/MelodicCrypter',
            repoLink: 'https://github.com/MelodicCrypter/Robust-Node-Scaffolding',
            handle: '@MelodicCrypter',
        },
    });
};

module.exports = { renderAbout };
