const flash = document.getElementById("flash");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  const now = window.scrollY;

  if (Math.abs(now - lastScroll) > 450) {

    flash.classList.remove("active");

    void flash.offsetWidth;

    flash.classList.add("active");
  }

  lastScroll = now;

});


/* حركة سينمائية حسب مكان الشاشة */

const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("active-scene");

    }

  });

},
{
threshold:.35
}
);

scenes.forEach(scene => observer.observe(scene));


/* إعادة التجربة */

function restart(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


/* حركة بسيطة بالماوس */

document.addEventListener("mousemove",(e)=>{

  const x =
    (e.clientX / window.innerWidth - .5);

  const y =
    (e.clientY / window.innerHeight - .5);

  document.documentElement.style.setProperty(
    "--mouse-x",
    `${x * 15}px`
  );

  document.documentElement.style.setProperty(
    "--mouse-y",
    `${y * 15}px`
  );

});
