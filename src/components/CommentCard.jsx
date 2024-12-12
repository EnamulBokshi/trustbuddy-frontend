import React from 'react'

function CommentCard({comment}) {
  return (
    <div>
            <div className='border-b'>
            comments
            </div>
            {comment.map((c,i) => (

                <div key={i}>
                <h3>
                    {c.comment}
                </h3>
                </div>
            ))}
    </div>
  )
}

export default CommentCard