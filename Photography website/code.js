const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size * counter) +'px)';

nextBtn.addEventListener('click',()=>{
                                      if(counter>= carouselImages.length -1)return;
                                       carouselSlide.style.transition = "transform 1s ease-in-out";
                                       counter++;
                                       carouselSlide.style.transform = 'translateX('+(-size * counter) +'px)';
                                       });
prevBtn.addEventListener('click',()=>{
                                      if(counter<=0)return;
                                       carouselSlide.style.transition = "transform 1s ease-in-out";
                                       counter--;
                                       carouselSlide.style.transform = 'translateX('+(-size * counter) +'px)';
                                       });
