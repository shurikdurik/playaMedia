import { useTranslation } from 'react-i18next';
import '../../i18n/i18n'

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).catch((err) => {
      console.error('Error changing language', err);
    });
  };

  return (
    <div key={i18n.language}>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
};

export default LanguageSelector;