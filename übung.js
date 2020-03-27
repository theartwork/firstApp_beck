function replace(){
    var txtOriginal = document.getElementById("txtOriginal").value;
    var txtSearch = document.getElementById("txtSearch").value;
    var txtReplace = document.getElementById("txtReplace").value;
    
    var text = txtOriginal.replace(txtSearch, txtReplace);
    document.getElementById("txtResult").value=text;
}

function trim(){
    var txtOriginal = document.getElementById("txtOriginal").value.trim();
    var txtSearch = document.getElementById("txtSearch").value.trim();
    var txtReplace = document.getElementById("txtReplace").value.trim();
    
    var text = txtOriginal + txtSearch + txtReplace;
    document.getElementById("txtResult").value=text;
}