(function(name) {
    var helloSpeaker = {}
    helloSpeaker.name = name
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker
})();