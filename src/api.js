const fetch = require("node-fetch");

const ghToken = "86ce6884b7161cdd8aa47175a89963950b24fd4c";
const gistID = "e01b9d3de1630eb0b216b086979c2f94";

const getInvites = async () => {
  const res = await fetch(
    `https://omonk:${ghToken}@api.github.com/gists/${gistID}`
  );

  if (!res.ok) throw new Error(`Could not find gist ${res.status}`);

  const { files } = await res.json();

  return JSON.parse(files["db.json"].content).invites;
};

const setInvites = async (newInvites) => {
  const res = await fetch(
    `https://omonk:${ghToken}@api.github.com/gists/${gistID}`,
    {
      method: "patch",

      body: JSON.stringify({
        files: {
          "db.json": {
            content: JSON.stringify({ invites: newInvites }, null, 2),
            filename: "db.json",
          },
        },
      }),
    }
  );

  if (!res.ok) throw new Error(`gist update did not occur ${res.status}`);
};

const getInvite = async (id) => {
  const invites = await getInvites();
  const invite = invites[id];

  if (!invite) {
    throw new Error("Unable to get invite", { id });
  }

  return invite;
};

const setInvite = async (id, updatedInvite) => {
  const invites = await getInvites();

  if (!invites[id]) {
    throw new Error("Unable to set invite", { id });
  }

  invites[id] = updatedInvite;

  await setInvites(invites);
};

module.exports = { getInvite, getInvites, setInvite, setInvites };
