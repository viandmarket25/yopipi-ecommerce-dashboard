let videoPlayHandler = {
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
    init: async(video,seeker) => {
        /*
        videoPlayHandler.now_playing = document.getElementById("now-playing");

        videoPlayHandler.track_art = document.getElementById("music-album-art");
        videoPlayHandler.track_name = document.getElementById("track-title"); // name of track
        videoPlayHandler.track_artist = document.getElementById("track-artist"); // singer name
        */
        //videoPlayHandler.playpause_btn = document.getElementById("pause-play-button"); // play pause button
        //videoPlayHandler.playButton = document.getElementById("play-button"); // play pause button
      //  videoPlayHandler.pauseButton = document.getElementById("pause-button"); // play pause button
      //  videoPlayHandler.next_btn = document.getElementById("next-button"); // next button
      //  videoPlayHandler.prev_btn = document.getElementById("previous-button"); //previ button
        videoPlayHandler.seek_slider = document.getElementById(seeker); // seekslider
        //videoPlayHandler.volume_slider = document.getElementById("volume-seeker"); // volume slider
        //videoPlayHandler.curr_time = document.getElementById("current-time"); // current time
        //videoPlayHandler.total_duration = document.getElementById("total-duration"); //total duration
        // :::::::::
        videoPlayHandler.curr_track = video // track element
        //:::::::::::::
    },
    // Create new audio element
    // Define the tracks that have to be played
    /*
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
    */
    loadTrack: async(video,seeker) => {
        await videoPlayHandler.init(video,seeker)

        clearInterval(videoPlayHandler.updateTimer);
        //videoPlayHandler.resetValues();
        videoPlayHandler.seek_slider.addEventListener("change", function() {
            videoPlayHandler.seekTo();
        });


        /*
        videoPlayHandler.volume_slider.addEventListener("change", function() {
            videoPlayHandler.setVolume();
        });
        */
        // Load a new track
        //videoPlayHandler.curr_track.src = videoPlayHandler.track_list[track_index].path;
        //videoPlayHandler.curr_track.load();
        // Update details of the track
        //  videoPlayHandler.track_art.style.backgroundImage = "url(" + videoPlayHandler.track_list[track_index].image + ")";
        //videoPlayHandler.track_name.textContent = videoPlayHandler.track_list[track_index].name;
        //  videoPlayHandler.track_artist.textContent = videoPlayHandler.track_list[track_index].artist;
        //videoPlayHandler.now_playing.textContent = (videoPlayHandler.track_index + 1) + "/" + videoPlayHandler.track_list.length;
        // Set an interval of 1000 milliseconds for updating the seek slider
        videoPlayHandler.updateTimer = setInterval(videoPlayHandler.seekUpdate, 1000);
        // Move to the next track if the current one finishes playing
        //videoPlayHandler.curr_track.addEventListener("ended", videoPlayHandler.nextTrack);
        // Apply a random background color
        //videoPlayHandler.random_bg_color();
        // ::::::::::::::
        //console.log("changing bg color", " chooser cabot", videoPlayHandler.track_list[track_index].artist)

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
        //videoPlayHandler.playpauseTrack()
    },
    // Reset Values
    resetValues: () => {
        videoPlayHandler.curr_time.textContent = "00:00";
        videoPlayHandler.total_duration.textContent = "00:00";
        //videoPlayHandler.seek_slider.value = 0;
    },
    playpauseTrack: () => {
        console.log(videoPlayHandler.isPlaying)
        videoPlayHandler.isPlaying ? videoPlayHandler.pauseTrack() : videoPlayHandler.playTrack()

        // if (!videoPlayHandler.isPlaying) { videoPlayHandler.playTrack(); } else { videoPlayHandler.pauseTrack(); }
    },
    playTrack: async() => {
        console.log(videoPlayHandler.isPlaying)
        if (!videoPlayHandler.isPlaying) {
            videoPlayHandler.curr_track.play();
            videoPlayHandler.isPlaying = true;
            // Replace icon with the pause icon
            // videoPlayHandler.playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
            videoPlayHandler.pauseButton.style.display = "block";
            videoPlayHandler.playButton.style.display = "none";



        }

    },
    pauseTrack: async() => {
        console.log(videoPlayHandler.isPlaying)
        if (videoPlayHandler.isPlaying) {
            videoPlayHandler.curr_track.pause();
            videoPlayHandler.isPlaying = false;
            // Replace icon with the play icon
            //videoPlayHandler.playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';

            //videoPlayHandler.style.display="none";

            videoPlayHandler.pauseButton.style.display = "none";
            videoPlayHandler.playButton.style.display = "block";


        }

    },
    /*
    nextTrack: () => {
        if (videoPlayHandler.track_index < videoPlayHandler.track_list.length - 1)
            videoPlayHandler.track_index += 1;
        else videoPlayHandler.track_index = 0;
        videoPlayHandler.loadTrack(videoPlayHandler.track_index);
        videoPlayHandler.playTrack();
    },

    prevTrack: () => {
        if (videoPlayHandler.track_index > 0)
            videoPlayHandler.track_index -= 1;
        else videoPlayHandler.track_index = videoPlayHandler.track_list.length;
        videoPlayHandler.loadTrack(videoPlayHandler.track_index);
        videoPlayHandler.playTrack();
    },
    */
    seekTo: () => {
        let seekto = videoPlayHandler.curr_track.duration * (videoPlayHandler.seek_slider.value / 100);
        videoPlayHandler.curr_track.currentTime = seekto;
    },
    setVolume: () => {
        videoPlayHandler.curr_track.volume = videoPlayHandler.volume_slider.value / 100;
    },
    seekUpdate: () => {
        let seekPosition = 0;
        // Check if the current track duration is a legible number
        if (!isNaN(videoPlayHandler.curr_track.duration)) {
            seekPosition = videoPlayHandler.curr_track.currentTime * (100 / videoPlayHandler.curr_track.duration);
            console.log(seekPosition)
            videoPlayHandler.seek_slider.value = seekPosition;
            // Calculate the time left and the total duration
            videoPlayHandler.currentMinutes = Math.floor(videoPlayHandler.curr_track.currentTime / 60);
            videoPlayHandler.currentSeconds = Math.floor(videoPlayHandler.curr_track.currentTime - videoPlayHandler.currentMinutes * 60);
            videoPlayHandler.durationMinutes = Math.floor(videoPlayHandler.curr_track.duration / 60);
            videoPlayHandler.durationSeconds = Math.floor(videoPlayHandler.curr_track.duration - videoPlayHandler.durationMinutes * 60);
            // Adding a zero to the single digit time values
            if (videoPlayHandler.currentSeconds < 10) { videoPlayHandler.currentSeconds = "0" + videoPlayHandler.currentSeconds; }
            if (videoPlayHandler.durationSeconds < 10) { videoPlayHandler.durationSeconds = "0" + videoPlayHandler.durationSeconds; }
            if (videoPlayHandler.currentMinutes < 10) { videoPlayHandler.currentMinutes = "0" + videoPlayHandler.currentMinutes; }
            if (videoPlayHandler.durationMinutes < 10) { videoPlayHandler.durationMinutes = "0" + videoPlayHandler.durationMinutes; }
            videoPlayHandler.curr_time.textContent = videoPlayHandler.currentMinutes + ":" + videoPlayHandler.currentSeconds;
            videoPlayHandler.total_duration.textContent = videoPlayHandler.durationMinutes + ":" + videoPlayHandler.durationSeconds;
        }
    }
}

//export default videoPlayHandler;
// Load the first track in the tracklist
//videoPlayHandler.loadTrack(0);
