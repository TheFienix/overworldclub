var section1Btn = document.getElementById("section1Btn"),
section2Btn = document.getElementById("section2Btn"),
section3Btn = document.getElementById("section3Btn"),
section4Btn = document.getElementById("section4Btn"),
section5Btn = document.getElementById("section5Btn"),
section6Btn = document.getElementById("section6Btn"),
menuHeight = document.getElementById("menu").offsetHeight;

section1Btn.onclick = function() {
  TweenMax.to(window, 1, {scrollTo:{y:"#section1", offsetY: menuHeight},ease:Power3.easeInOut});
};

section2Btn.onclick = function(e) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section2", offsetY: menuHeight},ease:Power3.easeInOut});
};

section3Btn.onclick = function(e) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section3", offsetY: menuHeight},ease:Power3.easeInOut});
};

section4Btn.onclick = function(e) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section4", offsetY: menuHeight},ease:Power3.easeInOut});
};

section5Btn.onclick = function(e) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section5", offsetY: menuHeight},ease:Power3.easeInOut});
};

section6Btn.onclick = function(e) {
  TweenMax.to(window, 1, {scrollTo:{y:"#section6", offsetY: menuHeight},ease:Power3.easeInOut});
};
