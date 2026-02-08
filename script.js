// Gebetszeiten aus der PDF (Wolfenbüttel Ramazan İmsakiyesi 2026)
const prayerTimes = [
  { date: "2026-02-19", imsak: "05:32", gunes: "07:19", zuhr: "12:37", asr: "15:09", maghrib: "17:44", isha: "19:18" },
  { date: "2026-02-20", imsak: "05:31", gunes: "07:17", zuhr: "12:37", asr: "15:11", maghrib: "17:46", isha: "19:20" },
  { date: "2026-02-21", imsak: "05:29", gunes: "07:15", zuhr: "12:36", asr: "15:12", maghrib: "17:48", isha: "19:21" },
  { date: "2026-02-22", imsak: "05:27", gunes: "07:13", zuhr: "12:36", asr: "15:14", maghrib: "17:50", isha: "19:23" },
  { date: "2026-02-23", imsak: "05:25", gunes: "07:11", zuhr: "12:36", asr: "15:15", maghrib: "17:52", isha: "19:25" },
  { date: "2026-02-24", imsak: "05:23", gunes: "07:08", zuhr: "12:36", asr: "15:16", maghrib: "17:54", isha: "19:26" },
  { date: "2026-02-25", imsak: "05:20", gunes: "07:06", zuhr: "12:36", asr: "15:18", maghrib: "17:56", isha: "19:28" },
  { date: "2026-02-26", imsak: "05:18", gunes: "07:04", zuhr: "12:36", asr: "15:19", maghrib: "17:57", isha: "19:30" },
  { date: "2026-02-27", imsak: "05:16", gunes: "07:02", zuhr: "12:36", asr: "15:20", maghrib: "17:59", isha: "19:32" },
  { date: "2026-02-28", imsak: "05:14", gunes: "07:00", zuhr: "12:35", asr: "15:22", maghrib: "18:01", isha: "19:34" },
  { date: "2026-03-01", imsak: "05:12", gunes: "06:58", zuhr: "12:35", asr: "15:23", maghrib: "18:03", isha: "19:35" },
  { date: "2026-03-02", imsak: "05:10", gunes: "06:55", zuhr: "12:35", asr: "15:24", maghrib: "18:05", isha: "19:37" },
  { date: "2026-03-03", imsak: "05:07", gunes: "06:53", zuhr: "12:35", asr: "15:26", maghrib: "18:07", isha: "19:39" },
  { date: "2026-03-04", imsak: "05:05", gunes: "06:51", zuhr: "12:35", asr: "15:27", maghrib: "18:08", isha: "19:41" },
  { date: "2026-03-05", imsak: "05:03", gunes: "06:49", zuhr: "12:34", asr: "15:28", maghrib: "18:10", isha: "19:43" },
  { date: "2026-03-06", imsak: "05:01", gunes: "06:46", zuhr: "12:34", asr: "15:29", maghrib: "18:12", isha: "19:44" },
  { date: "2026-03-07", imsak: "04:58", gunes: "06:44", zuhr: "12:34", asr: "15:31", maghrib: "18:14", isha: "19:46" },
  { date: "2026-03-08", imsak: "04:56", gunes: "06:42", zuhr: "12:34", asr: "15:32", maghrib: "18:16", isha: "19:48" },
  { date: "2026-03-09", imsak: "04:54", gunes: "06:40", zuhr: "12:33", asr: "15:33", maghrib: "18:17", isha: "19:50" },
  { date: "2026-03-10", imsak: "04:51", gunes: "06:37", zuhr: "12:33", asr: "15:34", maghrib: "18:19", isha: "19:52" },
  { date: "2026-03-11", imsak: "04:49", gunes: "06:35", zuhr: "12:33", asr: "15:35", maghrib: "18:21", isha: "19:54" },
  { date: "2026-03-12", imsak: "04:46", gunes: "06:33", zuhr: "12:33", asr: "15:37", maghrib: "18:23", isha: "19:55" },
  { date: "2026-03-13", imsak: "04:44", gunes: "06:30", zuhr: "12:32", asr: "15:38", maghrib: "18:24", isha: "19:57" },
  { date: "2026-03-14", imsak: "04:41", gunes: "06:28", zuhr: "12:32", asr: "15:39", maghrib: "18:26", isha: "19:59" },
  { date: "2026-03-15", imsak: "04:39", gunes: "06:26", zuhr: "12:32", asr: "15:40", maghrib: "18:28", isha: "20:01" },
  { date: "2026-03-16", imsak: "04:36", gunes: "06:24", zuhr: "12:32", asr: "15:41", maghrib: "18:30", isha: "20:03" },
  { date: "2026-03-17", imsak: "04:34", gunes: "06:21", zuhr: "12:31", asr: "15:42", maghrib: "18:31", isha: "20:05" },
  { date: "2026-03-18", imsak: "04:31", gunes: "06:19", zuhr: "12:31", asr: "15:43", maghrib: "18:33", isha: "20:07" },
  { date: "2026-03-19", imsak: "04:28", gunes: "06:17", zuhr: "12:31", asr: "15:44", maghrib: "18:35", isha: "20:09" },
];

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('tr-TR', options);
}

function loadPrayerTimes() {
  const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;



  const todaysTimes = prayerTimes.find(pt => pt.date === today);
  const nextDay = new Date(now);
  nextDay.setDate(now.getDate() + 1);
  const tomorrowsTimes = prayerTimes.find(pt => pt.date === nextDay.toISOString().split('T')[0]);

  document.getElementById('current-date').textContent = `Tarih - ${formatDate(now)}`;

  if (todaysTimes) {
    document.getElementById('imsak-time').textContent = todaysTimes.imsak;
    document.getElementById('gunes-time').textContent = todaysTimes.gunes;
    document.getElementById('zuhr-time').textContent = todaysTimes.zuhr;
    document.getElementById('asr-time').textContent = todaysTimes.asr;
    document.getElementById('maghrib-time').textContent = todaysTimes.maghrib;
    document.getElementById('isha-time').textContent = todaysTimes.isha;
    startCountdown(todaysTimes, tomorrowsTimes);
  } else {
    document.getElementById('countdown').textContent = 'Bugüne ait namaz vakitleri bulunamadı.';
  }
}

function startCountdown(times, tomorrowsTimes) {
  const now = new Date();

  const getTime = (timeStr, addDay = false) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    if (addDay) date.setDate(date.getDate() + 1);
    return date;
  };

  const imsak = getTime(times.imsak);
  const maghrib = getTime(times.maghrib);
  const isha = getTime(times.isha);
  const nextImsak = tomorrowsTimes ? getTime(tomorrowsTimes.imsak, true) : getTime(times.imsak, true);

  let targetTime = null;
  let message = '';

  if (now >= isha || now.getHours() < 5) { 
    targetTime = now < imsak ? imsak : nextImsak;
    message = 'Sahura kalan süre';
  } else if (now < maghrib) {
    targetTime = maghrib;
    message = 'İftara kalan süre';
  } else if (now >= maghrib && now < isha) {
    targetTime = isha;
    message = 'Hayırlı Iftarlar, Allah kabul etsin!';
  }

  if (!targetTime || isNaN(targetTime.getTime())) {
    document.getElementById('countdown').textContent = 'Geçerli bir hedef saat bulunamadı.';
    return;
  }

  clearInterval(window.countdownInterval);
  window.countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
      const hrs = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
      document.getElementById('time').textContent = `${hrs}:${mins}:${secs}`;
      document.getElementById('message').textContent = message;




    } else {
      clearInterval(window.countdownInterval);
      document.getElementById('countdown').textContent = 'Süre doldu';
      loadPrayerTimes();
    }
  }, 1000);
}

function initMap() {
  const map = L.map('map').setView([52.1654944, 10.5229380], 15); // DITIB Wolfenbüttel

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  const mosqueMarker = L.marker([52.1654944, 10.5229380]).addTo(map)
    .bindPopup('<b>DITIB Wolfenbüttel Camii</b><br>Schützenstraße 37, 38304 Wolfenbüttel')
    .openPopup();
}

document.addEventListener('DOMContentLoaded', () => {
  loadPrayerTimes();
  initMap();
});
