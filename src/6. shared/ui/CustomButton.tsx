import React from 'react';
import { Link } from 'react-router-dom';

type CustomButtonProps = {
  link: number | string;
  children: React.ReactNode;
};

function CustomButton({ link, children }: CustomButtonProps) {
  return (
    <div className="custom-button">
      <Link to={`${link}`} className="nav-link">
        {children}
      </Link>
    </div>
  );
}

export default CustomButton;
