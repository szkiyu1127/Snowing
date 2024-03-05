/* 雪をランダムに降らせる */
let snowContainer = document.querySelector(".snow-container");

const createSnow = () => {
  /* 雪の要素を生成 */
  let snow = document.createElement("span");
  snow.className = "snow";
  /*spanがsnowクラスを持った状態で生成される*/

  //雪の大きさ
  minSize = 5;
  maxSize = 10;

  /* 雪の大きさをランダムに決める */
  let snowSize = Math.random() * (maxSize - minSize) + minSize;

  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";

  /* 雪が降る位置をランダムに決める */
  snow.style.left = Math.random() * 100 + "%";

  //snowContainerにspanをいれる
  snowContainer.appendChild(snow);

  /* １０秒後に消す。 */
  setTimeout(() => {
    snow.remove();
  }, 10000);
};

setInterval(createSnow, 100);