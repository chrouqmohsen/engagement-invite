
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5; 

    
    document.body.addEventListener("click", function () {
        audio.play();
    }, { once: true });

    
    createStars();
});

function createStars() {
    const numberOfStars = 350; 
    const body = document.body;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = Math.random() * 8 + 'px'; 
        star.style.height = star.style.width; 
        star.style.top = Math.random() * 100 + '%'; 
        star.style.left = Math.random() * 100 + '%'; 
        star.style.animationDuration = Math.random() * 2 + 2 + 's'; 
        body.appendChild(star);
    }
}

function registerGuest() {
    alert("✨ Your royal invitation is confirmed! See you at the enchanted celebration! 👑🎊");
}

document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");

    function playMusic() {
        audio.play().catch(error => console.log("Autoplay blocked: ", error));
        document.removeEventListener("click", playMusic);
    }

    document.addEventListener("click", playMusic);
});

const countdownDate = new Date("May 1, 2025 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The big day has arrived!";
    }
}, 1000);

function showForm() {
    document.getElementById("confirmButton").style.display = "none"; 
    document.getElementById("guestForm").style.display = "block"; 
    document.getElementById("overlay").style.display = "block"; 
}


document.getElementById("guestForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var guestName = document.getElementById("guestName").value; 
    var guestCount = document.getElementById("guestCount").value; 

    
    document.getElementById("confirmedName").textContent = guestName;
    document.getElementById("confirmedCount").textContent = guestCount;

   
    document.getElementById("guestForm").style.display = "none";
    document.getElementById("overlay").style.display = "none"; 
  
    document.getElementById("confirmationMessage").style.display = "block";


    console.log("Guest Name: " + guestName + ", Guest Count: " + guestCount);

        // 📨 Send to Telegram
        const botToken = "7894767759:AAFyiVxlFvLKvJhCsvqd64QG8fycsjrzmiI";
        const chatId = "1296028412";
        const message = `💌 New Guest Confirmed!\n👤 Name: ${guestName}\n👥 People: ${guestCount}`;
    
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Telegram response:", data);
        })
        .catch(error => {
            console.error("Error sending message to Telegram:", error);
        });
    
});
