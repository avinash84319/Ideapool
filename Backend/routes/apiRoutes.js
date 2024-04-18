const { greet } = require('../controllers/greet');
const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { addpost } = require('../controllers/addpost');
const { getposts } = require('../controllers/getposts');
const { addfav } = require('../controllers/addfav');
const { getfavposts } = require('../controllers/getfavposts')

const router = require('express').Router();

router.route('/').get(greet);
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/addpost').post(addpost)
router.route('/getposts').get(getposts)
router.route('/addfav').post(addfav)
router.route('/getfavposts').post(getfavposts)



module.exports = router;