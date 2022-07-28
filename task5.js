//Add a new li element without the same class Name
//And try editing it with getelementsbyclassname 

let items=document.getElementsByClassName("list-new-item");
items[0].style.backgroundColor="green";
items[0].style.padding="15px";
items[0].style.padding="20px";

//And try editing it with getelementbytagname

var li=document.getElementsByTagName("li");
for (var i=0;i<li.length;i++){
    li[i].style.color="#a83238";
    li[i].style.fontWeight="bold";
    li[i].style.fontFamily="Robotic";
}

