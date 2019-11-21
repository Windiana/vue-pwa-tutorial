if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    registration.update()
      .then(function(data) {
        console.log('----------- update available')
      })
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('---')
  event.prompt()
});