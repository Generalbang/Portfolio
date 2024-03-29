/* const body = document.getElementByTagName("body"); */

let html = document.querySelector("body");
let bootImgs = document.querySelectorAll(".boots");
let bootImg = document.querySelectorAll(".boot");

let btnRight = document.querySelector(".slider__btn--right");
let btnLeft = document.querySelector(".slider__btn--left");
let box = document.querySelectorAll(".box");

let close = document.querySelector(".close-modal");
let open = document.querySelector(".show-modal");
let modal = document.querySelector(".modal");

let sneakerSmall = document.querySelector(".sneaker__img");
let sneakerSmalls = document.querySelector(".sneaker__imgs");

let curr = 0;
let maxBootLength = bootImg.length;
let curry = 0;
let maxBootsLength = bootImgs.length;

let pos = function (slide) {
  bootImg.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

let next = function () {
  if (curr === maxBootLength - 1) {
    curr = 0;
  } else {
    curr++;
  }

  pos(curr);
};
let back = function () {
  if (curr === 0) {
    curr = maxBootLength - 1;
  } else {
    curr--;
  }

  pos(curr);
};

/* let poss = function (slide) {
  bootImgs.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}; */

/* next = function () {
  if (curry === maxBootsLength - 1) {
    curry = 0;
  } else {
    curry++;
  }

  poss(curry);
};
back = function () {
  if (curry === 0) {
    curry = maxBootsLength - 1;
  } else {
    curry--;
  }

  poss(curry);
}; */

bootImg.forEach((img, i) => (img.style.transform = `translateX(${100 * i}%)`));
/* bootImgs.forEach((img, i) => (img.style.transform = `translateX(${100 * i}%)`)); */

btnRight.addEventListener("click", next);
btnLeft.addEventListener("click", back);

/*let source = (i) => `images/image-product-${i}-thumbnail.jpg`;

 const createDots = function () {
  bootImg.forEach(function (_, i) {
    sneakerSmall.insertAdjacentHTML(
      "beforeend",
      `
        <img class="box" data-slide='${i}' src="${source(i + 1)}" alt="" />
      `
    );
  });
};
createDots(); */

sneakerSmall.addEventListener("click", function (e) {
  e.preventDefault;
  if (e.target.classList.contains("box")) {
    let { slide } = e.target.dataset;
    pos(slide);
  }
});
sneakerSmalls.addEventListener("click", function (e) {
  e.preventDefault;
  if (e.target.classList.contains("box")) {
    let { slide } = e.target.dataset;
    poss(slide);
  }
});

/* box.forEach(function (b) {
  b.addEventListener("click", function () {
    if (clicked) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}); */
/* sneakerSmall.addEventListener("click", function (e) {
  let clicked = e.target;
  box.forEach(function (b) {
    b.addEventListener("click", function () {
      if (b === clicked) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
  });
}); */

for (let i = 0; i < box.length; i++)
  box[i].addEventListener("click", function () {
    box.classList.toggle("active");
  });

let decrease = document.querySelector(".dec");
let increase = document.querySelector(".inc");
let number = document.querySelector(".no");
console.log(number);

let numb = Number(number.innerText);
increase.addEventListener("click", function () {
  numb++;
  console.log(numb);
  number.innerText = numb;
});
decrease.addEventListener("click", function () {
  if (numb <= 1) return;
  numb--;
  console.log(numb);
  number.innerText = numb;
});

/* close.addEventListener("click", function () {
  modal.classList.add("hidden");
});
open.addEventListener("click", function () {
  if (html.style.width <= "900px") return;
  if ((html.style.width = "900px")) {
    modal.classList.remove("hidden");
  }
}); */

/* nav bar */
let openNav = document.querySelector(".open");
let navBar = document.querySelector(".navbar");
let closeNav = document.querySelector(".closenav");

let closeFunc = function () {
  navBar.style.display = "none";
  openNav.style.display = "block";
  openNav.style.transition = " all 15s ease-in-out;";
};

openNav.addEventListener("click", function () {
  console.log("clicked");
  navBar.style.display = "flex";
  openNav.style.display = "none";
  openNav.style.display = "none";
});
closeNav.addEventListener("click", closeFunc);
