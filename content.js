// Simulated translation dictionary for demonstration purposes
const translations = {
    "Hello": {
      "es": "Hola",
      "fr": "Bonjour",
      "de": "Hallo",
      "it": "Ciao",
      "zh": "你好"
    },
    "How are you?": {
      "es": "¿Cómo estás?",
      "fr": "Comment ça va?",
      "de": "Wie geht es dir?",
      "it": "Come stai?",
      "zh": "你好吗?"
    }
  };
  
  // Function to handle text translation
  function translateText(text, targetLanguage) {
    return translations[text] && translations[text][targetLanguage]
      ? translations[text][targetLanguage]
      : "Translation not available"; // Fallback
  }
  
  // Add "Translate" button to each chat message
  const addTranslateButtons = () => {
    const messages = document.querySelectorAll('.message-in, .message-out'); // WhatsApp chat classes
    messages.forEach(message => {
      if (!message.querySelector('.translate-btn')) {
        const btn = document.createElement('button');
        btn.innerText = "Translate";
        btn.className = "translate-btn";
        btn.style.margin = "10px";
        btn.style.padding = "5px";
        btn.style.fontSize = "12px";
        message.appendChild(btn);
  
        btn.addEventListener('click', () => {
          const messageText = message.querySelector('.copyable-text').innerText;
          const targetLanguage = localStorage.getItem('targetLanguage') || 'es'; // Default to Spanish
          const translated = translateText(messageText, targetLanguage);
          alert(`Translated Text: ${translated}`);
        });
      }
    });
  };
  
  // Continuously watch for new messages being added and inject the button
  const observer = new MutationObserver(addTranslateButtons);
  observer.observe(document.body, { childList: true, subtree: true });
  