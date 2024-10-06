import { useState } from 'react';

function FormNavigation() {
  const defaultFields = [
    { id: 'profile', name: 'Edit Profile' },
    { id: 'preferences', name: 'Preferences' },
    { id: 'security', name: 'Security' },
  ];
  const [isActive, setIsActive] = useState(defaultFields[0].id);
  const handleActive = (id: string) => setIsActive(id);
  return (
    <div className='form__navigation form-navigation'>
      {defaultFields.map(({ id, name }) => (
        <span
          key={id}
          className={`form-navigation__option ${
            isActive === id ? 'active-link' : ''
          }`}
          onClick={() => handleActive(id)}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default FormNavigation;
