let musicPlayHandler = {
    now_playing: '',
    track_art: '',
    track_name: '', // name of track
    track_artist: '', // singer name
    playpause_btn: '', // play pause button
    playButton: '',
    pauseButton: '',
    next_btn: '', // next button
    prev_btn: '', //previ button
    seek_slider: '', // seekslider
    volume_slider: '', // volume slider
    curr_time: '', // current time
    total_duration: '', //total duration
    track_index: 0, // index of music track
    isPlaying: false, // is music playing
    updateTimer: {}, // timer update flag
    curr_track: {}, // track element
    init: async() => {
        musicPlayHandler.now_playing = document.getElementById("now-playing");
        musicPlayHandler.track_art = document.getElementById("music-album-art");
        musicPlayHandler.track_name = document.getElementById("track-title"); // name of track
        musicPlayHandler.track_artist = document.getElementById("track-artist"); // singer name
        //musicPlayHandler.playpause_btn = document.getElementById("pause-play-button"); // play pause button
        musicPlayHandler.playButton = document.getElementById("play-button"); // play pause button
        musicPlayHandler.pauseButton = document.getElementById("pause-button"); // play pause button
        musicPlayHandler.next_btn = document.getElementById("next-button"); // next button
        musicPlayHandler.prev_btn = document.getElementById("previous-button"); //previ button
        musicPlayHandler.seek_slider = document.getElementById("music-seeker"); // seekslider
        musicPlayHandler.volume_slider = document.getElementById("volume-seeker"); // volume slider
        musicPlayHandler.curr_time = document.getElementById("current-time"); // current time
        musicPlayHandler.total_duration = document.getElementById("total-duration"); //total duration
        // :::::::::
        musicPlayHandler.curr_track = document.createElement('audio'); // track element
        //:::::::::::::
    },
    // Create new audio element
    // Define the tracks that have to be played
    track_list: [{
            name: "Night Owl",
            artist: "Broke For Free",
            image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
            path: "https://machinft.mypinata.cloud/ipfs/QmaibesD3TLGZYUeVTLykeuU9ArXih9Eb8k7WuhSARvYVe",
        },
        {
            name: "Enthusiast",
            artist: "Tours",
            image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
            path: "http://127.0.0.1:8083/./src/assets/tracks/music-2.mp3",
        },
        {
            name: "Shipping Lanes",
            artist: "Chad Crouch",
            image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
            path: "http://127.0.0.1:8083/./src/assets/tracks/music-1.mp3",
        },
    ],

    loadTrack: async(track_index) => {
        await musicPlayHandler.init()

        clearInterval(musicPlayHandler.updateTimer);
        musicPlayHandler.resetValues();
        musicPlayHandler.seek_slider.addEventListener("change", function() {
            musicPlayHandler.seekTo();
        });
        musicPlayHandler.volume_slider.addEventListener("change", function() {
            musicPlayHandler.setVolume();
        });
        // Load a new track
        musicPlayHandler.curr_track.src = musicPlayHandler.track_list[track_index].path;
        musicPlayHandler.curr_track.load();
        // Update details of the track
        musicPlayHandler.track_art.style.backgroundImage = "url(" + musicPlayHandler.track_list[track_index].image + ")";
        musicPlayHandler.track_name.textContent = musicPlayHandler.track_list[track_index].name;
        musicPlayHandler.track_artist.textContent = musicPlayHandler.track_list[track_index].artist;
        musicPlayHandler.now_playing.textContent = (musicPlayHandler.track_index + 1) + "/" + musicPlayHandler.track_list.length;
        // Set an interval of 1000 milliseconds for updating the seek slider
        musicPlayHandler.updateTimer = setInterval(musicPlayHandler.seekUpdate, 1000);
        // Move to the next track if the current one finishes playing
        musicPlayHandler.curr_track.addEventListener("ended", musicPlayHandler.nextTrack);
        // Apply a random background color
        musicPlayHandler.random_bg_color();

        // ::::::::::::::

        console.log("changing bg color", " chooser cabot", musicPlayHandler.track_list[track_index].artist)

    },
    random_bg_color: () => {
        // Get a random number between 64 to 256 (for getting lighter colors)
        /*
        let red = Math.floor(Math.random() * 256) + 64;
        let green = Math.floor(Math.random() * 256) + 64;
        let blue = Math.floor(Math.random() * 256) + 64;
        */
        // Construct a color withe the given values
        //let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
        // Set the background to that color
        //document.body.style.background = bgColor;
        //musicPlayHandler.playpauseTrack()
    },
    // Reset Values
    resetValues: () => {
        musicPlayHandler.curr_time.textContent = "00:00";
        musicPlayHandler.total_duration.textContent = "00:00";
        //musicPlayHandler.seek_slider.value = 0;
    },
    playpauseTrack: () => {
        console.log(musicPlayHandler.isPlaying)
        musicPlayHandler.isPlaying ? musicPlayHandler.pauseTrack() : musicPlayHandler.playTrack()

        // if (!musicPlayHandler.isPlaying) { musicPlayHandler.playTrack(); } else { musicPlayHandler.pauseTrack(); }
    },
    playTrack: async() => {
        console.log(musicPlayHandler.isPlaying)
        if (!musicPlayHandler.isPlaying) {
            musicPlayHandler.curr_track.play();
            musicPlayHandler.isPlaying = true;
            // Replace icon with the pause icon
            // musicPlayHandler.playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
            musicPlayHandler.pauseButton.style.display = "block";
            musicPlayHandler.playButton.style.display = "none";



        }

    },
    pauseTrack: async() => {
        console.log(musicPlayHandler.isPlaying)
        if (musicPlayHandler.isPlaying) {
            musicPlayHandler.curr_track.pause();
            musicPlayHandler.isPlaying = false;
            // Replace icon with the play icon
            //musicPlayHandler.playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';

            //musicPlayHandler.style.display="none";

            musicPlayHandler.pauseButton.style.display = "none";
            musicPlayHandler.playButton.style.display = "block";


        }

    },
    nextTrack: () => {
        if (musicPlayHandler.track_index < musicPlayHandler.track_list.length - 1)
            musicPlayHandler.track_index += 1;
        else musicPlayHandler.track_index = 0;
        musicPlayHandler.loadTrack(musicPlayHandler.track_index);
        musicPlayHandler.playTrack();
    },
    prevTrack: () => {
        if (musicPlayHandler.track_index > 0)
            musicPlayHandler.track_index -= 1;
        else musicPlayHandler.track_index = musicPlayHandler.track_list.length;
        musicPlayHandler.loadTrack(musicPlayHandler.track_index);
        musicPlayHandler.playTrack();
    },
    seekTo: () => {
        let seekto = musicPlayHandler.curr_track.duration * (musicPlayHandler.seek_slider.value / 100);
        musicPlayHandler.curr_track.currentTime = seekto;
    },
    setVolume: () => {
        musicPlayHandler.curr_track.volume = musicPlayHandler.volume_slider.value / 100;
    },
    seekUpdate: () => {
        let seekPosition = 0;
        // Check if the current track duration is a legible number
        if (!isNaN(musicPlayHandler.curr_track.duration)) {
            seekPosition = musicPlayHandler.curr_track.currentTime * (100 / musicPlayHandler.curr_track.duration);
            console.log(seekPosition)
            musicPlayHandler.seek_slider.value = seekPosition;
            // Calculate the time left and the total duration
            musicPlayHandler.currentMinutes = Math.floor(musicPlayHandler.curr_track.currentTime / 60);
            musicPlayHandler.currentSeconds = Math.floor(musicPlayHandler.curr_track.currentTime - musicPlayHandler.currentMinutes * 60);
            musicPlayHandler.durationMinutes = Math.floor(musicPlayHandler.curr_track.duration / 60);
            musicPlayHandler.durationSeconds = Math.floor(musicPlayHandler.curr_track.duration - musicPlayHandler.durationMinutes * 60);
            // Adding a zero to the single digit time values
            if (musicPlayHandler.currentSeconds < 10) { musicPlayHandler.currentSeconds = "0" + musicPlayHandler.currentSeconds; }
            if (musicPlayHandler.durationSeconds < 10) { musicPlayHandler.durationSeconds = "0" + musicPlayHandler.durationSeconds; }
            if (musicPlayHandler.currentMinutes < 10) { musicPlayHandler.currentMinutes = "0" + musicPlayHandler.currentMinutes; }
            if (musicPlayHandler.durationMinutes < 10) { musicPlayHandler.durationMinutes = "0" + musicPlayHandler.durationMinutes; }
            musicPlayHandler.curr_time.textContent = musicPlayHandler.currentMinutes + ":" + musicPlayHandler.currentSeconds;
            musicPlayHandler.total_duration.textContent = musicPlayHandler.durationMinutes + ":" + musicPlayHandler.durationSeconds;
        }
    }
}

//export default musicPlayHandler;
// Load the first track in the tracklist
//musicPlayHandler.loadTrack(0);