window.onload = init;
var scrollCheck;
var lastScrollVal = 0;
var triggered = false;

function scrollToElm(elm) {

  scrollCheck = true;
  scroller.to(document.getElementById(elm).getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop)

}

function scrollSnap() {

  main_pos = 0;
  about_pos = document.getElementById('about').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop;
  features_pos = document.getElementById('features').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop
  pricing_pos = document.getElementById('pricing').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop
  contact_pos = document.getElementById('contact').getBoundingClientRect().left + document.getElementById('horizontal-scroll-wrapper').scrollTop

    if (!scrollCheck) {

      scrollValue = Math.floor(document.getElementById('horizontal-scroll-wrapper').scrollTop);

      if (scrollValue > lastScrollVal) {

        if (main_pos < scrollValue && scrollValue < about_pos) {
            scrollToElm('about');
        } else if (about_pos < scrollValue && scrollValue < features_pos) {
            scrollToElm('features');
        } else if (features_pos < scrollValue && scrollValue < pricing_pos) {
            scrollToElm('pricing');
        } else if (pricing_pos < scrollValue && scrollValue < contact_pos) {
            scrollToElm('contact');
        }

        scrollValue = lastScrollVal;

      } else if (scrollValue < lastScrollVal) {

        if (main_pos < scrollValue && scrollValue < about_pos) {
            scrollToElm('main');
        } else if (about_pos < scrollValue && scrollValue < features_pos) {
            scrollToElm('about');
        } else if (features_pos < scrollValue && scrollValue < pricing_pos) {
            scrollToElm('features');
        } else if (contact_pos > scrollValue) {
            scrollToElm('pricing');
        }

        scrollValue = lastScrollVal;

      }

    }

}

function init() {

    if (window.Event) {

      document.captureEvents(Event.MOUSEMOVE);

    }

      document.getElementById("hover").onmousemove = changeCursorXY;

}

function changeCursorXY(e) {

  if (getComputedStyle(document.getElementById("menu_button")).getPropertyValue('--button_hover_flag') == 1 || getComputedStyle(document.getElementById("menu_navbar")).getPropertyValue('--button_hover_flag') == 1) {

    document.getElementById("menu_button").classList.add("change");

  } else {

    document.getElementById("menu_button").classList.remove("change");

  }

  if (getComputedStyle(document.getElementById("bounding-box")).getPropertyValue('--flag') == 1) {

    cursorX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    cursorY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if ((cursorY < document.getElementById("bounding-box").getBoundingClientRect().bottom) && (cursorX - 25 > 0 && cursorX - 25 < document.getElementById("bounding-box").getBoundingClientRect().right)) {
      document.getElementById("menu_button").style.transition = "0.25s"
      document.getElementById("menu_button").style.left = String(cursorX - 25).concat("px");

    } else {

      document.getElementById("menu_button").style.transition = "1s"
      document.getElementById("menu_button").style.left = "30px";

    }

  }

    document.getElementById("hover").onmouseleave = function() {document.getElementById("menu_button").style.transition = "1s"; document.getElementById("menu_button").style.left = "30px";};

}


const scroller = new SweetScroll(
  {
    horizontal: true,
    complete: (isCancel, scroller) => {
     scrollCheck = false;
     lastScrollVal = Math.floor(document.getElementById('horizontal-scroll-wrapper').scrollTop);
   },
  },
  '#horizontal-scroll-wrapper',

);

var imgs = document.images,
    len = imgs.length,
    check = [],
    counter = 0;

function textChange() {

  document.getElementById("text").innerText = "Done!";
  document.getElementById("text").style.left = "10px";
  setTimeout(loadOut, 1000);

}

setTimeout(textChange, 1000);

function isLoaded(){

  [].forEach.call(imgs, function(img, i) {
      check[i]=(img.complete);
  } );

  return !(check.includes(false))

}

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        setTimeout('loadOut', 1000);
    }
}

function loadOut() {

  scroll(0,0);
  var elm = document.body;
  elm.classList.add("load");

}

particlesJS("bgParticles",
{
  "particles": {
    "number": {
      "value": 33,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#5eff00"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 170.41996348143653,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 450.3956177723679,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

var els = document.querySelectorAll('.get-started');
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener('mouseenter', function(e) {
    e.target.classList.add('ready');
  }, { once: true });
}
