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
    }
})(jQuery);