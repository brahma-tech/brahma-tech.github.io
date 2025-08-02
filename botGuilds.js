const express = require("express");
const router = express.Router();

/**
 * Creates the /api/bot-guilds route
 * @param {import("discord.js").Client} client - The Discord bot client
 */
module.exports = (client) => {
  // GET /api/bot-guilds
  router.get("/", (req, res) => {
    try {
      if (!client || !client.guilds || !client.guilds.cache) {
        return res.status(500).json({ error: "Bot client not ready" });
      }

      // Get all guild IDs where the bot is present
      const guildIds = client.guilds.cache.map(g => g.id);

      res.json({ guildIds });
    } catch (error) {
      console.error("Error fetching bot guilds:", error);
      res.status(500).json({ error: "Failed to get bot guilds" });
    }
  });

  return router;
};
