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
    myFunction(), myValue();
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
