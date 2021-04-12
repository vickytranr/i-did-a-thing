var canvas;
var ctx;
var w = 660;
var h = 9880;


var aCanvas;
var ctxt;
var wt = 1678;
var ht = 10310;


var clicks = 0;

var keyClick = -1;

// SINK CAT
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var s6 = document.getElementById("s6");
var s7 = document.getElementById("s7");
var s8 = document.getElementById("s8");
var s9 = document.getElementById("s9");
var s10 = document.getElementById("s10");
var s11 = document.getElementById("s11");

var s12 = document.getElementById("s12");
var s13 = document.getElementById("s13");
var s14 = document.getElementById("s14");
var s15 = document.getElementById("s15");
var s16 = document.getElementById("s16");
var s17 = document.getElementById("s17");
var s18 = document.getElementById("s18");
var s19 = document.getElementById("s19");
var s20 = document.getElementById("s20");
var s21 = document.getElementById("s21");
var s22 = document.getElementById("s22");

var s23 = document.getElementById("s23");
var s24 = document.getElementById("s24");
var s25 = document.getElementById("s25");
var s26 = document.getElementById("s26");
var s27 = document.getElementById("s27");
var s28 = document.getElementById("s28");
var s29 = document.getElementById("s29");
var s30 = document.getElementById("s30");
var s31 = document.getElementById("s31");
var s32 = document.getElementById("s32");
var s33 = document.getElementById("s33");

var s34 = document.getElementById("s34");
var s35 = document.getElementById("s35");
var s36 = document.getElementById("s36");
var s37 = document.getElementById("s37");
var s38 = document.getElementById("s38");
var s39 = document.getElementById("s39");
var s40 = document.getElementById("s40");
var s41 = document.getElementById("s41");
var s42 = document.getElementById("s42");
var s43 = document.getElementById("s43");
var s44 = document.getElementById("s44");
var s45 = document.getElementById("s45");

var s46 = document.getElementById("s46");
var s47 = document.getElementById("s47");
var s48 = document.getElementById("s48");
var s49 = document.getElementById("s49");
var s50 = document.getElementById("s50");
var s51 = document.getElementById("s51");
var s52 = document.getElementById("s52");

var s53 = document.getElementById("s53");
var s54 = document.getElementById("s54");
var s55 = document.getElementById("s55");
var s56 = document.getElementById("s56");
var s57 = document.getElementById("s57");
var s58 = document.getElementById("s58");
var s59 = document.getElementById("s59");
var s60 = document.getElementById("s60");
var s61 = document.getElementById("s61");
var s62 = document.getElementById("s62");
var s63 = document.getElementById("s63");
var s64 = document.getElementById("s64");
var s65 = document.getElementById("s65");
var s66 = document.getElementById("s66");
var s67 = document.getElementById("s67");
var s68 = document.getElementById("s68");
var s69 = document.getElementById("s69");

var s70 = document.getElementById("s70");
var s71 = document.getElementById("s71");
var s72 = document.getElementById("s72");
var s73 = document.getElementById("s73");
var s74 = document.getElementById("s74");
var s75 = document.getElementById("s75");
var s76 = document.getElementById("s76");
var s77 = document.getElementById("s77");
var s78 = document.getElementById("s78");
var s79 = document.getElementById("s79");
var s80 = document.getElementById("s80");
var s81 = document.getElementById("s81");
var s82 = document.getElementById("s82");
var s83 = document.getElementById("s83");

var s84 = document.getElementById("s84");
var s85 = document.getElementById("s85");
var s86 = document.getElementById("s86");
var s87 = document.getElementById("s87");
var s88 = document.getElementById("s88");
var s89 = document.getElementById("s89");
var s90 = document.getElementById("s90");
var s91 = document.getElementById("s91");

// var cBlue = document.getElementById("cBlue");
// var cGreen = document.getElementById("cGreen");
// var cOrange = document.getElementById("cOrange");
// var cWarm = document.getElementById("cWarm");
// var cPink = document.getElementById("cPink");
// var cPurple = document.getElementById("cPurple");

var text = document.getElementById("text");
var sinkCat = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,
            s23,s24,s25,s26,s27,s28,s29,s30,s31,s32,s33,s34,s35,s36,s37,s38,s39,s40,s41,s42,s43,
            s44,s45,s46,s47,s48,s49,s50,s51,s52,s53,s54,s55,s56,s57,s58,s59,s60,s61,s62,s63,s64,
            s65,s66,s67,s68,s69,s70,s71,s72,s73,s74,s75,s76,s77,s78,s79,s80,s81,s82,s83,s84,s85,
            s86,s87,s88,s89,s90,s91];

// var explode = [cBlue,cGreen,cOrange,cWarm,cPink,cPurple];

// var text1 = t1();
// var text2 = t2();
// var text3 = t3();
// var text4 = t4();
// var text5 = t5();

// var texts = [t1(),t2(),t3(),t4(),t5()];

function t1(){
    ctxt.font = "70px Roboto";
    ctxt.fillStyle = "red";
    ctxt.fillText("this. this is you.", 0, 0);
}


document.onclick = genShape;
// document.onkeydown = words;

function genShape(){
    keyClick += 1;
    ctx.drawImage(sinkCat[keyClick], 0, 0);
};
// function words(event){
//     if(event.keyCode == 13){
        
//         };
// }

setUpCanvas();
Canvas();
animationLoop();

function animationLoop(){
    clear();
    document.onclick = genShape;
    function genShape(){
        for (var i=-1;i<sinkCat.length; i++){
            keyClick += 1;
            ctx.drawImage(sinkCat[i],0,0);
        }
    }
};

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    // canvas.style.border = "solid 1px red";
    // ctx.fillStyle = "black";
    // ctx.fillRect(0,0, canvas.width, canvas.height);
}
function Canvas(){
    aCanvas = document.querySelector("#aCanvas");
    ctxt = canvas.getContext("2d");
    aCanvas.width = wt;
    aCanvas.height = ht;
    // aCanvas.style.border = "solid 1px white";
}