document.querySelector('#submit').addEventListener('click', function(e) {
  e.preventDefault();
  var orgEl = document.querySelector('#org');
  var emailEl = document.querySelector('#email');
  var org = orgEl.value;
  var email = emailEl.value;
  orgEl.value = emailEl.value = '';
  if (org.length && email.length && email.indexOf('@') > 0) {
    document.querySelector('#submit').style.display = 'none';
    document.querySelector('#success').style.display = 'block';
    axios.post('/auth/interested', { org: org, email: email });
  }
});

Array.from(document.querySelectorAll('.createForm')).forEach(function(cf) {
  cf.addEventListener('submit', function(e) {
    Array.from(document.querySelectorAll('.errorMessage')).forEach(function(em) { return em.innerHTML='&nbsp;'; });
    const em = document.querySelector('.errorMessage', cf);
    em.innerHTML = 'Working...';

    e.preventDefault();
    const name = document.querySelector('.name', cf).value;
    const email = document.querySelector('.email', cf).value;
    if (name.length && email.length) {
      axios.post('/create', {
        name,
        email
      }).then(function(response) {
        if (response.data.err) {
          var message = '';
          switch(response.data.err.code) {
            case 11000:
              message = "That group name already exists!";
              break;
            default:
              message = response.data.err.err || response.data.err;
          }
          console.log(message);
          em.innerHTML = message;

        } else {
          if (window.location.search.indexOf('subscribe') >= 0) {
            window.location = `/subscribe${window.location.search}`;
          } else {
            if (window.mobilecheck()) {
              window.location = `/groups/${response.data.group.slug}`;
            } else {
              window.location = `/analytics/${response.data.group.slug}`;
            }
          }
        }
      });
    }
  });
});
