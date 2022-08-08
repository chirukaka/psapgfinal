
function psaform() {
 
    if (emailcheck() === true && passcheck() === true && cpasscheck() === true && checkall() === true) {
        /* alert("it working3");*/
        var Reg = $('#regno').val();
        var Fname = $('#name').val();
        var Lname = $('#father_name').val();
        var mail = $('#email').val();
        /*  var DOB2 = $('#birth_date').val();*/
        /* var addr = $('#address').val();*/
        var val = $("input[type='radio']:checked").val();
        //var city2 = $('#city').val();
        //var state2 = $('#state').val();
        var a = $('#age').val();
        var passport2 = $('#passport').val();
        var country2 = $('#country').val();
        var psano = $('#psamembership').val();
        var pass = $('#password').val();

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/reg.aspx/InsertRecord",

            data: '{"Fname":"' + Fname + '", "Lname":"' + Lname + '", "Country":"' + country2 + '", "age":"' + a + '","PsaNo":"' + psano + '","Email":"' + mail + '","passport":"' + passport2 + '","Gender":"' + val + '","code":"' + pass + '"}',
            dataType: "json",
            success: onsuccess,
            error: function () {
                //alert('Failed to receive the Data');
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = 'Failed to receive the Data'
                $("#message").css("display", "inline");
            }
        });

        function onsuccess(result)
        {
            var Fname = $('#name').val();
            var Lname = $('#father_name').val();
            var mail = $('#email').val();
            var pass = $('#password').val();
            var Reg = $('#regno').val();
            var country2 = $('#country').val();
            var name = Fname + Lname
            setCookie('name', name, 10);
            if (result.d === "Success") {
                if (country2 === "India") {


                    $.ajax({                              /* ajax call for sending mail for the country of INDIA*/
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/reg.aspx/smail",

                        data: '{"toVal":"' + mail + '","username":"' + Fname + '","username2":"' + Lname + '","reg":"' + Reg + '","code":"' + pass + '"}',
                        dataType: "text",

                        success: function (result2) {
                            //alert('Successfully send mail ');
                            document.getElementById('message').style.color = 'red';
                            document.getElementById('message').innerHTML = 'Successfully send mail'
                            $("#message").css("display", "inline");
                            window.location.href = "indian.aspx";
                            clearall();

                        },
                        error: function () {
                            //alert('Failed to send mail');
                            document.getElementById('message').style.color = 'red';
                            document.getElementById('message').innerHTML = 'Failed to send mail'
                            $("#message").css("display", "inline");
                        }
                    });
                }

                else {
                    $.ajax({                              /* ajax call for sending mail for the country of OVERSEAS*/
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/reg.aspx/smail",

                        data: '{"toVal":"' + mail + '","username":"' + Fname + '","username2":"' + Lname + '","reg":"' + Reg + '","code":"' + pass + '"}',
                        dataType: "text",

                        success: function (result3) {
                            //alert('Successfully send mail ');
                            document.getElementById('message').style.color = 'red';
                            document.getElementById('message').innerHTML = 'Successfully send mail'
                            $("#message").css("display", "inline");
                            window.location.href = "OtherCountry.aspx";
                            clearall();

                        },
                        error: function (result3) {
                            //alert(result3.d);
                            document.getElementById('message').style.color = 'red';
                            document.getElementById('message').innerHTML = 'Failed to send mail'
                            $("#message").css("display", "inline");
                        }
                    });


                }
            }
            else {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').innerHTML = 'This mail already exists'
                $("#message").css("display", "inline");}

        }
        
    }
    else {
        //alert("Empty");
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = "Please fill the empty fields";
        $("#message").css("display", "inline");
    }
}

/************** Start Password checking*************/

function passcheck() {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var pass = $('#password').val();
    if (pass.match(re)) {
        document.getElementById('passcheck').style.color = 'green';
        document.getElementById('passcheck').innerHTML = '';
        $("#passcheck").css("display", "none");
        return (true);
    }
    else {
        document.getElementById('passcheck').style.color = 'red';
        document.getElementById('passcheck').innerHTML = '8 characters Must<br>Special Character must<br>Combine Upper and lower case ';
        $("#passcheck").css("display", "inline");
        return (false);
    }
}
/************** End Password checking*************/


/************** Start check confirm passwd match with passw*************/
function cpasscheck() {
    if (document.getElementById('password').value ==
        document.getElementById('confirmpassword').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = '';
        $("#message").css("display", "none");
        return (true);
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Confirm password does not matched with Password';
        $("#message").css("display", "inline");
        return (false);
    }
}

/************** End check confirm passwd match with passw*************/

/************** Start Email validation check*************/
function emailcheck() {
    let regex = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    var mail = $('#email').val();
    if (mail.match(regex)) {
        
        document.getElementById('emailcheck').style.color = 'green';
        document.getElementById('emailcheck').innerHTML = '';
        $("#emailcheck").css("display", "none");
            return (true);
        } else {
        document.getElementById('emailcheck').style.color = 'red';
        document.getElementById('emailcheck').innerHTML = 'Invalid Email';
        $("#emailcheck").css("display", "inline");
            return (false);
        }
}

/************** End Email validation check*************/

function clearall() {
    $('#name').val('');
     $('#father_name').val('');
    $('#email').val('');
     $('#birth_date').val('');
    $('#address').val('');
    $("input[type='radio']:checked").val('');
  $('#city').val('');
    $('#state').val('');
     $('#age').val('');
    $('#passport').val('');
   $('#country').val('');
 $('#psamembership').val('');
     $('#password').val('');
}
/**************************Set cookie to pick user first name and last name*****************/

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
//*******************************Cookie end**********************

// ***********************Check all input fields hava data****************/////////////
function checkall() {
    var invalid = 0;
    $('input').each(function () {
        if ($(this).val() == '') {
            invalid++;
        }
    });

    if (invalid > 0)
        return false;
    else
        return true;

    
}


//*********************************ADD COUNTRY LIST**********************//
var select = document.getElementById("country"),
    arr = ["Select Country", "Afghanistan",
        "Aland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curacao",
        "Cyprus",
        "Czech Republic",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "England",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Island",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadelupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Isle of Man",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia Federated States",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "North Korea",
        "North Macedonia",
        "Northern Ireland",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of Ireland",
        "Reunion",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Barthelemy",
        "Saint Helena",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Scotland",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "Uruguay",
        "USA",
        "US Virgin Islands",
        "Uzbekistan",
        "Vanuatu",
        "Vatican",
        "Venezuela",
        "Vietnam",
        "Wales",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
];

for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    select.insertBefore(option, select.lastChild);
}