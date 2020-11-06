import styled from "styled-components";

export const FormModal = styled.div`
    background: #888;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    display: grid;
`
export const FormContent = styled.div`
    max-width: 600px;
    width: 100%;
    margin: auto;
    background: #fff;
    padding: 30px;

    h2{
        margin-bottom: 20px;
    }
    input,textarea{
        margin-bottom: 20px;
    }
    button{
        float: right;
        margin-left: 10px;
    }
    
`