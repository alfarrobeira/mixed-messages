 /* Anjas Array Starts Here*/
const randomMessageAnja = [
    "XX",
    "YY",
    "FF",
    "GG",
    "HH",
    "TT",
    "UU",
    "RR",
    "MM",
    "QQ",
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
    "1010101010"
  ];

  /* Alexandras Array Starts Here*/
  const randomMessageAlexandra = [
    "Don't forget to feed the cats.",
    "Buy bread.",
    "Stop sitting on the toilet.",
    "Comb your hair.",
    "Buy a cat.",
    "Open the folder.",
    "Change language.",
    "Get your ass up and go to work.",
  ];




/* Message generator */
function generateMessage() {
    const randomAnja =
      randomMessageAnja[Math.floor(Math.random() * randomMessageAnja.length)];
    const randomEmrah =
      randomMessageEmrah[Math.floor(Math.random() * randomMessageEmrah.length)];
    const randomAlexandra =
      randomMessageAlexandra[
        Math.floor(Math.random() * randomMessageAlexandra.length)
      ];
  
    const output1 = `<h1><i>The weather is</i> ${randomAnja}</h1>`;
    const output2 = `<h2><i>Some text here</i> ${randomEmrah}</h2>`;
    const output3 = `<h3><i>More text here</i> ${randomAlexandra}</h3>`;
  
    document.getElementById("output1").innerHTML = output;
    document.getElementById("output2").innerHTML = output;
    document.getElementById("output3").innerHTML = output;
  }
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateMessage);


  