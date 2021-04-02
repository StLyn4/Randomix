import * as Speech from 'expo-speech';

const speakAsync = (text, options) => {
  return new Promise((resolve) => {
    Speech.speak(text, {
      language: 'ru',
      ...options,
      onError: () => {
        setTimeout(resolve, text.length * 400);
      },
      onDone: resolve,
    });
  });
};

export default speakAsync;
