const { User } = require('../models');

const userData = [
    {
        username: "kevin_le1",
        twitter: "kevinle",
        github: "kevinnle",
        email: "kevin@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "ashley_z",
        twitter: "ashleyz",
        github: "ashz",
        email: "ashz@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "lena_h",
        twitter: "lenah",
        github: "lenaha",
        email: "lenah@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "pina_g",
        twitter: "pinag",
        github: "pgomet",
        email: "pina_g@gmail.com",
        password: "p@ssword5"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;