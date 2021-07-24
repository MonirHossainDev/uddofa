import React from 'react';
import { RiMapPinLine } from 'react-icons/ri';
import styled from 'styled-components';
import productsData from '../data/products';

const Uddofa = styled.section`
  padding: 50px 0;

  .ddd {
    margin-bottom: 30px;
    border-radius: 4px;
    padding: 10px;
    border: 1px solid #eee;
    height: 100px;
    display: flex;
    align-items: center;
  }

  .breadcrumb {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          text-decoration: none;
          color: #000;
          margin-right: 1rem;
        }
      }
    }
  }
  .productt {
    @media (max-width: 992px) {
      background: #fff;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      &:nth-child(even) {
        border-right: 0;
      }
    }

    .product {
      padding: 10px;
      margin-bottom: 1.5rem;
      @media (min-width: 992px) {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 6px;
      }
      &__img {
        height: 278px;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 10px;
        @media (max-width: 778px) {
          height: 186px;
        }
        &--inner {
          height: 100%;
          position: relative;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-transition: opacity 0.4s ease-in-out;
            transition: opacity 0.4s ease-in-out;
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

const ProductsList = () => {
  return (
    <Uddofa>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='bg-white p-10 mb-20 border'>
              <div className='location d-flex justify-content-between mb-20'>
                <div className=''>
                  <strong>Location:</strong> Bangladesh
                </div>
                <div className='text-primary'>Change</div>
              </div>
              <div className='breadcrumb d-flex justify-content-between'>
                <ul>
                  <li>
                    <a href=''>Home</a>
                  </li>
                  <li>
                    <a href=''>Health & Beauty</a>
                  </li>
                </ul>
                <div className='short'>Short</div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          {productsData.map((product) => {
            const { id, name, price, image } = product;
            return (
              <div key={id} className='productt col-6 col-lg-4 col-xl-3'>
                <div className='product'>
                  <div className='product__img'>
                    <div className='product__img--inner'>
                      <img src={image} alt='' />
                    </div>
                  </div>
                  <div>
                    <span>{name}</span>
                    <h5 className='mb-0 py-10 text-primary'>
                      ৳ {price} <span className='fs-80'>MRP 580</span>
                    </h5>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <div>Five star 4.5 (55) - 55 Sold</div>
                    {/* <div>5 Sold </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Uddofa>
  );
};

export default ProductsList;
