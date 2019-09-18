(async () => {
  if (window.config.username && window.config.password) {
    try {
      await window.authenticate(window.config.username, window.config.password);
    } catch (error) {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }
  
  async function initLogin() {
    if (document.getElementById('username') != "") {
      if (document.getElementById('password') != "") {
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
  }
}
  async function initSignup() {
    if (document.getElementById('username') != "") {
      if (document.getElementById('password') != "") {
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
    }
  }
})();