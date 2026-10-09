"use client";

// Hero animation: Design → Build → SEO → Conversion loop (17.5s), from the
// design handoff. Authored on a 1000×1000 stage and scaled to fit its
// container width. Transparent background; decorative (aria-hidden).
import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

const Easing = {
  easeOutCubic: (t: number) => (--t) * t * t + 1,
  easeInOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeOutBack: (t: number) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
};

// Scene timeline (seconds). Edit durations here to retime; choreography is keyed to these cues.
const SCENES: [string, number][] = [['Design', 4.5], ['Build', 4.5], ['SEO', 3.5], ['Convert', 4], ['Outro', 1]];
const CUES: Record<string, number> = {}; let _acc = 0; SCENES.forEach(([n, d]) => { CUES[n] = _acc; _acc += d; });
const TOTAL = _acc; // 17.5s
const REDUCED_MOTION_FRAME = 8.3; // static frame shown when prefers-reduced-motion

const TimeCtx = createContext(0);
const useComposition = () => ({ T: useContext(TimeCtx), CUES });

const FONT = 'var(--font-geist), system-ui, sans-serif';
const MONO = 'var(--font-geist-mono), ui-monospace, monospace';
const INK = '#E9ECEF', DIM = '#8A929C', SURF = '#12161B', SURF2 = '#181D24', LINE = 'rgba(255,255,255,0.08)';

const c01 = (v: number) => Math.max(0, Math.min(1, v));
function useMotion(T: number) {
  const at = (s: number, d: number) => c01((T - s) / d);
  return {
    enter: (s: number, d = 0.6) => Easing.easeOutCubic(at(s, d)),
    draw: (s: number, d = 0.6) => Easing.easeInOutCubic(at(s, d)),
    pop: (s: number, d = 0.5) => Easing.easeOutBack(at(s, d)),
  };
}
type Motion = ReturnType<typeof useMotion>;

function kf(T: number, frames: number[][]): number[] {
  if (T <= frames[0][0]) return frames[0].slice(1);
  for (let i = 0; i < frames.length - 1; i++) {
    const a = frames[i], b = frames[i + 1];
    if (T < b[0]) {
      const u = Easing.easeInOutCubic((T - a[0]) / (b[0] - a[0]));
      return a.slice(1).map((v, k) => v + (b[k + 1] - v) * u);
    }
  }
  return frames[frames.length - 1].slice(1);
}
const bump = (T: number, t0: number, w = 0.14) => Math.max(0, 1 - Math.abs(T - t0) / w);
const abs = (x: number, y: number, w?: number | string, h?: number | string, extra?: CSSProperties): CSSProperties =>
  ({ position: 'absolute', left: x, top: y, width: w, height: h, ...extra });

// A page element that goes wireframe → styled → real content.
type BlockProps = { x: number; y: number; w: number; h: number; r?: number; appear: number; fill: number; real?: number; color: string; keepFill?: boolean; children?: ReactNode; style?: CSSProperties };
function Block({ x, y, w, h, r = 6, appear, fill, real = 0, color, keepFill, children, style }: BlockProps) {
  return (
    <div style={abs(x, y, w, h, { opacity: appear, transform: `scale(${0.94 + 0.06 * appear})`, transformOrigin: 'left center' })}>
      <div style={abs(0, 0, w, h, { borderRadius: r, border: '1.5px dashed rgba(255,255,255,0.3)', boxSizing: 'border-box', opacity: 1 - fill })}></div>
      <div style={abs(0, 0, w, h, { borderRadius: r, background: color, opacity: fill * (keepFill ? 1 : 1 - real), ...style })}></div>
      {children ? <div style={abs(0, 0, w, h, { opacity: real, display: 'flex', alignItems: 'center' })}>{children}</div> : null}
    </div>
  );
}

function Cursor({ x, y, o, s }: { x: number; y: number; o: number; s: number }) {
  return (
    <div style={abs(x, y, 28, 28, { opacity: o, transform: `scale(${s})`, transformOrigin: '0 0', zIndex: 50, filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' })}>
      <svg width="28" height="28" viewBox="0 0 28 28"><path d="M3 2 L3 22 L8.5 17 L12.5 26 L16 24.5 L12 15.8 L19.5 15.5 Z" fill="#fff" stroke="#0A0C10" strokeWidth="1.5" strokeLinejoin="round" /></svg>
    </div>
  );
}

const CODE = (a: string): [string, string][][] => {
  const P = '#6B7480', TG = '#F29C7B', AT = '#9CC5FF', TX = '#D6D9DE', ST = a;
  return [
    [[P, '<'], [TG, 'nav'], [P, '>'], [TX, 'Ember'], [P, '</'], [TG, 'nav'], [P, '>']],
    [[P, '<'], [TG, 'section'], [TX, ' '], [AT, 'class'], [P, '='], [ST, '"hero"'], [P, '>']],
    [[TX, '  '], [P, '<'], [TG, 'h1'], [P, '>'], [TX, 'Slow mornings,']],
    [[TX, '    better coffee.'], [P, '</'], [TG, 'h1'], [P, '>']],
    [[TX, '  '], [P, '<'], [TG, 'a'], [TX, ' '], [AT, 'class'], [P, '='], [ST, '"cta"'], [P, '>'], [TX, 'Shop beans'], [P, '</'], [TG, 'a'], [P, '>']],
    [[P, '</'], [TG, 'section'], [P, '>']],
    [],
    [[AT, '.cta'], [P, ' { '], [TX, 'background'], [P, ': '], [ST, 'var(--accent)'], [P, '; }']],
  ];
};

function Editor({ T, B, S, accent, m }: { T: number; B: number; S: number; accent: string; m: Motion }) {
  const lines = CODE(accent);
  const total = lines.reduce((n, l) => n + l.reduce((k, t) => k + t[1].length, 0), 0);
  let left = Math.floor(total * c01((T - (B + 0.7)) / 2.8));
  const typing = left < total;
  const inn = m.enter(B + 0.1, 0.7), out = m.draw(S - 0.45, 0.5);
  const deployed = m.pop(B + 3.7, 0.5);
  let caretPlaced = false;
  return (
    <div style={abs(30, 430, 450, 330, { opacity: inn * (1 - out), transform: `translate(${-50 * (1 - inn) - 40 * out}px, ${20 * (1 - inn)}px)`, background: '#0D1014', border: `1px solid ${LINE}`, borderRadius: 14, boxShadow: '0 30px 60px rgba(0,0,0,0.55)', overflow: 'hidden', zIndex: 20 })}>
      <div style={{ display: 'flex', height: 40, borderBottom: `1px solid ${LINE}`, fontFamily: MONO, fontSize: 13 }}>
        <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center', color: INK, background: '#14181E', borderRight: `1px solid ${LINE}` }}>index.html</div>
        <div style={{ padding: '0 16px', display: 'flex', alignItems: 'center', color: DIM }}>styles.css</div>
      </div>
      <div style={{ padding: '14px 0', fontFamily: MONO, fontSize: 14, lineHeight: '26px' }}>
        {lines.map((l, i) => {
          const parts: ReactNode[] = [];
          l.forEach((t, k) => {
            if (left <= 0) return;
            const s = t[1].slice(0, left); left -= s.length;
            parts.push(<span key={k} style={{ color: t[0], whiteSpace: 'pre' }}>{s}</span>);
          });
          let caret: ReactNode = null;
          if (!caretPlaced && (left <= 0 || i === lines.length - 1)) {
            caretPlaced = true;
            if (typing || Math.floor(T * 2.4) % 2 === 0) caret = <span style={{ display: 'inline-block', width: 2, height: 17, background: accent, verticalAlign: 'middle', marginLeft: 1 }}></span>;
          }
          return (
            <div key={i} style={{ display: 'flex', height: 26 }}>
              <span style={{ width: 40, textAlign: 'right', paddingRight: 16, color: '#3E4550', flexShrink: 0 }}>{i + 1}</span>
              <span>{parts}{caret}</span>
            </div>
          );
        })}
      </div>
      <div style={abs(16, 280, 240, 32, { opacity: c01(deployed), transform: `scale(${0.8 + 0.2 * deployed})`, transformOrigin: 'left center', display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', borderRadius: 16, background: 'rgba(255,255,255,0.06)', fontFamily: FONT, fontSize: 13, color: INK, boxSizing: 'border-box' })}>
        <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill={accent} /><path d="M4.5 8.2l2.2 2.2 4.6-4.8" stroke="#0A0C10" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Build passed · deployed
      </div>
    </div>
  );
}

function Ring({ v, label, accent }: { v: number; label: string; accent: string }) {
  const r = 32, C = 2 * Math.PI * r;
  const col = v >= 90 ? accent : v >= 50 ? '#F5B85B' : '#F2705E';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="40" cy="40" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
          <circle cx="40" cy="40" r={r} stroke={col} strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={`${C * v / 100} ${C}`} />
        </svg>
        <div style={abs(0, 0, 80, 80, { display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: MONO, fontSize: 22, color: col })}>{Math.round(v)}</div>
      </div>
      <div style={{ fontFamily: FONT, fontSize: 13, color: DIM }}>{label}</div>
    </div>
  );
}

function Audit({ S, C, accent, m }: { S: number; C: number; accent: string; m: Motion }) {
  const inn = m.enter(S + 0.15, 0.6), out = m.draw(C - 0.3, 0.5);
  const k = m.draw(S + 0.6, 1.4);
  const vals: [number, number, string][] = [[58, 100, 'Performance'], [64, 100, 'SEO'], [71, 98, 'Accessibility']];
  return (
    <div style={abs(560, 470, 380, 230, { opacity: inn * (1 - out), transform: `translate(${50 * (1 - inn) + 40 * out}px, 0)`, background: SURF, border: `1px solid ${LINE}`, borderRadius: 14, boxShadow: '0 30px 60px rgba(0,0,0,0.55)', padding: 24, boxSizing: 'border-box', zIndex: 20, display: 'flex', flexDirection: 'column', gap: 22 })}>
      <div style={{ fontFamily: MONO, fontSize: 13, color: DIM, letterSpacing: '0.04em' }}>PAGE AUDIT</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {vals.map(([a, b, l]) => <Ring key={l} v={a + (b - a) * k} label={l} accent={accent} />)}
      </div>
    </div>
  );
}

function Search({ S, C, accent, m }: { S: number; C: number; accent: string; m: Motion }) {
  const inn = m.enter(S + 0.5, 0.6), out = m.draw(C - 0.3, 0.5);
  const mv = m.draw(S + 1.7, 0.8);
  const badge = m.pop(S + 2.45, 0.5);
  const rows = [
    { t: 'Coffee subscriptions, delivered', u: 'beanbox.co', p: mv },
    { t: 'The 12 best coffee beans of 2026', u: 'roastguide.com', p: 1 + mv },
    { t: 'Ember Roasters — Small-batch coffee', u: 'ember-roasters.com', p: 2 - 2 * mv, ours: true },
  ];
  return (
    <div style={abs(40, 250, 420, 260, { opacity: inn * (1 - out), transform: `translate(${-50 * (1 - inn) - 40 * out}px, 0)`, background: SURF, border: `1px solid ${LINE}`, borderRadius: 14, boxShadow: '0 30px 60px rgba(0,0,0,0.55)', zIndex: 21, overflow: 'hidden' })}>
      <div style={abs(20, 20, 380, 40, { borderRadius: 20, background: SURF2, border: `1px solid ${LINE}`, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', fontFamily: FONT, fontSize: 15, color: INK })}>
        <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="7" cy="7" r="5" stroke={DIM} strokeWidth="1.8" fill="none" /><path d="M11 11l3.5 3.5" stroke={DIM} strokeWidth="1.8" strokeLinecap="round" /></svg>
        coffee beans delivered
      </div>
      {rows.map((r) => (
        <div key={r.u} style={abs(12, 76 + r.p * 58, 396, 52, { borderRadius: 10, padding: '7px 12px', boxSizing: 'border-box', background: r.ours ? `color-mix(in oklch, ${accent} 10%, transparent)` : 'transparent', border: r.ours ? `1px solid color-mix(in oklch, ${accent} 45%, transparent)` : '1px solid transparent', zIndex: r.ours ? 2 : 1, display: 'flex', flexDirection: 'column', gap: 3 })}>
          <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 500, color: r.ours ? accent : INK, whiteSpace: 'nowrap' }}>{r.t}</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: DIM }}>{r.u}</div>
          {r.ours ? <div style={abs(336, 12, 44, 26, { borderRadius: 13, background: accent, color: '#0A0C10', fontFamily: MONO, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: c01(badge), transform: `scale(${badge})` })}>#1</div> : null}
        </div>
      ))}
    </div>
  );
}

function Results({ C, O, accent, m }: { C: number; O: number; accent: string; m: Motion }) {
  const inn = m.enter(C + 1.6, 0.7), out = m.draw(O, 0.5);
  const bars = [22, 25, 24, 30, 37, 48, 60, 76];
  const rate = 1.8 + 2.8 * m.draw(C + 1.9, 1.5);
  return (
    <div style={abs(540, 430, 400, 290, { opacity: inn * (1 - out), transform: `translate(0, ${30 * (1 - inn)}px)`, background: SURF, border: `1px solid ${LINE}`, borderRadius: 14, boxShadow: '0 30px 60px rgba(0,0,0,0.55)', padding: 24, boxSizing: 'border-box', zIndex: 20, display: 'flex', flexDirection: 'column', gap: 6 })}>
      <div style={{ fontFamily: MONO, fontSize: 13, color: DIM, letterSpacing: '0.04em' }}>CONVERSION RATE</div>
      <div style={{ fontFamily: FONT, fontSize: 44, fontWeight: 600, color: INK, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{rate.toFixed(1)}%</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 120, marginTop: 'auto' }}>
        {bars.map((b, i) => (
          <div key={i} style={{ flex: 1, height: `${b * 1.5 * m.enter(C + 1.9 + i * 0.12, 0.6)}px`, borderRadius: 4, background: i >= 5 ? accent : 'rgba(255,255,255,0.14)' }}></div>
        ))}
      </div>
    </div>
  );
}

function Toast({ y, a, out, accent, title, sub }: { y: number; a: number; out: number; accent: string; title: string; sub: string }) {
  return (
    <div style={abs(620, y, 300, 58, { opacity: a * (1 - out), transform: `translate(${30 * (1 - a)}px,0)`, background: SURF2, border: `1px solid ${LINE}`, borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px', boxSizing: 'border-box', zIndex: 22 })}>
      <div style={{ width: 10, height: 10, borderRadius: 5, background: accent, flexShrink: 0 }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: INK }}>{title}</div>
        <div style={{ fontFamily: FONT, fontSize: 12, color: DIM }}>{sub}</div>
      </div>
    </div>
  );
}

function Piece({ accent }: { accent: string }) {
  const { T, CUES } = useComposition();
  const m = useMotion(T);
  const D = CUES.Design, B = CUES.Build, S = CUES.SEO, C = CUES.Convert, O = CUES.Outro;

  // camera
  const [cs, cx, cy] = kf(T, [
    [D, 0.97, 0, 10], [D + 1.0, 1, 0, 0], [B - 0.1, 1.04, 0, 0],
    [B + 0.8, 1, 30, 0], [S - 0.2, 1.03, 40, -10],
    [S + 0.8, 1, -20, 0], [C - 0.1, 1.02, -30, 0],
    [C + 1.0, 1.18, 150, 0], [C + 1.5, 1.18, 150, 0], [C + 2.3, 1, 0, 0], [O, 1.02, 0, 0], [O + 1, 0.97, 0, 10],
  ]);

  // window
  const wIn = m.enter(D + 0.1, 0.8), wOut = m.draw(O + 0.25, 0.7);
  const wo = wIn * (1 - wOut);

  // design phase
  const ap = (i: number) => m.enter(D + 0.8 + i * 0.09, 0.5);
  const fl = (i: number) => m.draw(D + 3.3 + i * 0.05, 0.6);
  const rl = (s: number) => m.draw(B + s, 0.6);
  const palIn = m.pop(D + 1.5, 0.5), palOut = m.draw(B + 0.1, 0.4);

  // cursor
  const [mx, my] = kf(T, [
    [D + 1.8, 990, 930], [D + 2.5, 867, 345], [D + 2.7, 867, 345], [D + 3.35, 222, 495], [D + 3.6, 222, 495], [B + 0.3, 560, 640],
    [C, 560, 640], [C + 1.0, 222, 495], [C + 2.4, 222, 495], [O, 400, 640],
  ]);
  const mo = m.enter(D + 1.8, 0.3) * (1 - m.enter(B + 0.1, 0.3)) + m.enter(C, 0.3) * (1 - m.enter(O, 0.3));
  const press = 1 - 0.15 * Math.max(bump(T, D + 2.62), bump(T, C + 1.2));
  const dragging = T > D + 2.62 && T < D + 3.4;
  const ripple = c01((T - (C + 1.2)) / 0.7);
  const ctaPress = 1 - 0.06 * bump(T, C + 1.22, 0.18);

  // url / loading
  const urlA = 1 - m.draw(B + 0.5, 0.4), urlB = m.draw(B + 0.5, 0.4) * (1 - m.draw(B + 4.0, 0.3)), urlC = m.draw(B + 4.0, 0.3);
  const load = c01((T - (B + 3.6)) / 0.6), loadO = load > 0 && load < 1 ? 1 : (T > B + 3.6 && T < B + 4.4 ? 1 - c01((T - (B + 4.2)) / 0.2) : 0);
  const dim = 0.5 * m.enter(S, 0.5) * (1 - m.enter(C - 0.2, 0.5));
  const t1 = m.enter(C + 2.3, 0.5), t2 = m.enter(C + 2.9, 0.5), tOut = m.draw(O, 0.5);

  const txt = (size: number, weight: number, color: string, extra?: CSSProperties): CSSProperties =>
    ({ fontFamily: FONT, fontSize: size, fontWeight: weight, color, whiteSpace: 'nowrap', letterSpacing: size > 24 ? '-0.02em' : 0, ...extra });

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div style={abs(0, 40, 1000, 1000, { transform: `translate(${cx}px, ${cy}px) scale(${cs})`, transformOrigin: '500px 500px' })}>
        {/* browser window */}
        <div style={abs(110, 200, 780, 540, { opacity: wo, transform: `translateY(${24 * (1 - wIn)}px) scale(${0.95 + 0.05 * wIn - 0.03 * wOut})`, background: '#0F1216', border: `1px solid ${LINE}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' })}>
          <div style={abs(0, 0, 780, 42, { borderBottom: `1px solid ${LINE}`, background: '#14181D' })}>
            {[18, 36, 54].map((x) => <div key={x} style={abs(x, 16, 10, 10, { borderRadius: 5, background: 'rgba(255,255,255,0.16)' })}></div>)}
            <div style={abs(200, 9, 380, 24, { borderRadius: 12, background: 'rgba(255,255,255,0.05)', fontFamily: MONO, fontSize: 12, color: DIM })}>
              <div style={abs(0, 0, 380, 24, { display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: urlA })}>untitled — draft</div>
              <div style={abs(0, 0, 380, 24, { display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: urlB })}>localhost:3000</div>
              <div style={abs(0, 0, 380, 24, { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, opacity: urlC, color: INK })}>
                <svg width="10" height="12" viewBox="0 0 10 12"><rect x="1" y="5" width="8" height="6.5" rx="1.5" fill={accent} /><path d="M3 5V3.5a2 2 0 014 0V5" stroke={accent} strokeWidth="1.4" fill="none" /></svg>
                ember-roasters.com
              </div>
            </div>
            <div style={abs(0, 40, 780 * load, 2, { background: accent, opacity: loadO })}></div>
          </div>
          {/* page */}
          <div style={abs(0, 42, 780, 498)}>
            <Block x={32} y={18} w={20} h={20} r={5} appear={ap(0)} fill={fl(0)} color={accent} keepFill real={rl(0.9)} />
            <Block x={60} y={23} w={60} h={10} r={3} appear={ap(0)} fill={fl(0)} color={INK} real={rl(0.9)}>
              <span style={txt(16, 600, INK)}>Ember</span>
            </Block>
            {([['Shop', 470], ['About', 530], ['Journal', 594]] as const).map(([l, x], i) => (
              <Block key={l} x={x} y={24} w={44} h={8} r={3} appear={ap(1 + i * 0.3)} fill={fl(1)} color="#4A525C" real={rl(1.0)}>
                <span style={txt(13, 400, DIM)}>{l}</span>
              </Block>
            ))}
            <Block x={680} y={15} w={70} h={28} r={14} appear={ap(2)} fill={fl(2)} color="rgba(255,255,255,0.1)" keepFill real={rl(1.0)}>
              <span style={txt(13, 500, INK, { width: '100%', textAlign: 'center' })}>Cart</span>
            </Block>
            <Block x={40} y={86} w={250} h={30} r={5} appear={ap(3)} fill={fl(3)} color={INK} real={rl(1.5)}>
              <span style={txt(32, 600, INK)}>Slow mornings,</span>
            </Block>
            <Block x={40} y={126} w={220} h={30} r={5} appear={ap(4)} fill={fl(4)} color={INK} real={rl(1.7)}>
              <span style={txt(32, 600, INK)}>better coffee.</span>
            </Block>
            <Block x={40} y={174} w={270} h={10} r={3} appear={ap(5)} fill={fl(5)} color="#4A525C" real={rl(2.2)}>
              <span style={txt(15, 400, DIM)}>Small-batch roasts, delivered</span>
            </Block>
            <Block x={40} y={194} w={180} h={10} r={3} appear={ap(5.5)} fill={fl(5.5)} color="#4A525C" real={rl(2.3)}>
              <span style={txt(15, 400, DIM)}>fresh to your door.</span>
            </Block>
            <div style={abs(40, 230, 140, 42, { transform: `scale(${ctaPress})` })}>
              <Block x={0} y={0} w={140} h={42} r={21} appear={ap(6)} fill={fl(6)} color={accent} keepFill real={rl(3.0)}>
                <span style={txt(15, 600, '#0A0C10', { width: '100%', textAlign: 'center' })}>Shop beans</span>
              </Block>
              <div style={abs(-ripple * 30, -ripple * 30, 140 + ripple * 60, 42 + ripple * 60, { borderRadius: 60, border: `2px solid ${accent}`, opacity: ripple > 0 && ripple < 1 ? 1 - ripple : 0, boxSizing: 'border-box' })}></div>
            </div>
            <Block x={196} y={241} w={86} h={20} r={4} appear={ap(6.5)} fill={fl(6.5)} color="rgba(255,255,255,0.06)" real={rl(3.0)}>
              <span style={txt(15, 500, INK, { width: '100%', textAlign: 'center' })}>Our story →</span>
            </Block>
            <Block x={410} y={78} w={330} h={214} r={12} appear={ap(7)} fill={fl(7)} color={SURF2} keepFill real={rl(2.6)}>
              <div style={abs(0, 0, 330, 214, { borderRadius: 12, overflow: 'hidden', background: '#2A1F18' })}>
                <div style={abs(150, 30, 220, 220, { borderRadius: 110, background: '#6B4430' })}></div>
                <div style={abs(60, 70, 110, 150, { borderRadius: 10, background: '#C98B5E' })}></div>
                <div style={abs(80, 110, 70, 26, { borderRadius: 4, background: '#2A1F18' })}></div>
                <div style={abs(190, 100, 80, 120, { borderRadius: 10, background: '#E8D5BC' })}></div>
              </div>
            </Block>
            {([['Single origin', 40], ['Roasted weekly', 280], ['Free shipping', 520]] as const).map(([l, x], i) => (
              <Block key={l} x={x} y={326} w={220} h={136} r={12} appear={ap(8 + i * 0.5)} fill={fl(8 + i)} color={SURF2} keepFill real={rl(3.2 + i * 0.15)}>
                <div style={abs(20, 20, 180, 100, { display: 'flex', flexDirection: 'column', gap: 10 })}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: `color-mix(in oklch, ${accent} 22%, transparent)`, border: `1px solid color-mix(in oklch, ${accent} 55%, transparent)` }}></div>
                  <div style={txt(16, 600, INK)}>{l}</div>
                  <div style={{ width: 150, height: 7, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }}></div>
                  <div style={{ width: 110, height: 7, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }}></div>
                </div>
              </Block>
            ))}
            <div style={abs(0, 0, 780, 498, { background: '#05070A', opacity: dim, zIndex: 5 })}></div>
          </div>
        </div>

        {/* style palette (design) */}
        <div style={abs(840, 290, 132, 150, { opacity: c01(palIn) * (1 - palOut) * (1 - wOut), transform: `scale(${palIn})`, transformOrigin: 'left top', background: SURF2, border: `1px solid ${LINE}`, borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', padding: 16, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12, zIndex: 15 })}>
          <div style={{ fontFamily: MONO, fontSize: 12, color: DIM, letterSpacing: '0.04em' }}>STYLES</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[accent, INK, '#4A525C'].map((c, i) => <div key={i} style={{ width: 22, height: 22, borderRadius: 11, background: c, boxShadow: i === 0 && T > D + 2.6 && T < D + 3.5 ? `0 0 0 2px ${SURF2}, 0 0 0 4px ${accent}` : 'none' }}></div>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={txt(30, 600, INK)}>Aa</span>
            <span style={{ fontFamily: MONO, fontSize: 11, color: DIM }}>Geist</span>
          </div>
        </div>

        <Editor T={T} B={B} S={S} accent={accent} m={m} />
        <Audit S={S} C={C} accent={accent} m={m} />
        <Search S={S} C={C} accent={accent} m={m} />
        <Results C={C} O={O} accent={accent} m={m} />
        <Toast y={150} a={t1} out={tOut} accent={accent} title="New order" sub="House Blend × 2" />
        <Toast y={218} a={t2} out={tOut} accent={accent} title="New subscriber" sub="Monthly roast box" />

        {dragging ? <div style={abs(mx - 6, my + 14, 18, 18, { borderRadius: 9, background: accent, zIndex: 49, boxShadow: '0 4px 12px rgba(0,0,0,0.4)' })}></div> : null}
        <Cursor x={mx} y={my} o={c01(mo)} s={press} />
      </div>
    </div>
  );
}


type HeroAnimationProps = { accent?: string; speed?: number; className?: string; style?: CSSProperties };

export default function HeroAnimation({ accent = '#C6F36B', speed = 1, className, style }: HeroAnimationProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [T, setT] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / 1000));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setT(REDUCED_MOTION_FRAME); return; }
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0, last = 0, t = 0, visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    const tick = (now: number) => {
      if (last && visible && !document.hidden) { t = (t + ((now - last) / 1000) * speed) % TOTAL; setT(t); }
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [speed]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true"
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', ...style }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 1000, height: 1000, transform: `scale(${scale})`, transformOrigin: '0 0' }}>
        <TimeCtx.Provider value={T}>
          <Piece accent={accent} />
        </TimeCtx.Provider>
      </div>
    </div>
  );
}
