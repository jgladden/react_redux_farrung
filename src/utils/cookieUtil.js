const cookieUtil = {
  setCookie: function(name, value, expires, path, domain, secure) {
    document.cookie = name + '=' + encodeURIComponent(value) +
      (expires ? '; expires=' + expires.toGMTString() : '') +
      (path ? '; path=' + path : '') +
      (domain ? '; domain=' + domain : '') +
      (secure ? '; secure' : '');
  },

  getCookie: function(name) {
    if (!document.cookie)
      return name ? null : {};

    const addSlash = str => {
      let chars = '[ ] ^ $ . | ? * + ( ) \\'.split(' '),
        i = chars.length;
      while (i--) {
        str = str.replace(new RegExp('\\' + chars[i], 'g'),'\\' + chars[i]);
      }
      return str;
    };

    let parts;
    if(name) {
      parts = document.cookie.match(new RegExp('(?:^|[\\s;])' + addSlash(name) + '=([^;]*)'));
      return parts ? decodeURIComponent(parts[1]) : null;
    }

    // no name specified.  create hash
    var cookies = document.cookie.split(';'),
      tmp = {},
      partsRegex = /([^\s=]+)=([^\s]*)/,
      len = cookies.length;

    while (len--) {
      parts = (cookies[len] || '').match(partsRegex);
      if (parts && parts[1]) {
        tmp[parts[1]] = decodeURIComponent(parts[2] || '');
      }
    }
        
    return tmp;
  },

  deleteCookie: function(name, path, domain) {
    if (cookieUtil.getCookie(name))
      this.setCookie(name, '', new Date(1000), path, domain);
  }
};

export default cookieUtil;

