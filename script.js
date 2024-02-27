// const body = document.querySelector("body")
// var audio_element = document.createElement('audio');
// audio_element.setAttribute('src', 'sound.mp3');
// audio_element.loop = true;
// audio_element.play();
// body.appendChild(audio_element);







const body = document.querySelector("body");
var audio_element = document.createElement('audio');
audio_element.setAttribute('src', 'sound.mp3');
audio_element.loop = true;

// Listen for the 'loadeddata' event before playing
audio_element.addEventListener('loadeddata', function () {
    audio_element.play(); // Play the audio when it's ready
});

// Error handling
audio_element.addEventListener('error', function () {
    console.log('Error loading the audio file.');
});

body.appendChild(audio_element);
