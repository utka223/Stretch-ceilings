var arrow = document.getElementById('selArrow')
var selLangBtn = document.getElementById('selLangBtn')
var dropdownContent = document.getElementById('dropdown-content')

var index = 0;

selLangBtn.addEventListener('click', function() {
    index++;

    if(index === 1) {
        dropdownContent.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)'
        selLangBtn.style.borderBottomLeftRadius = '0px'
        selLangBtn.style.borderBottomRightRadius = '0px'
        dropdownContent.style.transform = 'translateY(-3px)'
    } else {
        index = 0;
        dropdownContent.style.display = 'none';
        arrow.style.transform = 'rotate(360deg)'
        selLangBtn.style.borderBottomLeftRadius = '18px'
        selLangBtn.style.borderBottomRightRadius = '18px'
    }
})

var carousel = document.getElementById('carousel');
var images = carousel.getElementsByTagName('img');
const visible = 3;
var index = 0;

function updateCarousel() {
  var imageWidth = images[0].clientWidth + 10;
  carousel.style.transform = `translateX(-${index * imageWidth}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  index++;
  if (index > images.length - visible) index = 0;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  index--;
  if (index < 0) index = images.length - visible;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();


var uaLang = document.getElementById('selUaBtn')
var czLang = document.getElementById('selCzBtn')
var enLang = document.getElementById('selEnBtn')

uaLang.addEventListener('click', function() {
  window.location.href = 'index-ua.html';
})
enLang.addEventListener('click', function() {
  window.location.href = 'index-en.html'
})
czLang.addEventListener('click', function() {
  window.location.href = 'index.html';
})