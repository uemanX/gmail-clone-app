import './SidebarOption.css';
import React from 'react';

type Props = {
  Icon: any;
  title: string;
  number: number;
};

const SidebarOption = ({ Icon, title, number }: Props) => {
  return (
    <div className='sidebarOption'>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
