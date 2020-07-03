"use strict";

{
  const images = [
    // 文字列ではなく、ちゃんとimgフォルダ内のpngファイルとして扱われる
    "img/pic00.png",
    "img/pic01.png",
    "img/pic02.png",
    "img/pic03.png",
    "img/pic04.png",
    "img/pic05.png",
    "img/pic06.png",
    "img/pic07.png",
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById("main");
  // textContent的な感じでsrc
  mainImage.src = images[currentIndex];

  // imageがimages配列の何番目(インデックス番号)がforEach()の第二引数で表現できるようになる
  // サムネ表示&クリックでcurrentクラス移動機能
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll(".thumbnails > li");
      thumbnails[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnails[currentIndex].classList.add("current");
    });

    li.appendChild(img);

    document.querySelector(".thumbnails").appendChild(li);
  });

  // 次へボタン機能
  const next = document.getElementById("next");
  next.addEventListener("click", () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    // click()はその要素がクリックされた時の処理を実行してくれる
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  // 前へボタン機能
  const prev = document.getElementById("prev");
  prev.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    // click()はその要素がクリックされた時の処理を実行してくれる
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  let timeoutId;

  function playSlideshow() {
    // 第二引数に設定したい時間を記入
    // 一定時間毎に繰り返す処理
    //setTimeout()の返り値をtimeoutIdに入れる
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = "Pause";
    } else {
      // clearTimeout();にはsetTimeoutの返り値が必要
      clearTimeout(timeoutId);
      play.textContent = "Play";
    }
    //論理否定演算子を用いてisPlayingの値を#playがクリックされるたびに反転させる
    isPlaying = !isPlaying;
  });
}
