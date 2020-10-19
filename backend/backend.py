import sys
from flask import Flask, request, jsonify, json
from flask_cors import CORS


# create a Flask CORS application
app = Flask(__name__)
CORS(app)

# create predict url and only allow post requests.
@app.route('/newMessage', methods=['POST'])
def predict():
    data = request.get_json()
    userId = data["userId"]
    newMessage = data["newMessage"]

    print("\nuser " + str(userId) + ": " + newMessage) #debug log, comment in production
    # return jsonify("registered new message from user " + str(userId))
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

if __name__ == '__main__':
    app.run(port=3000, debug=True)