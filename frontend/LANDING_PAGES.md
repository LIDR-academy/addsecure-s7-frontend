# LTI Landing Page Design Options

Three distinctive brutalist landing page designs for the LTI talent tracking system.

## Quick Start

To view all three options with live switching:

```tsx
import LandingPageDemo from './components/LandingPageDemo';

// In your App.tsx or routing:
<LandingPageDemo />;
```

Or import individual options:

```tsx
import LandingOption1 from './components/LandingOption1';
import LandingOption2 from './components/LandingOption2';
import LandingOption3 from './components/LandingOption3';
```

## Design Options

### Option 1: "Raw Concrete"

**Aesthetic**: Monochromatic minimalist brutalism with newspaper layout

**Key Features**:

- Massive Archivo Black typography
- Black/white/gray color scheme
- Geometric precision with thick borders
- Heavy use of whitespace
- Newspaper-style grid layouts
- Hover transitions on feature cards

**Best For**: Professional, no-nonsense brand identity. Appeals to users who value clarity and directness.

**Technical**:

- Font: Archivo Black (hero), IBM Plex Mono (system font)
- Tailwind CSS with custom typography
- Border-heavy brutalist aesthetic
- High contrast hover states

---

### Option 2: "Geometric Chaos"

**Aesthetic**: Bold primary colors with Swiss design influence and overlapping elements

**Key Features**:

- Anton ultra-condensed typography
- Yellow, red, blue accent colors on black/white
- Overlapping layered elements
- Asymmetric grid layouts
- Floating geometric shapes
- Dynamic z-index layering

**Best For**: Energetic, modern brand seeking to stand out. Combines professionalism with creative boldness.

**Technical**:

- Font: Anton (display)
- Color palette: Yellow (#facc15), Red (#dc2626), Blue (#2563eb), Black/White
- Complex grid layouts with CSS Grid
- Transform and translate animations
- Absolute positioned geometric accents

---

### Option 3: "Digital Terminal"

**Aesthetic**: Terminal/command-line interface with matrix-inspired digital brutalism

**Key Features**:

- JetBrains Mono monospace typography
- Green terminal text on black background (#22c55e)
- Scanline and noise texture effects
- Typing animation on load
- Terminal command aesthetic
- Glowing text shadows

**Best For**: Tech-forward brand identity. Appeals to developers and technical recruiters. Creates memorable, distinctive presence.

**Technical**:

- Font: JetBrains Mono (all text)
- React state for typing animation
- CSS overlay effects (scanlines, noise)
- Box shadows for terminal glow
- ASCII-style borders and brackets
- Module-based feature layout

## Typography Choices

Each option uses distinctive fonts to avoid generic "AI slop" aesthetics:

1. **Archivo Black**: Bold, condensed, editorial feel
2. **Anton**: Ultra-condensed, geometric, Swiss modernism
3. **JetBrains Mono**: Technical, precise, developer-focused

All fonts are loaded via Google Fonts for production readiness.

## Implementation Notes

- All components built with React + TypeScript
- Tailwind CSS for styling (no separate CSS files)
- Fully responsive (mobile optimization pending)
- Accessibility: Semantic HTML, hover states, keyboard navigation
- Production-ready: No placeholder content

## Customization

Each component is self-contained and can be customized:

1. **Colors**: Update Tailwind classes or add custom colors to `tailwind.config.js`
2. **Typography**: Replace Google Fonts links with preferred fonts
3. **Content**: Edit copy directly in JSX (all text is inline)
4. **Animations**: Modify Tailwind transition/transform classes

## Next Steps

1. Choose one design direction (or combine elements)
2. Add mobile responsive breakpoints
3. Integrate with backend API for real data
4. Add analytics tracking
5. Implement proper routing
6. Add form validation for CTAs
7. Create additional pages (features, pricing, about)

---

**Design Philosophy**: Each option commits fully to a distinct aesthetic direction rather than playing it safe. Brutalism works when executed with conviction—whether minimal, maximal, or digital.
