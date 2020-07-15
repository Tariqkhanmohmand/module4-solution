(function(name) {
    var byeSpeaker = {}
    byeSpeaker.name = name
    var speakWord = "Good Bye";
    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }
    window.byeSpeaker = byeSpeaker
})();