import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './BackButton.css';

interface BackButtonProps {
  to: string;
}

const BackButton = ({ to }: BackButtonProps) => {
  const { t } = useTranslation();
  return (
    <Link to={to}>
      <button type='button' className='back-button'>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '1rem' }} />
        {t('BACK')}
      </button>
    </Link>
  );
};

export default BackButton;
