function restartexp() {
  location.reload();
}

var imgblade = null;
var imgtbdown = null;
var imgtbdowncut = null;
var bladeimg;
function bladejsclick() {
  bladeimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.top = 10.5 + '%';
  var bladeleft = 15; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladeleft == 26) {

      clearInterval(imgblade);
      imgtbdown = setInterval(frames, 200);

    } else {

      bladeleft++;
      bladeimg.style.left = bladeleft + '%';

    }
  }

  function frames() {
    clearInterval(imgtbdown);
    var bladetopp = 12;
    var bladeleftd = 15;
    bladeimg.style.left = bladeleftd + '%';
    bladeimg.style.top = bladetopp + '%';
    imgtbdowncut = setInterval(framescut, 60);

  }

  function framescut() {
    var bladeleftdcut = 15;
    clearInterval(imgtbdowncut);
    imgblade = setInterval(framecut2, 90);

    function framecut2() {
      if (bladeleftdcut == 26) {

        clearInterval(imgblade);
        document.getElementById("bladecss").style.display = "none";
        document.getElementById("bladecsscorkcut").style.display = "block";
        //bladeimg.style.left = 60 + '%';
        // bladeimg.style.top = 5 + '%';
        document.getElementById("leafcss").style.display = "none";
        document.getElementById("leafcutsection").style.display = "block";
        document.getElementById("leafcutcss").style.display = "block";


      } else {

        bladeleftdcut++;
        bladeimg.style.left = bladeleftdcut + '%';

      }
    }
  }

}


function placeincork() {
  document.getElementById("leafcutcss").style.left = 55 + "%";
  document.getElementById("leafcutcss").style.top = 19 + "%";
  document.getElementById("bladecsscorkcut").setAttribute("onclick", "bladejscorkclick()");

}

var imgbladecutleft = null;
var imgbladecutright = null;
var imgblademoveleft = null;
var imgblademovedowncork = null;
var imgblademovedowncork1 = null;
var bladeorgpos = null;
var bladecorkimg;
function bladejscorkclick() {
  bladecorkimg = document.getElementById("bladecsscorkcut");

  var bladetop = 15; //initial  position
  clearInterval(imgbladecutright);

  imgbladecutright = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladetop == 24) {

      clearInterval(imgbladecutright);
      imgbladecutleft = setInterval(framesleft, 200);

    } else {
      bladecorkimg.style.transform = "rotate(90deg)";
      bladetop++;
      bladecorkimg.style.top = bladetop + '%';

    }
  }

  function framesleft() {
    clearInterval(imgbladecutleft);
    bladecorkimg.style.top = 15 + '%';
    bladecorkimg.style.left = 56 + '%';
    imgblademoveleft = setInterval(frameleftcut, 90);

  }

  function frameleftcut() {
    var bladetopl = 15;

    clearInterval(imgblademoveleft);

    imgblademoveleft = setInterval(framemoveleft, 90);
    function framemoveleft() {

      if (bladetopl == 24) {

        clearInterval(imgblademoveleft);
        bladecorkimg.style.transform = "rotate(0deg)";
        bladecorkimg.style.top = 5 + '%';
        bladecorkimg.style.left = 65 + '%';
        document.getElementById("corkcss").style.transform = "rotate(90deg)";
        document.getElementById("leafcutcss").style.display = "none";
        document.getElementById("leafsection").style.display = "block";
        imgblademovedowncork = setInterval(framemovedown, 200);

      } else {
        bladecorkimg.style.transform = "rotate(90deg)";
        bladetopl++;
        bladecorkimg.style.top = bladetopl + '%';

      }
    }
  }
  function framemovedown() {

    var bladetopl = 15;
    clearInterval(imgblademovedowncork);

    imgblademovedowncork1 = setInterval(framemovedowncork, 90);
    function framemovedowncork() {

      if (bladetopl == 24) {

        clearInterval(imgblademoveleft);
        clearInterval(imgblademovedowncork1);
        bladecorkimg.style.top = 15 + '%';
        bladecorkimg.style.left = 76 + '%';
        bladecorkimg.style.transform = "rotate(0deg)";
        document.getElementById("leafsection1").style.display = "block";
        bladeorgpos = setInterval(bladeorgposition, 200);
      }
      else {
        bladecorkimg.style.transform = "rotate(90deg)";
        bladecorkimg.style.left = 61 + '%';
        bladetopl++;
        bladecorkimg.style.top = bladetopl + '%';
      }
    }

  }

  function bladeorgposition() {
    clearInterval(bladeorgpos);
    bladecorkimg.style.top = 5 + '%';
    bladecorkimg.style.left = 60 + '%';
    bladecorkimg.style.transform = "rotate(0deg)";
    document.getElementById("bladecsscorkcut").removeAttribute("onclick", "bladejscorkclick()");
  }

}



function putinglassslide() {
  document.getElementById("leafsection1").style.top = 48 + "%";
  document.getElementById("leafsection1").style.left = 69 + "%";
  document.getElementById("droppercss").setAttribute("onclick", "dropperwater()");
}


function dropperwater() {
  document.getElementById("droppercss").style.left = 65 + "%";
  document.getElementById("droppercss").removeAttribute("onclick", "dropperwater()");
  document.getElementById("droppercss").setAttribute("onclick", "droppermoveglassslide()");
}

function droppermoveglassslide() {
  document.getElementById("dropperwatercss").style.display = "block";
  document.getElementById("dropperwatercss").style.left = 68 + "%";
  document.getElementById("dropperwatercss").style.top = 26 + "%";
  document.getElementById("droppercss").style.display = "none";
  document.getElementById("dropperwatercss").removeAttribute("onclick", "droppermoveglassslide()()");
  document.getElementById("dropperwatercss").setAttribute("onclick", "dropwaterglassslide()");

}

var dropwater = null;
var dropimage;
function dropwaterglassslide() {
  dropimage = document.getElementById("dropcss").style.display = "block";
  var waterdroptop = 45;
  clearInterval(dropwater);

  dropwater = setInterval(framemovedrop, 90);

  function framemovedrop() {

    if (waterdroptop == 48) {
      clearInterval(dropwater);
      document.getElementById("watercss").style.display = "block";
      document.getElementById("dropperwatercss").style.display = "none";
      document.getElementById("droppercss").style.display = "block";
      document.getElementById("droppercss").style.left = 75 + "%";
      document.getElementById("dropcss").style.display = "none";
      document.getElementById("coverslipcss").setAttribute("onclick", "coverslipcover()");

    }
    else {

      waterdroptop++;
      dropimage.style.top = waterdroptop + '%';
    }
  }

}



function coverslipcover() {
  document.getElementById("coverslipcss").style.left = 68 + "%";
  document.getElementById("coverslipcss").style.top = 45 + "%";
  document.getElementById("coverslipcss").removeAttribute("onclick", "coverslipcover()");
  document.getElementById("glassslidecss").setAttribute("onclick", "glasslidetomicroscope()");

}

function glasslidetomicroscope() {
  document.getElementById("mircoscopeslidecss").style.display = "block";
  document.getElementById("leafsection1").style.display = "none";
  document.getElementById("glassslidecss").style.display = "none";
  document.getElementById("coverslipcss").style.display = "none";
  document.getElementById("watercss").style.display = "none";


}