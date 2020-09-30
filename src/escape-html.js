module.exports = string => {
  return string.replace(/[&<>\\'"']/, fragment => {
    switch (fragment.match) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case '\'': return '&#39;';
      case '\\': return '&#92;';
    }
  });
};
