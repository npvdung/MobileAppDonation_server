var express = require('express');
var bodyParser = require('body-parser');

var Donation = require('../models/donation');
const { default: mongoose } = require('mongoose');

var router = express.Router();

router.use(bodyParser.json());

router.route('/')
/**
 * get all donations
 */
.get((req, res, next) => {
  Donation.find({})
  .then((donations) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(donations);
  }, (err) => next(err))
  .catch((err) => next(err))
})
.post((req, res, next) => {
  Donation.create({
    method: req.body.method,
    amount: req.body.amount,
    upvotes: req.body.upvotes
  })
  .then((donation) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      message: 'Created a new donation successfully',
      donation: donation
    })
  }, (err) => next(err))
  .catch((err) => next(err))
})
.delete((req, res, next) => {
  Donation.deleteMany({})
  .then((donations) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(donations);
  }, (err) => next(err))
  .catch((err) => next(err))
});

router.route('/:donationId')
.get((req, res, next) => {
  var _iddd = req.params.donationId;
  _iddd = _iddd.slice(1, _iddd.length);
  Donation.findById(_iddd)
  .then((donation) => {
    res.statusCode = 200;
    res.setHeader('Context-Type', 'application/json');
    res.json(donation);
  }, (err) => next(err))
  .catch((err) => next(err))
})
.delete((req, res, next) => {
  var _iddd = req.params.donationId;
  _iddd = _iddd.slice(1, _iddd.length);
  Donation.findByIdAndDelete(_iddd)
  .then((donation) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      message: 'Deleted donation successfully',
      donation: donation
    })
  }, (err) => next(err))
  .catch((err) => next(err))
});

module.exports = router;
