$(document).ready(function () {
    var token = localStorage.getItem('token').replace(/"/g, "");
    var baseURL = localStorage.getItem('baseURL');
    console.log(token)

    // GET ALL Targets
    $.ajax({
        url: baseURL + '/target/getall',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            console.log(data);

            if (data.Status == true && data.Message == "Record found successfully") {
                $.each(data.Data, function () {
                    var txtmonth = this.month
                    const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    monthName = monthNames[parseInt(txtmonth)]
                    $("#target_table").append("<tr role='row' class='topborder'><td role='cell'><div class='table_show_on_mobile'><strong>Month</strong></div>" + monthName + "</td><td role='cell'><div class='table_show_on_mobile'><strong>Year</strong></div>" + this.year + "</td><td role='cell'><div class='table_show_on_mobile'><strong>Assigned To</strong></div>" + this.user_id + "</td><td role='cell'><div class='table_show_on_mobile'><strong>Month</strong></div>" + this.target + "</td><td role='cell'></td></tr>");
                    // <td role='cell'><a href='javascript:void(0);' class='waves-effect waves-block waves-light profile-button threedotsmob right' data-activates='moreoption-dropdown'><i class='material-icons more_vert_mob right'>more_vert</i></a><ul id='moreoption-dropdown' class='dropdown-content'><li><a class='grey-text text-darken-1 chat-collapse openEditSalesLeadForm' data-activates='editsalesleadform-slide-out'><i class='material-icons'>edit</i> Edit Target</a></li></ul></td>
                })
            }
        }
    });

    // GET SALES EXECUTIVE LIST
    $.ajax({
        url: baseURL + '/list/SE',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            // console.log(data);
            if (data.Status == true && data.Message == "Record found successfully") {
                $.each(data.Data, function () {
                    $("#add_assigned_to_SE_SM").append("<option value='" + this.userName + "'>" + this.userName + "</option>");
                })
            }
        }
    });

    // GET SALES EXECUTIVE LIST
    $.ajax({
        url: baseURL + '/list/SM',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            // console.log(data);
            if (data.Status == true && data.Message == "Record found successfully") {
                $.each(data.Data, function () {
                    $("#add_assigned_to_SE_SM").append("<option value='" + this.userName + "'>" + this.userName + "</option>");
                })
            }
        }
    });

    // GET SALES EXECUTIVE LIST
    $.ajax({
        url: baseURL + '/list/CRM',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            // console.log(data);
            if (data.Status == true && data.Message == "Record found successfully") {
                $.each(data.Data, function () {
                    $("#add_assigned_to_crm").append("<option value='" + this.userName + "'>" + this.userName + "</option>");
                })
            }
        }
    });

    $("#add_target_to_se_sm").submit(function (e) {
        e.preventDefault()
        ////////continue your code
        if ($("#add_assigned_to_SE_SM,#add_target_month_SE_SM,#add_target_year_SE_SM,#add_target_amt_SE_SM").val().length > 0) {
            var add_assigned_to_SE_SM = $("#add_assigned_to_SE_SM").val();
            var add_target_month_SE_SM = $("#add_target_month_SE_SM").val();
            var add_target_year_SE_SM = $("#add_target_year_SE_SM").val();
            var add_target_amt_SE_SM = $("#add_target_amt_SE_SM").val();

            var add_target_to_se_sm = {
                "user": add_assigned_to_SE_SM,
                "month": add_target_month_SE_SM,
                "year": add_target_year_SE_SM,
                "target": add_target_amt_SE_SM,
                "target_type": "amount"
            }
            console.log(add_target_to_se_sm);
            $.ajax({
                url: baseURL + '/target/add',
                type: 'POST',
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(add_target_to_se_sm),
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                success: function (data) {
                    // console.log("DATA POSTED SUCCESSFULLY");
                    // console.log(data)
                    // data = JSON.parse(data)
                    alert("Target Added successfully");
                    // localStorage.setItem('leadId',JSON.stringify(data.Lead.id))
                    window.location.reload();
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
        } else {

        }
        return false;
    });

    $("#add_target_to_crm").submit(function (e) {
        e.preventDefault()
        ////////continue your code
        if ($("#add_assigned_to_crm,#add_target_month_crm,#add_target_year_crm,#add_target_amt_crm").val().length > 0) {
            var add_assigned_to_crm = $("#add_assigned_to_crm").val();
            var add_target_month_crm = $("#add_target_month_crm").val();
            var add_target_year_crm = $("#add_target_year_crm").val();
            var add_target_amt_crm = $("#add_target_amt_crm").val();

            var add_target_to_crm = {
                "user": add_assigned_to_crm,
                "month": add_target_month_crm,
                "year": add_target_year_crm,
                "target": add_target_amt_crm,
                "target_type": "number"
            }
            console.log(add_target_to_crm);
            $.ajax({
                url: baseURL + '/target/add',
                type: 'POST',
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(add_target_to_crm),
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                success: function (data) {
                    // console.log("DATA POSTED SUCCESSFULLY");
                    // console.log(data)
                    // data = JSON.parse(data)
                    alert("Target Added successfully");
                    // localStorage.setItem('leadId',JSON.stringify(data.Lead.id))
                    window.location.reload();
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
        } else {

        }
        return false;
    });

});


$(document).ready(function () {
    // $(".user-target").hide();
    var token = localStorage.getItem('token').replace(/"/g, "");
    var baseURL = localStorage.getItem('baseURL');

    // GET User Target
    $.ajax({
        url: baseURL + '/user_target',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            // console.log("User Target Append Successfully");
            // console.log(data)
            data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
            data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));        
            // var month = data.Data.month
            // var year = data.Data.year
            var target = data.Data.target
            if (data.Data.target_type == "amount") {
                $(".se_sm_target").html(target);
                $(".target2").hide();
            }
            if (data.Data.target_type == "number") {
                $(".crm_target").html(target);
                $(".target1").hide();
            }
            // $(".target").html(target);
            // $(".month").html(month);
            // $(".year").html(year);
            // if(target == '' || target == 'undefined'){
            //   $(".user-target").hide();
            // }
            // else{
            //   $(".user-target").show();
            // }
        },

    });
});