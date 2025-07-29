
# Flask service for NLP tasks: summarization (HuggingFace & OpenAI GPT)
from flask import Flask, request, jsonify
from transformers import pipeline
import openai
import os


# Initialize Flask app
app = Flask(__name__)


# HuggingFace summarizer pipeline
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")


# OpenAI GPT (real call)
openai.api_key = os.getenv('OPENAI_API_KEY')


# Helper function to get summary from OpenAI GPT
def gpt_summary(text):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "Summarize the following document."},
                  {"role": "user", "content": text}]
    )
    return response.choices[0].message['content']


# Endpoint for generating summary and extracting insights from text
@app.route('/genai', methods=['POST'])
def genai():
    text = request.json['text']
    # Use HuggingFace for summary
    summary = summarizer(text, max_length=130, min_length=30, do_sample=False)[0]['summary_text']
    # Use OpenAI for advanced summary (optional)
    # summary = gpt_summary(text)
    # Dummy insights extraction (replace with real logic as needed)
    insights = {"total_amount": "Extracted value", "due_date": "Extracted value"}
    return jsonify({'summary': summary, 'insights': insights})


# Run the Flask app on port 5002
if __name__ == '__main__':
    app.run(port=5002)
