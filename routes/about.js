// Controller for this route
import about from '../controllers/pages/about-controller';

// Express Route
const express = require('express');

const router = express.Router();

// The '/' is the root for your About page
// So if user visits /about, this router will call the pages controller for about
router.get('/', about);

export default router;
