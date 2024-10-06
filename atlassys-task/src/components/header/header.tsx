import Search from '@assets/icons/search-icon.svg?react';
import Settings from '@assets/icons/settings-header-icon.svg?react';
import Notifications from '@assets/icons/notification-icon.svg?react';
import Menu from '@assets/icons/menu-icon.svg?react';
import Avatar from '@assets/avatar.jpg';

function Header() {
  return (
    <div className='header__container'>
      <span className='header__menu-toggle'><Menu/></span>
      <h1 className='header__title'> Setting</h1>
      <div className='header__user-toggles'>
        <div className='header__controls'>
          <div className='header__search-input'>
            <Search />
            <input type='text' placeholder='Search for something' />
          </div>
          <div className='header__button'>
            <Settings />
          </div>
          <div className='header__button'>
            <Notifications />
          </div>
        </div>
        <div className='header__avatar-container'>
          <img src={Avatar} alt='user-avatar-header' />
        </div>
      </div>
    </div>
  );
}

export default Header;
