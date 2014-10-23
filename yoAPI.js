var request = require('request')

module.exports = function(target, token, times, callback){
	var i = 0;
	request.post(
	    'https://api.justyo.co/yo/',
	    { form: { api_token: token, username: target } },
	    function (error, response, body) {
	    	if (error){
	    		callback(error)
	    	}
	        if (!error && response.statusCode == 200) {
	        	++i
	            console.log('Echo\'d to '+target+' response: ' + body)
	            if (i < times){
	            	doYo(target, token, times)
	            }
	            else{
	            	callback()
	            }
	        }
	    }
	);
}