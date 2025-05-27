const prompts = {
  "nature": [
    "Describe a forest that never sees sunlight.",
    "Write a story set in a world ruled by trees.",
    "Imagine a future where humans can communicate with plants. What changes would occur in agriculture and ecosystems?.",

"Explain the impact of climate change on coral reefs through the perspective of a fish.Write a descriptive paragraph about a hidden valley untouched by human activity.",

"Create a short poem about the cycle of seasons in a temperate forest.Invent a new species of plant that can purify polluted air and descrbe its characteristics and impact on cities.",

"Imagine a conversation between the ocean and the wind. What would they say to each other?",

"Tell a story where nature reclaims an abandoned city."
  ],
  "technology": [
    "Imagine a smartphone that responds to emotions.",
    "Describe a robot that wants to be a chef.",
    "Imagine a world where AI controls all government decisions. How would society change?",
"Write a futuristic story where people can download knowledge directly into their brains.Describe a day in the life of a smart home that has its own personality.",
"Invent a new piece of wearable technology and explain how it impacts social interaction.",
"Tell a story where a robot develops emotions and struggles to understand them.",
"Debate: Should machines be granted rights if they achieve consciousness?",
"Imagine an app that can predict your future. What happens when someone tries to change theirs?",
"Describe the downfall of a society that becomes too dependent on automation.",
"Write a scene where a hacker uncovers a global conspiracy hidden in the internet."

  ],
  "space": [
    "Write about a planet where gravity is reversed.",
    "Describe life inside a space station run by AI.",
     "Write a diary entry from an astronaut on their 500th day aboard a deep space exploration ship.Describe what it feels like to walk on an alien planet for the first time.",
"Create a sci-fi story where Earth receives a message from intelligent life in another galaxy.Imagine if humans colonized the moon. What would a day look like for a moon citizen?Design a futuristic space station and explain its features and purpose.",
"Narrate a conflict between two alien civilizations from the perspective of a space traveler caught in the middle.Write a story where black holes are discovered to be portals to other dimensions.",
"Explain how space tourism has changed daily life on Earth 100 years from now.",
"Compose a poem about the loneliness and beauty of outer space."

  ],
  "ai": [
    "Describe an AI that helps kids with homework.",
    "Imagine an AI that writes poetry for pets."
  ], 
  "hotnews":[
    "Pk was a movie that was released in 2004 .",
    "The movie PK was released in 2014.",
    "PK was a movie that was released in 2025."
  ]
};

function generatePrompt() {
  const topic = document.getElementById("topic").value;
  const output = document.getElementById("output");

  fetch('http://127.0.0.1:5000/get_prompt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ topic: topic })
  })
  .then(res => res.json())
  .then(data => {
    output.innerText = data.prompt;
  })
  .catch(error => {
    output.innerText = "Error fetching prompt.";
    console.error(error);
  });
}
