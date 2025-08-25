const btn = document.querySelector(".dropdown-btn");
const list = document.querySelector(".dropdown-list");

btn.addEventListener("click", () => {
  list.style.display = list.style.display === "block" ? "none" : "block";

});

list.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    const flag = li.dataset.flag;
    btn.innerHTML = `
    <span class="fi fi-${flag}"></span>
    <svg width="15" height="8" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.8256 14.4506C13.474 14.8021 12.9972 14.9996 12.5 14.9996C12.0028 14.9996 11.526 14.8021 11.1744 14.4506L0.567502 3.84375C0.388421 3.67079 0.245579 3.46389 0.147312 3.23513C0.0490452 3.00637 -0.00267913 2.76034 -0.00484254 2.51138C-0.00700594 2.26241 0.0404353 2.01552 0.134712 1.78509C0.228989 1.55465 0.368213 1.34531 0.544262 1.16926C0.720311 0.993208 0.929658 0.853984 1.16009 0.759707C1.39052 0.665431 1.63742 0.61799 1.88638 0.620154C2.13534 0.622317 2.38138 0.674041 2.61014 0.772308C2.83889 0.870575 3.04579 1.01342 3.21875 1.1925L12.5 10.4737L21.7813 1.1925C22.1349 0.850951 22.6085 0.661962 23.1001 0.666234C23.5917 0.670506 24.062 0.867697 24.4097 1.21534C24.7573 1.56298 24.9545 2.03325 24.9588 2.52487C24.963 3.01649 24.774 3.49012 24.4325 3.84375L13.8256 14.4506Z"
            fill="currentColor"
        />
    </svg>
    `;
    list.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !list.contains(e.target)) {
    list.style.display = "none";
  }
});


const faqList = document.querySelector(".faq__list");

faqList.querySelectorAll(".faq__item").forEach((item) => {
  const question = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");

  question.addEventListener("click", () => {
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    question.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!item.contains(e.target)) {
      answer.style.display = "none";
      question.classList.remove("active");
    }
  });
});

const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-testimonial-button-next",
    prevEl: ".swiper-testimonial-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


const burgerBtn = document.querySelector('.header__burger-button');
const mobileMenu = document.querySelector('.header__mobile-menu');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})