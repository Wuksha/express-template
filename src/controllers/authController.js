import authService from '../services/authService.js'

const register = async (req, res, next) => {
  try {
    const { user, token } = await authService.register(req.body)
    res.cookie('__session_token', token, {
      httpOnly: true,  // This ensures the cookie can't be read by JavaScript
      secure: true,    // Ensure this is set to true if your app is using HTTPS
      maxAge: 86400000,  // 1 day in milliseconds
    })
    res.status(200).send({ user })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const { user, token } = await authService.login(req.body.username, req.body.password)
    res.cookie('__session_token', token, {
      httpOnly: true,  // This ensures the cookie can't be read by JavaScript
      secure: true,    // Ensure this is set to true if your app is using HTTPS
      maxAge: 86400000,  // 1 day in milliseconds
    })
    res.status(200).send({ user, token })
  } catch (error) {
    next(error)
  }
}

export default {
  register,
  login,
}
