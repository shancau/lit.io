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
document.querySelectorAll('.track-title').forEach(item => {
    item.addEventListener('click', () => {
        // Map track IDs to their corresponding HTML files
        const trackLinks = {
            bio: 'bio.html',
            analysis: 'analysis.html',
            poem: 'poem.html',
            cited: 'cited.html'
        };

        // Get the ID of the clicked track title
        const trackId = item.id;

        // Redirect to the corresponding HTML file
        if (trackLinks[trackId]) {
            location.href = trackLinks[trackId];
        } else {
            console.error('No link found for track ID:', trackId);
        }
    });
});