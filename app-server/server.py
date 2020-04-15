from flask import Flask
import time

app = Flask(__name__)


@app.route('/test', methods=['GET'])
def test():
    return {"time" : time.time()}

if __name__ == '__main__':
    app.run()