---
slug: flair-0.12
title: Announcing Flair 0.12
authors: alan
tags: [release, flair]
---

Flair version 0.12 is finally released, with tons of new features, enhancements and bug fixes. With this post, we give an overview of some cool new features.

<!--truncate-->

## New Feature: Simplified Tagging

We now offer a unified way of loading all Flair models and accessing all Flair predictions. That means that users no longer need to know the underlying model class to get Flair predictions.

We illustrate the new simplicity with two examples: one for predicting named entities, and one for predicting sentiment. You'll see the code is now **basically identical** for both:

**Example 1: Tagging Named Entities**

Let's run **named entity recognition** (NER) over an example sentence. All you need to do is make a `Sentence`, load a pre-trained model and use it to predict tags for the sentence:

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

```coffeescript
Sentence: "I love Berlin ." → ["Berlin"/LOC]
```

This means that "Berlin" was tagged as a **location entity** in this sentence.

**Example 2: Tagging Sentiment**

Let's run **sentiment analysis** over the same example sentence to determine whether it is POSITIVE or NEGATIVE. Same code as above, just a different model:

```python
from flair.data import Sentence
from flair.nn import Classifier

# make a sentence
sentence = Sentence('I love Berlin .')

# load the sentiment tagger
tagger = Classifier.load('sentiment')

# run sentiment analysis over sentence
tagger.predict(sentence)

# print the sentence with all annotations
print(sentence)
```

This should print:

```console
Sentence[4]: "I love Berlin ." → POSITIVE (0.9983)
```

This means that the sentence "I love Berlin" was tagged as having **POSITIVE** sentiment.

**As you can see, the two examples are basically the same code.** The only difference is the model you loaded ("ner" vs "sentiment")!

## New Tagger: Entity Linking

As of Flair 0.12 we ship an **experimental entity linker** trained on the [Zelda dataset](https://github.com/flairNLP/zelda). The linker not only tags entities, but also attempts to link each entity to the corresponding Wikipedia URL if one exists.

To illustrate, let's use the example sentence "Kirk and Spock met on the Enterprise." The code is the same as above, just load the **linker** model:

```python
from flair.nn import Classifier
from flair.data import Sentence

# load the model
tagger = Classifier.load('linker')

# make a sentence
sentence = Sentence('Kirk and Spock met on the Enterprise.')

# predict entity links
tagger.predict(sentence)

# iterate over predicted entities and print
for label in sentence.get_labels():
    print(label)
```

This should print:

```coffeescript
Span[0:1]: "Kirk" → James_T._Kirk (0.9969)
Span[2:3]: "Spock" → Spock (0.9971)
Span[6:7]: "Enterprise" → USS_Enterprise_(NCC-1701-D) (0.975)
```

As we can see, the linker can resolve that:

* "Kirk" refers to the entity "[James\_T.\_Kirk](https://en.wikipedia.org/wiki/James_T._Kirk)"
    
* "Spock" refers to "[Spock](https://en.wikipedia.org/wiki/Spock)" *(ok, that one was easy)*
    
* "Enterprise" refers to the "[USS\_Enterprise\_(NCC-1701-D)](https://en.wikipedia.org/wiki/USS_Enterprise_(NCC-1701-D))"
    

Not bad, eh? However, that last prediction is not quite correct as fans of Star Trek will know. Entity linking is a hard task and we are working to improve the accuracy of our model.

## New Language: Support for Ukrainian

This version adds support for Ukrainian taggers, embeddings and datasets. For instance, to do named entity tagging of a Ukrainian sentence, do:

```python
from flair.nn import Classifier
from flair.data import Sentence

# load the Ukrainian NER model
tagger = Classifier.load('ner-ukrainian')

# make a sentence
sentence = Sentence('Я люблю Берлін.')

# predict entity links
tagger.predict(sentence)

# print sentence with predictions
print(sentence)
```

This should print:

```coffeescript
Sentence[4]: "Я люблю Берлін." → ["Берлін"/LOC]
```

This means that "Берлін" was tagged as a **location entity** in this sentence.

## Other New Features

There are a host of new features in this release, but discussing them all would be too much for this post. Important new features include:

* Support for multitask learning in Flair
    
* Major internal refactorings for easier code maintenance
    
* Updated tutorials and better documentation
    
* Improved accuracy in our FLERT models
    

We will look at these and other features in separate posts in more detail! **Stay tuned!**
