// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("May 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `💍 ${days}d ${hours}h ${minutes}m ${seconds}s 💍`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "🎉 The big day is here! 🎉";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Confirm Attendance Function
function confirmAttendance() {
    alert("Thank you for confirming your attendance! We can't wait to celebrate with you! 🎊");
}

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");

    // محاولة التشغيل تلقائياً بعد تحميل الصفحة
    audio.volume = 1.0; // تأكدي من أن الصوت ليس مكتوماً
    audio.play().catch(error => {
        console.log("Autoplay blocked. Trying again after user interaction.");
        document.body.addEventListener("click", function() {
            audio.play();
        }, { once: true });
    });
});
