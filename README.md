# Görev Takip Uygulaması (Issue Tracking System)

## Proje Hakkında

Bu proje, yazılım ekipleri ve kurumsal firmalar için geliştirilmiş modern, yüksek performanslı ve tam donanımlı bir Görev Takip (Issue Tracking) platformudur. Kullanıcıların günlük iş akışlarını yönetebilmeleri, sistem yöneticilerinin ise platformu merkezi bir arayüzden kontrol edebilmeleri için endüstri standartlarında (SaaS mimarisinde) tasarlanmıştır.

## Kullanılan Teknolojiler

Proje, full stack geliştirme prensiplerine sadık kalınarak aşağıdaki modern web teknolojileri ile inşa edilmiştir:

### Frontend

- **Next.js 16 (App Router):** Sunucu tarafı oluşturma (SSR) ve optimize edilmiş modern yönlendirme mimarisi için ana iskelet olarak kullanılmıştır.
- **React 19:** Kullanıcı etkileşimlerini yöneten dinamik bileşen (component) mimarisi tabanını oluşturur.
- **Tailwind CSS 4:** Yazılım arayüzünün minimal, şirket odaklı (Premium SaaS) estetiği ve duyarlı (responsive) tasarım dili için kullanılmıştır. Sıkı bir Monochrome (siyah/beyaz/gri) metodolojisi üzerine kurgulanmıştır.
- **React Icons:** Optimizasyonu yüksek arayüz ikonografileri.

### Backend

- **Node.js (Next.js API Routes):** Uygulamanın sunucu tarafındaki mantığı ve istemci veri iletimleri, Next.js içindeki özel Route Handlers (`app/api` dizini) aracılığıyla RESTful standartlarda sağlanmaktadır.
- **Prisma ORM:** Veritabanı modellemesi (`schema.prisma`) ve güvenli sorgu operasyonları için kullanılmıştır. Kod tabanının genişletilebilirliğini ve hata denetimini maksimize eder.
- **MySQL:** Platformun birincil ilişkisel veritabanı yönetim sistemidir (RDBMS).

### Ekran Görüntüsü

![](/public/Ekran%20Resmi%202026-04-13%2021.49.50.png)
![](/public/Ekran%20Resmi%202026-04-13%2021.49.55.png)
![](/public/Ekran%20Resmi%202026-04-13%2021.50.02.png)
![](/public/Ekran%20Resmi%202026-04-13%2021.50.19.png)
![](/public/Ekran%20Resmi%202026-04-13%2021.50.49.png)
![](/public/Ekran%20Resmi%202026-04-13%2021.50.56.png)
![](/public/Ekran%20Resmi%202026-04-13%2021.51.05.png)

## Çekirdek Modüller ve Özellikler

### Kullanıcı Paneli (Main Layout)

- **Kanban Görev Panosu:** İşlerin güncel statüsüne göre (To Do, In Progress, Done) takip edilebilmesini sağlayan görsel arayüz.
- **İş Kaydı Formu:** Dinamik bileşenlerle öncelik ve sistem personeli atama yapısı.
- **Dashboard (Sistem Özeti):** Aktif görev dağılımı ve genel sistem verimliliğinin analizi.

### Yönetim Merkezi (Admin Layout)

- **Erişim Yönetimi:** Sistemdeki kullanıcıların kurumsal tablo görünümünde detaylı listelenmesi, rol ve durum (Aktif/Pasif) gösterimleri.
- **Sistem Logları:** Uygulama üzerinde gerçekleşen terminal güncellemeleri, veritabanı hareketleri ve kritik SMTP/Sunucu hatalarının anlık akışı.
- **Konfigürasyon (Sistem Ayarları):** Uygulamanın dil ayarları, sisteme dışarıdan girişi kısıtlayan "Maintenance Mode" (Bakım Modu) kontrolü ve dış kayıt izinlerinin yönetimi.

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (V20 veya üzeri)
- MySQL Veritabanı Sunucusu (Lokal XAMPP/MAMP veya Aiven gibi Bulut çözümleri)

### Adımlar

1. **Bağımlılıkların Yüklenmesi:**
   Proje kök dizininde komut satırını açıp ilgili modülleri temin edin.

   ```bash
   npm install
   ```

2. **Veritabanı Yapılandırması:**
   Aynı dizinde bulunan `.env` dosyası içerisindeki `DATABASE_URL` parametresini kendi MySQL bağlantı (Connection URI) kimliğiniz ile değiştirin.

   ```env
   DATABASE_URL="mysql://kullaniciadi:sifre@localhost:3306/veritabaniniz"
   ```

3. **Veritabanı Tablolarının Senkronizasyonu:**
   Prisma üzerindeki şemaları doğrudan MySQL veritabanınızda fiziksel tablolara dönüştürmek için aşağıdaki komutu çalıştırın.

   ```bash
   npx prisma db push
   ```

4. **Geliştirici Sunucusunun Başlatılması:**
   Tüm ön ayarlar tamamlandıktan sonra uygulamanın lokal sunucu servisini ayağa kaldırın.

   ```bash
   npm run dev
   ```

5. **Uygulamaya Erişim:**
   Tarayıcınız üzerinden platforma giriş sağlamak için `http://localhost:3000` adresini ziyaret edin. Yönetim paneline `http://localhost:3000/admin` üzerinden geçiş yapabilirsiniz.
