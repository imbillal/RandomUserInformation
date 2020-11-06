import React from 'react'
import {SingleComment} from './commentStyle'

function Comments({data, postId}) {

    let filteredComments =  data.filter(comment => comment.postId === postId)
    return (
        <>
            <h2>Comments__</h2>
            {
                filteredComments.length > 0 && filteredComments.map( commentator => {
                    return (
                        <SingleComment className="single-comment" key={commentator.id}>
                            <a href='' className="email">{commentator.email}</a>
                            <p className="text">{commentator.body}</p>
                        </SingleComment>
                    )
                })
            }
        </>
    )
}

export default Comments
