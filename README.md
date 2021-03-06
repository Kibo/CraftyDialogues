# Dialogues v0.6

[The Crafty](http://craftyjs.com/) component that adds an entity a ability to carry conversation. As data source it uses JSON file. For building data source structure you can use prepared [Dialogues builder tool](http://kibo.github.com/dialoguesBuilder/).

###Type of dialogues:
- Linear
- Linear interrupted
- Linear dialogue with questions
- Branched dialogue with different results
- Fake branched dialogue with the same end
- Procedural dialogue
- Combined dialogue

###Advantage:
- no depending on the third party library
- [documented code](https://github.com/Kibo/CraftyDialogues/blob/master/WebContent/dialogues.js)
- [tested code](https://github.com/Kibo/CraftyDialogues/blob/master/WebContent/test/tests.html)

###Usage:
Set source data to entity.
```
Crafty.e("2D, DOM, Dialogues").setDialogues( DIALOGUES_DATA_SOURCE );   
```

Make sure that there is a container for dialogs. Default container for views is #chat, but you can change it.
```
<div id="chat"></div>
```

Show dialogue
```
Crafty.e("2D, DOM, Dialogues").showDialogue();   
```

At the end of conversation you can catch a **ConversationIsOver** event.
```
Crafty.e("2D, DOM, Dialogues")
.bind("ConversationIsOver", function(){          	        	
	this.endOfConversation();
}); 
```

**Helper method**

Close the conversation
```
Crafty.e("2D, DOM, Dialogues").endOfConversation();   
```

Clear chat container
```
Crafty.e("2D, DOM, Dialogues").emptyChatContainer();   
```

Get actual dialogue
```
Crafty.e("2D, DOM, Dialogues").getDialogue();   
```

Find dialogue by id
```
Crafty.e("2D, DOM, Dialogues").findDialogueById(id);   
```

Root of dialogues
```
Crafty.e("2D, DOM, Dialogues").getRoot();   
```

Get actor
```
Crafty.e("2D, DOM, Dialogues").getActor( id );   
```

###How it work

Dialogue as data
```
{
	"id": 41,
	"parent": 40,
	"isChoice": false,
	"actor": 20,
	"conversant": 10,
	"menuText": "",
	"dialogueText": "Over the gate is hell.",
	"conditionsString": "",
	"codeBefore": "",
	"codeAfter": "",
	"outgoingLinks": [
		42
	]
}
```

#### Order of execution of code
1. codeBefore
2. conditionsString
3. codeAfter

#### Scope of code

Execute code on the current dialogue
```
"codeAfter": "this.getDialogue().passThrough=true",
```

Evaluate the condition on the current dialogue
```
"conditionsString": "this.getDialogue().passThrough==true",
```

Execute code on "this" scope of the entity with Dialogues component
```
"codeBefore": "this.experience = 1000",
```

Execute code on an remote entity
```
"codeBefore": "Crafty("RemoteEntityName").isReady = true",
```

Evaluate the condition on an remote entity
```
"conditionsString": "Crafty("RemoteEntityName").isReady == true",
```

#### Chat container

For appearance of chat container use CSS. There are helper class.

**Sentence**

Note the class. You will need it. "Ogre" is the actor name from your source JSON file.
This create class name with actor name.
```
<div id="chat">
	<p class="dialogue Ogre" data-outgoinglink="20">I do not know you. What is your name?</p>
</div>
```

**Choice**
```
<div id="chat">
	<ul>
		<li data-outgoinglink="40">Ask at the entrance.</li>
		<li data-outgoinglink="60">Leave</li>
	</ul>
</div>
```

###Work procedure:
1) Use [Dialogues builder tool](http://kibo.github.com/dialoguesBuilder/) to create conversation tree.
[![Dialogues builder tool](https://raw.github.com/Kibo/CraftyDialogues/master/WebContent/img/dialoguesTree.png)](http://kibo.github.com/dialoguesBuilder/)

2) Export your conversation as JSON ([example](https://github.com/Kibo/CraftyDialogues/blob/master/WebContent/examples/simple/js/dialoguesdatasource.js))

3) Use [Crafty.js](http://craftyjs.com/) for building your amazing HTML5 game based on conversation.
[![Simple conversation](https://raw.github.com/Kibo/CraftyDialogues/master/WebContent/img/conditionalExample.png)](http://kibo.github.com/CraftyDialogues/examples/conditional/index.html)


###Examples
- [Simple conversation](http://kibo.github.com/CraftyDialogues/examples/simple/index.html)
- [Conditional conversation](http://kibo.github.com/CraftyDialogues/examples/conditional/index.html)

###Documentation
- [Interactive dialogue for videogame - part 1](http://tomasjurman.blogspot.cz/2013/02/interactive-dialogue-for-html5-game.html)
- [Interactive dialogue for videogame - part 2](http://tomasjurman.blogspot.cz/2013/03/interactive-dialogue-for-html5-game.html)

###It may interest you to know
- [Tiled map builder module](https://github.com/Kibo/TiledMapBuilder) for [Crafty](http://craftyjs.com/) game engine

###Contact me
I will be grateful for constructive comments.

- [Crafty group thread](https://groups.google.com/d/msg/craftyjs/_gw_gTHC2HU/8eEx1PLa5uwJ)
- tomasjurman@gmail.com

