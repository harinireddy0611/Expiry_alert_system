from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/getexpdates', methods=['GET'])
def get_exp_dates():
    meds = [
        {"name": "Med1", "expdate": "2023-07-10"}
    ]
    return jsonify(meds)

if __name__ == '__main__':
    app.run(port=6000)
