const ws = new WebSocket('ws://localhost:8090');
const userID = 'recognition-web-client';
let receiver = 'voice-socket-client';
ws.onopen = function() {
    ws.send(JSON.stringify({ signalType: 'msg', messageContent: 'connecting...', messageSender: userID, messageReceiver: receiver }));
};
ws.onmessage = function(message) {
    console.log(message);
    let receivedMessage = JSON.parse(message.data);
    console.log(receivedMessage);
    if (receivedMessage.signalType == 'ack') {
        ws.send(JSON.stringify({ signalType: 'recv_ack', userID: userID, connectionID: receivedMessage.connectionID, value3: '' }));
    }
    if (receivedMessage.signalType == 'msg') {
        console.log("message type= " + receivedMessage.signalType);
        console.log("message content= " + receivedMessage.messageContent)
    }
    if (receivedMessage.signalType == 'introduce_speaker') {
        setInterval(function() {

        }, 3000)
        console.log("message type= " + receivedMessage.signalType, "message content= " + receivedMessage.messageContent, "speaker name= " + receivedMessage.speakerName);
    }
};
let audioDataManager = {
    audioRecorder: {},
    audioIN: { audio: true },
    URL: window.URL || window.webkitURL,
    gumStream: '', //stream from getUserMedia()
    rec: '', //Recorder.js object
    input: '', //MediaStreamAudioSourceNode we'll be recording
    AudioContext: window.AudioContext || window.webkitAudioContext,
    audioContext: '', //audio context to help us record
    constraints: '',
    playAudio: '',
    track: '',
    speakerName: '',
    startRecording: async() => {
        console.log("record started ");
        audioDataManager.rec.record()
    },
    stopRecording: async() => {
        console.log('recording stopped...')
        audioDataManager.rec.stop();
        audioDataManager.gumStream.getAudioTracks()[0].stop();
        audioDataManager.rec.exportWAV(audioDataManager.showBlob);
    },
    pauseRecording: async() => {
        console.log(audioDataManager.rec.recording)
        if (audioDataManager.rec.recording) {
            audioDataManager.rec.stop()
            audioDataManager.track.enabled = false;
        }
    },
    resumeRecording: async() => {
        console.log(audioDataManager.rec.recording)
        if (!audioDataManager.rec.recording) {
            audioDataManager.rec.record()
            audioDataManager.track.enabled = true;
        }
    },
    init: async() => {
        audioDataManager.playAudio = document.getElementById('audio-play');
        audioDataManager.constraints = { audio: true, video: false }
        navigator.mediaDevices.getUserMedia(audioDataManager.constraints).then(function(stream) {
            console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
            audioDataManager.audioContext = new AudioContext();
            audioDataManager.gumStream = stream;
            /* use the stream */
            audioDataManager.input = audioDataManager.audioContext.createMediaStreamSource(stream);
            audioDataManager.rec = new Recorder(audioDataManager.input, { numChannels: 1 })
            console.log(audioDataManager.rec)
            audioDataManager.track = audioDataManager.gumStream.getAudioTracks()[0];

        }).catch(function(err) {
            //enable the record button if getUserMedia() fails
            console.log(err)
        });
    },
    showBlob: async(blob) => {
        let audioData = blob
            // ::::::::::::: convert file to array buffer and send
        console.log('audio source  data ::: ', audioData, )
        audioDataManager.speakerName = prompt("Great, Enter Speaker Name::", "...");
        if (audioDataManager.speakerName != null && audioDataManager.speakerName != '') {
            alert('great!, Introducing new speaker...')
        }

        await audioDataManager.sendFile(audioData)
        dataArray = [];
        let audioSrc = window.URL
            .createObjectURL(audioData);
        // Pass the audio url to the 2nd video tag
        audioDataManager.playAudio.src = audioSrc;
        console.log('audio source  data ::: ', audioData, 'audio url data::', audioSrc);
    },
    getUniqueId: async() => {
        return new Date().getTime() + Date.now().toString(36) + Math.random(1, 1200).toString(36).substr(2)
    },
    sendFile: async(blob) => {
        let fileName = '.wav';
        let filePath = '';
        let xhr = new XMLHttpRequest();
        xhr.onload = function(e) {
            if (this.readyState === 4) {
                console.log("sending audio file for introduction... ", e.target.responseText);
                setInterval(function() {

                }, 3000)
                ws.send(JSON.stringify({ signalType: 'introduce_speaker', messageContent: { fileName: fileName, filePath: filePath }, speakerName: audioDataManager.speakerName, userID: userID, connectionID: userID, value3: '' }));
            }
        };
        var formdata = new FormData();
        let uniqueId = await audioDataManager.getUniqueId();
        fileName = uniqueId + fileName;
        filePath = uniqueId + filePath;
        formdata.append("fileName", fileName);
        formdata.append("filePath", filePath);
        formdata.append("file", blob);
        xhr.open("POST", "http://localhost:3002/intro-user/", true);
        xhr.send(formdata);
    },

}