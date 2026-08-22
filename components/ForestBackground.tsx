// Fixed, viewport-pinned background: a static jungle illustration (separate
// light/dark files, since the dark one is a genuinely different night scene
// rather than a filtered copy), tinted toward our palette with a CSS filter,
// with a translucent tone overlay so page content stays readable on top.
// Fireflies (dark mode) sit above the image as a small animated detail.
function mulberry32(seed: number) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rand = mulberry32(42)

const fireflies = Array.from({ length: 22 }, (_, i) => ({
  key: i,
  left: rand() * 100,
  size: 3 + rand() * 3,
  duration: 14 + rand() * 12,
  delay: -rand() * 26,
  sway: 20 + rand() * 40,
}))

export default function ForestBackground() {
  return (
    <div
      aria-hidden="true"
      className="bg-forest-bg-light dark:bg-forest-bg-dark pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Light mode illustration - already close to our sage palette, so
          only a light saturation nudge. */}
      <div
        className="absolute inset-0 bg-cover bg-center dark:hidden"
        style={{
          backgroundImage: "url('/static/images/forest_light.png')",
          filter: 'saturate(1.08)',
        }}
      />
      {/* Dark mode illustration is a blue/purple night scene by default -
          hue-rotate pulls it toward green to match forest-bg-dark's hue.
          Pure black/white/gray pixels (the silhouettes, the stars) have no
          saturation, so hue-rotate leaves them untouched; only the actual
          blue/purple tones shift. */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center dark:block"
        style={{
          backgroundImage: "url('/static/images/forest_dark.png')",
          filter: 'hue-rotate(-85deg) saturate(1.15) brightness(0.95)',
        }}
      />
      {/* Translucent tone overlay, on top of the image, so text/cards stay
          readable regardless of how busy the illustration is underneath. */}
      <div className="bg-forest-bg-light/45 dark:bg-forest-bg-dark/55 absolute inset-0" />

      <div className="absolute inset-0 hidden dark:block">
        {fireflies.map((fly) => (
          <span
            key={fly.key}
            className="animate-firefly absolute bottom-0 rounded-full bg-[#eaffb0]"
            style={{
              left: `${fly.left}%`,
              width: fly.size,
              height: fly.size,
              boxShadow: '0 0 6px 2px rgba(220, 255, 150, 0.8)',
              animationDuration: `${fly.duration}s`,
              animationDelay: `${fly.delay}s`,
              // @ts-expect-error -- custom property consumed by the keyframes
              '--fly-sway': `${fly.sway}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
