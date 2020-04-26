
from nltk.tokenize import word_tokenize 
from nltk import tokenize
import string
import re
import os
from nltk.corpus import stopwords
import math

def cleanSubSectionHeaders(sents):

    for idx, sent in enumerate(sents):
        startIdx = sent.rfind('\n')
            
        if startIdx != -1:
            cleanSent = sent[startIdx + 1:]
            sents[idx] = cleanSent
            
    return sents

def loadtext(text):

    sents = tokenize.sent_tokenize(text)
    sents = sents[:-1]
    
    cleanSubSectionHeaders(sents)
    
    return sents

def preprocess(sents):

    # Get rid of subsection headers that end in '\n'
    stop_words = set(stopwords.words('english')) 
    punctuation = string.punctuation
    
    returnSents = []
    vocab = []
    vocabCountDict = {}
    
    for sent in sents:  
        word_tokens = word_tokenize(sent.lower())
        
        # Convert 'n't' -> 'not'
        word_tokens = [sub.replace('n\'t', 'not') for sub in word_tokens] 
      
        filtered_sentence = [w for w in word_tokens if (not w in stop_words and not w in punctuation and w != '\'s')] 
        
        for w in filtered_sentence:
            if len(w) > 2:
                if not w in vocab:
                    vocab.append(w)
                    vocabCountDict[w] = 1
                else:
                    vocabCountDict[w] += 1
        
        returnSents.append(filtered_sentence)
        
    # Clean up vocab to only contain words
    regex = re.compile(r'^[a-z]')
    cleanedVocab = list(filter(regex.search, vocab))
        
    return returnSents, cleanedVocab, vocabCountDict

def score_sent(entropyDict, sent, vocab):
    if len(sent) < 1:
        return 0
    denom = len(sent)
    num = 0
    
    for word in sent:
        if word in vocab:
            num += entropyDict[word]
            
    return (num / denom)

def createSummary(scores, sents):

    sumLength = 8

    summary = []

    for i in range(sumLength):
        idx = scores.index(max(scores))
        summary.append(sents[idx])
        scores[idx] = 0

    return summary

def summarize(text, entropyDict, vocab):

    sentList = loadtext(text)
    
    stop_words = set(stopwords.words('english')) 
    punctuation = string.punctuation
    
    sentenceScores = []
    cleanedSents = []
    
    for sent in sentList:  
        word_tokens = word_tokenize(sent.lower())
        
        # Convert 'n't' -> 'not'
        word_tokens = [sub.replace('n\'t', 'not') for sub in word_tokens] 
      
        filtered_sentence = [w for w in word_tokens if (not w in stop_words and not w in punctuation and w != '\'s')] 
        cleanedSents.append(filtered_sentence)
        
        sentenceScores.append(score_sent(entropyDict, filtered_sentence, vocab))
        
    summary = createSummary(sentenceScores, sentList)
    return summary, sentenceScores, sentList, cleanedSents