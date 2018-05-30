(function() {
  var idnum = Math.random().toString(9).substr(2,4)
  var token = document.getElementById('readerBookmarklet').getAttribute('token')
  var repo = document.getElementById('readerBookmarklet').getAttribute('repo')

  var readerText = '<div id="readerShell-NUM" style="position:fixed; top:1vh; right:1vw; height:98vh; min-width:25%; max-width:90%; z-index:2147483648"><button id="readerClose-NUM" style="position:fixed; top:2vh; right:2vw; width:30px; height:30px; opacity:0"></button><iframe id="readerContent-NUM" src="https://gkiar.me/gitmarklet/embedded.html?name=NAME&url=URL&token=TOKEN&repo=REPO&button=true" height=100% width=100% style="border:none; border-radius: 10px; background-color:rgba(240,240,240,0.95)"></iframe></div>'
  readerText = readerText.replace(/NUM/g, idnum)
  readerText = readerText.replace(/NAME/g, window.document.title)
  readerText = readerText.replace(/URL/g, window.location.href)
  readerText = readerText.replace(/TOKEN/g, token)
  readerText = readerText.replace(/REPO/g, repo)
  document.body.innerHTML += readerText

  var iframeObject = document.getElementById("readerContent-"+idnum);
  iframeObject.addEventListener("load", function(){
    var closer = document.getElementById("readerClose-"+idnum)
    closer.addEventListener("click", function(event) {
      document.getElementById("readerContent-"+idnum).remove()
      document.getElementById("readerShell-"+idnum).remove()
    });
  });
}());
