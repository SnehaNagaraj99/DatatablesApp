// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require popper
//= require bootstrap
//= require datatables
//= require_tree .



require("@rails/ujs").start()
require('jquery')
// require("jquery-ui")

import $ from "jquery"

// import jstree from 'jstree/src/jstree.js'
import dt from 'datatables.net-dt';
 

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()

  $(document).ready(function(){
    $("#orderTable").DataTable();

  });

