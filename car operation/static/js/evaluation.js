var baseURL = localStorage.getItem('baseURL');
var token = localStorage.getItem('token').replace(/"/g, "");

function lead_view(lead_id,eval_tracker_current_page) {
    // localStorage.setItem('lead_id', lead_id)
    localStorage.setItem('eval_tracker_current_page', 
    eval_tracker_current_page)
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

function page_reload(){
    setTimeout(function(){window.location.reload();},1000);
}
var total_pages= null;
function prevPage(){
    loader_show();
    //  page_reload()
      var eval_tracker_current_page = localStorage.getItem('eval_tracker_current_page');
      if (eval_tracker_current_page > 1) {
          eval_tracker_current_page--;   
      }
      localStorage.setItem('eval_tracker_current_page', eval_tracker_current_page)
      ALLEvalTracker(eval_tracker_current_page);
   }
  function nextPage(){  
    loader_show();
      console.log(total_pages);
      var eval_tracker_current_page = localStorage.getItem('eval_tracker_current_page');
      if (eval_tracker_current_page < total_pages) {
          eval_tracker_current_page++;
      }
      localStorage.setItem('eval_tracker_current_page', eval_tracker_current_page);
      console.log(total_pages)
      ALLEvalTracker(eval_tracker_current_page);
  }

loader_show()
    // GET EVAL TRACKER
    var eval_tracker_current_page= localStorage.getItem('eval_tracker_current_page');
    if (eval_tracker_current_page == null) {
        eval_tracker_current_page = 1;
    }
    localStorage.setItem('eval_tracker_current_page', eval_tracker_current_page)
    ALLEvalTracker(eval_tracker_current_page);
    function ALLEvalTracker(eval_tracker_current_page){
    $.ajax({
        url: baseURL + '/eval_lists?viewby=all&page='+eval_tracker_current_page,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            // console.log("ALL EVALUATIONS DATA");
            // console.log(data)
            $("#eval_tracker_list").empty();
            data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
            var tracker_eval_count = data.pagination.total_items;
            $(".tracker_eval_count").html(tracker_eval_count);
            $.each(data.Evaluations, function () {
                $("#eval_tracker_list").append("<tr role='row' class='topborder'> <td role='cell'> <div class='table_show_on_mobile'>Id</div> <strong><a  onclick='lead_view(" + this.lead.id + ","+eval_tracker_current_page+")' title='Click to view' class='name_style'>" + this.lead.id + "</a></strong> </td><td role='cell'> <div class='table_show_on_mobile'><strong>Scheduled Date</strong></div> " + this.date + " </td></td><td role='cell'><div class='table_show_on_mobile'><strong>Booked by</strong></div>" + this.created_by.username + "</td><td role='cell'><div class='table_show_on_mobile'><strong>Sales Executive</strong></div>" + this.lead.assigned_to.username + "</td><td role='cell'><div class='table_show_on_mobile'><strong>Client</strong></div><p>" + this.lead.contact.first_name + " " + this.lead.contact.last_name + "</p></td><td role='cell'> <div class='table_show_on_mobile'><strong>Location</strong></div> " + this.meeting_address + " </td><td role='cell'> <div class='table_show_on_mobile'><strong>Time</strong></div> " + this.time_interval + " </td><td role='cell'> <div class='table_show_on_mobile'><strong>Asigned To ASE</strong></div> " + this.lead.assigned_to_ase.username + " </td><td role='cell'><div class='table_show_on_mobile'><strong>Car</strong></div><p>" + this.lead.car_data.make.name + "</p><p>" + this.lead.car_data.model.name + "</p><p>" + this.lead.car_data.variant.name + "</p><td role='cell'> <div class='table_show_on_mobile'><strong>Remark</strong></div> " + this.remarks + " </td><td role='cell'></td> </tr>");
            });
            total_pages = data.pagination.total_pages;
            var btn_next = document.getElementById("btn_next");
            var btn_prev = document.getElementById("btn_prev");
            var page_span = document.getElementById("page");
    
            // Validate page
            if (eval_tracker_current_page < 1) eval_tracker_current_page = 1;
            if (eval_tracker_current_page >total_pages) eval_tracker_current_page = total_pages;
            if(page_span!==null)
            page_span.innerText = eval_tracker_current_page + "/" + data.pagination.total_pages;
            if(btn_prev!==null){
            if (eval_tracker_current_page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }
        }
        if(btn_next!==null){
            if (eval_tracker_current_page == total_pages) {
               btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }
    
            if (total_pages == 1) {
                btn_next.style.visibility = "hidden";
            }
        }
            loader_hide()
        },

    });
}