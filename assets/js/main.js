document.addEventListener("DOMContentLoaded", () => {

  const yearEl = document.getElementById("y");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const openLinks = document.querySelectorAll("[data-modal-open]");
  const closeSelector = "[data-modal-close]";
  let lastFocus = null;

  function openModal(id) {
    const modal = document.getElementById("modal-" + id);
    if (!modal) return;

    lastFocus = document.activeElement;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;

    modal.hidden = true;
    document.body.style.overflow = "";

    if (lastFocus) lastFocus.focus();
  }

  openLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("data-modal-open");
      openModal(id);
    });
  });

  document.addEventListener("click", (e) => {
    const closeEl = e.target.closest(closeSelector);
    if (!closeEl) return;

    e.preventDefault();
    const modal = e.target.closest(".modal");
    closeModal(modal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const openModalEl = document.querySelector(".modal:not([hidden])");
    if (openModalEl) closeModal(openModalEl);
  });

});
