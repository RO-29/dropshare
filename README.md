##What it does?

It's a simple nodejs server which uploads a file to user dropbox and then generates some stat based on that file and also it sends the uploaded file link and stat(s) to Predefind Email list and Whatsapp contacts.
Special thanks to <a href= "https://github.com/tgalal/yowsup">tgalal</a> for his Awesome Whatsapp Hack!

##Demo
http://www.dropshare.tk:8080/

##What is the need for this?

It lets you simuntaneously let every friend or co-worker access the File(s) you shared without the need of sending individual Emaiil or Whatsapp .. it automates this task for you.


##Dropbox access Tokens

Follow this guide <a target=_blank href="https://www.dropbox.com/developers/reference/devguide"> here</a>

### Prerequiste NPM packages

 * express 
 * dropbox
 * multipart
 * http
 * fs
 * sys
 * emailjs
 * url

### TODO

 * Store Email/Contacts list in redis.
 * Provide some auth layer.
 * Copy Files in Friends (directly) Dropbox.


