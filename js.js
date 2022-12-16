var nm = "Michail</>Kordellas"
var prof="Front-End Web Developer"
$(document).ready(function(){
    load();
  });
  





const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
    $("#animated-Name").fadeIn(2000);
    var t="";
    for (var i = 0; i < prof.length; i++) {
        t = t+prof[i];
        $("#profesion").html(t).css("color","rgb(203, 202, 202)");
        $("#profesion").append("<b>|</b>").css("color","rgb(203, 202, 202)");
            await timer(100); // then the created Promise can be awaited  
    }
    $("#profesion").html(prof);
    $("#arrow").append("&#92;&#47;").css("color", "black");
  
}


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsL = document.querySelectorAll('.hiddenL');
hiddenElementsL.forEach((el)=> observer.observe(el));

const hiddenElementsR = document.querySelectorAll('.hiddenR');
hiddenElementsR.forEach((el)=> observer.observe(el));

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const hiddenElementsImgR = document.querySelectorAll('.hiddenImgR');
hiddenElementsImgR.forEach((el)=> observer.observe(el));





let mybutton = document.getElementById("scrollBtn");
    
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    
    function topFunction() {
        document.documentElement.style.scrollBehavior = "smooth";
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        entry.target.classList.remove('show');
    }



function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Language', '%',{role:'style'}],
  ['HTML',90, 'color:#BA0707' ],
  ['Css',80, 'color:#BA0707'],
  ['Bootstrap',70, 'color:#BA0707'],
  ['Javascript',75, 'color:#BA0707'],
  ['Jquery',60, 'color:#BA0707'],
  ['React',40, 'color:#BA0707'],
  ['Angular',40, 'color:#BA0707'],
  ['Vue',40, 'color:#BA0707']
]);

var options = {
    title:'Coding Skills',
    backgroundColor: '#000',
    legend: { position: "none" },
    titleTextStyle: { color: '#FFF' },
    vAxis: {
      textStyle: { color: '#FFF',  }
    },
    hAxis: {
        textStyle: { color: '#FFF' }
      },
    animation:
        {

            "startup": true,
            duration: 1500,
            easing: 'out'
        }
       
};


var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data, options);
}

const observerChart = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);   
        }
    });
});

const chart = document.querySelectorAll('#myChart');
chart.forEach((el)=> observerChart.observe(el));

