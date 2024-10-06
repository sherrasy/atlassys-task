import Logo from '@assets/icons/logo.svg?react';
import { menuData } from './menu-data';

function Menu() {
  const isActive = menuData[7].id;
  return (
    <div className='menu__container'>
      <div className='menu__logo'>
        <Logo />
      </div>
      <nav className='menu__navigation navigation'>
        {menuData.map(({ id, name, icon }) => (
          <a href='#' key={id} className={`navigation__option ${isActive === id ? 'active-option': ''}`}>
            <span className=' navigation__icon'>{icon}</span>
            <span className=' navigation__text'>{name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Menu;
