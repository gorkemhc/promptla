window.PROMPTLA_DATA = {
  "version": "2.0.0",
  "categories": {
    "kod": {
      "label": "Kodlama",
      "icon": "</>",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp"
    },
    "gorsel": {
      "label": "Görsel Üretim",
      "icon": "◈",
      "image": "assets/images/urun1.webp"
    },
    "video": {
      "label": "Video Üretim",
      "icon": "▶",
      "image": "assets/images/urungorsel3.webp"
    },
    "3d": {
      "label": "3D ve Oyun",
      "icon": "⬡",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp"
    },
    "odev": {
      "label": "Eğitim ve Ödev",
      "icon": "A+",
      "image": "assets/images/urun2.webp"
    },
    "metin": {
      "label": "İçerik ve Metin",
      "icon": "Aa",
      "image": "assets/images/prompt1.webp"
    },
    "kariyer": {
      "label": "Kariyer",
      "icon": "↗",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp"
    },
    "pazarlama": {
      "label": "Pazarlama",
      "icon": "◎",
      "image": "assets/images/urun1.webp"
    },
    "arastirma": {
      "label": "Araştırma ve Veri",
      "icon": "⌕",
      "image": "assets/images/urun2.webp"
    },
    "verimlilik": {
      "label": "Üretkenlik",
      "icon": "✓",
      "image": "assets/images/urungorsel3.webp"
    }
  },
  "prompts": [
    {
      "id": 1,
      "slug": "mevcut-kodu-bozmadan-hata-ayiklama",
      "title": "Mevcut Kodu Bozmadan Hata Ayıklama",
      "category": "kod",
      "categoryLabel": "Kodlama",
      "subcategory": "Hata ayıklama",
      "description": "Verilen kodda hatanın kök nedenini bulmak ve mevcut yapıyı mümkün olduğunca koruyarak düzeltmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "Orta",
      "tags": [
        "debug",
        "kod inceleme",
        "hata"
      ],
      "variables": [
        {
          "key": "DIL",
          "label": "Programlama dili",
          "default": "JavaScript"
        },
        {
          "key": "KOD",
          "label": "İncelenecek kod",
          "default": "Kodunu buraya yapıştır"
        },
        {
          "key": "HATA",
          "label": "Alınan hata",
          "default": "Konsol hata mesajı"
        },
        {
          "key": "BEKLENEN",
          "label": "Beklenen davranış",
          "default": "Beklenen sonucu yaz"
        }
      ],
      "versions": {
        "quick": "Verilen kodda hatanın kök nedenini bulmak ve mevcut yapıyı mümkün olduğunca koruyarak düzeltmek. Girdi: [DIL] (Programlama dili); [KOD] (İncelenecek kod); [HATA] (Alınan hata); [BEKLENEN] (Beklenen davranış). Çıktıyı kök neden, düzeltilmiş kod, değişiklik özeti ve test kontrol listesi biçiminde ver.",
        "advanced": "Kıdemli yazılım geliştiricisi gibi davran. Amacın verilen kodda hatanın kök nedenini bulmak ve mevcut yapıyı mümkün olduğunca koruyarak düzeltmek. Kullanacağın bilgiler: [DIL] (Programlama dili); [KOD] (İncelenecek kod); [HATA] (Alınan hata); [BEKLENEN] (Beklenen davranış). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kök neden, düzeltilmiş kod, değişiklik özeti ve test kontrol listesi. Kısıtlar: Gereksiz yeniden yazım yapma; değişen satırları açıkla; güvenlik ve geriye uyumluluğu kontrol et.",
        "expert": "ROL\nSen kıdemli yazılım geliştiricisisin.\n\nAMAÇ\nVerilen kodda hatanın kök nedenini bulmak ve mevcut yapıyı mümkün olduğunca koruyarak düzeltmek.\n\nGİRDİLER\n- Programlama dili: [DIL]\n- İncelenecek kod: [KOD]\n- Alınan hata: [HATA]\n- Beklenen davranış: [BEKLENEN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKök neden, düzeltilmiş kod, değişiklik özeti ve test kontrol listesi.\n\nKISITLAR\nGereksiz yeniden yazım yapma; değişen satırları açıkla; güvenlik ve geriye uyumluluğu kontrol et.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Gereksiz yeniden yazım yapma; değişen satırları açıkla; güvenlik ve geriye uyumluluğu kontrol et",
      "outputFormat": "Kök neden, düzeltilmiş kod, değişiklik özeti ve test kontrol listesi",
      "before": "Bana mevcut kodu bozmadan hata ayıklama için bir şey hazırla.",
      "after": "ROL\nSen kıdemli yazılım geliştiricisisin.\n\nAMAÇ\nVerilen kodda hatanın kök nedenini bulmak ve mevcut yapıyı mümkün olduğunca koruyarak düzeltmek.\n\nGİRDİLER\n- Programlama dili: [DIL]\n- İncelenecek kod: [KOD]\n- Alınan hata: [HATA]\n- Beklenen davranış: [BEKLENEN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKök neden, düzeltilmiş kod, değişiklik özeti ve test kontrol listesi.\n\nKISITLAR\nGereksiz yeniden yazım yapma; değişen satırları açıkla; güvenlik ve geriye uyumluluğu kontrol et.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kök neden, düzeltilmiş kod, değişiklik özeti ve test kontrol listesi.",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp",
      "thumbnail": "assets/images/thumbs/img_69f08ee8ef35f7.66127168-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-02",
      "version": "1.0"
    },
    {
      "id": 2,
      "slug": "responsive-arayuz-duzeltme",
      "title": "Responsive Arayüz Düzeltme",
      "category": "kod",
      "categoryLabel": "Kodlama",
      "subcategory": "Frontend",
      "description": "Masaüstü tasarımı bozmadan mobil ve tablet görünümündeki taşma, hizalama ve erişilebilirlik sorunlarını düzeltmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "Orta",
      "tags": [
        "responsive",
        "css",
        "frontend"
      ],
      "variables": [
        {
          "key": "TEKNOLOJI",
          "label": "Teknoloji",
          "default": "HTML/CSS/JavaScript"
        },
        {
          "key": "KOD",
          "label": "Arayüz kodu",
          "default": "HTML ve CSS kodunu yapıştır"
        },
        {
          "key": "SORUN",
          "label": "Görülen sorun",
          "default": "Mobilde yatay taşma"
        },
        {
          "key": "HEDEF",
          "label": "Hedef cihazlar",
          "default": "360px–1440px"
        }
      ],
      "versions": {
        "quick": "Masaüstü tasarımı bozmadan mobil ve tablet görünümündeki taşma, hizalama ve erişilebilirlik sorunlarını düzeltmek. Girdi: [TEKNOLOJI] (Teknoloji); [KOD] (Arayüz kodu); [SORUN] (Görülen sorun); [HEDEF] (Hedef cihazlar). Çıktıyı sorun listesi, minimal yama kodu ve cihaz bazlı test senaryosu biçiminde ver.",
        "advanced": "Senior frontend geliştiricisi gibi davran. Amacın masaüstü tasarımı bozmadan mobil ve tablet görünümündeki taşma, hizalama ve erişilebilirlik sorunlarını düzeltmek. Kullanacağın bilgiler: [TEKNOLOJI] (Teknoloji); [KOD] (Arayüz kodu); [SORUN] (Görülen sorun); [HEDEF] (Hedef cihazlar). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Sorun listesi, minimal yama kodu ve cihaz bazlı test senaryosu. Kısıtlar: Mevcut renkleri ve tipografiyi değiştirme; mobile-first yaklaş; klavye kullanımını koru.",
        "expert": "ROL\nSen senior frontend geliştiricisisin.\n\nAMAÇ\nMasaüstü tasarımı bozmadan mobil ve tablet görünümündeki taşma, hizalama ve erişilebilirlik sorunlarını düzeltmek.\n\nGİRDİLER\n- Teknoloji: [TEKNOLOJI]\n- Arayüz kodu: [KOD]\n- Görülen sorun: [SORUN]\n- Hedef cihazlar: [HEDEF]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSorun listesi, minimal yama kodu ve cihaz bazlı test senaryosu.\n\nKISITLAR\nMevcut renkleri ve tipografiyi değiştirme; mobile-first yaklaş; klavye kullanımını koru.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Mevcut renkleri ve tipografiyi değiştirme; mobile-first yaklaş; klavye kullanımını koru",
      "outputFormat": "Sorun listesi, minimal yama kodu ve cihaz bazlı test senaryosu",
      "before": "Bana responsive arayüz düzeltme için bir şey hazırla.",
      "after": "ROL\nSen senior frontend geliştiricisisin.\n\nAMAÇ\nMasaüstü tasarımı bozmadan mobil ve tablet görünümündeki taşma, hizalama ve erişilebilirlik sorunlarını düzeltmek.\n\nGİRDİLER\n- Teknoloji: [TEKNOLOJI]\n- Arayüz kodu: [KOD]\n- Görülen sorun: [SORUN]\n- Hedef cihazlar: [HEDEF]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSorun listesi, minimal yama kodu ve cihaz bazlı test senaryosu.\n\nKISITLAR\nMevcut renkleri ve tipografiyi değiştirme; mobile-first yaklaş; klavye kullanımını koru.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Sorun listesi, minimal yama kodu ve cihaz bazlı test senaryosu.",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp",
      "thumbnail": "assets/images/thumbs/img_69f08ee8ef35f7.66127168-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-03",
      "version": "1.0"
    },
    {
      "id": 3,
      "slug": "sql-sorgusu-optimizasyonu",
      "title": "SQL Sorgusu Optimizasyonu",
      "category": "kod",
      "categoryLabel": "Kodlama",
      "subcategory": "Veritabanı",
      "description": "Yavaş çalışan sql sorgusunu indeks, sorgu planı ve veri modeli açısından optimize etmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "İleri",
      "tags": [
        "sql",
        "mysql",
        "performans"
      ],
      "variables": [
        {
          "key": "VERITABANI",
          "label": "Veritabanı",
          "default": "MySQL 8"
        },
        {
          "key": "SORGU",
          "label": "SQL sorgusu",
          "default": "SELECT sorgunu yapıştır"
        },
        {
          "key": "TABLOLAR",
          "label": "Tablo yapısı",
          "default": "CREATE TABLE veya kolonları yaz"
        },
        {
          "key": "HACIM",
          "label": "Yaklaşık veri hacmi",
          "default": "1 milyon satır"
        }
      ],
      "versions": {
        "quick": "Yavaş çalışan sql sorgusunu indeks, sorgu planı ve veri modeli açısından optimize etmek. Girdi: [VERITABANI] (Veritabanı); [SORGU] (SQL sorgusu); [TABLOLAR] (Tablo yapısı); [HACIM] (Yaklaşık veri hacmi). Çıktıyı optimize sorgu, indeks önerileri, açıklama ve ölçüm planı biçiminde ver.",
        "advanced": "Veritabanı performans uzmanı gibi davran. Amacın yavaş çalışan SQL sorgusunu indeks, sorgu planı ve veri modeli açısından optimize etmek. Kullanacağın bilgiler: [VERITABANI] (Veritabanı); [SORGU] (SQL sorgusu); [TABLOLAR] (Tablo yapısı); [HACIM] (Yaklaşık veri hacmi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Optimize sorgu, indeks önerileri, açıklama ve ölçüm planı. Kısıtlar: Veri doğruluğunu değiştirme; gereksiz indeks önermeme; yazma maliyetini belirt.",
        "expert": "ROL\nSen veritabanı performans uzmanısın.\n\nAMAÇ\nYavaş çalışan sql sorgusunu indeks, sorgu planı ve veri modeli açısından optimize etmek.\n\nGİRDİLER\n- Veritabanı: [VERITABANI]\n- SQL sorgusu: [SORGU]\n- Tablo yapısı: [TABLOLAR]\n- Yaklaşık veri hacmi: [HACIM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nOptimize sorgu, indeks önerileri, açıklama ve ölçüm planı.\n\nKISITLAR\nVeri doğruluğunu değiştirme; gereksiz indeks önermeme; yazma maliyetini belirt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Veri doğruluğunu değiştirme; gereksiz indeks önermeme; yazma maliyetini belirt",
      "outputFormat": "Optimize sorgu, indeks önerileri, açıklama ve ölçüm planı",
      "before": "Bana sql sorgusu optimizasyonu için bir şey hazırla.",
      "after": "ROL\nSen veritabanı performans uzmanısın.\n\nAMAÇ\nYavaş çalışan sql sorgusunu indeks, sorgu planı ve veri modeli açısından optimize etmek.\n\nGİRDİLER\n- Veritabanı: [VERITABANI]\n- SQL sorgusu: [SORGU]\n- Tablo yapısı: [TABLOLAR]\n- Yaklaşık veri hacmi: [HACIM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nOptimize sorgu, indeks önerileri, açıklama ve ölçüm planı.\n\nKISITLAR\nVeri doğruluğunu değiştirme; gereksiz indeks önermeme; yazma maliyetini belirt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Optimize sorgu, indeks önerileri, açıklama ve ölçüm planı.",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp",
      "thumbnail": "assets/images/thumbs/img_69f08ee8ef35f7.66127168-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-04",
      "version": "1.0"
    },
    {
      "id": 4,
      "slug": "rest-api-tasarim-asistani",
      "title": "REST API Tasarım Asistanı",
      "category": "kod",
      "categoryLabel": "Kodlama",
      "subcategory": "Backend",
      "description": "Belirtilen özellik için tutarlı, güvenli ve dokümante edilebilir rest api tasarlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "api",
        "backend",
        "rest"
      ],
      "variables": [
        {
          "key": "PROJE",
          "label": "Proje türü",
          "default": "E-ticaret uygulaması"
        },
        {
          "key": "KAYNAKLAR",
          "label": "Ana kaynaklar",
          "default": "Kullanıcı, ürün, sipariş"
        },
        {
          "key": "YETKI",
          "label": "Yetkilendirme",
          "default": "JWT ve rol tabanlı"
        },
        {
          "key": "TEKNOLOJI",
          "label": "Backend teknolojisi",
          "default": "PHP 8"
        }
      ],
      "versions": {
        "quick": "Belirtilen özellik için tutarlı, güvenli ve dokümante edilebilir rest api tasarlamak. Girdi: [PROJE] (Proje türü); [KAYNAKLAR] (Ana kaynaklar); [YETKI] (Yetkilendirme); [TEKNOLOJI] (Backend teknolojisi). Çıktıyı endpoint tablosu, istek/yanıt örnekleri, hata kodları ve güvenlik kontrol listesi biçiminde ver.",
        "advanced": "Api mimarı gibi davran. Amacın belirtilen özellik için tutarlı, güvenli ve dokümante edilebilir REST API tasarlamak. Kullanacağın bilgiler: [PROJE] (Proje türü); [KAYNAKLAR] (Ana kaynaklar); [YETKI] (Yetkilendirme); [TEKNOLOJI] (Backend teknolojisi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Endpoint tablosu, istek/yanıt örnekleri, hata kodları ve güvenlik kontrol listesi. Kısıtlar: Kaynak adlarını çoğul ve tutarlı kullan; hassas veriyi döndürme; idempotency belirt.",
        "expert": "ROL\nSen API mimarısın.\n\nAMAÇ\nBelirtilen özellik için tutarlı, güvenli ve dokümante edilebilir rest api tasarlamak.\n\nGİRDİLER\n- Proje türü: [PROJE]\n- Ana kaynaklar: [KAYNAKLAR]\n- Yetkilendirme: [YETKI]\n- Backend teknolojisi: [TEKNOLOJI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nEndpoint tablosu, istek/yanıt örnekleri, hata kodları ve güvenlik kontrol listesi.\n\nKISITLAR\nKaynak adlarını çoğul ve tutarlı kullan; hassas veriyi döndürme; idempotency belirt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Kaynak adlarını çoğul ve tutarlı kullan; hassas veriyi döndürme; idempotency belirt",
      "outputFormat": "Endpoint tablosu, istek/yanıt örnekleri, hata kodları ve güvenlik kontrol listesi",
      "before": "Bana rest api tasarım asistanı için bir şey hazırla.",
      "after": "ROL\nSen API mimarısın.\n\nAMAÇ\nBelirtilen özellik için tutarlı, güvenli ve dokümante edilebilir rest api tasarlamak.\n\nGİRDİLER\n- Proje türü: [PROJE]\n- Ana kaynaklar: [KAYNAKLAR]\n- Yetkilendirme: [YETKI]\n- Backend teknolojisi: [TEKNOLOJI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nEndpoint tablosu, istek/yanıt örnekleri, hata kodları ve güvenlik kontrol listesi.\n\nKISITLAR\nKaynak adlarını çoğul ve tutarlı kullan; hassas veriyi döndürme; idempotency belirt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Endpoint tablosu, istek/yanıt örnekleri, hata kodları ve güvenlik kontrol listesi.",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp",
      "thumbnail": "assets/images/thumbs/img_69f08ee8ef35f7.66127168-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-05",
      "version": "1.0"
    },
    {
      "id": 5,
      "slug": "unit-test-uretici",
      "title": "Unit Test Üretici",
      "category": "kod",
      "categoryLabel": "Kodlama",
      "subcategory": "Test",
      "description": "Verilen fonksiyon veya sınıf için sınır durumlarını kapsayan güvenilir testler üretmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "Orta",
      "tags": [
        "test",
        "unit test",
        "kalite"
      ],
      "variables": [
        {
          "key": "DIL",
          "label": "Dil ve test aracı",
          "default": "Java / JUnit 5"
        },
        {
          "key": "KOD",
          "label": "Test edilecek kod",
          "default": "Sınıf veya fonksiyonu yapıştır"
        },
        {
          "key": "DAVRANIS",
          "label": "Beklenen davranış",
          "default": "İş kurallarını yaz"
        },
        {
          "key": "KAPSAM",
          "label": "Hedef kapsam",
          "default": "Normal, hata ve sınır durumları"
        }
      ],
      "versions": {
        "quick": "Verilen fonksiyon veya sınıf için sınır durumlarını kapsayan güvenilir testler üretmek. Girdi: [DIL] (Dil ve test aracı); [KOD] (Test edilecek kod); [DAVRANIS] (Beklenen davranış); [KAPSAM] (Hedef kapsam). Çıktıyı test senaryosu tablosu, çalışabilir test kodu ve eksik tasarım notları biçiminde ver.",
        "advanced": "Test otomasyonu uzmanı gibi davran. Amacın verilen fonksiyon veya sınıf için sınır durumlarını kapsayan güvenilir testler üretmek. Kullanacağın bilgiler: [DIL] (Dil ve test aracı); [KOD] (Test edilecek kod); [DAVRANIS] (Beklenen davranış); [KAPSAM] (Hedef kapsam). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Test senaryosu tablosu, çalışabilir test kodu ve eksik tasarım notları. Kısıtlar: Uygulama kodunu değiştirmeden test et; bağımlılıkları mockla; kırılgan test yazma.",
        "expert": "ROL\nSen test otomasyonu uzmanısın.\n\nAMAÇ\nVerilen fonksiyon veya sınıf için sınır durumlarını kapsayan güvenilir testler üretmek.\n\nGİRDİLER\n- Dil ve test aracı: [DIL]\n- Test edilecek kod: [KOD]\n- Beklenen davranış: [DAVRANIS]\n- Hedef kapsam: [KAPSAM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nTest senaryosu tablosu, çalışabilir test kodu ve eksik tasarım notları.\n\nKISITLAR\nUygulama kodunu değiştirmeden test et; bağımlılıkları mockla; kırılgan test yazma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Uygulama kodunu değiştirmeden test et; bağımlılıkları mockla; kırılgan test yazma",
      "outputFormat": "Test senaryosu tablosu, çalışabilir test kodu ve eksik tasarım notları",
      "before": "Bana unit test üretici için bir şey hazırla.",
      "after": "ROL\nSen test otomasyonu uzmanısın.\n\nAMAÇ\nVerilen fonksiyon veya sınıf için sınır durumlarını kapsayan güvenilir testler üretmek.\n\nGİRDİLER\n- Dil ve test aracı: [DIL]\n- Test edilecek kod: [KOD]\n- Beklenen davranış: [DAVRANIS]\n- Hedef kapsam: [KAPSAM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nTest senaryosu tablosu, çalışabilir test kodu ve eksik tasarım notları.\n\nKISITLAR\nUygulama kodunu değiştirmeden test et; bağımlılıkları mockla; kırılgan test yazma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Test senaryosu tablosu, çalışabilir test kodu ve eksik tasarım notları.",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp",
      "thumbnail": "assets/images/thumbs/img_69f08ee8ef35f7.66127168-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-06",
      "version": "1.0"
    },
    {
      "id": 6,
      "slug": "github-readme-ve-proje-sunumu",
      "title": "GitHub README ve Proje Sunumu",
      "category": "kod",
      "categoryLabel": "Kodlama",
      "subcategory": "Dokümantasyon",
      "description": "Projeyi işe alım uzmanına ve geliştiriciye anlaşılır gösterecek profesyonel readme hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "readme",
        "github",
        "portfolyo"
      ],
      "variables": [
        {
          "key": "PROJE_ADI",
          "label": "Proje adı",
          "default": "Promptla"
        },
        {
          "key": "TEKNOLOJILER",
          "label": "Teknolojiler",
          "default": "HTML, CSS, JavaScript"
        },
        {
          "key": "OZELLIKLER",
          "label": "Öne çıkan özellikler",
          "default": "Prompt Builder, kütüphane, topluluk"
        },
        {
          "key": "KURULUM",
          "label": "Kurulum şekli",
          "default": "index.html dosyasını aç"
        }
      ],
      "versions": {
        "quick": "Projeyi işe alım uzmanına ve geliştiriciye anlaşılır gösterecek profesyonel readme hazırlamak. Girdi: [PROJE_ADI] (Proje adı); [TEKNOLOJILER] (Teknolojiler); [OZELLIKLER] (Öne çıkan özellikler); [KURULUM] (Kurulum şekli). Çıktıyı başlık, demo, özellikler, kurulum, mimari, ekran görüntüsü alanları ve yol haritası biçiminde ver.",
        "advanced": "Teknik yazar ve açık kaynak proje yöneticisi gibi davran. Amacın projeyi işe alım uzmanına ve geliştiriciye anlaşılır gösterecek profesyonel README hazırlamak. Kullanacağın bilgiler: [PROJE_ADI] (Proje adı); [TEKNOLOJILER] (Teknolojiler); [OZELLIKLER] (Öne çıkan özellikler); [KURULUM] (Kurulum şekli). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Başlık, demo, özellikler, kurulum, mimari, ekran görüntüsü alanları ve yol haritası. Kısıtlar: Abartılı iddialardan kaçın; kopyalanabilir komutlar ver; eksik bilgileri yer tutucuyla göster.",
        "expert": "ROL\nSen teknik yazar ve açık kaynak proje yöneticisisın.\n\nAMAÇ\nProjeyi işe alım uzmanına ve geliştiriciye anlaşılır gösterecek profesyonel readme hazırlamak.\n\nGİRDİLER\n- Proje adı: [PROJE_ADI]\n- Teknolojiler: [TEKNOLOJILER]\n- Öne çıkan özellikler: [OZELLIKLER]\n- Kurulum şekli: [KURULUM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBaşlık, demo, özellikler, kurulum, mimari, ekran görüntüsü alanları ve yol haritası.\n\nKISITLAR\nAbartılı iddialardan kaçın; kopyalanabilir komutlar ver; eksik bilgileri yer tutucuyla göster.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Abartılı iddialardan kaçın; kopyalanabilir komutlar ver; eksik bilgileri yer tutucuyla göster",
      "outputFormat": "Başlık, demo, özellikler, kurulum, mimari, ekran görüntüsü alanları ve yol haritası",
      "before": "Bana github readme ve proje sunumu için bir şey hazırla.",
      "after": "ROL\nSen teknik yazar ve açık kaynak proje yöneticisisın.\n\nAMAÇ\nProjeyi işe alım uzmanına ve geliştiriciye anlaşılır gösterecek profesyonel readme hazırlamak.\n\nGİRDİLER\n- Proje adı: [PROJE_ADI]\n- Teknolojiler: [TEKNOLOJILER]\n- Öne çıkan özellikler: [OZELLIKLER]\n- Kurulum şekli: [KURULUM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBaşlık, demo, özellikler, kurulum, mimari, ekran görüntüsü alanları ve yol haritası.\n\nKISITLAR\nAbartılı iddialardan kaçın; kopyalanabilir komutlar ver; eksik bilgileri yer tutucuyla göster.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Başlık, demo, özellikler, kurulum, mimari, ekran görüntüsü alanları ve yol haritası.",
      "image": "assets/images/img_69f08ee8ef35f7.66127168.webp",
      "thumbnail": "assets/images/thumbs/img_69f08ee8ef35f7.66127168-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-07",
      "version": "1.0"
    },
    {
      "id": 7,
      "slug": "sinematik-teknoloji-urunu-reklami",
      "title": "Sinematik Teknoloji Ürünü Reklamı",
      "category": "gorsel",
      "categoryLabel": "Görsel Üretim",
      "subcategory": "Ürün fotoğrafçılığı",
      "description": "Bir teknoloji ürününü premium kampanya görseli olarak sunmak.",
      "models": [
        "Midjourney",
        "ChatGPT Images",
        "Leonardo",
        "Firefly"
      ],
      "level": "Orta",
      "tags": [
        "ürün",
        "reklam",
        "sinematik"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Kablosuz kulaklık"
        },
        {
          "key": "RENK",
          "label": "Marka rengi",
          "default": "Turkuaz ve siyah"
        },
        {
          "key": "ORTAM",
          "label": "Arka plan / ortam",
          "default": "Koyu cam stüdyo"
        },
        {
          "key": "ORAN",
          "label": "Görüntü oranı",
          "default": "16:9"
        }
      ],
      "versions": {
        "quick": "Bir teknoloji ürününü premium kampanya görseli olarak sunmak. Girdi: [URUN] (Ürün); [RENK] (Marka rengi); [ORTAM] (Arka plan / ortam); [ORAN] (Görüntü oranı). Çıktıyı kamera, ışık, malzeme, kompozisyon ve negatif kısıtlar içeren görsel prompt biçiminde ver.",
        "advanced": "Reklam sanat yönetmeni ve ürün fotoğrafçısı gibi davran. Amacın bir teknoloji ürününü premium kampanya görseli olarak sunmak. Kullanacağın bilgiler: [URUN] (Ürün); [RENK] (Marka rengi); [ORTAM] (Arka plan / ortam); [ORAN] (Görüntü oranı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kamera, ışık, malzeme, kompozisyon ve negatif kısıtlar içeren görsel prompt. Kısıtlar: Logo ve ürün formunu koru; okunmayan yazı üretme; aşırı parlamadan kaçın.",
        "expert": "ROL\nSen reklam sanat yönetmeni ve ürün fotoğrafçısısın.\n\nAMAÇ\nBir teknoloji ürününü premium kampanya görseli olarak sunmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Marka rengi: [RENK]\n- Arka plan / ortam: [ORTAM]\n- Görüntü oranı: [ORAN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKamera, ışık, malzeme, kompozisyon ve negatif kısıtlar içeren görsel prompt.\n\nKISITLAR\nLogo ve ürün formunu koru; okunmayan yazı üretme; aşırı parlamadan kaçın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Logo ve ürün formunu koru; okunmayan yazı üretme; aşırı parlamadan kaçın",
      "outputFormat": "Kamera, ışık, malzeme, kompozisyon ve negatif kısıtlar içeren görsel prompt",
      "before": "Bana sinematik teknoloji ürünü reklamı için bir şey hazırla.",
      "after": "ROL\nSen reklam sanat yönetmeni ve ürün fotoğrafçısısın.\n\nAMAÇ\nBir teknoloji ürününü premium kampanya görseli olarak sunmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Marka rengi: [RENK]\n- Arka plan / ortam: [ORTAM]\n- Görüntü oranı: [ORAN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKamera, ışık, malzeme, kompozisyon ve negatif kısıtlar içeren görsel prompt.\n\nKISITLAR\nLogo ve ürün formunu koru; okunmayan yazı üretme; aşırı parlamadan kaçın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kamera, ışık, malzeme, kompozisyon ve negatif kısıtlar içeren görsel prompt.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Görsel Tasarım Paketi"
      ],
      "featured": true,
      "weekly": true,
      "createdAt": "2026-07-08",
      "version": "1.0"
    },
    {
      "id": 8,
      "slug": "profesyonel-logo-mockup-sahnesi",
      "title": "Profesyonel Logo Mockup Sahnesi",
      "category": "gorsel",
      "categoryLabel": "Görsel Üretim",
      "subcategory": "Mockup",
      "description": "Verilen logo metnini gerçekçi bir yüzey üzerinde premium mockup olarak göstermek.",
      "models": [
        "Midjourney",
        "ChatGPT Images",
        "Leonardo"
      ],
      "level": "Orta",
      "tags": [
        "logo",
        "mockup",
        "branding"
      ],
      "variables": [
        {
          "key": "LOGO",
          "label": "Logo / metin",
          "default": "PROMPTLA"
        },
        {
          "key": "YUZEY",
          "label": "Uygulama yüzeyi",
          "default": "Fırçalanmış metal tabela"
        },
        {
          "key": "ISIK",
          "label": "Işık stili",
          "default": "Yumuşak yan ışık"
        },
        {
          "key": "ATMOSFER",
          "label": "Atmosfer",
          "default": "Modern teknoloji stüdyosu"
        }
      ],
      "versions": {
        "quick": "Verilen logo metnini gerçekçi bir yüzey üzerinde premium mockup olarak göstermek. Girdi: [LOGO] (Logo / metin); [YUZEY] (Uygulama yüzeyi); [ISIK] (Işık stili); [ATMOSFER] (Atmosfer). Çıktıyı sadece değiştirilebilir logo alanını vurgulayan gerçekçi mockup promptu biçiminde ver.",
        "advanced": "Marka tasarımcısı ve 3d sahne sanatçısı gibi davran. Amacın verilen logo metnini gerçekçi bir yüzey üzerinde premium mockup olarak göstermek. Kullanacağın bilgiler: [LOGO] (Logo / metin); [YUZEY] (Uygulama yüzeyi); [ISIK] (Işık stili); [ATMOSFER] (Atmosfer). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Sadece değiştirilebilir logo alanını vurgulayan gerçekçi mockup promptu. Kısıtlar: Logo harflerini bozma; perspektif ve gölge yüzeyle uyumlu olsun; ek metin üretme.",
        "expert": "ROL\nSen marka tasarımcısı ve 3D sahne sanatçısısın.\n\nAMAÇ\nVerilen logo metnini gerçekçi bir yüzey üzerinde premium mockup olarak göstermek.\n\nGİRDİLER\n- Logo / metin: [LOGO]\n- Uygulama yüzeyi: [YUZEY]\n- Işık stili: [ISIK]\n- Atmosfer: [ATMOSFER]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSadece değiştirilebilir logo alanını vurgulayan gerçekçi mockup promptu.\n\nKISITLAR\nLogo harflerini bozma; perspektif ve gölge yüzeyle uyumlu olsun; ek metin üretme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Logo harflerini bozma; perspektif ve gölge yüzeyle uyumlu olsun; ek metin üretme",
      "outputFormat": "Sadece değiştirilebilir logo alanını vurgulayan gerçekçi mockup promptu",
      "before": "Bana profesyonel logo mockup sahnesi için bir şey hazırla.",
      "after": "ROL\nSen marka tasarımcısı ve 3D sahne sanatçısısın.\n\nAMAÇ\nVerilen logo metnini gerçekçi bir yüzey üzerinde premium mockup olarak göstermek.\n\nGİRDİLER\n- Logo / metin: [LOGO]\n- Uygulama yüzeyi: [YUZEY]\n- Işık stili: [ISIK]\n- Atmosfer: [ATMOSFER]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSadece değiştirilebilir logo alanını vurgulayan gerçekçi mockup promptu.\n\nKISITLAR\nLogo harflerini bozma; perspektif ve gölge yüzeyle uyumlu olsun; ek metin üretme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Sadece değiştirilebilir logo alanını vurgulayan gerçekçi mockup promptu.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Görsel Tasarım Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-09",
      "version": "1.0"
    },
    {
      "id": 9,
      "slug": "sosyal-medya-kampanya-posteri",
      "title": "Sosyal Medya Kampanya Posteri",
      "category": "gorsel",
      "categoryLabel": "Görsel Üretim",
      "subcategory": "Sosyal medya",
      "description": "Kampanya mesajını mobil ekranda okunabilir güçlü bir posterle anlatmak.",
      "models": [
        "ChatGPT Images",
        "Midjourney",
        "Firefly",
        "Canva AI"
      ],
      "level": "Başlangıç",
      "tags": [
        "poster",
        "instagram",
        "kampanya"
      ],
      "variables": [
        {
          "key": "KAMPANYA",
          "label": "Kampanya",
          "default": "Yeni ürün lansmanı"
        },
        {
          "key": "BASLIK",
          "label": "Ana başlık",
          "default": "GELECEĞİ ŞİMDİ KEŞFET"
        },
        {
          "key": "RENKLER",
          "label": "Renk paleti",
          "default": "Lacivert, mor, camgöbeği"
        },
        {
          "key": "FORMAT",
          "label": "Platform formatı",
          "default": "Instagram 4:5"
        }
      ],
      "versions": {
        "quick": "Kampanya mesajını mobil ekranda okunabilir güçlü bir posterle anlatmak. Girdi: [KAMPANYA] (Kampanya); [BASLIK] (Ana başlık); [RENKLER] (Renk paleti); [FORMAT] (Platform formatı). Çıktıyı hiyerarşi, güvenli metin alanı, görsel odak ve platform oranı içeren prompt biçiminde ver.",
        "advanced": "Sosyal medya sanat yönetmeni gibi davran. Amacın kampanya mesajını mobil ekranda okunabilir güçlü bir posterle anlatmak. Kullanacağın bilgiler: [KAMPANYA] (Kampanya); [BASLIK] (Ana başlık); [RENKLER] (Renk paleti); [FORMAT] (Platform formatı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Hiyerarşi, güvenli metin alanı, görsel odak ve platform oranı içeren prompt. Kısıtlar: Metni değiştirme; yüksek kontrast sağla; kenarlarda güvenli boşluk bırak.",
        "expert": "ROL\nSen sosyal medya sanat yönetmenisın.\n\nAMAÇ\nKampanya mesajını mobil ekranda okunabilir güçlü bir posterle anlatmak.\n\nGİRDİLER\n- Kampanya: [KAMPANYA]\n- Ana başlık: [BASLIK]\n- Renk paleti: [RENKLER]\n- Platform formatı: [FORMAT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHiyerarşi, güvenli metin alanı, görsel odak ve platform oranı içeren prompt.\n\nKISITLAR\nMetni değiştirme; yüksek kontrast sağla; kenarlarda güvenli boşluk bırak.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Metni değiştirme; yüksek kontrast sağla; kenarlarda güvenli boşluk bırak",
      "outputFormat": "Hiyerarşi, güvenli metin alanı, görsel odak ve platform oranı içeren prompt",
      "before": "Bana sosyal medya kampanya posteri için bir şey hazırla.",
      "after": "ROL\nSen sosyal medya sanat yönetmenisın.\n\nAMAÇ\nKampanya mesajını mobil ekranda okunabilir güçlü bir posterle anlatmak.\n\nGİRDİLER\n- Kampanya: [KAMPANYA]\n- Ana başlık: [BASLIK]\n- Renk paleti: [RENKLER]\n- Platform formatı: [FORMAT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHiyerarşi, güvenli metin alanı, görsel odak ve platform oranı içeren prompt.\n\nKISITLAR\nMetni değiştirme; yüksek kontrast sağla; kenarlarda güvenli boşluk bırak.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Hiyerarşi, güvenli metin alanı, görsel odak ve platform oranı içeren prompt.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Sosyal Medya Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-10",
      "version": "1.0"
    },
    {
      "id": 10,
      "slug": "sinematik-karakter-portresi",
      "title": "Sinematik Karakter Portresi",
      "category": "gorsel",
      "categoryLabel": "Görsel Üretim",
      "subcategory": "Portre",
      "description": "Karakterin kişiliğini ışık, lens ve ortamla anlatan gerçekçi portre üretmek.",
      "models": [
        "Midjourney",
        "ChatGPT Images",
        "Leonardo"
      ],
      "level": "Orta",
      "tags": [
        "portre",
        "karakter",
        "sinematik"
      ],
      "variables": [
        {
          "key": "KARAKTER",
          "label": "Karakter",
          "default": "Genç siber güvenlik uzmanı"
        },
        {
          "key": "KIYAFET",
          "label": "Kıyafet",
          "default": "Minimal siyah teknik ceket"
        },
        {
          "key": "ORTAM",
          "label": "Ortam",
          "default": "Neon ışıklı çalışma odası"
        },
        {
          "key": "DUYGU",
          "label": "Duygu",
          "default": "Odaklı ve sakin"
        }
      ],
      "versions": {
        "quick": "Karakterin kişiliğini ışık, lens ve ortamla anlatan gerçekçi portre üretmek. Girdi: [KARAKTER] (Karakter); [KIYAFET] (Kıyafet); [ORTAM] (Ortam); [DUYGU] (Duygu). Çıktıyı portre kompozisyonu, lens, ışık ve cilt dokusu ayrıntıları biçiminde ver.",
        "advanced": "Sinematograf ve portre fotoğrafçısı gibi davran. Amacın karakterin kişiliğini ışık, lens ve ortamla anlatan gerçekçi portre üretmek. Kullanacağın bilgiler: [KARAKTER] (Karakter); [KIYAFET] (Kıyafet); [ORTAM] (Ortam); [DUYGU] (Duygu). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Portre kompozisyonu, lens, ışık ve cilt dokusu ayrıntıları. Kısıtlar: Doğal anatomi; aşırı cilt yumuşatma yok; eller görünüyorsa doğru anatomi.",
        "expert": "ROL\nSen sinematograf ve portre fotoğrafçısısın.\n\nAMAÇ\nKarakterin kişiliğini ışık, lens ve ortamla anlatan gerçekçi portre üretmek.\n\nGİRDİLER\n- Karakter: [KARAKTER]\n- Kıyafet: [KIYAFET]\n- Ortam: [ORTAM]\n- Duygu: [DUYGU]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nPortre kompozisyonu, lens, ışık ve cilt dokusu ayrıntıları.\n\nKISITLAR\nDoğal anatomi; aşırı cilt yumuşatma yok; eller görünüyorsa doğru anatomi.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Doğal anatomi; aşırı cilt yumuşatma yok; eller görünüyorsa doğru anatomi",
      "outputFormat": "Portre kompozisyonu, lens, ışık ve cilt dokusu ayrıntıları",
      "before": "Bana sinematik karakter portresi için bir şey hazırla.",
      "after": "ROL\nSen sinematograf ve portre fotoğrafçısısın.\n\nAMAÇ\nKarakterin kişiliğini ışık, lens ve ortamla anlatan gerçekçi portre üretmek.\n\nGİRDİLER\n- Karakter: [KARAKTER]\n- Kıyafet: [KIYAFET]\n- Ortam: [ORTAM]\n- Duygu: [DUYGU]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nPortre kompozisyonu, lens, ışık ve cilt dokusu ayrıntıları.\n\nKISITLAR\nDoğal anatomi; aşırı cilt yumuşatma yok; eller görünüyorsa doğru anatomi.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Portre kompozisyonu, lens, ışık ve cilt dokusu ayrıntıları.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Görsel Tasarım Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-11",
      "version": "1.0"
    },
    {
      "id": 11,
      "slug": "e-ticaret-urun-fotografi-seti",
      "title": "E-ticaret Ürün Fotoğrafı Seti",
      "category": "gorsel",
      "categoryLabel": "Görsel Üretim",
      "subcategory": "E-ticaret",
      "description": "Aynı ürün için tutarlı ana görsel ve detay çekimleri oluşturmak.",
      "models": [
        "ChatGPT Images",
        "Firefly",
        "Leonardo"
      ],
      "level": "Başlangıç",
      "tags": [
        "e-ticaret",
        "ürün",
        "fotoğraf"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Akıllı saat"
        },
        {
          "key": "ZEMIN",
          "label": "Zemin",
          "default": "Temiz açık gri"
        },
        {
          "key": "ACILAR",
          "label": "İstenen açılar",
          "default": "Ön, yan, yakın detay"
        },
        {
          "key": "PAZARYERI",
          "label": "Pazaryeri",
          "default": "Trendyol / Amazon"
        }
      ],
      "versions": {
        "quick": "Aynı ürün için tutarlı ana görsel ve detay çekimleri oluşturmak. Girdi: [URUN] (Ürün); [ZEMIN] (Zemin); [ACILAR] (İstenen açılar); [PAZARYERI] (Pazaryeri). Çıktıyı ana ürün karesi ve 3 detay sahnesi için tutarlı prompt seti biçiminde ver.",
        "advanced": "E-ticaret ürün fotoğrafçısı gibi davran. Amacın aynı ürün için tutarlı ana görsel ve detay çekimleri oluşturmak. Kullanacağın bilgiler: [URUN] (Ürün); [ZEMIN] (Zemin); [ACILAR] (İstenen açılar); [PAZARYERI] (Pazaryeri). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Ana ürün karesi ve 3 detay sahnesi için tutarlı prompt seti. Kısıtlar: Ürün renk ve formu tüm karelerde aynı; arka plan sade; yanıltıcı aksesuar ekleme.",
        "expert": "ROL\nSen e-ticaret ürün fotoğrafçısısın.\n\nAMAÇ\nAynı ürün için tutarlı ana görsel ve detay çekimleri oluşturmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Zemin: [ZEMIN]\n- İstenen açılar: [ACILAR]\n- Pazaryeri: [PAZARYERI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nAna ürün karesi ve 3 detay sahnesi için tutarlı prompt seti.\n\nKISITLAR\nÜrün renk ve formu tüm karelerde aynı; arka plan sade; yanıltıcı aksesuar ekleme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Ürün renk ve formu tüm karelerde aynı; arka plan sade; yanıltıcı aksesuar ekleme",
      "outputFormat": "Ana ürün karesi ve 3 detay sahnesi için tutarlı prompt seti",
      "before": "Bana e-ticaret ürün fotoğrafı seti için bir şey hazırla.",
      "after": "ROL\nSen e-ticaret ürün fotoğrafçısısın.\n\nAMAÇ\nAynı ürün için tutarlı ana görsel ve detay çekimleri oluşturmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Zemin: [ZEMIN]\n- İstenen açılar: [ACILAR]\n- Pazaryeri: [PAZARYERI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nAna ürün karesi ve 3 detay sahnesi için tutarlı prompt seti.\n\nKISITLAR\nÜrün renk ve formu tüm karelerde aynı; arka plan sade; yanıltıcı aksesuar ekleme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Ana ürün karesi ve 3 detay sahnesi için tutarlı prompt seti.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "E-ticaret Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-12",
      "version": "1.0"
    },
    {
      "id": 12,
      "slug": "oyun-konsept-sanati",
      "title": "Oyun Konsept Sanatı",
      "category": "gorsel",
      "categoryLabel": "Görsel Üretim",
      "subcategory": "Konsept tasarım",
      "description": "Oyunun atmosferini, oynanış alanını ve görsel dilini tek konsept karede göstermek.",
      "models": [
        "Midjourney",
        "Leonardo",
        "ChatGPT Images"
      ],
      "level": "İleri",
      "tags": [
        "oyun",
        "konsept",
        "çevre"
      ],
      "variables": [
        {
          "key": "TUR",
          "label": "Oyun türü",
          "default": "Rahat keşif oyunu"
        },
        {
          "key": "MEKAN",
          "label": "Mekân",
          "default": "Sisli biyolüminesan orman"
        },
        {
          "key": "OYUNCU",
          "label": "Oyuncu karakteri",
          "default": "Küçük gezgin robot"
        },
        {
          "key": "STIL",
          "label": "Sanat stili",
          "default": "Sinematik gerçekçilik"
        }
      ],
      "versions": {
        "quick": "Oyunun atmosferini, oynanış alanını ve görsel dilini tek konsept karede göstermek. Girdi: [TUR] (Oyun türü); [MEKAN] (Mekân); [OYUNCU] (Oyuncu karakteri); [STIL] (Sanat stili). Çıktıyı çevre hikâyesi, ölçek, odak, renk senaryosu ve oynanış ipuçları biçiminde ver.",
        "advanced": "Oyun sanat yönetmeni gibi davran. Amacın oyunun atmosferini, oynanış alanını ve görsel dilini tek konsept karede göstermek. Kullanacağın bilgiler: [TUR] (Oyun türü); [MEKAN] (Mekân); [OYUNCU] (Oyuncu karakteri); [STIL] (Sanat stili). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Çevre hikâyesi, ölçek, odak, renk senaryosu ve oynanış ipuçları. Kısıtlar: Arayüz ekleme; karakter ölçeğini okunur tut; tek bir güçlü odak noktası kullan.",
        "expert": "ROL\nSen oyun sanat yönetmenisın.\n\nAMAÇ\nOyunun atmosferini, oynanış alanını ve görsel dilini tek konsept karede göstermek.\n\nGİRDİLER\n- Oyun türü: [TUR]\n- Mekân: [MEKAN]\n- Oyuncu karakteri: [OYUNCU]\n- Sanat stili: [STIL]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÇevre hikâyesi, ölçek, odak, renk senaryosu ve oynanış ipuçları.\n\nKISITLAR\nArayüz ekleme; karakter ölçeğini okunur tut; tek bir güçlü odak noktası kullan.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Arayüz ekleme; karakter ölçeğini okunur tut; tek bir güçlü odak noktası kullan",
      "outputFormat": "Çevre hikâyesi, ölçek, odak, renk senaryosu ve oynanış ipuçları",
      "before": "Bana oyun konsept sanatı için bir şey hazırla.",
      "after": "ROL\nSen oyun sanat yönetmenisın.\n\nAMAÇ\nOyunun atmosferini, oynanış alanını ve görsel dilini tek konsept karede göstermek.\n\nGİRDİLER\n- Oyun türü: [TUR]\n- Mekân: [MEKAN]\n- Oyuncu karakteri: [OYUNCU]\n- Sanat stili: [STIL]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÇevre hikâyesi, ölçek, odak, renk senaryosu ve oynanış ipuçları.\n\nKISITLAR\nArayüz ekleme; karakter ölçeğini okunur tut; tek bir güçlü odak noktası kullan.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Çevre hikâyesi, ölçek, odak, renk senaryosu ve oynanış ipuçları.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Oyun Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-13",
      "version": "1.0"
    },
    {
      "id": 13,
      "slug": "5-saniyelik-urun-lansman-videosu",
      "title": "5 Saniyelik Ürün Lansman Videosu",
      "category": "video",
      "categoryLabel": "Video Üretim",
      "subcategory": "Ürün videosu",
      "description": "Tek ürünü kısa, premium ve döngüye uygun bir lansman videosunda tanıtmak.",
      "models": [
        "Runway",
        "Kling",
        "Pika",
        "Luma"
      ],
      "level": "Orta",
      "tags": [
        "video",
        "ürün",
        "lansman"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Kablosuz kulaklık"
        },
        {
          "key": "SAHNE",
          "label": "Sahne",
          "default": "Koyu yansıtıcı stüdyo"
        },
        {
          "key": "HAREKET",
          "label": "Kamera hareketi",
          "default": "Yavaş dolly-in ve 20° orbit"
        },
        {
          "key": "SURE",
          "label": "Süre",
          "default": "5 saniye"
        }
      ],
      "versions": {
        "quick": "Tek ürünü kısa, premium ve döngüye uygun bir lansman videosunda tanıtmak. Girdi: [URUN] (Ürün); [SAHNE] (Sahne); [HAREKET] (Kamera hareketi); [SURE] (Süre). Çıktıyı zaman çizelgesi, kamera hareketi, ürün hareketi ve negatif video kısıtları biçiminde ver.",
        "advanced": "Reklam yönetmeni gibi davran. Amacın tek ürünü kısa, premium ve döngüye uygun bir lansman videosunda tanıtmak. Kullanacağın bilgiler: [URUN] (Ürün); [SAHNE] (Sahne); [HAREKET] (Kamera hareketi); [SURE] (Süre). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Zaman çizelgesi, kamera hareketi, ürün hareketi ve negatif video kısıtları. Kısıtlar: Ürün geometrisi değişmesin; ani kamera sarsıntısı yok; metin üretme.",
        "expert": "ROL\nSen reklam yönetmenisın.\n\nAMAÇ\nTek ürünü kısa, premium ve döngüye uygun bir lansman videosunda tanıtmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Sahne: [SAHNE]\n- Kamera hareketi: [HAREKET]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nZaman çizelgesi, kamera hareketi, ürün hareketi ve negatif video kısıtları.\n\nKISITLAR\nÜrün geometrisi değişmesin; ani kamera sarsıntısı yok; metin üretme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Ürün geometrisi değişmesin; ani kamera sarsıntısı yok; metin üretme",
      "outputFormat": "Zaman çizelgesi, kamera hareketi, ürün hareketi ve negatif video kısıtları",
      "before": "Bana 5 saniyelik ürün lansman videosu için bir şey hazırla.",
      "after": "ROL\nSen reklam yönetmenisın.\n\nAMAÇ\nTek ürünü kısa, premium ve döngüye uygun bir lansman videosunda tanıtmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Sahne: [SAHNE]\n- Kamera hareketi: [HAREKET]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nZaman çizelgesi, kamera hareketi, ürün hareketi ve negatif video kısıtları.\n\nKISITLAR\nÜrün geometrisi değişmesin; ani kamera sarsıntısı yok; metin üretme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Zaman çizelgesi, kamera hareketi, ürün hareketi ve negatif video kısıtları.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Video Üretim Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-14",
      "version": "1.0"
    },
    {
      "id": 14,
      "slug": "gorselden-videoya-dogal-hareket",
      "title": "Görselden Videoya Doğal Hareket",
      "category": "video",
      "categoryLabel": "Video Üretim",
      "subcategory": "Image-to-video",
      "description": "Referans görselin kompozisyonunu koruyarak kontrollü mikro hareketler eklemek.",
      "models": [
        "Runway",
        "Kling",
        "Luma",
        "Pika"
      ],
      "level": "Orta",
      "tags": [
        "image-to-video",
        "hareket",
        "vfx"
      ],
      "variables": [
        {
          "key": "GORSEL",
          "label": "Referans görsel",
          "default": "Yüklediğim ana kare"
        },
        {
          "key": "KAMERA",
          "label": "Kamera",
          "default": "Çok yavaş push-in"
        },
        {
          "key": "HAREKET",
          "label": "Sahne hareketi",
          "default": "Hafif sis ve kumaş hareketi"
        },
        {
          "key": "SURE",
          "label": "Süre",
          "default": "6 saniye"
        }
      ],
      "versions": {
        "quick": "Referans görselin kompozisyonunu koruyarak kontrollü mikro hareketler eklemek. Girdi: [GORSEL] (Referans görsel); [KAMERA] (Kamera); [HAREKET] (Sahne hareketi); [SURE] (Süre). Çıktıyı korunacak alanlar, hareket katmanları ve kamera talimatı biçiminde ver.",
        "advanced": "Vfx süpervizörü gibi davran. Amacın referans görselin kompozisyonunu koruyarak kontrollü mikro hareketler eklemek. Kullanacağın bilgiler: [GORSEL] (Referans görsel); [KAMERA] (Kamera); [HAREKET] (Sahne hareketi); [SURE] (Süre). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Korunacak alanlar, hareket katmanları ve kamera talimatı. Kısıtlar: Yüz ve ürün formunu koru; yeni nesne ekleme; titreme ve morphing olmasın.",
        "expert": "ROL\nSen VFX süpervizörüsın.\n\nAMAÇ\nReferans görselin kompozisyonunu koruyarak kontrollü mikro hareketler eklemek.\n\nGİRDİLER\n- Referans görsel: [GORSEL]\n- Kamera: [KAMERA]\n- Sahne hareketi: [HAREKET]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKorunacak alanlar, hareket katmanları ve kamera talimatı.\n\nKISITLAR\nYüz ve ürün formunu koru; yeni nesne ekleme; titreme ve morphing olmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Yüz ve ürün formunu koru; yeni nesne ekleme; titreme ve morphing olmasın",
      "outputFormat": "Korunacak alanlar, hareket katmanları ve kamera talimatı",
      "before": "Bana görselden videoya doğal hareket için bir şey hazırla.",
      "after": "ROL\nSen VFX süpervizörüsın.\n\nAMAÇ\nReferans görselin kompozisyonunu koruyarak kontrollü mikro hareketler eklemek.\n\nGİRDİLER\n- Referans görsel: [GORSEL]\n- Kamera: [KAMERA]\n- Sahne hareketi: [HAREKET]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKorunacak alanlar, hareket katmanları ve kamera talimatı.\n\nKISITLAR\nYüz ve ürün formunu koru; yeni nesne ekleme; titreme ve morphing olmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Korunacak alanlar, hareket katmanları ve kamera talimatı.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Video Üretim Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-15",
      "version": "1.0"
    },
    {
      "id": 15,
      "slug": "sinematik-sehir-gecisi",
      "title": "Sinematik Şehir Geçişi",
      "category": "video",
      "categoryLabel": "Video Üretim",
      "subcategory": "Sinematik",
      "description": "Şehir sahnesinde atmosferi güçlendiren sinematik kamera geçişi üretmek.",
      "models": [
        "Kling",
        "Runway",
        "Luma"
      ],
      "level": "İleri",
      "tags": [
        "şehir",
        "sinematik",
        "kamera"
      ],
      "variables": [
        {
          "key": "SEHIR",
          "label": "Şehir / mekân",
          "default": "Yağmurlu gece İstanbul"
        },
        {
          "key": "KAMERA",
          "label": "Kamera hareketi",
          "default": "Sokak seviyesinde tracking shot"
        },
        {
          "key": "ISIK",
          "label": "Işık",
          "default": "Islak zeminde neon yansımalar"
        },
        {
          "key": "SURE",
          "label": "Süre",
          "default": "8 saniye"
        }
      ],
      "versions": {
        "quick": "Şehir sahnesinde atmosferi güçlendiren sinematik kamera geçişi üretmek. Girdi: [SEHIR] (Şehir / mekân); [KAMERA] (Kamera hareketi); [ISIK] (Işık); [SURE] (Süre). Çıktıyı sahne başlangıcı, hareket rotası, ışık değişimi ve bitiş karesi biçiminde ver.",
        "advanced": "Görüntü yönetmeni gibi davran. Amacın şehir sahnesinde atmosferi güçlendiren sinematik kamera geçişi üretmek. Kullanacağın bilgiler: [SEHIR] (Şehir / mekân); [KAMERA] (Kamera hareketi); [ISIK] (Işık); [SURE] (Süre). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Sahne başlangıcı, hareket rotası, ışık değişimi ve bitiş karesi. Kısıtlar: Fiziksel olarak mümkün kamera; tutarlı trafik; okunmayan tabela üretme.",
        "expert": "ROL\nSen görüntü yönetmenisın.\n\nAMAÇ\nŞehir sahnesinde atmosferi güçlendiren sinematik kamera geçişi üretmek.\n\nGİRDİLER\n- Şehir / mekân: [SEHIR]\n- Kamera hareketi: [KAMERA]\n- Işık: [ISIK]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSahne başlangıcı, hareket rotası, ışık değişimi ve bitiş karesi.\n\nKISITLAR\nFiziksel olarak mümkün kamera; tutarlı trafik; okunmayan tabela üretme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Fiziksel olarak mümkün kamera; tutarlı trafik; okunmayan tabela üretme",
      "outputFormat": "Sahne başlangıcı, hareket rotası, ışık değişimi ve bitiş karesi",
      "before": "Bana sinematik şehir geçişi için bir şey hazırla.",
      "after": "ROL\nSen görüntü yönetmenisın.\n\nAMAÇ\nŞehir sahnesinde atmosferi güçlendiren sinematik kamera geçişi üretmek.\n\nGİRDİLER\n- Şehir / mekân: [SEHIR]\n- Kamera hareketi: [KAMERA]\n- Işık: [ISIK]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSahne başlangıcı, hareket rotası, ışık değişimi ve bitiş karesi.\n\nKISITLAR\nFiziksel olarak mümkün kamera; tutarlı trafik; okunmayan tabela üretme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Sahne başlangıcı, hareket rotası, ışık değişimi ve bitiş karesi.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Video Üretim Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-16",
      "version": "1.0"
    },
    {
      "id": 16,
      "slug": "logo-reveal-animasyonu",
      "title": "Logo Reveal Animasyonu",
      "category": "video",
      "categoryLabel": "Video Üretim",
      "subcategory": "Motion design",
      "description": "Logoyu kısa ve temiz bir marka açılışıyla ortaya çıkarmak.",
      "models": [
        "Runway",
        "Pika",
        "Kling"
      ],
      "level": "Orta",
      "tags": [
        "logo",
        "animasyon",
        "motion"
      ],
      "variables": [
        {
          "key": "LOGO",
          "label": "Logo",
          "default": "PROMPTLA logosu"
        },
        {
          "key": "MALZEME",
          "label": "Malzeme",
          "default": "Cam ve neon"
        },
        {
          "key": "HAREKET",
          "label": "Reveal şekli",
          "default": "Parçacıkların birleşmesi"
        },
        {
          "key": "SURE",
          "label": "Süre",
          "default": "4 saniye"
        }
      ],
      "versions": {
        "quick": "Logoyu kısa ve temiz bir marka açılışıyla ortaya çıkarmak. Girdi: [LOGO] (Logo); [MALZEME] (Malzeme); [HAREKET] (Reveal şekli); [SURE] (Süre). Çıktıyı başlangıç, oluşum, final bekleme ve loop seçeneği biçiminde ver.",
        "advanced": "Motion grafik tasarımcısı gibi davran. Amacın logoyu kısa ve temiz bir marka açılışıyla ortaya çıkarmak. Kullanacağın bilgiler: [LOGO] (Logo); [MALZEME] (Malzeme); [HAREKET] (Reveal şekli); [SURE] (Süre). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Başlangıç, oluşum, final bekleme ve loop seçeneği. Kısıtlar: Logo formu ve yazımı değişmesin; ek sembol ve metin olmasın.",
        "expert": "ROL\nSen motion grafik tasarımcısısın.\n\nAMAÇ\nLogoyu kısa ve temiz bir marka açılışıyla ortaya çıkarmak.\n\nGİRDİLER\n- Logo: [LOGO]\n- Malzeme: [MALZEME]\n- Reveal şekli: [HAREKET]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBaşlangıç, oluşum, final bekleme ve loop seçeneği.\n\nKISITLAR\nLogo formu ve yazımı değişmesin; ek sembol ve metin olmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Logo formu ve yazımı değişmesin; ek sembol ve metin olmasın",
      "outputFormat": "Başlangıç, oluşum, final bekleme ve loop seçeneği",
      "before": "Bana logo reveal animasyonu için bir şey hazırla.",
      "after": "ROL\nSen motion grafik tasarımcısısın.\n\nAMAÇ\nLogoyu kısa ve temiz bir marka açılışıyla ortaya çıkarmak.\n\nGİRDİLER\n- Logo: [LOGO]\n- Malzeme: [MALZEME]\n- Reveal şekli: [HAREKET]\n- Süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBaşlangıç, oluşum, final bekleme ve loop seçeneği.\n\nKISITLAR\nLogo formu ve yazımı değişmesin; ek sembol ve metin olmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Başlangıç, oluşum, final bekleme ve loop seçeneği.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Video Üretim Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-17",
      "version": "1.0"
    },
    {
      "id": 17,
      "slug": "dikey-reels-hik-ye-akisi",
      "title": "Dikey Reels Hikâye Akışı",
      "category": "video",
      "categoryLabel": "Video Üretim",
      "subcategory": "Sosyal video",
      "description": "Ilk saniyede dikkat çeken ve net aksiyon çağrısı içeren dikey video planlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "reels",
        "storyboard",
        "sosyal video"
      ],
      "variables": [
        {
          "key": "KONU",
          "label": "Konu",
          "default": "Yapay zekâ ile daha iyi prompt yazma"
        },
        {
          "key": "HEDEF",
          "label": "Hedef kitle",
          "default": "Üniversite öğrencileri"
        },
        {
          "key": "SURE",
          "label": "Süre",
          "default": "20 saniye"
        },
        {
          "key": "CTA",
          "label": "Aksiyon çağrısı",
          "default": "Promptla kütüphanesini keşfet"
        }
      ],
      "versions": {
        "quick": "Ilk saniyede dikkat çeken ve net aksiyon çağrısı içeren dikey video planlamak. Girdi: [KONU] (Konu); [HEDEF] (Hedef kitle); [SURE] (Süre); [CTA] (Aksiyon çağrısı). Çıktıyı saniye saniye storyboard, ekran yazısı, seslendirme ve b-roll listesi biçiminde ver.",
        "advanced": "Kısa video içerik yönetmeni gibi davran. Amacın ilk saniyede dikkat çeken ve net aksiyon çağrısı içeren dikey video planlamak. Kullanacağın bilgiler: [KONU] (Konu); [HEDEF] (Hedef kitle); [SURE] (Süre); [CTA] (Aksiyon çağrısı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Saniye saniye storyboard, ekran yazısı, seslendirme ve B-roll listesi. Kısıtlar: İlk 2 saniye güçlü kanca; kısa cümle; altyazı güvenli alanı; tek CTA.",
        "expert": "ROL\nSen kısa video içerik yönetmenisın.\n\nAMAÇ\nIlk saniyede dikkat çeken ve net aksiyon çağrısı içeren dikey video planlamak.\n\nGİRDİLER\n- Konu: [KONU]\n- Hedef kitle: [HEDEF]\n- Süre: [SURE]\n- Aksiyon çağrısı: [CTA]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSaniye saniye storyboard, ekran yazısı, seslendirme ve B-roll listesi.\n\nKISITLAR\nİlk 2 saniye güçlü kanca; kısa cümle; altyazı güvenli alanı; tek CTA.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "İlk 2 saniye güçlü kanca; kısa cümle; altyazı güvenli alanı; tek CTA",
      "outputFormat": "Saniye saniye storyboard, ekran yazısı, seslendirme ve B-roll listesi",
      "before": "Bana dikey reels hikâye akışı için bir şey hazırla.",
      "after": "ROL\nSen kısa video içerik yönetmenisın.\n\nAMAÇ\nIlk saniyede dikkat çeken ve net aksiyon çağrısı içeren dikey video planlamak.\n\nGİRDİLER\n- Konu: [KONU]\n- Hedef kitle: [HEDEF]\n- Süre: [SURE]\n- Aksiyon çağrısı: [CTA]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSaniye saniye storyboard, ekran yazısı, seslendirme ve B-roll listesi.\n\nKISITLAR\nİlk 2 saniye güçlü kanca; kısa cümle; altyazı güvenli alanı; tek CTA.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Saniye saniye storyboard, ekran yazısı, seslendirme ve B-roll listesi.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Sosyal Medya Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-18",
      "version": "1.0"
    },
    {
      "id": 18,
      "slug": "storyboard-ve-cekim-listesi",
      "title": "Storyboard ve Çekim Listesi",
      "category": "video",
      "categoryLabel": "Video Üretim",
      "subcategory": "Prodüksiyon",
      "description": "Kısa bir fikri uygulanabilir çekim planına dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "storyboard",
        "çekim",
        "prodüksiyon"
      ],
      "variables": [
        {
          "key": "HIKAYE",
          "label": "Hikâye özeti",
          "default": "Bir geliştiricinin gece projesini tamamlaması"
        },
        {
          "key": "SURE",
          "label": "Toplam süre",
          "default": "30 saniye"
        },
        {
          "key": "MEKAN",
          "label": "Mekân",
          "default": "Ev çalışma odası"
        },
        {
          "key": "EKIPMAN",
          "label": "Ekipman",
          "default": "Telefon ve tek LED ışık"
        }
      ],
      "versions": {
        "quick": "Kısa bir fikri uygulanabilir çekim planına dönüştürmek. Girdi: [HIKAYE] (Hikâye özeti); [SURE] (Toplam süre); [MEKAN] (Mekân); [EKIPMAN] (Ekipman). Çıktıyı plan numarası, kadraj, hareket, süre, ses ve geçiş içeren tablo biçiminde ver.",
        "advanced": "Film yapımcısı ve storyboard sanatçısı gibi davran. Amacın kısa bir fikri uygulanabilir çekim planına dönüştürmek. Kullanacağın bilgiler: [HIKAYE] (Hikâye özeti); [SURE] (Toplam süre); [MEKAN] (Mekân); [EKIPMAN] (Ekipman). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Plan numarası, kadraj, hareket, süre, ses ve geçiş içeren tablo. Kısıtlar: Mevcut ekipmana uygun; gereksiz çekim yok; süre toplamı hedefi aşmasın.",
        "expert": "ROL\nSen film yapımcısı ve storyboard sanatçısısın.\n\nAMAÇ\nKısa bir fikri uygulanabilir çekim planına dönüştürmek.\n\nGİRDİLER\n- Hikâye özeti: [HIKAYE]\n- Toplam süre: [SURE]\n- Mekân: [MEKAN]\n- Ekipman: [EKIPMAN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nPlan numarası, kadraj, hareket, süre, ses ve geçiş içeren tablo.\n\nKISITLAR\nMevcut ekipmana uygun; gereksiz çekim yok; süre toplamı hedefi aşmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Mevcut ekipmana uygun; gereksiz çekim yok; süre toplamı hedefi aşmasın",
      "outputFormat": "Plan numarası, kadraj, hareket, süre, ses ve geçiş içeren tablo",
      "before": "Bana storyboard ve çekim listesi için bir şey hazırla.",
      "after": "ROL\nSen film yapımcısı ve storyboard sanatçısısın.\n\nAMAÇ\nKısa bir fikri uygulanabilir çekim planına dönüştürmek.\n\nGİRDİLER\n- Hikâye özeti: [HIKAYE]\n- Toplam süre: [SURE]\n- Mekân: [MEKAN]\n- Ekipman: [EKIPMAN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nPlan numarası, kadraj, hareket, süre, ses ve geçiş içeren tablo.\n\nKISITLAR\nMevcut ekipmana uygun; gereksiz çekim yok; süre toplamı hedefi aşmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Plan numarası, kadraj, hareket, süre, ses ve geçiş içeren tablo.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Video Üretim Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-19",
      "version": "1.0"
    },
    {
      "id": 19,
      "slug": "low-poly-oyun-varligi",
      "title": "Low-poly Oyun Varlığı",
      "category": "3d",
      "categoryLabel": "3D ve Oyun",
      "subcategory": "3D varlık",
      "description": "Oyun motoruna uygun temiz siluetli low-poly varlık tasarlamak.",
      "models": [
        "Meshy",
        "Tripo",
        "ChatGPT"
      ],
      "level": "Orta",
      "tags": [
        "3d",
        "low-poly",
        "game asset"
      ],
      "variables": [
        {
          "key": "NESNE",
          "label": "Nesne",
          "default": "Fütüristik keşif dronu"
        },
        {
          "key": "POLYGON",
          "label": "Poligon hedefi",
          "default": "5–8 bin üçgen"
        },
        {
          "key": "STIL",
          "label": "Stil",
          "default": "Stylized low-poly"
        },
        {
          "key": "FORMAT",
          "label": "Çıktı formatı",
          "default": "GLB"
        }
      ],
      "versions": {
        "quick": "Oyun motoruna uygun temiz siluetli low-poly varlık tasarlamak. Girdi: [NESNE] (Nesne); [POLYGON] (Poligon hedefi); [STIL] (Stil); [FORMAT] (Çıktı formatı). Çıktıyı form, malzeme, topoloji, pivot ve texture talimatı biçiminde ver.",
        "advanced": "3d oyun sanatçısı gibi davran. Amacın oyun motoruna uygun temiz siluetli low-poly varlık tasarlamak. Kullanacağın bilgiler: [NESNE] (Nesne); [POLYGON] (Poligon hedefi); [STIL] (Stil); [FORMAT] (Çıktı formatı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Form, malzeme, topoloji, pivot ve texture talimatı. Kısıtlar: Tek parça temiz mesh; gerçek ölçek; merkez pivot; aşırı küçük detay yok.",
        "expert": "ROL\nSen 3D oyun sanatçısısın.\n\nAMAÇ\nOyun motoruna uygun temiz siluetli low-poly varlık tasarlamak.\n\nGİRDİLER\n- Nesne: [NESNE]\n- Poligon hedefi: [POLYGON]\n- Stil: [STIL]\n- Çıktı formatı: [FORMAT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nForm, malzeme, topoloji, pivot ve texture talimatı.\n\nKISITLAR\nTek parça temiz mesh; gerçek ölçek; merkez pivot; aşırı küçük detay yok.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Tek parça temiz mesh; gerçek ölçek; merkez pivot; aşırı küçük detay yok",
      "outputFormat": "Form, malzeme, topoloji, pivot ve texture talimatı",
      "before": "Bana low-poly oyun varlığı için bir şey hazırla.",
      "after": "ROL\nSen 3D oyun sanatçısısın.\n\nAMAÇ\nOyun motoruna uygun temiz siluetli low-poly varlık tasarlamak.\n\nGİRDİLER\n- Nesne: [NESNE]\n- Poligon hedefi: [POLYGON]\n- Stil: [STIL]\n- Çıktı formatı: [FORMAT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nForm, malzeme, topoloji, pivot ve texture talimatı.\n\nKISITLAR\nTek parça temiz mesh; gerçek ölçek; merkez pivot; aşırı küçük detay yok.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Form, malzeme, topoloji, pivot ve texture talimatı.",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp",
      "thumbnail": "assets/images/thumbs/img_69f04dd26f50c7.32701932-thumb.webp",
      "collections": [
        "Oyun Geliştirici Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-20",
      "version": "1.0"
    },
    {
      "id": 20,
      "slug": "gercekci-urun-3d-modeli",
      "title": "Gerçekçi Ürün 3D Modeli",
      "category": "3d",
      "categoryLabel": "3D ve Oyun",
      "subcategory": "Ürün modelleme",
      "description": "Ürünün ölçü ve malzeme özelliklerini koruyan sunuma hazır 3d model oluşturmak.",
      "models": [
        "Meshy",
        "Tripo",
        "Blender AI"
      ],
      "level": "İleri",
      "tags": [
        "3d",
        "ürün",
        "hard surface"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Mekanik klavye"
        },
        {
          "key": "OLCU",
          "label": "Ölçüler",
          "default": "360×140×35 mm"
        },
        {
          "key": "MALZEME",
          "label": "Malzemeler",
          "default": "Alüminyum, PBT tuşlar"
        },
        {
          "key": "DETAY",
          "label": "Detay seviyesi",
          "default": "Yakın plan render"
        }
      ],
      "versions": {
        "quick": "Ürünün ölçü ve malzeme özelliklerini koruyan sunuma hazır 3d model oluşturmak. Girdi: [URUN] (Ürün); [OLCU] (Ölçüler); [MALZEME] (Malzemeler); [DETAY] (Detay seviyesi). Çıktıyı geometri, bevel, malzeme, uv ve render kontrol listesi biçiminde ver.",
        "advanced": "Hard-surface 3d modelleyici gibi davran. Amacın ürünün ölçü ve malzeme özelliklerini koruyan sunuma hazır 3D model oluşturmak. Kullanacağın bilgiler: [URUN] (Ürün); [OLCU] (Ölçüler); [MALZEME] (Malzemeler); [DETAY] (Detay seviyesi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Geometri, bevel, malzeme, UV ve render kontrol listesi. Kısıtlar: Gerçek ölçü; manifold mesh; marka logosu ekleme; ergonomik oranları koru.",
        "expert": "ROL\nSen hard-surface 3D modelleyicisın.\n\nAMAÇ\nÜrünün ölçü ve malzeme özelliklerini koruyan sunuma hazır 3d model oluşturmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Ölçüler: [OLCU]\n- Malzemeler: [MALZEME]\n- Detay seviyesi: [DETAY]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nGeometri, bevel, malzeme, UV ve render kontrol listesi.\n\nKISITLAR\nGerçek ölçü; manifold mesh; marka logosu ekleme; ergonomik oranları koru.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Gerçek ölçü; manifold mesh; marka logosu ekleme; ergonomik oranları koru",
      "outputFormat": "Geometri, bevel, malzeme, UV ve render kontrol listesi",
      "before": "Bana gerçekçi ürün 3d modeli için bir şey hazırla.",
      "after": "ROL\nSen hard-surface 3D modelleyicisın.\n\nAMAÇ\nÜrünün ölçü ve malzeme özelliklerini koruyan sunuma hazır 3d model oluşturmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Ölçüler: [OLCU]\n- Malzemeler: [MALZEME]\n- Detay seviyesi: [DETAY]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nGeometri, bevel, malzeme, UV ve render kontrol listesi.\n\nKISITLAR\nGerçek ölçü; manifold mesh; marka logosu ekleme; ergonomik oranları koru.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Geometri, bevel, malzeme, UV ve render kontrol listesi.",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp",
      "thumbnail": "assets/images/thumbs/img_69f04dd26f50c7.32701932-thumb.webp",
      "collections": [
        "3D Tasarım Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-01",
      "version": "1.0"
    },
    {
      "id": 21,
      "slug": "oyun-bolumu-tasarim-dokumani",
      "title": "Oyun Bölümü Tasarım Dokümanı",
      "category": "3d",
      "categoryLabel": "3D ve Oyun",
      "subcategory": "Level design",
      "description": "Oyuncuya keşif ve yönlendirme sunan dengeli bir bölüm tasarlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "level design",
        "oyun",
        "mekanik"
      ],
      "variables": [
        {
          "key": "OYUN",
          "label": "Oyun türü",
          "default": "Üçüncü şahıs keşif"
        },
        {
          "key": "MEKANIK",
          "label": "Ana mekanikler",
          "default": "Yürüme, zıplama, fotoğraf çekme"
        },
        {
          "key": "SURE",
          "label": "Hedef bölüm süresi",
          "default": "12 dakika"
        },
        {
          "key": "ATMOSFER",
          "label": "Atmosfer",
          "default": "Sakin orman ve eski gözlemevi"
        }
      ],
      "versions": {
        "quick": "Oyuncuya keşif ve yönlendirme sunan dengeli bir bölüm tasarlamak. Girdi: [OYUN] (Oyun türü); [MEKANIK] (Ana mekanikler); [SURE] (Hedef bölüm süresi); [ATMOSFER] (Atmosfer). Çıktıyı beat haritası, landmarklar, risk/ödül, pacing ve test soruları biçiminde ver.",
        "advanced": "Kıdemli level designer gibi davran. Amacın oyuncuya keşif ve yönlendirme sunan dengeli bir bölüm tasarlamak. Kullanacağın bilgiler: [OYUN] (Oyun türü); [MEKANIK] (Ana mekanikler); [SURE] (Hedef bölüm süresi); [ATMOSFER] (Atmosfer). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Beat haritası, landmarklar, risk/ödül, pacing ve test soruları. Kısıtlar: Oyuncuyu görünmez duvarlarla sıkıştırma; geri dönüş yolları; erişilebilir yönlendirme.",
        "expert": "ROL\nSen kıdemli level designersın.\n\nAMAÇ\nOyuncuya keşif ve yönlendirme sunan dengeli bir bölüm tasarlamak.\n\nGİRDİLER\n- Oyun türü: [OYUN]\n- Ana mekanikler: [MEKANIK]\n- Hedef bölüm süresi: [SURE]\n- Atmosfer: [ATMOSFER]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBeat haritası, landmarklar, risk/ödül, pacing ve test soruları.\n\nKISITLAR\nOyuncuyu görünmez duvarlarla sıkıştırma; geri dönüş yolları; erişilebilir yönlendirme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Oyuncuyu görünmez duvarlarla sıkıştırma; geri dönüş yolları; erişilebilir yönlendirme",
      "outputFormat": "Beat haritası, landmarklar, risk/ödül, pacing ve test soruları",
      "before": "Bana oyun bölümü tasarım dokümanı için bir şey hazırla.",
      "after": "ROL\nSen kıdemli level designersın.\n\nAMAÇ\nOyuncuya keşif ve yönlendirme sunan dengeli bir bölüm tasarlamak.\n\nGİRDİLER\n- Oyun türü: [OYUN]\n- Ana mekanikler: [MEKANIK]\n- Hedef bölüm süresi: [SURE]\n- Atmosfer: [ATMOSFER]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBeat haritası, landmarklar, risk/ödül, pacing ve test soruları.\n\nKISITLAR\nOyuncuyu görünmez duvarlarla sıkıştırma; geri dönüş yolları; erişilebilir yönlendirme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Beat haritası, landmarklar, risk/ödül, pacing ve test soruları.",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp",
      "thumbnail": "assets/images/thumbs/img_69f04dd26f50c7.32701932-thumb.webp",
      "collections": [
        "Oyun Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-02",
      "version": "1.0"
    },
    {
      "id": 22,
      "slug": "npc-davranis-sistemi",
      "title": "NPC Davranış Sistemi",
      "category": "3d",
      "categoryLabel": "3D ve Oyun",
      "subcategory": "Oyun yapay zekâsı",
      "description": "Okunabilir ve performanslı npc durum makinesi tasarlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "İleri",
      "tags": [
        "npc",
        "game ai",
        "state machine"
      ],
      "variables": [
        {
          "key": "NPC",
          "label": "NPC türü",
          "default": "Orman koruyucusu"
        },
        {
          "key": "DURUMLAR",
          "label": "Durumlar",
          "default": "Devriye, merak, takip, geri dön"
        },
        {
          "key": "MOTOR",
          "label": "Oyun motoru",
          "default": "Unity"
        },
        {
          "key": "KISIT",
          "label": "Performans hedefi",
          "default": "Aynı anda 30 NPC"
        }
      ],
      "versions": {
        "quick": "Okunabilir ve performanslı npc durum makinesi tasarlamak. Girdi: [NPC] (NPC türü); [DURUMLAR] (Durumlar); [MOTOR] (Oyun motoru); [KISIT] (Performans hedefi). Çıktıyı state machine şeması, geçiş koşulları, pseudo-code ve optimizasyon biçiminde ver.",
        "advanced": "Gameplay ai programcısı gibi davran. Amacın okunabilir ve performanslı NPC durum makinesi tasarlamak. Kullanacağın bilgiler: [NPC] (NPC türü); [DURUMLAR] (Durumlar); [MOTOR] (Oyun motoru); [KISIT] (Performans hedefi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: State machine şeması, geçiş koşulları, pseudo-code ve optimizasyon. Kısıtlar: Her kare pahalı tarama yapma; durum geçişlerini deterministik tut; debug görünümü ekle.",
        "expert": "ROL\nSen gameplay AI programcısısın.\n\nAMAÇ\nOkunabilir ve performanslı npc durum makinesi tasarlamak.\n\nGİRDİLER\n- NPC türü: [NPC]\n- Durumlar: [DURUMLAR]\n- Oyun motoru: [MOTOR]\n- Performans hedefi: [KISIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nState machine şeması, geçiş koşulları, pseudo-code ve optimizasyon.\n\nKISITLAR\nHer kare pahalı tarama yapma; durum geçişlerini deterministik tut; debug görünümü ekle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Her kare pahalı tarama yapma; durum geçişlerini deterministik tut; debug görünümü ekle",
      "outputFormat": "State machine şeması, geçiş koşulları, pseudo-code ve optimizasyon",
      "before": "Bana npc davranış sistemi için bir şey hazırla.",
      "after": "ROL\nSen gameplay AI programcısısın.\n\nAMAÇ\nOkunabilir ve performanslı npc durum makinesi tasarlamak.\n\nGİRDİLER\n- NPC türü: [NPC]\n- Durumlar: [DURUMLAR]\n- Oyun motoru: [MOTOR]\n- Performans hedefi: [KISIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nState machine şeması, geçiş koşulları, pseudo-code ve optimizasyon.\n\nKISITLAR\nHer kare pahalı tarama yapma; durum geçişlerini deterministik tut; debug görünümü ekle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "State machine şeması, geçiş koşulları, pseudo-code ve optimizasyon.",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp",
      "thumbnail": "assets/images/thumbs/img_69f04dd26f50c7.32701932-thumb.webp",
      "collections": [
        "Oyun Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-03",
      "version": "1.0"
    },
    {
      "id": 23,
      "slug": "blender-sahne-isik-kurulumu",
      "title": "Blender Sahne Işık Kurulumu",
      "category": "3d",
      "categoryLabel": "3D ve Oyun",
      "subcategory": "Render",
      "description": "Ürün veya karakter için okunabilir ve sinematik üç nokta ışık kurulumu oluşturmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "blender",
        "ışık",
        "render"
      ],
      "variables": [
        {
          "key": "KONU",
          "label": "Konu",
          "default": "Metal robot karakter"
        },
        {
          "key": "MOTOR",
          "label": "Render motoru",
          "default": "Cycles"
        },
        {
          "key": "DUYGU",
          "label": "Duygu",
          "default": "Gizemli ama premium"
        },
        {
          "key": "ARKA_PLAN",
          "label": "Arka plan",
          "default": "Koyu sisli stüdyo"
        }
      ],
      "versions": {
        "quick": "Ürün veya karakter için okunabilir ve sinematik üç nokta ışık kurulumu oluşturmak. Girdi: [KONU] (Konu); [MOTOR] (Render motoru); [DUYGU] (Duygu); [ARKA_PLAN] (Arka plan). Çıktıyı işık konumu, güç, renk sıcaklığı, kamera ve render ayarları biçiminde ver.",
        "advanced": "Işık sanatçısı gibi davran. Amacın ürün veya karakter için okunabilir ve sinematik üç nokta ışık kurulumu oluşturmak. Kullanacağın bilgiler: [KONU] (Konu); [MOTOR] (Render motoru); [DUYGU] (Duygu); [ARKA_PLAN] (Arka plan). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Işık konumu, güç, renk sıcaklığı, kamera ve render ayarları. Kısıtlar: Clipping ve gürültüyü azalt; materyal detayını kaybetme; kontrollü rim light.",
        "expert": "ROL\nSen ışık sanatçısısın.\n\nAMAÇ\nÜrün veya karakter için okunabilir ve sinematik üç nokta ışık kurulumu oluşturmak.\n\nGİRDİLER\n- Konu: [KONU]\n- Render motoru: [MOTOR]\n- Duygu: [DUYGU]\n- Arka plan: [ARKA_PLAN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nIşık konumu, güç, renk sıcaklığı, kamera ve render ayarları.\n\nKISITLAR\nClipping ve gürültüyü azalt; materyal detayını kaybetme; kontrollü rim light.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Clipping ve gürültüyü azalt; materyal detayını kaybetme; kontrollü rim light",
      "outputFormat": "Işık konumu, güç, renk sıcaklığı, kamera ve render ayarları",
      "before": "Bana blender sahne işık kurulumu için bir şey hazırla.",
      "after": "ROL\nSen ışık sanatçısısın.\n\nAMAÇ\nÜrün veya karakter için okunabilir ve sinematik üç nokta ışık kurulumu oluşturmak.\n\nGİRDİLER\n- Konu: [KONU]\n- Render motoru: [MOTOR]\n- Duygu: [DUYGU]\n- Arka plan: [ARKA_PLAN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nIşık konumu, güç, renk sıcaklığı, kamera ve render ayarları.\n\nKISITLAR\nClipping ve gürültüyü azalt; materyal detayını kaybetme; kontrollü rim light.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Işık konumu, güç, renk sıcaklığı, kamera ve render ayarları.",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp",
      "thumbnail": "assets/images/thumbs/img_69f04dd26f50c7.32701932-thumb.webp",
      "collections": [
        "3D Tasarım Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-04",
      "version": "1.0"
    },
    {
      "id": 24,
      "slug": "webgl-performans-incelemesi",
      "title": "WebGL Performans İncelemesi",
      "category": "3d",
      "categoryLabel": "3D ve Oyun",
      "subcategory": "3D web",
      "description": "Three.js sahnesindeki fps düşüşünün nedenlerini ölçerek azaltmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "İleri",
      "tags": [
        "three.js",
        "webgl",
        "performans"
      ],
      "variables": [
        {
          "key": "SAHNE",
          "label": "Sahne özeti",
          "default": "Prosedürel orman"
        },
        {
          "key": "ISTATISTIK",
          "label": "Mevcut istatistik",
          "default": "9 chunk, 63 draw call"
        },
        {
          "key": "CIHAZ",
          "label": "Hedef cihaz",
          "default": "Orta seviye dizüstü"
        },
        {
          "key": "KOD",
          "label": "İlgili kod",
          "default": "Render ve terrain kodunu yapıştır"
        }
      ],
      "versions": {
        "quick": "Three.js sahnesindeki fps düşüşünün nedenlerini ölçerek azaltmak. Girdi: [SAHNE] (Sahne özeti); [ISTATISTIK] (Mevcut istatistik); [CIHAZ] (Hedef cihaz); [KOD] (İlgili kod). Çıktıyı darboğaz sırası, ölçüm yöntemi, kod yamaları ve kalite kademeleri biçiminde ver.",
        "advanced": "Webgl performans mühendisi gibi davran. Amacın Three.js sahnesindeki FPS düşüşünün nedenlerini ölçerek azaltmak. Kullanacağın bilgiler: [SAHNE] (Sahne özeti); [ISTATISTIK] (Mevcut istatistik); [CIHAZ] (Hedef cihaz); [KOD] (İlgili kod). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Darboğaz sırası, ölçüm yöntemi, kod yamaları ve kalite kademeleri. Kısıtlar: Ölçmeden optimizasyon yapma; görsel kaliteyi kademeli düşür; bellek sızıntılarını kontrol et.",
        "expert": "ROL\nSen WebGL performans mühendisisın.\n\nAMAÇ\nThree.js sahnesindeki fps düşüşünün nedenlerini ölçerek azaltmak.\n\nGİRDİLER\n- Sahne özeti: [SAHNE]\n- Mevcut istatistik: [ISTATISTIK]\n- Hedef cihaz: [CIHAZ]\n- İlgili kod: [KOD]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nDarboğaz sırası, ölçüm yöntemi, kod yamaları ve kalite kademeleri.\n\nKISITLAR\nÖlçmeden optimizasyon yapma; görsel kaliteyi kademeli düşür; bellek sızıntılarını kontrol et.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Ölçmeden optimizasyon yapma; görsel kaliteyi kademeli düşür; bellek sızıntılarını kontrol et",
      "outputFormat": "Darboğaz sırası, ölçüm yöntemi, kod yamaları ve kalite kademeleri",
      "before": "Bana webgl performans i̇ncelemesi için bir şey hazırla.",
      "after": "ROL\nSen WebGL performans mühendisisın.\n\nAMAÇ\nThree.js sahnesindeki fps düşüşünün nedenlerini ölçerek azaltmak.\n\nGİRDİLER\n- Sahne özeti: [SAHNE]\n- Mevcut istatistik: [ISTATISTIK]\n- Hedef cihaz: [CIHAZ]\n- İlgili kod: [KOD]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nDarboğaz sırası, ölçüm yöntemi, kod yamaları ve kalite kademeleri.\n\nKISITLAR\nÖlçmeden optimizasyon yapma; görsel kaliteyi kademeli düşür; bellek sızıntılarını kontrol et.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Darboğaz sırası, ölçüm yöntemi, kod yamaları ve kalite kademeleri.",
      "image": "assets/images/img_69f04dd26f50c7.32701932.webp",
      "thumbnail": "assets/images/thumbs/img_69f04dd26f50c7.32701932-thumb.webp",
      "collections": [
        "Web Geliştirici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-05",
      "version": "1.0"
    },
    {
      "id": 25,
      "slug": "ders-notunu-sinav-paketine-donusturme",
      "title": "Ders Notunu Sınav Paketine Dönüştürme",
      "category": "odev",
      "categoryLabel": "Eğitim ve Ödev",
      "subcategory": "Özetleme",
      "description": "Uzun ders notunu sınava hazırlık için yapılandırılmış tekrar paketine dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Kimi"
      ],
      "level": "Başlangıç",
      "tags": [
        "ders",
        "özet",
        "sınav"
      ],
      "variables": [
        {
          "key": "DERS",
          "label": "Ders",
          "default": "Veritabanı Yönetimi"
        },
        {
          "key": "NOT",
          "label": "Ders notu",
          "default": "Notlarını buraya yapıştır"
        },
        {
          "key": "SINAV",
          "label": "Sınav türü",
          "default": "Çoktan seçmeli ve klasik"
        },
        {
          "key": "SURE",
          "label": "Çalışma süresi",
          "default": "3 gün"
        }
      ],
      "versions": {
        "quick": "Uzun ders notunu sınava hazırlık için yapılandırılmış tekrar paketine dönüştürmek. Girdi: [DERS] (Ders); [NOT] (Ders notu); [SINAV] (Sınav türü); [SURE] (Çalışma süresi). Çıktıyı özet, kritik kavramlar, soru seti, flashcard ve 3 günlük plan biçiminde ver.",
        "advanced": "Öğretmen ve öğrenme tasarımcısı gibi davran. Amacın uzun ders notunu sınava hazırlık için yapılandırılmış tekrar paketine dönüştürmek. Kullanacağın bilgiler: [DERS] (Ders); [NOT] (Ders notu); [SINAV] (Sınav türü); [SURE] (Çalışma süresi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Özet, kritik kavramlar, soru seti, flashcard ve 3 günlük plan. Kısıtlar: Notta olmayan bilgi eklediğinde belirt; önemli tanımları koru; kısa ve sınav odaklı ol.",
        "expert": "ROL\nSen öğretmen ve öğrenme tasarımcısısın.\n\nAMAÇ\nUzun ders notunu sınava hazırlık için yapılandırılmış tekrar paketine dönüştürmek.\n\nGİRDİLER\n- Ders: [DERS]\n- Ders notu: [NOT]\n- Sınav türü: [SINAV]\n- Çalışma süresi: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÖzet, kritik kavramlar, soru seti, flashcard ve 3 günlük plan.\n\nKISITLAR\nNotta olmayan bilgi eklediğinde belirt; önemli tanımları koru; kısa ve sınav odaklı ol.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Notta olmayan bilgi eklediğinde belirt; önemli tanımları koru; kısa ve sınav odaklı ol",
      "outputFormat": "Özet, kritik kavramlar, soru seti, flashcard ve 3 günlük plan",
      "before": "Bana ders notunu sınav paketine dönüştürme için bir şey hazırla.",
      "after": "ROL\nSen öğretmen ve öğrenme tasarımcısısın.\n\nAMAÇ\nUzun ders notunu sınava hazırlık için yapılandırılmış tekrar paketine dönüştürmek.\n\nGİRDİLER\n- Ders: [DERS]\n- Ders notu: [NOT]\n- Sınav türü: [SINAV]\n- Çalışma süresi: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÖzet, kritik kavramlar, soru seti, flashcard ve 3 günlük plan.\n\nKISITLAR\nNotta olmayan bilgi eklediğinde belirt; önemli tanımları koru; kısa ve sınav odaklı ol.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Özet, kritik kavramlar, soru seti, flashcard ve 3 günlük plan.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Öğrenci Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-06",
      "version": "1.0"
    },
    {
      "id": 26,
      "slug": "20-soruluk-test-hazirlama",
      "title": "20 Soruluk Test Hazırlama",
      "category": "odev",
      "categoryLabel": "Eğitim ve Ödev",
      "subcategory": "Test",
      "description": "Verilen konu için dengeli zorlukta cevap anahtarlı test hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "test",
        "soru",
        "eğitim"
      ],
      "variables": [
        {
          "key": "KONU",
          "label": "Konu",
          "default": "Nesne yönelimli programlama"
        },
        {
          "key": "SEVIYE",
          "label": "Seviye",
          "default": "Ön lisans"
        },
        {
          "key": "SORU_SAYISI",
          "label": "Soru sayısı",
          "default": "20"
        },
        {
          "key": "DAGILIM",
          "label": "Zorluk dağılımı",
          "default": "%30 kolay, %50 orta, %20 zor"
        }
      ],
      "versions": {
        "quick": "Verilen konu için dengeli zorlukta cevap anahtarlı test hazırlamak. Girdi: [KONU] (Konu); [SEVIYE] (Seviye); [SORU_SAYISI] (Soru sayısı); [DAGILIM] (Zorluk dağılımı). Çıktıyı sorular, dört seçenek, cevap anahtarı ve kısa açıklamalar biçiminde ver.",
        "advanced": "Ölçme değerlendirme uzmanı gibi davran. Amacın verilen konu için dengeli zorlukta cevap anahtarlı test hazırlamak. Kullanacağın bilgiler: [KONU] (Konu); [SEVIYE] (Seviye); [SORU_SAYISI] (Soru sayısı); [DAGILIM] (Zorluk dağılımı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Sorular, dört seçenek, cevap anahtarı ve kısa açıklamalar. Kısıtlar: Tek doğru seçenek; çeldiriciler anlamlı; cevabı soru kökünde belli etme.",
        "expert": "ROL\nSen ölçme değerlendirme uzmanısın.\n\nAMAÇ\nVerilen konu için dengeli zorlukta cevap anahtarlı test hazırlamak.\n\nGİRDİLER\n- Konu: [KONU]\n- Seviye: [SEVIYE]\n- Soru sayısı: [SORU_SAYISI]\n- Zorluk dağılımı: [DAGILIM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSorular, dört seçenek, cevap anahtarı ve kısa açıklamalar.\n\nKISITLAR\nTek doğru seçenek; çeldiriciler anlamlı; cevabı soru kökünde belli etme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Tek doğru seçenek; çeldiriciler anlamlı; cevabı soru kökünde belli etme",
      "outputFormat": "Sorular, dört seçenek, cevap anahtarı ve kısa açıklamalar",
      "before": "Bana 20 soruluk test hazırlama için bir şey hazırla.",
      "after": "ROL\nSen ölçme değerlendirme uzmanısın.\n\nAMAÇ\nVerilen konu için dengeli zorlukta cevap anahtarlı test hazırlamak.\n\nGİRDİLER\n- Konu: [KONU]\n- Seviye: [SEVIYE]\n- Soru sayısı: [SORU_SAYISI]\n- Zorluk dağılımı: [DAGILIM]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSorular, dört seçenek, cevap anahtarı ve kısa açıklamalar.\n\nKISITLAR\nTek doğru seçenek; çeldiriciler anlamlı; cevabı soru kökünde belli etme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Sorular, dört seçenek, cevap anahtarı ve kısa açıklamalar.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Öğrenci Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-07",
      "version": "1.0"
    },
    {
      "id": 27,
      "slug": "sunum-slayt-plani",
      "title": "Sunum Slayt Planı",
      "category": "odev",
      "categoryLabel": "Eğitim ve Ödev",
      "subcategory": "Sunum",
      "description": "Konuyu süreye uygun, görsel ve anlaşılır bir sunum akışına dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "sunum",
        "slayt",
        "okul"
      ],
      "variables": [
        {
          "key": "KONU",
          "label": "Sunum konusu",
          "default": "Yapay zekâda prompt mühendisliği"
        },
        {
          "key": "SURE",
          "label": "Sunum süresi",
          "default": "10 dakika"
        },
        {
          "key": "DINLEYICI",
          "label": "Dinleyici",
          "default": "Sınıf arkadaşları"
        },
        {
          "key": "SLAYT",
          "label": "Slayt sayısı",
          "default": "8–10"
        }
      ],
      "versions": {
        "quick": "Konuyu süreye uygun, görsel ve anlaşılır bir sunum akışına dönüştürmek. Girdi: [KONU] (Sunum konusu); [SURE] (Sunum süresi); [DINLEYICI] (Dinleyici); [SLAYT] (Slayt sayısı). Çıktıyı slayt başlıkları, konuşmacı notları, görsel önerileri ve kapanış biçiminde ver.",
        "advanced": "Sunum tasarımcısı ve konu uzmanı gibi davran. Amacın konuyu süreye uygun, görsel ve anlaşılır bir sunum akışına dönüştürmek. Kullanacağın bilgiler: [KONU] (Sunum konusu); [SURE] (Sunum süresi); [DINLEYICI] (Dinleyici); [SLAYT] (Slayt sayısı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Slayt başlıkları, konuşmacı notları, görsel önerileri ve kapanış. Kısıtlar: Slayt başına tek ana fikir; uzun paragraf yok; kaynak gereken iddiaları işaretle.",
        "expert": "ROL\nSen sunum tasarımcısı ve konu uzmanısın.\n\nAMAÇ\nKonuyu süreye uygun, görsel ve anlaşılır bir sunum akışına dönüştürmek.\n\nGİRDİLER\n- Sunum konusu: [KONU]\n- Sunum süresi: [SURE]\n- Dinleyici: [DINLEYICI]\n- Slayt sayısı: [SLAYT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSlayt başlıkları, konuşmacı notları, görsel önerileri ve kapanış.\n\nKISITLAR\nSlayt başına tek ana fikir; uzun paragraf yok; kaynak gereken iddiaları işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Slayt başına tek ana fikir; uzun paragraf yok; kaynak gereken iddiaları işaretle",
      "outputFormat": "Slayt başlıkları, konuşmacı notları, görsel önerileri ve kapanış",
      "before": "Bana sunum slayt planı için bir şey hazırla.",
      "after": "ROL\nSen sunum tasarımcısı ve konu uzmanısın.\n\nAMAÇ\nKonuyu süreye uygun, görsel ve anlaşılır bir sunum akışına dönüştürmek.\n\nGİRDİLER\n- Sunum konusu: [KONU]\n- Sunum süresi: [SURE]\n- Dinleyici: [DINLEYICI]\n- Slayt sayısı: [SLAYT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSlayt başlıkları, konuşmacı notları, görsel önerileri ve kapanış.\n\nKISITLAR\nSlayt başına tek ana fikir; uzun paragraf yok; kaynak gereken iddiaları işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Slayt başlıkları, konuşmacı notları, görsel önerileri ve kapanış.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Öğrenci Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-08",
      "version": "1.0"
    },
    {
      "id": 28,
      "slug": "akademik-metin-duzenleme",
      "title": "Akademik Metin Düzenleme",
      "category": "odev",
      "categoryLabel": "Eğitim ve Ödev",
      "subcategory": "Akademik yazım",
      "description": "Metnin anlamını değiştirmeden dil, akış ve akademik tutarlılığını iyileştirmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Kimi"
      ],
      "level": "Orta",
      "tags": [
        "akademik",
        "düzenleme",
        "rapor"
      ],
      "variables": [
        {
          "key": "ALAN",
          "label": "Akademik alan",
          "default": "Bilgisayar bilimleri"
        },
        {
          "key": "METIN",
          "label": "Metin",
          "default": "Paragrafını yapıştır"
        },
        {
          "key": "STIL",
          "label": "Yazım stili",
          "default": "Resmî ve anlaşılır"
        },
        {
          "key": "KAYNAK",
          "label": "Atıf biçimi",
          "default": "APA 7"
        }
      ],
      "versions": {
        "quick": "Metnin anlamını değiştirmeden dil, akış ve akademik tutarlılığını iyileştirmek. Girdi: [ALAN] (Akademik alan); [METIN] (Metin); [STIL] (Yazım stili); [KAYNAK] (Atıf biçimi). Çıktıyı düzeltilmiş metin, önemli değişiklikler ve doğrulanması gereken iddialar biçiminde ver.",
        "advanced": "Akademik editör gibi davran. Amacın metnin anlamını değiştirmeden dil, akış ve akademik tutarlılığını iyileştirmek. Kullanacağın bilgiler: [ALAN] (Akademik alan); [METIN] (Metin); [STIL] (Yazım stili); [KAYNAK] (Atıf biçimi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Düzeltilmiş metin, önemli değişiklikler ve doğrulanması gereken iddialar. Kısıtlar: Kaynak uydurma; anlam ekleme; doğrudan alıntıları değiştirme; belirsizliği işaretle.",
        "expert": "ROL\nSen akademik editörsın.\n\nAMAÇ\nMetnin anlamını değiştirmeden dil, akış ve akademik tutarlılığını iyileştirmek.\n\nGİRDİLER\n- Akademik alan: [ALAN]\n- Metin: [METIN]\n- Yazım stili: [STIL]\n- Atıf biçimi: [KAYNAK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nDüzeltilmiş metin, önemli değişiklikler ve doğrulanması gereken iddialar.\n\nKISITLAR\nKaynak uydurma; anlam ekleme; doğrudan alıntıları değiştirme; belirsizliği işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Kaynak uydurma; anlam ekleme; doğrudan alıntıları değiştirme; belirsizliği işaretle",
      "outputFormat": "Düzeltilmiş metin, önemli değişiklikler ve doğrulanması gereken iddialar",
      "before": "Bana akademik metin düzenleme için bir şey hazırla.",
      "after": "ROL\nSen akademik editörsın.\n\nAMAÇ\nMetnin anlamını değiştirmeden dil, akış ve akademik tutarlılığını iyileştirmek.\n\nGİRDİLER\n- Akademik alan: [ALAN]\n- Metin: [METIN]\n- Yazım stili: [STIL]\n- Atıf biçimi: [KAYNAK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nDüzeltilmiş metin, önemli değişiklikler ve doğrulanması gereken iddialar.\n\nKISITLAR\nKaynak uydurma; anlam ekleme; doğrudan alıntıları değiştirme; belirsizliği işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Düzeltilmiş metin, önemli değişiklikler ve doğrulanması gereken iddialar.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Öğrenci Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-09",
      "version": "1.0"
    },
    {
      "id": 29,
      "slug": "proje-raporu-iskeleti",
      "title": "Proje Raporu İskeleti",
      "category": "odev",
      "categoryLabel": "Eğitim ve Ödev",
      "subcategory": "Rapor",
      "description": "Yazılım projesi için teslim edilebilir rapor yapısı ve içerik taslağı oluşturmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "rapor",
        "proje",
        "dokümantasyon"
      ],
      "variables": [
        {
          "key": "PROJE",
          "label": "Proje",
          "default": "Prompt kütüphanesi web sitesi"
        },
        {
          "key": "DERS",
          "label": "Ders / bağlam",
          "default": "Sistem Analizi ve Tasarımı"
        },
        {
          "key": "BOLUMLER",
          "label": "Zorunlu bölümler",
          "default": "Amaç, gereksinim, diyagram, test"
        },
        {
          "key": "TEKNOLOJI",
          "label": "Teknolojiler",
          "default": "HTML, CSS, JavaScript"
        }
      ],
      "versions": {
        "quick": "Yazılım projesi için teslim edilebilir rapor yapısı ve içerik taslağı oluşturmak. Girdi: [PROJE] (Proje); [DERS] (Ders / bağlam); [BOLUMLER] (Zorunlu bölümler); [TEKNOLOJI] (Teknolojiler). Çıktıyı kapak sonrası bölüm yapısı, her bölüm için yazılacaklar ve örnek tablolar biçiminde ver.",
        "advanced": "Sistem analisti ve teknik yazar gibi davran. Amacın yazılım projesi için teslim edilebilir rapor yapısı ve içerik taslağı oluşturmak. Kullanacağın bilgiler: [PROJE] (Proje); [DERS] (Ders / bağlam); [BOLUMLER] (Zorunlu bölümler); [TEKNOLOJI] (Teknolojiler). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kapak sonrası bölüm yapısı, her bölüm için yazılacaklar ve örnek tablolar. Kısıtlar: Yapılmayan özelliği yapılmış gösterme; ölçülebilir gereksinim; ekran görüntüsü yerleri belirt.",
        "expert": "ROL\nSen sistem analisti ve teknik yazarsın.\n\nAMAÇ\nYazılım projesi için teslim edilebilir rapor yapısı ve içerik taslağı oluşturmak.\n\nGİRDİLER\n- Proje: [PROJE]\n- Ders / bağlam: [DERS]\n- Zorunlu bölümler: [BOLUMLER]\n- Teknolojiler: [TEKNOLOJI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKapak sonrası bölüm yapısı, her bölüm için yazılacaklar ve örnek tablolar.\n\nKISITLAR\nYapılmayan özelliği yapılmış gösterme; ölçülebilir gereksinim; ekran görüntüsü yerleri belirt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Yapılmayan özelliği yapılmış gösterme; ölçülebilir gereksinim; ekran görüntüsü yerleri belirt",
      "outputFormat": "Kapak sonrası bölüm yapısı, her bölüm için yazılacaklar ve örnek tablolar",
      "before": "Bana proje raporu i̇skeleti için bir şey hazırla.",
      "after": "ROL\nSen sistem analisti ve teknik yazarsın.\n\nAMAÇ\nYazılım projesi için teslim edilebilir rapor yapısı ve içerik taslağı oluşturmak.\n\nGİRDİLER\n- Proje: [PROJE]\n- Ders / bağlam: [DERS]\n- Zorunlu bölümler: [BOLUMLER]\n- Teknolojiler: [TEKNOLOJI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKapak sonrası bölüm yapısı, her bölüm için yazılacaklar ve örnek tablolar.\n\nKISITLAR\nYapılmayan özelliği yapılmış gösterme; ölçülebilir gereksinim; ekran görüntüsü yerleri belirt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kapak sonrası bölüm yapısı, her bölüm için yazılacaklar ve örnek tablolar.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Öğrenci Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-10",
      "version": "1.0"
    },
    {
      "id": 30,
      "slug": "konu-anlatan-ozel-ogretmen",
      "title": "Konu Anlatan Özel Öğretmen",
      "category": "odev",
      "categoryLabel": "Eğitim ve Ödev",
      "subcategory": "Konu anlatımı",
      "description": "Zor bir konuyu öğrencinin seviyesine göre örnek ve mini alıştırmalarla öğretmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "öğrenme",
        "öğretmen",
        "konu anlatımı"
      ],
      "variables": [
        {
          "key": "KONU",
          "label": "Konu",
          "default": "SQL JOIN türleri"
        },
        {
          "key": "SEVIYE",
          "label": "Mevcut seviye",
          "default": "Başlangıç"
        },
        {
          "key": "HEDEF",
          "label": "Hedef",
          "default": "Sorgu yazabilmek"
        },
        {
          "key": "ORNEK",
          "label": "Tercih edilen örnek",
          "default": "Spor salonu veritabanı"
        }
      ],
      "versions": {
        "quick": "Zor bir konuyu öğrencinin seviyesine göre örnek ve mini alıştırmalarla öğretmek. Girdi: [KONU] (Konu); [SEVIYE] (Mevcut seviye); [HEDEF] (Hedef); [ORNEK] (Tercih edilen örnek). Çıktıyı seviye tespiti, sade anlatım, örnek, mini quiz ve cevap kontrolü biçiminde ver.",
        "advanced": "Sabırlı özel öğretmen gibi davran. Amacın zor bir konuyu öğrencinin seviyesine göre örnek ve mini alıştırmalarla öğretmek. Kullanacağın bilgiler: [KONU] (Konu); [SEVIYE] (Mevcut seviye); [HEDEF] (Hedef); [ORNEK] (Tercih edilen örnek). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Seviye tespiti, sade anlatım, örnek, mini quiz ve cevap kontrolü. Kısıtlar: Bir anda fazla kavram verme; jargonu açıkla; cevabı hemen vermeden düşündür.",
        "expert": "ROL\nSen sabırlı özel öğretmensın.\n\nAMAÇ\nZor bir konuyu öğrencinin seviyesine göre örnek ve mini alıştırmalarla öğretmek.\n\nGİRDİLER\n- Konu: [KONU]\n- Mevcut seviye: [SEVIYE]\n- Hedef: [HEDEF]\n- Tercih edilen örnek: [ORNEK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSeviye tespiti, sade anlatım, örnek, mini quiz ve cevap kontrolü.\n\nKISITLAR\nBir anda fazla kavram verme; jargonu açıkla; cevabı hemen vermeden düşündür.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Bir anda fazla kavram verme; jargonu açıkla; cevabı hemen vermeden düşündür",
      "outputFormat": "Seviye tespiti, sade anlatım, örnek, mini quiz ve cevap kontrolü",
      "before": "Bana konu anlatan özel öğretmen için bir şey hazırla.",
      "after": "ROL\nSen sabırlı özel öğretmensın.\n\nAMAÇ\nZor bir konuyu öğrencinin seviyesine göre örnek ve mini alıştırmalarla öğretmek.\n\nGİRDİLER\n- Konu: [KONU]\n- Mevcut seviye: [SEVIYE]\n- Hedef: [HEDEF]\n- Tercih edilen örnek: [ORNEK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSeviye tespiti, sade anlatım, örnek, mini quiz ve cevap kontrolü.\n\nKISITLAR\nBir anda fazla kavram verme; jargonu açıkla; cevabı hemen vermeden düşündür.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Seviye tespiti, sade anlatım, örnek, mini quiz ve cevap kontrolü.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Öğrenci Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-11",
      "version": "1.0"
    },
    {
      "id": 31,
      "slug": "linkedin-proje-paylasimi",
      "title": "LinkedIn Proje Paylaşımı",
      "category": "metin",
      "categoryLabel": "İçerik ve Metin",
      "subcategory": "Sosyal içerik",
      "description": "Kişisel projeyi samimi fakat profesyonel bir linkedin gönderisiyle tanıtmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "linkedin",
        "proje",
        "sosyal"
      ],
      "variables": [
        {
          "key": "PROJE",
          "label": "Proje adı",
          "default": "PROMPTLA"
        },
        {
          "key": "SORUN",
          "label": "Çözdüğü sorun",
          "default": "Kullanıcıların daha iyi prompt yazmasını sağlamak"
        },
        {
          "key": "TEKNOLOJI",
          "label": "Teknolojiler",
          "default": "HTML, CSS, JavaScript"
        },
        {
          "key": "CTA",
          "label": "Çağrı",
          "default": "Geri bildirimlerinizi bekliyorum"
        }
      ],
      "versions": {
        "quick": "Kişisel projeyi samimi fakat profesyonel bir linkedin gönderisiyle tanıtmak. Girdi: [PROJE] (Proje adı); [SORUN] (Çözdüğü sorun); [TEKNOLOJI] (Teknolojiler); [CTA] (Çağrı). Çıktıyı kanca, proje hikâyesi, özellikler, öğrenimler ve doğal cta biçiminde ver.",
        "advanced": "Teknik içerik stratejisti gibi davran. Amacın kişisel projeyi samimi fakat profesyonel bir LinkedIn gönderisiyle tanıtmak. Kullanacağın bilgiler: [PROJE] (Proje adı); [SORUN] (Çözdüğü sorun); [TEKNOLOJI] (Teknolojiler); [CTA] (Çağrı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kanca, proje hikâyesi, özellikler, öğrenimler ve doğal CTA. Kısıtlar: Abartılı başarı iddiası yok; kısa paragraflar; 3–5 ilgili etiket.",
        "expert": "ROL\nSen teknik içerik stratejistisın.\n\nAMAÇ\nKişisel projeyi samimi fakat profesyonel bir linkedin gönderisiyle tanıtmak.\n\nGİRDİLER\n- Proje adı: [PROJE]\n- Çözdüğü sorun: [SORUN]\n- Teknolojiler: [TEKNOLOJI]\n- Çağrı: [CTA]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKanca, proje hikâyesi, özellikler, öğrenimler ve doğal CTA.\n\nKISITLAR\nAbartılı başarı iddiası yok; kısa paragraflar; 3–5 ilgili etiket.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Abartılı başarı iddiası yok; kısa paragraflar; 3–5 ilgili etiket",
      "outputFormat": "Kanca, proje hikâyesi, özellikler, öğrenimler ve doğal CTA",
      "before": "Bana linkedin proje paylaşımı için bir şey hazırla.",
      "after": "ROL\nSen teknik içerik stratejistisın.\n\nAMAÇ\nKişisel projeyi samimi fakat profesyonel bir linkedin gönderisiyle tanıtmak.\n\nGİRDİLER\n- Proje adı: [PROJE]\n- Çözdüğü sorun: [SORUN]\n- Teknolojiler: [TEKNOLOJI]\n- Çağrı: [CTA]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKanca, proje hikâyesi, özellikler, öğrenimler ve doğal CTA.\n\nKISITLAR\nAbartılı başarı iddiası yok; kısa paragraflar; 3–5 ilgili etiket.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kanca, proje hikâyesi, özellikler, öğrenimler ve doğal CTA.",
      "image": "assets/images/prompt1.webp",
      "thumbnail": "assets/images/thumbs/prompt1-thumb.webp",
      "collections": [
        "Kariyer Paketi",
        "Sosyal Medya Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-12",
      "version": "1.0"
    },
    {
      "id": 32,
      "slug": "youtube-video-senaryosu",
      "title": "YouTube Video Senaryosu",
      "category": "metin",
      "categoryLabel": "İçerik ve Metin",
      "subcategory": "Senaryo",
      "description": "Konuyu izlenebilir bir akışta anlatan sahne ve konuşma metni hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "youtube",
        "senaryo",
        "içerik"
      ],
      "variables": [
        {
          "key": "KONU",
          "label": "Video konusu",
          "default": "ChatGPT ile kod öğrenme"
        },
        {
          "key": "SURE",
          "label": "Video süresi",
          "default": "6 dakika"
        },
        {
          "key": "KITLE",
          "label": "Hedef kitle",
          "default": "Yeni başlayan programcılar"
        },
        {
          "key": "STIL",
          "label": "Anlatım stili",
          "default": "Samimi ve uygulamalı"
        }
      ],
      "versions": {
        "quick": "Konuyu izlenebilir bir akışta anlatan sahne ve konuşma metni hazırlamak. Girdi: [KONU] (Video konusu); [SURE] (Video süresi); [KITLE] (Hedef kitle); [STIL] (Anlatım stili). Çıktıyı kanca, bölüm akışı, konuşma metni, ekran görüntüsü ve kapanış biçiminde ver.",
        "advanced": "Youtube içerik yazarı gibi davran. Amacın konuyu izlenebilir bir akışta anlatan sahne ve konuşma metni hazırlamak. Kullanacağın bilgiler: [KONU] (Video konusu); [SURE] (Video süresi); [KITLE] (Hedef kitle); [STIL] (Anlatım stili). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kanca, bölüm akışı, konuşma metni, ekran görüntüsü ve kapanış. Kısıtlar: İlk 15 saniye vaadi net; tekrar yok; teknik iddiaları doğrulama notuyla işaretle.",
        "expert": "ROL\nSen YouTube içerik yazarısın.\n\nAMAÇ\nKonuyu izlenebilir bir akışta anlatan sahne ve konuşma metni hazırlamak.\n\nGİRDİLER\n- Video konusu: [KONU]\n- Video süresi: [SURE]\n- Hedef kitle: [KITLE]\n- Anlatım stili: [STIL]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKanca, bölüm akışı, konuşma metni, ekran görüntüsü ve kapanış.\n\nKISITLAR\nİlk 15 saniye vaadi net; tekrar yok; teknik iddiaları doğrulama notuyla işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "İlk 15 saniye vaadi net; tekrar yok; teknik iddiaları doğrulama notuyla işaretle",
      "outputFormat": "Kanca, bölüm akışı, konuşma metni, ekran görüntüsü ve kapanış",
      "before": "Bana youtube video senaryosu için bir şey hazırla.",
      "after": "ROL\nSen YouTube içerik yazarısın.\n\nAMAÇ\nKonuyu izlenebilir bir akışta anlatan sahne ve konuşma metni hazırlamak.\n\nGİRDİLER\n- Video konusu: [KONU]\n- Video süresi: [SURE]\n- Hedef kitle: [KITLE]\n- Anlatım stili: [STIL]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKanca, bölüm akışı, konuşma metni, ekran görüntüsü ve kapanış.\n\nKISITLAR\nİlk 15 saniye vaadi net; tekrar yok; teknik iddiaları doğrulama notuyla işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kanca, bölüm akışı, konuşma metni, ekran görüntüsü ve kapanış.",
      "image": "assets/images/prompt1.webp",
      "thumbnail": "assets/images/thumbs/prompt1-thumb.webp",
      "collections": [
        "Sosyal Medya Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-13",
      "version": "1.0"
    },
    {
      "id": 33,
      "slug": "seo-uyumlu-blog-yazisi",
      "title": "SEO Uyumlu Blog Yazısı",
      "category": "metin",
      "categoryLabel": "İçerik ve Metin",
      "subcategory": "Blog",
      "description": "Arama niyetini karşılayan doğal ve güvenilir blog yazısı üretmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "seo",
        "blog",
        "içerik"
      ],
      "variables": [
        {
          "key": "ANAHTAR",
          "label": "Ana anahtar kelime",
          "default": "iyi prompt nasıl yazılır"
        },
        {
          "key": "KITLE",
          "label": "Okuyucu",
          "default": "Yapay zekâya yeni başlayanlar"
        },
        {
          "key": "UZUNLUK",
          "label": "Hedef uzunluk",
          "default": "1200 kelime"
        },
        {
          "key": "AMAC",
          "label": "İş hedefi",
          "default": "Prompt kütüphanesine yönlendirme"
        }
      ],
      "versions": {
        "quick": "Arama niyetini karşılayan doğal ve güvenilir blog yazısı üretmek. Girdi: [ANAHTAR] (Ana anahtar kelime); [KITLE] (Okuyucu); [UZUNLUK] (Hedef uzunluk); [AMAC] (İş hedefi). Çıktıyı başlıklar, meta açıklama, içerik, sss ve iç bağlantı önerileri biçiminde ver.",
        "advanced": "Seo editörü ve alan uzmanı gibi davran. Amacın arama niyetini karşılayan doğal ve güvenilir blog yazısı üretmek. Kullanacağın bilgiler: [ANAHTAR] (Ana anahtar kelime); [KITLE] (Okuyucu); [UZUNLUK] (Hedef uzunluk); [AMAC] (İş hedefi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Başlıklar, meta açıklama, içerik, SSS ve iç bağlantı önerileri. Kısıtlar: Anahtar kelime doldurma yapma; kaynak gerektiren iddiaları belirt; özgün örnekler kullan.",
        "expert": "ROL\nSen SEO editörü ve alan uzmanısın.\n\nAMAÇ\nArama niyetini karşılayan doğal ve güvenilir blog yazısı üretmek.\n\nGİRDİLER\n- Ana anahtar kelime: [ANAHTAR]\n- Okuyucu: [KITLE]\n- Hedef uzunluk: [UZUNLUK]\n- İş hedefi: [AMAC]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBaşlıklar, meta açıklama, içerik, SSS ve iç bağlantı önerileri.\n\nKISITLAR\nAnahtar kelime doldurma yapma; kaynak gerektiren iddiaları belirt; özgün örnekler kullan.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Anahtar kelime doldurma yapma; kaynak gerektiren iddiaları belirt; özgün örnekler kullan",
      "outputFormat": "Başlıklar, meta açıklama, içerik, SSS ve iç bağlantı önerileri",
      "before": "Bana seo uyumlu blog yazısı için bir şey hazırla.",
      "after": "ROL\nSen SEO editörü ve alan uzmanısın.\n\nAMAÇ\nArama niyetini karşılayan doğal ve güvenilir blog yazısı üretmek.\n\nGİRDİLER\n- Ana anahtar kelime: [ANAHTAR]\n- Okuyucu: [KITLE]\n- Hedef uzunluk: [UZUNLUK]\n- İş hedefi: [AMAC]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBaşlıklar, meta açıklama, içerik, SSS ve iç bağlantı önerileri.\n\nKISITLAR\nAnahtar kelime doldurma yapma; kaynak gerektiren iddiaları belirt; özgün örnekler kullan.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Başlıklar, meta açıklama, içerik, SSS ve iç bağlantı önerileri.",
      "image": "assets/images/prompt1.webp",
      "thumbnail": "assets/images/thumbs/prompt1-thumb.webp",
      "collections": [
        "İçerik Üretici Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-14",
      "version": "1.0"
    },
    {
      "id": 34,
      "slug": "urun-aciklamasi-donusturucu",
      "title": "Ürün Açıklaması Dönüştürücü",
      "category": "metin",
      "categoryLabel": "İçerik ve Metin",
      "subcategory": "E-ticaret metni",
      "description": "Teknik ürün bilgisini ikna edici ve anlaşılır ürün açıklamasına dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "ürün açıklaması",
        "e-ticaret",
        "copywriting"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Oyuncu klavyesi"
        },
        {
          "key": "OZELLIK",
          "label": "Teknik özellikler",
          "default": "Hot-swap, RGB, Türkçe Q dizilim"
        },
        {
          "key": "KITLE",
          "label": "Hedef müşteri",
          "default": "Oyuncular ve yazılımcılar"
        },
        {
          "key": "TON",
          "label": "Marka tonu",
          "default": "Modern ve güvenilir"
        }
      ],
      "versions": {
        "quick": "Teknik ürün bilgisini ikna edici ve anlaşılır ürün açıklamasına dönüştürmek. Girdi: [URUN] (Ürün); [OZELLIK] (Teknik özellikler); [KITLE] (Hedef müşteri); [TON] (Marka tonu). Çıktıyı kısa özet, fayda odaklı maddeler, detay açıklama ve sss biçiminde ver.",
        "advanced": "E-ticaret metin yazarı gibi davran. Amacın teknik ürün bilgisini ikna edici ve anlaşılır ürün açıklamasına dönüştürmek. Kullanacağın bilgiler: [URUN] (Ürün); [OZELLIK] (Teknik özellikler); [KITLE] (Hedef müşteri); [TON] (Marka tonu). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kısa özet, fayda odaklı maddeler, detay açıklama ve SSS. Kısıtlar: Kanıtlanmayan üstünlük iddiası yok; teknik değeri değiştirme; okunabilir dil.",
        "expert": "ROL\nSen e-ticaret metin yazarısın.\n\nAMAÇ\nTeknik ürün bilgisini ikna edici ve anlaşılır ürün açıklamasına dönüştürmek.\n\nGİRDİLER\n- Ürün: [URUN]\n- Teknik özellikler: [OZELLIK]\n- Hedef müşteri: [KITLE]\n- Marka tonu: [TON]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKısa özet, fayda odaklı maddeler, detay açıklama ve SSS.\n\nKISITLAR\nKanıtlanmayan üstünlük iddiası yok; teknik değeri değiştirme; okunabilir dil.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Kanıtlanmayan üstünlük iddiası yok; teknik değeri değiştirme; okunabilir dil",
      "outputFormat": "Kısa özet, fayda odaklı maddeler, detay açıklama ve SSS",
      "before": "Bana ürün açıklaması dönüştürücü için bir şey hazırla.",
      "after": "ROL\nSen e-ticaret metin yazarısın.\n\nAMAÇ\nTeknik ürün bilgisini ikna edici ve anlaşılır ürün açıklamasına dönüştürmek.\n\nGİRDİLER\n- Ürün: [URUN]\n- Teknik özellikler: [OZELLIK]\n- Hedef müşteri: [KITLE]\n- Marka tonu: [TON]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKısa özet, fayda odaklı maddeler, detay açıklama ve SSS.\n\nKISITLAR\nKanıtlanmayan üstünlük iddiası yok; teknik değeri değiştirme; okunabilir dil.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kısa özet, fayda odaklı maddeler, detay açıklama ve SSS.",
      "image": "assets/images/prompt1.webp",
      "thumbnail": "assets/images/thumbs/prompt1-thumb.webp",
      "collections": [
        "E-ticaret Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-15",
      "version": "1.0"
    },
    {
      "id": 35,
      "slug": "metni-profesyonel-dile-cevirme",
      "title": "Metni Profesyonel Dile Çevirme",
      "category": "metin",
      "categoryLabel": "İçerik ve Metin",
      "subcategory": "Düzenleme",
      "description": "Dağınık veya gündelik metni anlamı koruyarak profesyonel hale getirmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "düzenleme",
        "mesaj",
        "profesyonel"
      ],
      "variables": [
        {
          "key": "METIN",
          "label": "Ham metin",
          "default": "Düzenlenecek metni yapıştır"
        },
        {
          "key": "ALICI",
          "label": "Alıcı",
          "default": "Proje danışmanı"
        },
        {
          "key": "AMAC",
          "label": "Amaç",
          "default": "Durum güncellemesi vermek"
        },
        {
          "key": "TON",
          "label": "Ton",
          "default": "Saygılı ve net"
        }
      ],
      "versions": {
        "quick": "Dağınık veya gündelik metni anlamı koruyarak profesyonel hale getirmek. Girdi: [METIN] (Ham metin); [ALICI] (Alıcı); [AMAC] (Amaç); [TON] (Ton). Çıktıyı konuya uygun son metin ve gerekirse daha kısa alternatif biçiminde ver.",
        "advanced": "Kurumsal iletişim editörü gibi davran. Amacın dağınık veya gündelik metni anlamı koruyarak profesyonel hale getirmek. Kullanacağın bilgiler: [METIN] (Ham metin); [ALICI] (Alıcı); [AMAC] (Amaç); [TON] (Ton). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Konuya uygun son metin ve gerekirse daha kısa alternatif. Kısıtlar: Yeni bilgi uydurma; gereksiz resmiyet yok; istenen aksiyonu netleştir.",
        "expert": "ROL\nSen kurumsal iletişim editörüsın.\n\nAMAÇ\nDağınık veya gündelik metni anlamı koruyarak profesyonel hale getirmek.\n\nGİRDİLER\n- Ham metin: [METIN]\n- Alıcı: [ALICI]\n- Amaç: [AMAC]\n- Ton: [TON]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKonuya uygun son metin ve gerekirse daha kısa alternatif.\n\nKISITLAR\nYeni bilgi uydurma; gereksiz resmiyet yok; istenen aksiyonu netleştir.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Yeni bilgi uydurma; gereksiz resmiyet yok; istenen aksiyonu netleştir",
      "outputFormat": "Konuya uygun son metin ve gerekirse daha kısa alternatif",
      "before": "Bana metni profesyonel dile çevirme için bir şey hazırla.",
      "after": "ROL\nSen kurumsal iletişim editörüsın.\n\nAMAÇ\nDağınık veya gündelik metni anlamı koruyarak profesyonel hale getirmek.\n\nGİRDİLER\n- Ham metin: [METIN]\n- Alıcı: [ALICI]\n- Amaç: [AMAC]\n- Ton: [TON]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKonuya uygun son metin ve gerekirse daha kısa alternatif.\n\nKISITLAR\nYeni bilgi uydurma; gereksiz resmiyet yok; istenen aksiyonu netleştir.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Konuya uygun son metin ve gerekirse daha kısa alternatif.",
      "image": "assets/images/prompt1.webp",
      "thumbnail": "assets/images/thumbs/prompt1-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-16",
      "version": "1.0"
    },
    {
      "id": 36,
      "slug": "30-gunluk-icerik-takvimi",
      "title": "30 Günlük İçerik Takvimi",
      "category": "metin",
      "categoryLabel": "İçerik ve Metin",
      "subcategory": "İçerik planı",
      "description": "Tek bir marka için dengeli ve sürdürülebilir aylık içerik planı hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "içerik takvimi",
        "sosyal medya",
        "plan"
      ],
      "variables": [
        {
          "key": "MARKA",
          "label": "Marka / proje",
          "default": "PROMPTLA"
        },
        {
          "key": "PLATFORM",
          "label": "Platformlar",
          "default": "LinkedIn ve Instagram"
        },
        {
          "key": "HEDEF",
          "label": "Hedef",
          "default": "Bilinirlik ve site trafiği"
        },
        {
          "key": "SIKLIK",
          "label": "Paylaşım sıklığı",
          "default": "Haftada 3"
        }
      ],
      "versions": {
        "quick": "Tek bir marka için dengeli ve sürdürülebilir aylık içerik planı hazırlamak. Girdi: [MARKA] (Marka / proje); [PLATFORM] (Platformlar); [HEDEF] (Hedef); [SIKLIK] (Paylaşım sıklığı). Çıktıyı tarih, format, konu, kanca, cta ve üretim notu içeren takvim biçiminde ver.",
        "advanced": "Içerik stratejisti gibi davran. Amacın tek bir marka için dengeli ve sürdürülebilir aylık içerik planı hazırlamak. Kullanacağın bilgiler: [MARKA] (Marka / proje); [PLATFORM] (Platformlar); [HEDEF] (Hedef); [SIKLIK] (Paylaşım sıklığı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Tarih, format, konu, kanca, CTA ve üretim notu içeren takvim. Kısıtlar: Aynı fikri tekrarlama; eğitici, kanıt ve topluluk içeriklerini dengele.",
        "expert": "ROL\nSen içerik stratejistisın.\n\nAMAÇ\nTek bir marka için dengeli ve sürdürülebilir aylık içerik planı hazırlamak.\n\nGİRDİLER\n- Marka / proje: [MARKA]\n- Platformlar: [PLATFORM]\n- Hedef: [HEDEF]\n- Paylaşım sıklığı: [SIKLIK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nTarih, format, konu, kanca, CTA ve üretim notu içeren takvim.\n\nKISITLAR\nAynı fikri tekrarlama; eğitici, kanıt ve topluluk içeriklerini dengele.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Aynı fikri tekrarlama; eğitici, kanıt ve topluluk içeriklerini dengele",
      "outputFormat": "Tarih, format, konu, kanca, CTA ve üretim notu içeren takvim",
      "before": "Bana 30 günlük i̇çerik takvimi için bir şey hazırla.",
      "after": "ROL\nSen içerik stratejistisın.\n\nAMAÇ\nTek bir marka için dengeli ve sürdürülebilir aylık içerik planı hazırlamak.\n\nGİRDİLER\n- Marka / proje: [MARKA]\n- Platformlar: [PLATFORM]\n- Hedef: [HEDEF]\n- Paylaşım sıklığı: [SIKLIK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nTarih, format, konu, kanca, CTA ve üretim notu içeren takvim.\n\nKISITLAR\nAynı fikri tekrarlama; eğitici, kanıt ve topluluk içeriklerini dengele.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Tarih, format, konu, kanca, CTA ve üretim notu içeren takvim.",
      "image": "assets/images/prompt1.webp",
      "thumbnail": "assets/images/thumbs/prompt1-thumb.webp",
      "collections": [
        "Sosyal Medya Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-17",
      "version": "1.0"
    },
    {
      "id": 37,
      "slug": "ats-uyumlu-cv-gelistirme",
      "title": "ATS Uyumlu CV Geliştirme",
      "category": "kariyer",
      "categoryLabel": "Kariyer",
      "subcategory": "CV",
      "description": "Cv içeriğini hedef ilana göre ölçülebilir ve ats uyumlu hale getirmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "cv",
        "ats",
        "iş"
      ],
      "variables": [
        {
          "key": "ILAN",
          "label": "İş ilanı",
          "default": "İlan metnini yapıştır"
        },
        {
          "key": "CV",
          "label": "Mevcut CV",
          "default": "CV metnini yapıştır"
        },
        {
          "key": "SEVIYE",
          "label": "Deneyim seviyesi",
          "default": "Yeni mezun"
        },
        {
          "key": "ROL",
          "label": "Hedef rol",
          "default": "Junior Frontend Developer"
        }
      ],
      "versions": {
        "quick": "Cv içeriğini hedef ilana göre ölçülebilir ve ats uyumlu hale getirmek. Girdi: [ILAN] (İş ilanı); [CV] (Mevcut CV); [SEVIYE] (Deneyim seviyesi); [ROL] (Hedef rol). Çıktıyı uyum analizi, yeniden yazılmış maddeler, anahtar kelimeler ve eksik kanıtlar biçiminde ver.",
        "advanced": "Teknik işe alım uzmanı gibi davran. Amacın CV içeriğini hedef ilana göre ölçülebilir ve ATS uyumlu hale getirmek. Kullanacağın bilgiler: [ILAN] (İş ilanı); [CV] (Mevcut CV); [SEVIYE] (Deneyim seviyesi); [ROL] (Hedef rol). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Uyum analizi, yeniden yazılmış maddeler, anahtar kelimeler ve eksik kanıtlar. Kısıtlar: Olmayan deneyim ekleme; anahtar kelime doldurma yok; kişisel bilgileri maskele.",
        "expert": "ROL\nSen teknik işe alım uzmanısın.\n\nAMAÇ\nCv içeriğini hedef ilana göre ölçülebilir ve ats uyumlu hale getirmek.\n\nGİRDİLER\n- İş ilanı: [ILAN]\n- Mevcut CV: [CV]\n- Deneyim seviyesi: [SEVIYE]\n- Hedef rol: [ROL]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nUyum analizi, yeniden yazılmış maddeler, anahtar kelimeler ve eksik kanıtlar.\n\nKISITLAR\nOlmayan deneyim ekleme; anahtar kelime doldurma yok; kişisel bilgileri maskele.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Olmayan deneyim ekleme; anahtar kelime doldurma yok; kişisel bilgileri maskele",
      "outputFormat": "Uyum analizi, yeniden yazılmış maddeler, anahtar kelimeler ve eksik kanıtlar",
      "before": "Bana ats uyumlu cv geliştirme için bir şey hazırla.",
      "after": "ROL\nSen teknik işe alım uzmanısın.\n\nAMAÇ\nCv içeriğini hedef ilana göre ölçülebilir ve ats uyumlu hale getirmek.\n\nGİRDİLER\n- İş ilanı: [ILAN]\n- Mevcut CV: [CV]\n- Deneyim seviyesi: [SEVIYE]\n- Hedef rol: [ROL]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nUyum analizi, yeniden yazılmış maddeler, anahtar kelimeler ve eksik kanıtlar.\n\nKISITLAR\nOlmayan deneyim ekleme; anahtar kelime doldurma yok; kişisel bilgileri maskele.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Uyum analizi, yeniden yazılmış maddeler, anahtar kelimeler ve eksik kanıtlar.",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp",
      "thumbnail": "assets/images/thumbs/img_69ea9b6541a469.84268754-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-18",
      "version": "1.0"
    },
    {
      "id": 38,
      "slug": "teknik-mulakat-simulasyonu",
      "title": "Teknik Mülakat Simülasyonu",
      "category": "kariyer",
      "categoryLabel": "Kariyer",
      "subcategory": "Mülakat",
      "description": "Hedef role uygun etkileşimli teknik mülakat yapıp geri bildirim vermek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "mülakat",
        "teknik",
        "kariyer"
      ],
      "variables": [
        {
          "key": "ROL",
          "label": "Rol",
          "default": "Junior Backend Developer"
        },
        {
          "key": "TEKNOLOJI",
          "label": "Teknolojiler",
          "default": "PHP, MySQL, REST"
        },
        {
          "key": "SURE",
          "label": "Süre",
          "default": "25 dakika"
        },
        {
          "key": "SEVIYE",
          "label": "Seviye",
          "default": "Yeni mezun"
        }
      ],
      "versions": {
        "quick": "Hedef role uygun etkileşimli teknik mülakat yapıp geri bildirim vermek. Girdi: [ROL] (Rol); [TEKNOLOJI] (Teknolojiler); [SURE] (Süre); [SEVIYE] (Seviye). Çıktıyı soru-cevap akışı, puanlama, güçlü yönler ve çalışma planı biçiminde ver.",
        "advanced": "Kıdemli yazılım mülakatçısı gibi davran. Amacın hedef role uygun etkileşimli teknik mülakat yapıp geri bildirim vermek. Kullanacağın bilgiler: [ROL] (Rol); [TEKNOLOJI] (Teknolojiler); [SURE] (Süre); [SEVIYE] (Seviye). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Soru-cevap akışı, puanlama, güçlü yönler ve çalışma planı. Kısıtlar: Soruları tek tek sor; cevap gelmeden sonraki soruya geçme; ipucunu kademeli ver.",
        "expert": "ROL\nSen kıdemli yazılım mülakatçısısın.\n\nAMAÇ\nHedef role uygun etkileşimli teknik mülakat yapıp geri bildirim vermek.\n\nGİRDİLER\n- Rol: [ROL]\n- Teknolojiler: [TEKNOLOJI]\n- Süre: [SURE]\n- Seviye: [SEVIYE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSoru-cevap akışı, puanlama, güçlü yönler ve çalışma planı.\n\nKISITLAR\nSoruları tek tek sor; cevap gelmeden sonraki soruya geçme; ipucunu kademeli ver.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Soruları tek tek sor; cevap gelmeden sonraki soruya geçme; ipucunu kademeli ver",
      "outputFormat": "Soru-cevap akışı, puanlama, güçlü yönler ve çalışma planı",
      "before": "Bana teknik mülakat simülasyonu için bir şey hazırla.",
      "after": "ROL\nSen kıdemli yazılım mülakatçısısın.\n\nAMAÇ\nHedef role uygun etkileşimli teknik mülakat yapıp geri bildirim vermek.\n\nGİRDİLER\n- Rol: [ROL]\n- Teknolojiler: [TEKNOLOJI]\n- Süre: [SURE]\n- Seviye: [SEVIYE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nSoru-cevap akışı, puanlama, güçlü yönler ve çalışma planı.\n\nKISITLAR\nSoruları tek tek sor; cevap gelmeden sonraki soruya geçme; ipucunu kademeli ver.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Soru-cevap akışı, puanlama, güçlü yönler ve çalışma planı.",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp",
      "thumbnail": "assets/images/thumbs/img_69ea9b6541a469.84268754-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-19",
      "version": "1.0"
    },
    {
      "id": 39,
      "slug": "is-ilani-uygunluk-analizi",
      "title": "İş İlanı Uygunluk Analizi",
      "category": "kariyer",
      "categoryLabel": "Kariyer",
      "subcategory": "İş arama",
      "description": "Iş ilanı ile aday profilini kanıta dayalı şekilde karşılaştırmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "iş ilanı",
        "uygunluk",
        "başvuru"
      ],
      "variables": [
        {
          "key": "ILAN",
          "label": "İlan",
          "default": "İlan metnini yapıştır"
        },
        {
          "key": "PROFIL",
          "label": "Aday profili",
          "default": "Yetenek ve projeleri yaz"
        },
        {
          "key": "ONCELIK",
          "label": "Öncelik",
          "default": "Uzaktan veya hibrit"
        },
        {
          "key": "KISIT",
          "label": "Kısıtlar",
          "default": "0–1 yıl deneyim"
        }
      ],
      "versions": {
        "quick": "Iş ilanı ile aday profilini kanıta dayalı şekilde karşılaştırmak. Girdi: [ILAN] (İlan); [PROFIL] (Aday profili); [ONCELIK] (Öncelik); [KISIT] (Kısıtlar). Çıktıyı güçlü eşleşme, açıklar, başvuru kararı ve hazırlık önerileri biçiminde ver.",
        "advanced": "Kariyer danışmanı gibi davran. Amacın iş ilanı ile aday profilini kanıta dayalı şekilde karşılaştırmak. Kullanacağın bilgiler: [ILAN] (İlan); [PROFIL] (Aday profili); [ONCELIK] (Öncelik); [KISIT] (Kısıtlar). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Güçlü eşleşme, açıklar, başvuru kararı ve hazırlık önerileri. Kısıtlar: Eksik gereksinimi küçümseme; kesin kabul tahmini yapma; kanıtsız yetenek ekleme.",
        "expert": "ROL\nSen kariyer danışmanısın.\n\nAMAÇ\nIş ilanı ile aday profilini kanıta dayalı şekilde karşılaştırmak.\n\nGİRDİLER\n- İlan: [ILAN]\n- Aday profili: [PROFIL]\n- Öncelik: [ONCELIK]\n- Kısıtlar: [KISIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nGüçlü eşleşme, açıklar, başvuru kararı ve hazırlık önerileri.\n\nKISITLAR\nEksik gereksinimi küçümseme; kesin kabul tahmini yapma; kanıtsız yetenek ekleme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Eksik gereksinimi küçümseme; kesin kabul tahmini yapma; kanıtsız yetenek ekleme",
      "outputFormat": "Güçlü eşleşme, açıklar, başvuru kararı ve hazırlık önerileri",
      "before": "Bana i̇ş i̇lanı uygunluk analizi için bir şey hazırla.",
      "after": "ROL\nSen kariyer danışmanısın.\n\nAMAÇ\nIş ilanı ile aday profilini kanıta dayalı şekilde karşılaştırmak.\n\nGİRDİLER\n- İlan: [ILAN]\n- Aday profili: [PROFIL]\n- Öncelik: [ONCELIK]\n- Kısıtlar: [KISIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nGüçlü eşleşme, açıklar, başvuru kararı ve hazırlık önerileri.\n\nKISITLAR\nEksik gereksinimi küçümseme; kesin kabul tahmini yapma; kanıtsız yetenek ekleme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Güçlü eşleşme, açıklar, başvuru kararı ve hazırlık önerileri.",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp",
      "thumbnail": "assets/images/thumbs/img_69ea9b6541a469.84268754-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-20",
      "version": "1.0"
    },
    {
      "id": 40,
      "slug": "portfoy-projesi-vaka-calismasi",
      "title": "Portföy Projesi Vaka Çalışması",
      "category": "kariyer",
      "categoryLabel": "Kariyer",
      "subcategory": "Portföy",
      "description": "Projeyi problem, karar ve sonuçlarıyla etkileyici vaka çalışmasına dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "portfolyo",
        "case study",
        "proje"
      ],
      "variables": [
        {
          "key": "PROJE",
          "label": "Proje",
          "default": "PROMPTLA"
        },
        {
          "key": "ROL",
          "label": "Kendi rolün",
          "default": "Tasarım ve frontend geliştirme"
        },
        {
          "key": "SORUN",
          "label": "Problem",
          "default": "Prompt örneklerine erişimin dağınık olması"
        },
        {
          "key": "SONUC",
          "label": "Sonuç / ölçüm",
          "default": "60 prompt ve çalışan builder"
        }
      ],
      "versions": {
        "quick": "Projeyi problem, karar ve sonuçlarıyla etkileyici vaka çalışmasına dönüştürmek. Girdi: [PROJE] (Proje); [ROL] (Kendi rolün); [SORUN] (Problem); [SONUC] (Sonuç / ölçüm). Çıktıyı özet, problem, süreç, teknik kararlar, zorluklar, sonuç ve sonraki adımlar biçiminde ver.",
        "advanced": "Ürün odaklı teknik yazar gibi davran. Amacın projeyi problem, karar ve sonuçlarıyla etkileyici vaka çalışmasına dönüştürmek. Kullanacağın bilgiler: [PROJE] (Proje); [ROL] (Kendi rolün); [SORUN] (Problem); [SONUC] (Sonuç / ölçüm). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Özet, problem, süreç, teknik kararlar, zorluklar, sonuç ve sonraki adımlar. Kısıtlar: Yapmadığın işi sahiplenme; ölçü yoksa nitel sonuç yaz; kararların gerekçesini göster.",
        "expert": "ROL\nSen ürün odaklı teknik yazarsın.\n\nAMAÇ\nProjeyi problem, karar ve sonuçlarıyla etkileyici vaka çalışmasına dönüştürmek.\n\nGİRDİLER\n- Proje: [PROJE]\n- Kendi rolün: [ROL]\n- Problem: [SORUN]\n- Sonuç / ölçüm: [SONUC]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÖzet, problem, süreç, teknik kararlar, zorluklar, sonuç ve sonraki adımlar.\n\nKISITLAR\nYapmadığın işi sahiplenme; ölçü yoksa nitel sonuç yaz; kararların gerekçesini göster.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Yapmadığın işi sahiplenme; ölçü yoksa nitel sonuç yaz; kararların gerekçesini göster",
      "outputFormat": "Özet, problem, süreç, teknik kararlar, zorluklar, sonuç ve sonraki adımlar",
      "before": "Bana portföy projesi vaka çalışması için bir şey hazırla.",
      "after": "ROL\nSen ürün odaklı teknik yazarsın.\n\nAMAÇ\nProjeyi problem, karar ve sonuçlarıyla etkileyici vaka çalışmasına dönüştürmek.\n\nGİRDİLER\n- Proje: [PROJE]\n- Kendi rolün: [ROL]\n- Problem: [SORUN]\n- Sonuç / ölçüm: [SONUC]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÖzet, problem, süreç, teknik kararlar, zorluklar, sonuç ve sonraki adımlar.\n\nKISITLAR\nYapmadığın işi sahiplenme; ölçü yoksa nitel sonuç yaz; kararların gerekçesini göster.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Özet, problem, süreç, teknik kararlar, zorluklar, sonuç ve sonraki adımlar.",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp",
      "thumbnail": "assets/images/thumbs/img_69ea9b6541a469.84268754-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-01",
      "version": "1.0"
    },
    {
      "id": 41,
      "slug": "recruiter-mesajina-yanit",
      "title": "Recruiter Mesajına Yanıt",
      "category": "kariyer",
      "categoryLabel": "Kariyer",
      "subcategory": "İletişim",
      "description": "Işe alım uzmanının mesajına net, profesyonel ve doğal yanıt hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "recruiter",
        "mesaj",
        "iş"
      ],
      "variables": [
        {
          "key": "MESAJ",
          "label": "Gelen mesaj",
          "default": "Recruiter mesajını yapıştır"
        },
        {
          "key": "NIYET",
          "label": "Yanıt niyeti",
          "default": "Görüşmeyi kabul etme"
        },
        {
          "key": "MUSAITLIK",
          "label": "Uygunluk",
          "default": "Salı veya Perşembe 14:00 sonrası"
        },
        {
          "key": "NOT",
          "label": "Ek not",
          "default": "Rol detaylarını sormak istiyorum"
        }
      ],
      "versions": {
        "quick": "Işe alım uzmanının mesajına net, profesyonel ve doğal yanıt hazırlamak. Girdi: [MESAJ] (Gelen mesaj); [NIYET] (Yanıt niyeti); [MUSAITLIK] (Uygunluk); [NOT] (Ek not). Çıktıyı kısa yanıt, uygunluk ve gerekli tek soru biçiminde ver.",
        "advanced": "Kariyer iletişimi danışmanı gibi davran. Amacın işe alım uzmanının mesajına net, profesyonel ve doğal yanıt hazırlamak. Kullanacağın bilgiler: [MESAJ] (Gelen mesaj); [NIYET] (Yanıt niyeti); [MUSAITLIK] (Uygunluk); [NOT] (Ek not). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kısa yanıt, uygunluk ve gerekli tek soru. Kısıtlar: Fazla kişisel bilgi verme; aşırı hevesli veya soğuk olma; saat dilimini netleştir.",
        "expert": "ROL\nSen kariyer iletişimi danışmanısın.\n\nAMAÇ\nIşe alım uzmanının mesajına net, profesyonel ve doğal yanıt hazırlamak.\n\nGİRDİLER\n- Gelen mesaj: [MESAJ]\n- Yanıt niyeti: [NIYET]\n- Uygunluk: [MUSAITLIK]\n- Ek not: [NOT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKısa yanıt, uygunluk ve gerekli tek soru.\n\nKISITLAR\nFazla kişisel bilgi verme; aşırı hevesli veya soğuk olma; saat dilimini netleştir.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Fazla kişisel bilgi verme; aşırı hevesli veya soğuk olma; saat dilimini netleştir",
      "outputFormat": "Kısa yanıt, uygunluk ve gerekli tek soru",
      "before": "Bana recruiter mesajına yanıt için bir şey hazırla.",
      "after": "ROL\nSen kariyer iletişimi danışmanısın.\n\nAMAÇ\nIşe alım uzmanının mesajına net, profesyonel ve doğal yanıt hazırlamak.\n\nGİRDİLER\n- Gelen mesaj: [MESAJ]\n- Yanıt niyeti: [NIYET]\n- Uygunluk: [MUSAITLIK]\n- Ek not: [NOT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKısa yanıt, uygunluk ve gerekli tek soru.\n\nKISITLAR\nFazla kişisel bilgi verme; aşırı hevesli veya soğuk olma; saat dilimini netleştir.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kısa yanıt, uygunluk ve gerekli tek soru.",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp",
      "thumbnail": "assets/images/thumbs/img_69ea9b6541a469.84268754-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-02",
      "version": "1.0"
    },
    {
      "id": 42,
      "slug": "90-gunluk-junior-gelisim-plani",
      "title": "90 Günlük Junior Gelişim Planı",
      "category": "kariyer",
      "categoryLabel": "Kariyer",
      "subcategory": "Kariyer planı",
      "description": "Hedef role ulaşmak için proje ve öğrenme odaklı gerçekçi 90 günlük plan hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "gelişim planı",
        "junior",
        "öğrenme"
      ],
      "variables": [
        {
          "key": "HEDEF",
          "label": "Hedef rol",
          "default": "Frontend Developer"
        },
        {
          "key": "MEVCUT",
          "label": "Mevcut seviye",
          "default": "HTML/CSS iyi, JavaScript temel"
        },
        {
          "key": "SURE",
          "label": "Günlük süre",
          "default": "2 saat"
        },
        {
          "key": "PROJE",
          "label": "Proje tercihi",
          "default": "Gerçek dünya web uygulaması"
        }
      ],
      "versions": {
        "quick": "Hedef role ulaşmak için proje ve öğrenme odaklı gerçekçi 90 günlük plan hazırlamak. Girdi: [HEDEF] (Hedef rol); [MEVCUT] (Mevcut seviye); [SURE] (Günlük süre); [PROJE] (Proje tercihi). Çıktıyı haftalık hedefler, kaynak türleri, mini projeler, ana proje ve ölçütler biçiminde ver.",
        "advanced": "Yazılım mentoru gibi davran. Amacın hedef role ulaşmak için proje ve öğrenme odaklı gerçekçi 90 günlük plan hazırlamak. Kullanacağın bilgiler: [HEDEF] (Hedef rol); [MEVCUT] (Mevcut seviye); [SURE] (Günlük süre); [PROJE] (Proje tercihi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Haftalık hedefler, kaynak türleri, mini projeler, ana proje ve ölçütler. Kısıtlar: Aşırı konu yükleme; her haftada üretilebilir çıktı; tekrar ve değerlendirme zamanı ekle.",
        "expert": "ROL\nSen yazılım mentorusın.\n\nAMAÇ\nHedef role ulaşmak için proje ve öğrenme odaklı gerçekçi 90 günlük plan hazırlamak.\n\nGİRDİLER\n- Hedef rol: [HEDEF]\n- Mevcut seviye: [MEVCUT]\n- Günlük süre: [SURE]\n- Proje tercihi: [PROJE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHaftalık hedefler, kaynak türleri, mini projeler, ana proje ve ölçütler.\n\nKISITLAR\nAşırı konu yükleme; her haftada üretilebilir çıktı; tekrar ve değerlendirme zamanı ekle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Aşırı konu yükleme; her haftada üretilebilir çıktı; tekrar ve değerlendirme zamanı ekle",
      "outputFormat": "Haftalık hedefler, kaynak türleri, mini projeler, ana proje ve ölçütler",
      "before": "Bana 90 günlük junior gelişim planı için bir şey hazırla.",
      "after": "ROL\nSen yazılım mentorusın.\n\nAMAÇ\nHedef role ulaşmak için proje ve öğrenme odaklı gerçekçi 90 günlük plan hazırlamak.\n\nGİRDİLER\n- Hedef rol: [HEDEF]\n- Mevcut seviye: [MEVCUT]\n- Günlük süre: [SURE]\n- Proje tercihi: [PROJE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHaftalık hedefler, kaynak türleri, mini projeler, ana proje ve ölçütler.\n\nKISITLAR\nAşırı konu yükleme; her haftada üretilebilir çıktı; tekrar ve değerlendirme zamanı ekle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Haftalık hedefler, kaynak türleri, mini projeler, ana proje ve ölçütler.",
      "image": "assets/images/img_69ea9b6541a469.84268754.webp",
      "thumbnail": "assets/images/thumbs/img_69ea9b6541a469.84268754-thumb.webp",
      "collections": [
        "Kariyer Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-03",
      "version": "1.0"
    },
    {
      "id": 43,
      "slug": "rakip-analizi-cercevesi",
      "title": "Rakip Analizi Çerçevesi",
      "category": "pazarlama",
      "categoryLabel": "Pazarlama",
      "subcategory": "Strateji",
      "description": "Rakipleri özellik, konumlandırma ve kullanıcı deneyimi açısından sistematik karşılaştırmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "rakip analizi",
        "strateji",
        "ürün"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün / sektör",
          "default": "Türkçe prompt platformu"
        },
        {
          "key": "RAKIPLER",
          "label": "Rakipler",
          "default": "3–5 rakip adı veya bağlantısı"
        },
        {
          "key": "KITLE",
          "label": "Hedef kitle",
          "default": "Öğrenciler ve içerik üreticileri"
        },
        {
          "key": "HEDEF",
          "label": "Analiz hedefi",
          "default": "Farklılaşma fırsatı bulmak"
        }
      ],
      "versions": {
        "quick": "Rakipleri özellik, konumlandırma ve kullanıcı deneyimi açısından sistematik karşılaştırmak. Girdi: [URUN] (Ürün / sektör); [RAKIPLER] (Rakipler); [KITLE] (Hedef kitle); [HEDEF] (Analiz hedefi). Çıktıyı karşılaştırma matrisi, fırsatlar, riskler ve doğrulanacak araştırma soruları biçiminde ver.",
        "advanced": "Ürün pazarlama stratejisti gibi davran. Amacın rakipleri özellik, konumlandırma ve kullanıcı deneyimi açısından sistematik karşılaştırmak. Kullanacağın bilgiler: [URUN] (Ürün / sektör); [RAKIPLER] (Rakipler); [KITLE] (Hedef kitle); [HEDEF] (Analiz hedefi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Karşılaştırma matrisi, fırsatlar, riskler ve doğrulanacak araştırma soruları. Kısıtlar: Güncel veri yoksa varsayımı işaretle; marka hakkında kanıtsız iddia yapma.",
        "expert": "ROL\nSen ürün pazarlama stratejistisın.\n\nAMAÇ\nRakipleri özellik, konumlandırma ve kullanıcı deneyimi açısından sistematik karşılaştırmak.\n\nGİRDİLER\n- Ürün / sektör: [URUN]\n- Rakipler: [RAKIPLER]\n- Hedef kitle: [KITLE]\n- Analiz hedefi: [HEDEF]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKarşılaştırma matrisi, fırsatlar, riskler ve doğrulanacak araştırma soruları.\n\nKISITLAR\nGüncel veri yoksa varsayımı işaretle; marka hakkında kanıtsız iddia yapma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Güncel veri yoksa varsayımı işaretle; marka hakkında kanıtsız iddia yapma",
      "outputFormat": "Karşılaştırma matrisi, fırsatlar, riskler ve doğrulanacak araştırma soruları",
      "before": "Bana rakip analizi çerçevesi için bir şey hazırla.",
      "after": "ROL\nSen ürün pazarlama stratejistisın.\n\nAMAÇ\nRakipleri özellik, konumlandırma ve kullanıcı deneyimi açısından sistematik karşılaştırmak.\n\nGİRDİLER\n- Ürün / sektör: [URUN]\n- Rakipler: [RAKIPLER]\n- Hedef kitle: [KITLE]\n- Analiz hedefi: [HEDEF]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKarşılaştırma matrisi, fırsatlar, riskler ve doğrulanacak araştırma soruları.\n\nKISITLAR\nGüncel veri yoksa varsayımı işaretle; marka hakkında kanıtsız iddia yapma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Karşılaştırma matrisi, fırsatlar, riskler ve doğrulanacak araştırma soruları.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Pazarlama Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-04",
      "version": "1.0"
    },
    {
      "id": 44,
      "slug": "musteri-persona-olusturma",
      "title": "Müşteri Persona Oluşturma",
      "category": "pazarlama",
      "categoryLabel": "Pazarlama",
      "subcategory": "Hedef kitle",
      "description": "Gerçek davranış ve ihtiyaçlara dayalı kullanılabilir persona taslağı oluşturmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "persona",
        "müşteri",
        "ux"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Prompt öğrenme platformu"
        },
        {
          "key": "VERI",
          "label": "Mevcut veri",
          "default": "Kullanıcı yorumları veya gözlemler"
        },
        {
          "key": "PAZAR",
          "label": "Pazar",
          "default": "Türkiye"
        },
        {
          "key": "HEDEF",
          "label": "İş hedefi",
          "default": "Kayıt dönüşümünü artırmak"
        }
      ],
      "versions": {
        "quick": "Gerçek davranış ve ihtiyaçlara dayalı kullanılabilir persona taslağı oluşturmak. Girdi: [URUN] (Ürün); [VERI] (Mevcut veri); [PAZAR] (Pazar); [HEDEF] (İş hedefi). Çıktıyı persona, işler, acılar, motivasyonlar, itirazlar ve mesaj önerileri biçiminde ver.",
        "advanced": "Kullanıcı araştırmacısı gibi davran. Amacın gerçek davranış ve ihtiyaçlara dayalı kullanılabilir persona taslağı oluşturmak. Kullanacağın bilgiler: [URUN] (Ürün); [VERI] (Mevcut veri); [PAZAR] (Pazar); [HEDEF] (İş hedefi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Persona, işler, acılar, motivasyonlar, itirazlar ve mesaj önerileri. Kısıtlar: Demografik stereotip kullanma; veriye dayanmayan kısmı hipotez olarak işaretle.",
        "expert": "ROL\nSen kullanıcı araştırmacısısın.\n\nAMAÇ\nGerçek davranış ve ihtiyaçlara dayalı kullanılabilir persona taslağı oluşturmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Mevcut veri: [VERI]\n- Pazar: [PAZAR]\n- İş hedefi: [HEDEF]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nPersona, işler, acılar, motivasyonlar, itirazlar ve mesaj önerileri.\n\nKISITLAR\nDemografik stereotip kullanma; veriye dayanmayan kısmı hipotez olarak işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Demografik stereotip kullanma; veriye dayanmayan kısmı hipotez olarak işaretle",
      "outputFormat": "Persona, işler, acılar, motivasyonlar, itirazlar ve mesaj önerileri",
      "before": "Bana müşteri persona oluşturma için bir şey hazırla.",
      "after": "ROL\nSen kullanıcı araştırmacısısın.\n\nAMAÇ\nGerçek davranış ve ihtiyaçlara dayalı kullanılabilir persona taslağı oluşturmak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Mevcut veri: [VERI]\n- Pazar: [PAZAR]\n- İş hedefi: [HEDEF]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nPersona, işler, acılar, motivasyonlar, itirazlar ve mesaj önerileri.\n\nKISITLAR\nDemografik stereotip kullanma; veriye dayanmayan kısmı hipotez olarak işaretle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Persona, işler, acılar, motivasyonlar, itirazlar ve mesaj önerileri.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Pazarlama Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-05",
      "version": "1.0"
    },
    {
      "id": 45,
      "slug": "urun-konumlandirma-mesaji",
      "title": "Ürün Konumlandırma Mesajı",
      "category": "pazarlama",
      "categoryLabel": "Pazarlama",
      "subcategory": "Konumlandırma",
      "description": "Ürünün kime, hangi sorunu nasıl farklı çözdüğünü netleştirmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "konumlandırma",
        "ürün",
        "mesaj"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "PROMPTLA"
        },
        {
          "key": "KITLE",
          "label": "Hedef kitle",
          "default": "Yapay zekâya yeni başlayan Türkçe kullanıcılar"
        },
        {
          "key": "ALTERNATIF",
          "label": "Alternatif",
          "default": "Dağınık sosyal medya prompt listeleri"
        },
        {
          "key": "FARK",
          "label": "Temel fark",
          "default": "Doldurulabilir ve öğretici promptlar"
        }
      ],
      "versions": {
        "quick": "Ürünün kime, hangi sorunu nasıl farklı çözdüğünü netleştirmek. Girdi: [URUN] (Ürün); [KITLE] (Hedef kitle); [ALTERNATIF] (Alternatif); [FARK] (Temel fark). Çıktıyı konumlandırma cümlesi, değer önerileri, mesaj sütunları ve kanıt ihtiyacı biçiminde ver.",
        "advanced": "Ürün pazarlama lideri gibi davran. Amacın ürünün kime, hangi sorunu nasıl farklı çözdüğünü netleştirmek. Kullanacağın bilgiler: [URUN] (Ürün); [KITLE] (Hedef kitle); [ALTERNATIF] (Alternatif); [FARK] (Temel fark). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Konumlandırma cümlesi, değer önerileri, mesaj sütunları ve kanıt ihtiyacı. Kısıtlar: Genel ve herkes için olma iddiasından kaçın; ölçülemeyen üstünlük kullanma.",
        "expert": "ROL\nSen ürün pazarlama liderisın.\n\nAMAÇ\nÜrünün kime, hangi sorunu nasıl farklı çözdüğünü netleştirmek.\n\nGİRDİLER\n- Ürün: [URUN]\n- Hedef kitle: [KITLE]\n- Alternatif: [ALTERNATIF]\n- Temel fark: [FARK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKonumlandırma cümlesi, değer önerileri, mesaj sütunları ve kanıt ihtiyacı.\n\nKISITLAR\nGenel ve herkes için olma iddiasından kaçın; ölçülemeyen üstünlük kullanma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Genel ve herkes için olma iddiasından kaçın; ölçülemeyen üstünlük kullanma",
      "outputFormat": "Konumlandırma cümlesi, değer önerileri, mesaj sütunları ve kanıt ihtiyacı",
      "before": "Bana ürün konumlandırma mesajı için bir şey hazırla.",
      "after": "ROL\nSen ürün pazarlama liderisın.\n\nAMAÇ\nÜrünün kime, hangi sorunu nasıl farklı çözdüğünü netleştirmek.\n\nGİRDİLER\n- Ürün: [URUN]\n- Hedef kitle: [KITLE]\n- Alternatif: [ALTERNATIF]\n- Temel fark: [FARK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKonumlandırma cümlesi, değer önerileri, mesaj sütunları ve kanıt ihtiyacı.\n\nKISITLAR\nGenel ve herkes için olma iddiasından kaçın; ölçülemeyen üstünlük kullanma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Konumlandırma cümlesi, değer önerileri, mesaj sütunları ve kanıt ihtiyacı.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Pazarlama Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-06",
      "version": "1.0"
    },
    {
      "id": 46,
      "slug": "lansman-kampanyasi-plani",
      "title": "Lansman Kampanyası Planı",
      "category": "pazarlama",
      "categoryLabel": "Pazarlama",
      "subcategory": "Kampanya",
      "description": "Küçük ekip ve düşük bütçeyle uygulanabilir ürün lansmanı planlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "lansman",
        "kampanya",
        "growth"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Prompt Builder özelliği"
        },
        {
          "key": "BUTCE",
          "label": "Bütçe",
          "default": "Organik / düşük bütçe"
        },
        {
          "key": "KANAL",
          "label": "Kanallar",
          "default": "LinkedIn, Instagram, topluluklar"
        },
        {
          "key": "TARIH",
          "label": "Lansman süresi",
          "default": "14 gün"
        }
      ],
      "versions": {
        "quick": "Küçük ekip ve düşük bütçeyle uygulanabilir ürün lansmanı planlamak. Girdi: [URUN] (Ürün); [BUTCE] (Bütçe); [KANAL] (Kanallar); [TARIH] (Lansman süresi). Çıktıyı ön lansman, lansman, takip takvimi; içerik; kpi ve deneyler biçiminde ver.",
        "advanced": "Growth pazarlama yöneticisi gibi davran. Amacın küçük ekip ve düşük bütçeyle uygulanabilir ürün lansmanı planlamak. Kullanacağın bilgiler: [URUN] (Ürün); [BUTCE] (Bütçe); [KANAL] (Kanallar); [TARIH] (Lansman süresi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Ön lansman, lansman, takip takvimi; içerik; KPI ve deneyler. Kısıtlar: Kanal kapasitesine uygun; vanity metric yerine davranış metriği; etik olmayan büyüme yok.",
        "expert": "ROL\nSen growth pazarlama yöneticisisın.\n\nAMAÇ\nKüçük ekip ve düşük bütçeyle uygulanabilir ürün lansmanı planlamak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Bütçe: [BUTCE]\n- Kanallar: [KANAL]\n- Lansman süresi: [TARIH]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÖn lansman, lansman, takip takvimi; içerik; KPI ve deneyler.\n\nKISITLAR\nKanal kapasitesine uygun; vanity metric yerine davranış metriği; etik olmayan büyüme yok.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Kanal kapasitesine uygun; vanity metric yerine davranış metriği; etik olmayan büyüme yok",
      "outputFormat": "Ön lansman, lansman, takip takvimi; içerik; KPI ve deneyler",
      "before": "Bana lansman kampanyası planı için bir şey hazırla.",
      "after": "ROL\nSen growth pazarlama yöneticisisın.\n\nAMAÇ\nKüçük ekip ve düşük bütçeyle uygulanabilir ürün lansmanı planlamak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Bütçe: [BUTCE]\n- Kanallar: [KANAL]\n- Lansman süresi: [TARIH]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nÖn lansman, lansman, takip takvimi; içerik; KPI ve deneyler.\n\nKISITLAR\nKanal kapasitesine uygun; vanity metric yerine davranış metriği; etik olmayan büyüme yok.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Ön lansman, lansman, takip takvimi; içerik; KPI ve deneyler.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Pazarlama Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-07",
      "version": "1.0"
    },
    {
      "id": 47,
      "slug": "satis-e-postasi-serisi",
      "title": "Satış E-postası Serisi",
      "category": "pazarlama",
      "categoryLabel": "Pazarlama",
      "subcategory": "E-posta",
      "description": "Soğuk hedefe değer sunan kısa ve kişiselleştirilebilir e-posta serisi hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "satış",
        "e-posta",
        "b2b"
      ],
      "variables": [
        {
          "key": "URUN",
          "label": "Ürün",
          "default": "Kurumsal prompt eğitim paketi"
        },
        {
          "key": "ALICI",
          "label": "Alıcı rolü",
          "default": "İnsan kaynakları eğitim yöneticisi"
        },
        {
          "key": "FAYDA",
          "label": "Ana fayda",
          "default": "Çalışanların AI kullanım kalitesini artırmak"
        },
        {
          "key": "KANIT",
          "label": "Kanıt",
          "default": "Pilot eğitim ve örnek kütüphane"
        }
      ],
      "versions": {
        "quick": "Soğuk hedefe değer sunan kısa ve kişiselleştirilebilir e-posta serisi hazırlamak. Girdi: [URUN] (Ürün); [ALICI] (Alıcı rolü); [FAYDA] (Ana fayda); [KANIT] (Kanıt). Çıktıyı 3 e-posta: ilk temas, değer takibi ve nazik kapanış biçiminde ver.",
        "advanced": "B2b satış metin yazarı gibi davran. Amacın soğuk hedefe değer sunan kısa ve kişiselleştirilebilir e-posta serisi hazırlamak. Kullanacağın bilgiler: [URUN] (Ürün); [ALICI] (Alıcı rolü); [FAYDA] (Ana fayda); [KANIT] (Kanıt). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: 3 e-posta: ilk temas, değer takibi ve nazik kapanış. Kısıtlar: Yanıltıcı kişiselleştirme yok; kısa; tek CTA; spam dili kullanma.",
        "expert": "ROL\nSen B2B satış metin yazarısın.\n\nAMAÇ\nSoğuk hedefe değer sunan kısa ve kişiselleştirilebilir e-posta serisi hazırlamak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Alıcı rolü: [ALICI]\n- Ana fayda: [FAYDA]\n- Kanıt: [KANIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\n3 e-posta: ilk temas, değer takibi ve nazik kapanış.\n\nKISITLAR\nYanıltıcı kişiselleştirme yok; kısa; tek CTA; spam dili kullanma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Yanıltıcı kişiselleştirme yok; kısa; tek CTA; spam dili kullanma",
      "outputFormat": "3 e-posta: ilk temas, değer takibi ve nazik kapanış",
      "before": "Bana satış e-postası serisi için bir şey hazırla.",
      "after": "ROL\nSen B2B satış metin yazarısın.\n\nAMAÇ\nSoğuk hedefe değer sunan kısa ve kişiselleştirilebilir e-posta serisi hazırlamak.\n\nGİRDİLER\n- Ürün: [URUN]\n- Alıcı rolü: [ALICI]\n- Ana fayda: [FAYDA]\n- Kanıt: [KANIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\n3 e-posta: ilk temas, değer takibi ve nazik kapanış.\n\nKISITLAR\nYanıltıcı kişiselleştirme yok; kısa; tek CTA; spam dili kullanma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "3 e-posta: ilk temas, değer takibi ve nazik kapanış.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Pazarlama Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-08",
      "version": "1.0"
    },
    {
      "id": 48,
      "slug": "a-b-test-hipotezi-uretme",
      "title": "A/B Test Hipotezi Üretme",
      "category": "pazarlama",
      "categoryLabel": "Pazarlama",
      "subcategory": "Dönüşüm",
      "description": "Sayfa davranışına dayalı ölçülebilir a/b testleri tasarlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "ab test",
        "cro",
        "deney"
      ],
      "variables": [
        {
          "key": "SAYFA",
          "label": "Sayfa",
          "default": "Prompt kütüphanesi ana sayfası"
        },
        {
          "key": "HEDEF",
          "label": "Ana hedef",
          "default": "Prompt detayına geçiş"
        },
        {
          "key": "SORUN",
          "label": "Gözlenen sorun",
          "default": "Kartlarda düşük tıklama"
        },
        {
          "key": "VERI",
          "label": "Mevcut veri",
          "default": "Mobilde %35 çıkış"
        }
      ],
      "versions": {
        "quick": "Sayfa davranışına dayalı ölçülebilir a/b testleri tasarlamak. Girdi: [SAYFA] (Sayfa); [HEDEF] (Ana hedef); [SORUN] (Gözlenen sorun); [VERI] (Mevcut veri). Çıktıyı hipotez, varyant, ana/koruyucu metrik, segment ve durdurma kriteri biçiminde ver.",
        "advanced": "Dönüşüm optimizasyonu uzmanı gibi davran. Amacın sayfa davranışına dayalı ölçülebilir A/B testleri tasarlamak. Kullanacağın bilgiler: [SAYFA] (Sayfa); [HEDEF] (Ana hedef); [SORUN] (Gözlenen sorun); [VERI] (Mevcut veri). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Hipotez, varyant, ana/koruyucu metrik, segment ve durdurma kriteri. Kısıtlar: Aynı anda çok değişken test etme; istatistiksel güç ihtiyacını belirt; dark pattern yok.",
        "expert": "ROL\nSen dönüşüm optimizasyonu uzmanısın.\n\nAMAÇ\nSayfa davranışına dayalı ölçülebilir a/b testleri tasarlamak.\n\nGİRDİLER\n- Sayfa: [SAYFA]\n- Ana hedef: [HEDEF]\n- Gözlenen sorun: [SORUN]\n- Mevcut veri: [VERI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHipotez, varyant, ana/koruyucu metrik, segment ve durdurma kriteri.\n\nKISITLAR\nAynı anda çok değişken test etme; istatistiksel güç ihtiyacını belirt; dark pattern yok.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Aynı anda çok değişken test etme; istatistiksel güç ihtiyacını belirt; dark pattern yok",
      "outputFormat": "Hipotez, varyant, ana/koruyucu metrik, segment ve durdurma kriteri",
      "before": "Bana a/b test hipotezi üretme için bir şey hazırla.",
      "after": "ROL\nSen dönüşüm optimizasyonu uzmanısın.\n\nAMAÇ\nSayfa davranışına dayalı ölçülebilir a/b testleri tasarlamak.\n\nGİRDİLER\n- Sayfa: [SAYFA]\n- Ana hedef: [HEDEF]\n- Gözlenen sorun: [SORUN]\n- Mevcut veri: [VERI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHipotez, varyant, ana/koruyucu metrik, segment ve durdurma kriteri.\n\nKISITLAR\nAynı anda çok değişken test etme; istatistiksel güç ihtiyacını belirt; dark pattern yok.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Hipotez, varyant, ana/koruyucu metrik, segment ve durdurma kriteri.",
      "image": "assets/images/urun1.webp",
      "thumbnail": "assets/images/thumbs/urun1-thumb.webp",
      "collections": [
        "Pazarlama Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-09",
      "version": "1.0"
    },
    {
      "id": 49,
      "slug": "kaynak-karsilastirmali-arastirma",
      "title": "Kaynak Karşılaştırmalı Araştırma",
      "category": "arastirma",
      "categoryLabel": "Araştırma ve Veri",
      "subcategory": "Araştırma",
      "description": "Bir konuda kaynakları görüş, kanıt ve sınırlılıklarıyla karşılaştırmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Kimi"
      ],
      "level": "İleri",
      "tags": [
        "araştırma",
        "kaynak",
        "sentez"
      ],
      "variables": [
        {
          "key": "SORU",
          "label": "Araştırma sorusu",
          "default": "Yapay zekâ kod öğrenimini nasıl etkiler?"
        },
        {
          "key": "KAYNAKLAR",
          "label": "Kaynak metinleri",
          "default": "Kaynakları veya özetleri yapıştır"
        },
        {
          "key": "TARIH",
          "label": "Zaman aralığı",
          "default": "Son 3 yıl"
        },
        {
          "key": "CIKTI",
          "label": "Çıktı biçimi",
          "default": "Karşılaştırma tablosu ve sentez"
        }
      ],
      "versions": {
        "quick": "Bir konuda kaynakları görüş, kanıt ve sınırlılıklarıyla karşılaştırmak. Girdi: [SORU] (Araştırma sorusu); [KAYNAKLAR] (Kaynak metinleri); [TARIH] (Zaman aralığı); [CIKTI] (Çıktı biçimi). Çıktıyı kaynak matrisi, ortak bulgular, çelişkiler, boşluklar ve sonuç biçiminde ver.",
        "advanced": "Araştırma analisti gibi davran. Amacın bir konuda kaynakları görüş, kanıt ve sınırlılıklarıyla karşılaştırmak. Kullanacağın bilgiler: [SORU] (Araştırma sorusu); [KAYNAKLAR] (Kaynak metinleri); [TARIH] (Zaman aralığı); [CIKTI] (Çıktı biçimi). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kaynak matrisi, ortak bulgular, çelişkiler, boşluklar ve sonuç. Kısıtlar: Kaynak uydurma; korelasyonu nedensellik sayma; her iddiayı kaynağa bağla.",
        "expert": "ROL\nSen araştırma analistisın.\n\nAMAÇ\nBir konuda kaynakları görüş, kanıt ve sınırlılıklarıyla karşılaştırmak.\n\nGİRDİLER\n- Araştırma sorusu: [SORU]\n- Kaynak metinleri: [KAYNAKLAR]\n- Zaman aralığı: [TARIH]\n- Çıktı biçimi: [CIKTI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKaynak matrisi, ortak bulgular, çelişkiler, boşluklar ve sonuç.\n\nKISITLAR\nKaynak uydurma; korelasyonu nedensellik sayma; her iddiayı kaynağa bağla.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Kaynak uydurma; korelasyonu nedensellik sayma; her iddiayı kaynağa bağla",
      "outputFormat": "Kaynak matrisi, ortak bulgular, çelişkiler, boşluklar ve sonuç",
      "before": "Bana kaynak karşılaştırmalı araştırma için bir şey hazırla.",
      "after": "ROL\nSen araştırma analistisın.\n\nAMAÇ\nBir konuda kaynakları görüş, kanıt ve sınırlılıklarıyla karşılaştırmak.\n\nGİRDİLER\n- Araştırma sorusu: [SORU]\n- Kaynak metinleri: [KAYNAKLAR]\n- Zaman aralığı: [TARIH]\n- Çıktı biçimi: [CIKTI]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKaynak matrisi, ortak bulgular, çelişkiler, boşluklar ve sonuç.\n\nKISITLAR\nKaynak uydurma; korelasyonu nedensellik sayma; her iddiayı kaynağa bağla.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kaynak matrisi, ortak bulgular, çelişkiler, boşluklar ve sonuç.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Araştırma Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-10",
      "version": "1.0"
    },
    {
      "id": 50,
      "slug": "anket-sorusu-tasarimi",
      "title": "Anket Sorusu Tasarımı",
      "category": "arastirma",
      "categoryLabel": "Araştırma ve Veri",
      "subcategory": "Araştırma yöntemi",
      "description": "Tarafsız ve analiz edilebilir kullanıcı anketi hazırlamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "anket",
        "ux research",
        "soru"
      ],
      "variables": [
        {
          "key": "HEDEF",
          "label": "Araştırma hedefi",
          "default": "Prompt kütüphanesi kullanım ihtiyacını anlamak"
        },
        {
          "key": "KITLE",
          "label": "Katılımcı",
          "default": "18–30 yaş öğrenciler"
        },
        {
          "key": "SURE",
          "label": "Anket süresi",
          "default": "5 dakika"
        },
        {
          "key": "KONU",
          "label": "Ana konular",
          "default": "AI kullanım sıklığı, zorluklar, beklentiler"
        }
      ],
      "versions": {
        "quick": "Tarafsız ve analiz edilebilir kullanıcı anketi hazırlamak. Girdi: [HEDEF] (Araştırma hedefi); [KITLE] (Katılımcı); [SURE] (Anket süresi); [KONU] (Ana konular). Çıktıyı eleme, davranış, tutum, açık uçlu ve demografi soruları biçiminde ver.",
        "advanced": "Ux araştırmacısı gibi davran. Amacın tarafsız ve analiz edilebilir kullanıcı anketi hazırlamak. Kullanacağın bilgiler: [HEDEF] (Araştırma hedefi); [KITLE] (Katılımcı); [SURE] (Anket süresi); [KONU] (Ana konular). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Eleme, davranış, tutum, açık uçlu ve demografi soruları. Kısıtlar: Yönlendirici ve çift sorulu ifadeler yok; hassas soruyu gerekçelendir; seçeneklerde diğer alanı.",
        "expert": "ROL\nSen UX araştırmacısısın.\n\nAMAÇ\nTarafsız ve analiz edilebilir kullanıcı anketi hazırlamak.\n\nGİRDİLER\n- Araştırma hedefi: [HEDEF]\n- Katılımcı: [KITLE]\n- Anket süresi: [SURE]\n- Ana konular: [KONU]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nEleme, davranış, tutum, açık uçlu ve demografi soruları.\n\nKISITLAR\nYönlendirici ve çift sorulu ifadeler yok; hassas soruyu gerekçelendir; seçeneklerde diğer alanı.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Yönlendirici ve çift sorulu ifadeler yok; hassas soruyu gerekçelendir; seçeneklerde diğer alanı",
      "outputFormat": "Eleme, davranış, tutum, açık uçlu ve demografi soruları",
      "before": "Bana anket sorusu tasarımı için bir şey hazırla.",
      "after": "ROL\nSen UX araştırmacısısın.\n\nAMAÇ\nTarafsız ve analiz edilebilir kullanıcı anketi hazırlamak.\n\nGİRDİLER\n- Araştırma hedefi: [HEDEF]\n- Katılımcı: [KITLE]\n- Anket süresi: [SURE]\n- Ana konular: [KONU]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nEleme, davranış, tutum, açık uçlu ve demografi soruları.\n\nKISITLAR\nYönlendirici ve çift sorulu ifadeler yok; hassas soruyu gerekçelendir; seçeneklerde diğer alanı.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Eleme, davranış, tutum, açık uçlu ve demografi soruları.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Araştırma Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-11",
      "version": "1.0"
    },
    {
      "id": 51,
      "slug": "csv-veri-analizi-plani",
      "title": "CSV Veri Analizi Planı",
      "category": "arastirma",
      "categoryLabel": "Araştırma ve Veri",
      "subcategory": "Veri analizi",
      "description": "Veri setini temizleme, keşfetme ve anlamlı metrikler çıkarma planı oluşturmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Copilot"
      ],
      "level": "İleri",
      "tags": [
        "veri analizi",
        "csv",
        "pandas"
      ],
      "variables": [
        {
          "key": "KOLONLAR",
          "label": "Kolonlar",
          "default": "date, user_id, category, copied"
        },
        {
          "key": "HEDEF",
          "label": "İş sorusu",
          "default": "Hangi prompt kategorisi daha çok kullanılıyor?"
        },
        {
          "key": "HACIM",
          "label": "Satır sayısı",
          "default": "50.000"
        },
        {
          "key": "ARAC",
          "label": "Araç",
          "default": "Python pandas"
        }
      ],
      "versions": {
        "quick": "Veri setini temizleme, keşfetme ve anlamlı metrikler çıkarma planı oluşturmak. Girdi: [KOLONLAR] (Kolonlar); [HEDEF] (İş sorusu); [HACIM] (Satır sayısı); [ARAC] (Araç). Çıktıyı veri kalite kontrolü, eda adımları, metrikler, örnek kod ve görselleştirme planı biçiminde ver.",
        "advanced": "Veri analisti gibi davran. Amacın veri setini temizleme, keşfetme ve anlamlı metrikler çıkarma planı oluşturmak. Kullanacağın bilgiler: [KOLONLAR] (Kolonlar); [HEDEF] (İş sorusu); [HACIM] (Satır sayısı); [ARAC] (Araç). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Veri kalite kontrolü, EDA adımları, metrikler, örnek kod ve görselleştirme planı. Kısıtlar: Kişisel veriyi anonimleştir; eksik değer varsayımlarını belirt; yanıltıcı grafik kullanma.",
        "expert": "ROL\nSen veri analistisın.\n\nAMAÇ\nVeri setini temizleme, keşfetme ve anlamlı metrikler çıkarma planı oluşturmak.\n\nGİRDİLER\n- Kolonlar: [KOLONLAR]\n- İş sorusu: [HEDEF]\n- Satır sayısı: [HACIM]\n- Araç: [ARAC]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nVeri kalite kontrolü, EDA adımları, metrikler, örnek kod ve görselleştirme planı.\n\nKISITLAR\nKişisel veriyi anonimleştir; eksik değer varsayımlarını belirt; yanıltıcı grafik kullanma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Kişisel veriyi anonimleştir; eksik değer varsayımlarını belirt; yanıltıcı grafik kullanma",
      "outputFormat": "Veri kalite kontrolü, EDA adımları, metrikler, örnek kod ve görselleştirme planı",
      "before": "Bana csv veri analizi planı için bir şey hazırla.",
      "after": "ROL\nSen veri analistisın.\n\nAMAÇ\nVeri setini temizleme, keşfetme ve anlamlı metrikler çıkarma planı oluşturmak.\n\nGİRDİLER\n- Kolonlar: [KOLONLAR]\n- İş sorusu: [HEDEF]\n- Satır sayısı: [HACIM]\n- Araç: [ARAC]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nVeri kalite kontrolü, EDA adımları, metrikler, örnek kod ve görselleştirme planı.\n\nKISITLAR\nKişisel veriyi anonimleştir; eksik değer varsayımlarını belirt; yanıltıcı grafik kullanma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Veri kalite kontrolü, EDA adımları, metrikler, örnek kod ve görselleştirme planı.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Araştırma Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-12",
      "version": "1.0"
    },
    {
      "id": 52,
      "slug": "tablo-ve-grafik-yorumlama",
      "title": "Tablo ve Grafik Yorumlama",
      "category": "arastirma",
      "categoryLabel": "Araştırma ve Veri",
      "subcategory": "Veri yorumlama",
      "description": "Verilen tablo veya grafiği bağlam, eğilim ve belirsizlikleriyle açıklamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "grafik",
        "yorum",
        "istatistik"
      ],
      "variables": [
        {
          "key": "VERI",
          "label": "Tablo / grafik açıklaması",
          "default": "Veriyi yapıştır veya görseli yükle"
        },
        {
          "key": "BAGLAM",
          "label": "Bağlam",
          "default": "Aylık site kullanımı"
        },
        {
          "key": "HEDEF",
          "label": "Sorulan karar",
          "default": "Hangi kategoriye yatırım yapılmalı?"
        },
        {
          "key": "KITLE",
          "label": "Rapor alıcısı",
          "default": "Proje ekibi"
        }
      ],
      "versions": {
        "quick": "Verilen tablo veya grafiği bağlam, eğilim ve belirsizlikleriyle açıklamak. Girdi: [VERI] (Tablo / grafik açıklaması); [BAGLAM] (Bağlam); [HEDEF] (Sorulan karar); [KITLE] (Rapor alıcısı). Çıktıyı ana bulgular, anormallikler, belirsizlik, olası açıklamalar ve ek analiz biçiminde ver.",
        "advanced": "Istatistik danışmanı gibi davran. Amacın verilen tablo veya grafiği bağlam, eğilim ve belirsizlikleriyle açıklamak. Kullanacağın bilgiler: [VERI] (Tablo / grafik açıklaması); [BAGLAM] (Bağlam); [HEDEF] (Sorulan karar); [KITLE] (Rapor alıcısı). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Ana bulgular, anormallikler, belirsizlik, olası açıklamalar ve ek analiz. Kısıtlar: Grafikte olmayan değeri uydurma; ölçek ve örneklem etkisini kontrol et; nedensellik iddiasından kaçın.",
        "expert": "ROL\nSen istatistik danışmanısın.\n\nAMAÇ\nVerilen tablo veya grafiği bağlam, eğilim ve belirsizlikleriyle açıklamak.\n\nGİRDİLER\n- Tablo / grafik açıklaması: [VERI]\n- Bağlam: [BAGLAM]\n- Sorulan karar: [HEDEF]\n- Rapor alıcısı: [KITLE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nAna bulgular, anormallikler, belirsizlik, olası açıklamalar ve ek analiz.\n\nKISITLAR\nGrafikte olmayan değeri uydurma; ölçek ve örneklem etkisini kontrol et; nedensellik iddiasından kaçın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Grafikte olmayan değeri uydurma; ölçek ve örneklem etkisini kontrol et; nedensellik iddiasından kaçın",
      "outputFormat": "Ana bulgular, anormallikler, belirsizlik, olası açıklamalar ve ek analiz",
      "before": "Bana tablo ve grafik yorumlama için bir şey hazırla.",
      "after": "ROL\nSen istatistik danışmanısın.\n\nAMAÇ\nVerilen tablo veya grafiği bağlam, eğilim ve belirsizlikleriyle açıklamak.\n\nGİRDİLER\n- Tablo / grafik açıklaması: [VERI]\n- Bağlam: [BAGLAM]\n- Sorulan karar: [HEDEF]\n- Rapor alıcısı: [KITLE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nAna bulgular, anormallikler, belirsizlik, olası açıklamalar ve ek analiz.\n\nKISITLAR\nGrafikte olmayan değeri uydurma; ölçek ve örneklem etkisini kontrol et; nedensellik iddiasından kaçın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Ana bulgular, anormallikler, belirsizlik, olası açıklamalar ve ek analiz.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Araştırma Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-13",
      "version": "1.0"
    },
    {
      "id": 53,
      "slug": "hipotez-ve-deney-tasarimi",
      "title": "Hipotez ve Deney Tasarımı",
      "category": "arastirma",
      "categoryLabel": "Araştırma ve Veri",
      "subcategory": "Deney",
      "description": "Ürün değişikliğinin etkisini test edecek net hipotez ve deney planı oluşturmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "İleri",
      "tags": [
        "hipotez",
        "deney",
        "ürün"
      ],
      "variables": [
        {
          "key": "DEGISIKLIK",
          "label": "Değişiklik",
          "default": "Prompt kartına canlı önizleme eklemek"
        },
        {
          "key": "DAVRANIS",
          "label": "Hedef davranış",
          "default": "Kopyalama oranı"
        },
        {
          "key": "KITLE",
          "label": "Kullanıcı segmenti",
          "default": "Yeni ziyaretçiler"
        },
        {
          "key": "SURE",
          "label": "Tahmini süre",
          "default": "2 hafta"
        }
      ],
      "versions": {
        "quick": "Ürün değişikliğinin etkisini test edecek net hipotez ve deney planı oluşturmak. Girdi: [DEGISIKLIK] (Değişiklik); [DAVRANIS] (Hedef davranış); [KITLE] (Kullanıcı segmenti); [SURE] (Tahmini süre). Çıktıyı hipotez, kontrol/varyant, metrik, örneklem varsayımı, risk ve analiz planı biçiminde ver.",
        "advanced": "Deney tasarımı uzmanı gibi davran. Amacın ürün değişikliğinin etkisini test edecek net hipotez ve deney planı oluşturmak. Kullanacağın bilgiler: [DEGISIKLIK] (Değişiklik); [DAVRANIS] (Hedef davranış); [KITLE] (Kullanıcı segmenti); [SURE] (Tahmini süre). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Hipotez, kontrol/varyant, metrik, örneklem varsayımı, risk ve analiz planı. Kısıtlar: Başarı kriterini önceden yaz; birincil metriği değiştirme; segmentleri sonradan seçme.",
        "expert": "ROL\nSen deney tasarımı uzmanısın.\n\nAMAÇ\nÜrün değişikliğinin etkisini test edecek net hipotez ve deney planı oluşturmak.\n\nGİRDİLER\n- Değişiklik: [DEGISIKLIK]\n- Hedef davranış: [DAVRANIS]\n- Kullanıcı segmenti: [KITLE]\n- Tahmini süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHipotez, kontrol/varyant, metrik, örneklem varsayımı, risk ve analiz planı.\n\nKISITLAR\nBaşarı kriterini önceden yaz; birincil metriği değiştirme; segmentleri sonradan seçme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Başarı kriterini önceden yaz; birincil metriği değiştirme; segmentleri sonradan seçme",
      "outputFormat": "Hipotez, kontrol/varyant, metrik, örneklem varsayımı, risk ve analiz planı",
      "before": "Bana hipotez ve deney tasarımı için bir şey hazırla.",
      "after": "ROL\nSen deney tasarımı uzmanısın.\n\nAMAÇ\nÜrün değişikliğinin etkisini test edecek net hipotez ve deney planı oluşturmak.\n\nGİRDİLER\n- Değişiklik: [DEGISIKLIK]\n- Hedef davranış: [DAVRANIS]\n- Kullanıcı segmenti: [KITLE]\n- Tahmini süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nHipotez, kontrol/varyant, metrik, örneklem varsayımı, risk ve analiz planı.\n\nKISITLAR\nBaşarı kriterini önceden yaz; birincil metriği değiştirme; segmentleri sonradan seçme.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Hipotez, kontrol/varyant, metrik, örneklem varsayımı, risk ve analiz planı.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Araştırma Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-14",
      "version": "1.0"
    },
    {
      "id": 54,
      "slug": "uzun-raporu-yonetici-ozetine-cevirme",
      "title": "Uzun Raporu Yönetici Özetine Çevirme",
      "category": "arastirma",
      "categoryLabel": "Araştırma ve Veri",
      "subcategory": "Rapor analizi",
      "description": "Uzun raporu karar vericinin hızla anlayacağı yönetici özetine dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Kimi"
      ],
      "level": "Orta",
      "tags": [
        "özet",
        "rapor",
        "yönetici"
      ],
      "variables": [
        {
          "key": "RAPOR",
          "label": "Rapor",
          "default": "Rapor metnini yapıştır"
        },
        {
          "key": "ALICI",
          "label": "Alıcı",
          "default": "Proje yöneticisi"
        },
        {
          "key": "KARAR",
          "label": "Beklenen karar",
          "default": "Bir sonraki geliştirme önceliği"
        },
        {
          "key": "UZUNLUK",
          "label": "Özet uzunluğu",
          "default": "400 kelime"
        }
      ],
      "versions": {
        "quick": "Uzun raporu karar vericinin hızla anlayacağı yönetici özetine dönüştürmek. Girdi: [RAPOR] (Rapor); [ALICI] (Alıcı); [KARAR] (Beklenen karar); [UZUNLUK] (Özet uzunluğu). Çıktıyı bağlam, 5 bulgu, etkiler, öneriler, riskler ve açık sorular biçiminde ver.",
        "advanced": "Strateji analisti gibi davran. Amacın uzun raporu karar vericinin hızla anlayacağı yönetici özetine dönüştürmek. Kullanacağın bilgiler: [RAPOR] (Rapor); [ALICI] (Alıcı); [KARAR] (Beklenen karar); [UZUNLUK] (Özet uzunluğu). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Bağlam, 5 bulgu, etkiler, öneriler, riskler ve açık sorular. Kısıtlar: Rapor dışı çıkarım yaparsan etiketle; kritik sayı ve koşulları koru; jargon azalt.",
        "expert": "ROL\nSen strateji analistisın.\n\nAMAÇ\nUzun raporu karar vericinin hızla anlayacağı yönetici özetine dönüştürmek.\n\nGİRDİLER\n- Rapor: [RAPOR]\n- Alıcı: [ALICI]\n- Beklenen karar: [KARAR]\n- Özet uzunluğu: [UZUNLUK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBağlam, 5 bulgu, etkiler, öneriler, riskler ve açık sorular.\n\nKISITLAR\nRapor dışı çıkarım yaparsan etiketle; kritik sayı ve koşulları koru; jargon azalt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Rapor dışı çıkarım yaparsan etiketle; kritik sayı ve koşulları koru; jargon azalt",
      "outputFormat": "Bağlam, 5 bulgu, etkiler, öneriler, riskler ve açık sorular",
      "before": "Bana uzun raporu yönetici özetine çevirme için bir şey hazırla.",
      "after": "ROL\nSen strateji analistisın.\n\nAMAÇ\nUzun raporu karar vericinin hızla anlayacağı yönetici özetine dönüştürmek.\n\nGİRDİLER\n- Rapor: [RAPOR]\n- Alıcı: [ALICI]\n- Beklenen karar: [KARAR]\n- Özet uzunluğu: [UZUNLUK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBağlam, 5 bulgu, etkiler, öneriler, riskler ve açık sorular.\n\nKISITLAR\nRapor dışı çıkarım yaparsan etiketle; kritik sayı ve koşulları koru; jargon azalt.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Bağlam, 5 bulgu, etkiler, öneriler, riskler ve açık sorular.",
      "image": "assets/images/urun2.webp",
      "thumbnail": "assets/images/thumbs/urun2-thumb.webp",
      "collections": [
        "Araştırma Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-15",
      "version": "1.0"
    },
    {
      "id": 55,
      "slug": "haftalik-calisma-plani",
      "title": "Haftalık Çalışma Planı",
      "category": "verimlilik",
      "categoryLabel": "Üretkenlik",
      "subcategory": "Planlama",
      "description": "Hedefleri enerji ve zaman kısıtlarına göre gerçekçi haftalık plana dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "plan",
        "haftalık",
        "zaman"
      ],
      "variables": [
        {
          "key": "HEDEFLER",
          "label": "Haftalık hedefler",
          "default": "JavaScript çalış, projeyi geliştir, spor yap"
        },
        {
          "key": "ZAMAN",
          "label": "Uygun zaman",
          "default": "Hafta içi 18:00–23:00"
        },
        {
          "key": "ONCELIK",
          "label": "En önemli hedef",
          "default": "Promptla projesi"
        },
        {
          "key": "KISIT",
          "label": "Kısıtlar",
          "default": "5 gün spor, okul ödevleri"
        }
      ],
      "versions": {
        "quick": "Hedefleri enerji ve zaman kısıtlarına göre gerçekçi haftalık plana dönüştürmek. Girdi: [HEDEFLER] (Haftalık hedefler); [ZAMAN] (Uygun zaman); [ONCELIK] (En önemli hedef); [KISIT] (Kısıtlar). Çıktıyı günlük bloklar, öncelikler, tampon süre ve haftalık değerlendirme biçiminde ver.",
        "advanced": "Üretkenlik koçu gibi davran. Amacın hedefleri enerji ve zaman kısıtlarına göre gerçekçi haftalık plana dönüştürmek. Kullanacağın bilgiler: [HEDEFLER] (Haftalık hedefler); [ZAMAN] (Uygun zaman); [ONCELIK] (En önemli hedef); [KISIT] (Kısıtlar). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Günlük bloklar, öncelikler, tampon süre ve haftalık değerlendirme. Kısıtlar: Her dakikayı doldurma; dinlenme ve gecikme payı; en fazla 3 ana görev/gün.",
        "expert": "ROL\nSen üretkenlik koçusın.\n\nAMAÇ\nHedefleri enerji ve zaman kısıtlarına göre gerçekçi haftalık plana dönüştürmek.\n\nGİRDİLER\n- Haftalık hedefler: [HEDEFLER]\n- Uygun zaman: [ZAMAN]\n- En önemli hedef: [ONCELIK]\n- Kısıtlar: [KISIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nGünlük bloklar, öncelikler, tampon süre ve haftalık değerlendirme.\n\nKISITLAR\nHer dakikayı doldurma; dinlenme ve gecikme payı; en fazla 3 ana görev/gün.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Her dakikayı doldurma; dinlenme ve gecikme payı; en fazla 3 ana görev/gün",
      "outputFormat": "Günlük bloklar, öncelikler, tampon süre ve haftalık değerlendirme",
      "before": "Bana haftalık çalışma planı için bir şey hazırla.",
      "after": "ROL\nSen üretkenlik koçusın.\n\nAMAÇ\nHedefleri enerji ve zaman kısıtlarına göre gerçekçi haftalık plana dönüştürmek.\n\nGİRDİLER\n- Haftalık hedefler: [HEDEFLER]\n- Uygun zaman: [ZAMAN]\n- En önemli hedef: [ONCELIK]\n- Kısıtlar: [KISIT]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nGünlük bloklar, öncelikler, tampon süre ve haftalık değerlendirme.\n\nKISITLAR\nHer dakikayı doldurma; dinlenme ve gecikme payı; en fazla 3 ana görev/gün.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Günlük bloklar, öncelikler, tampon süre ve haftalık değerlendirme.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Üretkenlik Paketi"
      ],
      "featured": true,
      "weekly": false,
      "createdAt": "2026-07-16",
      "version": "1.0"
    },
    {
      "id": 56,
      "slug": "gorev-onceliklendirme-matrisi",
      "title": "Görev Önceliklendirme Matrisi",
      "category": "verimlilik",
      "categoryLabel": "Üretkenlik",
      "subcategory": "Öncelik",
      "description": "Karışık görev listesini etki, aciliyet ve efora göre sıralamak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "öncelik",
        "görev",
        "proje"
      ],
      "variables": [
        {
          "key": "GOREVLER",
          "label": "Görev listesi",
          "default": "Görevleri yapıştır"
        },
        {
          "key": "HEDEF",
          "label": "Ana hedef",
          "default": "Siteyi portföye hazır hale getirmek"
        },
        {
          "key": "SURE",
          "label": "Kullanılabilir süre",
          "default": "7 gün"
        },
        {
          "key": "EKIP",
          "label": "Kaynak",
          "default": "Tek geliştirici"
        }
      ],
      "versions": {
        "quick": "Karışık görev listesini etki, aciliyet ve efora göre sıralamak. Girdi: [GOREVLER] (Görev listesi); [HEDEF] (Ana hedef); [SURE] (Kullanılabilir süre); [EKIP] (Kaynak). Çıktıyı etki/efor matrisi, sıralı backlog ve bugün yapılacaklar biçiminde ver.",
        "advanced": "Proje yöneticisi gibi davran. Amacın karışık görev listesini etki, aciliyet ve efora göre sıralamak. Kullanacağın bilgiler: [GOREVLER] (Görev listesi); [HEDEF] (Ana hedef); [SURE] (Kullanılabilir süre); [EKIP] (Kaynak). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Etki/efor matrisi, sıralı backlog ve bugün yapılacaklar. Kısıtlar: Bağımlılıkları kontrol et; düşük değerli cilayı kritik hatanın önüne koyma.",
        "expert": "ROL\nSen proje yöneticisisın.\n\nAMAÇ\nKarışık görev listesini etki, aciliyet ve efora göre sıralamak.\n\nGİRDİLER\n- Görev listesi: [GOREVLER]\n- Ana hedef: [HEDEF]\n- Kullanılabilir süre: [SURE]\n- Kaynak: [EKIP]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nEtki/efor matrisi, sıralı backlog ve bugün yapılacaklar.\n\nKISITLAR\nBağımlılıkları kontrol et; düşük değerli cilayı kritik hatanın önüne koyma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Bağımlılıkları kontrol et; düşük değerli cilayı kritik hatanın önüne koyma",
      "outputFormat": "Etki/efor matrisi, sıralı backlog ve bugün yapılacaklar",
      "before": "Bana görev önceliklendirme matrisi için bir şey hazırla.",
      "after": "ROL\nSen proje yöneticisisın.\n\nAMAÇ\nKarışık görev listesini etki, aciliyet ve efora göre sıralamak.\n\nGİRDİLER\n- Görev listesi: [GOREVLER]\n- Ana hedef: [HEDEF]\n- Kullanılabilir süre: [SURE]\n- Kaynak: [EKIP]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nEtki/efor matrisi, sıralı backlog ve bugün yapılacaklar.\n\nKISITLAR\nBağımlılıkları kontrol et; düşük değerli cilayı kritik hatanın önüne koyma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Etki/efor matrisi, sıralı backlog ve bugün yapılacaklar.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Üretkenlik Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-17",
      "version": "1.0"
    },
    {
      "id": 57,
      "slug": "toplanti-notunu-aksiyon-listesine-cevirme",
      "title": "Toplantı Notunu Aksiyon Listesine Çevirme",
      "category": "verimlilik",
      "categoryLabel": "Üretkenlik",
      "subcategory": "Toplantı",
      "description": "Dağınık toplantı notlarını sahipli ve tarihli aksiyonlara dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Başlangıç",
      "tags": [
        "toplantı",
        "aksiyon",
        "not"
      ],
      "variables": [
        {
          "key": "NOT",
          "label": "Toplantı notu",
          "default": "Notları yapıştır"
        },
        {
          "key": "KATILIMCI",
          "label": "Katılımcılar",
          "default": "İsim ve rolleri yaz"
        },
        {
          "key": "TARIH",
          "label": "Toplantı tarihi",
          "default": "21 Temmuz 2026"
        },
        {
          "key": "PROJE",
          "label": "Proje",
          "default": "PROMPTLA"
        }
      ],
      "versions": {
        "quick": "Dağınık toplantı notlarını sahipli ve tarihli aksiyonlara dönüştürmek. Girdi: [NOT] (Toplantı notu); [KATILIMCI] (Katılımcılar); [TARIH] (Toplantı tarihi); [PROJE] (Proje). Çıktıyı kararlar, aksiyon, sorumlu, tarih, risk ve açık soru tablosu biçiminde ver.",
        "advanced": "Operasyon koordinatörü gibi davran. Amacın dağınık toplantı notlarını sahipli ve tarihli aksiyonlara dönüştürmek. Kullanacağın bilgiler: [NOT] (Toplantı notu); [KATILIMCI] (Katılımcılar); [TARIH] (Toplantı tarihi); [PROJE] (Proje). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kararlar, aksiyon, sorumlu, tarih, risk ve açık soru tablosu. Kısıtlar: Sorumlu veya tarih yoksa uydurma; belirsiz alanı işaretle; tekrarları birleştir.",
        "expert": "ROL\nSen operasyon koordinatörüsın.\n\nAMAÇ\nDağınık toplantı notlarını sahipli ve tarihli aksiyonlara dönüştürmek.\n\nGİRDİLER\n- Toplantı notu: [NOT]\n- Katılımcılar: [KATILIMCI]\n- Toplantı tarihi: [TARIH]\n- Proje: [PROJE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKararlar, aksiyon, sorumlu, tarih, risk ve açık soru tablosu.\n\nKISITLAR\nSorumlu veya tarih yoksa uydurma; belirsiz alanı işaretle; tekrarları birleştir.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Sorumlu veya tarih yoksa uydurma; belirsiz alanı işaretle; tekrarları birleştir",
      "outputFormat": "Kararlar, aksiyon, sorumlu, tarih, risk ve açık soru tablosu",
      "before": "Bana toplantı notunu aksiyon listesine çevirme için bir şey hazırla.",
      "after": "ROL\nSen operasyon koordinatörüsın.\n\nAMAÇ\nDağınık toplantı notlarını sahipli ve tarihli aksiyonlara dönüştürmek.\n\nGİRDİLER\n- Toplantı notu: [NOT]\n- Katılımcılar: [KATILIMCI]\n- Toplantı tarihi: [TARIH]\n- Proje: [PROJE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKararlar, aksiyon, sorumlu, tarih, risk ve açık soru tablosu.\n\nKISITLAR\nSorumlu veya tarih yoksa uydurma; belirsiz alanı işaretle; tekrarları birleştir.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kararlar, aksiyon, sorumlu, tarih, risk ve açık soru tablosu.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Üretkenlik Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-18",
      "version": "1.0"
    },
    {
      "id": 58,
      "slug": "karar-matrisi-olusturma",
      "title": "Karar Matrisi Oluşturma",
      "category": "verimlilik",
      "categoryLabel": "Üretkenlik",
      "subcategory": "Karar verme",
      "description": "Birden fazla seçeneği ağırlıklı kriterlerle şeffaf biçimde karşılaştırmak.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "karar",
        "matris",
        "karşılaştırma"
      ],
      "variables": [
        {
          "key": "KARAR",
          "label": "Karar",
          "default": "Hosting seçimi"
        },
        {
          "key": "SECENEK",
          "label": "Seçenekler",
          "default": "InfinityFree, GitHub Pages, ücretli hosting"
        },
        {
          "key": "KRITER",
          "label": "Kriterler",
          "default": "Maliyet, kolaylık, PHP desteği, performans"
        },
        {
          "key": "ONCELIK",
          "label": "En önemli kriter",
          "default": "Kolay kurulum"
        }
      ],
      "versions": {
        "quick": "Birden fazla seçeneği ağırlıklı kriterlerle şeffaf biçimde karşılaştırmak. Girdi: [KARAR] (Karar); [SECENEK] (Seçenekler); [KRITER] (Kriterler); [ONCELIK] (En önemli kriter). Çıktıyı kriter ağırlıkları, puanlama, duyarlılık ve öneri biçiminde ver.",
        "advanced": "Karar analisti gibi davran. Amacın birden fazla seçeneği ağırlıklı kriterlerle şeffaf biçimde karşılaştırmak. Kullanacağın bilgiler: [KARAR] (Karar); [SECENEK] (Seçenekler); [KRITER] (Kriterler); [ONCELIK] (En önemli kriter). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Kriter ağırlıkları, puanlama, duyarlılık ve öneri. Kısıtlar: Puan gerekçesini yaz; veri olmayan yerde varsayım; tek sonucu kesin gerçek gibi sunma.",
        "expert": "ROL\nSen karar analistisın.\n\nAMAÇ\nBirden fazla seçeneği ağırlıklı kriterlerle şeffaf biçimde karşılaştırmak.\n\nGİRDİLER\n- Karar: [KARAR]\n- Seçenekler: [SECENEK]\n- Kriterler: [KRITER]\n- En önemli kriter: [ONCELIK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKriter ağırlıkları, puanlama, duyarlılık ve öneri.\n\nKISITLAR\nPuan gerekçesini yaz; veri olmayan yerde varsayım; tek sonucu kesin gerçek gibi sunma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Puan gerekçesini yaz; veri olmayan yerde varsayım; tek sonucu kesin gerçek gibi sunma",
      "outputFormat": "Kriter ağırlıkları, puanlama, duyarlılık ve öneri",
      "before": "Bana karar matrisi oluşturma için bir şey hazırla.",
      "after": "ROL\nSen karar analistisın.\n\nAMAÇ\nBirden fazla seçeneği ağırlıklı kriterlerle şeffaf biçimde karşılaştırmak.\n\nGİRDİLER\n- Karar: [KARAR]\n- Seçenekler: [SECENEK]\n- Kriterler: [KRITER]\n- En önemli kriter: [ONCELIK]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nKriter ağırlıkları, puanlama, duyarlılık ve öneri.\n\nKISITLAR\nPuan gerekçesini yaz; veri olmayan yerde varsayım; tek sonucu kesin gerçek gibi sunma.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Kriter ağırlıkları, puanlama, duyarlılık ve öneri.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Üretkenlik Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-19",
      "version": "1.0"
    },
    {
      "id": 59,
      "slug": "kisisel-bilgi-bankasi-duzenleme",
      "title": "Kişisel Bilgi Bankası Düzenleme",
      "category": "verimlilik",
      "categoryLabel": "Üretkenlik",
      "subcategory": "Not yönetimi",
      "description": "Dağınık notları bulunabilir bir klasör, etiket ve özet sistemine dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "notion",
        "bilgi yönetimi",
        "not"
      ],
      "variables": [
        {
          "key": "NOT_TURLERI",
          "label": "Not türleri",
          "default": "Ders, proje, fikir, araştırma"
        },
        {
          "key": "ARAC",
          "label": "Kullanılan araç",
          "default": "Notion"
        },
        {
          "key": "SIKLIK",
          "label": "Ekleme sıklığı",
          "default": "Her gün"
        },
        {
          "key": "SORUN",
          "label": "Sorun",
          "default": "Notları tekrar bulamıyorum"
        }
      ],
      "versions": {
        "quick": "Dağınık notları bulunabilir bir klasör, etiket ve özet sistemine dönüştürmek. Girdi: [NOT_TURLERI] (Not türleri); [ARAC] (Kullanılan araç); [SIKLIK] (Ekleme sıklığı); [SORUN] (Sorun). Çıktıyı bilgi mimarisi, şablonlar, etiket kuralları ve haftalık bakım rutini biçiminde ver.",
        "advanced": "Bilgi yönetimi danışmanı gibi davran. Amacın dağınık notları bulunabilir bir klasör, etiket ve özet sistemine dönüştürmek. Kullanacağın bilgiler: [NOT_TURLERI] (Not türleri); [ARAC] (Kullanılan araç); [SIKLIK] (Ekleme sıklığı); [SORUN] (Sorun). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: Bilgi mimarisi, şablonlar, etiket kuralları ve haftalık bakım rutini. Kısıtlar: Çok karmaşık sistem kurma; en fazla 5 ana alan; arşiv kuralı belirle.",
        "expert": "ROL\nSen bilgi yönetimi danışmanısın.\n\nAMAÇ\nDağınık notları bulunabilir bir klasör, etiket ve özet sistemine dönüştürmek.\n\nGİRDİLER\n- Not türleri: [NOT_TURLERI]\n- Kullanılan araç: [ARAC]\n- Ekleme sıklığı: [SIKLIK]\n- Sorun: [SORUN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBilgi mimarisi, şablonlar, etiket kuralları ve haftalık bakım rutini.\n\nKISITLAR\nÇok karmaşık sistem kurma; en fazla 5 ana alan; arşiv kuralı belirle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Çok karmaşık sistem kurma; en fazla 5 ana alan; arşiv kuralı belirle",
      "outputFormat": "Bilgi mimarisi, şablonlar, etiket kuralları ve haftalık bakım rutini",
      "before": "Bana kişisel bilgi bankası düzenleme için bir şey hazırla.",
      "after": "ROL\nSen bilgi yönetimi danışmanısın.\n\nAMAÇ\nDağınık notları bulunabilir bir klasör, etiket ve özet sistemine dönüştürmek.\n\nGİRDİLER\n- Not türleri: [NOT_TURLERI]\n- Kullanılan araç: [ARAC]\n- Ekleme sıklığı: [SIKLIK]\n- Sorun: [SORUN]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\nBilgi mimarisi, şablonlar, etiket kuralları ve haftalık bakım rutini.\n\nKISITLAR\nÇok karmaşık sistem kurma; en fazla 5 ana alan; arşiv kuralı belirle.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "Bilgi mimarisi, şablonlar, etiket kuralları ve haftalık bakım rutini.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Üretkenlik Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-20",
      "version": "1.0"
    },
    {
      "id": 60,
      "slug": "30-gunluk-proje-yol-haritasi",
      "title": "30 Günlük Proje Yol Haritası",
      "category": "verimlilik",
      "categoryLabel": "Üretkenlik",
      "subcategory": "Yol haritası",
      "description": "Belirsiz proje fikrini teslim edilebilir haftalık kilometre taşlarına dönüştürmek.",
      "models": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "level": "Orta",
      "tags": [
        "roadmap",
        "proje",
        "30 gün"
      ],
      "variables": [
        {
          "key": "PROJE",
          "label": "Proje",
          "default": "PROMPTLA statik web uygulaması"
        },
        {
          "key": "HEDEF",
          "label": "30 günlük hedef",
          "default": "Portföye hazır beta"
        },
        {
          "key": "MEVCUT",
          "label": "Mevcut durum",
          "default": "Temel tasarım ve sayfalar hazır"
        },
        {
          "key": "SURE",
          "label": "Günlük süre",
          "default": "2–3 saat"
        }
      ],
      "versions": {
        "quick": "Belirsiz proje fikrini teslim edilebilir haftalık kilometre taşlarına dönüştürmek. Girdi: [PROJE] (Proje); [HEDEF] (30 günlük hedef); [MEVCUT] (Mevcut durum); [SURE] (Günlük süre). Çıktıyı 4 haftalık hedefler, görevler, kabul kriterleri, risk ve demo planı biçiminde ver.",
        "advanced": "Teknik proje yöneticisi gibi davran. Amacın belirsiz proje fikrini teslim edilebilir haftalık kilometre taşlarına dönüştürmek. Kullanacağın bilgiler: [PROJE] (Proje); [HEDEF] (30 günlük hedef); [MEVCUT] (Mevcut durum); [SURE] (Günlük süre). Önce eksik veya çelişkili bilgileri belirt, sonra çözümü üret. Çıktı: 4 haftalık hedefler, görevler, kabul kriterleri, risk ve demo planı. Kısıtlar: Her haftada çalışır çıktı; bağımlılık sırası; son hafta sadece cilaya bırakılmasın.",
        "expert": "ROL\nSen teknik proje yöneticisisın.\n\nAMAÇ\nBelirsiz proje fikrini teslim edilebilir haftalık kilometre taşlarına dönüştürmek.\n\nGİRDİLER\n- Proje: [PROJE]\n- 30 günlük hedef: [HEDEF]\n- Mevcut durum: [MEVCUT]\n- Günlük süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\n4 haftalık hedefler, görevler, kabul kriterleri, risk ve demo planı.\n\nKISITLAR\nHer haftada çalışır çıktı; bağımlılık sırası; son hafta sadece cilaya bırakılmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver."
      },
      "constraints": "Her haftada çalışır çıktı; bağımlılık sırası; son hafta sadece cilaya bırakılmasın",
      "outputFormat": "4 haftalık hedefler, görevler, kabul kriterleri, risk ve demo planı",
      "before": "Bana 30 günlük proje yol haritası için bir şey hazırla.",
      "after": "ROL\nSen teknik proje yöneticisisın.\n\nAMAÇ\nBelirsiz proje fikrini teslim edilebilir haftalık kilometre taşlarına dönüştürmek.\n\nGİRDİLER\n- Proje: [PROJE]\n- 30 günlük hedef: [HEDEF]\n- Mevcut durum: [MEVCUT]\n- Günlük süre: [SURE]\n\nUYGULAMA ADIMLARI\n1. Girdileri ve hedefi doğrula.\n2. Kritik varsayımları ve eksikleri açıkça işaretle.\n3. En uygun yaklaşımı gerekçesiyle seç.\n4. Çalışabilir ana çıktıyı üret.\n5. Sonucu kalite, doğruluk ve uygulanabilirlik açısından kontrol et.\n\nÇIKTI BİÇİMİ\n4 haftalık hedefler, görevler, kabul kriterleri, risk ve demo planı.\n\nKISITLAR\nHer haftada çalışır çıktı; bağımlılık sırası; son hafta sadece cilaya bırakılmasın.\n\nYanıtı Türkçe, net başlıklarla ve doğrudan kullanılabilir biçimde ver.",
      "exampleOutput": "4 haftalık hedefler, görevler, kabul kriterleri, risk ve demo planı.",
      "image": "assets/images/urungorsel3.webp",
      "thumbnail": "assets/images/thumbs/urungorsel3-thumb.webp",
      "collections": [
        "Üretkenlik Paketi"
      ],
      "featured": false,
      "weekly": false,
      "createdAt": "2026-07-01",
      "version": "1.0"
    }
  ],
  "collections": {
    "Web Geliştirici Paketi": [
      1,
      2,
      3,
      4,
      5,
      6,
      24
    ],
    "Görsel Tasarım Paketi": [
      7,
      8,
      10
    ],
    "Sosyal Medya Paketi": [
      9,
      17,
      31,
      32,
      36
    ],
    "E-ticaret Paketi": [
      11,
      34
    ],
    "Oyun Geliştirici Paketi": [
      12,
      19,
      21,
      22
    ],
    "Video Üretim Paketi": [
      13,
      14,
      15,
      16,
      18
    ],
    "3D Tasarım Paketi": [
      20,
      23
    ],
    "Öğrenci Paketi": [
      25,
      26,
      27,
      28,
      29,
      30
    ],
    "Kariyer Paketi": [
      31,
      35,
      37,
      38,
      39,
      40,
      41,
      42
    ],
    "İçerik Üretici Paketi": [
      33
    ],
    "Pazarlama Paketi": [
      43,
      44,
      45,
      46,
      47,
      48
    ],
    "Araştırma Paketi": [
      49,
      50,
      51,
      52,
      53,
      54
    ],
    "Üretkenlik Paketi": [
      55,
      56,
      57,
      58,
      59,
      60
    ]
  },
  "models": [
    {
      "name": "ChatGPT",
      "best": "Genel kullanım, kod, metin, görsel ve öğretme",
      "context": "Uzun konuşma ve dosya desteği",
      "image": "Güçlü",
      "code": "Güçlü",
      "tr": "Güçlü",
      "link": "pages/modeller/chatgpt.html"
    },
    {
      "name": "Claude",
      "best": "Uzun belge, analiz, düzenli yazım ve kod inceleme",
      "context": "Çok uzun belge işleme",
      "image": "Sınırlı / modele göre",
      "code": "Güçlü",
      "tr": "Güçlü",
      "link": "pages/modeller/claude.html"
    },
    {
      "name": "Gemini",
      "best": "Çok modlu çalışma ve Google ekosistemi",
      "context": "Uzun bağlam",
      "image": "Güçlü",
      "code": "Güçlü",
      "tr": "Güçlü",
      "link": "pages/modeller/gemini.html"
    },
    {
      "name": "Copilot",
      "best": "Kod tamamlama ve Microsoft iş akışları",
      "context": "Ürüne göre değişir",
      "image": "Orta",
      "code": "Çok güçlü",
      "tr": "İyi",
      "link": "pages/modeller/copilot.html"
    },
    {
      "name": "Midjourney",
      "best": "Sanatsal ve sinematik görsel üretimi",
      "context": "Görsel prompt odaklı",
      "image": "Çok güçlü",
      "code": "Yok",
      "tr": "İngilizce prompt önerilir",
      "link": "pages/modeller/midjourney.html"
    },
    {
      "name": "Kimi",
      "best": "Uzun içerik ve araştırma akışı",
      "context": "Uzun bağlam",
      "image": "Modele göre",
      "code": "İyi",
      "tr": "İyi",
      "link": "pages/modeller/kimi.html"
    },
    {
      "name": "Meshy",
      "best": "Metinden veya görselden 3D varlık üretimi",
      "context": "3D görev odaklı",
      "image": "3D önizleme",
      "code": "Yok",
      "tr": "İngilizce prompt önerilir",
      "link": "pages/modeller/meshy.html"
    },
    {
      "name": "Runway / Kling",
      "best": "Metin veya görselden video",
      "context": "Kısa sahne talimatı",
      "image": "Video",
      "code": "Yok",
      "tr": "İngilizce prompt önerilir",
      "link": "pages/modeller/video-araclari.html"
    }
  ]
};
