const { default: styled } = require("styled-components")

export const SingleAuthor = styled.div`
    border: 1px solid #ddd;
    margin-bottom: 30px;
    .author-img{
        border-radius: 50%;
        width: 150px;
        height: 150px;
        overflow: hidden;
        text-align: center;
        margin: 15px auto;
    }
    img{
        width: 100%;
    }

`
export const UserInfo = styled.div`
    padding: 15px;
    border-top: 1px solid #efefef;
    background: #fafafa;
    p{
        margin-bottom: 5px;
    }
    .name{
        text-transform: uppercase;
    }
`
export const ViewProfileBtn = styled.button`
    border-radius: 0;
    width: 100%;
    a{
        color: #fff;
        display: block;

    }
    a:hover{
        text-decoration: none;
    }
`