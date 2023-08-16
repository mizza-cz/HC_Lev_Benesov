$(".topstory-slider").slick({
  centerMode: true,
  infinite: true,
  centerPadding: "120px",
  slidesToShow: 1,
  speed: 800,
  variableWidth: false,
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ico 24 / home copy 4@3x</title><g id="✅-ToCode" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g id="Homepage-V3" transform="translate(-1610, -390)" stroke="#174F9B" stroke-width="2"><g id="Group-6-Copy-4" transform="translate(1590, 370)"><g id="arrow-narrow-right" transform="translate(24, 26)"><path d="M0,6 L16,6 M16,6 L10,0 M16,6 L10,12" id="Shape"></path></g></g></g></g></svg></button>',
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ico 24 / home copy 4@3x</title><g id="✅-ToCode" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g id="Homepage-V3" transform="translate(-286, -390)" stroke="#174F9B" stroke-width="2"><g id="Group-6-Copy-2" transform="translate(266, 370)"><g id="arrow-narrow-right" transform="translate(32, 32) scale(-1, 1) translate(-32, -32)translate(24, 26)"><path d="M0,6 L16,6 M16,6 L10,0 M16,6 L10,12" id="Shape"></path></g></g></g></g></svg></button>',
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        centerPadding: "60px",
      },
    },

    {
      breakpoint: 720,
      settings: {
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 541,
      settings: {
        centerPadding: "40px",
      },
    },
  ],
});
