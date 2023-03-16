---
sidebar_position: 1
---

# Quick Start

Let's discover **Flair in less than 5 minutes**.

### Requirements and Installation

In your favorite virtual environment, simply do:

```
pip install flair
```

Flair requires Python 3.7+. 

### Example 1: Tag Entities in Text

Let's run **named entity recognition** (NER) over an example sentence. All you need to do is make a `Sentence`, load
a pre-trained model and use it to predict tags for the sentence:

```python
from flair.data import Sentence
from flair.nn import Classifier

# make a sentence
sentence = Sentence('I love Berlin .')

# load the NER tagger
tagger = Classifier.load('ner')

# run NER over sentence
tagger.predict(sentence)

# print the sentence with all annotations
print(sentence)
```

This should print:

```console
Sentence: "I love Berlin ." → ["Berlin"/LOC]
```

This means that "Berlin" was tagged as a **location entity** in this sentence. 


### Example 2: Detect Sentiment 

Let's run **sentiment analysis** over an example sentence to determine whether it is POSITIVE or NEGATIVE.
Same code as above, just a different model: 

```python
from flair.data import Sentence
from flair.nn import Classifier

# make a sentence
sentence = Sentence('I love Berlin .')

# load the NER tagger
tagger = Classifier.load('sentiment')

# run NER over sentence
tagger.predict(sentence)

# print the sentence with all annotations
print(sentence)
```

This should print:

```console
Sentence[4]: "I love Berlin ." → POSITIVE (0.9983)
```

This means that the sentence "I love Berlin" was tagged as having **POSITIVE** sentiment. 


