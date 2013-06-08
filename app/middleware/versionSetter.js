module.exports = function(options) {
  return function(req,res,next) {
    req.vaporReturnVal = {"version": App.version}
    next()
  };
};
