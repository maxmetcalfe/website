
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
    var p = document.createElement("p");
    p.innerText = "Last updated - " + new Date(commit.commit.author.date);
    document.body.appendChild(p);
  } catch(e) {}
};
