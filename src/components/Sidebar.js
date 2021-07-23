import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Uddofa>
      <div className='mb-16'>
        {/* <h6 className='mb-0 px-20 py-10 bg-light'>Categories</h6> */}
        <nav>
          <ul>
            <li>
              <Link to=''> Electronic Devices</Link>
            </li>
            <li>
              <Link to=''> Electronic Accessories </Link>
            </li>
            <li>
              <Link to=''> Home Appliances </Link>
            </li>
            <li>
              <Link to=''> Health & Beauty </Link>
            </li>
            <li>
              <Link to=''> Groceries </Link>
            </li>
            <li>
              <Link to=''> Womens Fashion</Link>
            </li>
            <li>
              <Link to=''> Kids Fashion & Toys </Link>
            </li>
            <li>
              <Link to=''> Mens Fashion</Link>
            </li>
            <li>
              <Link to=''> Motorbike</Link>
            </li>

            {/* <li>
              <Link to=''> Fashion</Link>
              <ul>
                <li>
                  <Link to=''>Womens</Link>
                </li>
                <li>
                  <Link to=''>Mens</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
      {/* <div className='mb-30'>
        <h6 className='mb-0 px-20 py-10 bg-light'>Location</h6>
        <nav>
          <ul>
            <li>
              <Link to=''>Barishal</Link>
            </li>
            <li>
              <Link to=''>Chattogram</Link>
            </li>
            <li>
              <Link to=''>Dhaka</Link>
            </li>
            <li>
              <Link to=''>Khulna</Link>
            </li>
            <li>
              <Link to=''>Mymensingh</Link>
            </li>
            <li>
              <Link to=''>Rajshahi</Link>
            </li>
            <li>
              <Link to=''>Rangpur</Link>
            </li>
            <li>
              <Link to=''>Sylhet</Link>
            </li>
          </ul>
        </nav>
      </div> */}
    </Uddofa>
  );
};

const Uddofa = styled.aside`
  width: 260px;
  background: #fff;
  color: #333;
  border-right: 1px solid #eee;
  @media (max-width: 991px) {
    display: none;
  }
  nav {
    margin-top: 1rem;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        a {
          display: block;
          text-decoration: none;
          color: #666;
          padding: 5px 20px;
          transition: ease all 0.3s;
          font-size: 1rem;
          &:hover {
            color: #e2136e;
          }
        }
      }
    }
  }
`;
export default Sidebar;
