const loginForm = document.querySelector('#login-form');
const info = document.querySelector('#info');

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const sha256Password = sha256(formData.get('password'));
  formData.set('password', sha256Password);

  const response = await fetch('/login', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  const accessToken = data.access_token;

  window.localStorage.setItem('token', accessToken);
  alert('로그인 성공');

  window.location.pathname = '/';
};

loginForm.addEventListener('submit', handleSubmit);
