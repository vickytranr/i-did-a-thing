var canvas;
 var ctx;
 var w = 670;
 var h = 10310;

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

 var sinkCat = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22,
             s23,s24,s25,s26,s27,s28,s29,s30,s31,s32,s33];



 document.onclick = genShape;
 function genShape(){
     keyClick += 1;
     ctx.drawImage(sinkCat[keyClick], 0, 0);
 };

 setUpCanvas();
 animationLoop();

 function animationLoop(){
     clear();
     document.onclick = genShape;
     function genShape(){
         for (var i=-1;i<sinkCat.length; i++){
         keyClick += 1;
         ctx.drawImage(sinkCat[i], 10, 10);
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
     canvas.style.border = "solid 1px white";
     ctx.fillStyle = "black";
     ctx.fillRect(0,0, canvas.width, canvas.height);
 } 