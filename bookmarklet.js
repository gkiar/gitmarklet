(function() {
  document.body.innerHTML += '<div id="readerShell" style="position:fixed; top:20px; right:20px; min-width:25%; max-width:90%; z-index:2147483648"><iframe id="readerContent" src="https://gkiar.me/reading/embedded.html" height=620px width=100% style="border:none; padding:10 20 0 20px; border-radius: 10px; background-color:rgba(240,240,240,0.95);"></iframe></div>'

  var iframeObject = document.getElementById("readerContent");
  iframeObject.addEventListener("load", function(){
    iframer = this.ContentDocument
    if (iframer == null) {
      iframer = this.contentWindow.document;
    }

    var closer = iframer.getElementById("readerClose")
    closer.addEventListener("click", function(event) {
      document.getElementById("readerContent").remove()
      document.getElementById("readerShell").remove()
      document.getElementById("readerClose").remove()
    });
  });
}());
