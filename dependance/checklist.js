/**
 * la boucle
 * le chargement
 * la sauvegarde
 * la logique
 */
 
 /* ---------------------------------------------------
   SAUVEGARDE AUTOMATIQUE DES CHECKBOXES
--------------------------------------------------- */
 
 
const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(cb => {
    const key = PAGE_PREFIX + cb.id;

    const saved = localStorage.getItem(key);
    if (saved === "true") cb.checked = true;

    cb.addEventListener("change", () => {
        localStorage.setItem(key, cb.checked);
    });
});
