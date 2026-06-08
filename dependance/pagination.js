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

       
var tabcontent = document.getElementById("tabcontent");
var btns = tabcontent.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activer");
  current[0].className = current[0].className.replace(" activer", "");
  this.className += " activer";
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

	
