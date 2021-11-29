var counter = 0;
function ajax() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            console.log(response);

            let toDoTable = document.querySelector(".toDoTable");

            for(let i=0; i<response.length; i++) {
                var row = toDoTable.insertRow();               
            
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();

                
                if (response[i].completed == true) {
                    cell1.innerHTML = '<input type="checkbox" checked onchange="checkOrUncheck(this);">';
                    row.classList.add("strikeThrough");
                }else {
                    cell1.innerHTML = '<input type="checkbox" onchange="checkOrUncheck(this);">';
                }
                    
                cell2.innerHTML = response[i].title;
                cell3.innerHTML =  '<i class="fa fa-trash" onclick="remove(this);"></i>';
            }


        }    
    }       
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}    

function remove(elem) {
    elem.parentNode.parentNode.parentNode.removeChild(elem.parentNode.parentNode);
}

function checkOrUncheck(elem) {
    if(elem.checked) {
        elem.parentNode.parentNode.classList.add("strikeThrough");
        counter++;
        if(counter == 5){
            alert("Congrats , You have successfully completed 5 tasks");
        }
    }
    else {
        elem.parentNode.parentNode.classList.remove("strikeThrough");
    }
    
}