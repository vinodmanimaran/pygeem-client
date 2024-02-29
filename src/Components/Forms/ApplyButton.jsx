import React from 'react';

const applyButtonStyles = {
  backgroundColor: '#4CAF50',
  border: '2px solid #4CAF50',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '30px',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
  cursor: 'pointer'
};

const applyButtonHoverStyles = {
  backgroundColor: '#45a049',
  borderColor: '#45a049'
};

const applyButtonActiveStyles = {
  backgroundColor: '#3e8e41'
};

const ApplyButton = ({ onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);

  return (
    <button
      style={{
        ...applyButtonStyles,
        ...(hovered && applyButtonHoverStyles),
        ...(active && applyButtonActiveStyles)
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
      className='apply-here'
    >
      Apply Here
    </button>
  );
};

export default ApplyButton;
