var DIALOGUESBUILDER_DATA = {
		"actors": [
		   		{
		   			"id": 10,
		   			"name": "Ogre"
		   		},
		   		{
		   			"id": 20,
		   			"name": "Head1"
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
		   			"dialogueText": "Where is the cave?",
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
		   			"dialogueText": "Outside the village.",
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
		   				50
		   			]
		   		},
		   		{
		   			"id": 40,
		   			"parent": 30,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "Ask about cave.",
		   			"dialogueText": "What do you know about the cave?",
		   			"conditionsString": "!this.getDialogue().passThrough",
					"codeBefore": "",
					"codeAfter": "this.getDialogue().passThrough=true",
		   			"outgoingLinks": [
		   				41
		   			]
		   		},
		   		{
		   			"id": 50,
		   			"parent": 30,
		   			"isChoice": false,
		   			"actor": 10,
		   			"conversant": 20,
		   			"menuText": "Leave",
		   			"dialogueText": "Good by.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": []
		   		},
		   		{
		   			"id": 41,
		   			"parent": 40,
		   			"isChoice": false,
		   			"actor": 20,
		   			"conversant": 10,
		   			"menuText": "",
		   			"dialogueText": "People is losing there.",
		   			"conditionsString": "",
		   			"codeBefore": "",
		   			"codeAfter": "",
		   			"outgoingLinks": [
		   				30
		   			]
		   		}
		   	]
};
