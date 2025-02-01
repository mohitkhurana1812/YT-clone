import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
      const comments = [
            {
                  name: "ak",
                  text: "Lorem Ipsum",
                  replies: []
            },
            {
                  name: "ak",
                  text: "Lorem Ipsum",
                  replies: []
            },
            {
                  name: "ak",
                  text: "Lorem Ipsum",
                  replies: []
            },
            {
                  name: "ak",
                  text: "Lorem Ipsum",
                  replies: []
            },

      ]
  return (
        <div className='m-5 p-2'>
              <h1 className="text-2xl font-bold">Comments</h1>
              <Comment/></div>
  )
}

export default CommentsContainer