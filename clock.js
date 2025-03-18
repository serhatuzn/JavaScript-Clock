function showTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Tek haneli sayıları çift haneli göstermek için başına '0' ekliyoruz
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let time = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000); // Her saniye fonksiyonu tekrar çağır
}

// Kullanıcı adını almak için prompt penceresi aç
let userName = prompt("Adınızı girin:");
document.getElementById("myName").innerText = userName ? userName : "Ziyaretçi"; 

// Saati başlat
showTime();
