/*
 * Don´t like it?
 * use jQuery, Prototype, raw XMLHttpRequest, your favorite JS library for it.
 * 
 * @see Dialogues builder tool (http://kibo.github.com/dialoguesBuilder/)
 */
var DIALOGUES_DATA_SOURCE = {
	
	guardian:{
		"actors": [
			   		{
			   			"id": 10,
			   			"name": "Ogre"
			   		},
			   		{
			   			"id": 20,
			   			"name": "Guard"
			   		}
			   	],
			   	"dialogues": [
			   		{
			   			"id": 10,
			   			"parent": null,
			   			"isChoice": false,
			   			"actor": 10,
			   			"conversant": 20,
			   			"menuText": "",
			   			"dialogueText": "I do not know you. What is your name?",
			   			"conditionsString": "!this.getDialogue().passThrough",
			   			"codeBefore": "",
			   			"codeAfter": "this.getDialogue().passThrough=true",
			   			"outgoingLinks": [
			   				20
			   			]
			   		},
			   		{
			   			"id": 20,
			   			"parent": 10,
			   			"isChoice": false,
			   			"actor": 20,
			   			"conversant": 10,
			   			"menuText": "",
			   			"dialogueText": "Guardian.",
			   			"conditionsString": "!this.getDialogue().passThrough",
			   			"codeBefore": "",
			   			"codeAfter": "this.getDialogue().passThrough=true",
			   			"outgoingLinks": [
			   				30
			   			]
			   		},
			   		{
			   			"id": 30,
			   			"parent": 20,
			   			"isChoice": true,
			   			"outgoingLinks": [
			   				40,
			   				50,
			   				60
			   			]
			   		},
			   		{
			   			"id": 40,
			   			"parent": 30,
			   			"isChoice": false,
			   			"actor": 10,
			   			"conversant": 20,
			   			"menuText": "Ask at the entrance.",
			   			"dialogueText": "How do I get inside?",
			   			"conditionsString": "!Crafty(\"Ogre\").knowPassword",
			   			"codeBefore": "",
			   			"codeAfter": "",
			   			"outgoingLinks": [
			   				41
			   			]
			   		},		   		
			   		{
			   			"id": 41,
			   			"parent": 40,
			   			"isChoice": false,
			   			"actor": 20,
			   			"conversant": 10,
			   			"menuText": "",
			   			"dialogueText": "You have to know the password.",
			   			"conditionsString": "",
			   			"codeBefore": "",
			   			"codeAfter": "",
			   			"outgoingLinks": [
			   				30
			   			]
			   		},		   				   	
			   		{
			   			"id": 50,
			   			"parent": 30,
			   			"isChoice": false,
			   			"actor": 10,
			   			"conversant": 20,
			   			"menuText": "Say password",
			   			"dialogueText": "Crafty!",
			   			"conditionsString": "Crafty(\"Ogre\").knowPassword==true && !this.getDialogue().passThrough",
			   			"codeBefore": "",
			   			"codeAfter": "this.getDialogue().passThrough=true",
			   			"outgoingLinks": [51]
			   		},
			   		{
			   			"id": 51,
			   			"parent": 50,
			   			"isChoice": false,
			   			"actor": 20,
			   			"conversant": 10,
			   			"menuText": "",
			   			"dialogueText": "You are right. Crafty is cool.",
			   			"conditionsString": "",
			   			"codeBefore": "",
			   			"codeAfter": "Crafty(\"Fire\").destroy()",
			   			"outgoingLinks": [30]
			   		},
			   		{
			   			"id": 60,
			   			"parent": 30,
			   			"isChoice": false,
			   			"actor": 10,
			   			"conversant": 20,
			   			"menuText": "Leave",
			   			"dialogueText": "Good by.",
			   			"conditionsString": "",
			   			"codeBefore": "",
			   			"codeAfter": "Crafty(\"Ogre\").isGuardVisited=true",
			   			"outgoingLinks": []
			   		},
			   	]
	},
	
	ruin:{
		"actors": [
		   		{
		   			"id": 10,
		   			"name": "Ogre"
		   		},
		   		{
		   			"id": 20,
		   			"name": "Ruin"
		   		}
		   	],
		   	"dialogues": [
		   		{
		   			"id": 10,
		   			"parent": null,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "Ask about name.",
		   			"dialogueText": "What is your name?",
		   			"conditionsString": "!this.getDialogue().passThrough",
		   			"codeBefore": "",
		   			"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				20
		   			]
		   		},
		   		{
		   			"id": 20,
		   			"parent": 10,
		   			"isChoice": false,
		   			"actor": 20,
		   			"conversant": 10,
		   			"menuText": "",
		   			"dialogueText": "My name is Ruin.",
		   			"conditionsString": "!this.getDialogue().passThrough",
		   			"codeBefore": "",
		   			"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				30
		   			]
		   		},
		   		{
		   			"id": 30,
		   			"parent": 20,
		   			"isChoice": true,
		   			"outgoingLinks": [
		   				40,
		   				50,
		   				60
		   			]
		   		},
		   		{
		   			"id": 40,
		   			"parent": 30,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "Ask about Guard",
		   			"dialogueText": "Why Guard guarding the gate?",
		   			"conditionsString": "!this.getDialogue().passThrough",
		   			"codeBefore": "",
		   			"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				41
		   			]
		   		},
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
		   		},
		   		{
		   			"id": 42,
		   			"parent": 41,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "",
		   			"dialogueText": "Ou! It sounds scary.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": [
		   				30
		   			]
		   		},
		   		{
		   			"id": 50,
		   			"parent": 30,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "Ask about game framework.",
		   			"dialogueText": "What game framework do you use?",
		   			"conditionsString": "Crafty(\"Ogre\").isRuinVisited==true && !this.getDialogue().passThrough",
		   			"codeBefore": "",
		   			"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				51
		   			]
		   		},
		   		{
		   			"id": 51,
		   			"parent": 50,
		   			"isChoice": false,
		   			"actor": 20,
		   			"conversant": 10,
		   			"menuText": "",
		   			"dialogueText": "Crafty is beautiful, but Louise has little time for maintenance and expansion.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": [
		   				52
		   			]
		   		},
		   		{
		   			"id": 52,
		   			"parent": 51,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "",
		   			"dialogueText": "You are right. Louise does not write code, but he is chasing girls.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "Crafty(\"Ogre\").knowPassword=true",
		   			"outgoingLinks": [
		   				30
		   			]
		   		},
		   		{
		   			"id": 60,
		   			"parent": 30,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "Leave",
		   			"dialogueText": "Good by Ruin.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "Crafty(\"Ogre\").isRuinVisited=true",
		   			"outgoingLinks": []
		   		},
		   		
		   		
		   	]
	},
};
