const prompts = {
  "nature": [
    "Describe a forest that never sees sunlight.",
    "Write a story set in a world ruled by trees."
  ],
  "technology": [
    "Imagine a smartphone that responds to emotions.",
    "Describe a robot that wants to be a chef."
  ],
  "space": [
    "Write about a planet where gravity is reversed.",
    "Describe life inside a space station run by AI."
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
