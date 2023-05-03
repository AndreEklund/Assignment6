import styled from "styled-components";

/* To write my css I use a library called styled components. */

export const Container = styled.div`
  font-family: "Quicksand-regular";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

export const Input = styled.input`
  display: flex;
  text-align: center;
  align-items: center;
  width: 300px;
  border-radius: 50px;
  margin: 15px;
  font-family: "Quicksand-regular";
  padding: 10px 22px;
  background: #e4ede6;
  font-size: 18px;
  text-decoration: none;
  outline: none;
`;

export const Select = styled.select`
  display: flex;
  text-align: center;
  align-items: center;
  width: 350px;
  border-radius: 50px;
  margin: 15px;
  font-family: "Quicksand-regular";
  padding: 10px 22px;
  background: #e4ede6;
  font-size: 18px;
  text-decoration: none;
  outline: none;
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 20px;
`;

export const Movie = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-evenly;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin: 15px;
  font-family: "Quicksand-regular";
  background: #fee036;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 18px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.2 ease-in-out;
  }
`;
