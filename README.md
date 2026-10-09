# Merhaba 👋 Ben Halil İbrahim Arslan

## Senior Java Engineer

> Java ve Spring Boot ile backend sistemleri tasarlıyor ve geliştiriyorum: DDD ve hexagonal mimari, RabbitMQ ile güvenilir olay tabanlı entegrasyon, gerçek veritabanı ve kuyruğa karşı koşan testler. Gerektiğinde Next.js ve React ile ön yüzü de üstleniyorum.

- 🌐 Portfolyo: **[halibrahimarslan.github.io/HalibrahimArslan](https://halibrahimarslan.github.io/HalibrahimArslan/)**
- 🌍 Türkiye'de yaşıyorum
- ✉️ Bana ulaşabilirsin: [arslan.halibrahim@gmail.com](mailto:arslan.halibrahim@gmail.com)
- 💼 Senior Java pozisyonları için görüşmeye açığım

### ⭐ [Open WMS](https://github.com/HalibrahimArslan/open-wms): uçtan uca depo yönetim sistemi

Mal kabulden adreslemeye, toplamadan sayım ve sevkiyata kadar depo operasyonlarını yöneten, ERP'den bağımsız bir depo yönetim sistemi. Spring Boot backend ve React arayüzü ayrı depolarda ([backend](https://github.com/HalibrahimArslan/open-wms) · [arayüz](https://github.com/HalibrahimArslan/open-wms-app)); Docker Compose ile tek komutta ayağa kalkıyor.

- **ERP'den bağımsız çekirdek:** Mikro ve Uyumsoft entegrasyonları tek bir `ErpOrderGateway` sözleşmesinin adaptörleri. Yeni bir ERP için bu arayüzü uygulayan bir servis yazmak yetiyor; ERP bağlı değilse sistem yerel veriyle çalışıyor.
- **İş akışları:** Benzersiz barkodun yaşam döngüsü Spring Statemachine ile, toplama adresi seçimi Strategy deseniyle yönetiliyor.
- **Altyapı:** Hibernate Envers ile denetim kaydı, Spring Security ve JWT ile yetkilendirme, JCache ile önbellek, Liquibase ile şema yönetimi.
- **Test:** Testcontainers üzerinde PostgreSQL 18 ile entegrasyon testleri; API sözleşme testleri arayüzün kullandığı uçların yanıtlarını kayıtlı snapshot'larla karşılaştırıyor.
- **Canlı ortam:** Actuator ve Prometheus metrikleri, Sentry, yapılandırılmış loglar, MinIO, WebSocket bildirimleri, gömülü Metabase raporları.

`Java 25` `Spring Boot 4` `Spring Security` `Spring Data JPA` `Hibernate Envers` `Spring Statemachine` `Liquibase` `PostgreSQL` `MapStruct` `Testcontainers` `React` `MUI` `Docker`

---

## Öne Çıkan Projeler

### Java

| Proje | Ne yapıyor | Stack |
| --- | --- | --- |
| [Open WMS](https://github.com/HalibrahimArslan/open-wms) | ERP'den bağımsız, uçtan uca depo yönetim sistemi ([arayüz](https://github.com/HalibrahimArslan/open-wms-app)) | Java 25, Spring Boot 4, Hibernate Envers, Spring Statemachine, Liquibase, PostgreSQL, React |
| [rabbit-lab](https://github.com/HalibrahimArslan/queue-app) | Backoffice ile vitrin arasında ürün ve stok senkronizasyonu: transactional outbox (`FOR UPDATE SKIP LOCKED`), at-least-once teslim, idempotent tüketici, ArchUnit ile korunan hexagonal → onion geçişi | Java 21, Spring Boot 4.1, RabbitMQ, PostgreSQL, Flyway, Cucumber, Testcontainers |
| [hexagonal-101](https://github.com/HalibrahimArslan/hexagonal-101) | Hexagonal mimariyle sipariş servisi: JPA'dan ayrı değişmez domain, Spring'siz application katmanı, katman başına testler (33 test) | Java 17, Spring Boot 4.1, Spring Data JPA, H2, JUnit 5 |
| [spring-retry-recovery](https://github.com/HalibrahimArslan/spring-retry-recovery) | Spring Retry ile yeniden deneme, üstel backoff ve `@Recover` senaryoları | Java 21, Spring Boot, Spring Retry, Spring AOP |
| [graphql-spring-boot](https://github.com/HalibrahimArslan/graphql-spring-boot) | Spring for GraphQL ile şema öncelikli API | Java 17, Spring Boot, Spring for GraphQL, Spring Data JPA |

### Full-stack ve TypeScript

| Proje | Ne yapıyor | Stack |
| --- | --- | --- |
| [Release-Manager](https://github.com/HalibrahimArslan/Release-Manager) | Birleşmiş MR/PR'lardan ekran görüntülü sürüm dokümanı üretir; web, sunum, Markdown ve PDF çıktısı | NestJS, Prisma, PostgreSQL, React, MUI, Playwright |
| [prisma-audit](https://github.com/HalibrahimArslan/prisma-audit) | Hibernate Envers yaklaşımını Prisma'ya taşıyan açık kaynak npm paketi: `*Aud` tabloları, `Revision` kaydı ve `AuditReader` | TypeScript, Prisma, Node.js CLI |

---

## Yetenekler

**Java ve backend**

[![Backend](https://skillicons.dev/icons?i=java,spring,maven,gradle,rabbitmq,graphql)](https://skillicons.dev)

**Veri ve altyapı**

[![Altyapı](https://skillicons.dev/icons?i=postgres,mysql,mongodb,docker,git,github,linux)](https://skillicons.dev)

**Frontend ve TypeScript**

[![Frontend](https://skillicons.dev/icons?i=ts,react,nextjs,nestjs,prisma,materialui)](https://skillicons.dev)

- **Spring:** Spring Boot, Spring Security, Spring Data JPA, Hibernate, Hibernate Envers, Spring AMQP, Spring Statemachine, Spring Retry, Spring for GraphQL
- **Test:** JUnit 5, Testcontainers, Cucumber, ArchUnit, Playwright
- **Mimari:** DDD, hexagonal, onion, olay tabanlı sistemler, transactional outbox

---

## İletişim

[![Portfolyo](https://img.shields.io/badge/Portfolyo-4F8DFF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://halibrahimarslan.github.io/HalibrahimArslan/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HalibrahimArslan)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:arslan.halibrahim@gmail.com)

---

## İstatistikler

![Stats](https://github-readme-stats.vercel.app/api?username=HalibrahimArslan&show_icons=true&hide_border=true)
![En cok kullandigim diller](https://github-readme-stats.vercel.app/api/top-langs/?username=HalibrahimArslan&layout=compact&hide_border=true)
