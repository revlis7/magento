jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery.ajax({
        type : "get",
        dataType : "jsonp",
        url : "http://yellow.kevin.poppen.lab/account/cookie",
        jsonp: "callback",
        jsonpCallback: "loginHandler",
        success: function(json) {
            console.log(json.session_id);
            if(json.session_id != '' && typeof(json.session_id) != 'undefined') {
                jQuery.cookie('_ses', json.session_id, { path: '/', domain: '.kevin.magento.lab' });
                location.reload();
            }
        }
    });
});
