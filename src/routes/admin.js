const express = require('express');

const router = express.Router();

const checkLogin =  async (req, res, next) => {
   // if(req.Authenticate()){
      // res.redirect('/login');
   // } else {
      next();
   // }
}
router.get('/dashboard', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

module.exports = router;