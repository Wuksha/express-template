import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'

const register = async (userData) => {
  userData.password = bcrypt.hashSync(userData.password, 8)
  const user = new User(userData)

  await user.save()

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: 86400,  // expires in 24 hours
  })

  const response = { user: user.toObject(), token }
  delete response.user.password
  return response
}

const login = async (username, password) => {
  const user = await User.findOne({ username })

  if (!user) {
    throw new Error('Invalid Username or Password')
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid Username or Password')
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: 86400,  // expires in 24 hours
  })

  return {
    user,
    token,
  }
}

export default {
  register,
  login,
}
