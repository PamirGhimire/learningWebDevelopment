import sys
from flask import Flask, request, jsonify


# create a Flask application
app = Flask(__name__)

# create predict url and only allow post requests.
@app.route('/newMessage', methods=['POST'])
def predict():
    data = request.get_json()
    userId = data["userId"]
    newMessage = data["newMessage"]

    print("\nuser " + str(userId) + ": " + newMessage) #debug log, comment in production
    return jsonify("registered new message from user " + str(userId))

if __name__ == '__main__':
    app.run(port=3000, debug=True)