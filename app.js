let Real_Madrid = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "spain",
  top_scorers: [Ronaldo, Benzema, Hazard],
  world_wide_fans: 798,
};

db.collection("teams").add(Real_Madrid);
