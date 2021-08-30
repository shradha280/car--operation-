var baseURL = localStorage.getItem('baseURL');
var token = localStorage.getItem('token').replace(/"/g, "");
console.log(token)

function lead_view(lead_id,eval_list_current_page) {
    // localStorage.setItem('lead_id', lead_id)
    localStorage.setItem('lead_list_current_page', eval_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main/edel-lms-fe-main/lead-view.html?id='+ lead_id
    // location.href = location.origin + '/lead-view.html?id='+ lead_id
}

function today_lead_view(lead_id,today_eval_list_current_page) {
    // localStorage.setItem('lead_id', lead_id)
    localStorage.setItem('today_eval_list_current_page', 
    today_eval_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main/edel-lms-fe-main/lead-view.html?id='+ lead_id
    // location.href = location.origin + '/lead-view.html?id='+ lead_id
}
function pending_lead_view(lead_id,pending_eval_list_current_page) {
    // localStorage.setItem('lead_id', lead_id)
    localStorage.setItem('pending_eval_list_current_page', 
    pending_eval_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main/edel-lms-fe-main/lead-view.html?id='+ lead_id
    // location.href = location.origin + '/lead-view.html?id='+ lead_id
}
function future_lead_view(lead_id,future_eval_list_current_page) {
    // localStorage.setItem('lead_id', lead_id)
    localStorage.setItem('future_eval_list_current_page', 
    future_eval_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main/edel-lms-fe-main/lead-view.html?id='+ lead_id
    // location.href = location.origin + '/lead-view.html?id='+ lead_id
}

function loader_hide(){
    $(".loader-wrapper").hide();
}

function loader_show(){
    $(".loader-wrapper").show();
   
    }
    $(function() {
        $(".preload").fadeOut(2000, function() {
            $(".wrapper").fadeIn(1000);        
        });
    });
function page_reload(){
    setTimeout(function(){window.location.reload();},1000);
}

function error_popup(){
    var success_error = jqXhr.responseText
    Materialize.toast(success_error, 4000, 'red');
}

var total_pages= null;
function prevPage(){
    loader_show();
    //  page_reload()
      var eval_list_current_page = localStorage.getItem('eval_list_current_page');
      if (eval_list_current_page > 1) {
          eval_list_current_page--;   
      }
      localStorage.setItem('eval_list_current_page', eval_list_current_page)
      ALLEval(eval_list_current_page);
   }
  function nextPage(){  
    loader_show();
     // page_reload()
      console.log(total_pages);
      var eval_list_current_page = localStorage.getItem('eval_list_current_page');
      if (eval_list_current_page < total_pages) {
          eval_list_current_page++;
      }
      localStorage.setItem('eval_list_current_page', eval_list_current_page);
      console.log(total_pages)
      ALLEval(eval_list_current_page);
  }
  var pending_total_pages=null;
  function pendingprevPage() {
    loader_show();
      var pending_eval_list_current_page = localStorage.getItem('pending_eval_list_current_page');
      if (pending_eval_list_current_page > 1) {
          pending_eval_list_current_page--;
      }
      localStorage.setItem('pending_eval_list_current_page', pending_eval_list_current_page);
      pending_eval(pending_eval_list_current_page);
  }
  var today_total_pages=null;
  function todayprevPage() {
    loader_show();
      var today_eval_list_current_page = localStorage.getItem('today_eval_list_current_page');
      if (today_eval_list_current_page > 1) {
          today_eval_list_current_page--;
      }
      localStorage.setItem('today_eval_list_current_page', today_eval_list_current_page);
      today_eval(today_eval_list_current_page);
  }
  function todaynextPage() {
    loader_show();
      console.log(today_total_pages);
      var today_eval_list_current_page = localStorage.getItem('today_eval_list_current_page');
  
      if (today_eval_list_current_page < today_total_pages) {
          today_eval_list_current_page++;
      }
      localStorage.setItem('today_eval_list_current_page', today_eval_list_current_page);
      
      console.log(today_total_pages)
      today_eval(today_eval_list_current_page);
  }
  
  function pendingnextPage() {
    loader_show();
      console.log(pending_total_pages);
      var pending_eval_list_current_page = localStorage.getItem('pending_eval_list_current_page');
  
      if (pending_eval_list_current_page < pending_total_pages) {
        pending_eval_list_current_page++;
      }
      localStorage.setItem('pending_eval_list_current_page', pending_eval_list_current_page);
      
      console.log(pending_total_pages)
     pending_eval(pending_eval_list_current_page);
  }
  var future_total_pages=null;
  function futureprevPage() {
    loader_show();
     
      var future_eval_list_current_page = localStorage.getItem('future_eval_list_current_page');
      if (future_eval_list_current_page > 1) {
          future_eval_list_current_page--;
      }
      localStorage.setItem('future_eval_list_current_page', future_eval_list_current_page);
      future_eval(future_eval_list_current_page);
      
  }
  function futurenextPage() {
    loader_show();
      console.log(future_total_pages);
      var future_eval_list_current_page = localStorage.getItem('future_eval_list_current_page');
  
      if (future_eval_list_current_page < future_total_pages) {
          future_eval_list_current_page++;
      }
      localStorage.setItem('future_eval_list_current_page', future_eval_list_current_page);
      
      console.log(future_total_pages)
      future_eval(future_eval_list_current_page);
  }
  
    // GET All Evaluations
   
    var eval_list_current_page= localStorage.getItem('eval_list_current_page');
    if (eval_list_current_page == null) {
        eval_list_current_page = 1;
    }
    localStorage.setItem('eval_list_current_page', eval_list_current_page)
    
    ALLEval(eval_list_current_page);
    
    function ALLEval(eval_list_current_page){
      
    $.ajax({
        url: baseURL + '/eval_lists?viewby=all&page='+eval_list_current_page,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
       
            
            // console.log("ALL EVALUATIONS DATA");
            // console.log(data)
            $("#all_evaluation_list").empty();
            data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
            var all_eval_count = data.pagination.total_pages;
            $(".all_eval_count").html(all_eval_count);
            $.each(data.Evaluations, function () {
                
                var eval_lead_template = "<tr role='row' class='topborder'> <td role='cell'> <div class='table_show_on_mobile'>Id</div> <strong><a onclick='lead_view(" + this.lead.id + ","+eval_list_current_page+")' title='Click to view' class='name_style'>" + this.lead.id + "</a></strong> </td><td role='cell'><div class='table_show_on_mobile'><strong>Client</strong></div><p>" + this.lead.contact.first_name + " " + this.lead.contact.last_name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Car</strong></div><p>" + this.lead.car_data.make.name + "</p><p>" + this.lead.car_data.model.name + "</p><p>" + this.lead.car_data.variant.name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Stage</strong></div><span class='stage-style'><p>" + this.lead.stage.name + "</p>"

                if (this.lead.stage.name == "Evaluation Completed") {
                    if (this.lead.evaluation_approval_status == "pending approval") {
                        eval_lead_template += "<p class='eval_approv_style red-txt'>HOAS Approval - " + this.lead.evaluation_approval_status + "</p>"
                        $(".evaldropdown").hide();
                    }
                    if (this.lead.evaluation_approval_status == "On Hold") {
                        eval_lead_template += "<p class='eval_approv_style red-txt'>HOAS Approval - " + this.lead.evaluation_approval_status + "</p>"
                    }
                    if (this.lead.evaluation_approval_status == "Rejected") {
                        eval_lead_template += "<p class='eval_approv_style red-txt'>HOAS Approval - " + this.lead.evaluation_approval_status + "</p>"
                    }
                    if (this.lead.evaluation_approval_status == "Approved") {
                        eval_lead_template += "<p class='eval_approv_style green-txt'>HOAS Approval - " + this.lead.evaluation_approval_status + "</p>"
                    }
                    
                }
                // else if (this.lead.stage.name == "Won") {
                //     if (this.lead.won_approval_status_cra == "Pending") {
                //         eval_lead_template += "<p class='eval_approv_style red-txt'>CRA Approval - " + this.lead.won_approval_status_cra + "</p>"
                //     }
                //     else{
                //         eval_lead_template += "<p class='eval_approv_style green-txt'>CRA Approval - " + this.lead.won_approval_status_cra + "</p>"
                //     }
                    
                //     if (this.lead.won_approval_status_hos == "Pending") {
                //         eval_lead_template += "<p class='eval_approv_style red-txt'>HOS Approval - " + this.lead.won_approval_status_hos + "</p>"
                //     }
                //     else{
                //         eval_lead_template += "<p class='eval_approv_style green-txt'>HOS Approval - " + this.lead.won_approval_status_hos + "</p>"
                //     }
                    
                // }
                // else if (this.lead.stage.name == "Negotiation") {
                //     if (this.lead.negotiation_approval_status == "Pending") {
                //         eval_lead_template += "<p class='eval_approv_style red-txt'>SM Approval - " + this.lead.negotiation_approval_status + "</p>"
                //     }
                //     else{
                //         eval_lead_template += "<p class='eval_approv_style green-txt'>SM Approval - " + this.lead.negotiation_approval_status + "</p>"
                //     }
                //     // lead_template += "<p class='eval_approv_style'>HOS Approval - "+this.won_approval_status_hos+"</p>"
                // }

                eval_lead_template += "</span></td><td role='cell'> <div class='table_show_on_mobile'><strong>Scheduled Date</strong></div> " + this.date + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Time</strong></div> " + this.time_interval + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Address</strong></div> " + this.meeting_address + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Asigned To ASE</strong></div> " + this.lead.assigned_to_ase.username + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Created by</strong></div> " + this.created_by.username + " </td> <td role='cell'><a href='javascript:void(0);'class='waves-effect waves-block waves-light profile-button evaldropdown right' data-activates='moreoption-dropdown__" + this.lead.id + "'><i class='material-icons more_vert_mob right'>more_vert</i></a><ul id='moreoption-dropdown__" + this.lead.id + "' class='dropdown-content'><li><a href='#' class='grey-text text-darken-1 eval-collapse openEditSalesLeadForm' data-activates='editsalesleadform-slide-out' data-id=\"" + this.lead.id + "\" data-make=\"" + this.lead.car_data.make.name + "\" data-model=\"" + this.lead.car_data.model.name + "\" ><i class='material-icons'>edit</i> Edit Info</a></li><li><a href='#' class='grey-text text-darken-1 eval-collapse openEvalCompForm' data-activates='openevalcomp-slide-out' data-id=\"" + this.lead.id + "\"><i class='material-icons'>access_time</i> Evaluation Completed</a></li></ul></td> </tr>"

                $("#all_evaluation_list").append(eval_lead_template);
            });
            total_pages = data.pagination.total_pages;
            var btn_next = document.getElementById("btn_next");
            var btn_prev = document.getElementById("btn_prev");
            var page_span = document.getElementById("page");
    
            // Validate page
            if (eval_list_current_page < 1) eval_list_current_page = 1;
            if (eval_list_current_page >total_pages) eval_list_current_page = total_pages;
            if(page_span!==null)
            page_span.innerText = eval_list_current_page + "/" + data.pagination.total_pages;
            if(btn_prev!==null){
            if (eval_list_current_page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }
        }
        if(btn_next!==null){
            if (eval_list_current_page == total_pages) {
               btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }
    
            if (total_pages == 1) {
                btn_next.style.visibility = "hidden";
            }
        }
            $('.evaldropdown').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                click: true, // Activate on click
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: 'left', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false // Stops event propagation
            });
            $('.eval-collapse').sideNav({
                menuWidth: 300, // Default is 300
                edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true, // Choose whether you can drag to open on touch screens,
                menuOut: true
            });
            loader_hide();
            attach_lead_edit_event();
            evaluation_completed();
            apply_roles();
            
        },
       


    });
    
}


    function attach_lead_edit_event() {
        $(".openEditSalesLeadForm").click(function () {
            // var lead_id = JSON.parse(localStorage.getItem('leadId'));
            // console.log(lead_id)
            var lead_id = $(this).data("id");
            var leadmake = $(this).data("make");
            var leadmodel = $(this).data("model");
    
            $.ajax({
                url: baseURL + '/model/getall?make=' + leadmake,
                method: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                success: function (data) {
                    if (data.Status == true && data.Message == "Record found successfully") {
                        // $("#edit_lead_car_model").append("<option value='Choose'>Choose</option>");
                        // console.log(data.Data)
                        $.each(data.Data, function () {
                            $("#edit_lead_car_model").append("<option value='" + this + "'>" + this + "</option>");
                        })
                    }
                }
            });
            $.ajax({
                url: baseURL + '/variant/getall?make=' + leadmake + '&model=' + leadmodel,
                method: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                // data: JSON.stringify(variant),
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                success: function (data) {
                    // console.log(data)
                    if (data.Status == true && data.Message == "Record found successfully") {
                        $.each(data.Data, function () {
                            $("#edit_lead_car_variant").append("<option value='" + this + "'>" + this + "</option>");
                        });
                    }
                }
            });
            $.ajax({
                url: baseURL + '/read_lead?id=' + lead_id,
                method: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                success: function (data) {
                    // console.log("READ DATA");
                    console.log(data)
                    // localStorage.setItem('readleaddata',JSON.stringify(data))
                    append_read_data_to_edit = data
                    $("#edit_lead_id").val(append_read_data_to_edit.Lead.id);
                    $("#edit_lead_car_current_km").val(append_read_data_to_edit.Lead.car_data.current_km);
                    $("#edit_lead_vin_number").val(append_read_data_to_edit.Lead.car_data.vin);
                    $("#won_eng_no").val(append_read_data_to_edit.Lead.car_data.engine_number);
                    $("#assign_se_manually").val(append_read_data_to_edit.Lead.assigned_to.username);
                    $("#assign_ase_manually").val(append_read_data_to_edit.Lead.assigned_to_ase.username);
                },
            });
    
            $("#vin_current_km").submit(function (e) {
                e.preventDefault()
                // loader_show();
                var baseURL = localStorage.getItem('baseURL');
                ////////continue your code
                var token = localStorage.getItem('token').replace(/"/g, "");
        
                if ($("#edit_lead_vin_number,#edit_lead_car_current_km").val().length > 0) {
                    var edit_lead_vin_number = $("#edit_lead_vin_number").val();
                    var edit_lead_car_current_km = $("#edit_lead_car_current_km").val();
        
                    // lead_id = $("#edit_lead_id").val();
                    lead_owner = localStorage.getItem('username').replace(/"/g, "");
                    var update_eval_lead_data = {
                        "id": lead_id,
                        "car_data_current_km": edit_lead_car_current_km,
                        "car_data_vin": edit_lead_vin_number
                    }
                    $.ajax({
                        url: baseURL + '/update_lead',
                        type: 'POST',
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(update_eval_lead_data),
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', 'Token ' + token);
                        },
                        success: function (data) {
                            // console.log("Updated lead details");
                            console.log(data)
                            // loader_hide();
                            Materialize.toast('VIN number and current km updated successfully', 4000, 'green');
                            page_reload();
                            // window.location.reload();
        
                        },
                        error: function (jqXhr, textStatus, errorThrown) {
                            // loader_hide();
                            var success_error = jqXhr.responseText
                            alert(success_error);
                            // Materialize.toast(success_error, 4000, 'red');
                            console.log(errorThrown);
                        },
                    });
                } else {
        
                }
        
                return false;
            });
 
            $("#assigntoase").submit(function (e) {
                e.preventDefault()
                // loader_show();
                var baseURL = localStorage.getItem('baseURL');
                ////////continue your code
                var token = localStorage.getItem('token').replace(/"/g, "");
        
                if ($("#assign_ase_manually").val().length > 0) {
                    var assign_ase_manually = $("#assign_ase_manually").val();
        
                    // lead_id = $("#edit_lead_id").val();
                    lead_owner = localStorage.getItem('username').replace(/"/g, "");
                    var update_eval_lead_data = {
                        "id": lead_id,
                        "assigned_to_ase": assign_ase_manually
                    }
                    $.ajax({
                        url: baseURL + '/update_lead',
                        type: 'POST',
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(update_eval_lead_data),
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', 'Token ' + token);
                        },
                        success: function (data) {
                            // console.log("Updated lead details");
                            console.log(data)
                            // loader_hide();
                            Materialize.toast('ASE Assigned successfully', 4000, 'green');
                            page_reload();
                            // window.location.reload();
        
                        },
                        error: function (jqXhr, textStatus, errorThrown) {
                            // loader_hide();
                            var success_error = jqXhr.responseText
                            alert(success_error);
                            // Materialize.toast(success_error, 4000, 'red');
                            console.log(errorThrown);
                        },
                    });
                } else {
        
                }
        
                return false;
            });
    
        });
    }

    // GET AFTER SALES EXECUTIVE LIST
    $.ajax({
        url: baseURL + '/list/ASE',
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
                    $("#assign_ase_manually").append("<option value='" + this.userName + "'>" + this.userName + "</option>");
                })
            }
        }
    });

    function evaluation_completed() {
        $(".openEvalCompForm").click(function () {
            var lead_id = $(this).data("id");
            var baseURL = localStorage.getItem('baseURL');
            var token = localStorage.getItem('token').replace(/"/g, "");
            $("#edit_lead_id").val(lead_id);
            $("#eval_completed").submit(function (e) {
                e.preventDefault()
                // loader_show();
                ////////continue your code
                    //start_stop_button
                    var start_stop_button = $("input[name='start_stop_button']:checked").val();
                    if (start_stop_button === "true") {
                        start_stop_button = true;
                    }
                    if (start_stop_button === "false") {
                        start_stop_button = false
                    }
                    var start_stop_button_reason = $("#start_stop_button_reason").val();
    
                    var instrumental_cluster = $("input[name='instrumental_cluster']:checked").val();
                    if (instrumental_cluster === "true") {
                        instrumental_cluster = true;
                    }
                    if (instrumental_cluster === "false") {
                        instrumental_cluster = false
                    }
                    var instrumental_cluster_reason = $("#instrumental_cluster_reason").val();
                    var multi_media_screen = $("input[name='multi_media_screen']:checked").val();
                    if (multi_media_screen === "true") {
                        multi_media_screen = true;
                    }
                    if (multi_media_screen === "false") {
                        multi_media_screen = false
                    }
                    var multi_media_screen_reason = $("#multi_media_screen_reason").val();
                    var pw_switches_function = $("input[name='pw_switches_function']:checked").val();
                    if (pw_switches_function === "true") {
                        pw_switches_function = true;
                    }
                    if (pw_switches_function === "false") {
                        pw_switches_function = false
                    }
                    var pw_switches_function_reason = $("#pw_switches_function_reason").val();
                    var speakers = $("input[name='speakers']:checked").val();
                    if (speakers === "true") {
                        speakers = true;
                    }
                    if (speakers === "false") {
                        speakers = false
                    }
                    var speakers_reason = $("#speakers_reason").val();
                    var mirror_lense_adjt_knob_switch = $("input[name='mirror_lense_adjt_knob_switch']:checked").val();
                    if (mirror_lense_adjt_knob_switch === "true") {
                        mirror_lense_adjt_knob_switch = true;
                    }
                    if (mirror_lense_adjt_knob_switch === "false") {
                        mirror_lense_adjt_knob_switch = false
                    }
                    var mirror_lense_adjt_knob_switch_reason = $("#mirror_lense_adjt_knob_switch_reason").val();
                    var center_console_buttons = $("input[name='center_console_buttons']:checked").val();
                    if (center_console_buttons === "true") {
                        center_console_buttons = true;
                    }
                    if (center_console_buttons === "false") {
                        center_console_buttons = false
                    }
                    var center_console_buttons_reason = $("#center_console_buttons_reason").val();
                    var parking_brake_switch = $("input[name='parking_brake_switch']:checked").val();
                    if (parking_brake_switch === "true") {
                        parking_brake_switch = true;
                    }
                    if (parking_brake_switch === "false") {
                        parking_brake_switch = false
                    }
                    var parking_brake_switch_reason = $("#parking_brake_switch_reason").val();
                    var ac_system = $("input[name='ac_system']:checked").val();
                    if (ac_system === "true") {
                        ac_system = true;
                    }
                    if (ac_system === "false") {
                        ac_system = false
                    }
                    var ac_system_reason = $("#ac_system_reason").val();
                    var seat_adjt_mem_front_rear = $("input[name='seat_adjt_mem_front_rear']:checked").val();
                    if (seat_adjt_mem_front_rear === "true") {
                        seat_adjt_mem_front_rear = true;
                    }
                    if (seat_adjt_mem_front_rear === "false") {
                        seat_adjt_mem_front_rear = false
                    }
                    var seat_adjt_mem_front_rear_reason = $("#seat_adjt_mem_front_rear_reason").val();
                    var safety_seat_belt = $("input[name='safety_seat_belt']:checked").val();
                    if (safety_seat_belt === "true") {
                        safety_seat_belt = true;
                    }
                    if (safety_seat_belt === "false") {
                        safety_seat_belt = false
                    }
                    var safety_seat_belt_reason = $("#safety_seat_belt_reason").val();
                    var sunroof = $("input[name='sunroof']:checked").val();
                    if (sunroof === "true") {
                        sunroof = true;
                    }
                    if (sunroof === "false") {
                        sunroof = false
                    }
                    var sunroof_reason = $("#sunroof_reason").val();
                    var rear_sun_blinder = $("input[name='rear_sun_blinder']:checked").val();
                    if (rear_sun_blinder === "true") {
                        rear_sun_blinder = true;
                    }
                    if (rear_sun_blinder === "false") {
                        rear_sun_blinder = false
                    }
                    var rear_sun_blinder_reason = $("#rear_sun_blinder_reason").val();
                    var combination_switch = $("input[name='combination_switch']:checked").val();
                    if (combination_switch === "true") {
                        combination_switch = true;
                    }
                    if (combination_switch === "false") {
                        combination_switch = false
                    }
                    var combination_switch_reason = $("#combination_switch_reason").val();
                    var air_suspension_operation = $("input[name='air_suspension_operation']:checked").val();
                    if (air_suspension_operation === "true") {
                        air_suspension_operation = true;
                    }
                    if (air_suspension_operation === "false") {
                        air_suspension_operation = false
                    }
                    var air_suspension_operation_reason = $("#air_suspension_operation_reason").val();
                    var reverse_camera = $("input[name='reverse_camera']:checked").val();
                    if (reverse_camera === "true") {
                        reverse_camera = true;
                    }
                    if (reverse_camera === "false") {
                        reverse_camera = false
                    }
                    var reverse_camera_reason = $("#reverse_camera_reason").val();
                    var parking_sensors = $("input[name='parking_sensors']:checked").val();
                    if (parking_sensors === "true") {
                        parking_sensors = true;
                    }
                    if (parking_sensors === "false") {
                        parking_sensors = false
                    }
                    var parking_sensors_reason = $("#parking_sensors_reason").val();
                    var boot_shock_absorber = $("input[name='boot_shock_absorber']:checked").val();
                    if (boot_shock_absorber === "true") {
                        boot_shock_absorber = true;
                    }
                    if (boot_shock_absorber === "false") {
                        boot_shock_absorber = false
                    }
                    var boot_shock_absorber_reason = $("#boot_shock_absorber_reason").val();
                    var coolant = $("input[name='coolant']:checked").val();
                    if (coolant === "true") {
                        coolant = true;
                    }
                    if (coolant === "false") {
                        coolant = false
                    }
                    var coolant_reason = $("#coolant_reason").val();
                    var oil_leakage = $("input[name='oil_leakage']:checked").val();
                    if (oil_leakage === "true") {
                        oil_leakage = true;
                    }
                    if (oil_leakage === "false") {
                        oil_leakage = false
                    }
                    var oil_leakage_reason = $("#oil_leakage_reason").val();
                    var pully_noise = $("input[name='pully_noise']:checked").val();
                    if (pully_noise === "true") {
                        pully_noise = true;
                    }
                    if (pully_noise === "false") {
                        pully_noise = false
                    }
                    var pully_noise_reason = $("#pully_noise_reason").val();
                    var cooling_fan = $("input[name='cooling_fan']:checked").val();
                    if (cooling_fan === "true") {
                        cooling_fan = true;
                    }
                    if (cooling_fan === "false") {
                        cooling_fan = false
                    }
                    var cooling_fan_reason = $("#cooling_fan_reason").val();
                    var axle_boot = $("input[name='axle_boot']:checked").val();
                    if (axle_boot === "true") {
                        axle_boot = true;
                    }
                    if (axle_boot === "false") {
                        axle_boot = false
                    }
                    var axle_boot_reason = $("#axle_boot_reason").val();
                    var steering_rack_boot = $("input[name='steering_rack_boot']:checked").val();
                    if (steering_rack_boot === "true") {
                        steering_rack_boot = true;
                    }
                    if (steering_rack_boot === "false") {
                        steering_rack_boot = false
                    }
                    var steering_rack_boot_reason = $("#steering_rack_boot_reason").val();
                    var wiring_harness = $("input[name='wiring_harness']:checked").val();
                    if (wiring_harness === "true") {
                        wiring_harness = true;
                    }
                    if (wiring_harness === "false") {
                        wiring_harness = false
                    }
                    var wiring_harness_reason = $("#wiring_harness_reason").val();
                    var head_lighter_washer_jet = $("input[name='head_lighter_washer_jet']:checked").val();
                    if (head_lighter_washer_jet === "true") {
                        head_lighter_washer_jet = true;
                    }
                    if (head_lighter_washer_jet === "false") {
                        head_lighter_washer_jet = false
                    }
                    var head_lighter_washer_jet_reason = $("#head_lighter_washer_jet_reason").val();
                    var fuel_leakage = $("input[name='fuel_leakage']:checked").val();
                    if (fuel_leakage === "true") {
                        fuel_leakage = true;
                    }
                    if (fuel_leakage === "false") {
                        fuel_leakage = false
                    }
                    var fuel_leakage_reason = $("#fuel_leakage_reason").val();
                    var door_central_locking = $("input[name='door_central_locking']:checked").val();
                    if (door_central_locking === "true") {
                        door_central_locking = true;
                    }
                    if (door_central_locking === "false") {
                        door_central_locking = false
                    }
                    var door_central_locking_reason = $("#door_central_locking_reason").val();
                    var rear_boot_lock_functioning = $("input[name='rear_boot_lock_functioning']:checked").val();
                    if (rear_boot_lock_functioning === "true") {
                        rear_boot_lock_functioning = true;
                    }
                    if (rear_boot_lock_functioning === "false") {
                        rear_boot_lock_functioning = false
                    }
                    var rear_boot_lock_functioning_reason = $("#rear_boot_lock_functioning_reason").val();
                    var fuel_lid_actuator = $("input[name='fuel_lid_actuator']:checked").val();
                    if (fuel_lid_actuator === "true") {
                        fuel_lid_actuator = true;
                    }
                    if (fuel_lid_actuator === "false") {
                        fuel_lid_actuator = false
                    }
                    var fuel_lid_actuator_reason = $("#fuel_lid_actuator_reason").val();
                    var vehicle_jerking = $("input[name='vehicle_jerking']:checked").val();
                    if (vehicle_jerking === "true") {
                        vehicle_jerking = true;
                    }
                    if (vehicle_jerking === "false") {
                        vehicle_jerking = false
                    }
                    var vehicle_jerking_reason = $("#vehicle_jerking_reason").val();
                    var steering_noise = $("input[name='steering_noise']:checked").val();
                    if (steering_noise === "true") {
                        steering_noise = true;
                    }
                    if (steering_noise === "false") {
                        steering_noise = false
                    }
                    var steering_noise_reason = $("#steering_noise_reason").val();
                    var exhause_smoke = $("input[name='exhause_smoke']:checked").val();
                    if (exhause_smoke === "true") {
                        exhause_smoke = true;
                    }
                    if (exhause_smoke === "false") {
                        exhause_smoke = false
                    }
                    var exhause_smoke_reason = $("#exhause_smoke_reason").val();
                    var engine_noise = $("input[name='engine_noise']:checked").val();
                    if (engine_noise === "true") {
                        engine_noise = true;
                    }
                    if (engine_noise === "false") {
                        engine_noise = false
                    }
                    var engine_noise_reason = $("#engine_noise_reason").val();
                    var transmission_noise = $("input[name='transmission_noise']:checked").val();
                    if (transmission_noise === "true") {
                        transmission_noise = true;
                    }
                    if (transmission_noise === "false") {
                        transmission_noise = false
                    }
                    var transmission_noise_reason = $("#transmission_noise_reason").val();
                    var brake_efficiency = $("input[name='brake_efficiency']:checked").val();
                    if (brake_efficiency === "true") {
                        brake_efficiency = true;
                    }
                    if (brake_efficiency === "false") {
                        brake_efficiency = false
                    }
                    var brake_efficiency_reason = $("#brake_efficiency_reason").val();
                    var gear_shifting = $("input[name='gear_shifting']:checked").val();
                    if (gear_shifting === "true") {
                        gear_shifting = true;
                    }
                    if (gear_shifting === "false") {
                        gear_shifting = false
                    }
                    var gear_shifting_reason = $("#gear_shifting_reason").val();
                    var suspension_noise = $("input[name='suspension_noise']:checked").val();
                    if (suspension_noise === "true") {
                        suspension_noise = true;
                    }
                    if (suspension_noise === "false") {
                        suspension_noise = false
                    }
                    var suspension_noise_reason = $("#suspension_noise_reason").val();
                    var vehicle_vibration = $("input[name='vehicle_vibration']:checked").val();
                    if (vehicle_vibration === "true") {
                        vehicle_vibration = true;
                    }
                    if (vehicle_vibration === "false") {
                        vehicle_vibration = false
                    }
                    var vehicle_vibration_reason = $("#vehicle_vibration_reason").val();
                    var criteria = $("input[name='criteria']:checked").val();
                    if (criteria === "true") {
                        criteria = true;
                    }
                    if (criteria === "false") {
                        criteria = false
                    }
                    var checksheet_additional_remarks = $("#checksheet_additional_remarks").val();
                    var eval_comp_comments = $("#eval_comp_comments").val();
    
                    var checksheet = [
                        { "name": "start_stop_button", "yes_no_value": start_stop_button, "reason": start_stop_button_reason },
                        { "name": "instrumental_cluster", "yes_no_value": instrumental_cluster, "reason": instrumental_cluster_reason },
                        { "name": "multi_media_screen", "yes_no_value": multi_media_screen, "reason": multi_media_screen_reason },
                        { "name": "pw_switches_function", "yes_no_value": pw_switches_function, "reason": pw_switches_function_reason },
                        { "name": "speakers", "yes_no_value": speakers, "reason": speakers_reason },
                        { "name": "mirror_lense_adjt_knob_switch", "yes_no_value": mirror_lense_adjt_knob_switch, "reason": mirror_lense_adjt_knob_switch_reason },
                        { "name": "center_console_buttons", "yes_no_value": center_console_buttons, "reason": center_console_buttons_reason },
                        { "name": "parking_brake_switch", "yes_no_value": parking_brake_switch, "reason": parking_brake_switch_reason },
                        { "name": "ac_system", "yes_no_value": ac_system, "reason": ac_system_reason },
                        { "name": "seat_adjt_mem_front_rear", "yes_no_value": seat_adjt_mem_front_rear, "reason": seat_adjt_mem_front_rear_reason },
                        { "name": "safety_seat_belt", "yes_no_value": safety_seat_belt, "reason": safety_seat_belt_reason },
                        { "name": "sunroof", "yes_no_value": sunroof, "reason": sunroof_reason },
                        { "name": "rear_sun_blinder", "yes_no_value": rear_sun_blinder, "reason": rear_sun_blinder_reason },
                        { "name": "combination_switch", "yes_no_value": combination_switch, "reason": combination_switch_reason },
                        { "name": "air_suspension_operation", "yes_no_value": air_suspension_operation, "reason": air_suspension_operation_reason },
                        { "name": "reverse_camera", "yes_no_value": reverse_camera, "reason": reverse_camera_reason },
                        { "name": "parking_sensors", "yes_no_value": parking_sensors, "reason": parking_sensors_reason },
                        { "name": "boot_shock_absorber", "yes_no_value": boot_shock_absorber, "reason": boot_shock_absorber_reason },
                        { "name": "coolant", "yes_no_value": coolant, "reason": coolant_reason },
                        { "name": "oil_leakage", "yes_no_value": oil_leakage, "reason": oil_leakage_reason },
                        { "name": "pully_noise", "yes_no_value": pully_noise, "reason": pully_noise_reason },
                        { "name": "cooling_fan", "yes_no_value": cooling_fan, "reason": cooling_fan_reason },
                        { "name": "axle_boot", "yes_no_value": axle_boot, "reason": axle_boot_reason },
                        { "name": "steering_rack_boot", "yes_no_value": steering_rack_boot, "reason": steering_rack_boot_reason },
                        { "name": "wiring_harness", "yes_no_value": wiring_harness, "reason": wiring_harness_reason },
                        { "name": "head_lighter_washer_jet", "yes_no_value": head_lighter_washer_jet, "reason": head_lighter_washer_jet_reason },
                        { "name": "fuel_leakage", "yes_no_value": fuel_leakage, "reason": fuel_leakage_reason },
                        { "name": "door_central_locking", "yes_no_value": door_central_locking, "reason": door_central_locking_reason },
                        { "name": "rear_boot_lock_functioning", "yes_no_value": rear_boot_lock_functioning, "reason": rear_boot_lock_functioning_reason },
                        { "name": "fuel_lid_actuator", "yes_no_value": fuel_lid_actuator, "reason": fuel_lid_actuator_reason },
                        { "name": "vehicle_jerking", "yes_no_value": vehicle_jerking, "reason": vehicle_jerking_reason },
                        { "name": "steering_noise", "yes_no_value": steering_noise, "reason": steering_noise_reason },
                        { "name": "exhause_smoke", "yes_no_value": exhause_smoke, "reason": exhause_smoke_reason },
                        { "name": "engine_noise", "yes_no_value": engine_noise, "reason": engine_noise_reason },
                        { "name": "transmission_noise", "yes_no_value": transmission_noise, "reason": transmission_noise_reason },
                        { "name": "brake_efficiency", "yes_no_value": brake_efficiency, "reason": brake_efficiency_reason },
                        { "name": "gear_shifting", "yes_no_value": gear_shifting, "reason": gear_shifting_reason },
                        { "name": "suspension_noise", "yes_no_value": suspension_noise, "reason": suspension_noise_reason },
                        { "name": "vehicle_vibration", "yes_no_value": vehicle_vibration, "reason": vehicle_vibration_reason },
                    ]
                    console.log(checksheet);
                    // console.log(select_address)
                    lead_owner = localStorage.getItem('username').replace(/"/g, "");
                    // var edit_lead_car_current_km = $("#edit_lead_car_current_km").val();
                    // var edit_lead_vin_number = $("#edit_lead_vin_number").val();
    
                    var eval_comp_data = {
                        "id": lead_id,
                        "checksheet": checksheet,
                        "checksheet_additional_remarks": checksheet_additional_remarks,
                        "criteria": criteria,
                        "evaluation_completed_comments": eval_comp_comments,
                        "stage": "Evaluation Completed",
                        // "car_data_current_km": edit_lead_car_current_km,
                        // "car_data_vin": edit_lead_vin_number,
                    }
                    console.log(eval_comp_data);
                    $.ajax({
                        url: baseURL + '/update_lead',
                        type: 'POST',
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(eval_comp_data),
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', 'Token ' + token);
                        },
                        success: function (data) {
                            console.log(data)
                            if (data.Status == false && data.Message == "VIN number and current km required") {
                                // loader_hide();
                                Materialize.toast('VIN number and current km required', 4000, 'red');
                                // $(".show_vehicle_info_on_eval_comp").show();
                            }
                            else{
                                Materialize.toast('Evaluation Completed successfully', 4000, 'green');
                                // loader_hide();
                                page_reload();
                            }
                            
                            // alert("Evaluation Completed successfully")
                            // window.location.reload();
                        },
                        error: function (jqXhr, textStatus, errorThrown) {
                            // loader_hide();
                            error_popup();
                            console.log(jqXhr);
                            console.log(textStatus);
                            console.log(errorThrown);
                        },
                        // complete: function() {
    
                        // },
                    });
                return false;
            });
        });
    }


    function uploadAttachment(lead_id, name, file, attach_type) {
        var baseURL = localStorage.getItem('baseURL');
        ////////continue your code
        var token = localStorage.getItem('token').replace(/"/g, "");
        var name = name
        // var file = upload_vehicle_registration
        var form_data = new FormData();

        form_data.append("file", file);
        form_data.append("lead_id", lead_id);
        form_data.append("name", name);
        form_data.append("attach_type", attach_type);
        form_data.append("group", "eval_completed_attachment");

        console.log(form_data);
        $.ajax({
            url: baseURL + '/upload_attachment',
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            mimeType: 'multipart/form-data',
            //  headers: function ( xhr ) {
            //     xhr.setRequestHeader('Authorization', 'Token '+token);
            // },
            data: form_data,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            success: function (data) {
                console.log("DATA POSTED SUCCESSFULLY");
                console.log(data)
                data = JSON.parse(data)

            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        });
        // }
        return false;
    }

    $('.upload_vehicle_registration').change(function () {
        Materialize.toast('A file has been selected.', 4000, 'green')
        // gej lead_id, name, file
        name = $(this).data("name")
        attach_type = $(this).data("attachtype")
        file = $(this).prop('files')[0]
        lead_id = $("#edit_lead_id").val();
        uploadAttachment(lead_id, name, file, attach_type)
    });


    // GET Today Evaluations
    var today_eval_list_current_page= localStorage.getItem('today_eval_list_current_page');
    if (today_eval_list_current_page == null) {
    today_eval_list_current_page = 1;
   }
localStorage.setItem('today_eval_list_current_page', today_eval_list_current_page)
today_eval(today_eval_list_current_page);
function today_eval(today_eval_list_current_page){
    $.ajax({
        url: baseURL + '/eval_lists?viewby=today&page='+today_eval_list_current_page,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            // console.log("TODAY EVALUATIONS DATA");
            // console.log(data)
            $("#today_evaluation_list").empty();
            data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
            var today_eval_count = data.pagination.total_items;
            $(".today_eval_count").html(today_eval_count);
            $.each(data.Evaluations, function () {
                $("#today_evaluation_list").append("<tr role='row' class='topborder'> <td role='cell'> <div class='table_show_on_mobile'>Id</div> <strong><a  onclick='today_lead_view(" + this.lead.id + ","+today_eval_list_current_page+")' title='Click to view' class='name_style'>" + this.lead.id + "</a></strong> </td><td role='cell'><div class='table_show_on_mobile'><strong>Client</strong></div><p>" + this.lead.contact.first_name + " " + this.lead.contact.last_name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Car</strong></div><p>" + this.lead.car_data.make.name + "</p><p>" + this.lead.car_data.model.name + "</p><p>" + this.lead.car_data.variant.name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Stage</strong></div><span class='stage-style'>" + this.lead.stage.name + "</span></td><td role='cell'> <div class='table_show_on_mobile'><strong>Scheduled Date</strong></div> " + this.date + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Time</strong></div> " + this.time_interval + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Address</strong></div> " + this.meeting_address + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Asigned To</strong></div> " + this.assigned_to.username + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Created by</strong></div> " + this.created_by.username + " </td> <td role='cell'></td> </tr>");
            });
            today_total_pages = data.pagination.total_pages;
            var today_btn_next = document.getElementById("today_btn_next");
            var today_btn_prev = document.getElementById("today_btn_prev");
            var today_page_span = document.getElementById("today_page");
    
            // Validate page
            if (today_eval_list_current_page < 1) today_eval_list_current_page = 1;
            if (today_eval_list_current_page >today_total_pages) today_eval_list_current_page = today_total_pages;
            if(today_page_span!==null)
            today_page_span.innerText = today_eval_list_current_page + "/" + data.pagination.total_pages;
            
    if(today_btn_prev!==null){
            if (today_eval_list_current_page == 1) {
                today_btn_prev.style.visibility = "hidden";
            } else {
                today_btn_prev.style.visibility = "visible";
            }
        }
        if(today_btn_next!==null){
            if (today_eval_list_current_page == today_total_pages) {
                today_btn_next.style.visibility = "hidden";
            } else {
                today_btn_next.style.visibility = "visible";
            }
    
            if (today_total_pages == 1) {
                today_btn_next.style.visibility = "hidden";
            }
        }
    loader_hide();
            },
    
        });
    }
    // GET Pending Evaluations
    var pending_eval_list_current_page= localStorage.getItem('pending_eval_list_current_page');
    if (pending_eval_list_current_page == null) {
        pending_eval_list_current_page = 1;
    }
    localStorage.setItem('pending_eval_list_current_page', pending_eval_list_current_page)
    pending_eval(pending_eval_list_current_page);
    function pending_eval(pending_eval_list_current_page){
        $.ajax({
            url: baseURL + '/eval_lists?viewby=pending&page='+pending_eval_list_current_page,
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            success: function (data) {
    
                // console.log("PENDING EVALUATIONS DATA");
                // console.log(data)
                $("#pending_evaluation_list").empty();
                data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
                var pending_eval_count = data.pagination.total_items;
                $(".pending_eval_count").html(pending_eval_count);
                $.each(data.Evaluations, function () {
                    $("#pending_evaluation_list").append("<tr role='row' class='topborder'> <td role='cell'> <div class='table_show_on_mobile'>Id</div> <strong><a  onclick='pending_lead_view(" + this.lead.id + ","+pending_eval_list_current_page+")' title='Click to view' class='name_style'>" + this.lead.id + "</a></strong> </td><td role='cell'><div class='table_show_on_mobile'><strong>Client</strong></div><p>" + this.lead.contact.first_name + " " + this.lead.contact.last_name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Car</strong></div><p>" + this.lead.car_data.make.name + "</p><p>" + this.lead.car_data.model.name + "</p><p>" + this.lead.car_data.variant.name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Stage</strong></div><span class='stage-style'>" + this.lead.stage.name + "</span></td><td role='cell'> <div class='table_show_on_mobile'><strong>Scheduled Date</strong></div> " + this.date + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Time</strong></div> " + this.time_interval + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Address</strong></div> " + this.meeting_address + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Asigned To</strong></div> " + this.assigned_to.username + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Created by</strong></div> " + this.created_by.username + " </td> <td role='cell'></td> </tr>");
                });
                pending_total_pages = data.pagination.total_pages;
                var pending_btn_next = document.getElementById("pending_btn_next");
                var pending_btn_prev = document.getElementById("pending_btn_prev");
                var pending_page_span = document.getElementById("pending_page");
        
                // Validate page
                if (pending_eval_list_current_page < 1) pending_eval_list_current_page = 1;
                if (pending_eval_list_current_page >pending_total_pages) pending_eval_list_current_page = pending_total_pages;
                if(pending_page_span!==null)
             pending_page_span.innerText = pending_eval_list_current_page + "/" + data.pagination.total_pages;
          if(pending_btn_prev!==null){
                if (pending_eval_list_current_page == 1) {
                    pending_btn_prev.style.visibility = "hidden";
                } else {
                    pending_btn_prev.style.visibility = "visible";
                }
            }
            if(pending_btn_next!==null){
                if (pending_eval_list_current_page == pending_total_pages) {
                   pending_btn_next.style.visibility = "hidden";
                } else {
                    pending_btn_next.style.visibility = "visible";
                }
        
                if (pending_total_pages == 1) {
                    pending_btn_next.style.visibility = "hidden";
                }
            }
        loader_hide();
         
                },
        
            });
        
    
    }
    // GET Future Evaluations
    var future_eval_list_current_page= localStorage.getItem('future_eval_list_current_page');
    if (future_eval_list_current_page == null) {
        future_eval_list_current_page = 1;
    }
    localStorage.setItem('future_eval_list_current_page', future_eval_list_current_page)
    future_eval(future_eval_list_current_page);
    function future_eval(future_eval_list_current_page){
    $.ajax({
        url: baseURL + '/eval_lists?viewby=future&page='+future_eval_list_current_page,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            $("#future_evaluation_list").empty();
            // console.log("FUTURE EVALUATIONS DATA");
            // console.log(data)
            data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
            var future_eval_count = data.pagination.total_items
            console.log(future_eval_count)
            $(".future_eval_count").html(future_eval_count);
            $.each(data.Evaluations, function () {
                $("#future_evaluation_list").append("<tr role='row' class='topborder'> <td role='cell'> <div class='table_show_on_mobile'>Id</div> <strong><a  onclick='future_lead_view(" + this.lead.id + ","+future_eval_list_current_page+")' title='Click to view' class='name_style'>" + this.lead.id + "</a></strong> </td><td role='cell'><div class='table_show_on_mobile'><strong>Client</strong></div><p>" + this.lead.contact.first_name + " " + this.lead.contact.last_name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Car</strong></div><p>" + this.lead.car_data.make.name + "</p><p>" + this.lead.car_data.model.name + "</p><p>" + this.lead.car_data.variant.name + "</p></td><td role='cell'><div class='table_show_on_mobile'><strong>Stage</strong></div><span class='stage-style'>" + this.lead.stage.name + "</span></td><td role='cell'> <div class='table_show_on_mobile'><strong>Scheduled Date</strong></div> " + this.date + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Time</strong></div> " + this.time_interval + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Address</strong></div> " + this.meeting_address + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Asigned To</strong></div> " + this.assigned_to.username + " </td> <td role='cell'> <div class='table_show_on_mobile'><strong>Created by</strong></div> " + this.created_by.username + " </td> <td role='cell'></td> </tr>");
            });
            future_total_pages = data.pagination.total_pages;
            var future_btn_next = document.getElementById("future_btn_next");
            var future_btn_prev = document.getElementById("future_btn_prev");
            var future_page_span = document.getElementById("future_page");
    
            // Validate page
            if (future_eval_list_current_page < 1) future_eval_list_current_page = 1;
            if (future_eval_list_current_page >future_total_pages) future_eval_list_current_page = future_total_pages;
            if(future_page_span!==null)
          future_page_span.innerText = future_eval_list_current_page + "/" + data.pagination.total_pages;
           if(future_btn_prev!==null){
            if (future_eval_list_current_page == 1) {
                future_btn_prev.style.visibility = "hidden";
            } else {
                future_btn_prev.style.visibility = "visible";
            }
        }
        if(future_btn_next!==null){
            if (future_eval_list_current_page == future_total_pages) {
               future_btn_next.style.visibility = "hidden";
            } else {
                future_btn_next.style.visibility = "visible";
            }
        
            if (future_total_pages == 1) {
                future_btn_next.style.visibility = "hidden";
            }
        }
              loader_hide();  
            },
    
        });
    }