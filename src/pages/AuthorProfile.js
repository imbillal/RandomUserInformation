import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import AuthorInformation from '../components/authorInfo/AuthorInformation'
import Comments from '../components/Comments/Comments'
import PostForm from '../components/form/PostForm'
import Loading from '../components/Loading/Loading'
import AuthorPost from '../components/post/AuthorPost'
import {fetchAuthor, fetchPosts, fetchComments} from './SingleAuthorSlice'
import { FaPlus } from 'react-icons/fa';
function AuthorProfile() {
    const {authorId} = useParams()
    const dispatch = useDispatch()
    const {authorInfo} = useSelector(state => state.author)
    const [postModal, setPostModal] = useState(false)
    useEffect( () => {
        dispatch(fetchAuthor(`users/${authorId}`))
        // dispatch(fetchComments('comments'))
    }, [])
    const closeModal = (value) => {
        setPostModal(value)
    }
    return authorInfo ? (
        <div className='container'>
            <OpenForm onClick={() => setPostModal(true)}><FaPlus /></OpenForm>
            {postModal && <PostForm closeModal={closeModal}/>}
            <UserProfileInfo className="row">
                <div className="col-md-5">
                    <div className="img-sec">
                        <img src={`https://i.pravatar.cc/300?u=${authorInfo.id}`} alt=""/>
                    </div>
                </div>
                <div className="col-md-7">
                    <AuthorInformation data={authorInfo} />
                </div>
            </UserProfileInfo>
            <AuthorPost authorId={authorId} />
        </div>
    ): null
}

const UserProfileInfo = styled.section`
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 30px;
    margin: 0;
    margin-bottom: 30px;
    .img-sec{
        border-radius: 5px;
        overflow: hidden;
        max-width: 300px;
    }
    img{
        width: 100%;
    }
`
const OpenForm = styled.div`
    background: #fff;
    color: #000;
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0,0,0,.4);
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    line-height: 80px;
    transition: all .3s;
    :hover{
        background: #007bff;
        color: #fff;
    }
    svg{
        font-size: 36px;
    }

`

export default AuthorProfile
