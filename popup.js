// Simulated translation dictionary
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
      : "Translation not available"; // Fallback for untranslated messages
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const languageSelector = document.getElementById('language-selector');
    const translateButton = document.getElementById('translate-button');
    const translatedMessageDisplay = document.getElementById('translated-message');
  
    // When the translate button is clicked
    translateButton.addEventListener('click', () => {
      const messageText = messageInput.value.trim();
      const targetLanguage = languageSelector.value;
  
      if (!messageText) {
        translatedMessageDisplay.textContent = 'Please enter a message.';
        return;
      }
  
      // Translate the message
      const translatedText = translateText(messageText, targetLanguage);
      translatedMessageDisplay.textContent = translatedText;
    });
  });
      