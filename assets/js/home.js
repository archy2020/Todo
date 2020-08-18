// to add new habbit;
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
// to cose the entry pop up form  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// day of completion counter function
function clickCounter() {
    
    var count = 0;
    var list = document.getElementsByClassName("mySelect");
     for (var i = 0; i < list.length; i++) {
        var x = list[i].value;
        if(x == "Completed"){       
            count = count +1;
        }
      document.getElementById("result").innerHTML = "Total number of completion days:" + count +"/7";
  }
}

//document.getElementById("seeResult").innerHTML = "completed days:" ;