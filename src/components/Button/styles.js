import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  margin-top: 12px; /* espaçamento acima */
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: #45a049;
  }
`;
