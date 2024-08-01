import { useState } from 'react';

type UseCopyReturnType = {
  copy: (text: string) => Promise<void>;
  copiedText: string;
  errorText: string;
};
export const useCopy = (): UseCopyReturnType => {
  const [copiedText, setCopiedText] = useState('');
  const [errorText, setErrorText] = useState('');

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      setErrorText('Копирование не поддерживается в вашем браузере');
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      setErrorText('Не удалось скопировать текст');
      setCopiedText('');
    }
  };

  return { copy, copiedText, errorText };
};
