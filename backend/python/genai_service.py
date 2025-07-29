from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route('/genai', methods=['POST'])
def genai():
    text = request.json['text']
    summary = summarizer(text, max_length=130, min_length=30, do_sample=False)[0]['summary_text']
    # Dummy insights extraction
    insights = {"total_amount": "Extracted value", "due_date": "Extracted value"}
    return jsonify({'summary': summary, 'insights': insights})

if __name__ == '__main__':
    app.run(port=5002)
