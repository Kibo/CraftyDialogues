/*
 * Don´t like it?
 * use jQuery, Prototype, raw XMLHttpRequest, your favorite JS library for it.
 * 
 * @see Dialogues builder tool (http://kibo.github.com/dialoguesBuilder/)
 */
var DIALOGUES_DATA_SOURCE = {
		"actors": [
		   		{
		   			"id": 10,
		   			"name": "Ogre"
		   		},
		   		{
		   			"id": 20,
		   			"name": "Player"
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
		   			"dialogueText": "Hi player.",
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
		   			"dialogueText": "Hello.",
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
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "",
		   			"dialogueText": "Ask me anything you want",
		   			"conditionsString": "!this.getDialogue().passThrough",
		   			"codeBefore": "",
		   			"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				40
		   			]
		   		},
		   		{
		   			"id": 40,
		   			"parent": 30,
		   			"isChoice": true,
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": [
		   				50,
		   				60,
		   				70
		   			]
		   		},
		   		{
		   			"id": 50,
		   			"parent": 40,
		   			"isChoice": false,
		   			"actor": 20,
		   			"conversant": 10,
		   			"menuText": "Ask about Crafty.",
		   			"dialogueText": "What is Crafty?",
		   			"conditionsString": "!this.getDialogue().passThrough",
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
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "",
		   			"dialogueText": "Crafty is cool Java Script game engine.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": [
		   				40
		   			]
		   		},
		   		{
		   			"id": 60,
		   			"parent": 40,
		   			"isChoice": false,
		   			"actor": 20,
		   			"conversant": 10,
		   			"menuText": "Ask about render technology of Crafty.",
		   			"dialogueText": "What technology is used to render?",
		   			"conditionsString": "!this.getDialogue().passThrough",
		   			"codeBefore": "",
		   			"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				61
		   			]
		   		},
		   		{
		   			"id": 61,
		   			"parent": 60,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "",
		   			"dialogueText": "DOM or Canvas",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": [
		   				40
		   			]
		   		},
		   		{
		   			"id": 70,
		   			"parent": 40,
		   			"isChoice": false,
		   			"actor": 20,
		   			"conversant": 10,
		   			"menuText": "Leave",
		   			"dialogueText": "Good bye.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": []
		   		}
		   	]
};