
function _matos(ary) {
    var str = '';
    var i;
    for (i=0;i<ary.length;i++) {
        str+=String.fromCharCode(ary[i]);
    }
    
    return str;
}

function _mto() {    
    return _matos(new Array(109, 97, 105, 108, 116, 111, 58));
}

function _ma() {    
    return _matos(new Array(64, 97, 105, 107, 105, 100, 111));
}

function _mnl() {
    return _matos(new Array(46, 110, 108));
}

function _maanl(x, y, ary) {
    var str2 
        = _matos(ary) 
        + _ma()
        + _matos(new Array(97, 114, 110, 104, 101, 109))
        + _mnl();
        
    document.write('<a '+x+'href="'+_mto()+str2+'">'+(y==""? str2: y)+'<\/a>');
}

function _mawnl(x, y, ary) {
    var str2 
        = _matos(ary) 
        + _ma()
        + _matos(new Array(119,  97, 103, 101, 110, 105, 110, 103, 101, 110))
        + _mnl();
        
    document.write('<a '+x+'href="'+_mto()+str2+'">'+(y==""? str2: y)+'<\/a>');
}


function ma6(x, y) {  _maanl(x, y, new Array(97, 105, 107, 105, 100, 111)); }

function me2(x, y) { _maanl(x, y, new Array(101, 100)); }
function me3(x, y) { _maanl(x, y, new Array(101, 100, 121)); }
function me4(x, y) { _maanl(x, y, new Array(101, 114, 105, 107)); }
function me5(x, y) { _mawnl(x, y, new Array(101, 108, 116, 106, 101)); }

function mi4(x, y) { _maanl(x, y, new Array(105, 110, 102, 111)); }

function mj6(x, y) { _maanl(x, y, new Array(106, 101, 114, 111, 101, 110)); }
function ms6(x, y) { _maanl(x, y, new Array(115,  97,  98, 105, 110, 101)); }
function my4(x, y) { _maanl(x, y, new Array(121, 118, 111, 110)); }

function dbgout(str) {
//    document.write("<br/><span style='background-color: yellow; border: solid 1px red;'>"+str+"</span>");
}
function wiki(str1) {
    dbgout(str1);
    var ary1 = new Array(109, 97, 105, 108, 116, 111, 58);
	var text0 = "";
    for (i=0;i<ary1.length;i++) {
        text0+=String.fromCharCode(ary1[i]);
    }
    text1 = str1;
    text1 = text1.replace(/.*wiki\//, "");
    text  = text1.replace(/_/, " ");
    text1 = text1.replace(/_/, ".").toLowerCase();
    dbgout(text1);
    text2 = str1;
    text2 = text2.replace(/http:\/\/www\./, "@");
    text2 = text2.replace(/\/wiki.*/, "");
    dbgout(text2);
    dbgout("");
    
    document.write("<a href='"+text0+text1+text2+"'>"+text1+text2+"<\/a>");
}

