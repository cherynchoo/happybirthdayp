const current = document.querySelector('#current');
const currentB = document.querySelector('#currentB');
const currentC = document.querySelector('#currentC');
const currentD = document.querySelector('#currentD');
const photos = document.querySelectorAll('.photos img');
const photosB = document.querySelectorAll('.photosB img');
const photosC = document.querySelectorAll('.photosC img');
const photosD = document.querySelectorAll('.photosD img');
    /*add the word All cause more than one*/
const opacity = 0.6;

// Set first img opacity //
photos[0].style.opacity = opacity;
photosB[0].style.opacity = opacity;
photosC[0].style.opacity = opacity;
photosD[0].style.opacity = opacity;

photos.forEach( img =>
    img.addEventListener('click', imgClick)
);
photosB.forEach( img =>
    img.addEventListener('click',imgClickB)
)
photosC.forEach( img =>
    img.addEventListener('click',imgClickC)
)
photosD.forEach( img =>
    img.addEventListener('click',imgClickD)
)

function imgClick(a) {
     // Reset the opacity for every click so that once its clicked it wont stay opaque //
     photos.forEach(img => (img.style.opacity = 1));   
   
    // Change current image to src of clickked image
    current.src = a.target.src;

    // Add fade-in class//
    current.classList.add('fade-in');

    // Remove fade-in class //
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    a.target.style.opacity = opacity;
}

function imgClickB(b) {
    // Reset the opacity for every click so that once its clicked it wont stay opaque //
    photosB.forEach(img => (img.style.opacity = 1));   
  
   // Change current image to src of clickked image
   currentB.src = b.target.src;

   // Add fade-in class//
   currentB.classList.add('fade-in');

   // Remove fade-in class //
   setTimeout(() => currentB.classList.remove('fade-in'), 500);

   // Change the opacity to opacity var
   b.target.style.opacity = opacity;
}

function imgClickC(c) {
    // Reset the opacity for every click so that once its clicked it wont stay opaque //
    photosC.forEach(img => (img.style.opacity = 1));   
  
   // Change current image to src of clickked image
   currentC.src = c.target.src;

   // Add fade-in class//
   currentC.classList.add('fade-in');

   // Remove fade-in class //
   setTimeout(() => currentC.classList.remove('fade-in'), 500);

   // Change the opacity to opacity var
   c.target.style.opacity = opacity;
}

function imgClickD(d) {
    // Reset the opacity for every click so that once its clicked it wont stay opaque //
    photosD.forEach(img => (img.style.opacity = 1));   
  
   // Change current image to src of clickked image
   currentD.src = d.target.src;

   // Add fade-in class//
   currentD.classList.add('fade-in');

   // Remove fade-in class //
   setTimeout(() => currentD.classList.remove('fade-in'), 500);

   // Change the opacity to opacity var
   d.target.style.opacity = opacity;
}





