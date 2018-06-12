(function() {

  var onBusinessClick = function(id) {
    return function(e) {
      axios.post('/api/user/update', {
        fb_adaccount: id,
        fb_page_id: window.query.fb_page_id,
        fb_business: window.query.business_id,
      }).then(function(response) {
        if (response.data.success) {
          window.location = window.location.origin + '/auth/updateUserDataAndRedirect';
        } else {
          console.log(response);
        }
      });
    }
  };

  window.pageCode = function() {
    if (window.query.user_id && window.query.access_token) {
      FB.api('/' + window.query.user_id + '/adaccounts?fields=account_id,id,name,business', {
        access_token: window.query.access_token
      }, function(response) {
        console.log(response);
        document.querySelector('#loading').style.display = 'none';
        var ul = document.querySelector('#pages');
        var adAccounts = response.data.filter(function(adAccount) {
          return adAccount.business && adAccount.business.id === window.query.business_id;
        });
        adAccounts.forEach(function(adAccount) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          var name = document.createTextNode(adAccount.name);
          a.appendChild(name);
          li.appendChild(a);
          li.addEventListener('click', onBusinessClick(adAccount.id));
          ul.appendChild(li);
        });
      });
    } else {
      console.log('Bad query!');
      consoe.log(window.query);
    }
  };
})();
