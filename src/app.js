let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function GeneratorEscuse(who, action, what, when) {
  let numberWho = Math.floor(Math.random() * who.length);
  let numberAction = Math.floor(Math.random() * action.length);
  let numberWhat = Math.floor(Math.random() * what.length);
  let numberWhen = Math.floor(Math.random() * when.length);

  return `${who[numberWho]} ${action[numberAction]} ${what[numberWhat]} ${when[numberWhen]}`;
}

function onLoad() {
  let excuseLink = document.getElementById("excuse");
  excuseLink.innerHTML = GeneratorEscuse(who, action, what, when);
}
window.onload = onLoad;
