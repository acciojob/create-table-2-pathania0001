	function createTable() {
		let numberRows = prompt("Input number of rows");
       let numberCols = prompt("Input number of rows");
		if(!numberCols || !numberRows)
			alert("both row and cols are should be there")
     const table = document.getElementById("myTable");	
	const body = document.createElement("tbody");
   for(let i=0;i<numberRows;i++)
	{   
		const row = document.createElement("tr");
		for(let j=0;j<numberCols;j++){
		const col = document.createElement("td");
			col.innerHTML=`${i} ${j}`
		row.appendChild(col);
	    }
	    body.appendChild(row);
	}
	table.appendChild(body);
}

