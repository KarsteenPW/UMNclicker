var money       = 0;
var clkPower    = 1;

var earthCst     = 15;
var erth         = 0;

//buat btn
function earth () {
    if (money >= earthCst){
        money = money - earthCst;
        clkPower = clkPower + 1;
        erth = erth + 1;
        earthCst = Math.round(earthCst * 1.3);

        document.getElementById("money").innerHTML = money;
        document.getElementById("erth").innerHTML = erth;
        document.getElementById("earthCst").innerHTML = earthCst;
        document.getElementById("clkPower").innerHTML = clkPower;  
    } 
}

var marsCst     = 100;
var mrs         = 0;

function mars () {
    if (money >= marsCst){
        money = money - marsCst;
        mrs = mrs + 1;
        marsCst = Math.round(marsCst * 1.18)

        document.getElementById("money").innerHTML = money;
        document.getElementById("marsCst").innerHTML = marsCst;
        document.getElementById("mrs").innerHTML = mrs;
        updatePrintValMrs();updateMoneyPerSec();
    }
}

function updatePrintValMrs(){
    printValMrs = mrs * 2;
    document.getElementById("printValMrs").innerHTML = printValMrs
}


var venusCst    = 1100;
var ven         = 0;

function venus () {
    if (money >= venusCst){
        money = money - venusCst;
        ven = ven + 1;
        venusCst = Math.round(venusCst * 1.15)

        document.getElementById("money").innerHTML = money;
        document.getElementById("venusCst").innerHTML = venusCst;
        document.getElementById("ven").innerHTML = ven;
        updatePrintValVen();updateMoneyPerSec(); 
    }
}

function updatePrintValVen(){
    printValVen = ven * 5;
    document.getElementById("printValVen").innerHTML = printValVen
}


var neptuneCst  = 5000;
var nptn        = 0;

function neptune () {
    if (money >= neptuneCst){
        money = money - neptuneCst;
        nptn = nptn + 1;
        neptuneCst = Math.round(neptuneCst * 1.12)

        document.getElementById("money").innerHTML = money;
        document.getElementById("neptuneCst").innerHTML = neptuneCst;
        document.getElementById("nptn").innerHTML = nptn;
        updatePrintValNptn();updateMoneyPerSec();
    }
}

function updatePrintValNptn(){
    printValNptn = nptn * 10;
    document.getElementById("printValNptn").innerHTML = printValNptn
}

var saturnCst   = 10000;
var strn        = 0;

function saturn () {
    if (money >= saturnCst){
        money = money - saturnCst;
        strn = strn + 1;
        saturnCst = Math.round(saturnCst * 1.09)

        document.getElementById("money").innerHTML = money;
        document.getElementById("saturnCst").innerHTML = saturnCst;
        document.getElementById("strn").innerHTML = strn;
        updatePrintValStrn();updateMoneyPerSec();
    }
}

function updatePrintValStrn(){
    printValStrn = strn * 13;
    document.getElementById("printValStrn").innerHTML = printValStrn
}

const allien = document.getElementById('Alien');

allien.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const img = document.createElement('img');
    img.src = 'img/g.gif';
    img.style.position = 'absolute';
    img.style.top = `${y - img.height / 2}px`;
    img.style.left = `${x - img.width / 2}px`;
    

    document.body.appendChild(img);

    setTimeout(function() {
        document.body.removeChild(img);
    }, 270);
});

//nge-update/cek money
function addToCounter (amount) {
    money = money + amount;
    document.getElementById("money").innerHTML = money;
    if(money >= earthCst){
        document.getElementById("unlock1").style.filter = "none";
        document.getElementById("unlockk1").style.filter = "none";
    } 
    if(money >= marsCst){
        document.getElementById("unlock2").style.filter = "none";
        document.getElementById("unlockk2").style.filter = "none";
    } 
    if(money >= venusCst){
        document.getElementById("unlock3").style.filter = "none";
        document.getElementById("unlockk3").style.filter = "none";
    }
    if(money >= neptuneCst){
        document.getElementById("unlock4").style.filter = "none";
        document.getElementById("unlockk4").style.filter = "none";
    } 
    if(money >= saturnCst){
        document.getElementById("unlock5").style.filter = "none";
        document.getElementById("unlockk5").style.filter = "none";
    } 
}

//buat yg You have "0" members
function updateMoneyPerSec(){
    moneyPerSec = mrs * 2 + ven * 5 + nptn * 10 + strn * 13;
    document.getElementById("moneyPerSec").innerHTML = moneyPerSec
}

//buat yg "0" Auto members per second
setInterval (function() {
    money = money + mrs * 2;
    money = money + ven * 5;
    money = money + nptn * 10;
    money = money + strn * 13;
    document.getElementById("money").innerHTML = money;
}, 1000);


