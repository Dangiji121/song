const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progressBar = document.querySelector(".progress");
    const progressContainer = document.querySelector(".progress-bar");
    const timeDisplay = document.getElementById("time");

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "&#10074;&#10074;"; // Pause icon ❚❚
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "&#9654;"; // Play icon ▶
        }
    }

    function updateProgress() {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        
        if (!isNaN(duration)) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            timeDisplay.textContent = formatTime(currentTime);
        }
    }

    function seek(event) {
        const progressWidth = progressContainer.clientWidth;
        const clickX = event.offsetX;
        const duration = audio.duration;

        if (!isNaN(duration)) {
            audio.currentTime = (clickX / progressWidth) * duration;
        }
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    // Update play/pause icon when audio plays or pauses
    audio.addEventListener("play", () => playPauseBtn.innerHTML = "&#10074;&#10074;");
    audio.addEventListener("pause", () => playPauseBtn.innerHTML = "&#9654;");

    audio.addEventListener("timeupdate", updateProgress);
    progressContainer.addEventListener("click", seek);

    // Set the current date for "Added On"
    document.getElementById("added-date").textContent = new Date().toLocaleDateString();
  // Wait until the page is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Get the post title from the <h1> tag
        const postTitle = document.querySelector(".post-title");
        const songTitle = document.getElementById("song-title");

        // If the post title exists, set it as the song title
        if (postTitle && songTitle) {
            songTitle.textContent = postTitle.textContent;
        }
    });
