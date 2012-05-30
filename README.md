Square Thing App
================

Super simple example app using YUI's Y.App component.

**http://square-thing-app.herokuapp.com/**

The purpose of this app is to show how change in the URL can lead to a state
change in a model which then causes a view to update the UI. This little app is
written such that it works perfectly fine _without_ JavaScript. But with
JavaScript enabled the experienced will be enhanced and performance will be
better because it won't be making requests to the server. Progressive
enhancement FTW!

The interesting bits are in:

* `server.js`
* `public/app.js`
