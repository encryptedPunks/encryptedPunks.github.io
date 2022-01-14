const section = document.querySelector("section");
closeBtn = section.querySelectorAll("#close");
fetchedData = undefined;
dataFile = '/JSON/data.json'
$.getJSON(dataFile, function (data) {
    fetchedData = data;

});
// function click() {
//     section.classList.add("show");
// }
const section1 = document.querySelector("section1");
closeBtn1 = section.querySelectorAll("#close1");
$(document).ready(function () {
    $("a").click(function (event) {
        if($(this).attr("id") == "top")
        {
            //do nothing
        }
        else
        {
            if($(this).attr("id") == "bottom")
            {
                console.log("EP");
                section1.classList.add("show");
                var dom = document.getElementById("newImage1");
                dom.width = "100";
                dom.height = "100";
                dom.src = "assets/img2/" + $(this).attr("title") +".png";
                element = fetchedData[parseInt($(this).attr("title"))];
                dom = document.getElementById("punkName");
                dom.innerHTML = "EncryptedPunk #" + $(this).attr("title");
                document.getElementById('type1').innerHTML = "Type : " + element.type;
                //Title
                document.getElementById('gender1').innerHTML = "Gender : " + element.gender;
                //Title
                document.getElementById('skin1').innerHTML = "Skin : " + element.skin;
                //Title
                document.getElementById('count1').innerHTML = "Count : " + element.count;
        
                var lists =  element['accessories'];
                array = lists.split("/");
                var ulist = document.getElementById('accessories1');
                for(var i=0;i<array.length;i++)
                {
                    var li = document.createElement('li');
                    li.innerHTML = array[i];
                    ulist.appendChild(li);
                }
            }
            else
            {
                section.classList.add("show");
                var dom = document.getElementById("newImage");
                dom.width = "100";
                dom.height = "100";
                dom.src = "assets/img2/" + $(this).attr("title") +".png";
                element = fetchedData[parseInt($(this).attr("title"))];
                dom = document.getElementById("punkName");
                dom.innerHTML = "EncryptedPunk #" + $(this).attr("title");
                document.getElementById('type').innerHTML = "Type : " + element.type;
                //Title
                document.getElementById('gender').innerHTML = "Gender : " + element.gender;
                //Title
                document.getElementById('skin').innerHTML = "Skin : " + element.skin;
                //Title
                document.getElementById('count').innerHTML = "Count : " + element.count;
        
                var lists =  element['accessories'];
                array = lists.split("/");
                var ulist = document.getElementById('accessories');
                for(var i=0;i<array.length;i++)
                {
                    var li = document.createElement('li');
                    li.innerHTML = array[i];
                    ulist.appendChild(li);
                }
            }

        }

    });
});
closeBtn.forEach(cBtn => {
    cBtn.addEventListener("click", () => {
        section.classList.remove("show");
        var ulist = document.getElementById('accessories');
        
        while(ulist.hasChildNodes())
        {
            ulist.removeChild(ulist.firstChild)
        }
    });
});