var form;
var json;
function addform(){
	
	form = prompt("Enter Form Name");

	document.getElementById("heading").innerHTML=form;
	document.getElementById("form-create").style.display = "none";
	document.getElementById("formdiv").style.display = "block";
	document.getElementById("right").innerHTML= "<form  class=\"myform\" id=\" "+form+"\" action=\"\" name=\""+form+"\"  ><input type=\"submit\" /></form>";

}
function addtext(){
		var textName = prompt("Enter Text label");
    if (textName == null) {
        // no element with given id has been found
        return;
    }
	
    var value = prompt("Enter max characters length");
	var min=  prompt("Enter min characters length");
	
    
		$(".myform").append(textName+"<input type=\"text\" name=\" "+textName+"\" id=\"" + textName+"\" maxlength=\"" + value+"\"/>");	
}

function addpassword(){
		var labelName = prompt("Enter your Password label");
		var value = prompt("Enter max characters length");
		
		var label='';
		
		$(".myform").append("Password <input type=\"password\" name=\" "+labelName+"\" id=\"" + labelName+"\" maxlength=\"" + value+"\"/>");	
}
function addtextarea(){
		var labelName = prompt("Enter name");
		var col=prompt("Enter columns");
		var row=prompt("Enter rows");
		$(".myform").append(labelName+"<textarea name=\"textarea\" cols=\""+col+"\" rows=\""+row+"\">"+labelName+"</textarea>");	
		}

function addnumber(){
		var labelName = prompt("Enter name");
		var min =prompt("Enter minimum number");
		var max = prompt ("Enter maximum number");
		$(".myform").append(labelName+"<input type=\"number\" name=\" "+labelName+"\" id=\"" + labelName+"\" min=\"" +min+"\" max=\"" + max+"\"/>");	
}


function addradio(){
	    var labelName = prompt("Enter option name");
	    var num=prompt("Enter number of radio buttons to be added");
		x=parseInt(num);
	
		for (i=1; i<=x; i++){
			n=prompt("Enter radio button "+i);
			 $(".myform").append("<input type=\"radio\" name=\" "+n+"\" id=\"" + n+"\" value=\"" + labelName+"\"/>"+labelName);   
		}			
}

function addcheck(){
		var labelName = prompt("Enter option name");
		$(".myform").append("<input type=\"checkbox\" name=\" "+labelName+"\" id=\"" + labelName+"\" />"+labelName);	
}

function addselect(){
		var name = prompt("Enter name of drop down");
		$(".myform").append("<select id=\"drop\" name=\" "+name+"\">");
		var num=prompt("Enter number of options");
		x=parseInt(num);
	    var n=0;
		for (i=1; i<=x; i++){
			n=prompt("Enter Option "+i);
			 $("#drop").append("<option value=\" "+n+"\">"+n+"</option>" );   
		}
		list();
	
}
function list(){
	 $(".myform").append("</select>" );   
}
function addfile(){
		var labelName = prompt("Enter File id");
		$(".myform").append("<input type=\"file\" name=\" "+labelName+"\" id=\"" + labelName+"\" />");	
}
function addkeygen(){
	var labelName = prompt("Enter keygen label");
		$(".myform").append("<keygen  name=\" "+labelName+"\" id=\"" + labelName+"\" />");	
	
}
function adddatalist(){
			var name = prompt("Enter name of data list");
		$(".myform").append("<input list=\""+name+"\">");
		$(".myform").append("<datalist id=\"datalist\">");
		
		var num=prompt("Enter number of options");
		x=parseInt(num);
	
		for (i=1; i<=x; i++){
			n=prompt("Enter Option "+i);
			 $("#datalist").append("<option value=\" "+n+"\"></option>" );   
		}
		$(".myform").append("</datalist>" );
	
}

 function addjsondata(){
		function getAttrs(DOMelement) {
    var obj = {};
    $.each(DOMelement.attributes, function () {
        if (this.specified) {
            obj[this.name] = this.value;
        }
    });
    return obj;
}

$("form").each(function () {
    var json = {
        "form": []
    };
    $(this).find("input").each(function () {
        json.form.push(getAttrs(this));
    });

    $(this).find("select").each(function () {
        var select = getAttrs(this);
        select["type"] = "select";
        var options = [];
        $(this).children().each(function () {
            options.push(getAttrs(this));
        });
        select["options"] = options;
        json.form.push(select);
    });
	var myString = JSON.stringify(json);
	localStorage.setItem('myJson',myString);
	alert("Data has been sent to Local Storage");
	
	getJsonData();
});
}


//QUIZ addition
function getJsonData(){
	var myJSON = localStorage.getItem('myJson');
	alert(myJSON);
	var parsedJSON = JSON.parse(myJSON);
	document.getElementById("fields").innerHTML="<form class=\"dynamicForm\" name="+parsedJSON.form[0]+"action=\"#\">"
	+"<input type = \"submit\" value = \"submit\"/></form>";
}