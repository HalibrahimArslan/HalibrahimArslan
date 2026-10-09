/* Nested system layers, from the idea at the centre to production at the edge.
   One job for the motion: a release wave travels outwards through the layers,
   and a thin ring leaves the outer edge as the release goes live.
   In story mode there is no wave; the layers built so far stay lit. */

export const LAYERS = ["#ffd166", "#ffa94d", "#ff7a5c", "#f2557f", "#c660d6", "#8a6cff", "#4f8dff"];

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const ease = t => 1 - Math.pow(1 - t, 3);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

function rgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${clamp(a)})`;
}

function hexPath(ctx, x, y, r) {
  ctx.beginPath();
  for (let k = 0; k < 6; k++) {
    const a = (Math.PI / 3) * k;
    const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
    k ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  }
  ctx.closePath();
}

export class LayerViz {
  constructor(canvas, { labels = null, scale = 0.44, story = false } = {}) {
    this.c = canvas;
    this.ctx = canvas.getContext("2d");
    this.labels = labels;          // () => [centre label, edge label], or null for none
    this.scale = scale;
    this.story = story;
    this.n = LAYERS.length;
    this.active = null;
    this.lit = LAYERS.map(() => (story ? 0 : 1));
    this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    this.start = performance.now();
    this.waveT0 = this.start + 1500;
    this.running = false;

    this.resize = this.resize.bind(this);
    this.frame = this.frame.bind(this);
    new ResizeObserver(this.resize).observe(canvas);

    if (!reduce && !story) {
      window.addEventListener("pointermove", e => {
        const r = canvas.getBoundingClientRect();
        this.mouse.tx = clamp((e.clientX - (r.left + r.width / 2)) / r.width, -1, 1);
        this.mouse.ty = clamp((e.clientY - (r.top + r.height / 2)) / r.height, -1, 1);
      }, { passive: true });
    }

    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !this.running) { this.running = true; requestAnimationFrame(this.frame); }
      else if (!e.isIntersecting) this.running = false;
    }).observe(canvas);
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = this.c.getBoundingClientRect();
    this.w = width; this.h = height;
    this.c.width = Math.round(width * dpr);
    this.c.height = Math.round(height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.draw(performance.now());
  }

  setActive(i) { this.active = i; }

  frame(now) {
    if (!this.running) return;
    this.draw(now);
    if (!reduce) requestAnimationFrame(this.frame);
  }

  draw(now) {
    const { ctx, w, h, n } = this;
    if (!w || !h) return;
    ctx.clearRect(0, 0, w, h);

    const m = this.mouse;
    m.x += (m.tx - m.x) * 0.05;
    m.y += (m.ty - m.y) * 0.05;

    const cx = w / 2, cy = h / 2;
    const R = Math.min(w, h) * this.scale;
    const t = now - this.start;

    // the wave: position 0 at the idea, 1 at production, repeating
    const PERIOD = 4600, TRAVEL = 2000;
    let wave = -1, ship = -1;
    if (!reduce && !this.story && now > this.waveT0) {
      const local = (now - this.waveT0) % PERIOD;
      wave = local / TRAVEL;
      ship = (local - TRAVEL * 0.85) / 1400;
    }

    // soft light behind the idea
    const coreGlow = wave >= 0 ? Math.max(0, 1 - wave * 2.5) : 0;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.7);
    g.addColorStop(0, `rgba(255,200,110,${0.2 + coreGlow * 0.18})`);
    g.addColorStop(1, "rgba(255,200,110,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    ctx.lineJoin = "round";
    for (let i = n - 1; i >= 0; i--) {
      const col = LAYERS[i];
      const appear = reduce ? 1 : ease(clamp((t - 100 - i * 110) / 700));
      const r = R * (0.16 + 0.84 * (i / (n - 1))) * appear;
      const depth = (n - i) * 2.2;
      const x = cx + m.x * depth, y = cy + m.y * depth;

      // how lit this ring is
      let k;
      if (this.story) {
        const target = this.active === null ? 0.35 : i < this.active ? 0.45 : i === this.active ? 1 : 0;
        this.lit[i] += (target - this.lit[i]) * 0.12;
        k = this.lit[i];
      } else {
        const d = wave - i / (n - 1);
        k = wave >= 0 ? Math.exp(-(d * d) / 0.012) : 0;
      }

      hexPath(ctx, x, y, r);
      if (i === 0) {
        ctx.fillStyle = rgba(col, 0.9);
        ctx.shadowColor = col; ctx.shadowBlur = 24 + coreGlow * 24;
        ctx.fill();
        ctx.shadowBlur = 0;
        continue;
      }
      if (this.story && i === this.active) {
        ctx.fillStyle = rgba(col, 0.08 * k);
        ctx.fill();
      }
      ctx.lineWidth = 1.25 + k * 1.75;
      ctx.strokeStyle = rgba(col, 0.24 + k * 0.76);
      if (k > 0.3) { ctx.shadowColor = col; ctx.shadowBlur = 16 * k; }
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // the release leaves the outer edge
    if (ship > 0 && ship < 1) {
      const e = ease(ship);
      hexPath(ctx, cx, cy, R * (1 + e * 0.22));
      ctx.lineWidth = 1.25;
      ctx.strokeStyle = rgba(LAYERS[n - 1], (1 - e) * 0.7);
      ctx.stroke();
    }

    // only two words: where it starts and where it ends
    if (this.labels) {
      const [inner, outer] = this.labels();
      const a = reduce ? 1 : clamp((t - 900) / 600);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 ${clamp(R * 0.06, 12, 16)}px "Schibsted Grotesk", system-ui, sans-serif`;
      ctx.fillStyle = `rgba(42,27,0,${a})`;
      ctx.fillText(inner, cx + m.x * n * 2.2, cy + m.y * n * 2.2);
      ctx.font = `600 ${clamp(R * 0.05, 12, 15)}px "Schibsted Grotesk", system-ui, sans-serif`;
      ctx.fillStyle = `rgba(160,168,208,${a})`;
      ctx.fillText(outer, cx + m.x * 2.2, cy + R * Math.sin(Math.PI / 3) + 26);
    }
  }
}
