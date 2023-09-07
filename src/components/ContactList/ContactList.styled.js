import styled from 'styled-components';

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledItem = styled.li`
  font-style: italic;
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  background: #ff6969;
  border-radius: 999px;
  box-shadow: #ff6969 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  padding: 3px 18px;
  user-select: none;
  -webkit-user-select: none;
  min-width: 40px;
  border: 0;
`;
