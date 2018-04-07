(function() {
  // get style sheets
  var sc1 = document.createElement("script");
  sc1.type = "text/css";
  sc1.rel = "stylesheet";
  sc1.id = "reader-script";
  sc1.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  document.body.appendChild(sc1);

  var sc2 = document.createElement("script");
  sc2.type = "text/css";
  sc2.rel = "stylesheet";
  sc2.id = "reader-script";
  sc2.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
  document.body.appendChild(sc2);

  var sc3 = document.createElement("script");
  sc3.type = "text/css";
  sc3.rel = "stylesheet";
  sc3.id = "reader-script";
  sc3.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css";
  document.body.appendChild(sc3);

  var sc4 = document.createElement("script");
  sc4.type = "text/javascript";
  sc4.id = "reader-script";
  sc4.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
  document.body.appendChild(sc4);

  var sc5 = document.createElement("script");
  sc5.type = "text/javascript";
  sc5.id = "reader-script";
  sc5.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js";
  document.body.appendChild(sc5);

  var sc6 = document.createElement("script");
  sc6.type = "text/javascript";
  sc6.id = "reader-script";
  sc6.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.body.appendChild(sc6);

  var $mymodal= $('<div class="modal fade" id="readingModal" style="width:100%; height:100%;"><div id="readerShell" style="position:absolute; right:0; width:40%; padding: 10px;"><div id="readerContent" style="background-color: rgba(255, 255, 255, 0.95); padding:20px; border-radius: 10px; overflow: visible; overflow-y: visible !important;"></div></div></div>');
  $('body').append($mymodal);
  $('#readerContent').load('./index.html #mainform');
  $('#readingModal').modal({backdrop: true, focus: true, show: true})

  $('#readingModal').on('hidden.bs.modal', function () {
    $("script[id='reader-script']").remove()
    $("div[id='readingModal']").remove()
  })
}());
