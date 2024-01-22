$("button").click(function() {
  $(".check-icon").hide();
  setTimeout(function() {
    $(".check-icon").show();
  }, 10);
});

function navigateToHomePage() {
  window.location.href = 'http://127.0.0.1:5500/';
}