var buttonNewGame=document.getElementById('newGame');
var buttonGegenstand=document.getElementById('buttonGegenstand');
var elem = document.getElementsByClassName('image');
var elem2 = document.getElementsByClassName('imageSet');
var arr = []; 
var arr2 = []; 
var image1=document.getElementById('gegenstand1');
var image2=document.getElementById('gegenstand2');
var image3=document.getElementById('gegenstand3');
var image4=document.getElementById('gegenstand4');
var image5=document.getElementById('gegenstand5');
var image6=document.getElementById('gegenstand6');
var image7=document.getElementById('gegenstand7');
var image8=document.getElementById('gegenstand8');
var image9=document.getElementById('gegenstand9');
var image10=document.getElementById('gegenstand10');
var image11=document.getElementById('gegenstand11');
var image12=document.getElementById('gegenstand12');
var message = document.getElementById('message');
var imgs=[
    'img/buch.png',
    'img/teddy.png',
    'img/shirt.png',
    'img/limo.png',
    'img/pj.png',
    'img/schuhe.png',
    'img/shampoo.png',
    'img/zahnbuerste.png',
    'img/pass.png',
    'img/snack.png',
    'img/brille.png',
    'img/geld.png',
    'img/cap.png',
    'img/uhr.png',
    'img/pencil.png',
    'img/ipad.png'
];

var timeinterval;

//New Game Button
buttonNewGame.addEventListener("click", function() {
    this.disabled = true;
    document.getElementById("countdown").classList.remove("hidden");
    randomObj();
});


for (var i = 0; i < elem2.length; i++) {
    elem2[i].onclick = function(){
        for (j = 0; j< arr2.length; j++) {
            if (arr2[j]==this.src) {
                this.classList.add("disabled");
                }
        }
        if (document.getElementsByClassName('disabled').length==12 && document.getElementsByClassName('visible').length==0 ) {
            message.classList.add("gewonnen");
            message.innerHTML= "Du hast den Koffer gepackt!";
            buttonNewGame.disabled = false;
            document.getElementById("countdown").className = "hidden";
            clearInterval(timeinterval);  
        }   
    }
} 
   
function randomObj(){
    var deadline =  new Date(Date.parse(new Date()) + 20000); 
    initializeClock('countdown', deadline);
    document.getElementById("deadline-message").classList.remove("visible");
    document.getElementById("deadline-message").style.display = "none";
    message.classList.remove("gewonnen");
    message.classList.remove("verloren");
    document.getElementById("countdown").className = "countdown";
    message.innerHTML= "Click auf die Gegenstände, die in den Koffer gepackt werden müssen!";
    arr = new Array;
    arr2 = new Array;
    for (var i = 0; i < elem2.length; i++) {
        elem2[i].classList.remove("disabled");    
    }
    var max = 16;                             
    var rundomnumber;                   
    while (arr.length < max) {
        rundomnumber = Math.floor(Math.random() * max); 
        if (arr.indexOf(rundomnumber) == -1) {       
            arr.push(rundomnumber); 
        }
    }  
    image1.src=imgs[arr[0]];
    image2.src=imgs[arr[1]];
    image3.src=imgs[arr[2]];
    image4.src=imgs[arr[3]];
    image5.src=imgs[arr[4]];
    image6.src=imgs[arr[5]];
    image7.src=imgs[arr[6]];
    image8.src=imgs[arr[7]];
    image9.src=imgs[arr[8]];
    image10.src=imgs[arr[9]];
    image11.src=imgs[arr[10]];
    image12.src=imgs[arr[11]];
    for(i = 0; i < 12; i++) {
        arr2.push(elem[i].src);
    } 
    return(arr2);
        
};


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

//Initialize Clock
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var secondsSpan = clock.querySelector(".seconds");
    //Update Clock
    function updateClock() {
        var t = getTimeRemaining(endtime);
        if (t.total <= 0) {
            document.getElementById("countdown").className = "hidden";
            document.getElementById("deadline-message").className = "visible";
            message.classList.add("verloren");
            message.innerHTML= "Du hast es nicht geschafft!";
            buttonNewGame.disabled = false;
            clearInterval(timeinterval);
            return true;
        }
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
    timeinterval = setInterval(updateClock, 1000);
    updateClock();
}
   


    


 
        













    
    
 
