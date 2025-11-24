import botRoute from "./bot.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import taskRoutes from "./routes/tasks.js";
import withdrawRoutes from "./routes/withdraw.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
// ❌ remove this → app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/withdraw", withdrawRoutes);
app.use("/admin", adminRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Telegram Mini App Backend Running ✔️");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
