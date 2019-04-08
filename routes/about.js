const express = require('express');
const router = express.Router();

// This / is the root of About page
router.get('/', (req, res) => {
    res.render('about', {
        locals: {
            pageTitle: 'Node Scaffolding | Hugh Caluscusin',
            coverTitle: 'This is an About Page - Test only',
            coverSub: '',
            repoAuthor: 'Hugh Caluscusin',
            repoAuthorSite: 'https://www.melodiccrypter.com/',
            repoAuthorGitLink: 'https://github.com/MelodicCrypter',
            handle: '@MelodicCrypter'
        }
    });
});

export default router;
