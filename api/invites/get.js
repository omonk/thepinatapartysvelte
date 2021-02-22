const { getInvites } = require("../../src/api");

module.exports = async (req, res) => {
  const invites = await getInvites();

  res.json({ inviteKeys: Object.keys(invites) });
  res.send();
};
