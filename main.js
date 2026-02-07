
document.addEventListener('DOMContentLoaded', () => {
    const sentences = {
        en: [
            "The quick brown fox jumps over the lazy dog.",
            "She sells seashells by the seashore.",
            "To be or not to be, that is the question.",
            "The only thing we have to fear is fear itself.",
            "Ask not what your country can do for you; ask what you can do for your country.",
            "Business communication is key to successful partnerships.",
            "Please provide a detailed report by the end of the fiscal quarter.",
            "Our team is committed to delivering high-quality solutions.",
            "Let's get this show on the road.",
            "Could you give me a hand with this report?",
            "Let's touch base next week to discuss the progress.",
            "I'll get back to you on that by end of day.",
            "That's a game-changer for our project.",
            "What's the forecast looking like for Q3?",
            "I'm swamped with work right now.",
            "It's not rocket science, but it takes patience.",
            "Cut to the chase, what's the bottom line?",
            "We need to think outside the box.",
            "Let's brainstorm some ideas.",
            "Can we push this meeting to Friday?",
            "I'm all ears, tell me what you think.",
            "Let's circle back to this point later.",
            "We need to dot our i's and cross our t's.",
            "It's a win-win situation for everyone involved.",
            "Don't put all your eggs in one basket.",
            "Let's take it one step at a time.",
            "He's always ahead of the curve.",
            "She really hit the nail on the head.",
            "We're on the same page, right?",
            "Let's iron out the details.",
            "I'm feeling a bit under the weather today.",
            "It's raining cats and dogs out there!",
            "Break a leg on your presentation!",
            "Long time no see! How have you been?",
            "I'm just pulling your leg.",
            "Speak of the devil, and he shall appear.",
            "That's a piece of cake.",
            "It's not my cup of tea.",
            "Let's call it a day.",
            "Bite the bullet and get it done.",
            "Don't cry over spilled milk.",
            "Every cloud has a silver lining.",
            "Actions speak louder than words.",
            "The ball is in your court now.",
            "That's the last straw!",
            "It costs an arm and a leg.",
            "Kill two birds with one stone.",
            "Miss the boat on that opportunity.",
            "You can't judge a book by its cover.",
            "When in Rome, do as the Romans do.",
            "A penny for your thoughts.",
            "A blessing in disguise.",
            "A dime a dozen.",
            "Add insult to injury.",
            "As keen as mustard.",
            "At the drop of a hat.",
            "Back to the drawing board.",
            "Barking up the wrong tree.",
            "Beat around the bush.",
            "Better late than never.",
            "Between a rock and a hard place.",
            "Blow off some steam.",
            "Burn the midnight oil.",
            "By the skin of your teeth.",
            "Call it a day.",
            "Caught between two stools.",
            "Come rain or shine.",
            "Cost an arm and a leg.",
            "Cross that bridge when you come to it.",
            "Cry over spilled milk.",
            "Curiosity killed the cat.",
            "Cut corners.",
            "Cut the mustard.",
            "Don't beat a dead horse.",
            "Don't give up the day job.",
            "Don't bite the hand that feeds you.",
            "Down to earth.",
            "Drank like a fish.",
            "Drive someone up the wall.",
            "Drop the ball.",
            "Easy does it.",
            "Eat humble pie.",
            "Every dog has its day.",
            "Face the music.",
            "Fall by the wayside.",
            "Far cry from.",
            "Feel a bit under the weather.",
            "Get a taste of your own medicine.",
            "Get bent out of shape.",
            "Get cold feet.",
            "Get over it.",
            "Get something off your chest.",
            "Get your act together.",
            "Give someone the cold shoulder.",
            "Go back to the drawing board.",
            "Go down in flames.",
            "Go with the flow.",
            "Grapevine.",
            "Grease someone's palm.",
            "Hanging by a thread.",
            "Have a chip on your shoulder.",
            "Have a whale of a time.",
            "Have your head in the clouds.",
            "Hear it through the grapevine.",
            "Hit the road.",
            "Hold your horses.",
            "In a nutshell.",
            "It takes two to tango.",
            "Jump on the bandwagon.",
            "Keep an eye on something.",
            "Keep your chin up.",
            "Kill two birds with one stone.",
            "Let the cat out of the bag.",
            "Let's not beat around the bush.",
            "Lose your touch.",
            "Make a long story short.",
            "Make ends meet.",
            "Method to my madness.",
            "Miss the boat.",
            "Nip it in the bud.",
            "No pain, no gain.",
            "Off the cuff.",
            "On the ball.",
            "Once in a blue moon.",
            "Out of the blue.",
            "Over the moon.",
            "Pass the buck.",
            "Play devil's advocate.",
            "Pull your weight.",
            "Put all your eggs in one basket.",
            "Put your foot in your mouth.",
            "Raining cats and dogs.",
            "Read between the lines.",
            "Red tape.",
            "Rub salt in the wound.",
            "Run like clockwork.",
            "Saved by the bell.",
            "See eye to eye.",
            "Sell like hotcakes.",
            "Shape up or ship out.",
            "Shoot for the stars.",
            "Sit on the fence.",
            "Sleep on it.",
            "So far so good.",
            "Speak of the devil.",
            "Spill the beans.",
            "Stab someone in the back.",
            "Steal someone's thunder.",
            "Stick to your guns.",
            "Take it with a grain of salt.",
            "Take the plunge.",
            "Talk the talk, walk the walk.",
            "That's the last straw.",
            "The best of both worlds.",
            "The early bird catches the worm.",
            "The elephant in the room.",
            "The whole nine yards.",
            "There's no such thing as a free lunch.",
            "Through thick and thin.",
            "Throw in the towel.",
            "Tighten your belt.",
            "Time flies when you're having fun.",
            "To make matters worse.",
            "Under the weather.",
            "Up in the air.",
            "Use your head.",
            "Variety is the spice of life.",
            "Walk on eggshells.",
            "Waste not, want not.",
            "Weather the storm.",
            "Wet behind the ears.",
            "When pigs fly.",
            "Word of mouth.",
            "Work your fingers to the bone.",
            "Worth your salt.",
            "You can't teach an old dog new tricks.",
            "You hit the nail on the head."
        ],
        ko: [
            "하늘은 맑고 푸르렀다.",
            "인생은 아름답고, 그만큼 가치 있다.",
            "백문이 불여일견이다.",
            "오늘 걷지 않으면, 내일은 뛰어야 한다.",
            "실패는 성공의 어머니다.",
            "새로운 사업 기회를 모색하고 있습니다.",
            "프로젝트 마감 기한을 엄수해 주시기 바랍니다.",
            "고객 만족이 최우선 목표입니다.",
            "잠시만요, 제가 확인해볼게요.",
            "오늘 저녁 뭐 먹을까요?",
            "이번 주말에 시간 괜찮으세요?",
            "다음에 커피 한잔 같이 해요.",
            "죄송하지만, 다시 말씀해주시겠어요?",
            "회의는 몇 시에 시작하나요?",
            "이번 분기 실적 보고서는 언제까지인가요?",
            "수고하셨습니다!",
            "의견 있으시면 편하게 말씀해주세요.",
            "별말씀을요.",
            "천만에요.",
            "잘 지내셨어요?",
            "밥 한번 같이 먹어요.",
            "좋은 하루 되세요.",
            "몸조리 잘 하세요.",
            "다음에 봐요.",
            "연락 기다릴게요.",
            "최선을 다하겠습니다.",
            "힘내세요!",
            "파이팅!",
            "대박!",
            "진심으로 감사합니다.",
            "고생 많으셨습니다.",
            "이해합니다.",
            "괜찮습니다.",
            "미안합니다.",
            "축하드립니다.",
            "실례합니다.",
            "어서 오세요.",
            "안녕히 계세요.",
            "안녕히 가세요.",
            "또 만나요.",
            "잘 부탁드립니다.",
            "오랜만입니다.",
            "무슨 일 있으세요?",
            "어떻게 오셨어요?",
            "도와드릴까요?",
            "잠깐 시간 괜찮으세요?",
            "나중에 다시 전화 드릴게요.",
            "늦어서 죄송합니다.",
            "일찍 와주셔서 감사합니다.",
            "편하게 앉으세요.",
            "많이 드세요.",
            "잘 먹겠습니다.",
            "잘 먹었습니다.",
            "맛있게 드세요.",
            "배고파 죽겠어요.",
            "목말라 죽겠어요.",
            "졸려 죽겠어요.",
            "피곤해 죽겠어요.",
            "심심해 죽겠어요.",
            "기대하고 있어요.",
            "걱정 마세요.",
            "염려 마세요.",
            "문제없어요.",
            "당연하죠.",
            "물론이죠.",
            "그럼요.",
            "아니요, 괜찮습니다.",
            "네, 맞아요.",
            "아니요, 틀렸어요.",
            "무슨 소리예요?",
            "말도 안 돼!",
            "정말요?",
            "깜짝이야!",
            "어머나!",
            "세상에!",
            "정말 최고예요!",
            "별로예요.",
            "재미없어요.",
            "지루해요.",
            "흥미진진해요.",
            "굉장해요!",
            "놀라워요!",
            "환상적이에요!",
            "끔찍해요.",
            "제정신이 아니에요.",
            "정신 차려!",
            "진정하세요.",
            "서두르세요.",
            "천천히 하세요.",
            "조심하세요.",
            "위험해요.",
            "안전해요.",
            "믿을 수 없어요.",
            "솔직히 말해서.",
            "제 생각에는.",
            "제가 보기에는.",
            "결론적으로.",
            "간단히 말해서.",
            "요약하자면.",
            "더 이상 말할 필요 없죠.",
            "말할 필요도 없죠.",
            "두말할 나위 없죠.",
            "어떤 종류의 커피를 좋아하세요?",
            "취미가 뭐예요?",
            "어디서 오셨어요?",
            "한국 생활은 어떠세요?",
            "주말 계획 있으세요?",
            "오늘 하루 어땠어요?",
            "요즘 어떻게 지내세요?",
            "새로운 소식 있어요?",
            "건강은 어떠세요?",
            "만나서 반가웠습니다.",
            "다음에 또 뵙겠습니다.",
            "안녕히 주무세요.",
            "좋은 꿈 꾸세요.",
            "잘 자요."
        ]
    };

    let currentLanguage = 'en';
    let recognitionUS;
    let recognitionUK;
    let recognitionKO; // For Korean
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

    const langEnBtn = document.getElementById('lang-en');
    const langKoBtn = document.getElementById('lang-ko');
    const newSentenceBtn = document.getElementById('new-sentence-btn');
    const recordBtn = document.getElementById('record-btn');
    const sentenceToReadElem = document.getElementById('sentence-to-read');
    const statusMessageElem = document.getElementById('status-message');
    const accuracyContainer = document.getElementById('accuracy-container');
    const accuracyScoreElem = document.getElementById('accuracy-score');
    const scoreCircle = document.querySelector('.score-circle');
    const userTranscriptElem = document.getElementById('user-transcript');
    const originalSentenceElem = document.getElementById('original-sentence');
    const accentResultElem = document.getElementById('accent-result'); // New
    const accentTypeElem = document.getElementById('accent-type'); // New

    let isRecording = false;
    let englishRecognitionResults = { us: null, uk: null };
    let activeRecognitions = [];

    // Function to set status message with optional error styling
    function setStatusMessage(message, isError = false) {
        statusMessageElem.textContent = message;
        if (isError) {
            statusMessageElem.classList.add('error');
        } else {
            statusMessageElem.classList.remove('error');
        }
    }

    // Initialize Speech Recognition instances
    if (SpeechRecognition) {
        // Generic instance for Korean
        recognitionKO = new SpeechRecognition();
        recognitionKO.continuous = false;
        recognitionKO.interimResults = false;
        recognitionKO.lang = 'ko-KR';

        // Instances for English (US and UK)
        recognitionUS = new SpeechRecognition();
        recognitionUS.continuous = false;
        recognitionUS.interimResults = false;
        recognitionUS.lang = 'en-US';

        recognitionUK = new SpeechRecognition();
        recognitionUK.continuous = false;
        recognitionUK.interimResults = false;
        recognitionUK.lang = 'en-GB';

        // Shared event handlers for English recognitions
        const englishRecognitionOnResult = (event, type) => {
            const transcript = event.results[0][0].transcript;
            const confidence = event.results[0][0].confidence;
            englishRecognitionResults[type] = { transcript, confidence };
            
            // Only proceed if both US and UK results are received
            if (englishRecognitionResults.us && englishRecognitionResults.uk) {
                processEnglishResults();
            }
        };

        const englishRecognitionOnError = (event) => {
            console.error(`English Recognition Error (${event.error}):`, event);
            // If one fails, the other might still succeed, but we need to manage state
            stopAllRecognitions();
            handleRecognitionError(event);
        };

        const englishRecognitionOnEnd = () => {
            // One recognition ends, but we wait for both results
            // This handler ensures the recording state is reset only after all necessary processing
            // The processEnglishResults will handle final UI updates
            console.log("An English recognition instance ended.");
            // We don't remove 'recording' class here, it's done by processEnglishResults
        };
        
        recognitionUS.onresult = (event) => englishRecognitionOnResult(event, 'us');
        recognitionUS.onerror = englishRecognitionOnError;
        recognitionUS.onend = englishRecognitionOnEnd;

        recognitionUK.onresult = (event) => englishRecognitionOnResult(event, 'uk');
        recognitionUK.onerror = englishRecognitionOnError;
        recognitionUK.onend = englishRecognitionOnEnd;

        // Event handlers for Korean recognition
        recognitionKO.onresult = handleKoreanResult;
        recognitionKO.onerror = handleRecognitionError;
        recognitionKO.onend = handleRecognitionEnd;


    } else {
        setStatusMessage("Your browser doesn't support the Web Speech API. Please try Chrome or Edge.", true);
        recordBtn.disabled = true;
        recordBtn.style.cursor = 'not-allowed';
    }

    function stopAllRecognitions() {
        if (recognitionKO && activeRecognitions.includes(recognitionKO)) {
            recognitionKO.stop();
        }
        if (recognitionUS && activeRecognitions.includes(recognitionUS)) {
            recognitionUS.stop();
        }
        if (recognitionUK && activeRecognitions.includes(recognitionUK)) {
            recognitionUK.stop();
        }
        activeRecognitions = [];
        recordBtn.classList.remove('recording');
        isRecording = false;
    }

    function handleRecognitionStart() {
        recordBtn.classList.add('recording');
        setStatusMessage('Listening...');
        accuracyContainer.classList.add('hidden');
        accentResultElem.classList.add('hidden');
        isRecording = true;
    }

    function handleRecognitionEnd() {
        // This is for single recognition (KO), English handled by processEnglishResults
        if (!isRecording) return; // Prevent multiple calls to end
        stopAllRecognitions();
        setStatusMessage('Click the mic to start recording');
    }

    function handleRecognitionError(event) {
        stopAllRecognitions(); // Ensure all active recognitions are stopped
        let errorMessage = 'An unknown error occurred.';
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            errorMessage = 'Microphone access denied. Please enable microphone permissions in your browser settings (e.g., Chrome settings -> Privacy and security -> Site Settings -> Microphone).';
        } else if (event.error === 'no-speech') {
            errorMessage = 'No speech detected. Please try again.';
        } else if (event.error === 'aborted') {
            errorMessage = 'Recording was cancelled.';
        } else if (event.error === 'network') {
            errorMessage = 'Network error. Please check your internet connection.';
        } else if (event.error === 'audio-capture') {
            errorMessage = 'No microphone found or access to microphone denied.';
        }
        setStatusMessage(`Error: ${errorMessage}`, true);
    }

    function processEnglishResults() {
        stopAllRecognitions(); // Stop any remaining active recognitions

        const originalSentence = sentenceToReadElem.textContent;
        const usResult = englishRecognitionResults.us;
        const ukResult = englishRecognitionResults.uk;

        // Determine overall best transcript and confidence
        let bestTranscript = '';
        let bestConfidence = 0;
        let detectedAccent = 'Undetermined';
        let mainAccuracy = 0;

        if (usResult && ukResult) {
            if (usResult.confidence >= ukResult.confidence) {
                bestTranscript = usResult.transcript;
                bestConfidence = usResult.confidence;
                detectedAccent = 'American English';
            } else {
                bestTranscript = ukResult.transcript;
                bestConfidence = ukResult.confidence;
                detectedAccent = 'British English';
            }
        } else if (usResult) {
            bestTranscript = usResult.transcript;
            bestConfidence = usResult.confidence;
            detectedAccent = 'American English (UK result missing)';
        } else if (ukResult) {
            bestTranscript = ukResult.transcript;
            bestConfidence = ukResult.confidence;
            detectedAccent = 'British English (US result missing)';
        }

        mainAccuracy = Math.round(bestConfidence * 100);

        userTranscriptElem.textContent = bestTranscript || 'No speech detected.';
        originalSentenceElem.textContent = originalSentence;
        accuracyScoreElem.textContent = `${mainAccuracy}%`;
        scoreCircle.style.background = `conic-gradient(from 0deg, var(--accent-color-green) ${mainAccuracy}%, var(--surface-light) ${mainAccuracy}%)`;

        accentTypeElem.textContent = detectedAccent;
        accentResultElem.classList.remove('hidden');

        setStatusMessage('Result available!');
        setTimeout(() => {
            accuracyContainer.classList.remove('hidden');
        }, 300);

        // Reset for next recording
        englishRecognitionResults = { us: null, uk: null };
    }

    function handleKoreanResult(event) {
        stopAllRecognitions();
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        const originalSentence = sentenceToReadElem.textContent;

        const accuracy = Math.round(confidence * 100);

        userTranscriptElem.textContent = transcript;
        originalSentenceElem.textContent = originalSentence;
        accuracyScoreElem.textContent = `${accuracy}%`;
        scoreCircle.style.background = `conic-gradient(from 0deg, var(--accent-color-green) ${accuracy}%, var(--surface-light) ${accuracy}%)`;

        // Hide accent result for Korean
        accentResultElem.classList.add('hidden');

        setStatusMessage('Result available!');
        setTimeout(() => {
            accuracyContainer.classList.remove('hidden');
        }, 300);
    }


    function getRandomSentence() {
        const currentSentences = sentences[currentLanguage];
        const randomIndex = Math.floor(Math.random() * currentSentences.length);
        return currentSentences[randomIndex];
    }

    function updateSentence() {
        sentenceToReadElem.textContent = getRandomSentence();
        accuracyContainer.classList.add('hidden');
        accentResultElem.classList.add('hidden'); // Also hide accent result
        userTranscriptElem.textContent = '';
        originalSentenceElem.textContent = '';
        accuracyScoreElem.textContent = '0%';
        scoreCircle.style.background = `conic-gradient(from 0deg, var(--accent-color-green), var(--accent-color-green) 0%, var(--surface-light) 0%)`;
        setStatusMessage('Click the mic to start recording');
    }

    function switchLanguage(lang) {
        if (currentLanguage === lang) return;
        currentLanguage = lang;

        // Reset UI immediately
        langEnBtn.classList.remove('active');
        langKoBtn.classList.remove('active');
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            // recognition.lang is implicitly handled by US/UK instances
        } else {
            langKoBtn.classList.add('active');
            // recognitionKO.lang is set at init
        }
        updateSentence();
    }
    
    // Initial language setup.
    // If recognition is available, ensure all instances have their lang set correctly.
    if (SpeechRecognition) {
        if (currentLanguage === 'en') {
            langEnBtn.classList.add('active');
        } else {
            langKoBtn.classList.add('active');
        }
    } else {
        // If no SpeechRecognition, ensure correct button is still active
        if (currentLanguage === 'en') {
            langEnBtn.classList.add('active');
        } else {
            langKoBtn.classList.add('active');
        }
    }


    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    langKoBtn.addEventListener('click', () => switchLanguage('ko'));
    newSentenceBtn.addEventListener('click', updateSentence);

    recordBtn.addEventListener('click', () => {
        if (!SpeechRecognition) {
            setStatusMessage("Speech recognition not supported.", true);
            return;
        }

        if (isRecording) {
            stopAllRecognitions();
            setStatusMessage('Recording stopped.');
            recordBtn.classList.remove('recording');
            isRecording = false;
        } else {
            handleRecognitionStart();
            englishRecognitionResults = { us: null, uk: null }; // Reset results for English

            if (currentLanguage === 'en') {
                try {
                    recognitionUS.start();
                    activeRecognitions.push(recognitionUS);
                    recognitionUK.start();
                    activeRecognitions.push(recognitionUK);
                } catch (e) {
                    if (e.message.includes('already started')) {
                        setStatusMessage('Recognition already active. Please wait or try again.', true);
                    } else {
                        setStatusMessage(`Error starting English recognition: ${e.message}`, true);
                    }
                    stopAllRecognitions();
                }
            } else { // Korean
                try {
                    recognitionKO.start();
                    activeRecognitions.push(recognitionKO);
                } catch (e) {
                    if (e.message.includes('already started')) {
                        setStatusMessage('Recognition already active. Please wait or try again.', true);
                    } else {
                        setStatusMessage(`Error starting Korean recognition: ${e.message}`, true);
                    }
                    stopAllRecognitions();
                }
            }
        }
    });
    
    // Initial setup
    updateSentence(); 
});
