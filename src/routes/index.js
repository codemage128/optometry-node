const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
   res.render('index')
})

router.get('/about-us', async(req, res, next) => {
   res.render('about-us');
})

router.get('/contact-us', async(req, res, next) => {
   res.render('contact');
})


module.exports = router;
