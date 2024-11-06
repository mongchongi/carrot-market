const signupForm = document.querySelector('#signup-form');
const info = document.querySelector('#info');

const checkPw = () => {
  const formData = new FormData(signupForm);
  const password = formData.get('password');
  const passwordCheck = formData.get('password-check');

  if (password === passwordCheck) {
    return true;
  } else {
    return false;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(signupForm);
  const sha256Password = sha256(formData.get('password'));
  formData.set('password', sha256Password);

  if (checkPw()) {
    const response = await fetch('/signup', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data === '200') {
      alert('회원가입 성공');
      window.location.pathname = '/login.html';
    }
  } else {
    info.innerText = '비밀번호가 일치하지 않습니다.';
    info.style.color = 'red';
  }
};

signupForm.addEventListener('submit', handleSubmit);
