import './Card.css';

interface CardProps {
  title: string;
  children?: React.ReactNode;
}
const Card = ({ title, children }: CardProps) => {
  return (
    <div className='card'>
      <h3 className='card-header'>{title}</h3>
      <hr />
      {children}
    </div>
  );
};

export default Card;
