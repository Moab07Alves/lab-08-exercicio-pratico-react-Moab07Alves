import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`;

export const Select = styled.select`
  padding: 10px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;
