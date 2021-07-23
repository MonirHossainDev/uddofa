import React from 'react';
import styled from 'styled-components';
import { ProductsList, Sidebar } from '../components';

const HomePage = () => {
  return (
    <Uddofa>
      <Sidebar />
      <main>
        <ProductsList />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsum eligendi, officia velit totam nulla quisquam rem, possimus
              veniam voluptas voluptatum, inventore dignissimos quae tempore tenetur in nisi vero saepe.
            </div>
          </div>
          <div className='row guttor-md-0'>
            <div className='col-6'>
              <div className='bg-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellendus reiciendis explicabo quos hic modi enim obcaecati qui
                mollitia earum sapiente officiis iure libero quas possimus asperiores consequatur, illum rerum.
              </div>
            </div>
            <div className='col-6'>
              <div className='bg-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nostrum! </div>
            </div>
          </div>
        </div>
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
