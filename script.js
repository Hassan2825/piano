const keys = document.querySelectorAll('.key');
console.log(keys);


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.play()
}