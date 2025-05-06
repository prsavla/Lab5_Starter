window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  const volumeInput = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = selectedHorn.replace('-', ' ');
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeInput.addEventListener('input', () => {
    const volume = volumeInput.value;
    audio.volume = volume / 100;

    // Update volume icon
    let volumeLevel;
    if (volume == 0) {
      volumeLevel = 0;
    } else if (volume < 33) {
      volumeLevel = 1;
    } else if (volume < 67) {
      volumeLevel = 2;
    } else {
      volumeLevel = 3;
    }
    volumeIcon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
    volumeIcon.alt = `Volume level ${volumeLevel}`;
  });

  playButton.addEventListener('click', () => {
    if (audio.src) {
      audio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}