const { getInvite, setInvite } = require("../src/api");

module.exports = async (req, res) => {
  const { body } = req;
  const { inviteId } = body;

  let invite = await getInvite(inviteId);

  invite.names = invite.names.map((item) => {
    return { ...item, rsvp: Boolean(body.rsvp[item.name]) };
  });

  await setInvite(inviteId, invite);

  res.status(200);
  res.json({});
};
