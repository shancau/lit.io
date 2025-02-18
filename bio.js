// Elements
const vinyl = document.querySelector('.vinyl');
const tracklist = document.querySelector('.tracklist');
const audio = document.getElementById('vinylSound');

// Play/pause functions
function startPlayback() {
    vinyl.style.animationPlayState = 'running';
    audio.play();
    audio.loop = true;
}

function stopPlayback() {
    vinyl.style.animationPlayState = 'paused';
    audio.pause();
}

// Vinyl interaction
vinyl.addEventListener('mouseenter', startPlayback);
vinyl.addEventListener('mouseleave', () => {
    if (!tracklist.matches(':hover')) stopPlayback();
});

// Tracklist interaction
tracklist.addEventListener('mouseenter', startPlayback);
tracklist.addEventListener('mouseleave', () => {
    if (!vinyl.matches(':hover')) stopPlayback();
});

// Tracklist functionality
document.querySelectorAll('.tracklist').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});