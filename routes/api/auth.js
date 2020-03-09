const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../modules/User');

// @ route       GET api/auth
// @ desc        Test route
// @access       Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findbyId(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
