let Real_Madrid = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  world_wide_fans: 798,
};

// db.collection("teams").add(Real_Madrid);

let Barcelona = {
  team_name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  world_wide_fans: 738,
};

// db.collection("teams").add(Barcelona);

let Manchester_United = {
  team_name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  world_wide_fans: 755,
};

// db.collection("teams").add(Manchester_United);

let Manchester_City = {
  team_name: "Manchester",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  world_wide_fans: 537,
};

// db.collection("teams").add(Manchester_City);

let Brazil_National_Team = {
  team_name: "Brazil National Team",
  city: "",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  world_wide_fans: 950,
};

// db.collection("teams").add(Brazil_National_Team);

let Argentina_national_team = {
  team_name: "Argentina national team",
  city: "",
  country: "Argentina",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  world_wide_fans: 800,
};

// db.collection("teams").add(Argentina_national_team);

let Atletico_Madrid = {
  team_name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragonés", "Griezmann", "Torez"],
  world_wide_fans: 400,
};

// db.collection("teams").add(Atletico_Madrid);

// 1) Show all teams in Spain
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "1) All teams in Spain:";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q1").innerHTML = html;
  });

// 2) Show all teams in Madrid, Spain
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "2) All teams in Madrid, Spain:";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q2").innerHTML = html;
  });

// 3) Show all national teams
db.collection("teams")
  .where("city", "==", "")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "3) All national teams:";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q3").innerHTML = html;
  });

// 4) Show all teams that are not in Spain
db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "4) All teams that are not in Spain:";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q4").innerHTML = html;
  });

// 5) Show all teams that are not in Spain or England
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "5) All teams that are not in Spain or England:";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q5").innerHTML = html;
  });

// 6) Show all teams in Spain with more than 700M fans
db.collection("teams")
  .where("country", "==", "Spain")
  .where("world_wide_fans", ">", 700)
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "6) All teams in Spain with more than 700M fans";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q6").innerHTML = html;
  });

// 7) Show all teams with a number of fans in the range of 500M and 600M
db.collection("teams")
  .where("world_wide_fans", ">=", 500)
  .where("world_wide_fans", "<=", 600)
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "7) All teams with fans in the range of 500M and 600M";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q7").innerHTML = html;
  });

// 8) Show all teams where Ronaldo is a top scorer
db.collection("teams")
  .where("top_scorers", "array-contains", "Ronaldo")
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "8) All teams where Ronaldo is a top scorer";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q8").innerHTML = html;
  });

// 9) Show all teams where Ronaldo, Maradona, or Messi is a top scorer
db.collection("teams")
  .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((mydata) => {
    let mydocs = mydata.docs;
    let html = "9) All teams where Ronaldo, Maradona, or Messi is a top scorer";
    mydocs.forEach((d) => {
      html += `<br>${d.data().team_name}`;
    });
    document.querySelector("#Q9").innerHTML = html;
  });

// Update the worldwide fans
// Real Madrid
db.collection("teams").doc("6EcwWoxTGWpImamTCN6t").update({
  world_wide_fans: 811,
  team_name: "Real Madrid FC",
});

//Barcelona
db.collection("teams").doc("GxLhNqljnDLtT1SclrXC").update({
  world_wide_fans: 747,
  team_name: "FC Barcelona",
});

// Update the top scorers
// Real Madrid
db.collection("teams")
  .doc("6EcwWoxTGWpImamTCN6t")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });

// Barcelona
db.collection("teams")
  .doc("GxLhNqljnDLtT1SclrXC")
  .update({
    top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
    top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
  });

// Step 3 part b
// Update jersey colors for Real Madrid
let RM_color = {
  home: "White",
  away: "Black",
};

db.collection("teams").doc("6EcwWoxTGWpImamTCN6t").update({
  color: RM_color,
});

// Update jersey colors for Barcelona
let Barcelona_color = {
  home: "Red",
  away: "Gold",
};

db.collection("teams").doc("GxLhNqljnDLtT1SclrXC").update({
  color: Barcelona_color,
});

// Update away jersey color for Real Madrid
db.collection("teams").doc("6EcwWoxTGWpImamTCN6t").update({
  "color.away": "Purple",
});

// Update away jersey color for Barcelona
db.collection("teams").doc("GxLhNqljnDLtT1SclrXC").update({
  "color.away": "Pink",
});
