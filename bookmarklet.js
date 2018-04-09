(function() {
  var idnum = Math.random().toString(9).substr(2,4)

  var readerText = '<div id="readerShell-NUM" style="position:fixed; top:20px; right:20px; min-width:25%; max-width:90%; z-index:2147483648"><button type="button" class="close" id="readerClose-NUM" aria-label="Close" style="position:fixed; top:25px; right:25px"><span aria-hidden="true">&times;</span></button><iframe id="readerContent-NUM" src="https://gkiar.me/reading/embedded.html" height=620px width=100% style="border:none; border-radius: 10px; background-color:rgba(240,240,240,0.95);"></iframe></div>'
  readerText = readerText.replace(/NUM/g, idnum)
  document.body.innerHTML += readerText

  var iframeObject = document.getElementById("readerContent-"+idnum);
  iframeObject.addEventListener("load", function(){
    iframer = this.ContentDocument
    if (iframer == null) {
      iframer = this.contentWindow.document;
    }

    iframer.getElementById('url').value = window.location.href
    iframer.getElementById('paper-name').value = window.document.title

    var closer = document.getElementById("readerClose-"+idnum)
    closer.addEventListener("click", function(event) {
      document.getElementById("readerContent-"+idnum).remove()
      document.getElementById("readerShell-"+idnum).remove()
    });
  });
}());
