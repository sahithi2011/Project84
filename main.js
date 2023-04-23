

name_of_item = [];

function show()
{
    var item = document.getElementById("name1").value;
    var item2 = "#" ;
    item = item2.concat(item);
    name_of_item.push(item);
    console.log(name_of_item);
    document.getElementById("display_name").innerHTML= name_of_item;
    document.getElementById("display_name").innerHTML =   name_of_item.join("<br>");
}



function clear()
{
    var item = document.getElementById("name1").value;
    name_of_item.pop(item);
    console.log(name_of_item);
    document.getElementById("display_name").innerHTML= name_of_item;
    document.getElementById("display_name").innerHTML =   name_of_item.join("<br>");
}
