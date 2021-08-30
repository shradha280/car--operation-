// var viewcontactdata = JSON.parse(localStorage.getItem('readcontactdata'));
// console.log(viewcontactdata)


var baseURL = localStorage.getItem('baseURL');
var token = localStorage.getItem('token').replace(/"/g, "");
// var contact_id = localStorage.getItem('contact_id');
// console.log(view_contact_id)
// viewcontactdata = view_contact_id

var queryString = window.location.search;
// console.log(queryString);
var urlParams = new URLSearchParams(queryString);
var contact_id = urlParams.get('id')
console.log(contact_id);

$.ajax({
    url: baseURL+'/read_contact?id='+contact_id,
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function ( xhr ) {
        xhr.setRequestHeader('Authorization', 'Token '+token);
    },
    success: function(data){
        console.log("READ DATA");
        console.log(data)
        data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));
        viewcontactdata = data

        $("#view_contact_id").val(viewcontactdata.Contact.id);
        $("#view_customer_type").val(viewcontactdata.Contact.contact_type);
        $("#view_customer_title").val(viewcontactdata.Contact.title);
        $("#view_first_name").val(viewcontactdata.Contact.first_name);
        $("#view_last_name").val(viewcontactdata.Contact.last_name);
        $("#view_company_name").val(viewcontactdata.Contact.company_name);
        $("#view_mobile_number").val(viewcontactdata.Contact.contact_phone_number.primary_number);
        $("#view_primary_email_id").val(viewcontactdata.Contact.primary_email_id);
        $("#view_secondary_email_id").val(viewcontactdata.Contact.secondary_email_id);
        $("#view_home_address").val(viewcontactdata.Contact.contact_address.company_address+' '+viewcontactdata.Contact.contact_address.street+' '+viewcontactdata.Contact.contact_address.city_location.name+' '+viewcontactdata.Contact.contact_address.city.name+' '+viewcontactdata.Contact.contact_address.pincode+' '+viewcontactdata.Contact.contact_address.state.name+' '+viewcontactdata.Contact.contact_address.country.name);
        $("#view_office_address").val(viewcontactdata.Contact.contact_work_address.company_address+' '+viewcontactdata.Contact.contact_work_address.street+' '+viewcontactdata.Contact.contact_work_address.city_location.name+' '+viewcontactdata.Contact.contact_work_address.city.name+' '+viewcontactdata.Contact.contact_work_address.pincode+' '+viewcontactdata.Contact.contact_work_address.state.name+' '+viewcontactdata.Contact.contact_work_address.country.name);
        $("#view_other_address").val(viewcontactdata.Contact.contact_other_address.company_address+' '+viewcontactdata.Contact.contact_other_address.street+' '+viewcontactdata.Contact.contact_other_address.city_location.name+' '+viewcontactdata.Contact.contact_other_address.city.name+' '+viewcontactdata.Contact.contact_other_address.pincode+' '+viewcontactdata.Contact.contact_other_address.state.name+' '+viewcontactdata.Contact.contact_other_address.country.name);
        $("#view_location").val(viewcontactdata.Contact.location);
        $("#view_contact_status").val(viewcontactdata.Contact.status); 
        $("#view_cotact_remark").val(viewcontactdata.Contact.remark.remark);
        $("#view_not_interested").val(viewcontactdata.Contact.close_reason);
        $("#view_outof_criteria").val(viewcontactdata.Contact.close_comment);
    },
});


$.ajax({
	url: baseURL+'/contact_followups?contact='+contact_id,
	method: 'GET',
	dataType: 'json',
	contentType: 'application/json',
	beforeSend: function ( xhr ) {
		xhr.setRequestHeader('Authorization', 'Token '+token);
	},
	success: function(data){
		// console.log("READ FOLLOWUP DATA");
		console.log(data)
		data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));
		$.each(data.Followups, function(){
            $("#contact-followup").append("<div class='cust-followup-wrap'><p class='view-date left'><strong>Today's Follow up:</strong> "+this.date+"</p><p class='view-date left'><strong>Next Follow up:</strong> "+this.next_followup_date+" <strong>Time:</strong> "+this.time_interval+"</p><p class='view-date'><strong>Remark:</strong> "+this.remarks+"</p><p class='view-date'><strong>Created by:</strong> "+this.created_by.username+"</p></div>");
        });

	},
});

{/* <p class='view-date'><strong>Contact Status:</strong> "+this.contact.status+"</p> */}


$.ajax({
	url: baseURL+'/contact_proposals/getall?contact='+contact_id,
	method: 'GET',
	dataType: 'json',
	contentType: 'application/json',
	beforeSend: function ( xhr ) {
		xhr.setRequestHeader('Authorization', 'Token '+token);
	},
	success: function(data){
		// console.log("READ FOLLOWUP DATA");
		console.log(data)
		data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));
		$.each(data.Proposals, function(){
            var created_on = this.created_date.split('T')[0]
            var proposal_id = this.id
            $("#send_proposal").append("<div class='cust-followup-wrap'><p class='view-date left'><strong>Created On:</strong> "+created_on+"</p><p class='view-date left'><strong>Sent By:</strong> "+this.sent_by.username+"</p><div id='"+this.id+"'></div></div>");  
            $.each(this.edel_attachments, function(){
                
            });           
        });
        proposal_attachment();
	},
});

function proposal_attachment(){
	$(".modal-trigger").click(function () {
		
		$(".view-attachment").append("<embed src='"+viewattach+"' style='width: 100%; height: 100%; position: absolute; left: 0; top: 0;'></embed>")
	});
}

// updated policy details
$.ajax({
	url: baseURL+'/contact_warranty_policy?contact='+contact_id,
	method: 'GET',
	dataType: 'json',
	contentType: 'application/json',
	beforeSend: function ( xhr ) {
		xhr.setRequestHeader('Authorization', 'Token '+token);
	},
	success: function(data){
		// console.log("READ FOLLOWUP DATA");
		console.log(data)
		data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));

        var payment_approval_date = data.Warranty[0].date_of_approval.split('T')[0]
        var payment_expiry_date = data.Warranty[0].expiry_date.split('T')[0]
        var policy_data = data.Warranty[0]

        $("#policy_payment_received_date").val(payment_approval_date);
        $("#policy_start_date").val(payment_approval_date);
        $("#policy_final_price").val(policy_data.final_amount+'/-');
        $("#policy_end_date").val(payment_expiry_date);
        $("#policy_end_km").val(policy_data.warranty_covered_km+' km');
        
		warranty_attachment();
	},
});

function warranty_attachment(){
	$(".modal-trigger").click(function () {
		$(".view-attachment").append("<embed src='"+viewattach+"' style='width: 100%; height: 100%; position: absolute; left: 0; top: 0;'></embed>")
	});
}