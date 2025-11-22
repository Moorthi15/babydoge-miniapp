import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const BOT_TOKEN = "8301638884%3AAHCFO3XfHAUa8YvvKPDUK1oXFH4BBWqGxw"; 
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

// --- Send Mini App Button ---
const sendMiniApp = async (chatId) => {
  await axios.post(`${TELEGRAM_API}/sendMessage`, {
    chat_id: chatId,
    text: "🚀 Open BabyDoge Mini App",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Mini App",
            web_app: {
              url: "https://babydoge-miniapp.onrender.com"
            }
          }
        ]
      ]
    }
  });
};

// --- Webhook Route ---
app.post("/webhook", async (req, res) => {
  try {
    const message = req.body.message;

    if (message && message.text === "/start") {
      await sendMiniApp(message.chat.id);
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error("Webhook error:", err);
    return res.sendStatus(500);
  }
});

// --- Home Route ---
app.get("/", (req, res) => {
  res.send("Bot is running successfully!");
});

// --- Start Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
