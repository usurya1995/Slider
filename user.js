$(document).ready(function () {

    $.getJSON('user.json', function (datas) {

        var table = document.createElement("table");
        var tableHead = document.createElement("thead");
        table.appendChild(tableHead);
        table.setAttribute('class', 'table table-striped table-bordered example');
        table.setAttribute('id', 'testTable');
        var row = tableHead.insertRow(-1);

        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "User";
    
        //Create array of options to be added
        var array = ["All", "1", "2", "3", "4", "5", "6"];

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.addEventListener("change",ViewChange);
        selectList.setAttribute("id", "mySelect");
        headerCell.appendChild(selectList);

        //Create and append the options
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[i]);
            option.text = array[i];
            selectList.appendChild(option);
        }
        row.appendChild(headerCell);

        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Projects";

         //Create array of options to be added
         var array = ["All", "1", "2", "3", "4", "5", "6"];

         //Create and append select list
         var selectList = document.createElement("select");
         selectList.setAttribute("id", "mySelect");
         headerCell.appendChild(selectList);
 
         //Create and append the options
         for (var i = 0; i < array.length; i++) {
             var option = document.createElement("option");
             option.setAttribute("value", array[i]);
             option.text = array[i];
             selectList.appendChild(option);
         }
        row.appendChild(headerCell);

        var tableBody = document.createElement("tbody");


        $.each(datas.data.repo, function (i, val) {

            var row = tableBody.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = Object.keys(val);
            console.log(cell);

            cell = row.insertCell(-1);
            cell.innerHTML = Object.values(val);
            console.log(cell);
        });

        table.appendChild(tableBody);

        var tbl = document.getElementById("yourdivid");
        tbl.innerHTML = "";
        tbl.appendChild(table);
    });

    function ViewChange(evt) {
        var $selectText = $("#mySelect option:selected" ).text().toLowerCase();
        console.log("---"+$selectText);
        var $val = evt.target.value;
    
        if ($selectText != 'all') {
            $('tr').each(function () {
                if ($(this).find('td').length) {
                    var txt = '';
                    if ($val < 6)
                        txt = $(this).find('td:eq(1)').text().toLowerCase();
                    else
                        txt = $(this).find('td:eq(3)').text().toLowerCase();
    
                    if (txt === $selectText) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                }
            })
        }
        else {
            $('tr').show();
        }
    
    }


});