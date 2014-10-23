ECHYO
=====

ECHYO is a open-source node app that no-one would every want to use. It hosts a endpoint URL that can be fed to the [Yo API](http://dev.justyo.co) as a "callback" for incoming yo's. When recieved, a POST request is sent to the Yo API to respond back. 

Dependencies (Node Modules)
-------
* Request
* Express

Installation
------------
Fill in the following is `app.js`:

```JavaScript
var secret = '' // add special random thing here to attempt to prevent unauthorized access

var apiToken = '' // Yo API Token here (from dev.justyo.co)
```

Usage
-----

    $ node app.js
    
Contributing
------------
Like I said, I doubt anyone will even look at this. It was just a project that I used to learn some basic Request and Express. However, if you are extremely inclined to contribute, feel free to submit a pull request. :-)