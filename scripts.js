window.addEventListener('DOMContentLoaded', function () {
  var projectNames = document.querySelectorAll('.project-name');

  projectNames.forEach(function (name) {
    var dropdownContent = name.nextElementSibling;

    name.addEventListener('click', function () {
      dropdownContent.classList.toggle('open');
      adjustPageHeight();
    });
  });
    
    var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', handlePrev);
rightArrow.addEventListener('click', handleNext);

function adjustPageHeight() {
  var dropdowns = document.querySelectorAll('.dropdown-content.open');
  var contactCard = document.querySelector('.contact-card');
  var pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  dropdowns.forEach(function (dropdown) {
    pageHeight += dropdown.scrollHeight;
  });

  if (contactCard) {
    var contactCardOffset = contactCard.getBoundingClientRect().top + contactCard.offsetHeight;
    pageHeight = Math.max(pageHeight, contactCardOffset + 20); // Adjusted by 20 pixels
  }

  document.body.style.height = pageHeight + 'px';
}

  var iframeWrappers = document.querySelectorAll('.iframe-wrapper');

  iframeWrappers.forEach(function (wrapper) {
    var iframe = wrapper.querySelector('iframe');

    wrapper.addEventListener('mouseenter', function () {
      iframe.contentWindow.addEventListener('wheel', disableParentScroll, {
        passive: false
      });
      iframe.contentWindow.addEventListener('keydown', disableArrowKeys, {
        passive: false
      });
    });

    wrapper.addEventListener('mouseleave', function () {
      iframe.contentWindow.removeEventListener('wheel', disableParentScroll);
      iframe.contentWindow.removeEventListener('keydown', disableArrowKeys);
    });

    function disableParentScroll(event) {
      event.preventDefault();
      event.stopPropagation();
      iframe.contentWindow.scrollBy(0, event.deltaY);
    }

    function disableArrowKeys(event) {
      if (event.key.includes('Arrow')) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  });

  const carouselContainer = document.querySelector('.carousel-container');
  const carouselImage = document.getElementById('carousel-image');
  const carouselImages = document.querySelectorAll('.carousel-nav-item img');
  let currentIndex = 0;

  function changeImage(e) {
    handleNext();
    const targetImageSrc = e.target.src;
    carouselImage.src = targetImageSrc;
  }

  function handleNext() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImage.src = carouselImages[currentIndex].src;
}

function handlePrev() {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  carouselImage.src = carouselImages[currentIndex].src;
}

  carouselImages.forEach(image => {
    image.addEventListener('mouseover', changeImage);
  });

   var iframe = document.getElementById("mandelbrot-iframe");
  var dropdown = document.querySelector(".project-name");
    dropdown.addEventListener("click", function() {
      iframe.src = iframe.src;
       iframe.contentWindow.requestAnimationFrame(drawScene);
    });
  iframe.addEventListener("load", function() {
    iframe.contentWindow.requestAnimationFrame(drawScene);
  });

});
