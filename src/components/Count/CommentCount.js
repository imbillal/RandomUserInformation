import React from 'react'

function CommentCount({comments, postId}) {
    let filteredComments = comments  && comments.filter(comment => comment.postId === postId)
    return (
        <span>
            {filteredComments && filteredComments.length}
        </span>
    )
}

export default CommentCount
