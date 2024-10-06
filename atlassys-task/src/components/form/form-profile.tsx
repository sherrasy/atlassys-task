import { SettingsData } from '@frontend-types/settings-data.type';
import { FormFieldLabel, FormFieldName } from '@/utils/constant';
import Avatar from '@assets/avatar.jpg';
import Pencil from '@assets/icons/pencil-icon.svg?react';
import DateIcon from '@assets/icons/date-icon.svg?react';
import { ChangeEvent, FormEvent, useState } from 'react';

function FormProfile() {
  const defaultData = {
    name: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    birthDate: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: 45962,
    country: 'USA',
  };

  const [formData, setFormData] = useState<SettingsData>(defaultData);
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formData);
  };

  return (
    <div className='form-profile__container'>
      <form method='post' action='/' onSubmit={handleFormSubmit}>
        <div className='form-profile__avatar'>
          <img src={Avatar} alt='user-avatar' />
          <label>
            <input
              type='file'
              className='avatar-input'
              accept='image/png, image/jpeg'
            />
            <Pencil className='avatar-input-toggle' />
          </label>
        </div>
        <div className='form-profile__fields'>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.Name}>
              <span className='form-input__label'>{FormFieldLabel.Name}</span>
            </label>
            <input
              type='text'
              id={FormFieldName.Name}
              name={FormFieldName.Name}
              className='form-input__input'
              placeholder={FormFieldLabel.Name}
              value={formData.name || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.UserName}>
              <span className='form-input__label'>
                {FormFieldLabel.UserName}
              </span>
            </label>
            <input
              type='text'
              id={FormFieldName.UserName}
              name={FormFieldName.UserName}
              className='form-input__input'
              placeholder={FormFieldLabel.UserName}
              value={formData.userName || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.Email}>
              <span className='form-input__label'>{FormFieldLabel.Email}</span>
            </label>
            <input
              type='email'
              id={FormFieldName.Email}
              name={FormFieldName.Email}
              className='form-input__input'
              placeholder={FormFieldLabel.Email}
              value={formData.email || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.Password}>
              <span className='form-input__label'>
                {FormFieldLabel.Password}
              </span>
            </label>
            <input
              type='password'
              id={FormFieldName.Password}
              name={FormFieldName.Password}
              className='form-input__input'
              placeholder={FormFieldLabel.Password}
              value={formData.password || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.BirthDate}>
              <span className='form-input__label'>
                {FormFieldLabel.BirthDate}
              </span>
            </label>
            <div className='form-input__wrapper'>
              <input
                type='text'
                id={FormFieldName.BirthDate}
                name={FormFieldName.BirthDate}
                className='form-input__input'
                placeholder={FormFieldLabel.BirthDate}
                value={formData.birthDate || ''}
                onChange={handleInputChange}
                required
              />
              <DateIcon />
            </div>
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.PresentAddress}>
              <span className='form-input__label'>
                {FormFieldLabel.PresentAddress}
              </span>
            </label>
            <input
              type='text'
              id={FormFieldName.PresentAddress}
              name={FormFieldName.PresentAddress}
              className='form-input__input'
              placeholder={FormFieldLabel.PresentAddress}
              value={formData.presentAddress || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.PermanentAddress}>
              <span className='form-input__label'>
                {FormFieldLabel.PermanentAddress}
              </span>
            </label>
            <input
              type='text'
              id={FormFieldName.PermanentAddress}
              name={FormFieldName.PermanentAddress}
              className='form-input__input'
              placeholder={FormFieldLabel.PermanentAddress}
              value={formData.permanentAddress || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.City}>
              <span className='form-input__label'>{FormFieldLabel.City}</span>
            </label>
            <input
              type='text'
              id={FormFieldName.City}
              name={FormFieldName.City}
              className='form-input__input'
              placeholder={FormFieldLabel.City}
              value={formData.city || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.PostalCode}>
              <span className='form-input__label'>
                {FormFieldLabel.PostalCode}
              </span>
            </label>
            <input
              type='number'
              id={FormFieldName.PostalCode}
              name={FormFieldName.PostalCode}
              className='form-input__input'
              placeholder={FormFieldLabel.PostalCode}
              value={formData.postalCode || ''}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-profile__input form-input'>
            <label htmlFor={FormFieldName.Country}>
              <span className='form-input__label'>
                {FormFieldLabel.Country}
              </span>
            </label>
            <input
              type='text'
              id={FormFieldName.Country}
              name={FormFieldName.Country}
              className='form-input__input'
              placeholder={FormFieldLabel.Country}
              value={formData.country || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button className='form-profile__button' type='submit'>
          <span className='form-profile__button-text'>Save</span>
        </button>
      </form>
    </div>
  );
}

export default FormProfile;
