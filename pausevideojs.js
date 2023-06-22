document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('.video-wrapper video');

  videos.forEach(function(video) {
    // Pause other videos when a video is played
    video.addEventListener('play', function(event) {
      const currentVideo = event.target;

      videos.forEach(function(video) {
        if (video !== currentVideo) {
          video.pause();
        }
      });
    });
  });
});
