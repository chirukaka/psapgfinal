
$(document).ready(function () {

   //if the cookie is empty then redirect to login form START//
    var r = document.cookie;
    try {
        if (r === " " || r.length === 0) {

            window.location.href = "login.aspx";
            throw new Error('Can not login');
        }
        //user-defined throw statement.  
    }
    catch (e) {
        document.write(e.message);
        window.location.href = "login.aspx";
    }

  //if the cookie is empty then redirect to login form END//


        var r = document.cookie;
        var s = r.split(";");
    var t = s[0].toString().replace("regNO=","")
        alert(t+"cookie");

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/editprofile.aspx/EditRecord",

            data: '{"Reg":"' + t + '"}',
            dataType: "json",
            
            success: OnSuccess,
            error: function () {
                alert('Failed to receive the Data');
                console.log('Failed ');
            }
        });
        
   
});

function OnSuccess(response) {

    var value1 = response.d;
    alert(value1);
    var str1 = value1;
    var arr = JSON.parse(str1);
    $.each(arr, function (i, item) {

        $('#name').val(item.FirstName);
        $('#father_name').val(item.LastName);
        $('#email').val(item.Email);
        $('#hotel').val(item.Hotel);
        $('#rno').val(item.RoomNo);
        $('#phoneno').val(item.IndianPhoneNo);
        $('#transport').val(item.Transport);
        $('#date').val(item.DOA);
        $('#time').val(item.TOA);
        $('#health').val(item.Health);

    });
}

/********************** SAVE EDITED RECORD *****************************/

$(".saverecord").click(function () {
    var r = document.cookie;
    var s = r.split(";");
    var t = s[0].toString().replace("regNO=", "")
    alert(t + "cookie");

    var fname = $('#name').val();
    var lname=$('#father_name').val();
    var mail=$('#email').val();
    var hotel=$('#hotel').val();
   var rno= $('#rno').val();
    var lphone = $('#phoneno').val();
    var transport = $('#transport').val();
    var date = $('#date').val();
    var time = $('#time').val();
    var health = $('#health').val();
    alert(time);
    alert(fname);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/editprofile.aspx/SaveRecord",

        data: '{"Reg":"' + t + '","fname":"' + fname + '","lname":"' + lname + '","email":"' + mail + '","hotel":"' + hotel + '","lphone":"' + lphone + '","room":"' + rno + '","transport":"' + transport + '","doa":"' + date + '","toa":"' + time + '","health":"' + health + '"}',
        dataType: "json",

        success: function () {
            alert("Successfully Stored");
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = "Data successfully stored";
            $("#message").css("display", "inline");
            cleardata();
            window.location.href = "iframe.aspx";},
        error: function () {
            alert('Failed to receive the Data');
            console.log('Failed ');
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML ="Data does not store";
            $("#message").css("display", "inline");
        }
    });
});

function cleardata() {
    $('#name').val('');
    $('#father_name').val('');
    $('#email').val('');
    $('#hotel').val('');
    $('#rno').val();
    $('#phoneno').val('');

}

//*******************cancel button*****************************
function redirect() {
    cleardata();
    window.location.href = "iframe.aspx";
}