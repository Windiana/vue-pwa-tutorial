SESSION 1 - Promise & Fetch
slide : https://drive.google.com/open?id=1PLY8d8LoGnlld7Q4TgmLPw3X42hDHrWNO9HK-Syiook

Task : https://docs.google.com/document/d/1_Hm_839S_moK06SYclcRQzGeAaC0FEl1X5yHFGPKUzw/edit?usp=sharing



SESSION 2 - Service Worker + Caching
slide : https://docs.google.com/presentation/d/1yKsDW9wu5xbx2pXDKlSBTg7h1i48CoQd2A8QvHw-lag/edit#slide=id.p4

Task : 
Service Worker + Caching (serviceWorker+Caching_day3)
Kita akan mencoba caching data yang akan tetap jalan ketika offline. untuk itu kita membutuhkan request data (menggunakan API 'https://httpbin.org/get') sebagai simulasi untuk mencoba aplikasi saat online / offline.

Prep : di custom.js, hapus comment createContent dan buatlah fetch request ke API 'https://httpbin.org/get', ketika berhasil maka akan memanggil function createContent

1. Implementasikan offline page untuk app-shell saja (static cache)
2. Apabila no 1 sudah berhasil, maka ketika offline web sudah dapat menampilkan app-shell, namun icon masih belum ada. Modify code km, implementasikan dynamic cache sehingga ketika offline, dapat tetap menampilkan icon di web 
3. di custom.js, ganti style description dengan color yang lain. Reload web app nya, apakah color nya sudah berubah juga ? apabila belum, fix code nya agar dapat menampilkan colow yang baru.
4. Implementasikan clear old caches


Service Worker + Caching Strategies (networkWithCacheFallback_day3)
1. Ketika offline saat ini menampilkan "the site cant be reached". Fix issue ini agar menampilkan offline.html 
2. Implementasikan "Network falling back to cache"
  - apabila sebelumnya km mengimplementasikan "Cache falling back to the network", sekarang implementasikan "Network falling back to cache" 


Cache then network
1. Pertama, sesuai strategi nya, kita tambahkan cache dulu di custom.js
2. Kedua, implementasikan network strategy menggunakan fetch di custom.js 
3. Apabila step 1 & 2 sudah selesai, ketika reload di web, akan menampilkan 2 content. Refactor code agar content tidak duplicate 
4. Implementasikan "store to cache" ketika mendapatkan response dari network 
5. Ketika steps 1-4 selesai, ketika di jalankan offline menampilkan "the site cant be reach", karena kita belum memiliki code untuk mengambil data dari cache. Modify code agar web app dapat berjalan offline tanpa meng-overide hasil data dari network !