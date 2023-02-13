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
    "Sunny days, funky ways",
    "Rain, pain, brain drain",
    "Windy tales, failed sails",
    "Snowflakes, snow brakes",
    "Stormy mood, foodie dude",
    "Foggy brain, insane train",
    "Hazy craze, lazy daze",
    "Thunder clap, nap trap",
    "Cloudy gloom, room boom",
    "Heatwave dreams, ice cream screams"
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
    
   /*  <i> be </i>${randomEmrah} ${randomAlexandra}</h1> */
    const outputAnja = `<p><i>If the weather</i> ${randomAnja}`;
    document.getElementById("outputAnja").innerHTML = outputAnja;

    const outputEmrah = `<p><i> it's gonna be like; </i>${randomEmrah}`;
    document.getElementById("outputEmrah").innerHTML = outputEmrah;

    const outputAlexandra = `<p><i></i>${randomAlexandra}`;
    document.getElementById("outputAlexandra").innerHTML = outputAlexandra;

  }
  document.getElementById("generateBtn").addEventListener("click", generateMessage);


