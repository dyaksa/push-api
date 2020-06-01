self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    if (!event.action) {
        //pengguna menyentuh notifikasi diluar action
        console.log("Notification click");
        return;
    }

    switch (event.action) {
        case "yes-action":
            console.log("Pengguna memilih action yes");
            clients.openWindow("https://google.com")
            break;
        case "no-action":
            console.log("Pengguna memilih no action");
            break;
        default:
            console.log(`action yang dipilih tidak dikenal : ${event.action}`);
            break;
    }
});

self.addEventListener("push", event => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = "Push message no payload";
    }

    let options = {
        body: body,
        icon: "img/logo.png",
        vabrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification("Push Notification", options)
    )
});