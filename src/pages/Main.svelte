<script>
  let hour = new Date().getHours().toString().padStart(2, '0');
  let minute = new Date().getMinutes().toString().padStart(2, '0');
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
  <a href="#/write" class="write-btn">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icon-area">
      <img src="./assets/home.svg" alt="home" />
      <div>홈</div>
    </div>
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
    <div class="footer-icon-area">
      <img src="./assets/user.svg" alt="user" />
      <div>나의 당근</div>
    </div>
  </div>
</footer>

<div class="media-info-msg">화면 크기를 줄여주세요</div>
