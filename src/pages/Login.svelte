<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { user$ } from '../store.js';

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div>
  <div>로그인하기</div>
  <button class="login-btn" on:click={loginWithGoogle}>
    <img
      class="google-icon"
      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
      alt="google icon"
    />
    <div>Google로 시작하기</div>
  </button>
</div>

<style>
  .login-btn {
    border: 1px solid grey;
    border-radius: 3px;
    padding: 5px 15px 5px 5px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
  }

  .google-icon {
    width: 40px;
  }
</style>
