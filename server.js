import botRoute from "./bot.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";
import taskRoutes from "./routes/tasks.js";
import withdrawRoutes from "./routes/withdraw.js";
import adminRoutes from "./routes/admin.js";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/withdraw", withdrawRoutes);
app.use("/admin", adminRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Telegram Mini App Backend Running ✔️");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
