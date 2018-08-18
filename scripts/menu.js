var menuItems = document.querySelectorAll(".menu .menu-link"),
sections = ["section1","section2","section3","section4","section5","section6"],
waypoints = {},
menuHeight = document.getElementById("menu").offsetHeight - 3;


function currentScrollPosition(){
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  return scrollPos;
}

menuItems.forEach(function(el,i){
  el.onclick = function(event) {
    event.preventDefault();
    var sectionId = "section" + (i+1),
    targetSection = document.getElementById(sectionId);
    direction = targetSection.offsetTop < currentScrollPosition() ? 2 : 0;
    console.log(menuHeight + direction);
    TweenMax.to(window, 1, {scrollTo:{y: "#"+sectionId, offsetY: menuHeight + direction },ease:Power3.easeInOut});
  };
});

function updateMenuClasses(section){
  menuItems.forEach(function(item,i){
    item.classList.remove('active');
    if(item.hash.slice(1) === section.id ){
      item.classList.add('active');
    }
  });

}

sections.forEach(function(el, i){
  waypoints[el] = new Waypoint({
    element: document.getElementById(el),
    offset: function() {
      return i === 0 ? 0 : menuHeight + 1;
    },
    handler: function(direction){
      var element = this.element;
      updateMenuClasses(element);
    }
  });
});
