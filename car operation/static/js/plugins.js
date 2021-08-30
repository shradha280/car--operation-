/*================================================================================
  Item Name: Materialize - Material Design Admin Template
  Version: 4.0
  Author: PIXINVENT
  Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================*/

/*Preloader*/
$(window).on('load', function () {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 200);
});

$('.tabanim').addClass('animated fadeIn');
$('.flipinx').addClass('animated flipInX');


$(function () {

  "use strict";

  var window_width = $(window).width();
  var openIndex;

  // Collapsible navigation menu
  $('.nav-collapsible .navbar-toggler').click(function () {
    //set Index velue
    getCollapseIndex();
    // Toggle navigation expan and collapse on radio click
    if ($('#left-sidebar-nav').hasClass('nav-expanded') && !$('#left-sidebar-nav').hasClass('nav-lock')) {
      $('#left-sidebar-nav').toggleClass('nav-expanded');
      $('#main').toggleClass('main-full');
    } else {
      $('#left-sidebar-nav').toggleClass('nav-expanded nav-collapsed');
      $('#main').toggleClass('main-full');
    }
    // Set navigation lock / unlock with radio icon
    if ($(this).children().text() == 'radio_button_unchecked') {
      $(this).children().text('radio_button_checked');
      $('#left-sidebar-nav').addClass('nav-lock');
      $('.header-search-wrapper').addClass('sideNav-lock');
    } else {
      $(this).children().text('radio_button_unchecked');
      $('#left-sidebar-nav').removeClass('nav-lock');
      $('.header-search-wrapper').removeClass('sideNav-lock');
    }

    setTimeout(function () {
      if (openIndex != null) {
        if ($('#left-sidebar-nav').hasClass('nav-collapsed')) {
          $('.collapsible').collapsible('close', (openIndex));
        }
      }
    }, 100);
  });

  // Expand navigation on mouseenter event
  $('#left-sidebar-nav.nav-collapsible').mouseenter(function () {
    //set Index velue
    getCollapseIndex();

    if (!$(this).hasClass('nav-lock')) {
      $(this).addClass('nav-expanded').removeClass('nav-collapsed');
      setTimeout(function () {
        $('.collapsible').collapsible('open', (openIndex));
      }, 100);
    }
  });

  // Collapse navigation on mouseleave event
  $('#left-sidebar-nav.nav-collapsible').mouseleave(function () {
    //set Index velue
    getCollapseIndex();
    if (!$(this).hasClass('nav-lock')) {
      $(this).addClass('nav-collapsed').removeClass('nav-expanded');
      setTimeout(function () {
        $('.collapsible').collapsible('close', (openIndex));
      }, 100);
    }
  });

  function getCollapseIndex() {
    $("#slide-out > li > ul > li > a.collapsible-header").each(function (index) {
      if ($(this).parent().hasClass('active')) {
        openIndex = index;
      }
    });
  }

  // Search class for focus
  $('.header-search-input').focus(
    function () {
      $(this).parent('div').addClass('header-search-wrapper-focus');
    }).blur(
      function () {
        $(this).parent('div').removeClass('header-search-wrapper-focus');
      });

  // Check first if any of the task is checked
  $('#task-card input:checkbox').each(function () {
    checkbox_check(this);
  });

  // Task check box
  $('#task-card input:checkbox').change(function () {
    checkbox_check(this);
  });

  // Check Uncheck function
  function checkbox_check(el) {
    if (!$(el).is(':checked')) {
      $(el).next().css('text-decoration', 'none'); // or addClass
    } else {
      $(el).next().css('text-decoration', 'line-through'); //or addClass
    }
  }

  // Swipeable Tabs Demo Init
  if ($('#tabs-swipe-demo').length) {
    $('#tabs-swipe-demo').tabs({
      'swipeable': true
    });
  }

  // Plugin initialization

  $('select').material_select();
  // Set checkbox on forms.html to indeterminate
  var indeterminateCheckbox = document.getElementById('indeterminate-checkbox');
  if (indeterminateCheckbox !== null)
    indeterminateCheckbox.indeterminate = true;

  // Materialize Slider
  $('.slider').slider({
    full_width: true
  });

  // Commom, Translation & Horizontal Dropdown
  $('.dropdown-button, .translation-button, .dropdown-menu').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    click: true,
    //hover: true,
    gutter: 0,
    belowOrigin: true,
    alignment: 'left',
    stopPropagation: true,
    belowOrigin: true
  });
  // Notification, Profile & Settings Dropdown
  $('.notification-button, .profile-button, .dropdown-settings').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    click: true,
    //hover: true,
    gutter: 0,
    belowOrigin: true,
    alignment: 'right',
    stopPropagation: true
  });

  // $('table.lead-management').click(function(event){
  //   event.dropdown.hide();
  // })

  $(document).on('click', '.dropdown-button, .translation-button, .dropdown-menu, .dropdown-content', function (e) {
    e.stopPropagation();
  });

  // Materialize Tabs
  $('.tab-demo').show().tabs();
  $('.tab-demo-active').show().tabs();

  // Materialize Parallax
  $('.parallax').parallax();

  // Materialize scrollSpy
  $('.scrollspy').scrollSpy();

  // Materialize tooltip
  $('.tooltipped').tooltip({
    delay: 50
  });

  //Main Left Sidebar Menu
  $('.sidebar-collapse').sideNav({
    edge: 'left', // Choose the horizontal origin
  });

  // Overlay Menu (Full screen menu)
  $('.menu-sidebar-collapse').sideNav({
    //menuWidth: 240,
    edge: 'left', // Choose the horizontal origin
    //closeOnClick:true, // Set if default menu open is true
    menuOut: false // Set if default menu open is true
  });

  //Main Left Sidebar Chat
  $('.chat-collapse').sideNav({
    // menuWidth: 300,
    edge: 'right',
  });

  $('.chips').material_chip();

  // $('.chat-collapse').click(function() {
  //   $('body,html').css("background","rgba(0,0,0,0.5)");
  //   return false;
  // });



  // Perfect Scrollbar
  $('select').not('.disabled').material_select();
  var leftnav = $(".page-topbar").height();
  var leftnavHeight = window.innerHeight - leftnav;
  if (!$('#slide-out.leftside-navigation').hasClass('native-scroll')) {
    $('.leftside-navigation').perfectScrollbar({
      suppressScrollX: true
    });
  }
  var righttnav = $("#chat-out").height();
  $('.rightside-navigation').perfectScrollbar({
    suppressScrollX: true
  });

  

  // Fullscreen
  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  $('.toggle-fullscreen').click(function () {
    toggleFullScreen();
  });


  // Floating-Fixed table of contents (Materialize pushpin)
  if ($('nav').length) {
    $('.toc-wrapper').pushpin({
      top: $('nav').height()
    });
  } else if ($('#index-banner').length) {
    $('.toc-wrapper').pushpin({
      top: $('#index-banner').height()
    });
  } else {
    $('.toc-wrapper').pushpin({
      top: 0
    });
  }

  // Toggle Flow Text
  var toggleFlowTextButton = $('#flow-toggle')
  toggleFlowTextButton.click(function () {
    $('#flow-text-demo').children('p').each(function () {
      $(this).toggleClass('flow-text');
    })
  });

  //Alerts
  $("#card-alert .close").click(function () {
    $(this).closest('#card-alert').fadeOut('slow');
  });

  //Toggle Containers on page
  var toggleContainersButton = $('#container-toggle-button');
  toggleContainersButton.click(function () {
    $('body .browser-window .container, .had-container').each(function () {
      $(this).toggleClass('had-container');
      $(this).toggleClass('container');
      if ($(this).hasClass('container')) {
        toggleContainersButton.text("Turn off Containers");
      } else {
        toggleContainersButton.text("Turn on Containers");
      }
    });
  });

  // Detect touch screen and enable scrollbar if necessary
  function is_touch_device() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  if (is_touch_device()) {
    $('#nav-mobile').css({
      overflow: 'auto'
    })
  }

  

  // Equal Height
  if (window.matchMedia('(max-width: 1025px)').matches) {
    jQuery(document).ready(function ($) {
      // Equal Height
      var maxHeight = 0;

      $(".gaps-car").each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
      });

      $(".gaps-car").height(maxHeight);

    });
  } else {
    //...
  }



  // horizontal more option
  $(document).ready(function () {
    $(".hrzcheckbox").click(function () {
      $(".hrz-more-options").slideToggle(200);
    });


    $("#back_to_list").click(function () {
      location.href = hrefdata;
    })


  });




});


$(".add_details").click(function () {


  $(".user-details").append('<div class="input-field col s12 m4 l4 user_data"><label for="email_id">Secondary Email ID</label><input id="email_id" name="email_id" type="email" data-error=".errorTxt5"><div class="input-field"><div class="errorTxt5"></div></div><button class="remove-btn" title="Remove"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div>');


});

$("body").on("click", ".remove-btn", function (e) {
  $(this).parents('.user_data').remove();
});



// Contact Status - Not Interested
$("#not-interested-description").hide();
$(".contact_status").change(function () {
  contactnotinterested(".contact_status", "not-interested-description")
});
function contactnotinterested(type_change, sub_type_element) {
  var type = $(type_change + " option:selected").text();
  var x = document.getElementById(sub_type_element);
  if (type == 'Not Interested') {
    x.style.display = "block";
    $("#contact_notinterested").attr("required", true);
  }
  else {
    x.style.display = "none";
    $("#contact_notinterested").attr("required", false);
  }
}

// Contact Status - Out of Criteria
$("#outofcriteria-description").hide();
$(".contact_status").change(function () {
  contactoutofcriteria(".contact_status", "outofcriteria-description")
});
function contactoutofcriteria(type_change, sub_type_element) {
  var type = $(type_change + " option:selected").text();
  var x = document.getElementById(sub_type_element);
  if (type == 'Out of Criteria') {
    x.style.display = "block";
    $("#contact_notinterested").attr("required", true);
  }
  else {
    x.style.display = "none";
    $("#contact_outofcriteria").attr("required", false);
  }
}


// Contact Status - Not Interested
$("#edit_not-interested-description").hide();
$(".edit_contact_status").change(function () {
  contactnotinterested(".edit_contact_status", "edit_not-interested-description")
});
function contactnotinterested(type_change, sub_type_element) {
  var type = $(type_change + " option:selected").text();
  var x = document.getElementById(sub_type_element);
  if (type == 'Not Interested') {
    x.style.display = "block";
    $("#edit_contact_notinterested").attr("required", true);
  }
  else {
    x.style.display = "none";
    $("#edit_contact_notinterested").attr("required", false);
  }
}

// Contact Status - Out of Criteria
$("#edit_outofcriteria-description").hide();
$(".edit_contact_status").change(function () {
  contactoutofcriteria(".edit_contact_status", "edit_outofcriteria-description")
});
function contactoutofcriteria(type_change, sub_type_element) {
  var type = $(type_change + " option:selected").text();
  var x = document.getElementById(sub_type_element);
  if (type == 'Out of Criteria') {
    x.style.display = "block";
    $("#edit_contact_notinterested").attr("required", true);
  }
  else {
    x.style.display = "none";
    $("#contact_outofcriteria").attr("required", false);
  }
}




$(document).ready(function () {
// default today date
  var now = new Date();

  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);

  var today = now.getFullYear() + "-" + (month) + "-" + (day);


  $('.default_todaydate').val(today);
});

//checksheet reason
$('.meeting_status').hide();
$("#lead_meeting_done").click(function () {
  if ($(this).is(":checked")) {
    $('.meeting_status').show();
  } else {
    $('.meeting_status').hide();
  }
});

$('.lead_nf_status').hide();
$("#lead_nf_status").click(function () {
  if ($(this).is(":checked")) {
    $('.lead_nf_status').show();
    $('#lead_nfd_date').prop('required', true);
    $('#lead_follow_up_time_interval').prop('required', true);
  } else {
    $('.lead_nf_status').hide();
    $('#lead_nfd_date').prop('required', false);
    $('#lead_follow_up_time_interval').prop('required', false);
  }
});

// upload 8 car images code
$('.upload-wrap input[type=file]').change(function () {
  var id = $(this).attr("id");
  var newimage = new FileReader();
  newimage.readAsDataURL(this.files[0]);
  newimage.onload = function (e) {
    $('.uploadpreview.' + id).css('background-image', 'url(' + e.target.result + ')');
  }
});

// $('#start_stop_button_reason').prop('required', false);
// $("input[type=radio]").change(function() {
//     if($(this).val()=="No") {
//         $('#start_stop_button_reason').prop('required', true);
//     } else {
//         $('#start_stop_button_reason').prop('required', false);
//     }
// });

// $("#start_stop_button_no").click(function() {
//     if($(this).is(":checked")) {
//         $('#start_stop_button_reason').prop('required', true);
//     } else {
//         $('#start_stop_button_reason').prop('required', false);
//     }
// });


// $('input[name="start_stop_button"]').change(function () {
//     if($("#start_stop_button_no").is(':checked')) {
//       $('#start_stop_button_reason').attr('required', true);
//     } else {
//       $('#start_stop_button_reason').removeAttr('required');
//     }
//   });

$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal({
    dismissible: false
  });
});

$(function () {

});

var user = localStorage.getItem('username')
if (user != null) {
  username = user.replace(/"/g, "");
  $(".display_username").html(username);
}


$("#logout_link").click(function () {
  localStorage.clear();
  location.href = "index.html";
});

$(function () {

  $("#lead_nfd_date,#lead_scheduled_date,#edit_lead_scheduled_date,#contact_nfd_date2").datepicker({ 
    minDate: 0, 
    dateFormat: 'yy-mm-dd'
  });

  $("#date_of_approval").datepicker({ 
    dateFormat: 'yy-mm-dd'
  });

  $("#expiry_date").datepicker({
    changeMonth: true,
    changeYear: true,
  });

});






// $(function(){
//   $("[data-load]").ready(function(){
//       $(this).load($(this).data("load"), function(){
//       });
//   });
// })

$("input[name='start_stop_button']").change(function () {
  if ($(this).val() == "false") {
    $('#start_stop_button_reason').prop('required', true);
    $('#start_stop_button_reason').css('border-color', 'Red');
  } else {
    $('#start_stop_button_reason').prop('required', false);
    $('#start_stop_button_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='instrumental_cluster']").change(function () {
  if ($(this).val() == "false") {
    $('#instrumental_cluster_reason').prop('required', true);
    $('#instrumental_cluster_reason').css('border-color', 'Red');
  } else {
    $('#instrumental_cluster_reason').prop('required', false);
    $('#instrumental_cluster_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='multi_media_screen']").change(function () {
  if ($(this).val() == "false") {
    $('#multi_media_screen_reason').prop('required', true);
    $('#multi_media_screen_reason').css('border-color', 'Red');
  } else {
    $('#multi_media_screen_reason').prop('required', false);
    $('#multi_media_screen_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='pw_switches_function']").change(function () {
  if ($(this).val() == "false") {
    $('#pw_switches_function_reason').prop('required', true);
    $('#pw_switches_function_reason').css('border-color', 'Red');
  } else {
    $('#pw_switches_function_reason').prop('required', false);
    $('#pw_switches_function_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='speakers']").change(function () {
  if ($(this).val() == "false") {
    $('#speakers_reason').prop('required', true);
    $('#speakers_reason').css('border-color', 'Red');
  } else {
    $('#speakers_reason').prop('required', false);
    $('#speakers_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='mirror_lense_adjt_knob_switch']").change(function () {
  if ($(this).val() == "false") {
    $('#mirror_lense_adjt_knob_switch_reason').prop('required', true);
    $('#mirror_lense_adjt_knob_switch_reason').css('border-color', 'Red');
  } else {
    $('#mirror_lense_adjt_knob_switch_reason').prop('required', false);
    $('#mirror_lense_adjt_knob_switch_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='center_console_buttons']").change(function () {
  if ($(this).val() == "false") {
    $('#center_console_buttons_reason').prop('required', true);
    $('#center_console_buttons_reason').css('border-color', 'Red');
  } else {
    $('#center_console_buttons_reason').prop('required', false);
    $('#center_console_buttons_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='parking_brake_switch']").change(function () {
  if ($(this).val() == "false") {
    $('#parking_brake_switch_reason').prop('required', true);
    $('#parking_brake_switch_reason').css('border-color', 'Red');
  } else {
    $('#parking_brake_switch_reason').prop('required', false);
    $('#parking_brake_switch_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='ac_system']").change(function () {
  if ($(this).val() == "false") {
    $('#ac_system_reason').prop('required', true);
    $('#ac_system_reason').css('border-color', 'Red');
  } else {
    $('#ac_system_reason').prop('required', false);
    $('#ac_system_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='seat_adjt_mem_front_rear']").change(function () {
  if ($(this).val() == "false") {
    $('#seat_adjt_mem_front_rear_reason').prop('required', true);
    $('#seat_adjt_mem_front_rear_reason').css('border-color', 'Red');
  } else {
    $('#seat_adjt_mem_front_rear_reason').prop('required', false);
    $('#seat_adjt_mem_front_rear_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='safety_seat_belt']").change(function () {
  if ($(this).val() == "false") {
    $('#safety_seat_belt_reason').prop('required', true);
    $('#safety_seat_belt_reason').css('border-color', 'Red');
  } else {
    $('#safety_seat_belt_reason').prop('required', false);
    $('#safety_seat_belt_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='sunroof']").change(function () {
  if ($(this).val() == "false") {
    $('#sunroof_reason').prop('required', true);
    $('#sunroof_reason').css('border-color', 'Red');
  } else {
    $('#sunroof_reason').prop('required', false);
    $('#sunroof_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='rear_sun_blinder']").change(function () {
  if ($(this).val() == "false") {
    $('#rear_sun_blinder_reason').prop('required', true);
    $('#rear_sun_blinder_reason').css('border-color', 'Red');
  } else {
    $('#rear_sun_blinder_reason').prop('required', false);
    $('#rear_sun_blinder_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='combination_switch']").change(function () {
  if ($(this).val() == "false") {
    $('#combination_switch_reason').prop('required', true);
    $('#combination_switch_reason').css('border-color', 'Red');
  } else {
    $('#combination_switch_reason').prop('required', false);
    $('#combination_switch_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='air_suspension_operation']").change(function () {
  if ($(this).val() == "false") {
    $('#air_suspension_operation_reason').prop('required', true);
    $('#air_suspension_operation_reason').css('border-color', 'Red');
  } else {
    $('#air_suspension_operation_reason').prop('required', false);
    $('#air_suspension_operation_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='reverse_camera']").change(function () {
  if ($(this).val() == "false") {
    $('#reverse_camera_reason').prop('required', true);
    $('#reverse_camera_reason').css('border-color', 'Red');
  } else {
    $('#reverse_camera_reason').prop('required', false);
    $('#reverse_camera_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='parking_sensors']").change(function () {
  if ($(this).val() == "false") {
    $('#parking_sensors_reason').prop('required', true);
    $('#parking_sensors_reason').css('border-color', 'Red');
  } else {
    $('#parking_sensors_reason').prop('required', false);
    $('#parking_sensors_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='boot_shock_absorber']").change(function () {
  if ($(this).val() == "false") {
    $('#boot_shock_absorber_reason').prop('required', true);
    $('#boot_shock_absorber_reason').css('border-color', 'Red');
  } else {
    $('#boot_shock_absorber_reason').prop('required', false);
    $('#boot_shock_absorber_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='coolant']").change(function () {
  if ($(this).val() == "false") {
    $('#coolant_reason').prop('required', true);
    $('#coolant_reason').css('border-color', 'Red');
  } else {
    $('#coolant_reason').prop('required', false);
    $('#coolant_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='oil_leakage']").change(function () {
  if ($(this).val() == "false") {
    $('#oil_leakage_reason').prop('required', true);
    $('#oil_leakage_reason').css('border-color', 'Red');
  } else {
    $('#oil_leakage_reason').prop('required', false);
    $('#oil_leakage_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='pully_noise']").change(function () {
  if ($(this).val() == "false") {
    $('#pully_noise_reason').prop('required', true);
    $('#pully_noise_reason').css('border-color', 'Red');
  } else {
    $('#pully_noise_reason').prop('required', false);
    $('#pully_noise_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='cooling_fan']").change(function () {
  if ($(this).val() == "false") {
    $('#cooling_fan_reason').prop('required', true);
    $('#cooling_fan_reason').css('border-color', 'Red');
  } else {
    $('#cooling_fan_reason').prop('required', false);
    $('#cooling_fan_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='axle_boot']").change(function () {
  if ($(this).val() == "false") {
    $('#axle_boot_reason').prop('required', true);
    $('#axle_boot_reason').css('border-color', 'Red');
  } else {
    $('#axle_boot_reason').prop('required', false);
    $('#axle_boot_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='steering_rack_boot']").change(function () {
  if ($(this).val() == "false") {
    $('#steering_rack_boot_reason').prop('required', true);
    $('#steering_rack_boot_reason').css('border-color', 'Red');
  } else {
    $('#steering_rack_boot_reason').prop('required', false);
    $('#steering_rack_boot_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='wiring_harness']").change(function () {
  if ($(this).val() == "false") {
    $('#wiring_harness_reason').prop('required', true);
    $('#wiring_harness_reason').css('border-color', 'Red');
  } else {
    $('#wiring_harness_reason').prop('required', false);
    $('#wiring_harness_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='head_lighter_washer_jet']").change(function () {
  if ($(this).val() == "false") {
    $('#head_lighter_washer_jet_reason').prop('required', true);
    $('#head_lighter_washer_jet_reason').css('border-color', 'Red');
  } else {
    $('#head_lighter_washer_jet_reason').prop('required', false);
    $('#head_lighter_washer_jet_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='fuel_leakage']").change(function () {
  if ($(this).val() == "false") {
    $('#fuel_leakage_reason').prop('required', true);
    $('#fuel_leakage_reason').css('border-color', 'Red');
  } else {
    $('#fuel_leakage_reason').prop('required', false);
    $('#fuel_leakage_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='door_central_locking']").change(function () {
  if ($(this).val() == "false") {
    $('#door_central_locking_reason').prop('required', true);
    $('#door_central_locking_reason').css('border-color', 'Red');
  } else {
    $('#door_central_locking_reason').prop('required', false);
    $('#door_central_locking_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='rear_boot_lock_functioning']").change(function () {
  if ($(this).val() == "false") {
    $('#rear_boot_lock_functioning_reason').prop('required', true);
    $('#rear_boot_lock_functioning_reason').css('border-color', 'Red');
  } else {
    $('#rear_boot_lock_functioning_reason').prop('required', false);
    $('#rear_boot_lock_functioning_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='fuel_lid_actuator']").change(function () {
  if ($(this).val() == "false") {
    $('#fuel_lid_actuator_reason').prop('required', true);
    $('#fuel_lid_actuator_reason').css('border-color', 'Red');
  } else {
    $('#fuel_lid_actuator_reason').prop('required', false);
    $('#fuel_lid_actuator_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='vehicle_jerking']").change(function () {
  if ($(this).val() == "false") {
    $('#vehicle_jerking_reason').prop('required', true);
    $('#vehicle_jerking_reason').css('border-color', 'Red');
  } else {
    $('#vehicle_jerking_reason').prop('required', false);
    $('#vehicle_jerking_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='steering_noise']").change(function () {
  if ($(this).val() == "false") {
    $('#steering_noise_reason').prop('required', true);
    $('#steering_noise_reason').css('border-color', 'Red');
  } else {
    $('#steering_noise_reason').prop('required', false);
    $('#steering_noise_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='exhause_smoke']").change(function () {
  if ($(this).val() == "false") {
    $('#exhause_smoke_reason').prop('required', true);
    $('#exhause_smoke_reason').css('border-color', 'Red');
  } else {
    $('#exhause_smoke_reason').prop('required', false);
    $('#exhause_smoke_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='engine_noise']").change(function () {
  if ($(this).val() == "false") {
    $('#engine_noise_reason').prop('required', true);
    $('#engine_noise_reason').css('border-color', 'Red');
  } else {
    $('#engine_noise_reason').prop('required', false);
    $('#engine_noise_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='transmission_noise']").change(function () {
  if ($(this).val() == "false") {
    $('#transmission_noise_reason').prop('required', true);
    $('#transmission_noise_reason').css('border-color', 'Red');
  } else {
    $('#transmission_noise_reason').prop('required', false);
    $('#transmission_noise_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='brake_efficiency']").change(function () {
  if ($(this).val() == "false") {
    $('#brake_efficiency_reason').prop('required', true);
    $('#brake_efficiency_reason').css('border-color', 'Red');
  } else {
    $('#brake_efficiency_reason').prop('required', false);
    $('#brake_efficiency_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='gear_shifting']").change(function () {
  if ($(this).val() == "false") {
    $('#gear_shifting_reason').prop('required', true);
    $('#gear_shifting_reason').css('border-color', 'Red');
  } else {
    $('#gear_shifting_reason').prop('required', false);
    $('#gear_shifting_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='suspension_noise']").change(function () {
  if ($(this).val() == "false") {
    $('#suspension_noise_reason').prop('required', true);
    $('#suspension_noise_reason').css('border-color', 'Red');
  } else {
    $('#suspension_noise_reason').prop('required', false);
    $('#suspension_noise_reason').css('border-color', '#9e9e9e');
  }
});

$("input[name='vehicle_vibration']").change(function () {
  if ($(this).val() == "false") {
    $('#vehicle_vibration_reason').prop('required', true);
    $('#vehicle_vibration_reason').css('border-color', 'Red');
  } else {
    $('#vehicle_vibration_reason').prop('required', false);
    $('#vehicle_vibration_reason').css('border-color', '#9e9e9e');
  }
});



var d = new Date();          
var n = new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric' });
var datetime = document.getElementById("datetime");
if(datetime!=null)
document.getElementById("datetime").innerHTML = (("0"+d.getDate()).slice(-2)) +"/"+ (("0"+(d.getMonth()+1)).slice(-2)) +"/"+ (d.getFullYear()) +" , "+n;