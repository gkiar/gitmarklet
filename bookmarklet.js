(function() {

  function loadJQ () {
    var sc_jq = document.createElement("script");
    sc_jq.type = "text/javascript";
    sc_jq.id = "reader-script";
    sc_jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    document.body.appendChild(sc_jq);
  };

  function loadBS() {
    var sc_bs1 = document.createElement("script");
    sc_bs1.type = "text/css";
    sc_bs1.rel = "stylesheet";
    sc_bs1.id = "reader-script";
    sc_bs1.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    document.body.appendChild(sc_bs1)

    var sc_bs2 = document.createElement("script");
    sc_bs2.type = "text/javascript";
    sc_bs2.id = "reader-script";
    sc_bs2.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
    document.body.appendChild(sc_bs2)
  };

  function createBookmarklet() {
    $('body').append('<div class="modal fade" id="readingModal" style="width:100%; height:100%; position: absolute; top: 20px; right: 20px"><div id="readerShell" style="position:absolute; right:0; min-width:40%; padding: 20px; background-colour: rgba(1,1,1,0.95); border-radius: 10px"><button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:relative; top:30px; right:15px"><span aria-hidden="true">&times;</span></button><iframe id="readerContent" src="https://gkiar.me/reading/embedded.html" style="overflow: unset;" width=100% height=675px></iframe></div></div>');

    $('#readingModal').modal({backdrop: true, focus: true, show: true})
    $('#readingModal').on('hidden.bs.modal', function () {
      $("script[id='reader-script']").remove()
      $("div[id='readingModal']").remove()
      $("iframe[id='readerContent']").remove()
    });
  };

  // loadJQ()
  // window.setTimeout(loadBS, 800)
  // window.setTimeout(createBookmarklet(), 1000);

  document.body.innerHTML += '<div id="readerShell" style="position:absolute; top:20px; right:20px; border-radius:10px; background-color:rgba(240,240,240,0.95);"><button type="button" class="close" id="readerClose" aria-label="Close" style="position:relative; top:10px; right:10px"><span aria-hidden="true">&times;</span></button><iframe id="readerContent" src="https://gkiar.me/reading/embedded.html" width=100% height=650px style="border:none; padding:0 30 0 30px"></iframe></div>'
  const closer = document.getElementById("readerClose")
  closer.addEventListener("click", function(event) {
    document.getElementById("readerContent").remove()
    document.getElementById("readerClose").remove()
    document.getElementById("readerShell").remove()
  });
}());
