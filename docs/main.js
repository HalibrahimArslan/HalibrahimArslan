import { LayerViz } from "./layers.js";

const dict = {
  en: {
    skip: "Skip to content",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.stack": "Skills",
    "nav.contact": "Contact",
    "hero.lead": "I design and build backend systems with Java and Spring Boot: DDD and hexagonal architecture, reliable event-driven integration with RabbitMQ, and tests that run against a real database and queue. When needed, I take on the frontend with Next.js and React as well.",
    "hero.cta1": "See my projects",
    "hero.cta2": "Get in touch",
    "projects.h": "Projects",
    "projects.intro": "A selection of projects I've built. Java first, then the full-stack side. All of the code is on GitHub.",

    "w.kind": "Java, end-to-end warehouse management system",
    "w.desc": "A warehouse management system that runs warehouse operations from receiving and put-away to picking, counting and shipping, independent of any ERP. Spring Boot backend and React frontend live in separate repositories; Docker Compose brings everything up with one command.",
    "w.p1": "An ERP-independent core: the Mikro and Uyumsoft integrations are adapters of a single ErpOrderGateway contract. Adding a new ERP means writing one service that implements that interface; with no ERP connected, the system runs on local data.",
    "w.p2": "The lifecycle of each unique barcode is managed with Spring Statemachine, and pick-location selection with the Strategy pattern.",
    "w.p3": "Audit history with Hibernate Envers, authorisation with Spring Security and JWT, caching with JCache, schema management with Liquibase.",
    "w.p4": "Integration tests run on Testcontainers with PostgreSQL 18; API contract tests compare the responses of every endpoint the frontend uses against recorded snapshots and catch breaking changes.",
    "w.p5": "For production: Actuator and Prometheus metrics, Sentry error tracking, structured logs, MinIO file storage, WebSocket notifications and embedded Metabase reports.",
    "w.l1": "Backend repository",
    "w.l2": "Frontend repository",
    "w.d1": "single REST endpoint",
    "w.d2": "picks by the company's ERP type",
    "w.d3": "finds adapters at startup",
    "w.cap": "Whichever ERP is connected, the adapters return the same canonical DTOs, so the response the frontend sees never changes.",

    "q.kind": "Java, two event-driven services",
    "q.desc": "Two Spring Boot services that sync products and stock between a back office and an e-commerce storefront. It solves the hard parts of messaging against real infrastructure.",
    "q.p1": "Transactional outbox: the state change and the event are written in the same transaction; the relay publishes with FOR UPDATE SKIP LOCKED so several instances never clash, and waits for publisher confirms in parallel.",
    "q.p2": "At-least-once delivery: idempotent handling and version checks on the consumer side mean duplicate or out-of-order messages still produce the right result.",
    "q.p3": "Architecture rules are enforced with ArchUnit tests; the storefront service was moved step by step from hexagonal to onion architecture.",
    "q.p4": "Acceptance scenarios run with Cucumber, and integration tests with Testcontainers against real RabbitMQ and PostgreSQL.",
    "q.codec": "// same transaction",

    "h.kind": "Java, hexagonal architecture",
    "h.desc": "A Spring Boot project that applies hexagonal architecture through a small order service. Every design decision is written down with its reasoning in the README.",
    "h.p1": "The domain is separate from JPA and immutable; an invalid order object can't be created, and the persistence adapter does the mapping.",
    "h.p2": "The application layer doesn't depend on Spring; use case tests run without a Spring context or Mockito.",
    "h.p3": "Persistable removes the needless SELECT before each insert; the number of SQL statements is verified by a test.",
    "h.p4": "Every layer has its own tests: domain, use case, @WebMvcTest, @DataJpaTest and @SpringBootTest. 33 tests in total.",

    "projects.java": "More Java work",
    "sr.desc": "Retry and recovery scenarios with Spring Retry: which errors to retry, exponential backoff and attempt limits, and a controlled fallback with @Recover at the end.",
    "g.desc": "A schema-first API with Spring for GraphQL; JPA entities, relations and custom scalar types.",

    "projects.ts": "Full-stack and TypeScript",
    "rm.kind": "Web application",
    "rm.desc": "Turns merged GitLab and GitHub merge requests into a release document with screenshots that a customer can actually read. It captures the screens of the test environment with Playwright, works out with rules which change affected which screen, and opens the result in the web UI, in presentation mode, and as Markdown or PDF.",
    "rm.alt": "Release Manager release document screen, with changed areas outlined in orange",
    "rm.cap": "Screenshot from a fictional demo project.",
    "pa.desc": "An open-source npm package that brings the Hibernate Envers approach to Prisma: every change to a marked model is written to a history table under a central revision, and you can go back to any revision and compare versions. Tested in CI on PostgreSQL, MySQL and SQLite.",
    "s.desc": "A lightweight PowerPoint alternative for in-site announcements and short presentations.",
    "r.desc": "Dijkstra, A*, Bellman-Ford, and 2-opt, Or-opt and Held-Karp for the travelling salesman problem, with results visualised in notebooks.",

    "about.h": "About me",
    "about.p1": "I'm a software engineer building backends in the Java and Spring Boot ecosystem. I care about keeping the domain model independent of frameworks, designing communication between services with failure in mind, and documenting behaviour with tests. My most comprehensive work, Open WMS, is a warehouse management system I built end to end, from the data model to monitoring in production.",
    "about.p2": "I also work with Next.js and React on the frontend, and NestJS and Prisma on the TypeScript side. That lets me carry a feature from the database to the interface on my own, and act as a bridge between backend and frontend in a team.",
    "of.h": "What I bring to a team",
    "o1.h": "Backend architecture",
    "o1.p": "Maintainable services built with DDD, hexagonal and onion architecture, with their rules protected by tests.",
    "o2.h": "Reliable integration",
    "o2.p": "RabbitMQ, the transactional outbox, idempotent consumers, retry and backoff strategies.",
    "o3.h": "Testing discipline",
    "o3.p": "Unit and slice tests, integration tests with Testcontainers, acceptance tests with Cucumber, and architecture rules with ArchUnit.",
    "o4.h": "End-to-end ownership",
    "o4.p": "Taking a feature all the way to production, including the interface, Docker, monitoring and deployment when needed.",

    "stack.h": "Skills",
    "stack.java": "Java and Spring",
    "stack.data": "Data and messaging",
    "stack.test": "Testing",
    "stack.arch": "Architecture",
    "stack.archv": "DDD, hexagonal, onion, event-driven systems, transactional outbox",
    "stack.tools": "Tools",
    "stack.front": "Frontend and TypeScript",

    "contact.h": "Contact",
    "contact.p": "I'm open to conversations about senior Java roles. If your team needs a Java engineer, you can reach me by email."
  }
};

const nodes = [...document.querySelectorAll("[data-i18n]")];
const altNodes = [...document.querySelectorAll("[data-i18n-alt]")];
const tr = {};
nodes.forEach(n => { tr[n.dataset.i18n] = n.textContent; });
altNodes.forEach(n => { tr[n.dataset.i18nAlt] = n.alt; });
dict.tr = tr;

const btn = document.getElementById("lang");
let lang = "tr";

function setLang(l) {
  lang = l;
  const d = dict[l];
  nodes.forEach(n => { const v = d[n.dataset.i18n]; if (v) n.textContent = v; });
  altNodes.forEach(n => { const v = d[n.dataset.i18nAlt]; if (v) n.alt = v; });
  document.documentElement.lang = l;
  btn.textContent = l === "tr" ? "EN" : "TR";
  btn.setAttribute("aria-label", l === "tr" ? "Switch to English" : "Türkçeye geç");
  try { localStorage.setItem("lang", l); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const initial = saved || ((navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en");
if (initial !== "tr") setLang(initial);
btn.addEventListener("click", () => setLang(lang === "tr" ? "en" : "tr"));

new LayerViz(document.getElementById("hero-viz"));
