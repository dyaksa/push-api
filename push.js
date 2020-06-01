var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BNFSbXV4kWLSZ9Wth7FWdjk2B0qPI3ICpAg8755kaDNiRAPT0FlbL_y9fxu277QsxjuTzelvfrqJwQjkSey4fUw",
    "privateKey": "pdv3zl8wCuYoPg5t2yu6FSvyQFFQX2StA6dSJkM_I-4"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);


let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/coCmmGfQit4:APA91bHWb_P-Tm6K9-OxZoyxbwiT_66CDjbUYxL-wCuJbg9ykWk6GVUaLyHWevoUyoNDKIEMcSsM9dlhA-mEy1pNd79eoFKfhUDt_HIzJPdWshtbbo_O7a0hKizkI8Y3KMYGyndMCNL4",
    "keys": {
        "p256dh": "BKzIt+ijBlb/+WarenJOv+U6YJELtRVhKvyB+tVpS0t56n1CSbUB7WX9gF4ZX0Qt/FxnCJX//TxYw0bnn4D2zxo=",
        "auth": "DVJPbEPzi0AFoFFgGFw6SQ=="
    }
};

let payload = "Selamat aplikasi anda sudah menerima push notification";

let options = {
    gcmAPIKey: '835587673166',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);