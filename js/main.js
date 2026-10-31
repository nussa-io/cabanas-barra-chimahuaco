/* ==========================================================================
   Cabañas Barra — small helpers shared by every page
   ========================================================================== */

(function () {
  var root = document.documentElement;
  root.classList.remove("no-js");

  // Phone menu (☰)
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    // Close after tapping a link or pressing Escape
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Remember the language the visitor picked, so the home redirect respects it
  document.querySelectorAll("[data-lang]").forEach(function (link) {
    link.addEventListener("click", function () {
      try { localStorage.setItem("lang", link.getAttribute("data-lang")); } catch (e) {}
    });
  });

  // Photo galleries: tap a photo to see it large (links open the photo without JS)
  var zoomLinks = document.querySelectorAll("[data-zoom]");
  if (zoomLinks.length && typeof HTMLDialogElement === "function") {
    var closeLabel = root.lang === "en" ? "Close" : "Cerrar";
    var box = document.createElement("dialog");
    box.className = "lightbox";
    box.innerHTML = '<img alt=""><p></p><button class="lightbox-close" type="button" aria-label="' + closeLabel + '">&times;</button>';
    document.body.appendChild(box);
    var boxImg = box.querySelector("img");
    var boxText = box.querySelector("p");
    box.querySelector("button").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
    zoomLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var img = link.querySelector("img");
        boxImg.src = link.getAttribute("href");
        boxImg.alt = img ? img.alt : "";
        boxText.textContent = img ? img.alt : "";
        box.showModal();
      });
    });
  }

  // Current year in the footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
