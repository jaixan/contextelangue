import { IntlProvider } from 'react-intl';
import Barre from './components/barre';
import { useContext } from 'react';
import { LanguesContext } from './contexts/langues.context';
import Facture from './components/facture';
import { factures } from './data/facture';
function App() {
  const { locale, messages } = useContext(LanguesContext);
  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <Barre />
        <Facture facture={factures[0]} />
      </IntlProvider>
    </>
  );
}

export default App;
