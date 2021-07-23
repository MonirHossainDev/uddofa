import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Container>&copy; {new Date().getFullYear()} Uddofa</Container>;
};

const Container = styled.footer`
  background: #333;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
