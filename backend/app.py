from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client.medicationdb
medications_collection = db.medications

@app.route('/createmed', methods=['POST'])
def create_med():
    data = request.json
    medications_collection.insert_one(data)
    response = {
        'status': 'success',
        'data': data
    }
    return jsonify(response)

@app.route('/getexpdates', methods=['GET'])
def get_expdates():
    meds = medications_collection.find({}, {"name": 1, "expdate": 1, "_id": 0})
    meds_list = list(meds)
    return dumps(meds_list)

if __name__ == '__main__':
    app.run(port=6000)