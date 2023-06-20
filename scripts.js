window.addEventListener('DOMContentLoaded', function () {
    var iframeWrappers = document.querySelectorAll('.iframe-wrapper');

    iframeWrappers.forEach(function (wrapper) {
        var iframe = wrapper.querySelector('iframe');

        wrapper.addEventListener('mouseenter', function () {
            iframe.contentWindow.addEventListener('wheel', disableParentScroll, { passive: false });
            iframe.contentWindow.addEventListener('keydown', disableArrowKeys, { passive: false });
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
});

window.addEventListener('DOMContentLoaded', function () {
    var projectNames = document.querySelectorAll('.project-name');

    projectNames.forEach(function (name) {
        var dropdownContent = name.nextElementSibling;

        name.addEventListener('click', function () {
            dropdownContent.classList.toggle('open');
            adjustPageHeight();
        });
    });

    function adjustPageHeight() {
        var dropdowns = document.querySelectorAll('.dropdown-content.open');
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

        document.body.style.height = pageHeight + 'px';
    }
});

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const videoCarousel = document.querySelector('.video-carousel');

prevButton.addEventListener('click', () => {
  videoCarousel.scrollBy({
    left: -600,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  videoCarousel.scrollBy({
    left: 600,
    behavior: 'smooth'
  });
});





