"use strict";

var express = require('express');

var router = express.Router();
router.get('/login', function (req, res, next) {
  res.render('./admin/login');
});
router.post('/login', function (req, res, next) {});
router.get('/log-out', function (req, res, next) {
  res.redirect('/login');
});
router.post('/log-out', function (req, res, next) {
  res.redirect('/login');
});
router.get('/sign-up', function (req, res, next) {
  res.render('./admin/sign-up');
});
router.post('/sign-up', function (req, res, next) {});
router.get('/fogot-password', function (req, res, next) {});
router.post('/fogot-password', function (req, res, next) {});
router.get('/verify-account');
module.exports = router;