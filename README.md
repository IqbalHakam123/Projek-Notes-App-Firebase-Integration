# 📝 NoteApp — Firebase Integration

Aplikasi mobile pencatat (notes app) berbasis **React Native + Expo**, terintegrasi penuh dengan **Firebase** (Authentication & Realtime Database) untuk fitur login, register, dan penyimpanan catatan secara real-time.

---

## ✨ Fitur Utama

- 🔐 **Autentikasi Pengguna** — Register & Login menggunakan Firebase Authentication (email/password)
- 📝 **CRUD Catatan** — Tambah, lihat, edit, dan hapus catatan
- ☁️ **Realtime Database** — Data catatan tersinkron langsung dengan Firebase Realtime Database
- 💾 **Local Storage** — Menyimpan sesi pengguna dengan AsyncStorage
- 🗂️ **Kategori Catatan** — Pengelompokan catatan berdasarkan kategori
- 👤 **Profil Pengguna** — Halaman profil & logout
- 🎨 **UI Modern** — Dibangun dengan Gluestack UI (component library berbasis React Native)
- 📱 **Navigasi Multi-Layar** — Bottom tab navigation & stack navigation

## 🛠️ Tech Stack

- **React Native** `0.72.6`
- **Expo** `~49.0.15`
- **Firebase** `^10.7.0` — Authentication & Realtime Database
- **React Navigation** — Native Stack & Bottom Tabs
- **Gluestack UI** — Komponen & styling
- **AsyncStorage** — Penyimpanan lokal
- **React Native SVG** — Ikon vektor


## 🚀 Cara Menjalankan

1. **Clone repository**
```bash
   git clone https://github.com/<username>/Projek-Notes-App-Firebase-Integration.git
   cd Projek-Notes-App-Firebase-Integration
```

2. **Install dependensi**
```bash
   npm install
```

3. **Konfigurasi Firebase**

   Buat project di [Firebase Console](https://console.firebase.google.com/), aktifkan **Authentication (Email/Password)** dan **Realtime Database**, lalu isi kredensial project kamu di `src/config/FIREBASE/index.js`:
```js
   firebase.initializeApp({
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   });
```

4. **Jalankan aplikasi**
```bash
   npx expo start
```

5. Scan QR code dengan aplikasi **Expo Go** di HP kamu, atau jalankan di emulator:
```bash
   npm run android   # untuk Android
   npm run ios       # untuk iOS
   npm run web       # untuk Web
```


## 📌 Catatan Pengembangan

- ⚠️ Jangan commit kredensial Firebase asli ke repository publik — disarankan memindahkannya ke *environment variables* (`.env`) untuk keamanan produksi.
- Struktur data catatan disimpan per `uid` pengguna di path `notes/{uid}` pada Realtime Database.

---

<p align="center">Dibangun dengan ❤️ menggunakan React Native, Expo & Firebase</p>
