
# Flask service for text summarization and extracting insights using HuggingFace transformers
from flask import Flask, request, jsonify
from transformers import pipeline


# Initialize Flask app and summarization pipeline
app = Flask(__name__)
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")


# Endpoint for generating summary and extracting insights from text
@app.route('/genai', methods=['POST'])
def genai():
    text = request.json['text']
    # Generate summary using the transformer pipeline
    summary = summarizer(text, max_length=130, min_length=30, do_sample=False)[0]['summary_text']
    # Dummy insights extraction (replace with real logic as needed)
    insights = {"total_amount": "Extracted value", "due_date": "Extracted value"}
    return jsonify({'summary': summary, 'insights': insights})


# Run the Flask app on port 5002
if __name__ == '__main__':
    app.run(port=5002)
