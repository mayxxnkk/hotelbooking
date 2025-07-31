import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createUser } from './types.js';
import { User } from './db.js'; // match filename & path

const app = express();
app.use(express.json());
app.use(cors());

app.post('/signup', async (req, res) => {
  const input = req.body;
  const parsedInput = createUser.safeParse(input);

  const { username, password, confirmPassword } = req.body;

  if (!parsedInput.success) {
    return res.status(411).json({
      msg: "Sent the wrong inputs"
    });
  }

  try {
    const existinguser = await User.findOne({ username });

    if (existinguser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
    

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// Assuming Express + Mongoose setup
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful" });

  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});
