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
    myFunction(), myValue(), myImg1(), myImg2(), myImg3()
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
  function myImg1() {
    var img1 = document.getElementById("img1");
    var header = document.querySelectorAll(".target-img1");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      img1.classList.add("animate__animated","animate__swing");
    } else {
      img1.classList.remove("animate__animated","animate__swing");
    }
  }
  function myImg2() {
    var img2 = document.getElementById("img2");
    var header = document.querySelector(".target-img2");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      img2.classList.add("animate__animated","animate__swing");
    } else {
      img2.classList.remove("animate__animated","animate__swing");
    }
  }
  function myImg3() {
    var img3 = document.getElementById("img3");
    var header = document.querySelector(".target-img3");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      img3.classList.add("animate__animated","animate__swing");
    } else {
      img3.classList.remove("animate__animated","animate__swing");
    }
  }
  function myValue() {
    var value1 = document.getElementById("value1");
    var value2 = document.getElementById("value2");
    var value3 = document.getElementById("value3");
    var header = document.getElementById("target");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
      value1.classList.add("value-number");
      value2.classList.add("value-number");
      value3.classList.add("value-number");
    } else {
      value1.classList.remove("value-number");
      value2.classList.remove("value-number");
      value3.classList.remove("value-number");
    }
  }
};

header();
