/* Anjas Array Starts Here*/
const randomMessageAnja = [
  "sunny, sunny, sunny!!!",
  "cloudy with the sun peeking through.",
  "fine.",
  "surprising us with snow and ice.",
  "hopefully getting better soon!",
  "nice and warm. A perfect summer day.",
  "partly sunny, cloudy, with an occasional thunderstorm.",
  "not nice :-/",
  "rainy all day long.",
  "like a typical winter day.",
];

/* Emrahs Array Starts Here*/
const randomMessageEmrah = [
  "1111111",
  "2222222",
  "3333333",
  "44444444",
  "55555555",
  "6666666",
  "77777777",
  "88888888",
  "999999999",
  "1010101010",
];

/* Alexandras Array Starts Here*/
const randomMessageAlexandra = [
  "- 1",
  "- 2",
  "- 3",
  "- 4",
  "- 5",
  "- 6",
  "- 7",
  "- 8",
];

/* Message generator */
function generateMessage() {
  const randomAnja = randomMessageAnja[Math.floor(Math.random() * randomMessageAnja.length)];
  const randomEmrah = randomMessageEmrah[Math.floor(Math.random() * randomMessageEmrah.length)];
  const randomAlexandra = randomMessageAlexandra[Math.floor(Math.random() * randomMessageAlexandra.length)];

  const output1 = `<h1><i>The weather is</i> ${randomAnja}</h1>`;
  const output2 = `<h1><i>Some text here</i> ${randomEmrah}</h1>`;
  const output3 = `<h1><i>More text here</i> ${randomAlexandra}</h1>`;

  document.getElementById("output1").innerHTML = output1;
  document.getElementById("output2").innerHTML = output2;
  document.getElementById("output3").innerHTML = output3;
}

document.getElementById("generateBtn").addEventListener("click", generateMessage);
