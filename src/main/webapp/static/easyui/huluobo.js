(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var serializeArray = this.serializeArray();
        $.each(serializeArray, function () {
            if (serializeObj[this.name]) {
                if ($.isArray(serializeObj[this.name])) {
                    serializeObj[this.name].push(this.value);
                } else {
                    serializeObj[this.name] = [serializeObj[this.name], this.value];
                }
            } else {
                serializeObj[this.name] = this.value;
            }
        })
        return serializeObj;
    };
    
    $.messageShowSuccess = function (msg) {
        $.messager.show({
            msg: msg,
            showType:'show',
            height:80,
            slide:'none',
            style:{
                left:'',
                right:0,
                top:document.body.scrollTop+document.documentElement.scrollTop+60,
                bottom:'',
                border:'none',
                background:'#afcf24'
            }
        });
    };

    $.messageShowFail = function (msg) {
        $.messager.show({
            msg: msg,
            showType:'show',
            height:80,
            slide:'none',
            style:{
                left:'',
                right:0,
                top:document.body.scrollTop+document.documentElement.scrollTop+60,
                bottom:'',
                border:'none',
                background:'#df4916'
            }
        });
    };
})(jQuery);