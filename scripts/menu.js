var menuItems = ["section1Btn","section2Btn","section3Btn","section4Btn","section5Btn","section6Btn"],
sections = ["section1","section2","section3","section4","section5","section6"],
waypoints = {},
menuHeight = document.getElementById("menu").offsetHeight;

menuItems.forEach(function(el,i){
  document.getElementById(el).onclick = function() {
      TweenMax.to(window, 1, {scrollTo:{y:"#section" + (i+1), offsetY: menuHeight},ease:Power3.easeInOut});
  };
});

function updateMenuClasses(item){
  menuItems.forEach(function(el,i){
    document.getElementById(el).classList.remove('active');
  });
  item.classList.add("active");
  console.log(item);
}

sections.forEach(function(el, i){
  waypoints[el] = new Waypoint({
    element: document.getElementById(el),
    offset: menuHeight+5,
    handler: function(direction){
      var element = this.element;
      updateMenuClasses(element);
    }
  });
});
