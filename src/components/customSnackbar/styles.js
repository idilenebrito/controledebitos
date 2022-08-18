import styled from 'styled-components';

export const Alert = styled.div`
  margin-top: 25px;
  padding: 10px;
  background-color: #2fb986;
  color: white;
  margin-bottom: 5px;
  display: flex;
  font-size: 19px;
  display: ${(props) => (props.display ? 'none' : 'flex')};
`;
export const CloseBtn = styled.span`
  margin-left: 10px;
  color: white;
  font-weight: bold;
  float: right;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #008080;
  }
`;
