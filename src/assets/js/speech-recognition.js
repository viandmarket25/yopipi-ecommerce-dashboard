let speechRecognitionModule = {
    isSpeaking: false,
    verifyWord: () => {

    },
    speakWord: async(wordToSpeak) => {
        if ('speechSynthesis' in window) {
            console.log("Broswer supports speech synthesis 🎉");
            let msg = new SpeechSynthesisUtterance();
            msg.text = wordToSpeak;
            let voices = window.speechSynthesis.getVoices();
            //console.log(voices)
            msg.voice = voices[10];
            msg.lang = 'en';
            speechRecognitionModule.isSpeaking = window.speechSynthesis;
            speechSynthesis.speak(msg);

        } else {
            alert("Sorry, your browser doesn't support the speech synthesis API !");
        }

    },
    recognizeSpeech: () => {
        // get output div reference
        let output = document.getElementById("output");
        // get action element reference
        let action = document.getElementById("action");
        // new speech recognition object
        let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        let recognition = new SpeechRecognition();
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            action.innerHTML = "<small>listening, please speak...</small>";
        };
        recognition.onspeechend = function() {
                action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                recognition.stop();
            }
            // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence * 100 + "%";
            output.classList.remove("hide");
        };

        // start recognition
        recognition.start();
    },
    _createCanvas: (target) => {
        var canvas = document.getElementById('equalizer1');
        var ctx = canvas.getContext('2d');
        //var ctx = createCanvas("equalizer1");
        var num_items = 200;
        var radius = 100;
        ctx.lineWidth = 2;
        var particles = [];
        // working out the angles 
        for (var i = 0; i < num_items; i++) {
            var angle = radians(distributeAngles(i, num_items));
            particles[i] = {
                x: w / 2 + Math.cos(angle) * radius,
                y: h / 2 + Math.sin(angle) * radius,
                angle: angle
            }
        }

        function draw() {
            ctx.background(0);
            for (var i = 0; i < num_items; i++) {
                var p = particles[i];
                var s = Mic.mapSound(i, num_items, 5, 100);
                x2 = w / 2 + Math.cos(p.angle) * (s + radius);
                y2 = h / 2 + Math.sin(p.angle) * (s + radius);
                ctx.line(p.x, p.y, x2, y2);
            }
        }
        //target.appendChild(ctx)

    }


}