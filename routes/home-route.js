// Controller for this route
import homeController from '../controllers/pages/home-controller';

// Express Route
const express = require('express');

const router = express.Router();

// The '/' is the root for your homepage
// So if user visits index, this router will call the pages controller for home
router.get('/', homeController.renderHome);

export default router;
