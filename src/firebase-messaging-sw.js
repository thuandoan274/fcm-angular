importScripts('https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.1.0/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyCsvUV79uQX3ZEK6HaA_Yg0nKfjIMTEIj0",
  authDomain: "my-fcm-test-23814.firebaseapp.com",
  databaseURL: "https://my-fcm-test-23814.firebaseio.com",
  projectId: "my-fcm-test-23814",
  storageBucket: "my-fcm-test-23814.appspot.com",
  messagingSenderId: "52868937389"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const title = 'Hello World from SW!';
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});