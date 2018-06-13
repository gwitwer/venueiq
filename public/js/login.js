(function() {
  window.pageCode = function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      axios.post('/auth/login', {
        email: document.querySelector('#email').value,
        pass: document.querySelector('#pass').value
      }).then(function(response) {
        // Verify they have all the right stuff, otherwise redirect to the correct signup page.
        // Go to updateUserAndRedirect

        // business should not be required.
        if (response.data.success) {
          window.location.href = window.location.origin + '/auth/updateUserDataAndRedirect';
          // if (response.data.user.fb_adaccount) {
          //   // They have everything.
          //   window.location.href = window.location.origin;
          // } else if (response.data.user.fb_business) {
          //   // They have a business but no adAccount.
          // } else if (response.data.user.access_token) {
          //   // They have an access token but no business.
          //   window.location.href = window.location.origin + '/auth/connectPage'
          // } else {
          //   console.log('Not even an access token?', reponse.data.user);
          // }
        } else {
          console.log(response);
        }
      }).catch(console.log);
    });
  };
})();
