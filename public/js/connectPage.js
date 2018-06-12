(function() {

  var onBusinessClick = function(pid, bid, access_token) {
    return function(e) {
      window.location.href = window.location.origin + '/auth/connectAdAccount' + window.location.search + '&business_id=' + bid + '&fb_page_access_token=' + access_token + '&fb_page_id=' + pid;
    }
  }

  window.pageCode = function() {
    if (window.query.user_id && window.query.access_token) {
      FB.api('/' + window.query.user_id + '/accounts?fields=name,business,access_token', {
        access_token: window.query.access_token
      }, function(response) {
        console.log(response);
        document.querySelector('#loading').style.display = 'none';
        var ul = document.querySelector('#pages');
        var businesses = response.data.filter(function(page) {
          return page.business;
        });
        businesses.forEach(function(page) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          var name = document.createTextNode(page.name);
          a.appendChild(name);
          li.appendChild(a);
          li.addEventListener('click', onBusinessClick(page.id, page.business.id, page.access_token));
          ul.appendChild(li);
        });
      });
    } else {
      console.log('Bad query!');
      consoe.log(window.query);
    }
  };
})();
