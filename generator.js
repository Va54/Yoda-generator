const loremIpsum = new GenerateNewText();

function GenerateNewText() {
    this.sentences =
        [
            "If you end your training now — if you choose the quick and easy path as Vader did — you will become an agent of evil.",
            "You must unlearn what you have learned.",
            "No. Not yet. One thing remains. Vader. You must confront Vader. Then, only then, a Jedi will you be. And confront him you will.",
            "Train yourself to let go… of everything you fear to lose.",
            "Always pass on what you have learned.", "Feel the force!",
            "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
            "You will know when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.",
            "Smaller in number are we, but larger in mind.",
            "Powerful you have become, the dark side I sense in you.",
            "No longer certain, that one ever does win a war, I am. For in fighting the battles, the bloodshed, already lost we have. Yet, open to us a path remains. That unknown to the Sith is. Through this path, victory we may yet find. Not victory in the Clone Wars, but victory for all time.",
            "Remember, a Jedi’s strength flows from the Force. But beware anger, fear, and aggression. The dark side are they. Once you start down the dark path, forever will it dominate your destiny. Luke… do not underestimate the powers of the Emperor or suffer your father’s fate you will.",
            "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
            "Padawan, thousands of Jedi once there were. Then came war. In our arrogance, join the conflict swiftly we did. Fear, anger, hate. Consumed by the dark side, the Jedi were.",
            "In a dark place we find ourselves, and a little more knowledge lights our way.",
            "Luke, when gone am I… the last of the Jedi will you be. Luke, the Force runs strong in your family. Pass on what you have learned, Luke. There is… another… Sky… walker",
            "Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained.",
            "Wrong? Hmm. A long time, fought I did. Consumed by fear, I was, though see it I did not.",
            "Yes, afraid. Hmm, surprised are you? A challenge lifelong it is, not to bend fear into anger.",
            "Faith in your new apprentice, misplaced may be. As is your faith in the dark side of the Force.",
            "To answer power with power, the Jedi way this is not. In this war, a danger there is, of losing who we are.",
            "Mine, or I will help you not!",
            "On many long journeys have I gone. And waited, too, for others to return from journeys of their own. Some return; some are broken; some come back so different only their names remain.",
            "Good relations with the Wookiees, I have.",
            "Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.",
            "Secret, shall I tell you? Grand Master of Jedi Order am I. Won this job in a raffle I did, think you? ‘How did you know, how did you know, Master Yoda?’ Master Yoda knows these things. His job it is.",
            "When nine hundred years old you reach, look as good, you will not, hm?",
            "I have many children, as you seek you may find that this is the last one till he must die before he must reach the becoming of mankind. Many men have failed but I have surpassed their expectation of being a Jedi master.",
            "The dark side clouds everything. Impossible to see, the future is.",
            "Stay for some soup you must."
        ];
}

GenerateNewText.prototype.getRandomSentence = function() {
    var randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
    return randomSentence;
};

GenerateNewText.prototype.getParagraph = function() {
    var paragraph = "";
    var minimumCharacterLength = 250;
    var firstSentence = true;
    while (paragraph.length < minimumCharacterLength) {
        if (firstSentence) {
            paragraph = paragraph.concat(this.getRandomSentence());
            firstSentence = false;
        } else {
            paragraph = paragraph.concat(" " + this.getRandomSentence());
        }
    }
    return paragraph;
};

GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
    var allParagraphs = [];
    while (allParagraphs.length < numberOfParagraphs) {
        allParagraphs.push(this.getParagraph());
    }
    var paragraphHTML = "";
    allParagraphs.forEach(function (paragraph) {
        paragraphHTML += "<p>" + paragraph + "</p>";
    });
    return paragraphHTML;
};

module.exports = loremIpsum;