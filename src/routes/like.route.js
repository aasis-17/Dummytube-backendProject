import Router from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { toggleVideoLike } from "../controllers/like.controller.js"

const router = Router()

router.route("/toggle-videoLike/:videoId").get( verifyJWT, toggleVideoLike)

export default router;