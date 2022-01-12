dataFile = '/JSON/table.json'

fetchedData = undefined;
document.getElementById("heading").style.display = "none";
$.getJSON(dataFile,function(data){
    fetchedData = data;
    var table = document.getElementById("attri");
    for(var i=0;i<fetchedData.length;i++)
    {
        var tr = document.createElement('tr');
        d1 = fetchedData[i];
        for(var j=0;j<4;j++)
        {
            var td = document.createElement('td');
            if(j==0)
            {
                td.innerHTML = d1.name;
            }
            else if(j==1)
            {
                td.innerHTML = d1.count;
            }
            else if(j==2)
            {
                data = d1.img;
                array = data.split(",");
                data = array[0];
                data = data.trim();
                var imgg = document.createElement('img');
                imgg.src = "assets/img2/"+data+".png";
                imgg.height = "48"
                imgg.width = "48";
                td.appendChild(imgg);
            }
            else
            {
                data = d1.img;
                array = data.split(",");
                for(k=0;k<array.length;k++)
                {
                    data = array[k];
                    data = data.trim();
                    var imgg = document.createElement('img');
                    imgg.src = "assets/img2/"+data+".png";
                    imgg.height = "48"
                    imgg.width = "48";
                    td.appendChild(imgg);
                }
            }
            tr.appendChild(td); 

        }
        table.appendChild(tr);

    }
    document.getElementById("heading").style.display = "block";
});

