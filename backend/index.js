const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const pingRoutes = require("./routes/pingRoute");



const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Login API
// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }

//   res.status(200).json({ message: "Login successful", token: "mock-jwt-token" });
// });


//   console.log("Message API registered");



// Chat Message Save API
// app.post("/api/message", (req, res) => {


//     console.log("Incoming message request:", req.body);

//   const { user, message } = req.body;

//   if (!user || !message) {
//     return res.status(400).json({ error: "User and message are required" });
//   }

//   res.status(200).json({
//     status: "Message saved",
//     data: {
//       user,
//       message
//     }
//   });
// });


app.use("/api", authRoutes);
app.use("/api", messageRoutes);
app.use("/api", pingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
