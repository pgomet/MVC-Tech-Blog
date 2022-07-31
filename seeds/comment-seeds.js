const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is awesome!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, this is amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! Congrats to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Amazing!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is awesome news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Good job!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "This is a very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;