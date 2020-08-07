/*Hello speaker function*/
const helloSpeaker = {
    speakWord: 'Hello',
};
//This says Hello
(function() {
    helloSpeaker.speak = function(userName) {
        return (helloSpeaker.speakWord + " " + userName);
    }
}());