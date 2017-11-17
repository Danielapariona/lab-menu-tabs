var tabs = document.querySelectorAll(".tab");
var section = document.querySelectorAll("section");

/* Selecciona cada una de las etiquetas del tab */
function toggleTab(tab) {
  for (var i=0; i<tab.length; i++) {
   tab[i].addEventListener("click", showContent);
  }
}

function showContent(event) {
  /*Muestra el valor del atributo 'selected' de tab*/
  var selectedTab = event.target.dataset.selected
  //console.log(selected); 

  /*Itera por el contenido */
  for (var i = 0; i < section.length; i++) {
    var sectionCurrent = section[i].dataset.selected;
    tabs[i].classList.remove('tabSelected');

    if (sectionCurrent === selectedTab) {

      //Verifica si tab tiene la clase selected
      tabs[i].classList.add('tabSelected');
    
      // Verifica si el contenido tiene la clase hidden
      if (section[i].classList.contains('hiddenContent')) {
        section[i].classList.remove('hiddenContent');
      }
    } else {
      section[i].classList.add('hiddenContent');
    }
  }
}

window.onload = function() {
  toggleTab(tabs);
}