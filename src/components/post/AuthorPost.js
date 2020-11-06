import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import DeleteButton from '../Buttons/deleteButton/DeleteButton';
import {Post,Buttons, PostInfo} from './PostStyle'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, fetchPosts } from '../../pages/SingleAuthorSlice';
import CommentCount from '../Count/CommentCount';
import { FaAngleRight } from 'react-icons/fa';
function AuthorPost({data, authorId}) {
    const {posts, comments} = useSelector(state => state.author)
    let AuthorPosts = posts && posts.length > 0 && posts.filter( post => post.userId == authorId)
    const {pathname}  = useLocation();
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchPosts(`posts`))
        dispatch(fetchComments(`comments`))
    }, [])
    return (
        <div className="row">

            {
                AuthorPosts && AuthorPosts.map(post => {
                    return (
                        <div className="col-md-6" key={post.id}>
                            <Post className='post' >
                                <p className='title'><b>{post.title}</b></p>
                                <p className='text'>
                                    {
                                        post.body.length > 80 ?
                                        pathname === `/author/${authorId}` ?  
                                        post.body.substr(0, 80) + '...': post.body 
                                            : post.body
                                    }
                                </p>
                                <div style={{display: "grid", gridTemplateColumns: '50% 1fr'}}>
                                    <PostInfo>
                                        <span><b>Comments </b></span>
                                        <CommentCount postId={post.id} comments={comments}/>
                                    </PostInfo>
                                    <Buttons>
                                        <Link to={`/author/${authorId}/posts/${post.id}`} className='btn btn-primary'><FaAngleRight /></Link>
                                        <DeleteButton postId={post.id} ></DeleteButton>
                                    </Buttons>
                                </div>
                            </Post>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthorPost
