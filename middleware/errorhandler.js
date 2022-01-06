const customError = require("../errors/customerror");

const errorHandler = (err, res, req, next) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({msg: 'Something went wrong from server. Please try again.'});
};

module.exports = errorHandler;
