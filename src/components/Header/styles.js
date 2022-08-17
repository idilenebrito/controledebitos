import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  padding-top: 20px;
  width: 100%;
  color: #fff;
`;

export const Button = styled.div`
  margin-right: 20px;
  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
  }
`;
