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
        comment_text: "Wow, this is some good work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Congrats to everyone!"
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
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;