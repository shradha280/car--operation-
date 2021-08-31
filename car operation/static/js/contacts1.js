function contact_view(contact_id, contact_list_current_page) {
    // var contact_id = localStorage.getItem('contactId');
    // console.log(contact_id)
    localStorage.setItem('contact_id', contact_id)
    localStorage.setItem('contact_list_current_page', contact_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main1/edel-lms-fe-main/contacts-view.html?id='+ contact_id
    //location.href = location.origin + '/contacts-view.html?id=' + contact_id
}
function today_contact_view(contact_id, today_contact_list_current_page) {
    // var contact_id = localStorage.getItem('contactId');
    // console.log(contact_id)
    localStorage.setItem('contact_id', contact_id)
    localStorage.setItem('today_contact_list_current_page', today_contact_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main1/edel-lms-fe-main/contacts-view.html?id='+ contact_id
    //location.href = location.origin + '/contacts-view.html?id=' + contact_id
}
function pending_contact_view(contact_id, pending_contact_list_current_page) {
    // var contact_id = localStorage.getItem('contactId');
    // console.log(contact_id)
    localStorage.setItem('contact_id', contact_id)
    localStorage.setItem('pending_contact_list_current_page', pending_contact_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main1/edel-lms-fe-main/contacts-view.html?id='+ contact_id
    //location.href = location.origin + '/contacts-view.html?id=' + contact_id
}
function future_contact_view(contact_id, future_contact_list_current_page) {
    // var contact_id = localStorage.getItem('contactId');
    // console.log(contact_id)
    localStorage.setItem('contact_id', contact_id)
    localStorage.setItem('future_contact_list_current_page', future_contact_list_current_page)
    localStorage.removeItem('cpath')
    localStorage.setItem('cpath', location.href)
    location = 'file:///C:/Users/gshik/Downloads/edel-lms-fe-main1/edel-lms-fe-main/contacts-view.html?id='+ contact_id
    //location.href = location.origin + '/contacts-view.html?id=' + contact_id
}

function loader_hide() {
    $(".loader-wrapper").hide();
}

function loader_show() {
    $(".loader-wrapper").show();
}

function page_reload() {
    setTimeout(function () { window.location.reload(); }, 1000);
}

function error_popup() {
    var success_error = jqXhr.responseText
    Materialize.toast(success_error, 4000, 'red');
}

var baseURL = localStorage.getItem('baseURL');
var token = localStorage.getItem('token').replace(/"/g, "");

var ulocation = localStorage.getItem('ulocation');
console.log(ulocation);
$("#clear_filter").css("display", "none");
var total_pages = null;
function prevPage() {
    var contact_list_current_page = localStorage.getItem('contact_list_current_page');
    if (contact_list_current_page > 1) {
        contact_list_current_page--;
    }
    localStorage.setItem('contact_list_current_page', contact_list_current_page)
    var contact_filter_string = localStorage.getItem('contact_filter_string')
    getALLContact(contact_filter_string, contact_list_current_page);
}
function nextPage() {
   
    console.log(total_pages);
    var contact_list_current_page = localStorage.getItem('contact_list_current_page');

    if (contact_list_current_page < total_pages) {
        contact_list_current_page++;
    }
    localStorage.setItem('contact_list_current_page', contact_list_current_page);
    var contact_filter_string = localStorage.getItem('contact_filter_string');
    console.log(total_pages)
    getALLContact(contact_filter_string, contact_list_current_page);

}
var today_total_pages=null;
function todayprevPage() {
    var today_contact_list_current_page = localStorage.getItem('today_contact_list_current_page');
    if (today_contact_list_current_page > 1) {
        today_contact_list_current_page--;
    }
    localStorage.setItem('today_contact_list_current_page', today_contact_list_current_page);
    today_contact(today_contact_list_current_page);
}
function todaynextPage() {
    console.log(today_total_pages);
    var today_contact_list_current_page = localStorage.getItem('today_contact_list_current_page');

    if (today_contact_list_current_page < today_total_pages) {
        today_contact_list_current_page++;
    }
    localStorage.setItem('today_contact_list_current_page', today_contact_list_current_page);
    
    console.log(today_total_pages)
    today_contact(today_contact_list_current_page);
}

var pending_total_pages=null;
function pendingprevPage() {
    var pending_contact_list_current_page = localStorage.getItem('pending_contact_list_current_page');
    if (pending_contact_list_current_page > 1) {
        pending_contact_list_current_page--;
    }
    localStorage.setItem('pending_contact_list_current_page', pending_contact_list_current_page);
    pending_contact(pending_contact_list_current_page);
}
function pendingnextPage() {
    console.log(pending_total_pages);
    var pending_contact_list_current_page = localStorage.getItem('pending_contact_list_current_page');

    if (pending_contact_list_current_page < pending_total_pages) {
      pending_contact_list_current_page++;
    }
    localStorage.setItem('pending_contact_list_current_page', pending_contact_list_current_page);
    
    console.log(pending_total_pages)
   pending_contact(pending_contact_list_current_page);
}
var future_total_pages=null;
function futureprevPage() {
   
    var future_contact_list_current_page = localStorage.getItem('future_contact_list_current_page');
    if (future_contact_list_current_page > 1) {
        future_contact_list_current_page--;
    }
    localStorage.setItem('future_contact_list_current_page', future_contact_list_current_page);
    future_contact(future_contact_list_current_page);
    
}
function futurenextPage() {
    console.log(future_total_pages);
    var future_contact_list_current_page = localStorage.getItem('future_contact_list_current_page');

    if (future_contact_list_current_page < future_total_pages) {
        future_contact_list_current_page++;
    }
    localStorage.setItem('future_contact_list_current_page', future_contact_list_current_page);
    
    console.log(future_total_pages)
    future_contact(future_contact_list_current_page);
}
function filter() {
    var filter_first_name = $("#filter_first_name").val();
    var filter_last_name = $("#filter_last_name").val();
    var filter_email_id = $("#filter_email_id").val();
    var filter_company_name = $("#filter_company_name").val();
    var filter_mobile_number = $("#filter_mobile_number").val();
    var filter_contact_status = $("#filter_contact_status").val();
    var filter_from_created_date = $("#filter_from_created_date").val();
    var filter_to_created_date = $("#filter_to_created_date").val();
    var filter_data = {}
    var filter_str = '?source='
    if (filter_first_name.length > 0) { filter_str += '&first_name=' + filter_first_name }
    if (filter_last_name.length > 0) { filter_str += '&last_name=' + filter_last_name }
    if (filter_email_id.length > 0) { filter_str += '&email=' + filter_email_id }
    if (filter_company_name.length > 0) { filter_str += '&company_name=' + filter_company_name }
    if (filter_mobile_number.length > 0) { filter_str += '&mobile_number=' + filter_mobile_number }
    if (filter_contact_status.length > 0) { filter_str += '&contact_status=' + filter_contact_status }
    if (filter_from_created_date.length > 0) { filter_str += '&from_date=' + filter_from_created_date }
    if (filter_to_created_date.length > 0) { filter_str += '&to_date=' + filter_to_created_date }
    filter_data.source = ''
    return filter_str;
}
$("#filtercontactform").submit(function (e) {
    page_reload();
    //e.preventDefault()
    var contact_filter_string = filter();
    localStorage.setItem('contact_filter_string', contact_filter_string);
    console.log(contact_filter_string)
    localStorage.setItem('contact_list_current_page', 1);
    getALLContact(contact_filter_string, 1);
    $("#sidenav-overlay").hide();
    document.getElementById('clear_filter').style.display = '';

});


function add_contacts_to_table(data) {
    loader_hide();
    var all_contact_count = data.pagination.total_items;
    // var current_page = parseInt(data.pagination.current_page);
    //localStorage.setItem('current_page',current_page);
    var contact_list_current_page = localStorage.getItem('contact_list_current_page');
    $(".contact_count").html(all_contact_count);
    // localStorage.setItem('read_contact_id',JSON.stringify(data.contacts.id))
    $("#all_contact_data").empty();
    $.each(data.contacts, function () {
        $("#all_contact_data").append("<tr role='row' class='topborder'><td width='5%' role='cell'><div class='table_show_on_mobile'><strong>Id</strong></div>" + this.id + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Created Date</strong></div>" + this.created_date.split('T')[0] + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>First Name</strong></div><p class='name_style'><a onclick='contact_view(" + this.id + "," + contact_list_current_page + ")' title='Click to view'>" + this.first_name + "</a></p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Last Name</strong></div><p>" + this.last_name + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Mobile Number</strong></div><span>" + this.contact_phone_number.primary_number + "</span></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Email Id</strong></div><p>" + this.primary_email_id + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Contact Status</strong></div><p>" + this.status + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Next Follow-up Date</strong></div><p>" + this.updated_next_followup_date + "</p></td><td width='5%' role='cell'><a href='javascript:void(0);'class='waves-effect waves-block waves-light profile-button threedotsmob right' data-activates='moreoption-dropdown__" + this.id + "'><i class='material-icons more_vert_mob right'>more_vert</i></a><ul id='moreoption-dropdown__" + this.id + "' class='dropdown-content'><li><a href='#' class='grey-text text-darken-1 chat-collapse openEditCustomerForm' data-activates='editcontactform-slide-out' data-id=\"" + this.id + "\"><i class='material-icons'>edit</i> Edit Info</a></li><li><a href='#' class='grey-text text-darken-1 chat-collapse accountfollowUpForm' data-activates='contactfollowup-slide-out' data-id=\"" + this.id + "\"><i class='material-icons'>contact_phone</i>Add Follow-Up</a></li><li><a href='#' class='grey-text text-darken-1 chat-collapse sendproposalform' data-activates='sendproposalform-slide-out' data-id=\"" + this.id + "\"><i class='material-icons'>send</i>Send Proposal</a></li></ul></td></tr>");
        // $('.dropdown-content').dropdown();

    });
    $('.threedotsmob').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        click: true, // Activate on click
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });
    $('.chat-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
    });
    attach_contact_edit_event();
    create_contact_followup();
    edel_proposal_attach();
}

function attach_contact_edit_event() {
    $(".openEditCustomerForm").click(function () {
        var contact_id = $(this).data("id");

        $(".contact_id").html(contact_id);

        $.ajax({
            url: baseURL + '/read_contact?id=' + contact_id,
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            success: function (data) {
                console.log("READ DATA");
                console.log(data)

                append_contact_read_data = data
                $("#edit_customer_type").val(append_contact_read_data.Contact.type);
                $("#edit_customer_title").val(append_contact_read_data.Contact.title);
                $("#edit_first_name").val(append_contact_read_data.Contact.first_name);
                $("#edit_last_name").val(append_contact_read_data.Contact.last_name);
                $("#edit_company_name").val(append_contact_read_data.Contact.company_name);
                $("#edit_mobile_number").val(append_contact_read_data.Contact.contact_phone_number.primary_number);
                $("#edit_email_id").val(append_contact_read_data.Contact.primary_email_id);
                $("#edit_second_email").val(append_contact_read_data.Contact.secondary_email_id);

                // $("#edit_home_address_type").val(append_contact_read_data.Contact.contact_address.address_type);
                $("#edit_home_address").val(append_contact_read_data.Contact.contact_address.company_address);
                $("#edit_home_street").val(append_contact_read_data.Contact.contact_address.street);
                $("#edit_home_city").val(append_contact_read_data.Contact.contact_address.city.name);
                $("#edit_home_area").val(append_contact_read_data.Contact.contact_address.city_location.name);
                $("#edit_home_zipcode").val(append_contact_read_data.Contact.contact_address.pincode);
                $("#edit_home_state").val(append_contact_read_data.Contact.contact_address.state.name);
                $("#edit_home_country").val(append_contact_read_data.Contact.contact_address.country.name);

                // $("#edit_office_address_type").val(append_contact_read_data.Contact.contact_work_address.address_type);
                $("#edit_office_address").val(append_contact_read_data.Contact.contact_work_address.company_address);
                $("#edit_office_street").val(append_contact_read_data.Contact.contact_work_address.street);
                $("#edit_office_city").val(append_contact_read_data.Contact.contact_work_address.city.name);
                $("#edit_office_area").val(append_contact_read_data.Contact.contact_work_address.city_location.name);
                $("#edit_office_zipcode").val(append_contact_read_data.Contact.contact_work_address.pincode);
                $("#edit_office_state").val(append_contact_read_data.Contact.contact_work_address.state.name);
                $("#edit_office_country").val(append_contact_read_data.Contact.contact_work_address.country.name);

                // $("#edit_other_address_type").val(append_contact_read_data.Contact.contact_other_address.address_type);
                $("#edit_other_address").val(append_contact_read_data.Contact.contact_other_address.company_address);
                $("#edit_other_street").val(append_contact_read_data.Contact.contact_other_address.street);
                $("#edit_other_city").val(append_contact_read_data.Contact.contact_other_address.city.name);
                $("#edit_other_area").val(append_contact_read_data.Contact.contact_other_address.city_location.name);
                $("#edit_other_zipcode").val(append_contact_read_data.Contact.contact_other_address.pincode);
                $("#edit_other_state").val(append_contact_read_data.Contact.contact_other_address.state.name);
                $("#edit_other_country").val(append_contact_read_data.Contact.contact_other_address.country.name);

                $("#edit_contact_remark").val(append_contact_read_data.Contact.remark.remark);
                $("#edit_location").val(ulocation);
                $("#edit_customer_type").val(append_contact_read_data.Contact.contact_type);
                $("#edit_contact_status").val(append_contact_read_data.Contact.status);
                $("#edit_contact_notinterested").val(append_contact_read_data.Contact.close_reason);
                $("#edit_contact_outofcriteria").val(append_contact_read_data.Contact.close_comment);
            },
        });
    });
}

//$(document).ready(function () {
$("#clear_filter").on('click', function () {
    localStorage.removeItem("contact_list_current_page");
    localStorage.removeItem("contact_filter_string");
});

var contact_list_current_page = localStorage.getItem('contact_list_current_page')
if (contact_list_current_page == null) {
    contact_list_current_page = 1;
}
localStorage.setItem('contact_list_current_page', contact_list_current_page)
var contact_filter_string = localStorage.getItem('contact_filter_string');
if (contact_filter_string == null) {
    contact_filter_string = '?source=';
}
if (contact_filter_string != '?source=') {
    document.getElementById('clear_filter').style.display = '';
}
localStorage.setItem('contact_filter_string', contact_filter_string);
var baseURL = localStorage.getItem('baseURL');
var token = localStorage.getItem('token').replace(/"/g, "");
// GET All CONTACTS
getALLContact(contact_filter_string, contact_list_current_page);

function getALLContact(contact_filter_string, contact_list_current_page) {
    loader_show();
    $.ajax({
        url: baseURL + '/contact/getall' + contact_filter_string + '&page=' + contact_list_current_page,
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Token ' + token);
        },
        success: function (data) {
            console.log(data)
            data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
            add_contacts_to_table(data);
            total_pages = data.pagination.total_pages
            var btn_next = document.getElementById("btn_next");
            var btn_prev = document.getElementById("btn_prev");
            var page_span = document.getElementById("page");

            // Validate page
            if (contact_list_current_page < 1) contact_list_current_page = 1;
            if (contact_list_current_page > total_pages) contact_list_current_page = total_pages;
            page_span.innerHTML = contact_list_current_page + "/" + data.pagination.total_pages;

            if (contact_list_current_page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }

            if (contact_list_current_page == total_pages) {
                btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }

            if (total_pages == 1) {
                btn_next.style.visibility = "hidden";
            }
        }

    });

}

loader_hide();
$("#location").val(ulocation);
$(".user_location").html(ulocation);
$("#createcontact").submit(function (e) {
    e.preventDefault()
    loader_show();
    ////////continue your code
    // #customer_type,#customer_title,#first_name,#last_name,#mobile_number,#primary_email_id,#location
    if ($("#customer_type,#customer_title,#first_name,#last_name,#mobile_number,#primary_email_id").val().length > 0) {
        var customer_type = $("#customer_type").val();
        var customer_title = $("#customer_title").val();
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var company_name = $("#company_name").val();
        var mobile_number = $("#mobile_number").val();
        var primary_email_id = $("#primary_email_id").val();
        var secodary_email_id = $("#secodary_email_id").val();

        // var home_address_type = $("#home_address_type").val();
        var home_address = $("#home_address").val();
        var home_street = $("#home_street").val();
        var home_city = $("#home_city").val();
        var home_area = $("#home_area").val();
        var home_zipcode = $("#home_zipcode").val();
        var home_state = $("#home_state").val();
        var home_country = $("#home_country").val();

        // var office_address_type = $("#office_address_type").val();
        var office_address = $("#office_address").val();
        var office_street = $("#office_street").val();
        var office_city = $("#office_city").val();
        var office_area = $("#office_area").val();
        var office_zipcode = $("#office_zipcode").val();
        var office_state = $("#office_state").val();
        var office_country = $("#office_country").val();

        // var other_address_type = $("#other_address_type").val();
        var other_address = $("#other_address").val();
        var other_street = $("#other_street").val();
        var other_city = $("#other_city").val();
        var other_area = $("#other_area").val();
        var other_zipcode = $("#other_zipcode").val();
        var other_state = $("#other_state").val();
        var other_country = $("#other_country").val();

        var remark = $("#contact_remark").val();
        var location = $("#location").val();
        var status = $("#contact_status").val();
        var contact_today_date = $("#contact_today_date").val();
        // console.log(contact_today_date)
        var contact_nfd_date = $("#contact_nfd_date").val();
        var contact_notinterested = $("#contact_notinterested").val();
        var contact_outofcriteria = $("#contact_outofcriteria").val();

        var contact_owner = localStorage.getItem('username').replace(/"/g, "");
        var create_contact_data = {
            "Contact": {
                "first_name": first_name,
                "last_name": last_name,
                "contact_address": {
                    "address_type": "Home",
                    "street": home_street,
                    "company_address": home_address,
                    "city": home_city,
                    "location": home_area,
                    "state": home_state,
                    "country": home_country,
                    "pincode": home_zipcode
                },
                "contact_phone_number": {
                    "primary_number": mobile_number,
                },
                "primary_email_id": primary_email_id,
                "remark": {
                    "created_by": contact_owner,
                    "remark": remark
                },
                "title": customer_title,
                "status": status,
                "assigned_to": {
                    "username": contact_owner,
                },
                "close_reason": contact_notinterested,
                "close_comment": contact_outofcriteria,
                "anniversary_date": contact_today_date,
                "updated_next_followup_date": contact_nfd_date,
                "company_name": company_name,
                "secondary_email_id": secodary_email_id,
                "location": location,
                "contact_work_address": {
                    "address_type": "Office",
                    "street": office_street,
                    "company_address": office_address,
                    "city": office_city,
                    "location": office_area,
                    "state": office_state,
                    "country": office_country,
                    "pincode": office_zipcode
                },
                "contact_other_address": {
                    "address_type": "Other",
                    "street": other_street,
                    "company_address": other_address,
                    "city": other_city,
                    "location": other_area,
                    "state": other_state,
                    "country": other_country,
                    "pincode": other_zipcode
                },
                "contact_type": customer_type
            }
        }
        console.log(create_contact_data);
        $.ajax({
            url: baseURL + '/create_contact',
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(create_contact_data).replace(/\:null/gi, "\:\"\""),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            success: function (data) {
                console.log("DATA POSTED SUCCESSFULLY");
                console.log(data)
                // data = JSON.parse(data)
                loader_hide();
                Materialize.toast('Contact Created successfully', 4000, 'green');
                page_reload();
                // alert("Contact Created successfully")
                // window.location.reload();
            },
            error: function (jqXhr, textStatus, errorThrown) {
                loader_hide();
                error_popup();
                console.log(errorThrown);
            },
            // complete: function() {

            // },
        });
    } else {

    }
    return false;
});

// GET READ CONTACT
// var contact_id = JSON.parse(localStorage.getItem('contactId'));
// console.log(contact_id)


// Edit Contact
// var append_contact_read_data = JSON.parse(localStorage.getItem('readcontactdata'));
// console.log(append_contact_read_data)


// Update Contact
$("#updatecontactform").submit(function (e) {
    e.preventDefault()
    loader_show();
    ////////continue your code
    if ($("#edit_customer_type,#edit_customer_title,#edit_first_name,#edit_last_name,#edit_mobile_number,#edit_email_id,#edit_location").val().length > 0) {
        var contact_id = append_contact_read_data.Contact.id
        var edit_customer_type = $("#edit_customer_type").val();
        var edit_customer_title = $("#edit_customer_title").val();
        var edit_first_name = $("#edit_first_name").val();
        var edit_last_name = $("#edit_last_name").val();
        var edit_company_name = $("#edit_company_name").val();
        var edit_mobile_number = $("#edit_mobile_number").val();
        var edit_email_id = $("#edit_email_id").val();
        var edit_second_email = $("#edit_second_email").val();

        // var edit_home_address_type = $("#edit_home_address_type").val();
        var edit_home_address = $("#edit_home_address").val();
        var edit_home_street = $("#edit_home_street").val();
        var edit_home_city = $("#edit_home_city").val();
        var edit_home_area = $("#edit_home_area").val();
        var edit_home_zipcode = $("#edit_home_zipcode").val();
        var edit_home_state = $("#edit_home_state").val();
        var edit_home_country = $("#edit_home_country").val();

        // var edit_office_address_type = $("#edit_office_address_type").val();
        var edit_office_address = $("#edit_office_address").val();
        var edit_office_street = $("#edit_office_street").val();
        var edit_office_city = $("#edit_office_city").val();
        var edit_office_area = $("#edit_office_area").val();
        var edit_office_zipcode = $("#edit_office_zipcode").val();
        var edit_office_state = $("#edit_office_state").val();
        var edit_office_country = $("#edit_office_country").val();

        // var edit_other_address_type = $("#edit_other_address_type").val();
        var edit_other_address = $("#edit_other_address").val();
        var edit_other_street = $("#edit_other_street").val();
        var edit_other_city = $("#edit_other_city").val();
        var edit_other_area = $("#edit_other_area").val();
        var edit_other_zipcode = $("#edit_other_zipcode").val();
        var edit_other_state = $("#edit_other_state").val();
        var edit_other_country = $("#edit_other_country").val();

        var edit_contact_remark = $("#edit_contact_remark").val();
        var edit_location = $("#edit_location").val();
        var edit_contact_status = $("#edit_contact_status").val();
        var edit_contact_notinterested = $("#edit_contact_notinterested").val();
        var edit_contact_outofcriteria = $("#edit_contact_outofcriteria").val();

        lead_owner = localStorage.getItem('username').replace(/"/g, "");
        var update_contact_data = {
            "id": contact_id,
            "first_name": edit_first_name,
            "contact_phone_number": edit_mobile_number,
            "last_name": edit_last_name,
            "primary_email_id": edit_email_id,
            "remark": edit_contact_remark,
            "title": edit_customer_title,
            "state": "Open",
            "assigned_to": lead_owner,
            "company_name": edit_company_name,
            "secondary_email_id": edit_second_email,
            "location": edit_location,
            "status": edit_contact_status,
            "close_reason": edit_contact_notinterested,
            "close_comment": edit_contact_outofcriteria,
            "contact_address": {
                "address_type": "Home",
                "street": edit_home_street,
                "company_address": edit_home_address,
                "city": edit_home_city,
                "location": edit_home_area,
                "state": edit_home_state,
                "country": edit_home_country,
                "pincode": edit_home_zipcode
            },
            "contact_work_address": {
                "address_type": "Office",
                "street": edit_office_street,
                "company_address": edit_office_address,
                "city": edit_office_city,
                "location": edit_office_area,
                "state": edit_office_state,
                "country": edit_office_country,
                "pincode": edit_office_zipcode
            },
            "contact_other_address": {
                "address_type": "Other",
                "street": edit_other_street,
                "company_address": edit_other_address,
                "city": edit_other_city,
                "location": edit_other_area,
                "state": edit_other_state,
                "country": edit_other_country,
                "pincode": edit_other_zipcode
            }
        }
        console.log(update_contact_data);
        $.ajax({
            url: baseURL + '/update_contact',
            type: 'PUT',
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(update_contact_data).replace(/\:null/gi, "\:\"\""),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            success: function (data) {
                console.log("Updated contact details");
                console.log(data)
                loader_hide();
                Materialize.toast('Updated contact details', 4000, 'green');
                page_reload();
                // alert("Contact Updated successfully")
                // window.location.reload();
            },
            error: function (jqXhr, textStatus, errorThrown) {
                loader_hide();
                error_popup();
                console.log(errorThrown);
            },
        });
    } else {

    }
    return false;
});


											
function create_contact_followup() {
    
    $(".accountfollowUpForm").click(function () {
        
        ;
        var contact_id = $(this).data("id");
        var baseURL = localStorage.getItem('baseURL');
        var token = localStorage.getItem('token').replace(/"/g, "");

        $(".contact_id").html(contact_id);

        $("#create_contact_followup").submit(function (e) {
           
            e.preventDefault()
            loader_show();
            if ($("#contact_follow_up_remark,#contact_nfd_date2,#contact_follow_up_time_interval2").val().length > 0) {

                var today_followup_date = $("#contact_follow_up_date").val();
                var contact_follow_up_remark = $("#contact_follow_up_remark").val();
                
                var contact_nfd_date2 = $("#contact_nfd_date2").val();
                var contact_follow_up_time_interval2 = $("#contact_follow_up_time_interval2").val();
                var followup_contact_status = $("#followup_contact_status").val();

                var create_contact_followup = {
                    "contact": contact_id,
                    "followup_date": today_followup_date,
                    "next_followup_date": contact_nfd_date2,
                    "remarks": contact_follow_up_remark,
                    "time_slot": contact_follow_up_time_interval2,
                    "status": followup_contact_status
                }
                console.log(create_contact_followup)
                $.ajax({
                    url: baseURL + '/contact_followup_create',
                    type: 'POST',
                    contentType: "application/json",
                    dataType: "json",
                    data: JSON.stringify(create_contact_followup),
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Token ' + token);
                    },
                    success: function (data) {
                        console.log(data)
                        loader_hide();
                        Materialize.toast('Contact Followup Created Successfully', 4000, 'green');
                        page_reload();
                        // alert("Contact Followup Added Successfully")
                        // window.location.reload();
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        loader_hide();
                        error_popup();
                        console.log(errorThrown);
                    },
                });
            } else {

            }
            return false;
        });
    });
}
var today_contact_list_current_page= localStorage.getItem('today_contact_list_current_page');
if (today_contact_list_current_page == null) {
    today_contact_list_current_page = 1;
}
localStorage.setItem('today_contact_list_current_page', today_contact_list_current_page)
today_contact(today_contact_list_current_page);
function today_contact(today_contact_list_current_page){
    loader_show();
$.ajax({
    url: baseURL + '/contact_followup_lists?viewby=today&page='+today_contact_list_current_page,
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
        // console.log("TODAY'S FOLLOWUP DATA");
        // console.log(data)
        $("#contact_todays_followup_list").empty();
        data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        var todays_followup_count = data.pagination.total_items;
        $(".todays_followup_count").html(todays_followup_count);
        $.each(data.Followups, function () {
            $("#contact_todays_followup_list").append("<tr role='row' class='topborder'><td width='5%' role='cell'><div class='table_show_on_mobile'><strong>Id</strong></div>" + this.contact.id + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Created Date</strong></div>" + this.contact.created_date + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>First Name</strong></div><p class='name_style'><a onclick='today_contact_view(" + this.contact.id + "," + today_contact_list_current_page + ")' title='Click to view'>" + this.contact.first_name + "</a></p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Last Name</strong></div><p>" + this.contact.last_name + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Mobile Number</strong></div><span>" + this.contact.contact_phone_number.primary_number + "</span></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Email Id</strong></div><p>" + this.contact.primary_email_id + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Contact Status</strong></div><p>" + this.contact.status + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Next Follow-up Date</strong></div><p>" + this.next_followup_date + "</p></td></tr>");
        });
        loader_hide();
         today_total_pages = data.pagination.total_pages;
        var today_btn_next = document.getElementById("today_btn_next");
        var today_btn_prev = document.getElementById("today_btn_prev");
        var today_page_span = document.getElementById("today_page");

        // Validate page
        if (today_contact_list_current_page < 1) today_contact_list_current_page = 1;
        if (today_contact_list_current_page >today_total_pages) today_contact_list_current_page = today_total_pages;
        today_page_span.innerHTML = today_contact_list_current_page + "/" + data.pagination.total_pages;

        if (today_contact_list_current_page == 1) {
            today_btn_prev.style.visibility = "hidden";
        } else {
            today_btn_prev.style.visibility = "visible";
        }

        if (today_contact_list_current_page == today_total_pages) {
            today_btn_next.style.visibility = "hidden";
        } else {
            today_btn_next.style.visibility = "visible";
        }

        if (today_total_pages == 1) {
            today_btn_next.style.visibility = "hidden";
        }

    },
    

});
           
}
var pending_contact_list_current_page= localStorage.getItem('pending_contact_list_current_page');
if (pending_contact_list_current_page == null) {
    pending_contact_list_current_page = 1;
}
localStorage.setItem('pending_contact_list_current_page', pending_contact_list_current_page)
pending_contact(pending_contact_list_current_page);
function pending_contact(pending_contact_list_current_page){
    //loader_show();
$.ajax({
    url: baseURL + '/contact_followup_lists?viewby=pending&page='+pending_contact_list_current_page,
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
        // console.log("TODAY'S FOLLOWUP DATA");
        // console.log(data)
        $("#contact_pending_followup_list").empty();
        data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        var pending_followup_count =  data.pagination.total_items;
        $(".pending_followup_count").html(pending_followup_count);
        $.each(data.Followups, function () {
            $("#contact_pending_followup_list").append("<tr role='row' class='topborder'><td width='5%' role='cell'><div class='table_show_on_mobile'><strong>Id</strong></div>" + this.contact.id + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Created Date</strong></div>" + this.contact.created_date + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>First Name</strong></div><p class='name_style'><a onclick='contact_view(" + this.contact.id + "," + contact_list_current_page + ")' title='Click to view'>" + this.contact.first_name + "</a></p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Last Name</strong></div><p>" + this.contact.last_name + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Mobile Number</strong></div><span>" + this.contact.contact_phone_number.primary_number + "</span></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Email Id</strong></div><p>" + this.contact.primary_email_id + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Contact Status</strong></div><p>" + this.contact.status + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Next Follow-up Date</strong></div><p>" + this.next_followup_date + "</p></td></tr>");
        });
        // loader_hide();
        pending_total_pages = data.pagination.total_pages;
        var pending_btn_next = document.getElementById("pending_btn_next");
        var pending_btn_prev = document.getElementById("pending_btn_prev");
        var pending_page_span = document.getElementById("pending_page");

        // Validate page
        if (pending_contact_list_current_page < 1) pending_contact_list_current_page = 1;
        if (pending_contact_list_current_page >pending_total_pages) pending_contact_list_current_page = pending_total_pages;
        pending_page_span.innerHTML = pending_contact_list_current_page + "/" + data.pagination.total_pages;

        if (pending_contact_list_current_page == 1) {
            pending_btn_prev.style.visibility = "hidden";
        } else {
            pending_btn_prev.style.visibility = "visible";
        }

        if (pending_contact_list_current_page == pending_total_pages) {
           pending_btn_next.style.visibility = "hidden";
        } else {
            pending_btn_next.style.visibility = "visible";
        }

        if (pending_total_pages == 1) {
            pending_btn_next.style.visibility = "hidden";
        }

 
    },

});
}
var future_contact_list_current_page= localStorage.getItem('future_contact_list_current_page');
if (future_contact_list_current_page == null) {
    future_contact_list_current_page = 1;
}
localStorage.setItem('future_contact_list_current_page', future_contact_list_current_page)
future_contact(future_contact_list_current_page);
function future_contact(future_contact_list_current_page){
    
$.ajax({
    url: baseURL + '/contact_followup_lists?viewby=future&page='+future_contact_list_current_page,
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
        
        // console.log("TODAY'S FOLLOWUP DATA");
        // console.log(data)
        $("#contact_future_followup_list").empty();
        data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        var future_followup_count =  data.pagination.total_items;
        $(".future_followup_count").html(future_followup_count);
        $.each(data.Followups, function () {
            $("#contact_future_followup_list").append("<tr role='row' class='topborder'><td width='5%' role='cell'><div class='table_show_on_mobile'><strong>Id</strong></div>" + this.contact.id + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Created Date</strong></div>" + this.contact.created_date + "</td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>First Name</strong></div><p class='name_style'><a onclick='contact_view(" + this.contact.id + "," + contact_list_current_page + ")' title='Click to view'>" + this.contact.first_name + "</a></p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Last Name</strong></div><p>" + this.contact.last_name + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Mobile Number</strong></div><span>" + this.contact.contact_phone_number.primary_number + "</span></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Email Id</strong></div><p>" + this.contact.primary_email_id + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Contact Status</strong></div><p>" + this.contact.status + "</p></td><td width='10%' role='cell'><div class='table_show_on_mobile'><strong>Next Follow-up Date</strong></div><p>" + this.next_followup_date + "</p></td></tr>");
        });
        
        future_total_pages = data.pagination.total_pages;
        var future_btn_next = document.getElementById("future_btn_next");
        var future_btn_prev = document.getElementById("future_btn_prev");
        var future_page_span = document.getElementById("future_page");

        // Validate page
        if (future_contact_list_current_page < 1) future_contact_list_current_page = 1;
        if (future_contact_list_current_page >future_total_pages) future_contact_list_current_page = future_total_pages;
       future_page_span.innerHTML = future_contact_list_current_page + "/" + data.pagination.total_pages;

        if (future_contact_list_current_page == 1) {
            future_btn_prev.style.visibility = "hidden";
        } else {
            future_btn_prev.style.visibility = "visible";
        }

        if (future_contact_list_current_page == future_total_pages) {
           future_btn_next.style.visibility = "hidden";
        } else {
            future_btn_next.style.visibility = "visible";
        }

        if (future_total_pages == 1) {
            future_btn_next.style.visibility = "hidden";
        }

 
    },

});

}
function edel_proposal_attach() {
    $(".sendproposalform").click(function () {
        var contact_id = $(this).data("id");
        var baseURL = localStorage.getItem('baseURL');
        var token = localStorage.getItem('token').replace(/"/g, "");

        $(".contact_id").html(contact_id);

        $.ajax({
            url: baseURL + '/edel_attachments/getall',
            method: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Token ' + token);
            },
            success: function (data) {
                console.log(data)
                data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
                var proposal_pdf = data.EdelAttachments[0].name
                var proposal_id = data.EdelAttachments[0].id
                var proposal_attachment = data.EdelAttachments[0].attachment

                var inclusion_name = data.EdelAttachments[1].name
                var inclusion_id = data.EdelAttachments[1].id
                var inclusion_attachment = data.EdelAttachments[1].attachment

                var exclusion_name = data.EdelAttachments[2].name
                var exclusion_id = data.EdelAttachments[2].id
                var exclusion_attachment = data.EdelAttachments[2].attachment

                $("#proposal_pdf_attachmet").html("<p><input class='with-gap' name='proposal_pdf' type='radio' id='" + proposal_pdf + "' value='" + proposal_id + "' required  /><label for='" + proposal_pdf + "'><i class='fa fa-file-pdf-o' aria-hidden='true'></i> " + proposal_pdf + "</label><br/><span class='proposal-styling'><i class='fa fa-file-pdf-o' aria-hidden='true'></i><span href='#proposal-modal' class='modal-trigger word-break' data-attach=\"" + baseURL + proposal_attachment + "\"> " + proposal_attachment.split('/').pop() + "</span></span></p>");

                $("#inclusion_attachmet").html("<p><input class='with-gap' name='inclusion_exclusion' type='radio' id='" + inclusion_name + "' value='" + inclusion_id + "' required  /><label for='" + inclusion_name + "'><i class='fa fa-file-pdf-o' aria-hidden='true'></i> " + inclusion_name + "</label><br/><span class='proposal-styling'><i class='fa fa-file-pdf-o' aria-hidden='true'></i><span href='#proposal-modal' class='modal-trigger word-break' data-attach=\"" + baseURL + inclusion_attachment + "\"> " + inclusion_attachment.split('/').pop() + "</span></span></p>");

                $("#exclusion_attachmet").html("<p><input class='with-gap' name='inclusion_exclusion' type='radio' id='" + exclusion_name + "' value='" + exclusion_id + "' /><label for='" + exclusion_name + "'><i class='fa fa-file-pdf-o' aria-hidden='true'></i> " + exclusion_name + "</label> <span>(Air Suspension)</span><br/><span class='proposal-styling'><i class='fa fa-file-pdf-o' aria-hidden='true'></i><span href='#proposal-modal' class='modal-trigger word-break' data-attach=\"" + baseURL + exclusion_attachment + "\"> " + exclusion_attachment.split('/').pop() + "</span></span></p>");
                view_proposal_attachment();
            },
        });

        $("#sendproposalform").submit(function (e) {
            e.preventDefault()
            loader_show();
            // var contact_id = append_contact_read_data.Contact.id
            var proposal_pdf = $("input[name='proposal_pdf']:checked").val();
            var inclusion_exclusion = $("input[name='inclusion_exclusion']:checked").val();
            var send_proposal_pdf = {
                "contact": contact_id,
                "edel_attachment_ids": [proposal_pdf, inclusion_exclusion]
            }
            console.log(send_proposal_pdf);
            $.ajax({
                url: baseURL + '/send_proposal_to_customer',
                type: 'POST',
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(send_proposal_pdf).replace(/\:null/gi, "\:\"\""),
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Token ' + token);
                },
                success: function (data) {
                    console.log("Sent Proposal");
                    console.log(data)
                    loader_hide();
                    Materialize.toast('Proposal Updated successfully', 4000, 'green');
                    page_reload();
                    // alert("Proposal Sent successfully")
                    // window.location.reload();
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    loader_hide();
                    error_popup();
                    console.log(errorThrown);
                },
            });
        });
    });
}

function view_proposal_attachment() {
    $(".modal-trigger").click(function () {
        var viewattach = $(this).data("attach");
        $(".view-attachment1").append("<embed src='" + viewattach + "' style='width: 100%; height: 100%; position: absolute; left: 0; top: 0;'></embed>")
    });
}

// GET ALL LOCATIONS
$.ajax({
    url: baseURL + '/location/getall',
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
        if (data.Status == true && data.Message == "Record found successfully") {
            $.each(data.Data, function () {
                $("#home_area").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#office_area").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#other_area").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#edit_home_area").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#edit_office_area").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#edit_other_area").append("<option value='" + this + "'>" + this + "</option>");
            });
        }
    }
});

// GET ALL STATES
$.ajax({
    url: baseURL + '/state/getall',
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
        if (data.Status == true && data.Message == "Record found successfully") {
            $.each(data.Data, function () {
                $("#home_state").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#office_state").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#other_state").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#edit_home_state").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#edit_office_state").append("<option value='" + this + "'>" + this + "</option>");
            });
            $.each(data.Data, function () {
                $("#edit_other_state").append("<option value='" + this + "'>" + this + "</option>");
            });
        }
    }
});
