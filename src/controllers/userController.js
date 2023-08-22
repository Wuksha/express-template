import userService from '../services/userService.js'

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers(req.user)
    res.json(users)
  } catch (error) {
    next(error)
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await userService.findUserById(req.user, req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export default {
  getAllUsers,
  getUser,
}