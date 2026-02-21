document.addEventListener('DOMContentLoaded', function () {

  const allButtons = document.querySelectorAll('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function () {
      searchBar.style.visibility = 'visible';
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', function () {
      searchBar.style.visibility = 'hidden';
      searchBar.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    });
  }

  // CKEditor 5 Media Embed Handler
  const oembeds = document.querySelectorAll('oembed[url]');
  oembeds.forEach(element => {
    const url = element.getAttribute('url');
    // Simple YouTube matcher
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
    const match = url.match(youtubeRegex);

    if (match && match[1]) {
      const videoId = match[1];
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

      // Replace oembed with iframe
      element.parentNode.replaceChild(iframe, element);
    }
  });

});