//anim number
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
//add class navbar&&number
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

    if (header.clientWidth > 768) {
      var sticky = header.offsetTop - header.offsetHeight;
    } else {
      var sticky = header.offsetTop - header.offsetHeight / 5;
    }

    if (window.pageYOffset > sticky) {
      myValue1.classList.add("value-number");
      myValue2.classList.add("value-number");
      myValue3.classList.add("value-number");
    }
  }
};
header();

//map

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

var animationTime = 1.5;
var dots = document.getElementsByTagName("circle");
var numdots = dots.length;
var loopDelay = numdots * animationTime * 1000;

var dotPulse = function () {
  var dot = dots.item(randomNumber(0, numdots));
  var pulse = dot.cloneNode(true);
  pulse.style.setProperty("fill", "#0066ff", null);
  document.getElementById("map-dots").appendChild(pulse);

  TweenMax.to(pulse, 1, {
    scale: 6,
    transformOrigin: "center center",
    onComplete: function () {
      dotPulse();
      TweenMax.to(pulse, 0.5, {
        scale: 8,
        transformOrigin: "center center",
        opacity: 0,
        onComplete: function () {
          pulse.remove();
        },
      });
    },
  });

  

  /*var pinTimeline = new TimelineMax({
    repeat: 1,
    delay: animationTime,
    repeatDelay: 0,
    yoyo: false
  });

  pinTimeline.to(pulse, animationTime / 2, {
    scale: 10,
    fill: '#F9423A',
    transformOrigin: 'center center',
    opacity: 0,
     onComplete: dotPulse
  });*/
};

dotPulse();
dotPulse();
dotPulse();
dotPulse();
dotPulse();
dotPulse();
dotPulse();
dotPulse();

//modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const closeButton1 = document.querySelector(".close-button1");
const stop = false;

function removeNavbar() {
  var myHeader = document.getElementById("myHeader");
  myHeader.classList.remove("sticky");
  window.onscroll = function () {
    var myHeader = document.getElementById("myHeader");
    myHeader.classList.remove("sticky");
  };
}

function closeModal() {
  modal.classList.toggle("show-modal");
  header();
}

function toggleModal() {
  modal.classList.toggle("show-modal");
  removeNavbar();
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
    header();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", closeModal);
closeButton1.addEventListener("click", closeModal);
window.addEventListener("click", windowOnClick);

//input file
function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}

//scrollOnVacancy
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
//form
"use strict"
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
  
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formDate = new FormData(form)  
    formDate.append('file', formFile.files[0])
    if(error === 0){
      form.classList.add('_sending')
      let response = await fetch('sendmail.php',{
        
        method:"POST",
        body:formDate
      })
      if(response.ok){
        let result = await response.json()
        form.reset();
        form.classList.remove('_sending')
      }else{
        form.classList.remove('_sending')
      }
    }
  }

  function changeValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
    form.addEventListener("change",changeValidate)
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }



  const formFile = document.getElementById('file')
  formFile.addEventListener('change',()=>{
    formFile.files[0];
  })
});
