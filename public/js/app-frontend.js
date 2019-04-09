// Library Modules
import $ from "jquery";

// Local App Modules
import multiplier from '../../util/multiplier-test-module';

// Images
import testImg from '../../public/img/testimg.jpg';

// SCSS or CSS
import '../styles/app-main.scss';


// ========================================================================
// Put all your stuff here
// You can delete ALL below, this is just to test WebPack bundler and Babel work
const n = multiplier(4);

// using the image
const imgTag = document.getElementById('testImg');
imgTag.src = testImg;

// Check console log
console.log('God is good!!!');
console.log(n);
