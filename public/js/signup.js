(function() {

  var form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.querySelector('#email').value;
    var pass = document.querySelector('#pass').value;
    var confirm = document.querySelector('#confirm').value;
    if (email.indexOf('@') >= 0 && pass === confirm && window.query.access_token.length && window.query.user_id.length) {
      axios.post('/auth/signup', {
        fb_exchange_token: window.query.access_token,
        user_id: window.query.user_id,
        email: email,
        pass: pass
      }).then(function(response) {
        if (response.data.success) {
          window.location.href = window.location.origin + '/auth/connectPage' + window.location.search;
        } else {
          console.log(response.data.err);
        }
      }).catch(function(err) {
        console.log(err);
      })
    } else {
      console.log('Invalid form');
    }
  })
})();
