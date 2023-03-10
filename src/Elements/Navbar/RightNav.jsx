import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:1;

  li {
    color: white;
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    background-color: rgb(66, 66, 66);

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 200px;
    border-radius: 2.5rem;
    font-weight:bold;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    transition: transform 0.0s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="#homepg" id='btn-1'> <li>Home</li></Link>
      <li id='btn-2' >Register</li>
      <Link to="#timelinediv" id='btn-5' ><li>Timeline</li></Link>
      <Link to="#guidelines" id='btn-4' ><li>Guidelines</li></Link>
      <Link to="#footer" id='btn-3' ><li >Contact Us</li></Link>
    </Ul>
  )
}

export default RightNav