const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
   res.render('./admin/login');
})

router.post('/login', (req, res, next) => {

})

router.get('/log-out', (req, res, next) => {
   res.redirect('/login');
})
router.post('/log-out', (req, res, next) => {
   res.redirect('/login');
})

router.get('/sign-up', (req, res, next) => {
   res.render('./admin/sign-up');
})

router.post('/sign-up', (req, res, next) => {

})

router.get('/fogot-password', (req, res, next) => {

})

router.post('/fogot-password', (req, res, next) => {

})

router.get('/verify-account')

module.exports = router;