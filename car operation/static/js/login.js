$(window).on('load', function() {
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 900);
});
////$(document).ready(function() {
var baseURL = localStorage.getItem('baseURL');
$('form').submit(function(e) {
  e.preventDefault()
  ////////continue your code
  if($("#username,#password").val().length > 0) {
    var form_data = new FormData();
    form_data.append('username', $("#username").val())
    form_data.append('password', $("#password").val())
    console.log(form_data);
    $.ajax({
      url: baseURL+'/signin',
      type: 'POST',
      cache: false,
      contentType: false,
      processData: false,
      mimeType: 'multipart/form-data',
      data: form_data,
      beforeSend: function() {
      },
      success: function(data){
          console.log("DATA POSTED SUCCESSFULLY");
          console.log(data)
          data = JSON.parse(data)
          var firstname = data.user.first_name
          var lastname = data.user.last_name
          localStorage.setItem('username',JSON.stringify(data.user.username))
          localStorage.setItem('token',JSON.stringify(data.token))
          if ($('#remember-me').is(':checked')) {
            var username = $('#username').val();
            var password = $('#password').val();
            localStorage.setItem('u',username);
            localStorage.setItem('p',password);
            localStorage.setItem('remember',"true");
           var id =  localStorage.getItem('remember');
            
            }
            // else
            // {
            // // reset cookies
            // $.cookie('email', null);
            // $.cookie('password', null);
            // $.cookie('remember', null);
            // }
          user_detail();
          // location.href = "contacts-listing.html";
                  },
      error: function( jqXhr, textStatus, errorThrown ){
        var success_error = jqXhr.responseText
        Materialize.toast(success_error, 4000, 'red');
          console.log( errorThrown );
      },
      complete: function() {
        
      },
    });
  } else {

  }
  return false;
});
//})

function user_detail() {
var baseURL = localStorage.getItem('baseURL');
var token = localStorage.getItem('token').replace(/"/g, "");

// GET User Target
$.ajax({
    url: baseURL + '/user_detail',
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + token);
    },
    success: function (data) {
        console.log(data)
        // data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
        // data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));        

        var role = data.user_details.role
        console.log(role)
        localStorage.setItem('role', role);

        var user_location = data.user_details.location.name
        localStorage.setItem('ulocation', user_location);

        // if(role == 'account_manager'){
        //   location.href='leads-listing.html';
        //   $(".lead-listing").show();
        // }

        apply_roles()
        location.href = get_home_pages()[role]
        

    },

});
}
$(document).ready(function() {
var remember = localStorage.getItem('remember');
if (remember === "true")
{user_detail();

var username = localStorage.getItem(u);
var password = localStorage.getItem(p);

}
});