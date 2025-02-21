console.log("Tutorial 13");
console.log("In this tutoruial we will learn about what is Document Object Model(DOM)");
//Document object model is a logical tree which has document, html tags and and ends on leaf nodes. A leaf node is usually a text node or a symbol. DOM is used to map entire HTML as a document t.
document.title = "Document Object Model";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "purple";
document.body.parentElement
    < html lang = "en" >

        document.body.parentElement.childNodes
NodeList(3)[head, #text, body
]

document.body.childNodes
NodeList(9)[#text, div.cont, #text, script, #text, < !--Code injected by live - server-- >, #text, script, #text
 ]

document.body.childNodes[1]
    < div class="cont" >

        document.body.childNodes[1].childElementCount
5
document.body.childNodes[1].childNodes
NodeList(11)[#text, div.box, #text, div.box, #text, div.box, #text, div.box, #text, div.box
    , … ]
document.body.childNodes[1].parentElement.style.color = "yellow";
"yellow"
document.head
    < head >

    document.head.parentNode
    < html lang = "en" >

        document.head.parentElement
        < html lang = "en" >

            document.head.childNodes
NodeList(9)[#text, meta, #text, meta, #text, title, #text, style, #text
]

debugger eval code: 1: 1
document.head.childNodes[2]
#text "\n    "

document.head.childNodes[2].nextElementSibling
    < meta name = "viewport" content = "width=device-width, initial-scale=1.0" >

        document.head.childNodes[2].nextElementParent
undefined
document.head.childNodes[2].previousElementSibling
    < meta charset = "UTF-8" >
    document.head.children
HTMLCollection { 0: meta, 1: meta, 2: title, 3: style
, length: 4, … }

document.head.children[2]
<title>
