
function checkcookie() {

    //if the cookie is empty then redirect to login form START//
    var r = document.cookie;
    alert(r);
    alert(r.length);
    try {
        if (r.length === 17) {

            return true;
        }
        //user-defined throw statement. 
        else {
            document.write("cannot log in");;
            window.location.href = "login.aspx";
            return false;
        }
    }
    catch (e) {
        document.write(e.message+"catch");
        window.location.href = "login.aspx";
        return false;
    }
}

var $table = $('#fresh-table');
$(document).ready(function () {
    checkcookie();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/admin.aspx/GetDetails",
        dataType: "json",
        success: function (data) {
            var val_arr = JSON.parse(data.d);
            var row = val_arr[0];
            var columns = [];
            var columns1 = [];
            var sec = 1;

            $.each(row, function (key, element) {
                //if ($.isNumeric(key) == false) {
                //    var hal = 'left';
                    var viz = true;
                    if (key == 'Payment')
                        viz = false;
                //    if (key == 'STATUS')
                        hal = 'center'

                    columns.push({
                        field: key,
                        title: key,
                        visible:viz,
                        align:hal,
                        sortable: true
                    })
                //}
                //else {
                //    columns1.push({
                //        field: key,
                //        title: 'Sec ' + sec,
                //        align: hal,
                //        sortable: true
                //    })
                //    sec++;
                //}
                //alert(key + ' - ' + element);
            });
            //columns.push({ field: 'TOGGLEFEE', title: 'Toggle Fee', align: 'center', formatter: 'feeFormatter', events: 'operateEvents' });

            //// Only for Print Received Toggle Switch
            //if (Sal_Code == 'VNS22')
            //    columns.push({ field: 'TOGGLEPRINT', title: 'Print Status', align: 'center', formatter: 'printFormatter', events: 'operateEvents' });

            columns.push({ field: 'actions', title: 'Actions', align: 'center', formatter: 'feeFormatter', events: 'operateEvents' });
            columns1.push({ formatter: 'operateFormatter', events: 'operateEvents' });
            
            //columns.push({ field: 'IMAGES', title: 'IMAGES', align: 'center', sortable: 'true', searchable: 'true', formatter: 'totalImageFormatter', events: 'operateEvents' });
            columns = $.merge($.merge([], columns), columns1);
            
            $table.bootstrapTable({
                classes: 'table table-hover table-striped',
                toolbar: '.toolbar',
                exportDataType: 'all',
                exportTypes: ['xml', 'csv', 'txt', 'excel'],
                search: true,
                showRefresh: false,
                showToggle: true,
                showColumns: true,
                showExport: true,
                pagination: true,
                striped: true,
                sortable: true,
                pageSize: 25,
                pageList: [10, 25, 50, 100],
                columns: columns,
                data: JSON.parse(data.d),

                formatShowingRows: function (pageFrom, pageTo, totalRows) {
                    return '' + pageFrom + ' to ' + pageTo + ' [of Total ' + totalRows + ' Entrants]';
                },
                formatRecordsPerPage: function (pageNumber) {
                    return ' | upto ' + pageNumber + ' shown in this page';
                }
            });

            /*pageLoadingFrame("hide");*/
        },
        error: function (jqXHR, exception) {
            pageLoadingFrame("hide");
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].\n';
            } else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            alert(msg);
        }
    });
});
window.operateEvents = {
    'click .flag': function (e, value, row, index) {
        //alert('You click like icon, row: ' + JSON.stringify(row))
        $this.toggleClass('active');
    },
    'click .labels': function (e, value, row, index) {
        //alert('Sorry! the action buttons are not active now.');
        //alert('You click edit icon, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        alert(row.RegNo);
        var state = row.Payment;
        //alert(state + "1");
        
            if (state == "Pending") {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/admin.aspx/DeleteUser",
                    data: '{"Entrant_ID":"' + row.RegNo + '"}',
                    dataType: "json",
                    success: function (data) {
                        var obj = data.d;
                        //alert(obj);
                        if (obj == "Success") {
                            $table.bootstrapTable('remove', {
                                field: 'RegNo',
                                values: [row.RegNo]
                            });
                            document.getElementById('msg').style.color = 'red';
                            document.getElementById('msg').innerHTML = "Successfully Deleted";
                            $('#fresh-table').bootstrapTable('refresh');
                        }
                    }
                });
            }

            else {
                var modal = document.getElementById("myModal1");
                modal.style.display = "block";

                $(".close202").click(function () {
                    modal.style.display = "none";
                });

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        
    },

    'click .fee': function (e, value, row, index) {
        
        var state = e.target.checked;
        alert(state+"1");
        //var eid = JSON.stringify(row.RegNo);
        //alert(eid);
        var status = 'Pending';
        if (state != undefined) {
            if (state == false) {
                status = 'Pending';
                alert("hi");
            }
            else
                status = 'Approved';
            //e.target.disabled = true;
            alert("hi2");
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/admin.aspx/UpdateFeeStatus",
                data: '{"Entrant_ID":"' + row.RegNo + '", "Status":"' + status + '"}',
                dataType: "json",
                success: function (data) {
                    var obj = data.d;
                    if (obj == "Success") {
                        $table.bootstrapTable('updateCell', {
                            index: index,
                            field: 'Payment',
                            value: status
                        });
                    }
                }
            });
        }
    },

    'click .email': function (e, value, row, index) {
        $('#mailmsg').empty();
        $('#exampleModal').modal('show');
        $("#recipient-name").val(row.Email);
        $("#smail").click(function () {
            //alert("ck1");
            var mailid = $("#recipient-name").val();
            //var instance = CKEDITOR.instances.ckbody;
            //var body = CKEDITOR.instances['editor1'].getData('html');
            var body = $("#ckbody").val();
            //alert("ck2");
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/admin.aspx/SendMail",
                data: '{"Email":"' + mailid + '", "Body":"' + body + '"}',
                dataType: "json",
                success: function (data) {
                    document.getElementById('mailmsg').style.color = 'red';
                    document.getElementById('mailmsg').innerHTML = data.d;
                    $("#recipient-name").val(" ");
                    $("#ckbody").val(" ");
                    //alert("send");
                    //$('#exampleModal').modal('hide');
                }
            });

        });
    },


    'click .prints': function (e, value, row, index) {
        //alert('prints');
        var state = e.target.checked;
        //alert(state + "2");
        /*var eid = JSON.stringify(row.ID);*/

        var status = 'Pending';
        if (state != undefined) {
            if (state == false)
                status = 'Pending';
            else
                status = 'Approved';
            e.target.disabled = true;
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/admin.aspx/UpdatePrintStatus",
                data: '{"Entrant_ID":"' + row.RegNo + '", "Status":"' + status + '"}',
                dataType: "json",
                success: function (data) {
                    var obj = data.d;
                    if (obj == "Success") {
                        //$table.bootstrapTable('updateCell', {
                        //    index: index,
                        //    field: 'PRINT',
                        //    value: status
                        //});
                        e.target.disabled = false;
                    }
                }
            });
        }
    }
}



function operateFormatter(value, row, index) {
    return [
       
        '<a rel="tooltip" title="Delete Entrant" class="table-action remove" href="javascript:void(0)">',
        '<i class="fa fa-ban"></i>',
        '</a>',
        '<a rel="tooltip" title="Send Email" class="table-action email px-1" href="javascript:void(0)">',
        '<i class="fa fa-envelope-open"></i>',
        '</a>',
    ].join('')
}



function feeFormatter(value, row, index) {
    if (row.Payment != "Approved")
        value = '<label class="switch fee"><input type="checkbox"><span></span></label>';
    else
        value = '<label class="switch fee"><input type="checkbox" checked=""><span></span></label>';

    return [
        value
        //'<label class="switch"><input type="checkbox" checked="" value="0"><span></span></label>'
    ].join('')
}


//$('#exampleModal').on('show.bs.modal', function (event) {
//    var button = $(event.relatedTarget) // Button that triggered the modal
//    var recipient = button.data('whatever') // Extract info from data-* attributes
//    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//    var modal = $(this)
//    modal.find('.modal-title').text('New message to ' + recipient)
//    modal.find('.modal-body input').val(recipient)
//});





