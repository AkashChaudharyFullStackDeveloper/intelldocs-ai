from flask import Flask, request, jsonify
import pytesseract
from PIL import Image

app = Flask(__name__)

@app.route('/ocr', methods=['POST'])
def ocr():
    path = request.json['path']
    text = pytesseract.image_to_string(Image.open(path))
    return jsonify({'text': text})

if __name__ == '__main__':
    app.run(port=5001)
