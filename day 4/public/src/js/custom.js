$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#add-btn").click(function(e) {
  e.preventDefault();
  $("#addModal").modal("show");
});

var contentWrapper = document.querySelector('#content-wrapper');

function createContent(data) {
  var contentRow = document.createElement('div');
  contentRow.className = 'row';

  // image
  var contentLeft = document.createElement('div');
  contentLeft.className = 'col-6 mb-3';

  var pict = document.createElement('img');
  pict.style = 'max-width: 100%;';
  pict.src = data.image

  // description
  var contentRight = document.createElement('div');
  contentRight.className = 'col-6';

  var description = document.createElement('p');
  description.textContent = data.title;
  description.style.color = 'green';

  contentLeft.appendChild(pict);
  contentRight.appendChild(description);

  contentRow.appendChild(contentLeft);
  contentRow.appendChild(contentRight);

  contentWrapper.appendChild(contentRow);
}

var url = 'https://vue-pwa-tutor.firebaseio.com/tasks.json'
var isFetched = ''

function updateUI(data) {
  for(var i=0; i<data.length; i++) {
    createContent(data[i])
  }
}

fetch(url)
  .then(function(data) {
    return data.json()
  })
  .then(function(data) {
    console.log('Fetch data dari web..', data)
    if(!isFetched) {
      var arrData = []
      for(key in data) {
        arrData.push(data[key])
      }
      updateUI(arrData)
      isFetched = 'web'
    }
  })


if('indexedDB' in window) {
  readStore('task')
    .then(function(data) {
      if(!isFetched) {
        var arrData = []
        for(key in data) {
          arrData.push(data[key])
        }
        console.log("----", arrData)
        updateUI(arrData)
        isFetched = 'cache'
      }
    })
}

  // if('caches' in window) {
  //   caches.match(url)
  //     .then(function(data) {
  //       if(typeof data !== 'undefined') {
  //         return data.json()
  //       }
  //     })
  //     .then(function(data) {
  //       console.log('Fetch data dari cache..', data)
  //       if(!isFetched) {
  //         var arrData = []
  //         for(key in data) {
  //           arrData.push(data[key])
  //         }
  //         updateUI(arrData)
  //         isFetched = 'cache'
  //       }
  //     })
  // }