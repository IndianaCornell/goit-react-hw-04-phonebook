import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ErrorMess = styled(ErrorMessage)`
  color: wheat;
  font-style: italic;
`;

export const ErrorP = styled.p`
  color: wheat;
  font-style: italic;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  font-style: italic;
  line-height: 1.2;
  font-family: 'Signika Negative', sans-serif;
  font-weight: 300;
`;

export const FieldArea = styled(Field)`
  background: #5e5df0;
  border-radius: 999px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  min-width: 200px;
  border: 0;
`;

export const StyledButton = styled.button`
  background: #ff6969;
  border-radius: 999px;
  box-shadow: #ff6969 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  min-width: 200px;
  border: 0;
`;
