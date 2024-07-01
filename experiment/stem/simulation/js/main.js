function restartexp() {
  location.reload();
}

var imgblade = null;
var imgtbdown = null;
var imgtbdowncut = null;
var bladeimg;
function bladejsclick() {
  bladeimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.top = 6 + '%';
  var bladeleft = 5; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladeleft == 15) {

      clearInterval(imgblade);
      document.getElementById("stemcss").style.display = "none";
        document.getElementById("cutstemseccss").style.display = "block";
        document.getElementById("cutstemcss").style.display = "block";
        document.getElementById("forcepcss").setAttribute("onclick", "forcepclick()");
        document.getElementById("bladecss").removeAttribute("onclick", "bladejsclick()");
    } else {

      bladeleft++;
      bladeimg.style.left = bladeleft + '%';

    }
  }

}


function forcepclick(){
  document.getElementById("forcepcss").style.display = "none";
  document.getElementById("pickforcepcss").style.display = "block";
  document.getElementById("bladecss").removeAttribute("onclick", "bladejsclick()");
  document.getElementById("bladecss").setAttribute("onclick", "bladejscutsectionclick()");

}

var imgbladecutsection = null;
var bladecutimg;
function bladejscutsectionclick(){
  bladecutimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.left = 61 + '%';
  
  var bladetop = 48; //initial  position
  clearInterval(imgbladecutsection);
  imgbladecutsection = setInterval(framecutsection, 90);

  function framecutsection() {
    if (bladetop == 58) {

      clearInterval(imgbladecutsection);
      document.getElementById("smallcutstemseccss").style.display = "block";
        document.getElementById("forcepcss").removeAttribute("onclick", "forcepclick()");
        document.getElementById("bladecss").removeAttribute("onclick", "bladejscutsectionclick()");
        document.getElementById("pickforcepcss").setAttribute("onclick", "pickforcepclick()");
        document.getElementById("bladecss").style.left = 40 + '%';
        document.getElementById("bladecss").style.top = 5 + '%';
        document.getElementById("bladecss").style.transform= "rotate(0deg)";

    } else {
      document.getElementById("bladecss").style.transform= "rotate(90deg)";
      bladetop++;
      bladecutimg.style.top = bladetop + '%';

    }
  }

}

function pickforcepclick(){
  document.getElementById("forcepcss").style.display="block";
  document.getElementById("pickforcepcss").style.display="none";

  document.getElementById("cutstemseccss").style.left= 70+"%";
  document.getElementById("cutstemseccss").style.top= 18+"%";

  document.getElementById("forcepcss").setAttribute("onclick", "forcepclick()");
  document.getElementById("brushcss").setAttribute("onclick", "brushclick()");

}

function brushclick(){

document.getElementById("brushcss").style.top=19 + "%";
document.getElementById("brushcss").style.left= 70+ "%";
document.getElementById("brushcss").setAttribute("onclick", "brushclickforsafrinin()");
}

function brushclickforsafrinin(){
  document.getElementById("brushcss").style.top=18 + "%";
document.getElementById("brushcss").style.left= 30+ "%";
document.getElementById("smallcutstemseccss").style.top=48 + "%";
document.getElementById("smallcutstemseccss").style.left= 27+ "%";
document.getElementById("brushcss").setAttribute("onclick", "brushclicktoorg()");
}

function brushclicktoorg(){
  document.getElementById("brushcss").style.top=0 + "%";
document.getElementById("brushcss").style.left= 90+ "%";
document.getElementById("brushcss").removeAttribute("onclick", "brushclick()");
document.getElementById("droppercss").setAttribute("onclick", "droppershowsafclick()");

}

function droppershowsafclick(){
  document.getElementById("droppercss").style.display="none";
  document.getElementById("safranincss").style.display="block";

  document.getElementById("safranincss").setAttribute("onclick", "droppermovesafpetdclick()");

}

function droppermovesafpetdclick(){
  document.getElementById("safranincss").style.top=23 + "%";
  document.getElementById("safranincss").style.left=26 + "%";
  document.getElementById("safranincss").setAttribute("onclick", "dropperdropsafclick()");
 
}

function dropperdropsafclick(){
  document.getElementById("safranindropcss").style.display="block";
  document.getElementById("droppercss").style.display="block";
  document.getElementById("safranincss").style.display="none";
  document.getElementById("brushcss").setAttribute("onclick", "brushpickstemtodistclick()");
  document.getElementById("droppercss").removeAttribute("onclick", "droppermovesafpetdclick()");
}



function brushpickstemtodistclick(){
  document.getElementById("brushcss").style.top=18 + "%";
 document.getElementById("brushcss").style.left= 30+ "%";
 document.getElementById("smallcutstemseccss").style.top=48 + "%";
document.getElementById("smallcutstemseccss").style.left= 27+ "%";
document.getElementById("brushcss").setAttribute("onclick", "brushclickmovetodist()");
}


function brushclickmovetodist(){
  document.getElementById("brushcss").style.top=18 + "%";
  document.getElementById("brushcss").style.left= 50+ "%";
  document.getElementById("smallcutstemseccss").style.top=48 + "%";
 document.getElementById("smallcutstemseccss").style.left= 48+ "%";

  document.getElementById("brushcss").setAttribute("onclick", "brushclicktoorg1()");
}






function brushclicktoorg1(){
  document.getElementById("brushcss").style.top=0 + "%";
document.getElementById("brushcss").style.left= 90+ "%";
document.getElementById("brushcss").removeAttribute("onclick", "brushclick()");
document.getElementById("droppercss").setAttribute("onclick", "droppermovedistbeakerclick()");
}

function droppermovedistbeakerclick(){
  
  document.getElementById("droppercss").style.display="none";
  document.getElementById("dropperdistwatercss").style.display="block";
  document.getElementById("dropperdistwatercss").setAttribute("onclick", "droppershowdistdropperclick()");

}

function droppershowdistdropperclick(){
  document.getElementById("dropperdistwatercss").style.top=25 + "%";
  document.getElementById("dropperdistwatercss").style.left=46 + "%";

  document.getElementById("dropperdistwatercss").setAttribute("onclick", "dropperdropdistpetdclick()");
}

function dropperdropdistpetdclick(){
  document.getElementById("distwaterdropcss").style.display="block";
  document.getElementById("droppercss").style.display="block";
  document.getElementById("dropperdistwatercss").style.display="none";
  document.getElementById("brushcss").setAttribute("onclick", "brushpickdiststemclick()");
  document.getElementById("droppercss").removeAttribute("onclick", "droppermovedistdropperclick()");


}


function brushpickdiststemclick(){
  document.getElementById("brushcss").style.top=18 + "%";
  document.getElementById("brushcss").style.left= 50+ "%";
  document.getElementById("smallcutstemseccss").style.top=48 + "%";
 document.getElementById("smallcutstemseccss").style.left= 48+ "%";

  document.getElementById("brushcss").setAttribute("onclick", "brushclicktoglassslide()");
}

function brushclicktoglassslide(){

  document.getElementById("brushcss").style.top=18 + "%";
  document.getElementById("brushcss").style.left= 70+ "%";
  document.getElementById("smallcutstemseccss").style.top=48.5 + "%";
 document.getElementById("smallcutstemseccss").style.left= 68+ "%";
 document.getElementById("brushcss").setAttribute("onclick", "brushclicktoorg2()");
}

function brushclicktoorg2(){
  document.getElementById("brushcss").style.top=0 + "%";
document.getElementById("brushcss").style.left= 90+ "%";
document.getElementById("brushcss").removeAttribute("onclick", "brushclick()");
document.getElementById("droppercss").setAttribute("onclick", "droppermovetowaterbeakerclick()");
}

function droppermovetowaterbeakerclick(){
  
  document.getElementById("droppercss").style.display="none";
  document.getElementById("dropperwatercss").style.display="block";
  document.getElementById("dropperwatercss").setAttribute("onclick", "droppermovetoglasssliderclick()");

}

function droppermovetoglasssliderclick(){
  document.getElementById("dropperwatercss").style.top=25 + "%";
  document.getElementById("dropperwatercss").style.left=67 + "%";
  document.getElementById("dropperwatercss").setAttribute("onclick", "dropperdropwatergslideclick()");
}

function dropperdropwatergslideclick(){
  document.getElementById("waterdropcss").style.display="block";
  document.getElementById("droppercss").style.display="block";
  document.getElementById("dropperwatercss").style.display="none";
  document.getElementById("droppercss").removeAttribute("onclick", "droppermovetowaterbeakerclick()");
  document.getElementById("coverslipcss").setAttribute("onclick", "coverslipclick()");
}

function coverslipclick(){
  document.getElementById("coverslipcss").style.top= 45+ "%";
  document.getElementById("coverslipcss").style.left=66 + "%";

}