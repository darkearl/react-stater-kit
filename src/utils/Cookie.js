module.exports = {
    createCookie: function(name, value, expires, path, domain){
        var cookie = name + "=" + escape(value) + ";"

        if (expires) {
            // If it's a date
            if(expires instanceof Date) {
            // If it isn't a valid date
            if (isNaN(expires.getTime()))
            expires = new Date()
            }
            else
            expires = new Date(expires * 1000)

            cookie += "expires=" + expires.toGMTString() + ";"
        }

        if (path)
            cookie += "path=" + path + ";"
        if (domain)
            cookie += "domain=" + domain + ";"

        document.cookie = cookie;
        return value
    },
    getCookie: function(name) {
        var nameEQ = name + "="
        var ca = document.cookie.split(';')
        for(var i=0;i < ca.length;i++) {
            var c = ca[i]
            while (c.charAt(0) ===' ') c = c.substring(1,c.length)
            if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length,c.length))
        }
        return null;
    },
    deleteCookie: function(name, path, domain) {
    // If the cookie exists
    if (this.getCookie(name))
        this.createCookie(name, "", -1, path, domain);
    }
}