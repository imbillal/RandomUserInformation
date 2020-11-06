import styled from "styled-components";

export const Post = styled.div`
    background: #fcfcfc;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 30px;
    min-height: 170px;
    &.single-post{
        background: #fdfdfd;
        border: 1px solid #ddd;
    }
    .title{
        margin-bottom: 10px;
        text-transform: capitalize;
    }
`
export const Buttons = styled.div`
    grid-column-end: none;
    .btn{
        margin-right: 10px;
    }
`
export const PostInfo = styled.div`
    align-self: center;
    span{
        display: inline-block;
        margin-right: 10px;
    }
`