import UserModel from '../models/user.js'

const getAllUsers = async () => {
  return await UserModel.find({})
}

const findUserById = async (id) => {
  return await UserModel.findById(id)
}

export default {
  findUserById,
  getAllUsers,
}