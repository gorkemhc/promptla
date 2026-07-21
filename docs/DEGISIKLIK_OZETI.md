# PROMPTLA 2.0 — Düzenleme Özeti

Bu paket, GitHub deposunun kök dizinindeki kalabalığı azaltmak ve proje bağlantılarını yeni klasör yapısına uyarlamak amacıyla hazırlanmıştır.

## Yapılan işlemler

- Kök dizindeki ikincil HTML sayfaları `pages/` altında kategorilere ayrıldı.
- Oyun merkezi ile tüm oyun sayfaları `games/` altında birleştirildi.
- CSS dosyaları `assets/css/` dizinine taşındı.
- JavaScript dosyaları `assets/js/` dizinine taşındı.
- Site görselleri `assets/images/` altında toplandı.
- README ekran görüntüleri `docs/screenshots/` altında korundu.
- Eski `oyunlar/` ve boş `uploads/` klasörleri kaldırıldı.
- ZIP içinde yanlışlıkla bulunan `.git/` klasörü paketten çıkarıldı.
- Tüm HTML bağlantıları, stil ve betik yolları yeni yapıya göre güncellendi.
- JavaScript tarafından üretilen dinamik bağlantılar yeni sayfa yollarına taşındı.
- Canonical ve Open Graph URL'leri GitHub Pages adresine göre güncellendi.
- `robots.txt` ve `sitemap.xml` yeni adreslere göre düzenlendi.
- `.gitignore` ve `.nojekyll` dosyaları eklendi.
- README yeni klasör yapısını gösterecek şekilde güncellendi.

## Kontroller

- 33 HTML dosyasındaki 672 yerel bağlantı doğrulandı.
- Eksik yerel dosya bağlantısı bulunmadı.
- Tüm JavaScript dosyaları `node --check` ile sözdizimi kontrolünden geçti.
- JavaScript içindeki HTML ve görsel yolları doğrulandı.
