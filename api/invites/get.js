const { getInvites } = require("../../src/api");

module.exports = async (req, res) => {
  if (req.headers["x-key"] === "fuck-off-ross") {
    const invites = await getInvites();

    res.json({ inviteKeys: Object.keys(invites) });
    res.send();
  } else {
    res.status(403);
    res.send("Go away nerd");
  }
};
