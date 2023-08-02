
function Pattern(){
    const size=parseInt(document.getElementById("size").value);
    let Output='';

    for (let i=1; i <=size; i++) {
        let row ='' ;
        for (let j =1; j<=i; j++) {
         row+="*";
     }
     Output+=row+"<br>";
         }
        
    document.getElementById('Output').innerHTML=
    Output;

}