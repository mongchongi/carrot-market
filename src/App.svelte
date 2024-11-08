<script>
  import Main from './pages/Main.svelte';
  import Login from './pages/Login.svelte';
  import Signup from './pages/Signup.svelte';
  import Write from './pages/Write.svelte';
  import Router from 'svelte-spa-router';
  import My from './pages/My.svelte';
  import NotFound from './pages/NotFound.svelte';
  import './css/style.css';
  import { user$ } from './store';
  import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
  import { onMount } from 'svelte';

  let isLoading = true;

  const auth = getAuth();

  const checkLogin = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      isLoading = false;
      return;
    }

    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  };

  const routes = {
    '/': Main,
    '/signup': Signup,
    '/Write': Write,
    '/my': My,
    '*': NotFound,
  };

  onMount(() => {
    checkLogin();
  });
</script>

{#if isLoading}
  <div>로딩 중...</div>
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
