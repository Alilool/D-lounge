const menuBtn = document.querySelectorAll(".menuBtn");
const menuContainer = document.querySelectorAll(".menu-container");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlayImage");
const closeBtn = document.getElementById("closeBtn");
const burgerBtn = document.getElementById("burgerBtn");
const dropdown = document.getElementById("dropdown");

menuBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    if (content.classList.contains("hidden")) {
      // Hide all others
      menuContainer.forEach((container) => {
        if (container !== content && !container.classList.contains("hidden")) {
          container.classList.remove("fade-up");
          container.classList.add("fade-down");
          container.addEventListener(
            "animationend",
            () => container.classList.add("hidden"),
            { once: true }
          );
        }
      });

      // Show clicked one
      content.classList.remove("hidden", "fade-down");
      content.classList.add("fade-up");
    } else {
      // Hide clicked one if already open
      content.classList.remove("fade-up");
      content.classList.add("fade-down");
      content.addEventListener(
        "animationend",
        () => content.classList.add("hidden"),
        { once: true }
      );
    }
  });
});

document.querySelectorAll(".menu").forEach((img) => {
  img.addEventListener("click", () => {
    overlayImage.src = img.src;
    overlay.classList.remove("hidden");
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

const closeOverlay = () => {
  overlay.classList.add("hidden");
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
};

closeBtn.addEventListener("click", closeOverlay);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

// Close overlay when ESC key is pressed
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeOverlay();
  }
});
