(function() {
  // get style sheets
  var sc_jq = document.createElement("script");
  sc_jq.type = "text/javascript";
  sc_jq.id = "reader-script";
  sc_jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.body.appendChild(sc_jq);

  var sc_bs1 = document.createElement("script");
  sc_bs1.type = "text/css";
  sc_bs1.rel = "stylesheet";
  sc_bs1.id = "reader-script";
  sc_bs1.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  document.body.appendChild(sc_bs1);

  var sc_bs2 = document.createElement("script");
  sc_bs2.type = "text/javascript";
  sc_bs2.id = "reader-script";
  sc_bs2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
  document.body.appendChild(sc_bs2);

  $('body').prepend('<div class="modal fade" id="readingModal" style="width:100%; height:100%;"><div id="readerShell" style="position:absolute; right:0; min-width:40%; padding: 10px;"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><iframe id="readerContent" src="https://gkiar.me/reading/embedded.html" style="background-color: rgba(255, 255, 255, 0.95); padding:20px; border-radius: 10px; overflow: unset;" width=100% height=675px></iframe></div></div>');

  $('#readingModal').modal({backdrop: true, focus: true, show: true})
  $('#readingModal').on('hidden.bs.modal', function () {
    $("script[id='reader-script']").remove()
    $("div[id='readingModal']").remove()
    $("iframe[id='readerContent']").remove()
  });
}());

