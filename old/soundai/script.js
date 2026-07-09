const languageSelect = document.getElementById('languageSelect');
const voiceSelect = document.getElementById('voiceSelect');

languageSelect.addEventListener('change', populateVoiceOptions);

async function populateVoiceOptions() {
    const selectedLanguage = languageSelect.value;
    const voices = await getVoices(selectedLanguage);

    // Clear existing options
    voiceSelect.innerHTML = '';

    // Populate voice options
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.lang;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

async function getVoices(language) {
    // Retrieve voices for the selected language
    return new Promise(resolve => {
        const synth = window.speechSynthesis;
        synth.onvoiceschanged = () => {
            const voices = synth.getVoices().filter(voice => voice.lang.startsWith(language));
            resolve(voices);
        };
    });
}

async function readText() {
    const text = document.getElementById('textInput').value;
    const selectedVoice = voiceSelect.value;

    // Use speech synthesis API to generate and play audio with selected voice
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.lang === selectedVoice);
    window.speechSynthesis.speak(utterance);
}
