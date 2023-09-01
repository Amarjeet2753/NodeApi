import express from "express"

const router = express.Router();

import userModel from "../models/userModel.js"
import { deleteUser, getAllUser, getUserById, registerNewUser, updateUser } from "../controllers/userController.js";



router.post("/new",registerNewUser)



router.get("/all",getAllUser)


// dynamic routing ========================================>


router.get("/userId/special",async (req,res)=>{

   res.send({
      success : true,
      msg :"special",
   })
})



// one line route===================================>

router.route("/userId/:id").get(getUserById).put(updateUser).delete(deleteUser)

// router.get("/userId/:id",getUserById)
// router.get("/userId/:id",getUserById)
// router.put("/userId/:id",updateUser)
// router.delete("/userId/:id",deleteUser)





export default router



