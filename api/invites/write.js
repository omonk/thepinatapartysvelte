const { setInvites } = require("../../src/api");
const { random } = require("lodash");

const names = [
  ["Ross", "Krystina"],
  ["Ellie", "Luke"],
  ["Fran", "Paul"],
  ["Harry", "Ans", "Lil"],
  ["Will", "Erin", "Ziggy"],
  ["Graham", "Maria", "Jasper"],
  ["Diana", "Jan"],
  ["Jess", "Nick"],
  ["Ben", "Jen"],
  ["Ralph", "Ioli"],
  ["Benny", "Rosie"],
  ["Sales", "Benedict"],
  ["Daisy"],
  ["Amy", "Dan"],
  ["Rozz ", "Ashley"],
  ["Millie"],
  ["Keith", "Kayleigh", "Henry"],
  ["Joel", "Becki"],
  ["Sorab"],
  ["Tobin"],
  ["Donners", "Milbs"],
  ["Katie", "Mike"],
  ["Hailey", "Helena"],
  ["VB", "Tor"],
  ["AJ"],
  ["Crispin", "+1"],
  ["Alex", "Amanda"],
];

const ids = [
  "aquatic.reply.blues",
  "landings.swatted.tracking",
  "takes.connects.enormous",
  "laptops.playful.oblige",
  "devotedly.moods.elated",
  "hugs.sobs.roaring",
  "fleet.resting.backed",
  "flaked.donor.picture",
  "javelin.graver.avoid",
  "another.veto.prayers",
  "frustrated.sally.hobnobbed",
  "approve.friction.potions",
  "informal.rides.bongo",
  "flipper.machine.blanks",
  "arming.tasty.novel",
  "cases.timidly.places",
  "imported.feared.intelligible",
  "project.stopped.jazzy",
  "pose.dressy.flirts",
  "dealmaker.waitress.poke",
  "still.bumps.pulp",
  "evaporates.strainers.conforming",
  "enviably.spawned.prefacing",
  "kebabs.divides.cultivation",
  "blacked.kennels.glitz",
  "slide.trees.mountain",
  "cape.rabbit.himself",
  "reliving.sloped.wording",
  "dove.charm.judge",
  "tamed.gagging.mule",
  "ignited.footing.capillary",
  "shaky.commands.beard",
  "worlds.glum.pinches",
  "rigid.orchids.themes",
  "fallen.domestic.oils",
  "walkabout.luck.foretells",
  "factoring.nabbed.daily",
  "slot.proper.broads",
  "forks.grazed.requests",
  "biked.luck.sticks",
  "moats.bolts.captures",
  "archives.submit.points",
  "devotedly.moods.elated",
  "righteously.iced.skewed",
  "assures.tractor.solved",
  "comparing.example.sunscreen",
  "finals.gearboxes.today",
  "long.snares.securing",
  "enclosure.busier.hems",
  "considers.disrespect.slushy",
  "partners.cheat.develops",
  "panic.snored.thing",
  "curiosity.fight.rich",
];

const chosenIds = [];

const generateId = () => {
  const idx = random(0, ids.length - 1);
  const newId = ids[idx];

  if (chosenIds.includes(newId)) {
    return generateId();
  }

  chosenIds.push(newId);

  return newId;
};

const makeNameInvite = (n) => ({ name: n, rsvp: null });

// [[name1, name2, name3, ...], [nameother, another, la la la]]
const makeInvites = (nameGroups) => {
  let invites = {};

  nameGroups.map((name) => {
    const id = generateId();

    invites = {
      ...invites,
      ...{ [id]: { names: name.map(makeNameInvite) } },
    };
  });

  return invites;
};

// module.exports = async (req, res) => {
//   if (names.length > ids.length) {
//     throw new Error("Too many names!");
//   }

//   await setInvites(makeInvites(names));

//   res.status(200);
//   res.send({});
// };
