$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#add-btn").click(function(e) {
  e.preventDefault();
  $("#addModal").modal("show");
});

var contentWrapper = document.querySelector('#content-wrapper');

function createContent() {
  var contentRow = document.createElement('div');
  contentRow.className = 'row';

  // image
  var contentLeft = document.createElement('div');
  contentLeft.className = 'col-6 mb-3';

  var pict = document.createElement('img');
  pict.style = 'max-width: 100%;';
  pict.src = '/src/images/nature.jpg'

  // description
  var contentRight = document.createElement('div');
  contentRight.className = 'col-6';

  var description = document.createElement('p');
  description.textContent = 'My First Description';
  description.style.color = "purple";

  contentLeft.appendChild(pict);
  contentRight.appendChild(description);

  contentRow.appendChild(contentLeft);
  contentRow.appendChild(contentRight);

  contentWrapper.appendChild(contentRow);
}
// createContent()