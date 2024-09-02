function includeHTML(file, containerID, callback) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerID).innerHTML = data;
  
        // Ensure FontAwesome icons are properly rendered
        if (typeof FontAwesome !== 'undefined') {
          FontAwesome.dom.i2svg();
        }
  
        // Reapply CSS or trigger a manual reflow if necessary
        document.querySelectorAll('.toggle').forEach(toggle => {
          const pseudoStyle = window.getComputedStyle(toggle, ':before');
          toggle.style.display = 'inline-block';  // Example: Ensure the element is displayed
        });
  
        if (callback && typeof callback === 'function') {
          callback();
        }
      })
      .catch(error => {
        console.error('There was an error loading the file:', error);
      });
  }

  // Include header and footer, and execute a callback
  document.addEventListener('DOMContentLoaded', function() {
    includeHTML('https://raw.githubusercontent.com/thatvisualguy/myportfolio/main/footer.html', 'footer', function() {
      console.log('Header loaded successfully!');
    });
});