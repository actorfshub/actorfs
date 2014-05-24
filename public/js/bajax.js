/*
Version 2 beta / bajax.berlios.de

Copyright (c) 2006, Tiago Bastos da Silva
All rights reserved.
Redistribution sand use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    * Neither the name of the <ORGANIZATION> nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Thanks for:
Esdras Beleza http://esdrasbeleza.com
Fabricio Nogueira Magri  
*/
var bajax = {
	bajax_debug_mode : false,//Debug flag
	bajax_request_type : "GET", //GET or POST
	uri : "std.php", // :-P PHP!!
	output :null,
	A :  null,
	/*document.getElementById('blah') sucks*/
	e : function(id){
		return document.getElementById(id);
	},	
	/*	Change request type	*/
	changeRequestType: function(type){
		if (type=='GET' || type=='POST')
			this.bajax_request_type = type;
		else this.debug('Request type error');		
	},
	
	/*	Debug method	*/
	debug: function (text) {
		if (this.bajax_debug_mode)
			alert("DEBUG: " + text)
	},
	/*	Create XMLHttpRequest object*/
	init: function () {
		this.debug("bajax_init_object() called..")
		if (this.A == null) {
			try {
				this.A=new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					this.A=new ActiveXObject("Microsoft.XMLHTTP");
				} catch (oc) {
					this.A=null;
				}
			}
			if(!this.A && typeof XMLHttpRequest != "undefined")
				this.A = new XMLHttpRequest();
			if (!this.A)
				this.debug("Could not create connection object.");
			return this.A;
		} else {
			return this.A;	
		}
	},
	
	/* Simulate include function */
	include: function(id,url){
		uri = url;
		this.uri = url;
		A = this.init();
		A.open(this.bajax_request_type,url,true);
		A.onreadystatechange=function() {
			if (A.readyState==4){
				if(A.status == 200) {  
					retorno=unescape( A.responseText );
					bajax.e(id).innerHTML = retorno;
				} else this.debug('ERROR');
			}
		}
		A.send(null);	
	},
	/*	make a call, like execute but whithout 2 argument	*/
	call: function(page , func_js, dargs) {
		this.execute(page ,'BAJAX_CALL', func_js ,dargs)
	},
	
	/*	Make a call to execute the function (not used anymore)	*/
	execute: function (page ,func_name, func_js, dargs) {
		var i, n;
		var A;
		var post_data;
		uri  = page;
		this.uri = page;
		bajax_request_type = this.bajax_request_type;
	
		if (bajax_request_type == "GET") {
			if (uri.indexOf("?") == -1) 
				uri = uri + "?rname=" + escape(func_name);
			else
				uri = uri + "&rname=" + escape(func_name);
			for (akey in dargs){ 
				if( typeof( dargs[akey] ) == "string" ) {
					uri = uri + "&"+akey+"=" + escape(dargs[akey]);
				}
			}	
			uri = uri + "&rtime=" + escape(new Date().getTime());
			post_data = null;
		} else {
			post_data = "rname=" + escape(func_name);
			for (akey in args){ 
				if( typeof( dargs[akey] ) == "string" ) 
					post_data  = post_data + "&"+akey+"=" + escape(dargs[akey]);
			}					
		}
		
		A = this.init();
		try {
			A.open(bajax_request_type, uri, true);	
		} catch (e){
			alert(e);
		}
		if (bajax_request_type == "POST") {
			A.setRequestHeader("Method", "POST " + uri + " HTTP/1.1");
			A.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		}
		A.onreadystatechange = function() {
			if (A.readyState != 4) 
				return;
			bajax.debug("received " + A.responseText);
			var data;
			data = A.responseText;
			func_js(data);
		}
		A.send(post_data);
		delete(A);
		this.debug(func_name + " uri = " + uri + "/post = " + post_data);
		this.debug(func_name + " waiting..");
		//delete A;
	},
	/*	Aliases for document.getElementById(id).innerHTML	*/
	insertHTML : function(id,content){
		this.e(id).innerHTML = content;
	},
	getHTML : function(id){
		return this.e(id).innerHTML;
	}
}
/* Some coffee */
var bajaxUtil = {
	/*	Decode e encode: 
   http://www.phpbrasil.com/articles/article.php/pagerRow/3/id/1182 
   by Fabr�io Nogueira Magri	
  */
	 urlEncode : function(str) { 
		hex_chars = "0123456789ABCDEF"; 
		noEncode = /^([a-zA-Z0-9\_\-\.])$/; 
		n= "";
		strCode= "";
		hex1= "";
		hex2= "";
		strEncode = ""; 
	
		for(n = 0; n < str.length; n++) { 
			if (noEncode.test(str.charAt(n))) { 
				strEncode += str.charAt(n); 
			} else { 
				strCode = str.charCodeAt(n); 
				hex1 = hex_chars.charAt(Math.floor(strCode / 16)); 
				hex2 = hex_chars.charAt(strCode % 16); 
				strEncode += "%" + (hex1 + hex2); 
			} 
		}
		return strEncode; 
	}, 
	urlDecode : function(str) { 
		n= "";
		strCode= "";
		strDecode = ""; 
		
		for (n = 0; n < str.length; n++) { 
			if (str.charAt(n) == "%") { 
				strCode = str.charAt(n + 1) + str.charAt(n + 2); 
				strDecode += String.fromCharCode(parseInt(strCode, 16)); 
				n += 2; 
			} else { 
				strDecode += str.charAt(n); 
			} 
		} 
		return strDecode; 
	}, 	
	trim : function (str){
		return str.replace(/^\s*|\s*$/g,"")
	}
}