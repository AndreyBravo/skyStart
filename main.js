const counters = document.querySelectorAll(".value-number");
let timeId=setInterval(() => counters, 100);


const speed = 2000;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value + "+";
    }
  };

  animate();
});
window.onscroll = function() {myFunction()};
var myHeader=document.getElementById("myHeader");
var header = document.getElementById("scroll");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
}