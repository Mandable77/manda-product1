
document.addEventListener('DOMContentLoaded', () => {
    const sentences = {
        en: [
            "The quick brown fox jumps over the lazy dog.",
            "She sells seashells by the seashore.",
            "To be or not to be, that is the question.",
            "The only thing we have to fear is fear itself.",
            "Ask not what your country can do for you; ask what you can do for your country."
        ],
        ko: [
            "하늘은 맑고 푸르렀다.",
            "인생은 아름답고, 그만큼 가치 있다.",
            "백문이 불여일견이다.",
            "오늘 걷지 않으면, 내일은 뛰어야 한다.",
            "실패는 성공의 어머니다."
        ]
    };

    let currentLanguage = 'en';
    let recognition;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
    } else {
        document.getElementById('status-message').textContent = "Your browser doesn't support the Speech Recognition API.";
        document.getElementById('record-btn').disabled = true;
    }

    const langEnBtn = document.getElementById('lang-en');
    const langKoBtn = document.getElementById('lang-ko');
    const newSentenceBtn = document.getElementById('new-sentence-btn');
    const recordBtn = document.getElementById('record-btn');
    const sentenceToReadElem = document.getElementById('sentence-to-read');
    const statusMessageElem = document.getElementById('status-message');
    const resultContainer = document.getElementById('result-container');
    const accuracyScoreElem = document.getElementById('accuracy-score');
    const scoreCircle = document.querySelector('.score-circle');
    const userTranscriptElem = document.getElementById('user-transcript');
    const originalSentenceElem = document.getElementById('original-sentence');

    function getRandomSentence() {
        const currentSentences = sentences[currentLanguage];
        const randomIndex = Math.floor(Math.random() * currentSentences.length);
        return currentSentences[randomIndex];
    }

    function updateSentence() {
        sentenceToReadElem.textContent = getRandomSentence();
        resultContainer.classList.add('hidden');
    }

    function switchLanguage(lang) {
        currentLanguage = lang;
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langKoBtn.classList.remove('active');
        } else {
            langKoBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }
        updateSentence();
    }

    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    langKoBtn.addEventListener('click', () => switchLanguage('ko'));
    newSentenceBtn.addEventListener('click', updateSentence);

    recordBtn.addEventListener('click', () => {
        if (!recognition) return;

        const isRecording = recordBtn.classList.toggle('recording');

        if (isRecording) {
            recognition.lang = currentLanguage === 'en' ? 'en-US' : 'ko-KR';
            recognition.start();
            statusMessageElem.textContent = 'Listening...';
        } else {
            recognition.stop();
            statusMessageElem.textContent = 'Click the mic to start recording';
        }
    });

    if (recognition) {
        recognition.onstart = () => {
            recordBtn.classList.add('recording');
            statusMessageElem.textContent = 'Listening...';
        };

        recognition.onend = () => {
            recordBtn.classList.remove('recording');
            statusMessageElem.textContent = 'Click the mic to start recording';
        };

        recognition.onerror = (event) => {
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                statusMessageElem.textContent = 'Microphone access denied. Please allow microphone access in your browser settings.';
            } else {
                statusMessageElem.textContent = `Error: ${event.error}`;
            }
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const confidence = event.results[0][0].confidence;
            const originalSentence = sentenceToReadElem.textContent;

            const accuracy = Math.round(confidence * 100);

            userTranscriptElem.textContent = transcript;
            originalSentenceElem.textContent = originalSentence;
            accuracyScoreElem.textContent = `${accuracy}%`;
            scoreCircle.style.background = `conic-gradient(from 0deg, var(--secondary-color), var(--secondary-color) ${accuracy}%, var(--surface-color) ${accuracy}%)`;

            resultContainer.classList.remove('hidden');
        };
    }

    updateSentence(); 
});
