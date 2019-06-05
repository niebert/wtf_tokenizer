
const setTimeID = function (data) {
  if (data.hasOwnProperty("timeid")) {
    console.log("data.timeid exists!");
  } else {
    console.log("data.timeid created!");
    var now = new Date();
    data.timeid = now.getTime();
  };
};


const replaceString = function (pString,pSearch,pReplace) {
	  //----Debugging------------------------------------------
	  // console.log("js/wikiconvert.js - Call: replaceString(pString:String,pSearch:String,pReplace:String):String");
	  // alert("src/lib/tokenlib.js - Call: replaceString(pString:String,pSearch:String,pReplace:String):String");
	  //-------------------------------------------------------

	  	//alert("cstring.js - replaceString() "+pString);
	  	if (!pString) {
	  		alert("replaceString()-Call - pString not defined!");
	  	} else if (pString != '') {
				//alert("cstring.js - replaceString() "+pString);
				var vHelpString = '';
				var vN = pString.indexOf(pSearch);
				var vReturnString = '';
				while (vN >= 0) {
					if (vN > 0)
						vReturnString += pString.substring(0, vN);
						vReturnString += pReplace;
									if (vN + pSearch.length < pString.length) {
							pString = pString.substring(vN+pSearch.length, pString.length);
					} else {
							pString = ''
					};
					vN = pString.indexOf(pSearch);
				};
				return vReturnString + pString;
			};
};
	//----End of Method replaceString Definition


let tokenlib = {
  "setTimeID": setTimeID,
  "replaceString": replaceString
};

module.exports = tokenlib;
