const { greet } = require('../controllers/greet');
const { register } = require('../controllers/register');
const { login } = require('../controllers/login');
const { addpost } = require('../controllers/addpost');
const { getpost } = require('../controllers/getposts');

const router = require('express').Router();

router.route('/').get(greet);
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/addpost').post(addpost)
router.route('/getposts').get(getpost)



module.exports = router;