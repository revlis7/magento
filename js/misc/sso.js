jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery.ajax({
        type : "get",
        dataType : "jsonp",
        // url : "http://labs.chiapei.me/login/sso.php",
        url : "http://yellow.kevin.poppen.lab/account/cookie",
        jsonp: "callback",
        jsonpCallback: "loginHandler",
        success: function(json) {
            // for poppen
            console.log(json.session_id);
            jQuery.cookie('_ses', json.session_id, { path: '/' });
            // for labs
            // console.log(json.PHPSESSID);
            // console.log(json.loginname);
            if(json.PHPSESSID != '' && typeof(json.PHPSESSID) != 'undefined') {
                jQuery.cookie('_ses', json.session_id, { path: '/', domain: '.kevin.magento.lab' });
                // jQuery.cookie('_lgn', json.loginname, { path: '/', domain: '.mag.chiapei.me' });
                location.reload();
            }
        }
    });
});