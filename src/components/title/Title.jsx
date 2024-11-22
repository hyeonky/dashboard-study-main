import React from 'react';
import { ButtonIcon } from '../button/Button';
import { BsThreeDots } from 'react-icons/bs';

const Title = ({ title }) => {
  return (
    <header className='flex justify-between items-center'>
      <h2>{title}</h2>
      <ButtonIcon
        blind='옵션보기'
        className='w-9 h-9 bg-gray-100'
      >
        <BsThreeDots />
      </ButtonIcon>
    </header>
  );
};

export default Title;