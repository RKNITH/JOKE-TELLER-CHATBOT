const btn = document.querySelector('#mic-button');

// Array of Hindi jokes
const jokes = [
    "टीचर: बच्चो, मैं जो सवाल पूछू, उसका जवाब जल्दी देना। एक ट्रेन 80 km/h की रफ्तार से मुंबई जा रही है, और दूसरी ट्रेन 70 km/h की रफ्तार से दिल्ली जा रही है। तो मेरी उम्र कितनी है? छात्र: 22 साल। टीचर: तुमने बिलकुल सही जवाब दिया, लेकिन कैसे? छात्र: मेरे बड़े भाई की उम्र 11 साल है, और आप उसकी आधी अक्ल की हो।",
    "पत्नी – सुनिए जी, अखबार में छपा है कि एक आदमी अपनी पत्नी को खुश रखने का तरीका 100 साल में ढूंढ सकता है। पति – तो तुम क्या चाहती हो मैं उस रिसर्च में हिस्सा लूं? पत्नी – हां। पति – तुम्हारा दिमाग खराब है। मैं तुमसे पहले ही कहता हूं, तुम्हें खुश रखना नामुमकिन है।",
    "डॉक्टर: आप बहुत ही कमजोर हो गए हैं। आपकी लंबाई कितनी है? मरीज: 5 फीट 6 इंच। डॉक्टर: लेकिन आपकी हाइट तो 6 फीट लग रही है। मरीज: डॉक्टर साहब, मैं सोते हुए आया हूं, इसलिए इतना लंबा लग रहा हूं।",
    "पप्पू: तुम्हारी आंख क्यों सूजी हुई है? गप्पू: बीवी ने मारा है। पप्पू: लेकिन क्यों? गप्पू: वो कह रही थी कि लाइट जलाओ, मैंने कहा कि तू ही जला ले, तू क्या हैलोजन है?",
    "मंटू – यार, तुम्हारी बीवी ने गुस्से में आकर तुम्हें घर से बाहर निकाल दिया था, फिर भी तुम अंदर कैसे चले गए? संतू – तेरी भाभी ने कहा था, निकल जाओ मेरी आंखों के सामने से, तो मैं पीछे से चला गया।",
    "टीचर: बच्चों, बताओ, हम दूध क्यों पीते हैं? छात्र: क्योंकि वह गिलास में होता है।",
    "पप्पू: यार, मैं शादी नहीं कर सकता। गप्पू: क्यों? पप्पू: क्योंकि मेरी मां कहती है कि घर से बाहर रहना ठीक नहीं है।",
    "पत्नी: सुनिए जी, शादी के बाद एक आदमी की जिंदगी कितनी बदल जाती है। पति: हां, पहले वह अकेला था, अब वह अकेला है, लेकिन कम से कम उसका खर्चा दोगुना हो गया है।",
    "बॉस: तुम लेट क्यों आए? कर्मचारी: सर, रास्ते में एक बिल्ली मिली थी। बॉस: तो? कर्मचारी: मैंने सोचा, पहले उसका काम तो निपटा दूं।",
    "पति: तुम मेरे लिए क्या कर सकती हो? पत्नी: मैं तुम्हारे लिए खाना बना सकती हूं। पति: तो तुम मुझसे क्या चाहती हो? पत्नी: तुम मुझसे कभी काम मत कराना।",
    "एक आदमी: यार, मेरी बीवी मुझसे हमेशा गुस्से में रहती है। दोस्त: तुम उसे क्या देते हो? आदमी: कुछ नहीं, बस खुद को।",
    "पत्नी: तुम्हें कैसे पता कि मैं तुमसे शादी नहीं करूँगी? पति: क्योंकि तुमने मुझे वह रिंग नहीं दी जो मैं मांग रहा था। पत्नी: मैंने तो सोचा था कि तुम पहले मुझसे पूछोगे।",
    "डॉक्टर: तुम्हारी बीवी ने तुम्हें क्यों छोड़ा? मरीज: वह कहती है कि मैं उसकी बात सुनता नहीं। डॉक्टर: क्या तुमने उसे कहा कि तुम उसे सुनते हो? मरीज: हां, लेकिन तभी उसने सुना नहीं।",
    "पप्पू: तुम कितने सालों से काम कर रहे हो? गप्पू: जब से मेरी बीवी ने कहा था कि मुझे कुछ करना चाहिए। पप्पू: तो तुमने क्या किया? गप्पू: मैंने नौकरी शुरू कर दी।",
    "टीचर: बच्चे, जब मैं कहूं, '3' तो तुम सब जोर से चिल्लाना। बच्चे: ठीक है, सर। टीचर: 1... 2... 3... बच्चे: सर, 3! टीचर: तुम सबने इतना जोर से चिल्लाया, मैं तो डर गया।"
];

// Function to speak in Hindi
const speakFun = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.rate = 1;
    speakInput.pitch = 1;
    speakInput.volume = 1;
    speakInput.lang = 'hi-IN';  // Hindi Language
    window.speechSynthesis.speak(speakInput);
};

// Extend handleCommands function to add joke handling
const handleCommands = (command) => {
    if (command.includes("चुटकुला") || command.includes("joke")) {
        // Speak a random joke
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speakFun(randomJoke);
    } else {
        speakFun("मुझे खेद है, मैं इस आदेश को नहीं समझ सका। कृपया पुनः प्रयास करें।");
    }
};

// Initialize speech recognition
const startRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'hi-IN';  // Hindi Language for Recognition

    recognition.onstart = () => {
        console.log('Voice recognition started. Speak now!');
    };

    recognition.onspeechend = () => {
        console.log('Voice recognition ended.');
        recognition.stop();
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(`You said: ${transcript}`);
        handleCommands(transcript);
        btn.classList.remove('btn-box');
        btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
    };

    recognition.start();
};

// Button click event listener
btn.addEventListener('click', () => {
    startRecognition();
    btn.classList.add('btn-box');
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
});
