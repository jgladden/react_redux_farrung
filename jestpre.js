module.exports = {
  process: function(src, path) {
    if (path.match(/.scss/)) {
      // Ignoring require'd SASS files
      return '';
    }
    return src;
  }
};
