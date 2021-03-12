
var file = document.body.getAttribute("data-file");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/repos/maxmetcalfe/website/commits?path=" + file);
xhr.send();

xhr.onload = function() {
  if (xhr.status != 200) {
    return;
  }

  try {
    var commit = JSON.parse(xhr.response)[0];
    var p = document.getElementById("updated");
    if (p) {
        p.innerText = p.innerText + " " + new Date(commit.commit.author.date);
    }
  } catch(e) {}
};
