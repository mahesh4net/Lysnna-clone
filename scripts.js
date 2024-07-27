function togglemenu() {
  const menuitem = document.getElementById("menudiv");
  if (menuitem.style.opacity === "0") {
    menuitem.style.opacity = "1";
  } else {
    menuitem.style.opacity = "0";
  }
}


function toggleVisibility() {
  const content = document.getElementById('menudiv');
  content.classList.toggle('show');
}