
# Flask service for OCR (Optical Character Recognition) using pytesseract
from flask import Flask, request, jsonify
import pytesseract
from PIL import Image


# Initialize Flask app
app = Flask(__name__)


# Endpoint for extracting text from an image file path
@app.route('/ocr', methods=['POST'])
def ocr():
    path = request.json['path']
    # Use pytesseract to extract text from the image
    text = pytesseract.image_to_string(Image.open(path))
    return jsonify({'text': text})


# Run the Flask app on port 5001
if __name__ == '__main__':
    app.run(port=5001)
