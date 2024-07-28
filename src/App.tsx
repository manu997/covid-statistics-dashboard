import { Trans, useTranslation } from 'react-i18next';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const { t } = useTranslation();
  return (
    <Trans t={t}>
      <div className='app-container'>
        <h1>{t('APP_TITLE')}</h1>
        <div className='button-group'>
          <Link to='/exercice-1'>
            <button className='welcome-button'>
              {t('EXERCICE', { number: 1 })}
            </button>
          </Link>
          <Link to='/exercice-2'>
            <button className='welcome-button'>
              {t('EXERCICE', { number: 2 })}
            </button>
          </Link>
        </div>
      </div>
    </Trans>
  );
}

export default App;
