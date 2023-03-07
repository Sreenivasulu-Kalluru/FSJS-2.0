import React from 'react';

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="text-xl font-semibold bg-[#333] text-[#fff] text-center py-5">
      <p>Copyright &copy; {currYear} Vasu K</p>
    </footer>
  );
};

export default Footer;
