

/*-------------------------------------------------------------------------------
PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function(){
		$('.preloader').fadeOut(1000); // set duration in brackets    
});

//Esc Key
$.fn.escape = function(callback) {
  return this.each(function() {
    jQuery(document).on("keydown", this, function(e) {
      var keycode =
        typeof e.keyCode != "undefined" && e.keyCode ? e.keyCode : e.which;
      if (keycode === 27) {
        callback.call(this, e);
      }
    });
  });
};

//Menu Navigation Hamburger
var navigationRight = jQuery(".menu-wrap");

function Navigation() {
  var bodyEl = document.body,
    content = document.querySelector("#close-button"),
    openbtn = document.getElementById("open-button"),
    closebtn = document.getElementById("close-button"),
    isOpen = false;

  function init() {
    initEvents();
  }

  function initEvents() {
    openbtn.addEventListener("click", toggleMenu);
    if (closebtn) {
      closebtn.addEventListener("click", toggleMenu);
    }

    // close the menu element if the target it´s not the menu element or one of its descendants..
    content.addEventListener("click", function(ev) {
      var target = ev.target;
      if (isOpen && target !== openbtn) {
        toggleMenu();
      }
    });
  }

  function toggleMenu() {
    if (isOpen) {
      classie.remove(bodyEl, "show-menu");
    } else {
      classie.add(bodyEl, "show-menu");
    }
    isOpen = !isOpen;
  }

  navigationRight.escape(function() {
    if (isOpen) {
      classie.remove(bodyEl, "show-menu");
      classie.remove(openbtn, "active");
    }
    isOpen = !isOpen;
  });

  init();
}

//Menu Right Side
if (navigationRight.length > 0) {
  Navigation();
}
