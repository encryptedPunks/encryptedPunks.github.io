/* <hr class="my-4" />
<div class="container">
    <div class="row">
        <h2>About EncryptedPunks</h2>
    </div>
    <div class="row">
        <div class="col-6">
            <p>Bhang Bhosda karna hai humko , kaam nahi karna hai humko - paisa aana chaiye 1000000$</p>
        </div>
        <div class="col-6">
            <img src="assets/img/A.jpg" height="580" width="580">
        </div>
    </div>

</div>
<hr class="my-4" /> */

dataFile = '/JSON/data.json'

fetchedData = undefined;
document.getElementById("details").style.display = "none";
document.getElementById('search').focus();
document.getElementById("byPunk").style.display = "block";
document.getElementById("byRank").style.display = "none";
$.getJSON(dataFile, function(data) {
    fetchedData = data;

});

function checkBox() {
    const cb = document.querySelector('#checkBox1');
    starting = cb.checked;
    if (!starting) {
        document.getElementById("byPunk").style.display = "block";
        document.getElementById("byRank").style.display = "none";
    } else {
        document.getElementById("byPunk").style.display = "none";
        document.getElementById("byRank").style.display = "block";
    }

}

function findValue(param) {
    if (param > 9546 || param < 0) {
        document.getElementById('search').value = undefined;
        document.getElementById('search').focus();
    } else {
        data = fetchedData[param];
        var heading = document.getElementById('encNumber');
        heading.innerHTML = "EncryptedPunk " + "#" + String(param);
        //Title
        document.getElementById('type').innerHTML = "Type : " + data.type;
        //Title
        document.getElementById('gender').innerHTML = "Gender : " + data.gender;
        //Title
        document.getElementById('skin').innerHTML = "Skin : " + data.skin;
        //Title
        document.getElementById('count').innerHTML = "Count : " + data.count;
        //Title
        //document.getElementById('prevAcc').innerHTML = "Accessories : ";
        document.getElementById('rank').innerHTML = "" + data.Rank;
        var ulist = document.getElementById('accessories');
        var lists = data['accessories'];
        array = lists.split("/");
        while (ulist.hasChildNodes()) {
            ulist.removeChild(ulist.firstChild)
        }
        for (var i = 0; i < array.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = array[i];
            ulist.appendChild(li);
        }

        document.getElementById('imageHolder').src = "assets/img2/" + String(param) + ".png";
        document.getElementById("details").style.display = "block";
    }
}

function findValue1(param) {
    if (param > 9546 || param < 0) {
        document.getElementById('search1').value = undefined;
        document.getElementById('search1').focus();
    } else {
        for (var i = 0; i < fetchedData.length; i++) {
            if (fetchedData[i].Rank == param) {
                data = fetchedData[i];
                break;
            }
        }
        var heading = document.getElementById('encNumber');
        heading.innerHTML = "EncryptedPunk " + "#" + String(data.id);
        //Title
        document.getElementById('type').innerHTML = "Type : " + data.type;
        //Title
        document.getElementById('gender').innerHTML = "Gender : " + data.gender;
        //Title
        document.getElementById('skin').innerHTML = "Skin : " + data.skin;
        //Title
        document.getElementById('count').innerHTML = "Count : " + data.count;
        //Title
        //document.getElementById('prevAcc').innerHTML = "Accessories : ";
        document.getElementById('rank').innerHTML = "" + data.Rank;
        var ulist = document.getElementById('accessories');
        var lists = data['accessories'];
        array = lists.split("/");
        while (ulist.hasChildNodes()) {
            ulist.removeChild(ulist.firstChild)
        }
        for (var i = 0; i < array.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = array[i];
            ulist.appendChild(li);
        }

        document.getElementById('imageHolder').src = "assets/img2/" + String(data.id) + ".png";
        document.getElementById("details").style.display = "block";
    }
}