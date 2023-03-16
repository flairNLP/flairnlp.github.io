"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:7,description:"Relation extraction (RE) in Flair"},o="Relation extraction",l={unversionedId:"tutorial-other-models/relation-extraction",id:"tutorial-other-models/relation-extraction",title:"Relation extraction",description:"Relation extraction (RE) in Flair",source:"@site/docs/tutorial-other-models/relation-extraction.md",sourceDirName:"tutorial-other-models",slug:"/tutorial-other-models/relation-extraction",permalink:"/docs/tutorial-other-models/relation-extraction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-other-models/relation-extraction.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Relation extraction (RE) in Flair"},sidebar:"tutorialSidebar",previous:{title:"Tutorial 1+: Other models",permalink:"/docs/category/tutorial-1-other-models"},next:{title:"Other crazy models in Flair",permalink:"/docs/tutorial-other-models/other-models"}},s={},c=[{value:"Tagging Relations",id:"tagging-relations",level:2},{value:"Understanding and Accessing Annotations (important!)",id:"understanding-and-accessing-annotations-important",level:2},{value:"Tagging a Whole Text Corpus",id:"tagging-a-whole-text-corpus",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relation-extraction"},"Relation extraction"),(0,a.kt)("p",null,"Let's get started!"),(0,a.kt)("h2",{id:"tagging-relations"},"Tagging Relations"),(0,a.kt)("p",null,'Relations hold between two entities. For instance, a text like "George was born in Washington"\nnames two entities and also expresses that there is a born_in relationship between\nboth.'),(0,a.kt)("p",null,"We added an experimental relation extraction model trained over a modified version of TACRED.\nYou must use this model together with an entity tagger. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flair.data import Sentence\nfrom flair.nn import Classifier\n\n# 1. make example sentence\nsentence = Sentence(\"George was born in Washington\")\n\n# 2. load entity tagger and predict entities\ntagger = Classifier.load('ner-fast')\ntagger.predict(sentence)\n\n# check which named entities have been found in the sentence\nentities = sentence.get_labels('ner')\nfor entity in entities:\n    print(entity)\n\n# 3. load relation extractor\nextractor = Classifier.load('relations')\n\n# predict relations\nextractor.predict(sentence)\n\n# check which relations have been found\nrelations = sentence.get_labels('relation')\nfor relation in relations:\n    print(relation)\n\n# Use the `get_labels()` method with parameter 'relation' to iterate over all relation predictions. \nfor label in sentence.get_labels('relation'):\n    print(label)\n")),(0,a.kt)("p",null,"This should print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'Span[0:1]: "George" \u2192 PER (0.9971)\nSpan[4:5]: "Washington" \u2192 LOC (0.9847)\n\nRelation[0:1][4:5]: "George -> Washington" \u2192 born_in (1.0)\n')),(0,a.kt)("p",null,"Indicating that a ",(0,a.kt)("strong",{parentName:"p"},"born_in"),' relationship holds between "George" and "Washington"!'),(0,a.kt)("h2",{id:"understanding-and-accessing-annotations-important"},"Understanding and Accessing Annotations (important!)"),(0,a.kt)("p",null,"As the example above shows, you can access each prediction individually using the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_labels()")," method.\nHowever, you should pass either 'ner' to get the NER labels, or 'relation' to get the relation labels."),(0,a.kt)("p",null,"If you want to iterate over the relations and directly access the predicted label or the score,\ndo the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Use the `get_labels()` method with parameter 'relation' to iterate over all relation predictions. \nfor label in sentence.get_labels('relation'):\n    print(label)\n    # print label value and score\n    print(f'label.value is: \"{label.value}\"')\n    print(f'label.score is: \"{label.score}\"')\n    print(f'subject of the relation is: \"{label.data_point.first}\"')\n    print(f'object of the relation is: \"{label.data_point.second}\"')\n")),(0,a.kt)("p",null,"Since there is only one prediction, this should print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'Relation[0:1][4:5]: "George -> Washington" \u2192 born_in (1.0)\n\nlabel.value is: "born_in"\nlabel.score is: "0.9999638795852661"\n\nsubject of the relation is: "Span[0:1]: "George" \u2192 PER (0.9971)"\nobject of the relation is: "Span[4:5]: "Washington" \u2192 LOC (0.9847)"\n')),(0,a.kt)("h2",{id:"tagging-a-whole-text-corpus"},"Tagging a Whole Text Corpus"),(0,a.kt)("p",null,"Often, you may want to tag an entire text corpus. In this case, you need to split the corpus into sentences and pass a\nlist of ",(0,a.kt)("inlineCode",{parentName:"p"},"Sentence")," objects to the ",(0,a.kt)("inlineCode",{parentName:"p"},".predict()")," method."),(0,a.kt)("p",null,"For instance, you can use the sentence splitter of segtok to split your text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from flair.nn import Classifier\nfrom flair.splitter import SegtokSentenceSplitter\n\n# example text with many sentences\ntext = \"Dirk was born in Essen. But Dirk now lives in Gelsenkirchen.\"\n\n# initialize sentence splitter\nsplitter = SegtokSentenceSplitter()\n\n# use splitter to split text into list of sentences\nsentences = splitter.split(text)\n\n# predict tags for sentences\nentity_tagger = Classifier.load('ner')\nrelation_extractor = Classifier.load('relations')\n\nentity_tagger.predict(sentences)\nrelation_extractor.predict(sentences)\n\n# iterate through sentences and print predicted relation labels\nfor sentence in sentences:\n    print(sentence.get_labels(\"relation\"))\n")),(0,a.kt)("p",null,"This should print: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"['Relation[0:1][4:5]: \"Dirk -> Essen\"'/'born_in' (1.0)]\n['Relation[1:2][5:6]: \"Dirk -> Gelsenkirchen\"'/'lived_in' (0.9997)]\n")),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mini_batch_size")," parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},".predict()")," method, you can set the size of mini batches passed to the\ntagger. Depending on your resources, you might want to play around with this parameter to optimize speed."))}u.isMDXComponent=!0}}]);