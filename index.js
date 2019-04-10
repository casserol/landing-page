$('.sign a').on('click', function (event) {
  var clickedOn = $(this);

  event.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.form-container').not(target).removeClass('active');

  $(target).addClass('active').fadeIn(600);

});

// const links = document.querySelectorAll('.sign a')

// for (let link of Array.from(links)) {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();

//     event.target.parentNode.classList.add('active');

//     const siblings = Array.from(event.target.parentNode.children).filter((child) => child !== event.target)

//     for (let sibling of siblings) {
//       sibling.classList.add('active');
//     }

//     const href = event.target.getAttribute('href')

//     const targets = document.querySelectorAll(`.form-container:not(${href})`)

//     for (let target of Array.from(targets)) {
//       target.classList.remove('active')
//     }

//     // $(target).addClass('active').fadeIn(600);
//   })
// }
