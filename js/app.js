/* Template Name: Xegal - Responsive Bootstrap 5 Landing Page Template
   Author: Pichforest
   File Description: Main js file
*/

/*************** scroll sticky Js **************/
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

/*************** Preloader Js **************/

window.onload = function loader() {
  setTimeout(() => {
    document.getElementById("preloader").style.visibility = "hidden";
    document.getElementById("preloader").style.opacity = "0";
  }, 350);
};

/*************** Counter Js **************/

const stats = document.querySelectorAll(".counter");

stats.forEach((stat) => {
  // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
  const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
  const time = 1000;
  let result = [...patt.exec(stat.textContent)];
  let fresh = true;
  let ticks;

  // Remove first full match from result array (we dont need the full match, just the individual match groups).
  result.shift();
  // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
  result = result.filter((res) => res != null);

  while (stat.firstChild) {
    stat.removeChild(stat.firstChild);
  }

  for (let res of result) {
    if (isNaN(res)) {
      stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
    } else {
      for (let i = 0; i < res.length; i++) {
        stat.insertAdjacentHTML(
          "beforeend",
          `<span data-value="${res[i]}">
						<span>0</span>
						${Array(parseInt(res[i]) + 1)
            .join(0)
            .split(0)
            .map(
              (x, j) => `
							<span>${j}</span>
						`
            )
            .join("")}
					</span>`
        );
      }
    }
  }

  ticks = [...stat.querySelectorAll("span[data-value]")];

  let activate = () => {
    let top = stat.getBoundingClientRect().top;
    let offset = window.innerHeight * 0.8;

    setTimeout(() => {
      fresh = false;
    }, time);

    if (top < offset) {
      setTimeout(
        () => {
          for (let tick of ticks) {
            let dist = parseInt(tick.getAttribute("data-value")) + 1;
            tick.style.transform = `translateY(-${dist * 100}%)`;
          }
        },
        fresh ? time : 0
      );
      window.removeEventListener("scroll", activate);
    }
  };
  window.addEventListener("scroll", activate);
  activate();
});

/*************** Testimonial-slider Js **************/

var swiper = new Swiper(".testi-slider", {
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    }
  }
});

/*************** Home-slider Js **************/

var swiper = new Swiper(".hero-slider", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "cube",
  cubeEffect: {
    shadow: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


//
/********************* scroll top js ************************/
//


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  ShowBackToTop();
};
window.onload = function () {
  ShowBackToTop();
  windowScroll()
}

const btnBackToTop = document.getElementById("back-to-top");
const heightShowBtnB2T = 100;
function ShowBackToTop() {
  if (document.body.scrollTop > heightShowBtnB2T || document.documentElement.scrollTop > heightShowBtnB2T) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// let members = []

// document.getElementById("abc").addEventListener('DOMNodeInserted', () => {
//   var member = document.getElementsByClassName("___jc9uze0")
//   for(m of member) {
//     let mm = m.innerText
//     if(!members.includes(mm)) {
//       console.log(mm)
//       members.push(mm)
//     }
//   }
// })

/* show expand nav menu */
document.querySelectorAll("#navbar .nav-item > .menu_list__expand").forEach((menuExpand) => {
  const navItem = menuExpand.closest("li.nav-item");
  navItem.addEventListener("click", function (evt) {
    evt.preventDefault()
    navItem.classList.toggle('underline');
    navItem.querySelector("a").classList.toggle('!text-[#2F44B5]');
    navItem.querySelector("a span").classList.toggle('mdi-rotate-180');
    
    menuExpand.classList.toggle("hidden")
  })

  // hidden expand menu
  document.addEventListener('click', (event) => {
    const targetElement = event.target;

    if (!navItem.contains(targetElement)) {
      navItem.classList.remove('underline');
      navItem.querySelector("a").classList.remove('!text-[#2F44B5]');
      navItem.querySelector("a span").classList.remove('mdi-rotate-180');
      menuExpand.classList.add('hidden');
    }
  });
})

document.getElementById("btnCollapse").addEventListener("click", function() {
  document.querySelector(".range-collapse").classList.toggle("hidden")
  document.querySelector(".range-collapse").classList.toggle("flex")
})