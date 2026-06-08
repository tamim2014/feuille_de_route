/* ---------------------------------------------------
   ACCORDÉONS
--------------------------------------------------- */
document.querySelectorAll(".accordion-title").forEach(title => {
    title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});



/* ------------------------------------------------------------------
   Pagination: Add active class to the current button (highlight it)
-------------------------------------------------------------------- */

/*       
var tabcontent = document.getElementById("tabcontent");
var btns = tabcontent.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activer");
  current[0].className = current[0].className.replace(" activer", "");
  this.className += " activer";
  });
}
*/

/* 
 * Garge-Les-Gonesse
 * 08.062026
 * Toggle notes 
 *

 * Le dernier btn doit foncionner comme un un interrupteur
 * La premiere fois il s'enfonce
 * La 2em fois il se relache
 */
var tabcontent = document.getElementById("tabcontent");
var btns = tabcontent.getElementsByClassName("btn");
var defaultBtn = tabcontent.querySelector(".default-btn");

// Gestion des boutons normaux
for (let btn of btns) {

  // On ignore les interrupteurs ici
  if (btn.classList.contains("toggle-btn")) continue;

  btn.addEventListener("click", function() {
    let current = tabcontent.querySelector(".activer");
    if (current) current.classList.remove("activer");
    this.classList.add("activer");
  });
}

// Gestion des boutons interrupteurs
for (let toggle of tabcontent.getElementsByClassName("toggle-btn")) {

  toggle.addEventListener("click", function(e) {
    e.stopPropagation();

    // Si déjà actif → on désactive et on remet le bouton par défaut
    if (this.classList.contains("activer")) {
      this.classList.remove("activer");
      defaultBtn.classList.add("activer");
    }
    // Sinon → comportement normal
    else {
      let current = tabcontent.querySelector(".activer");
      if (current) current.classList.remove("activer");
      this.classList.add("activer");
    }
  });
}







/* 
 * Garge-Les-Gonesse
 * 08.062026
 * Toggle notes 
 *
 */


// ===========================================================
//  Footer notes: Repliable (comme un panneau d’admin)
// ===========================================================


function toggleNotes() {
    document.getElementById("notes").classList.toggle("open");
}

// ===========================================================
//  infobulle(toolpip): Sur le dernier bouton(&raquo;)
// ===========================================================

// When the user "survol" on btn(&raquo;), open the toolpip

/* On la remplace par du css

function infobulle() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}	

*/
