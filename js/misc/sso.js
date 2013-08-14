jQuery.noConflict();
jQuery(document).ready(function() {
  jQuery.ajax({
    type : "get",
    dataType : "jsonp",
    url : "http://labs.chiapei.me/login/sso.php",
    jsonp: "callback",
    jsonpCallback: "loginHandler",
    success: function(json) {
        console.log(json.loginname);
        console.log(json.PHPSESSID);
    }
  });
});