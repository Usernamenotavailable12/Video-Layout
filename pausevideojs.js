// Get all the video elements on the page
const videos = document.querySelectorAll('.video-wrapper video');

// Add event listeners to each video
videos.forEach(video => {
  video.addEventListener('play', handlePlay);
});

// Function to handle the play event
function handlePlay(event) {
  const currentVideo = event.target;

  // Pause all other videos except the current one
  videos.forEach(video => {
    if (video !== currentVideo) {
      video.pause();
    }
  });
}
