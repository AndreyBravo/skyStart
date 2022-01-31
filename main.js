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
    var myValue1 = document.getElementById("value1");
    var myValue2 = document.getElementById("value2");
    var myValue3 = document.getElementById("value3");
    var header = document.getElementById("value_target");
     
    if(header.clientWidth> 768){
      var sticky = header.offsetTop - header.offsetHeight ;
    }else{
      var sticky = header.offsetTop - header.offsetHeight/5;
    }
    
    if (window.pageYOffset > sticky) {
      myValue1.classList.add("value-number");
      myValue2.classList.add("value-number");
      myValue3.classList.add("value-number");
    }
  }
};
header();
//value

