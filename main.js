window.addEventListener("scroll", function () {
  var counters = document.querySelectorAll(".value-number");
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
});

const header = () => {
  window.onscroll = function () {
    myFunction(),myValue();
  };

  function myFunction() {
    var myHeader = document.getElementById("myHeader");
    var header = document.getElementById("scroll");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      myHeader.classList.add("sticky");
    } else {
      myHeader.classList.remove("sticky");
    }
  }
  function myValue() {
    var myValue1 = document.getElementById("value1");
    var myValue2 = document.getElementById("value2");
    var myValue3 = document.getElementById("value3");
    var header = document.getElementById("scroll");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      myValue1.classList.add("value-number");
      myValue2.classList.add("value-number");
      myValue3.classList.add("value-number");
    } 
  }
};

const animItems = document.querySelectorAll(".anim-items");


if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItem0Height = animItems[0].offsetHeight;
      const animItem0Offset = offset(animItems[0]).top;
      const animItem1Height = animItems[1].offsetHeight;
      const animItem1Offset = offset(animItems[1]).top;

      const animStart = 0.9;

      let animItem0Point = window.innerHeight - animItem0Height / animStart;
      if(animItem0Height > window.innerHeight){
        animItem0Point = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItem0Offset - animItem0Point &&
        pageYOffset < animItem0Offset + animItem0Height
      ) {
        animItems[0].classList.add("animate__animated", "animate__backInLeft");
      }
      let animItem1Point = window.innerHeight - animItem1Height / animStart;
      if(animItem1Height > window.innerHeight){
        animItem0Point = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItem1Offset - animItem1Point &&
        pageYOffset < animItem1Offset + animItem1Height
      ) {
        animItems[1].classList.add("animate__animated", "animate__backInRight");
      }
    }
  }

}



function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
header();
