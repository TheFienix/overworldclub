var menuItems = document.querySelectorAll(".menu .menu-link"),
sections = document.querySelectorAll(".section"),
waypoints = {},
menuHeight = document.getElementById("menu").offsetHeight - 3,
burgerButton = document.getElementById("burger-button"),
menu = document.getElementById("menu"),
downArrows = document.querySelectorAll(".arrow.down")
;


function currentScrollPosition(){
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  return scrollPos;
}

function scrollToSection(sectionId){
  targetSection = document.getElementById(sectionId);
  direction = targetSection.offsetTop < currentScrollPosition() ? 2 : 0;
  direction = sectionId === (sections[sections.length - 1].id) ? -menuHeight : direction;
  TweenMax.to(window, 1, {scrollTo:{y: "#"+sectionId, offsetY: menuHeight + direction },ease:Power3.easeInOut});
}

function showContent(element){
  var content = element.querySelector('.contents');
  if ( ! content.classList.contains('show')) {
    content.classList.add('show');
  }
}

menuItems.forEach(function(el,i){
  el.onclick = function(event) {
    event.preventDefault();
    toggleMenu();
    var sectionId = "section" + (i+1);
    scrollToSection(sectionId);
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
  waypoints[i] = new Waypoint({
    element: el,
    offset: function() {
      return i === 0 ? -10 : menuHeight + 1;
    },
    handler: function(direction){
      var element = this.element;
      updateMenuClasses(element);
      showContent(element);
    }
  });
});

function toggleMenu(){
  burgerButton.classList.toggle('x');
  menu.classList.toggle('open');
}

burgerButton.onclick = function(event){
  toggleMenu();
};

downArrows.forEach(function(el,i){
  el.onclick = function(event){
    var parent = el.parentNode.parentNode,
    nextSectionId = "section" + (Number(parent.id.slice(7)) + 1);
    scrollToSection(nextSectionId);
  };
});
