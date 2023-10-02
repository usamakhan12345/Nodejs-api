import express from "express";
import User from "../models/index.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import Joi from "joi";
import Verifytoken from "../VerifyToken/index.js";

const router = express.Router();

const userJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  phone: Joi.string().optional().min(10),
});

router.get("/", Verifytoken ,async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).send({ message: users });
});

router.post("/", async (req, res) => {
  try {
    await userJoiSchema.validateAsync(req.body);
    const password = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password});
    await user.save();
    const token = await Jwt.sign({ _id: user.id, email: user.email }, "SMIT");
    res.status(200).send({ status: "200 ", message: "user save", user, token: token });
    
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "400 ", message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send({ status: 401, message: "user not found" });
  }
  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    res.status(401).send({ status: 400, message: "wrong password!" });
  } else {
    const token = await Jwt.sign({ _id: user.id }, "SMIT");
    res
      .status(401)
      .send({ status: 400, user, token, message: "user login successfuly!" });
  }
});

export default router;
