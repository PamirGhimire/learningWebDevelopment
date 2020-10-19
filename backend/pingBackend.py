import requests

urlForMakingPostRequest = 'http://localhost:3000/newMessage'
responseToPostRequest = requests.post(urlForMakingPostRequest, json={"userId": 123, "newMessage": "hello world"})

# classes predicted by the ML model being served through the REST API
print(responseToPostRequest.json())