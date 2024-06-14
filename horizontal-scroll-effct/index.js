const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    direction: "horizontal",
  });

  let blocks = document.querySelectorAll(".block[data-block-section]");
  scroll.on("scroll", (args) => {
    blocks.forEach((block) => {
      let attr = block.getAttribute("data-block-section");
      let section = document.querySelector(
        `section[data-block-section='${attr}']`
      );

      if (section.getBoundingClientRect().left <= block.offsetWidth * attr) {
        block.classList.add("fixed");
        block.classList.remove("init");
        block.classList.remove("active");
        block.style.left = "";
      } else if (
        section.getBoundingClientRect().left >=
        window.innerWidth - block.offsetWidth * (blocks.length - attr)
      ) {
        block.classList.add("init");
        block.classList.remove("active");
        block.classList.remove("fixed");
        block.style.left = "";
      } else {
        block.classList.add("active");
        block.classList.remove("init");
        block.classList.remove("fixed");
      }

      if (block.classList.contains("active")) {
        block.style.left = section.getBoundingClientRect().left + "px";
      }
    });
  });