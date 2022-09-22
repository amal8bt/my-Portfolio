var messageArray = ["Hello, I am Amal ! <br>  Welcome To My World"];
var textPosition = 0;
var speed = 100;

typeWriter = () => {
    document.querySelector('#message').innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
    if (textPosition++ != messageArray[0].length){
        setTimeout(typeWriter, speed)
    }
}
window.addEventListener('load', typeWriter);

window.onscroll = ()=>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementById('navbar').classList.add('scrolled');
      document.getElementById('navbar').classList.remove('bg-transparent');
    } else {
      document.getElementById('navbar').classList.remove('scrolled');
      document.getElementById('navbar').classList.add('bg-transparent');
    }
   }
   const inputs = document.getElementsByClassName('active-data');

   
document.getElementById('home').addEventListener('click',()=>{
    document.getElementById('home').classList.add('active-data')
    document.getElementById('teams').classList.remove('active-data')
    document.getElementById('contact').classList.remove('active-data');
    document.getElementById('portfolio').classList.remove('active-data');

    document.getElementById('education').classList.remove('d-none');
    document.getElementById('experience').classList.add('d-none');
    document.getElementById('coding').classList.add('d-none');
    document.getElementById('skills').classList.add('d-none')
    // disp.forEach(el => {
    //     if (el.classList.contains('dsp')) {
    //         el.classList.add('d-none')
    //     }
    // });

})
document.getElementById('portfolio').addEventListener('click',()=>{
    document.getElementById('portfolio').classList.add('active-data')
    document.getElementById('teams').classList.remove('active-data')
    document.getElementById('contact').classList.remove('active-data');
    document.getElementById('home').classList.remove('active-data');

    document.getElementById('experience').classList.remove('d-none');
    document.getElementById('education').classList.add('d-none');
    document.getElementById('coding').classList.add('d-none');
    document.getElementById('skills').classList.add('d-none')

})
document.getElementById('teams').addEventListener('click',()=>{
    document.getElementById('teams').classList.add('active-data')
    document.getElementById('contact').classList.remove('active-data');
    document.getElementById('portfolio').classList.remove('active-data');
    document.getElementById('home').classList.remove('active-data');

    document.getElementById('coding').classList.remove('d-none')
    document.getElementById('experience').classList.add('d-none');
    document.getElementById('education').classList.add('d-none');
    document.getElementById('skills').classList.add('d-none')
     

})
document.getElementById('contact').addEventListener('click',()=>{
    document.getElementById('contact').classList.add('active-data')
    document.getElementById('teams').classList.remove('active-data')
    document.getElementById('portfolio').classList.remove('active-data');
    document.getElementById('home').classList.remove('active-data');

    document.getElementById('skills').classList.remove('d-none')
    document.getElementById('coding').classList.add('d-none');
    document.getElementById('experience').classList.add('d-none');
    document.getElementById('education').classList.add('d-none');
     

})

// Range Animation
$("#slider1").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 70,
    width: 15,

    min: 10,
    max: 100,
    
    svgMode: true,
	  pathColor: "#fff",
	  borderWidth: 0,
    
	  startValue: 0,
    
    valueChange: function (e) {
    	var color = e.isInvertedRange ? "#FF5722" : "#f93b67";
      
      $("#slider1").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider1").data("roundSlider");
sliderObj.setValue(100);

$("#slider2").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 70,
    width: 15,

    min: 10,
    max: 100,
    
    svgMode: true,
	  pathColor: "#fff",
	  borderWidth: 0,
    
	  startValue: 0,
    
    valueChange: function (e) {
    	var color = e.isInvertedRange ? "#FF5722" : "#f93b67";
      
      $("#slider2").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider2").data("roundSlider");
sliderObj.setValue(80);

$("#slider3").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 70,
    width: 15,

    min: 10,
    max: 100,
    
    svgMode: true,
	  pathColor: "#fff",
	  borderWidth: 0,
    
	  startValue: 0,
    
    valueChange: function (e) {
    	var color = e.isInvertedRange ? "#FF5722" : "#f93b67";
      
      $("#slider3").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider3").data("roundSlider");
sliderObj.setValue(75);

$("#slider4").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 70,
    width: 15,

    min: 10,
    max: 100,
    
    svgMode: true,
	  pathColor: "#fff",
	  borderWidth: 0,
    
	  startValue: 0,
    
    valueChange: function (e) {
    	var color = e.isInvertedRange ? "#FF5722" : "#f93b67";
      
      $("#slider4").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider4").data("roundSlider");
sliderObj.setValue(75);

$("#slider5").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 70,
    width: 15,

    min: 10,
    max: 100,
    
    svgMode: true,
	  pathColor: "#fff",
	  borderWidth: 0,
    
	  startValue: 0,
    
    valueChange: function (e) {
    	var color = e.isInvertedRange ? "#FF5722" : "#f93b67";
      
      $("#slider5").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider5").data("roundSlider");
sliderObj.setValue(75);

$("#slider6").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 70,
    width: 15,

    min: 10,
    max: 100,
    
    svgMode: true,
	  pathColor: "#fff",
	  borderWidth: 0,
    
	  startValue: 0,
    
    valueChange: function (e) {
    	var color = e.isInvertedRange ? "#FF5722" : "#f93b67";
      
      $("#slider6").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider6").data("roundSlider");
sliderObj.setValue(75);

$(document).ready(function(){
        $('.carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
  });
