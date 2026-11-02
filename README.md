# CHEM-BOND — Prototype Revisi v7

Media pembelajaran web interaktif tentang ikatan kovalen koordinasi.

## Menjalankan
Buka `index.html` dengan browser modern. Audio penjelasan menggunakan fitur text-to-speech browser. Video kontekstual tersedia di `assets/video_kontekstual_NH4.mp4`.

## Perubahan revisi
- Progres belajar global berjalan dari tahap pertama sampai terakhir; indikator progres tidak ditampilkan di dalam slide pembuka.
- Navigasi bertahap: slide berikutnya terkunci sampai tombol Lanjut pada tahap saat ini digunakan. Tiap slide memiliki tombol Kembali.
- Peta pembelajaran diurutkan Cara Menggunakan, Capaian Pembelajaran, lalu Tujuan Pembelajaran; pertanyaan awal yang berulang dihapus.
- Slide pemantik berisi pertanyaan sederhana, kolom jawaban, dan penjelasan yang dibuka setelah siswa mencoba.
- Definisi ikatan kovalen koordinasi diperjelas; elektron valensi nitrogen menggunakan konfigurasi kulit K=2 dan L=5.
- Slide audio menyuarakan kesimpulan konsep dasar.
- Simulasi memiliki enam tahap visual, dengan pergerakan H+ dan pasangan elektron yang dianimasikan. Bagian tantangan dihapus.
- Konteks kehidupan dan video digabung dalam satu slide; label contoh partikel yang berulang dihapus.
- Latihan menggunakan tiga pertanyaan esai. Kuis pilihan ganda dihapus.
- Ringkasan akhir menjadi tahap penutup.

Storyboard revisi terdapat di `storyboard_ref/storyboard.pdf`.


## Revisi terbaru
- Slide 7 kini memutar video `videos/haber-process.mp4`.
- Subtitle Bahasa Indonesia tersedia melalui `videos/subtitle-indonesia.vtt` (aktif secara default; bisa dipilih dari kontrol subtitle pemutar video).
- Tombol rangkuman menggunakan pembaca suara browser untuk menjelaskan isi video dalam Bahasa Indonesia.
- Hubungan dengan kehidupan diperbarui berdasarkan isi video tentang proses Haber, amonia, pupuk nitrogen, dan dampak lingkungan.
- Slide 4: posisi 2 elektron kulit K dan 5 elektron kulit L dirapikan dan elektron bergerak berputar mengelilingi inti.
- Buka `index.html` dengan Live Server. Pastikan folder `videos` tetap bersama file HTML/CSS/JS.

- Perbaikan akhir slide 4: lingkaran kulit K dan L dipusatkan dengan transformasi yang mempertahankan posisi tengah saat berputar; elektron ditempatkan pada keliling kulit, bukan di luar lingkaran.


## Revisi terbaru
- Ilustrasi kulit atom/elektron pada slide 4 dihapus sesuai permintaan. Penjelasan konfigurasi nitrogen K = 2 dan L = 5 tetap ada dalam bentuk teks.
- Video dan subtitle di slide 7 tetap disertakan.
