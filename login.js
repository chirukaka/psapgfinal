$(function () {
    $('.log_check').on('click', function () {
        
        var reg = $("#email").val();
        var pass = $("#pasw").val();
        //alert(reg);
        //alert(pass);
       
        
            var upper = reg.toUpperCase();
        var string = upper.replace(/[^a-zA-Z0-9]/g, '');
        var regNO = string.trim();
          /*  alert(string);*/
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/login.aspx/FindRecord",
                data: '{"Reg":"' + regNO + '", "Pass":"' + pass + '"}',
                dataType: "json",
                success: function (result) {
                    /*alert(result.d);*/
                    if (result.d == "success") {

                        
                        setCookie('regNO', regNO, 10);
                        if(regNO!='PSAPGMASTER')
                            window.location.href = "iframe.aspx";
                        else
                            window.location.href = "admin.aspx";
                        clearall();
                    }
                    else {
                        document.getElementById('message').style.color = 'red';
                        document.getElementById('message').innerHTML = result.d;
                        $("#message").css("display", "inline");
                        /* alert
                         * ("Check ID and Password");*/
                    }
                },
                error: function () {
                   /* alert('Failed to receive the Data');*/
                    console.log('Failed ');
                    document.getElementById('message').style.color = 'red';
                    document.getElementById('message').innerHTML ="Failed to Login Check your Credentials";
                    $("#message").css("display", "inline");
                }
            });
        
        
    });
});

//******clar fields after success START **************
function clearall() {
    $("#email").val('');
    $("#pasw").val('');
    $("#forgetemail").val('');
}
//******clar fields after success END **************


//**************Hide & show forget password section START ***************
function hideandshow() {
    
    var x = document.getElementById("hidediv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    var y = document.getElementById("part1");
    if (y.style.display === "flex") {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }
}

//**************Hide & show forget password section END ***************



/*****************FORGET PASSWORD START *****************************/

$(function () {
    $('.forgetpassw').on('click', function () {

        var reg = $("#forgetemail").val();
        
        //alert(reg);
        //alert(pass);
        ///*var regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';*/

        var upper = reg.toLowerCase();
        /*var string = upper.replace(/[^a-zA-Z0-9]/g, '');*/
        let result = upper.trim();
       /* alert(string);*/
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/login.aspx/RecoverRecord",
            data: '{"Mail":"' + result + '"}',
            dataType: "json",
            success: function (result) {
                /*alert(result.d);*/
                if (result.d == "Successfully Send") {
                    window.location.href = "login.aspx";
                    clearall();
                }
                else {
                    document.getElementById('forgetpassw').style.color = 'red';
                    document.getElementById('forgetpassw').innerHTML = 'Invalid Email';
                    $("#forgetpassw").css("display", "inline");
                    /* alert("Check ID and Password");*/
                }
            },
            error: function () {
                /* alert('Failed to receive the Data');*/
                console.log('Failed ');
            }
        });


    });
});
/*****************FORGET PASSWORD END *****************************/

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}