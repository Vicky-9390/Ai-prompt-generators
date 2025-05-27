from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows your JavaScript to connect to this server

# Define sample prompts for topics
prompt_data = {
    "nature": ["Describe a forest that never sees sunlight.", "Write about a talking tree."],
    "technology": ["Future of phones that feel emotions.", "Robot chef story."],
    "ai": ["An AI writing music.", "AI that teaches kids math."]
}

@app.route('/get_prompt', methods=['POST'])
def get_prompt():
    data = request.json
    topic = data.get("topic", "").lower()
    prompts = prompt_data.get(topic, ["Sorry, no prompts found for that topic."])
    return jsonify({"prompt": prompts[0]})

if __name__ == '__main__':
    app.run(debug=True)
