# Merhaba 👋 Ben Halil İbrahim Arslan

## Software Engineer

> Full-stack: TypeScript tarafında Next.js & NestJS, JVM tarafında Spring Boot. Veri katmanında Prisma.

### ⭐ [Open WMS](https://github.com/HalibrahimArslan/open-wms): uçtan uca depo yönetim sistemi

Mal kabulden adreslemeye, toplamadan sayım ve sevkiyata kadar depo operasyonlarını yöneten, ERP'den bağımsız bir depo yönetim sistemi. Spring Boot backend ve React arayüzü ayrı depolarda ([backend](https://github.com/HalibrahimArslan/open-wms) · [arayüz](https://github.com/HalibrahimArslan/open-wms-app)); Docker Compose ile tek komutta ayağa kalkıyor.

- **ERP'den bağımsız çekirdek:** Mikro ve Uyumsoft entegrasyonları tek bir `ErpOrderGateway` sözleşmesinin adaptörleri. Yeni bir ERP için bu arayüzü uygulayan bir servis yazmak yetiyor; ERP bağlı değilse sistem yerel veriyle çalışıyor.
- **İş akışları:** Benzersiz barkodun yaşam döngüsü Spring Statemachine ile, toplama adresi seçimi Strategy deseniyle yönetiliyor.
- **Altyapı:** Hibernate Envers ile denetim kaydı, Spring Security ve JWT ile yetkilendirme, JCache ile önbellek, Liquibase ile şema yönetimi.
- **Test:** Testcontainers üzerinde PostgreSQL 18 ile entegrasyon testleri; API sözleşme testleri arayüzün kullandığı uçların yanıtlarını kayıtlı snapshot'larla karşılaştırıyor.
- **Canlı ortam:** Actuator ve Prometheus metrikleri, Sentry, yapılandırılmış loglar, MinIO, WebSocket bildirimleri, gömülü Metabase raporları.

`Java 25` `Spring Boot 4` `Spring Security` `Spring Data JPA` `Hibernate Envers` `Spring Statemachine` `Liquibase` `PostgreSQL` `MapStruct` `Testcontainers` `React` `MUI` `Docker`

- 🌐 Portfolyo: **[halibrahimarslan.github.io/HalibrahimArslan](https://halibrahimarslan.github.io/HalibrahimArslan/)**
- 🌍 Türkiye'de yaşıyorum
- ✉️ Bana ulaşabilirsin: [arslan.halibrahim@gmail.com](mailto:arslan.halibrahim@gmail.com)
- 🚀 Şu an üzerinde çalıştıklarım: **[Release-Manager](https://github.com/HalibrahimArslan/Release-Manager)** (NestJS + React monorepo) ve **[prisma-audit](https://github.com/HalibrahimArslan/prisma-audit)**
- 🧠 İlgi alanım: hexagonal architecture, veri denetimi (audit log), monorepo kurgusu
- 🤝 Web geliştirme konusunda iş birliğine açığım
- ⚡ TypeScript ile yazmayı seviyorum

![Followers](https://img.shields.io/github/followers/HalibrahimArslan?label=FOLLOWERS&style=for-the-badge&color=181717&labelColor=181717)

---

## Skillset

**Diller**

[![Diller](https://skillicons.dev/icons?i=ts,js,java,dart,html,css,bash)](https://skillicons.dev)

**Framework & Kütüphaneler**

[![Frameworkler](https://skillicons.dev/icons?i=nextjs,react,nodejs,nestjs,spring,flutter,graphql,tailwind,materialui,vite)](https://skillicons.dev)

**Veritabanı & Araçlar**

[![Araclar](https://skillicons.dev/icons?i=prisma,postgres,mysql,mongodb,docker,git,github,linux,vscode)](https://skillicons.dev)

---

## Öne Çıkan Projeler

| Proje | Ne yapıyor | Stack |
| --- | --- | --- |
| [Open WMS](https://github.com/HalibrahimArslan/open-wms) | ERP'den bağımsız, uçtan uca depo yönetim sistemi ([arayüz](https://github.com/HalibrahimArslan/open-wms-app)) | Java 25, Spring Boot 4, Hibernate Envers, Spring Statemachine, Liquibase, PostgreSQL, React |
| [Release-Manager](https://github.com/HalibrahimArslan/Release-Manager) | Sürüm yönetimi için API + web arayüzü, pnpm monorepo | NestJS, Prisma, PostgreSQL, React, MUI, Vite, Playwright |
| [prisma-audit](https://github.com/HalibrahimArslan/prisma-audit) | Prisma için Hibernate Envers tarzı denetim: `*Aud` tabloları, `Revision` kaydı ve `AuditReader` | TypeScript, Prisma, Node.js CLI |
| [hexagonal-architecture-java](https://github.com/HalibrahimArslan/hexagonal-architecture-java) | Hexagonal (ports & adapters) mimarisi uygulaması | Java, Hibernate, JUnit, ArchUnit, Maven |
| [spring-retry-recovery](https://github.com/HalibrahimArslan/spring-retry-recovery) | Spring Retry ile yeniden deneme ve recovery senaryoları | Spring Boot, Spring AOP |
| [nextjs-dashboard](https://github.com/HalibrahimArslan/nextjs-dashboard) | Kimlik doğrulamalı dashboard uygulaması | Next.js, NextAuth, PostgreSQL, Zod, Tailwind |

---

## Socials

[![Portfolyo](https://img.shields.io/badge/Portfolyo-4F8DFF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://halibrahimarslan.github.io/HalibrahimArslan/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HalibrahimArslan)
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:arslan.halibrahim@gmail.com)

---

## İstatistikler

![Stats](https://github-readme-stats.vercel.app/api?username=HalibrahimArslan&show_icons=true&hide_border=true)
![En cok kullandigim diller](https://github-readme-stats.vercel.app/api/top-langs/?username=HalibrahimArslan&layout=compact&hide_border=true)
