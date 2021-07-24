import React from 'react';
import styled from 'styled-components';
import { ProductsList, Sidebar } from '../components';

const HomePage = () => {
  return (
    <Uddofa>
      <Sidebar />
      <main>
        <ProductsList />
      </main>
    </Uddofa>
  );
};

const Uddofa = styled.section`
  display: flex;
  flex: 1 1 0%;
  min-height: calc(100vh - 60px);
  main {
    flex: 1 1 0%;
    .productList {
      margin-top: 0.75rem;
      border-radius: 6px;
      background: #fff;

      .productListHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 20px;
      }

      .productBradcrumb {
        padding: 20px;
        border-bottom: 1px solid #eee;
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          li {
            display: inline-block;
            a {
              color: #555;
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
