// Menu mobile partagé : bouton Menu, panneau de rubriques, fermeture Échap,
// clic dehors et retour au layout bureau. Sans JavaScript, la nav reste
// visible et repliée sous le logo (voir editorial.css).
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principale");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Fermer le menu" : "Ouvrir le menu",
    );
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      nav.classList.contains("open") &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  matchMedia("(min-width: 941px)").addEventListener("change", function (event) {
    if (event.matches) setOpen(false);
  });
})();
