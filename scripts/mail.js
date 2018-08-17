// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
var coded = "NgwfFNfVY8Ves@9WDvV.8NW",
key = "DwJ71kxrRBsiCW6N5u94cqpdFzQLhKfZjlvAyGtaeUO8MSYnEbPHmToIVg0X23",
shift=coded.length,
link="",
container = document.getElementById('emailAddress')
;

for (i=0; i<coded.length; i++) {
  if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i);
    link += (ltr);
  }
  else {
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
    link += (key.charAt(ltr));
  }
}
container.innerHTML += "<a href='mailto:"+link+"'>"+link+"</a>";
