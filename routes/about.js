const express = require('express');
const router = express.Router();

// This / is the root of About page
router.get('/', (req, res) => {
    res.render('about', {
        locals: {
            pageTitle: 'Node Scaffolding | Hugh Caluscusin',
            coverTitle: 'This is the About Page - Test only',
            repoAuthor: 'Hugh Caluscusin',
            repoAuthorSite: 'https://www.melodiccrypter.com/',
            repoAuthorGitLink: 'https://github.com/MelodicCrypter',
            repoLink: 'https://github.com/MelodicCrypter/MVC-Express-MongoDB-es6Renderer',
            handle: '@MelodicCrypter'
        }
    });
});

export default router;
