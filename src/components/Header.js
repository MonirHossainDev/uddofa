import React from 'react';
import { Link } from 'react-router-dom';
import { RiAppsFill } from 'react-icons/ri';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <RiAppsFill /> Uddofa
      </Link>
    </Container>
  );
};

const Container = styled.header`
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #eee;
  a {
    color: #e2136e;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 0.25rem;
    }
  }
`;

export default Header;
