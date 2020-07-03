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
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", () => {
      mainImage.src = image;
    });

    li.appendChild(img);

    document.querySelector(".thumbnails").appendChild(li);
  });
}
