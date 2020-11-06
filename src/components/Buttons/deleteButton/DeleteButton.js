import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import {deletePostAsync} from '../../../pages/SingleAuthorSlice'
import { FaTrash } from 'react-icons/fa';

function DeleteButton({children, postId}) {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const history = useHistory()
    const handleClick = () => {
        dispatch(deletePostAsync(postId))
        if(pathname.includes(`posts/${postId}`)){
            history.goBack()
        }
    }
    return (
        <button className='btn btn-danger' onClick={handleClick}><FaTrash /></button>
    )
}

export default DeleteButton
