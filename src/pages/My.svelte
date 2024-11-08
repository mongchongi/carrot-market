<script>
  import Footer from '../components/Footer.svelte';
  import { user$ } from '../store';

  const logout = () => {
    user$.set(null); // 로그인 정보 제거
    localStorage.removeItem('token'); // 로컬스토리지에 저장된 토큰 제거
  };
</script>

<div>나의 당근</div>
<button class="logout-btn" on:click={logout}>로그아웃</button>
<Footer location="my" />

<style>
  .logout-btn {
    border: 1px solid grey;
    border-radius: 3px;
    padding: 5px 16px;
    cursor: pointer;
  }

  .logout-btn:active {
    background: rgba(128, 128, 128, 0.418);
  }
</style>
