const cookie = require("cookie");
const Handlebars = require("handlebars");
const markdown = require("helper-markdown");
const { getInvite, getInvites } = require("../../src/api");

Handlebars.registerHelper("markdown", markdown({}));

const template = Handlebars.compile(`
  <h2 class="hello">Well hey there {{names}}! 👋</h2>

  {{#markdown}}
  
  ## What is this?
  
  You're invited to Polly and Ollie's summer party, The Piñata Party! 

  After a few months of Winter X Lockdown we thought why not celebrate Summer and (hopefully) the end of lockdown.

  ## When is it? <i>🗓</i>
  
  2pm till late - 17ᵀᴴ July 2020

  ## Where is it? <i>📍</i>

  [13 Woodland Mews SW16 2AG](https://goo.gl/maps/k3GSHCZBXoQT6kaZ6)
  
  ## Why is this happening? <i>🤔</i>

  Do we need an excuse?! But in all seriousness we need something to look forward to

  ## What to expect? <i>🌮</i>

  Mexican street food. Think tacos, think corn, think a field of coriander, think more tacos, think a piñata, think tequila, think even more tacos...

  Vegan, vegetarian and non vegetarian all catered for.

  ## What do I bring? 

  A record of your vaccine and some booze. Just kidding, the booze is fine.

  ## What about covid? <i>🦠</i>

  We will cancel if we're not allowed large gatherings by July :(
  {{/markdown}}
`);

const PP_ID = "pinata-id";

const invite = async (req, res) => {
  const queryId = req.query.id;
  const cookieId = req.cookies[PP_ID];

  let id = null;

  if (queryId) {
    id = queryId;
  } else if (cookieId) {
    id = queryId;
  }

  try {
    const invite = await getInvite(id);

    if (!cookieId) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize(PP_ID, id, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 180, // ~ 6 months
        })
      );
    }

    res.status(200);
    res.json({
      invite,
      id,
      content: template({
        names: invite.names
          .map((i) => i.name)
          .join(", ")
          .replace(/,(?!.*,)/gim, " and"),
      }),
    });
  } catch (e) {
    console.log({ e });
    res.status(403);
  }

  res.send();
};

module.exports = invite;
