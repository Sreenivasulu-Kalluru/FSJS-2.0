// Seleciing all required elements
const gallery = document.querySelectorAll('.gallery .image');
previewBox = document.querySelector('.preview-box');
previewImg = previewBox.querySelector('img');
closeIcon = previewBox.querySelector('.icon');
currentImg = previewBox.querySelector('.current-img');
totalImg = previewBox.querySelector('.total-img');
shadow = document.querySelector('.shadow');

window.onload = () => {
  // once window loaded
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; // passing gallery images length to totalImg
    let newIndex = i; // passingi value to newIndex variable
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;
      // console.log(i);
      function preview() {
        currentImg.textContent = newIndex + 1; // passing newIndex value to currentImg by adding + 1
        let selectedImgUrl = gallery[newIndex].querySelector('img').src; // getting user clicked image url;
        previewImg.src = selectedImgUrl; // passing clicked image url to previewing source
        // console.log(selectedImgUrl);
      }

      // implementing functionality to the previous button
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      if (newIndex == 0) {
        prevBtn.style.display = 'none';
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = 'none';
      }
      prevBtn.onclick = () => {
        newIndex--; // decrement newIndex value
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = 'none';
        } else {
          preview(); // calling again function to update the images
          nextBtn.style.display = 'block';
        }
      };

      // implementing functionality to the next button
      nextBtn.onclick = () => {
        newIndex++; // increment newIndex value
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = 'none';
        } else {
          preview(); // calling again function to update the images
          prevBtn.style.display = 'block';
        }
      };

      preview(); // calling the preview function
      previewBox.classList.add('show');
      shadow.style.display = 'block';
      document.querySelector('body').style.overflow = 'hidden';

      function closePreview() {
        newIndex = clickImgIndex; // assigning first click img index to newIndex variable
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        previewBox.classList.remove('show');
        shadow.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
      }

      closeIcon.addEventListener('click', closePreview);
      shadow.addEventListener('click', closePreview);
    };
  }
};
