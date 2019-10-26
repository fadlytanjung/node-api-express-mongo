'use strict';

exports.ok = function (values, res) {
  let data = {
    'status': 'success',
    'data': values,
    'error': null
  };
  res.status(200).json(data);
  res.end();
};

exports.success = function (values, res) {
  let data = {
    'status': 'success',
    'data': values,
    'error': null
  };
  res.status(201).json(data);
  res.end();
};

exports.error = function (error, res) {
  let data = {
    'status': 'error',
    'message': error,
    'error': true
  };
  res.status(403).json(data);
  res.end();
};
