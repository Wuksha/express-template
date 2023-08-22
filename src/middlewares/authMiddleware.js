import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const authenticateJWT = (req, res, next) => {
  const token = req.cookie && req.cookie.__session_token
  if (!token) { res.sendStatus(401) }

  jwt.verify(token, process.env.SECRET_KEY, (err, id) => {
    if (err) {
      return res.sendStatus(403)
    }
    
    req.user = User.find({ id })
    next()
  })
  
}

export default {
  authenticateJWT,
}