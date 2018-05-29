(function() {
  window.query = {};
  var search = window.location.search.substring(1).split('&');
  search.forEach(function(term) {
    var splitTerm = term.split('=');
    window.query[splitTerm[0]] = splitTerm[1];
  });
})();
