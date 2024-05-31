const translationDict = {
    'A': '🐸', 'B': '🐢', 'C': '🐍', 'D': '🐛', 'E': '🐜', 'F': '🐞', 'G': '🦎', 'H': '🐊', 'I': '🐉',
    'J': '🐲', 'K': '🦕', 'L': '🦖', 'M': '🐧', 'N': '🐦', 'O': '🐤', 'P': '🐣', 'Q': '🦆', 'R': '🦅',
    'S': '🦉', 'T': '🦇', 'U': '🐺', 'V': '🦊', 'W': '🐱', 'X': '🐶', 'Y': '🦁', 'Z': '🐯',
    'a': '🦄', 'b': '🐷', 'c': '🦓', 'd': '🦒', 'e': '🦌', 'f': '🦏', 'g': '🦧', 'h': '🦥', 'i': '🦦',
    'j': '🦨', 'k': '🦩', 'l': '🦫', 'm': '🦬', 'n': '🦭', 'o': '🦮', 'p': '🦯', 'q': '🦰', 'r': '🦱',
    's': '🦲', 't': '🦳', 'u': '🦴', 'v': '🦵', 'w': '🦶', 'x': '🦷', 'y': '🦸', 'z': '🦹',
    ' ': ' ' // Ensure spaces are handled correctly
};

const reverseTranslationDict = {};
for (const [key, value] of Object.entries(translationDict)) {
    reverseTranslationDict[value] = key;
}

function translateText() {
    const inputText = document.getElementById('inputText').value;
    let translatedText = '';

    for (let char of inputText) {
        translatedText += translationDict[char] || char;
    }

    document.getElementById('outputText').innerText = translatedText;
}

function reverseTranslateText() {
    const inputTranslatedText = document.getElementById('inputTranslatedText').value;
    let englishText = '';

    for (let char of inputTranslatedText) {
        englishText += reverseTranslationDict[char] || char;
    }

    document.getElementById('outputEnglishText').innerText = englishText;
}

// Add floating phrases to the background
const phrases = [
    "You are beautiful", "You are amazing", "You are unique", "You are strong", 
    "You are loved", "You are special", "You are wonderful", "You are talented", 
    "You are appreciated", "You are brilliant", "You are fantastic", "You are incredible", 
    "You are extraordinary", "You are magnificent", "You are remarkable", "You are awesome",
    "You are inspiring", "You are exceptional", "You are marvelous", "You are phenomenal"
];

const background = document.querySelector('.background-phrases');

for (let i = 0; i < 100; i++) {
    const phraseElement = document.createElement('span');
    phraseElement.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    phraseElement.style.left = Math.random() * 100 + 'vw';
    phraseElement.style.top = Math.random() * 100 + 'vh';
    phraseElement.style.animationDelay = Math.random() * 5 + 's';
    phraseElement.style.opacity = 0.1 + Math.random() * 0.2;
    background.appendChild(phraseElement);
}

// Play ribbit sound and animate button on click
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('ribbitSound').play();
        button.classList.add('hop');
        setTimeout(() => button.classList.remove('hop'), 200);
    });
});

// Animate title with typewriter effect
const titleVariations = [
    "Sutton is incredible", "Sutton is amazing", "Sutton is fantastic", 
    "Sutton is wonderful", "Sutton is brilliant", "Sutton is extraordinary", 
    "Sutton is phenomenal", "Sutton is remarkable", "Sutton is awesome", 
    "Sutton is inspiring", "Sutton is exceptional", "Sutton is magnificent", 
    "Sutton is marvelous", "Sutton is superb", "Sutton is terrific", 
    "Sutton is outstanding", "Sutton is fabulous", "Sutton is breathtaking", 
    "Sutton is stupendous", "Sutton is spectacular"
];

const romanticPhrases = [
    "I really like your butt", "Je t'aime", "Te quiero", "Ich liebe dich", 
    "Ti amo", "Eu te amo", "Jag älskar dig", "Ik hou van jou", 
    "Jeg elsker deg", "Aşkım seni seviyorum"
];

const romanticFonts = [
    "'Dancing Script', cursive", "'Pacifico', cursive", "'Indie Flower', cursive", 
    "'Lobster', cursive", "'Courgette', cursive", "'Great Vibes', cursive", 
    "'Shadows Into Light', cursive", "'Yellowtail', cursive", 
    "'Sacramento', cursive", "'Irish Grover', cursive"
];

let titleIndex = 0;
const animatedTitle = document.getElementById('animatedTitle');
const romanticTitle = document.getElementById('romanticTitle');

function typeWriterEffect(text, i, element, fnCallback) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1);
        setTimeout(() => typeWriterEffect(text, i + 1, element, fnCallback), 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function startTitleAnimation(i) {
    if (i < titleVariations.length) {
        typeWriterEffect(titleVariations[i], 0, animatedTitle, () => startTitleAnimation(i + 1));
    } else {
        setTimeout(() => startTitleAnimation(0), 700);
    }
}

function startRomanticAnimation(i) {
    if (i < romanticPhrases.length) {
        romanticTitle.style.fontFamily = romanticFonts[i];
        typeWriterEffect(romanticPhrases[i], 0, romanticTitle, () => startRomanticAnimation(i + 1));
    } else {
        setTimeout(() => startRomanticAnimation(0), 700);
    }
}

startTitleAnimation(0);
startRomanticAnimation(0);
