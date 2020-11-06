import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { dataPostAsync } from '../../pages/SingleAuthorSlice'
import { FormModal, FormContent } from './formStyle'

function PostForm( {closeModal}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const {authorId} = useParams()
    let postId = Math.floor((Math.random() + 1) * 100);

    const handleSubmit = e => {
        e.preventDefault()
        if(title.trim() && body.trim()){
            dispatch(dataPostAsync({title, body, userId: +authorId,id: postId }))
            setBody('')
            setTitle('')
            closeModal(false)
        }
    }
    const handleClose = () => {
        closeModal(false)
    }
    return (
        <FormModal className='form-modal'>
            <FormContent>
                <h2>Create your New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className='form-control'
                        value={title}
                        placeholder='Type title'
                        onChange={ e =>setTitle(e.target.value)}
                    />
                    <textarea 
                        type="text"
                        className='form-control'
                        value={body}
                        placeholder='Type post'
                        onChange={ e =>setBody(e.target.value)}
                    />
                    <button type='submit'  className='btn btn-primary'>Submit</button>
                    <button className='btn btn-danger' onClick={handleClose}>Close</button>
                </form>
            </FormContent>
        </FormModal>
    )
}

export default PostForm
