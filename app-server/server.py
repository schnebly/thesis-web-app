from flask import Flask, request, jsonify
import time
import pickle

import entropy

app = Flask(__name__)


@app.route('/test', methods=['GET'])
def test():
    return {"time" : time.time()}

@app.route('/api/entropy', methods=['POST'])
def entropySummary():

    # open pickles for the entropy dict and vocab list
    pickle_in_1 = open('./assets/entropy_dict.pickle',"rb")
    entropyDict = pickle.load(pickle_in_1)

    pickle_in_2 = open("./assets/vocab.pickle","rb")
    vocab = pickle.load(pickle_in_2)

    inputText = request.get_json()['inputText']

    summary, sentenceScores, sentList, cleanedSents = entropy.summarize(inputText, entropyDict, vocab)

    return jsonify(summary)
    

if __name__ == '__main__':
    app.run()