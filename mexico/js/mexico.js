// Cambio de color body background al hacer scroll.

window.onscroll = function() {bgDynamic()};

function bgDynamic() {
  if (document.documentElement.scrollTop >= 100 && document.documentElement.scrollTop < 300) {
    document.getElementById("bg-dynamic").className = "bg1";
  } else if (document.documentElement.scrollTop >= 300 && document.documentElement.scrollTop < 500) {
    document.getElementById("bg-dynamic").className = "bg2";
  } else if (document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop < 700) {
    document.getElementById("bg-dynamic").className = "bg3";
  } else if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop < 900) {
    document.getElementById("bg-dynamic").className = "bg4";
  } else if (document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop < 1100) {
    document.getElementById("bg-dynamic").className = "bg5";
  } else if (document.documentElement.scrollTop >= 1100 && document.documentElement.scrollTop < 1300) {
    document.getElementById("bg-dynamic").className = "bg6";
  } else {
    document.getElementById("bg-dynamic").className = "";
  }
}

// Activar o desactivar la visualización del menu responsive.

document.getElementById("hamburguer").onclick = function() { responsiveMenu()};

function responsiveMenu() {
  document.getElementById("menu-responsive").classList.toggle("show");
}