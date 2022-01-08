
// dataFile = '/JSON/data.json'

// $.getJSON(dataFile,function(data){
//     for(var i=0;i<data.length;i++)
//     {
//         console.log(data[i]);
//         break;
//     }
    
// });
    noOfDistinct = 6
    titleValue = ['Attribute','#','Available','Picture','More Example'];
    encTypes = [
        {'Attribute':'Alien',
        'No':'9',
        'Available':'',
        'Picture':'assets/img2/A.jpg',
        'More Example':''},
        {'Attribute':'Ape',
        'No':'24',
        'Available':'',
        'Picture':'assets/img2/A.jpg',
        'More Example':''},
        {'Attribute':'Zombie',
        'No':'88',
        'Available':'',
        'Picture':'assets/img2/A.jpg',
        'More Example':''},
        {'Attribute':'Female',
        'No':'3840',
        'Available':'',
        'Picture':'assets/img2/A.jpg',
        'More Example':''},
        {'Attribute':'Male',
        'No':'6039',
        'Available':'',
        'Picture':'assets/img2/A.jpg',
        'More Example':''},
    ]
    var table = document.createElement('div');
    
    table.classList.add("container");
    // var row = document.createElement('div');
    // row.id = "rowID";
    // row.classList.add('row');
    // var heading = document.createElement('h2');
    // heading.innerHTML  = "EncryptedPunk Types";
    // row.appendChild(heading);
    // table.appendChild(row);
    // var hr = document.createElement('hr');
    // hr.classList.add('my-4');
    // table.appendChild(hr);
    //Now adding the header and then this code will be redundant 
    var title = document.createElement('div');
    title.classList.add('row');
    
    for(var i=0;i<5;i++)
    {
        if(i==4)
        {
            var col3 = document.createElement('div');
            col3.classList.add('col-4');
            col3.innerHTML  = titleValue[i];
            title.appendChild(col3);
        }
        else
        {
            var col3 = document.createElement('div');
            col3.classList.add('col-2');
            col3.innerHTML  = titleValue[i];
            title.appendChild(col3);           
        }

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
            if(titleValue == 4)
            {
                newDiv.classList.add('col-4');
            }
            else
            {
                newDiv.classList.add('col-2');
            }

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
                else if(titleValue[j] == 'More Example')
                {

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

    function designTable(example)
    {
        var table = document.createAttribute('table');
        var tr = document.createAttribute('tr');
        var td = document.createAttribute('td');
        array = example.split("/");
        for(var i =0; i< array.length; i++)
        {
            var img = document.createAttribute('img');
            // imgTag.src = encTypes[i].Picture;
            imgTag.height = "48";
            imgTag.width = "48"; 
        }
        tr.appendChild(td);
        table.appendChild(tr);
    }
    // for (var i = 0; i<3; i++) { 
    //     var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
    //     table.appendChild(tr); // Append to <table> node

    //     for (var j = 0; j<3; j++) {
    //         var tdElement = document.createElement('td');
    //         tdElement.innerHTML = array[i][j];
    //         tr.appendChild(tdElement); // Take string from placeholder variable and append it to <tr> node
    //     }
    // }
