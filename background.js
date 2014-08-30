chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    id: 'multapp',
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});
