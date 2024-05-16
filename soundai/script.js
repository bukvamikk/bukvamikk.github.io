function readText() {
    const text = document.getElementById('textInput').value;
    if (!text) return;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
