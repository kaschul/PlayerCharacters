import bcrypt from 'bcryptjs'

const partyplayers = [
  {
    name: 'Admin user',
    email: 'admin@myshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Fred Flintstone',
    email: 'fred@myshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Barney Rubble',
    email: 'barney@myshop.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default partyplayers