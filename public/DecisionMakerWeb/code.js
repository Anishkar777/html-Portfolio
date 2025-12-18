let myList=[];
function Add(){
    let input=document.getElementById("choices").value;
    if(input != ""){
        myList.push(input);
        document.getElementById("choices").value="";
        
    }
    display()
}
function display(){
    let options=document.getElementById("options");
    options.innerHTML = "<h3>Items:</h3>";
    myList.forEach((item, index) => {
        options.innerHTML+= index+1 + ":" + item + "<br>";

        
    });
}
function Choice(){
    let randdd=Math.floor(Math.random() * myList.length);
    if(myList[randdd]==="Suicide"|| myList[randdd]==="Kill myself"|| myList[randdd]==="suicide"||myList[randdd]==="kill myself"||myList[randdd]==="die"||myList[randdd]==="Die"){
            document.getElementById("display").innerHTML="Live for yourself";

    }
    else{
    document.getElementById("display").innerHTML="Choose "+myList[randdd];
    }

}
function Reset(){
    myList=[];
    options.innerHTML="";
    document.getElementById("display").innerHTML="";
}



