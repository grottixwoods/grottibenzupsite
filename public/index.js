//Menu scroll effects
document.fonts.ready.then(() => document.body.classList.add("fonts-ready"));
const aboutLink = document.querySelector("#link_about");
const aboutSection = document.querySelector("#about");
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top:
      aboutSection.offsetTop - aboutSection.scrollTop + aboutSection.clientTop,
    behavior: "smooth",
  });
});
const studioLink = document.querySelector("#link_studio");
const studioSection = document.querySelector("#studio");
studioLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top:
      studioSection.offsetTop -
      studioSection.scrollTop +
      studioSection.clientTop,
    behavior: "smooth",
  });
});
const bottomLink = document.querySelector("#link_bottom");
const bottomSection = document.querySelector("#bottom");
bottomLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top:
      bottomSection.offsetTop -
      bottomSection.scrollTop +
      bottomSection.clientTop,
    behavior: "smooth",
  });
});
//Slider scroll effects
const sliderProgress = document.querySelector(".progress");
window.addEventListener("scroll", (e) => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (winScroll / height) * 100;
  sliderProgress.style.background = `linear-gradient(90deg, rgba(139,0,255,1) 0%, rgba(139,0,255,1) ${progress}%, rgba(255,255,255,1) ${progress}%, rgba(255,255,255,1) 100%)`;
});
