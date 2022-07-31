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
        username: "crystal_c",
        twitter: "crystal",
        github: "crystal",
        email: "crystal_c@gmail.com",
        password: "p@ssword3"
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
    {
        username: "fin",
        twitter: "fin_r",
        github: "finr",
        email: "fin_r@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;