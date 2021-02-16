const Handlebars = require("handlebars");
const markdown = require("helper-markdown");
const { getInvite } = require("../src/api");

Handlebars.registerHelper("markdown", markdown({}));

const template = Handlebars.compile(`
  {{#markdown}}
  
  ## What is this?
  
  You're invited to Polly and Ollie's summer party, The Piñata Party! 

  After a few months of Winter X Lockdown we thought why not celebrate Summer and (hopefully) the end of lockdown.

  ## When is it? 🗓
  
  17ᵀᴴ July 2020

  ## Where is it? 📍

  [13 Woodland Mews SW16 2AG](https://goo.gl/maps/k3GSHCZBXoQT6kaZ6)
  
  ## Why is this happening? 🤔

  Do we need an excuse??!

  ## What to expect? 🌮

  Mexican street food. Think tacos, think corn, think a field of coriander, think more tacos, think a piñata, think tequila, think even more tacos...

  Vegan, vegetarian and non vegetarian all catered for.

  ## What do I bring? 

  Booze and a smile

  ## What about covid? 🦠

  We will cancel if we're not allowed large gatherings by July :(
  {{/markdown}}
`);

const rsvp = async (req, res) => {
  const id = req.query.id;

  try {
    const invite = await getInvite(id);

    res.json({
      invite,
      id,
      content: template(),
    });
    res.status(200);
  } catch (e) {
    res.status(403);
  }

  res.send();
};

module.exports = rsvp;
