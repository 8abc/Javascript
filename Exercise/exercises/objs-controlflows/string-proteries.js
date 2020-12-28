const show = {
  title: "Power Book II: Ghost",
  streamOn: "Starz",
  season: 6,
  rating: 5.0,
};

showProperties(show);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
