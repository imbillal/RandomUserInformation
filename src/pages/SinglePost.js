import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import DeleteButton from '../components/Buttons/deleteButton/DeleteButton';
import Comments from '../components/Comments/Comments';
import CommentCount from '../components/Count/CommentCount';
import Loading from '../components/Loading/Loading';
import { Buttons, Post, PostInfo } from '../components/post/PostStyle';
import { fetchComments, fetchPosts } from './SingleAuthorSlice';
import { FaAngleLeft } from 'react-icons/fa';

function SinglePost() {
    const {posts, comments} = useSelector(state => state.author)
    const {authorId,postId} = useParams()
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const goBack = () => {
        history.goBack()
    }
    
    useEffect( () => {
        dispatch(fetchPosts(`posts/${postId}`))
        dispatch(fetchComments(`comments`))
    },[])
    return posts && comments ? (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-10">

                    <Post className='post single-post' >
                        <p className='title'><b>{posts.title}</b></p>
                        <p className='text'>{ posts.body }</p>
                        <div style={{display: "grid", gridTemplateColumns: '50% 1fr'}}>
                            <PostInfo>
                                <span><b>Comments </b></span>
                                <CommentCount postId={posts.id} comments={comments} />
                            </PostInfo>
                            <Buttons>
                                <Link className='btn btn-primary' to={`/author/${authorId}`}><FaAngleLeft /></Link>
                                <DeleteButton postId={posts.id}></DeleteButton>
                            </Buttons>
                        </div>
                    </Post>
                    <Comments postId={posts.id} data={comments}/>
                </div>
            </div>
        </div>
    ): null
}

export default SinglePost
