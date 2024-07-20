document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio');
    var stopButton = document.getElementById('stopButton');
    var audioButtons = document.querySelectorAll('.audio-button');
  
    audioButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var audioSrc = this.getAttribute('data-audio');
        audio.src = audioSrc;
        audio.play();
      });
    });
  
    stopButton.addEventListener('click', function() {
      audio.pause();
      audio.currentTime = 0;
    });
  });
  