rowsEL=document.getElementById("rows");
columnsEL=document.getElementById("columns");
btnEl=document.getElementById("btn");

btnEl.addEventListener('click',tableCreate);


function tableCreate(){
    let table=document.createElement("table");
    let body=document.body;
    
    for(var i=0;i<Number(rowsEL.value);i++){
        let tr=document.createElement("tr");
        table.appendChild(tr);
        for(var j=0;j<+columnsEL.value;j++){
            let td=document.createElement("td");
            let txt=document.createTextNode("item txt");
            
            td.appendChild(txt);
            tr.appendChild(td);
            
        }
        
    }
    body.appendChild(table);

}
tableCreate();