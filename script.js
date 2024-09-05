const shrBtn = document.querySelector(".shr-btn");
const shrBox = document.querySelector(".shr-box");
const closeBtn = document.querySelector(".close");
const userContainer = document.querySelector(".user");

const showShrBox = () => {
  shrBox.style.display = "flex";
  shrBox.classList.add("active");
  shrBtn.classList.add("active");
  userContainer.classList.add("active");
};

const hideShrBox = (animationStatus) => {
  shrBox.classList.remove("active");
  shrBtn.classList.remove("active");
  userContainer.classList.remove("active");
  if (animationStatus) {
    setTimeout(() => {
      shrBox.style.display = "none";
    }, 900);
  } else {
    shrBox.style.display = "none";
  }
};

shrBtn.addEventListener("click", () => {
  shrBtn.classList.contains("active") ? hideShrBox(true) : showShrBox();
});

closeBtn.addEventListener("click", () => {
  hideShrBox(false);
});
