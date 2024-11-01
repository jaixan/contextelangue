import { createContext, useState } from 'react';
import Francais from '../lang/fr.json';
import English from '../lang/en.json';

interface LanguesContextType {
  locale: string;
  messages: typeof Francais;
  setLocale: (locale: string) => void;
}

export const LanguesContext = createContext<LanguesContextType>({
  locale: 'fr',
  messages: Francais,
  setLocale: () => {},
});

export default function LanguesProvider(props: any) {
  const [locale, setLocale] = useState('fr');
  const [messages, setMessages] = useState(Francais);

  function setLocaleAndMessages(locale: string) {
    setLocale(locale);
    setMessages(locale === 'fr' ? Francais : English);
  }

  const values = {
    locale,
    messages,
    setLocale: setLocaleAndMessages,
  };

  return (
    <LanguesContext.Provider value={values}>
      {props.children}
    </LanguesContext.Provider>
  );
}
