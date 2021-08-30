var token = localStorage.getItem('token').replace(/"/g, "");
// $(".authtoken").html(token);
console.log(token)

// function user_detail() {
//     var baseURL = localStorage.getItem('baseURL');
//     var token = localStorage.getItem('token').replace(/"/g, "");
  
//     // GET User Target
//     $.ajax({
//         url: baseURL + '/user_detail',
//         method: 'GET',
//         dataType: 'json',
//         contentType: 'application/json',
//         beforeSend: function (xhr) {
//             xhr.setRequestHeader('Authorization', 'Token ' + token);
//         },
//         success: function (data) {
//             console.log(data)
//             // data = JSON.parse(JSON.stringify(data).replace(/\:null/gi, "\:\"\""));
//             // data = JSON.parse(JSON.stringify(data).replace(/\:undefined/gi, "\:\"\""));        
  
//             var role = data.user_details.role
//             console.log(role)
//             localStorage.setItem('role', role);
//         },
  
//     });
// }
