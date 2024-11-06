const main = document.querySelector('main');

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

const renderData = (data) => {
  data.reverse().forEach(async (item) => {
    const itemListDiv = document.createElement('div');
    itemListDiv.className = 'item-list';

    const itemListImgDiv = document.createElement('div');
    itemListImgDiv.className = 'item-list-img';

    const itemListImg = document.createElement('img');
    const response = await fetch(`/images/${item.id}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    itemListImg.src = url;

    const itemListInfoDiv = document.createElement('div');
    itemListInfoDiv.className = 'item-list-info';

    const itemListInfoTitleDiv = document.createElement('div');
    itemListInfoTitleDiv.className = 'item-list-info-title';
    itemListInfoTitleDiv.innerText = item.title;

    const itemListInfoMetaDiv = document.createElement('div');
    itemListInfoMetaDiv.className = 'item-list-info-meta';
    itemListInfoMetaDiv.innerText = item.place + calcTime(item.insertAt);

    const itemListInfoPriceDiv = document.createElement('div');
    itemListInfoPriceDiv.className = 'item-list-info-price';
    itemListInfoPriceDiv.innerText = item.price;

    itemListImgDiv.appendChild(itemListImg);
    itemListInfoDiv.appendChild(itemListInfoTitleDiv);
    itemListInfoDiv.appendChild(itemListInfoMetaDiv);
    itemListInfoDiv.appendChild(itemListInfoPriceDiv);
    itemListDiv.appendChild(itemListImgDiv);
    itemListDiv.appendChild(itemListInfoDiv);
    main.appendChild(itemListDiv);
  });
};

const fetchList = async () => {
  const accessToken = window.localStorage.getItem('token');

  const response = await fetch('/items', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    alert('로그인 필요');
    window.location.pathname = '/login.html';
    return;
  }

  const data = await response.json();

  renderData(data);
};

fetchList();
