(async () => {
  if (window.config.username && window.config.password) {
    try {
      await window.authenticate(window.config.username, window.config.password);
    } catch (error) {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }

  async function initLogin(e) {
    e.preventDefault();

    let y = document.getElementById('username').value;
    if (y == "")
    {
      document.getElementById('username').placeholder="USERNAME REQUIRED";
      document.getElementById('username').style="background-color: #ffbbbb;";
      document.getElementById('password').placeholder="PASSWORD REQUIRED";
      document.getElementById('password').style="background-color: #ffbbbb;";
      return;
   };

    let x = document.getElementById('password').value;
    if (x == "")
    {
      document.getElementById('password').placeholder="PASSWORD REQUIRED";
      document.getElementById('password').style="background-color: #ffbbbb;";
      return;
    };

    try {
      // collect all information
      const { value: username } = document.getElementById('username');
      const { value: password } = document.getElementById('password');
      const hashedPassword = window.MD5(password);

      await window.authenticate(username, hashedPassword);

      localStorage.setItem('username', username);
      localStorage.setItem('password', hashedPassword);

      // redirect to contacts page...
      location.href = '/contacts.html';
    } catch (error) {
      console.error(error.message);
    }
  }

  async function initSignup(e) {
    e.preventDefault();

    let y = document.getElementById('username').value;
    if (y == "")
    {
      document.getElementById('username').placeholder="USERNAME REQUIRED";
      document.getElementById('username').style="background-color: #ffbbbb;";
      document.getElementById('password').placeholder="PASSWORD REQUIRED";
      document.getElementById('password').style="background-color: #ffbbbb;";
      return;
    };

    let x = document.getElementById('password').value;
    if (x == "")
    {
      document.getElementById('password').placeholder="PASSWORD REQUIRED";
      document.getElementById('password').style="background-color: #ffbbbb;";
      return;
    };

    try {
      // collect all information
      const { value: username } = document.getElementById('username');
      const { value: password } = document.getElementById('password');
      const hashedPassword = window.MD5(password);

      await window.signup(username, hashedPassword);

      localStorage.setItem('username', username);
      localStorage.setItem('password', hashedPassword);

      // redirect to contacts page...
      location.href = '/contacts.html';
    } catch (error) {
      console.error(error.message);
    }
  }
  document.getElementById('loginButton').addEventListener('click', initLogin);
  document.getElementById('signupButton').addEventListener('click', initSignup);
})();
