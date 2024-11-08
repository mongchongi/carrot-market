<script>
  export let location;

  const moveToHome = () => {
    window.location.hash = '/';
  };

  const moveToMy = () => {
    window.location.hash = '/my';
  };
</script>

<footer>
  <div class="footer-block">
    <button class="footer-icon-area" on:click={moveToHome}>
      {#if location === 'home'}
        <img src="./assets/home.svg" alt="home" />
      {:else}
        <img src="./assets/home-white.svg" alt="home" />
      {/if}
      <div>홈</div>
    </button>
    <div class="footer-icon-area">
      <img src="./assets/document-text.svg" alt="document-text" />
      <div>동네생활</div>
    </div>
    <div class="footer-icon-area">
      <img src="./assets/map-pin.svg" alt="map-pin" />
      <div>내 근처</div>
    </div>
    <div class="footer-icon-area">
      <img src="./assets/chat-bubble-left-right.svg" alt="chat-bubble-left-right" />
      <div>채팅</div>
    </div>
    <button class="footer-icon-area" on:click={moveToMy}>
      {#if location === 'my'}
        <img src="./assets/user-black.svg" alt="user" />
      {:else}
        <img src="./assets/user.svg" alt="user" />
      {/if}
      <div>나의 당근</div>
    </button>
  </div>
</footer>
