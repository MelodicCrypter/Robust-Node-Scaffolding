// JQUERY
import $ from 'jquery';

// UTILITIES
import multiplier from '../../util/multiplier-sample-module';

// IMAGES
import gitLogo from '../img/git.png';

// SCSS or CSS
import '../styles/app-main.scss';


// =======================================================================
// LogRocket - on production only
// You can delete this one if you will not use LogRocket
// if use this, etup LOGROCKET_APP_ID on your production server
import LogRocket from 'logrocket';

LogRocket.init(process.env.LOGROCKET_APP_ID);


// ========================================================================
// Put all your logic stuff for frontend here
// You can delete and replace ALL below, this is just to test WebPack bundler and Babel work
const n = multiplier(4);

// using the image
const imgTag = document.getElementById('testImg');
imgTag.src = gitLogo;

// Check console log
console.log('God is good!!!');
console.log(process.env.LOGROCKET_APP_ID);
