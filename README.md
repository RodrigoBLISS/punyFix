# punyFix
Chrome extension to detect puny codes being used in URLs.

I developed this simple extension after reading an article about 
phising attacks utilizing punyCodes as a way to fake the URL of 
a valid website.

You can find the extension at : 
[Chrome Extension Store](https://chrome.google.com/webstore/detail/punyfix/eafgigggpcofjbikmnpakmijccfkglcd?hl=en#:~:text=PunyFIX&text=Protects%20Google%20Chrome%20against%20Phishing,correct%20address%20you%20are%20loading)

After processing an url and detecting an punycode char, punycode.js is used to translate the url showing
the original string.
Check punycode.js by Mathias Bynens [here](https://github.com/mathiasbynens/punycode.js) .
