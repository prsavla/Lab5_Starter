// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  let voices = [];

  // loadd voices?
  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const text = textInput.value;
    const selectedIndex = voiceSelect.value;
  
    if (!text || selectedIndex === "select") return;
  
    // Cancel any current speech
    if (synth.speaking) {
      synth.cancel();
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];
  
    // Change face when speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
  
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  
    synth.speak(utterance);
  });
}
