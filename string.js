function generate(){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz1234567890"; 
    var lenString = document.getElementById("t1").value;  
    var randomstring = '';   

    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length); 
        randomstring += characters.substring(rnum, rnum+1);  
    }   
    document.getElementById("p1").innerHTML = randomstring;  
    }

    


    