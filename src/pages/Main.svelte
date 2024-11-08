<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import { getDatabase, ref, onValue } from 'firebase/database';

  let hour = new Date().getHours().toString().padStart(2, '0');
  let minute = new Date().getMinutes().toString().padStart(2, '0');

  $: items = [];

  const calcTime = (timestamp) => {
    const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const time = new Date(curTime - timestamp);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    if (hour > 0) {
      return ` ${hour}시간 전`;
    } else if (minute > 0) {
      return ` ${minute}분 전`;
    } else if (second > 0) {
      return ` ${second}초 전`;
    } else {
      return '방금 전';
    }
  };

  const db = getDatabase();
  const itemsRef = ref(db, 'items');

  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    });
  });
</script>

<header>
  <div class="info-bar">
    <div>{hour}:{minute}</div>
    <div class="info-bar-icon-area">
      <img src="./assets/chart-bar.svg" alt="chart-bar" />
      <img src="./assets/wifi.svg" alt="wifi" />
      <img src="./assets/battery-50.svg" alt="battery-50" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar-location">
      <div>역삼1동</div>
      <img src="./assets/chevron-down.svg" alt="chevron-down" />
    </div>
    <div class="menu-bar-icon-area">
      <img src="./assets/magnifying-glass.svg" alt="magnifying-glass" />
      <img src="./assets/bars-3.svg" alt="bars-3" />
      <img src="./assets/bell.svg" alt="bell" />
    </div>
  </div>
</header>

<main>
  {#each items as item}
    <div class="item-list">
      <div class="item-list-img">
        <img src="" alt="" />
      </div>
      <div class="item-list-info">
        <div class="item-list-info-title">{item.title}</div>
        <div class="item-list-info-meta">{item.place} {calcTime(item.insertAt)}</div>
        <div class="item-list-info-price">{item.price}</div>
        <div>{item.description}</div>
      </div>
    </div>
  {/each}

  <a href="#/write" class="write-btn">+ 글쓰기</a>
</main>

<Footer location="home" />

<div class="media-info-msg">화면 크기를 줄여주세요</div>
