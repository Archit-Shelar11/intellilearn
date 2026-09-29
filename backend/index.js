import express from "express"
import dotenv from "dotenv"
import path from "path"
import fs from "fs"
import connectDb from "./configs/db.js"
import authRouter from "./routes/authRoute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/userRoute.js"
import courseRouter from "./routes/courseRoute.js"
import paymentRouter from "./routes/paymentRoute.js"
import aiRouter from "./routes/aiRoute.js"
import reviewRouter from "./routes/reviewRoute.js"
dotenv.config()

let port = process.env.PORT || 8000
let app = express()

// Ensure public/uploads directory exists for local fallback
const uploadsDir = path.join(process.cwd(), "public", "uploads")
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
}

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// Serve static uploads for local file fallback
app.use("/uploads", express.static(uploadsDir))
app.use(express.static("public"))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/course", courseRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/ai", aiRouter)
app.use("/api/review", reviewRouter)

app.get("/", (req, res) => {
    res.send("Hello From Server")
})

app.listen(port, () => {
    console.log("Server Started on port " + port)
    connectDb()
})


