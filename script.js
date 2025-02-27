document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  const themeToggleButton = document.getElementById('theme-toggle');
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }

  const fajrTime = { hours: 5, minutes: 11 };
  const maghribTime = { hours: 18, minutes: 3 };
  const ishaTime = { hours: 19, minutes: 36 };

  function updateCountdown() {
    const now = new Date();
    const fajr = new Date();
    const maghrib = new Date();
    const isha = new Date();

    fajr.setHours(fajrTime.hours, fajrTime.minutes, 0);
    maghrib.setHours(maghribTime.hours, maghribTime.minutes, 0);
    isha.setHours(ishaTime.hours, ishaTime.minutes, 0);

    let targetTime, message;

    if (now >= fajr && now < maghrib) {
      targetTime = maghrib;
      message = "Iftara kalan süre";
    } else if (now >= isha || now < fajr) {
      targetTime = fajr;
      message = "Sahura kalan süre";
      if (now >= isha) {
        fajr.setDate(fajr.getDate() + 1);
      }
    } else {
      document.getElementById('countdown').innerHTML = "Hayırlı Iftarlar. Allah kabul etsin!";
      return;
    }

    const diff = targetTime - now;

    if (diff > 0) {
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
      
      document.getElementById('countdown').innerHTML = `<span>${hours}:${minutes}:${seconds}</span><br><span>${message}</span>`;
    } else {
      document.getElementById('countdown').innerText = "Zeit erreicht!";
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  const hadiths = [
    "„Allah’ım Senin rızân için oruç tuttum. Sana inandım. Sana güvendim. Senin rızkınla orucumu açıyorum.” - (Ebû Dâvud, Savm, 22)",
  ];

  const hadithElement = document.getElementById('hadith');
  if (hadithElement) {
    hadithElement.innerText = hadiths[new Date().getDay() % hadiths.length];
  }

  var map = L.map('map').setView([52.1654719, 10.5229386], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([52.1654719, 10.5229386]).addTo(map)
    .bindPopup('DITIB Moschee - Schützenstraße 37, 38304 Wolfenbüttel')
    .openPopup();
});
