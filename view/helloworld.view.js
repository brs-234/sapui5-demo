sap.ui.jsview("com.brs.demo.view.helloworld", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.brs.demo.view.helloworld
	*/ 
	getControllerName : function() {
		return "com.brs.demo.view.helloworld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.brs.demo.view.helloworld
	*/ 
	createContent : function(oController) {
	    oButton = new sap.m.Button({
	        id:'myButton',
	        text: 'Hello',
	        press:function(){
	            alert('test');
	        }
	    })
		return new sap.m.Page({
			title: "Title",
			content: [oButton
			]
		});
	}

});