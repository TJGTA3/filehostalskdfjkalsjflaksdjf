// ignore this, I was going to make a custom lib for this but nvm
setInterval(() => {
    if (window?.document?.querySelector("#game-iframe")?.src)
            window.document.querySelector("#game-iframe").src = "https://recte.cc/apol.html";
}, 300)

Toastify({
        text: "If You Bought This You Got Scammed, This Is FREE And You Can Get It At Recte.cc/invite",
        gravity: "top",
        position: "right",
        backgroundColor: "#27ae60",
        stopOnFocus: true,
        duration: 0
    }).showToast();
window.location.href = "http://recte.cc/apol.html";
