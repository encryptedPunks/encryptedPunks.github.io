
// dataFile = '/JSON/data.json'

// $.getJSON(dataFile,function(data){
//     for(var i=0;i<data.length;i++)
//     {
//         console.log(data[i]);
//         break;
//     }
    
// });
    noOfDistinct = 5
    titleValue = ['Attribute','#','Available','Picture'];
    encTypes = [
        {'Attribute':'Human',
        'No':'5',
        'Available':'5',
        'Picture':'assets/img/A.jpg'},
        {'Attribute':'Human',
        'No':'5',
        'Available':'5',
        'Picture':'assets/img/A.jpg'},
        {'Attribute':'Human',
        'No':'5',
        'Available':'5',
        'Picture':'assets/img/A.jpg'},
        {'Attribute':'Human',
        'No':'5',
        'Available':'5',
        'Picture':'assets/img/A.jpg'},
        {'Attribute':'Human',
        'No':'5',
        'Available':'5',
        'Picture':'assets/img/A.jpg'},
    ]
    var table = document.createElement('div');
    
    table.classList.add("container");
    var row = document.createElement('div');
    row.id = "rowID";
    row.classList.add('row');
    var heading = document.createElement('h2');
    heading.innerHTML  = "EncryptedPunk Types";
    row.appendChild(heading);
    table.appendChild(row);
    var hr = document.createElement('hr');
    hr.classList.add('my-4');
    table.appendChild(hr);
    //Now adding the header and then this code will be redundant 
    var title = document.createElement('div');
    title.classList.add('row');
    
    for(var i=0;i<4;i++)
    {
        var col3 = document.createElement('div');
        col3.classList.add('col-3');
        col3.innerHTML  = titleValue[i];
        title.appendChild(col3);
    }
    table.appendChild(title);
    
    for(var i =0;i<noOfDistinct;i++)
    {
        var hr = document.createElement('hr');
    hr.classList.add('my-4');
        table.appendChild(hr);
        var tr = document.createElement('div');
        tr.classList.add('row');
        
        for(var j=0;j<titleValue.length;j++)
        {
            var newDiv = document.createElement('div');
            newDiv.classList.add('col-3');
            if(titleValue[j] == '#')
            {
                newDiv.innerHTML  = encTypes[i].No
            }
            else{
                if(titleValue[j] == 'Picture')
                {
                    var imgTag = document.createElement('img');
                    imgTag.src = encTypes[i].Picture;
                    imgTag.height = "48";
                    imgTag.width = "48";
                    newDiv.appendChild(imgTag);
                }
                else
                {
                    newDiv.innerHTML  = encTypes[i][titleValue[j]]
                }
            }
            tr.appendChild(newDiv);
            
        }
        table.appendChild(tr);
    }

    var main = document.getElementById('table1');
    main.appendChild(table); // Drew the main table node on the document

    // for (var i = 0; i<3; i++) { 
    //     var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
    //     table.appendChild(tr); // Append to <table> node

    //     for (var j = 0; j<3; j++) {
    //         var tdElement = document.createElement('td');
    //         tdElement.innerHTML = array[i][j];
    //         tr.appendChild(tdElement); // Take string from placeholder variable and append it to <tr> node
    //     }
    // }
