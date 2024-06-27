require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../api/models/users')

const mongoDB =
  'mongodb+srv://project8cdn:45a95dfg311diu@cluster0.d2meriw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const users = [
  {
    email: 'juan@gameproject7.com',
    userName: 'Juan',
    password: 'juan123',
    birthYear: 1995,
    role: 'admin',
    imagen:
      'https://www.shutterstock.com/image-vector/vector-man-head-virtual-reality-260nw-1928602400.jpg',
    films: []
  },
  {
    email: 'david@gameproject7.com',
    userName: 'David',
    password: 'david123',
    birthYear: 1988,
    role: 'user',
    imagen:
      'https://cdn.dribbble.com/users/6048699/screenshots/14208992/samx_avatar_4x.png',
    films: []
  },
  {
    email: 'alicia@gameproject7.com',
    userName: 'Alicia',
    password: 'alicia123',
    birthYear: 2000,
    role: 'guest',
    imagen:
      'https://www.shutterstock.com/image-vector/gamer-girl-playing-portabe-console-260nw-1844659003.jpg',
    films: []
  },
  {
    email: 'santiago@gameproject7.com',
    userName: 'Santiago',
    password: 'santiago123',
    birthYear: 1982,
    role: 'admin',
    imagen:
      'https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg',
    films: []
  },
  {
    email: 'raul@gameproject7.com',
    userName: 'Raúl',
    password: 'raul123',
    birthYear: 1980,
    role: 'admin',
    imagen:
      'https://i.pinimg.com/736x/66/06/19/660619ef6dba6870686cc76d0256afe1.jpg',
    films: []
  },
  {
    email: 'roberto@gameproject7.com',
    userName: 'Roberto',
    password: 'roberto123',
    birthYear: 1991,
    role: 'user',
    imagen:
      'https://www.shutterstock.com/shutterstock/photos/1713348724/display_1500/stock-vector-gas-mask-gamer-mascot-logo-for-gaming-stream-channel-or-community-1713348724.jpg',
    films: []
  },
  {
    email: 'natalia@gameproject7.com',
    userName: 'Natalia',
    password: 'natalia123',
    birthYear: 1989,
    role: 'user',
    imagen:
      'https://www.shutterstock.com/image-vector/gamer-girl-mascot-gaming-esport-600w-1545699083.jpg',
    films: []
  },
  {
    email: 'fran@gameproject7.com',
    userName: 'Fran',
    password: 'fran123',
    birthYear: 1984,
    role: 'admin',
    imagen:
      'https://img.freepik.com/vektoren-premium/gamer-maskottchen-logo-design-vektor-fuer-sportmannschaften_527675-17.jpg',
    films: []
  }
]

const userDocuments = users.map((user) => {
  const newUser = new User(user)
  newUser.password = bcrypt.hashSync(newUser.password, 10)
  return newUser
})

console.log(mongoDB)

mongoose
  .connect(mongoDB)
  .then(async () => {
    const allUsers = await User.find()

    if (allUsers.length) {
      await User.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await User.insertMany(userDocuments)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
