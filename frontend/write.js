const writeForm = document.getElementById('write-form');

const handleSubmitForm = async (e) => {
  e.preventDefault();
  const body = new FormData(writeForm);
  body.append('insertAt', new Date().getTime());

  // 서버에 데이터 전송
  try {
    const response = await fetch('/items', {
      method: 'POST',
      body,
    });

    const data = await response.json();
    console.log(data);

    if (data === '200') {
      window.location.pathname = '/';
    }
  } catch (error) {
    console.error(error);
  }
};

writeForm.addEventListener('submit', handleSubmitForm);
