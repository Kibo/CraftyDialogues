/**@
* #Dialogues
* The Crafty component that adds an entity a ability to carry conversation. As data source it uses JSON file. For building source data structure you can use prepared Dialogues builder tool. 
*
* @see Dialogues builder tool ( http://kibo.github.com/dialoguesBuilder/ )
* @author Tomas Jurman (tomasjurman@gmail.com)
*/
Crafty.c("Dialogues", {	
		
		componentSetting:{
			CHAT_CONTAINER_ID:'chat',
			DIALOGUE_CLASS_NAME:'dialogue',
			DIALOGUE_DATA_ATTRIBUTE_NAME:'data-outgoinglink',
			FINAL_OUTGOING_LINK_TAG:'final',
			END_OF_CONVERSATION_EVENT_NAME: 'ConversationIsOver',	
			STATEMENT_ELEMENT:'p',
			CHOICE_ELEMENT_CONTAINER:'ul',
			CHOICE_ELEMENT:'li',			
			DEBUG_MODE: false,
		},
		_data:null,
		_dialogue:null,
		_chatContainer:null,
		init: function() {	 
			this._chatContainer = document.getElementById( this.componentSetting.CHAT_CONTAINER_ID);
		},	
	    
	    /**@
		 * #DialoguesBuilder.setDialogues
		 * Set source data.
		 * 
		 * @param {Object} data
		 * @throw {Error} Data is not valid.
		 * @return	{Object} this	
		 * 
		 * @see Dialogues Builder tool ( http://kibo.github.com/dialoguesBuilder/ )
		 */
	    setDialogues:function( data ){
	    	if( !this.isValid( data )){
	    		throw new Error("Data is not valid.");
	    	}
	    	
	    	this._data = data;				    	
	    	return this;
	    },
	    	    
	    /**@
		 * #DialoguesBuilder.getDialogues
		 * Get all dialogues.
		 * 	
		 * @return	{Object} dialogues		
		 */
	    getDialogues: function(){
	    	return this._data;
	    },
	    
	    /**@		 
		 * #DialoguesBuilder.setDialog	
		 * 
		 * @trigger ConversationIsOver - when the conversation is at the end
		 * @param {Integer} id		 		
		 */
	    setDialogue:function(id){
	    	
	    	if(this._dialogue){
	    		this.executeCode(this._dialogue.codeAfter);
	    	}
	    	
	    	if(id == this.componentSetting.FINAL_OUTGOING_LINK_TAG){
	    		Crafty.trigger(this.componentSetting.END_OF_CONVERSATION_EVENT_NAME); 
	    		this.endOfConversation();	    		
	    		return;
	    	}
	    		    	
	    	for(var idx = 0; idx < this._data.dialogues.length; idx++){
	    		if( this._data.dialogues[idx].id == id){	    				    				    	
	    			
	    			this._dialogue = this._data.dialogues[idx];	    				    				    	
	    			this.executeCode(this._dialogue.codeBefore);
	    				    			
	    			if( !this.isActive(this._dialogue)){    					    			
	    				this.setDialogue( this._dialogue.isChoice || this._dialogue.outgoingLinks[0] ? 
	    							this._dialogue.outgoingLinks[0] : 
	    							this.componentSetting.FINAL_OUTGOING_LINK_TAG );
	    					    				
	    			}
	    			
	    			return;
	    			break;
	    		}
	    	}
	    	
	    	this._dialogue = null;	    		   
	    },
	    	 	    	   	    	    
	    /**@
		 * #DialoguesBuilder.getDialogue 	
		 * 			
		 * @return {Object} dialogue or root of dialogues	
		 */
	    getDialogue:function(){	 	   	    	
	    	if(!this._dialogue){
	    		this.setDialogue( this.getRoot().id );
	    	}
	    		    	
	    	return this._dialogue; 	    		
	    },
	    
		/**@
		* #DialoguesBuilder.showDialogue 	
		* Show dialogue as HTML in your defined container. Default container is #chat.	
		* 
		* @example
		* ~~~
		* <div id="chat"></div>
		*
		*call: 
		*DialoguesBuilder.showDialogue()
		*
		*result:
		* <div id="chat">
		*	<p class="dialogue ACTOR_NAME">DIALOGUE_TEXT</p>
		* </div>	
		* ~~~
		*/
	    showDialogue:function(){
	    	this.emptyChatContainer();
	    	this._chatContainer.appendChild( this.getDialogue().isChoice ? 
	    			this.createChoiceElement( this.getDialogue()) : 
	    			this.createSentenceElement( this.getDialogue()));	      		    	    				 
	    },
	    
	    /**@
		 * #DialoguesBuilder.endOfConversation
	     * Leave resources after the end of the conversation
	     *  	
	     */
	    endOfConversation:function(){
	    	if(this._dialogue){
	    		this._dialogue = null;
    			this.emptyChatContainer();
	    	}
	    },
	    
	    /**@
		* #DialoguesBuilder.emptyChatContainer
		* 	
		* Remove all children from defined chat container.
		* Default container is #chat.		
		*/	
	    emptyChatContainer:function(){
	    	if(this._chatContainer){
	    		this._chatContainer.innerHTML = '';
	    	}
	    },
	    
	    /**@
		* #DialoguesBuilder.findDialogueById	
		* Find dialogue by id
		* 	
		* @param {Integer} id
		* @return {Object} dialogue or null if dialogue is not exists
		*/	
		findDialogueById: function(id){
			if(!id){
				return null;
			}
			
			for(var idx = 0; idx < this._data.dialogues.length; idx++){
				if( this._data.dialogues[idx].id == id){
					return this._data.dialogues[idx];
					break;
				}
			}
								
			return null;			
		},
	    	   							
	    /**@
		 * #DialoguesBuilder.getRoot
		 * Root is the node, that has not parent.
		 * 			
		 * @return	{Object} root 	
		 */
	    getRoot: function(){		    		   
	    	for(var idx = 0; idx < this._data.dialogues.length; idx++){
	    		if(!this._data.dialogues[idx].parent){
	    			return this._data.dialogues[idx];
	    			break;
	    		}
	    	}	    		    		   
	    },
	    
	    /**@
		 * #DialoguesBuilder.isFinal
		 * Determines whether the conversation is over.
		 * 
		 * @throw {Error} dialogue is null			
		 * @return	{Boolean}  	
		 */
	    isFinal: function(){
	    		    		    
	    	if(this._dialogue){
	    		return !(this._dialogue.outgoingLinks.length >= 1);
	    	}
	    	
	    	throw Error("Dialogue is null.");	    		    
	    },
	    
	    /**@
		 * #DialoguesBuilder.getActor		
		 * 			
		 * @param {Integer} id
		 * @return	{Object} actor or null
		 */
	    getActor:function(id){	
	    	if(!id){
	    		return null;
	    	}
	    		    	
	    	for(var idx = 0; idx < this._data.actors.length; idx++){
	    		if( this._data.actors[idx].id == id ){
	    			return this._data.actors[idx];
	    		}
	    	}		    
	   	  	return null;	
		},
								  
	    /*		
		 * Check the source data
		 * 
		 * @param {Object} data		 
		 * @return	{boolean}		
		 */
	    isValid:function( data ){
	    	var isValid = true;

	    	if( !data ||
	 			!data.dialogues ||
	 			data.dialogues.length == 0 ||
	 			!data.actors ||
	 			data.actors.length <= 1 ||	 			
	 			!this.hasRoot( data )	 			
	    		){
	 				isValid = false;
	 			}
	    	
			return isValid;
	    },	  
	    
	    /*
	     * Check if data has only the one root dialog
	     * 
	     * @param {Object} data
	     * @return {boolean}
	     */
	    hasRoot:function(data){
	    
	    	var roots = [];
	    	for(var idx = 0; idx < data.dialogues.length; idx++){
	    		if( !data.dialogues[idx].parent){
	    			roots.push( data.dialogues[idx] );
	    		}
	    	}
	    	
	    	return roots.length == 1 ? true : false;	    	
	    },	
	    
	    /*		
		* Create DOM Element for sentence
		* 
		* @example
		* ~~~			
		* <p>DIALOGUE_TEXT</p>		
		* ~~~
		* @param {Object} dialogue		
		* @return {Element} element
		* 
		* @see DOM element (http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614)	
		*/	
	    createSentenceElement:function( dialogue ){
			var self = this;	
			var paragraph = document.createElement(this.componentSetting.STATEMENT_ELEMENT);
			paragraph.setAttribute("class", this.componentSetting.DIALOGUE_CLASS_NAME + ' ' + this.getActor(dialogue.actor).name );	
			paragraph.setAttribute(this.componentSetting.DIALOGUE_DATA_ATTRIBUTE_NAME, dialogue.outgoingLinks[0] ? dialogue.outgoingLinks[0] : this.componentSetting.FINAL_OUTGOING_LINK_TAG );
			paragraph.appendChild( document.createTextNode( dialogue.dialogueText));																							
			paragraph.addEventListener('click', function(e){													
				var outgoingLink = e.target.getAttribute(self.componentSetting.DIALOGUE_DATA_ATTRIBUTE_NAME); 											
				self.setDialogue( outgoingLink );
				if(self._dialogue){
					self.showDialogue();
				}							
            } , false);	
			
			return paragraph;					
		},
		
		/*		
		* Create DOM Element for choice
		* 
		* @example
		* ~~~	
		* <ul>		
		* 	<li>MENU_TEXT</li>
		* 	<li>MENU_TEXT</li>	
		* 	<li>MENU_TEXT</li>
		* </ul>		
		* ~~~
		* 
		* @param {Object} dialogue
		* @return {Element} element
		* 
		* @see DOM element (http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-745549614)	
		*/	
		createChoiceElement:function( choice ){
			var self = this;	
			var list = document.createElement( this.componentSetting.CHOICE_ELEMENT_CONTAINER );
			for(var idx = 0; idx < choice.outgoingLinks.length; idx++ ){
											
				//User can call 'this.getDialogue()' in condition.
				//It uses 'this._dialogue' property.
				//That is way it temporarily change 'this._dialogue' property.
				this._dialogue = this.findDialogueById( choice.outgoingLinks[idx] );				
				if( !this.isActive(this._dialogue)){
					continue;
				}
				
				var item = document.createElement( this.componentSetting.CHOICE_ELEMENT );
				item.setAttribute(this.componentSetting.DIALOGUE_DATA_ATTRIBUTE_NAME, choice.outgoingLinks[idx]);
				item.appendChild( document.createTextNode( this._dialogue.menuText));
				
				item.addEventListener('click', function(e){
					var outgoingLink = e.target.getAttribute(self.componentSetting.DIALOGUE_DATA_ATTRIBUTE_NAME); 
					self.setDialogue( outgoingLink );
					self.showDialogue();
				});
				
				list.appendChild(item);
			}
			this._dialogue = choice;
			return list;
		},
					   
	    /*
		 * Evaluates conditionString property in dialogue.	
		 * 		
		 * @param {String} code	
		 * @return {Boolean} result	
		 */    
	    isActive:function( dialogue ){
	    	var result = true;
	    	if(dialogue.conditionsString){
	    		result = this.executeCode( dialogue.conditionsString );
	    	}
	    	
	    	return result;	  
	    },
	    
	    /* 
	     * Parse String and execute it as JavaScript code.
	     * Use JavaScript eval(string) function
	     * 
	     * @param {Object} context
	     * @param {String} code
	     * @return {Object} result
	     * 
	     * @see eval(string) (https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval)
	     */
	    executeCode:function( code ){	    	
	    	if(code){
	    		
	    		if(this.componentSetting.DEBUG_MODE){
	    			console.log("Execute code: " + code);
	    		}
	    			    		
	    		try {
    				return eval( code ); 
    			} catch (e) {
    			    if (e) {
    			        throw new Error("Syntax error on your code: " + code);
    			    }
    			}	 	    			    		   
	    	}
	    },	    	  
});