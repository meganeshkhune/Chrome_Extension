document.addEventListener('visibilitychange', () => {
  const video = document.querySelector('video');
  if (document.hidden && video) {
    video.pause();
  } else if (video) {
    video.play();
  }
});
