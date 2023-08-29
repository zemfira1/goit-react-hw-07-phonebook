import styled from "@emotion/styled";

export const FormEl = styled.form`
    width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    gap: 30px;
    border: 2px solid black;
    margin-bottom: 25px;
`;

export const Label = styled.label`
    display: block;
    font-size: 20px;
`;

export const Input = styled.input`
    display: block;  
    margin-top: 10px;
    border: 1px solid grey;
    border-radius: 4px;
    height:20px;
`;

export const Button = styled.button`
    width: 100px;
    border: 1px solid grey;
    border-radius: 4px;
    background-color: inherit;
`;