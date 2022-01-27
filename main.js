
var postion = $('#target').offset().top,
    height = $('#target').height();
$(document).on('scroll', function (){
  var scroll = $(document).scrollTop();
  if(scroll  > postion && scroll < (postion + height) ) {
     $('#value').addClass('value-number')
     }
    //  else {
    //     $('.value-number1').removeClass('value-number')
    //  }
})
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