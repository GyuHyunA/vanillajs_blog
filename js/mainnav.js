// 목차 생성
const mainShortCut = "./components/basic/";
const subShortCut = "../../../components/basic/"
const navList = [
  {
    id: 0,
    title: "바닐라 JS 기본",
    link: mainShortCut + "basiclist.html",
    children: [
      {
        id: 0,
        title: "변수",
        link: mainShortCut + "variables/variables.html",
      }, 
    ],
  },
];

// 변수 만들기
let nav = document.querySelector(".nav_list");
let mli = document.createElement("li");

navList.forEach((v) => {
  let ma = document.createElement("a");
  ma.href = v.link;
  // ma.textContent = "[" + v.id + 1+ "]" + " " + v.title;
  ma.textContent = `[${v.id + 1}] ${v.title}`;
  nav.appendChild(ma);
  v.children.forEach((vv) => {
    let mli = document.createElement("li");
    let ma2 = document.createElement("a");
    ma2.href = vv.link;
    ma2.textContent = `${vv.id + 1}. ${vv.title}`;
    mli.appendChild(ma2);

    mli.classList.add("nav-cont");
    nav.appendChild(mli);
  });
});
