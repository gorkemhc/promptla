# PROMPTLA

Yapay zekâ araçlarını tanıtan, etkili prompt yazımını öğreten ve kullanıcıların örnek içerikler üzerinden pratik yapmasını sağlayan modern bir öğrenme platformu.

<p align="center">
  <a href="https://gorkemhc.github.io/promptla/"><strong>Canlı Demoyu Görüntüle</strong></a>
  ·
  <a href="https://github.com/gorkemhc/promptla/issues">Hata Bildir</a>
</p>

---

## Proje Hakkında

PROMPTLA; yapay zekâ modellerini yalnızca tanıtmakla kalmayıp, kullanıcıların doğru ve etkili prompt yazma mantığını öğrenmesini hedefleyen statik bir web projesidir.

Platform içerisinde yapay zekâ model tanıtımları, kategori bazlı prompt örnekleri, doldurulabilir prompt oluşturucu, sosyal paylaşım ekranları ve HTML Canvas tabanlı mini oyunlar yer alır.

## Öne Çıkan Özellikler

- Yapay zekâ modelleri için tanıtım ve rehber sayfaları
- Kategori bazlı prompt kütüphanesi
- Doldurulabilir ve canlı önizlemeli Prompt Builder
- Kopyalama, kaydetme ve paylaşma etkileşimleri
- Responsive ve mobil uyumlu tasarım
- Koyu tema ve modern arayüz
- HTML Canvas tabanlı oynanabilir mini oyunlar
- Statik yapı sayesinde sunucu gerektirmeden çalışabilme
- GitHub Pages üzerinde ücretsiz yayınlanabilme

## Kullanılan Teknolojiler

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

## Ekran Görüntüleri

### Ana Sayfa

![PROMPTLA Ana Sayfa](docs/screenshots/ana-sayfa.png)

### Prompt Builder

![PROMPTLA Prompt Builder](docs/screenshots/prompt-builder.png)

### Yılan Oyunu

![PROMPTLA Yılan Oyunu](docs/screenshots/yilan-oyunu.png)

## Projeyi Çalıştırma

Bu proje statik HTML, CSS ve JavaScript kullanır. Herhangi bir paket kurulumu veya yerel sunucu zorunlu değildir.

1. Repoyu bilgisayarınıza klonlayın:

```bash
git clone https://github.com/gorkemhc/promptla.git
```

2. Proje klasörüne girin:

```bash
cd promptla
```

3. `index.html` dosyasını tarayıcıda açın.

Daha sağlıklı bir geliştirme deneyimi için Visual Studio Code üzerindeki **Live Server** eklentisi de kullanılabilir.

## Klasör Yapısı

```text
promptla/
├── assets/              # CSS ve JavaScript dosyaları
├── games/               # Gelişmiş mini oyun sayfaları
├── images/              # Genel proje görselleri
├── oyunlar/             # Oyun modülü sayfaları
├── uploads/             # Demo yükleme alanı
├── docs/
│   └── screenshots/     # README ekran görüntüleri
├── index.html            # Ana sayfa
├── 404.html              # Özel 404 sayfası
├── robots.txt            # Arama motoru yönergeleri
├── sitemap.xml           # Site haritası
└── site.webmanifest      # Web uygulaması bilgileri
```

## Canlı Demo

Proje GitHub Pages üzerinden yayınlanabilir:

**https://gorkemhc.github.io/promptla/**

GitHub Pages henüz aktif değilse:

1. Repo içinde `Settings` bölümüne girin.
2. Sol menüden `Pages` seçeneğini açın.
3. `Deploy from a branch` seçeneğini seçin.
4. Branch olarak `main`, klasör olarak `/root` belirleyin.
5. `Save` butonuna basın.

## Mevcut Sürüm Hakkında

Bu sürüm tamamen statik çalışır. Giriş, kayıt, yorum, admin işlemleri ve veri saklama gibi bazı alanlar demo amaçlıdır veya tarayıcı tarafında çalışır.

Gerçek kullanıcı sistemi, kalıcı veritabanı ve yönetim paneli için ilerleyen sürümlerde Firebase ya da farklı bir backend altyapısı entegre edilebilir.

## Yol Haritası

- Firebase Authentication entegrasyonu
- Firestore tabanlı yorum ve sosyal paylaşım sistemi
- Gerçek kullanıcı profilleri
- Gelişmiş arama ve filtreleme
- Daha fazla prompt kategorisi
- Performans ve erişilebilirlik iyileştirmeleri
- PWA desteğinin genişletilmesi

## Geliştirici

**Görkem Hiçyılmaz**

- GitHub: [@gorkemhc](https://github.com/gorkemhc)
- Proje: [PROMPTLA](https://github.com/gorkemhc/promptla)

---

Bu proje eğitim, portföy ve kişisel geliştirme amacıyla hazırlanmıştır.
