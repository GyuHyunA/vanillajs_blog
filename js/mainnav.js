// 목차 생성
const mainShortCut = "./components/basic/";
const subShortCut = "../../../components/basic/";
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

const contentsList = [
  {
    id: 0,
    title: "제목",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum quis unde voluptas earum nulla repudiandae velit consectetur quos distinctio cumque, aspernatur asperiores quae exercitationem quidem minus eum adipisci aut?",
  },
];

let conWrap = document.querySelector(".contents-con");
let cona = document.createElement("a");
let conh = document.createElement("h2");
let cont = document.createElement("p");

cona.classList.add("con-box");
conh.classList.add("con-head");
cont.classList.add("con-text");

contentsList.forEach((v, i) => {
  cona.href = `lsit${v.id}`;
  conh.textContent = v.title + v.id;
  cont.textContent = v.text;
  cona.appendChild(conh);
  cona.appendChild(cont);
});
conWrap.appendChild(cona);

console.log(conWrap);
