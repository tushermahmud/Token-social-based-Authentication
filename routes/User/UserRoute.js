const router = require("express").Router();
const {myProfile,getUserById} = require('../../controllers/UserController')
const authCheck = require('../../middlewares/auth')


router.get('/my-profile',authCheck,myProfile);
router.get("/:userId", authCheck, getUserById);
module.exports = router;
