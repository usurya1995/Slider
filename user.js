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
        var array = ["1", "2", "3", "4", "5", "6"];

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.addEventListener("change", ViewChange);
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
        var array = ["1", "2", "3", "4", "5", "6"];

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.addEventListener("change", ViewChange1);
        selectList.setAttribute("id", "mySelect1");
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

            cell = row.insertCell(-1);
            cell.innerHTML = Object.values(val);
        });

        table.appendChild(tableBody);

        var tbl = document.getElementById("yourdivid");
        tbl.innerHTML = "";
        tbl.appendChild(table);
    });

    function ViewChange(evt) {
        var $selectText = $("#mySelect option:selected").text().toLowerCase();
        console.log("---" + $selectText);
        var $val = evt.target.value;

        var tableBody = document.getElementsByTagName("tbody")[0];
        $("#testTable").find("tr:gt(0)").remove();

        $.getJSON('user.json', function (datas) {
            for (i = 0; i < parseInt($selectText); i++) {
                console.log(datas.data.repo[i]);
                var row = tableBody.insertRow(-1);
                var cell = row.insertCell(-1);
                cell.innerHTML = Object.keys(datas.data.repo[i]);

                cell = row.insertCell(-1);
                cell.innerHTML = Object.values(datas.data.repo[i]);
            }

        });
    }

    function ViewChange1(evt) {
        var $selectText = $("#mySelect1 option:selected").text().toLowerCase();
        console.log("---" + $selectText);
        var $val = evt.target.value;

        var tableBody = document.getElementsByTagName("tbody")[0];
        $("#testTable").find("tr:gt(0)").remove();

        $.getJSON('user.json', function (datas) {
            for (i = 0; i < parseInt($selectText); i++) {
                console.log(datas.data.repo[i]);
                var row = tableBody.insertRow(-1);
                var cell = row.insertCell(-1);
                cell.innerHTML = Object.keys(datas.data.repo[i]);

                cell = row.insertCell(-1);
                cell.innerHTML = Object.values(datas.data.repo[i]);
            }

        });
    }
});
