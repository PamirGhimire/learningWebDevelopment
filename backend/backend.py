import sys
from flask import Flask, request, jsonify, json
from flask_cors import CORS

maxChatHistoryLength=10
maxChatHistoryCharLength = 900
chatHistory = []

# create a Flask CORS application
app = Flask(__name__)
CORS(app)

@app.route('/chatHistory', methods=['GET'])
def SendChatHistory():
    chatHistoryStr = ""
    for msg in reversed(chatHistory):
        chatHistoryStr = "<br><br>" + str(msg) + chatHistoryStr
        if (len(chatHistoryStr) >= maxChatHistoryCharLength):
            break
    return jsonify(chatHistory = chatHistoryStr)

# create predict url and only allow post requests.
@app.route('/newMessage', methods=['POST'])
def ReceiveNewMessage():
    data = request.get_json()
    userId = data["userId"]
    newMessage = data["newMessage"]

    chatHistory.append(str(userId) + " : " + str(newMessage))
    if (len(chatHistory) > maxChatHistoryLength):
        chatHistory.pop(0)

    # return jsonify("registered new message from user " + str(userId))
    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

if __name__ == '__main__':
    app.run(port=3000, debug=True)
