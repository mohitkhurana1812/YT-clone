import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Mohit Khurana",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rohit",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Mayank",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Aditya",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Mohit",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Tanmay",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Yash",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Surya",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Abhsihek",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tilak",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Virat",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Andrew",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Michael",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];




const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;