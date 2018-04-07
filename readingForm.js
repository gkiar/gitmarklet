//Create issue form handler
window.addEventListener("load", function() {

  const entryForm = document.getElementById('needs-validation');
  //Form event listener on Submit
  entryForm.addEventListener("submit", function(event) {
    const mainUrl = this.querySelector('#url').value;
    const tok = this.querySelector('#token').value;
    if (!entryForm.checkValidity()) {
      event.preventDefault();

    } else {
      event.preventDefault();

      //Calls function that will handle GitHub API connection
      httpConnect(this, tok);
      entryForm.classList.add("was-validated");
    }

  }, false)
}, false)

//Connects to GitHub API and posts the object with form values
function httpConnect(form, tok) {
  const entry = createIssueObj(form);
  const httpRequest = new XMLHttpRequest();
  const successMessage = document.querySelector('.form-success')

  if (!httpRequest) {
    return false;
  }

  httpRequest.onreadystatechange = createGitIssue;
  httpRequest.open('POST', 'https://api.github.com/repos/gkiar/reading/issues?access_token='+ tok); // ###'); //Replace '###' with GitHub Personal Token
  httpRequest.setRequestHeader('Accept', 'application/vnd.github.v3.raw+json');
  httpRequest.send(JSON.stringify(entry));

  function createGitIssue() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 201) {
        form.reset();
        document.getElementById("issuelink").href = JSON.parse(httpRequest.response).html_url;
        successMessage.classList.remove("hidden");
      } else {
        alert('There was a problem sending the form.');
      }
    }
  }
}

//Gets values from the form and creates an Object with them
function createIssueObj(form) {
  var issueObj = {},
    paper = form.querySelector('#paper-name'),
    doesText = form.querySelector('#does'),
    doesntText = form.querySelector('#doesnt'),
    notes = form.querySelector('#notes'),
    url = form.querySelector('#url'),
    taglist_ = form.querySelector('#tags')

    taglist = []
    for (var i=0; i < taglist_.selectedOptions.length; i++) {
       taglist = taglist.concat(taglist_.selectedOptions[i].label)
    }

  issueObj.title = "Paper: " + paper.value;
  issueObj.body = "URL: ["+ url.value +"](" + url.value + ") \n" +
                  "## This paper does... \n\n" + doesText.value + "\n" +
                  "## This paper does not... \n\n" + doesntText.value + "\n" +
                  "## Other comments? \n\n" + notes.value + "\n";
  issueObj.labels = taglist
  console.log(issueObj)
  return issueObj;
}
