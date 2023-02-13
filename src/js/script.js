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
    
    
    const output = `<h1><i>If the weather</i> ${randomAnja}<i> be </i>${randomEmrah} ${randomAlexandra}</h1>`;
    document.getElementById("output").innerHTML = output;
  }
  document.getElementById("generateBtn").addEventListener("click", generateMessage);


  