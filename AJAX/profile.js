$(document).ready(function(){ 

$.ajax({
    type: "GET",
    url: "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow",
    success: function(data)
    {
        console.log(data);
		
			var table = document.createElement("table");
			var tableHead = document.createElement("thead");
			table.appendChild(tableHead);
			table.setAttribute('class','table table-striped table-bordered example');
			table.setAttribute('id','testTable');
			var row = tableHead.insertRow(-1);
			
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = "User ID";
			row.appendChild(headerCell);
	 
			headerCell = document.createElement("TH");
			headerCell.innerHTML = "Name";
			row.appendChild(headerCell);
	 
			headerCell = document.createElement("TH");
			headerCell.innerHTML = "Profile Image";
			row.appendChild(headerCell);
			
			headerCell = document.createElement("TH");
			headerCell.innerHTML = "Profile Link";
			row.appendChild(headerCell);
			
			headerCell = document.createElement("TH");
			headerCell.innerHTML = "Tags";
			row.appendChild(headerCell);
			
			headerCell = document.createElement("TH");
			headerCell.innerHTML = "View Count";
			row.appendChild(headerCell);
		
			headerCell = document.createElement("TH");
			headerCell.innerHTML = "User Type";
			row.appendChild(headerCell);
	 
			var tableBody = document.createElement("tbody");

			$.each(data.items, function(i, val) {
			   
			    var row = tableBody.insertRow(-1);
				var cell = row.insertCell(-1);
				cell.innerHTML = val.owner.user_id;
	 
				cell = row.insertCell(-1);
				cell.innerHTML = val.owner.display_name;
				
				cell = row.insertCell(-1);
				cell.innerHTML = '<img src = "' + val.owner.profile_image + '" alt="img"/>';
				
				cell = row.insertCell(-1);
				cell.innerHTML = val.owner.link;
				
				cell = row.insertCell(-1);
				cell.innerHTML = val.tags;
				
				cell = row.insertCell(-1);
				cell.innerHTML = val.view_count;
				
				cell = row.insertCell(-1);
				cell.innerHTML = val.owner.user_type;		
			});
			
			table.appendChild(tableBody);
			
			var tbl = document.getElementById("yourdivid");
			tbl.innerHTML = "";
			tbl.appendChild(table);	
            
			
    }
});

});