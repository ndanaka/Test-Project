// Wrapper function to handle async errors in Express routes
module.exports = (asyncFunction) => (req, res, next) => {
  Promise.resolve(asyncFunction(req, res, next)).catch(next);
};
