const express = require("express");
const cors = require("cors");
const authRouter = require("./Routers/authRouter");
const userRouter = require("./Routers/userRouter");
const postRouter = require("./Routers/postRouter");
const categoryRouter = require("./Routers/catRouter");
const connectDB = require("./config/db");
const multer = require("multer");
const path = require("path");
const app = express();

app.use(express.json());

//middleware
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

//image uploader
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//database connection
connectDB();

// routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
