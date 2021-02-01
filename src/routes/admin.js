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

router.get('/admin/profile', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

router.get('/admin/setting', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})


// Blog section
router.get('/admin/blogs/all', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

router.get('/admin/blogs/new', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

// Course Section
router.get('/admin/courses/all', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

router.get('/admin/courses/new', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

//User section
router.get('/admin/users/all', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

router.get('/admin/users/new', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

//Study Tip section
router.get('/admin/tips/all', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})

router.get('/admin/tips/new', checkLogin, async (req, res, next) => {
   res.render('./admin/index');
})


module.exports = router;