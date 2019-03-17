var myStringArray = [];
var table = "";

function addWordAndSentence(){ 
	//get selected word
	var lyricsTextArea = document.getElementById('lyricsTextArea');
	var wordSelection = lyricsTextArea.value.substring(lyricsTextArea.selectionStart, lyricsTextArea.selectionEnd);
	
	//get current line
	var lines = lyricsTextArea.value.split('\n');
	var findLineNumber = lyricsTextArea.value.substring(0, lyricsTextArea.selectionStart).split("\n");
	var currentLineNumber = findLineNumber.length;
	var currentLine = lines[currentLineNumber-1];

	myStringArray.push(wordSelection, currentLine);
	clearSelection();
	outputTable();
}

function popArray(){
	myStringArray.pop();
	myStringArray.pop();
	outputTable();
}

function outputTable(){

	table = "";
    for (var i = 0; i < myStringArray.length; i++) {
    	if(i % 2 === 0){
    		table += "<tr><td>" + myStringArray[i] + "</td>";
    	}
    	else{
    		table += "<td>" + myStringArray[i] + "</td></tr>";
    	}
    }
    console.log(table)
    document.getElementById('wordList').innerHTML = table;
}

function clearSelection(){
	if (window.getSelection) {window.getSelection().removeAllRanges();}
	else if (document.selection) {document.selection.empty();}
}