let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

// --------** showSlide **---------
function showSlide(index) {
  // تحقق من أن الشريحة لا تتجاوز آخر شريحة وتعود إلى الأولى
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // تحريك الشريط إلى الشريحة المطلوبة
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots[i].classList.remove("active");
  });
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  // الانتقال إلى الشريحة التالية
  showSlide(currentSlide + 1);
}

// ------** prevSlide **------
function prevSlide() {
  // الانتقال إلى الشريحة السابقة
  showSlide(currentSlide - 1);
}

// ------** goToSlide **------
function goToSlide(index) {
  // الانتقال إلى شريحة معينة عند الضغط على النقاط
  showSlide(index);
}

// ------** autoSlide **-------
function autoSlide() {
  // التبديل التلقائي بين الشرائح
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000); // التبديل كل 3 ثواني
}

// ------** pauseSlide **------
function pauseSlide() {
  // إيقاف التبديل التلقائي عند مرور الماوس
  clearInterval(autoSlideInterval);
}

// ------** show slide **-------
showSlide(currentSlide);
autoSlide();

// إيقاف التبديل التلقائي عند مرور الماوس فوق الشريط
document
  .querySelector(".slider-container")
  .addEventListener("mouseover", pauseSlide);
document
  .querySelector(".slider-container")
  .addEventListener("mouseout", autoSlide);
