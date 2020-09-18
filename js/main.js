function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

const toTop = document.querySelector(".toTop");
const offset = window.innerHeight;
const scrollHeight = document.documentElement.scrollHeight;
window.addEventListener("scroll", () => {
  let scrollVert = window.pageYOffset;
  if (scrollVert > scrollHeight - offset - 2) {
    toTop.style.right = "40px";
  } else {
    toTop.style.right = "-40px";
  }
});

const marker = document.querySelector(".marker");
const links = document.querySelector(".link");

marker.addEventListener("click", () => {
  marker.classList.toggle("toggler");
});

const btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", () => {
  alert("Da li ste sigurni da zelite da napustite ovu stranicu?");
});
