import styled from "styled-components";

export const ContactForm = styled.form`
  max-width: 650px;
  min-width: 500px;
  border: 1px solid rgb(133, 130, 130);
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.3rem;
  padding: 20px;
  position: relative;
  & .error-msg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.bg};
    border: 2px solid red;
    height: fit-content;
    width: fit-content;
    padding: 25px;
  }
  & .error-msg h4 {
    color: red;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  & .error-msg p {
    color: ${(props) => props.theme.colors.white};
    font-size: 15px;
    margin-bottom: 10px;
  }
  & .green-border {
    border: 5px solid green;
  }
  & .succes-btn {
    color: green;
    font-size: 15px;
  }

  & .succes-btn h4 {
    color: green;
    font-size: 15px;
  }
`;
export const ContactButton = styled.button`
  height: 55px;
  font-weight: 900;
  font-size: 20px;
  background: ${(props) => props.theme.colors.nav_link_hover};
  border: none;
  filter: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: filter 200ms ease-in;
  border-radius: 5px;
  &:hover {
    filter: brightness(80%) contrast(200%);
  }
`;
export const TextInput = styled.textarea`
  resize: vertical;
  min-height: 250px;
  max-height: 400px;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: 3px solid black;
  outline: none;
  transition: border 350ms ease-in-out;
  &:focus {
    border: 3px solid ${(props) => props.theme.colors.nav_link_hover};
  }
`;
export const ContactInput = styled.input`
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 2rem;
  height: 40px;
  border: 3px solid black;
  outline: none;
  transition: border 350ms ease-in-out;
  &:focus {
    border: 3px solid ${(props) => props.theme.colors.nav_link_hover};
  }
`;
export const ContactLabel = styled.label`
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
`;
