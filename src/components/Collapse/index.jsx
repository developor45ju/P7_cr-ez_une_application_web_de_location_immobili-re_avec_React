import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='collapse__item'>
      <div className="collapse__item-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && ( 
        <div className="collapse__item-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;