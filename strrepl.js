// Replace all in string
function strrepl(srch, repl, str, flag) {
    srch = srch.replace(/[|\\{}()[\]^$+*?.-]/gm, '\\$&');
    flag = flag || 'gim';
    var rx = new RegExp(srch, flag);
    return str.replace(rx, repl);
}
