const express = require('express');
const router = express.Router();

// The / is the root
router.get('/', (req, res) => {
    res.render('index', {
        locals: {
            pageTitle: 'Node Scaffolding | Hugh Caluscusin',
            coverTitle: 'MVC-Express-MongoDB-es6Renderer',
            coverSub: 'A QUICK NODE SCAFFOLDING, MVC ARCHITECTURE',
            repoAuthor: 'Hugh Caluscusin',
            repoAuthorSite: 'https://www.melodiccrypter.com/',
            repoAuthorGitLink: 'https://github.com/MelodicCrypter',
            handle: '@MelodicCrypter'
        }
    });
});

export default router;
