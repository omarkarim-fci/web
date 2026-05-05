# Omar Karim Portfolio - Component Guide

## Quick Start

The portfolio website is now fully functional with smooth animations and blur effects. The main components that drive the modern experience are:

1. **WorkConnectSection** - Main content section with scroll-based blur
2. **WorkSectionLogo** - Animated logo for dark/light mode
3. **ThemeToggle** - Enhanced theme switcher with animations

## Using the Components

### WorkConnectSection
```tsx
import { WorkConnectSection } from "@/components/work-connect-section"

// Add to your page
<WorkConnectSection />
```

**What it does:**
- Displays a "Work & Connect" section with animated content
- Creates a smooth blur effect as you scroll through it
- Shows statistics cards and call-to-action buttons
- Animates in smoothly with staggered timing

**Customization:**
```tsx
// Adjust blur intensity (0-15px default)
const blur = Math.min(scrollProgress * 15, 15)

// Change animation speed - modify transition duration
transition={{ duration: 0.6 }}

// Adjust section ID for navigation
id="work-connect"
```

### WorkSectionLogo
```tsx
import { WorkSectionLogo } from "@/components/work-section-logo"

// Use anywhere you need the logo
<WorkSectionLogo />
```

**Features:**
- Automatically detects light/dark mode
- Smooth 400ms transitions between versions
- Two distinct visual styles per theme
- Fully responsive and accessible

**Customization:**
```tsx
// Modify transition duration
transition={{ duration: 0.4 }}

// Change logo size - modify width/height
width="48"
height="48"

// Adjust easing curve
ease: [0.34, 1.56, 0.64, 1]
```

### ThemeToggle
```tsx
import { ThemeToggle } from "@/components/theme-toggle"

// Already integrated in the Header
<ThemeToggle />
```

**Features:**
- Icon rotates during transition
- Scale animation on hover/tap
- Smooth theme persistence
- Accessible with ARIA labels

## Animation Keyframes

All animations are defined in `app/globals.css`:

```css
/* Fade and scale entrance */
@keyframes fadeInScale { }

/* Fade and scale exit */
@keyframes fadeOutScale { }

/* Blur effect entrance */
@keyframes blurIn { }

/* Blur effect exit */
@keyframes blurOut { }
```

## Theme Transition Utilities

The `theme-transition` class is automatically applied to all elements for smooth color transitions:

```css
.theme-transition {
  @apply transition-colors duration-500 ease-in-out;
}
```

**Duration:** 500ms (adjustable in globals.css)
**Easing:** ease-in-out (smooth S-curve)

## Scroll-Based Blur Mechanics

The blur effect calculates dynamically as you scroll:

```typescript
const handleScroll = () => {
  const sectionTop = sectionRef.current.getBoundingClientRect().top
  const windowHeight = window.innerHeight
  
  // Blur starts when section enters viewport
  if (sectionTop < windowHeight && sectionTop > 0) {
    const scrollProgress = 1 - sectionTop / windowHeight
    const blur = Math.min(scrollProgress * 15, 15) // 0-15px range
    setBlurAmount(blur)
  }
}
```

**How to adjust:**
- Change `15` to use a different max blur (e.g., `20` for more blur)
- Modify the calculation to blur at different scroll points
- Use `scrollProgress` for inverse effects

## Performance Tips

1. **Use passive event listeners** - Already implemented ✓
2. **Hardware acceleration** - CSS transforms and filters used ✓
3. **Avoid layout thrashing** - Single state update per scroll frame ✓
4. **Optimize animations** - Framer Motion with GPU-accelerated animations ✓

## Browser Support

| Feature | Support | Fallback |
|---------|---------|----------|
| backdrop-filter | Modern browsers | No blur effect |
| CSS Grid | All modern browsers | Flexbox layout |
| CSS Variables | All modern browsers | Fallback colors |
| Framer Motion | React 16.8+ | Static rendering |

## Adding Custom Effects

### Add a new blur trigger
```tsx
// In work-connect-section.tsx
const handleScroll = () => {
  // ... existing code ...
  
  // Add custom trigger
  if (blurAmount > 10) {
    // Do something when blur is strong
  }
}
```

### Create variant logos
```tsx
// In work-section-logo.tsx
const variant = resolvedTheme === "dark" ? "dark" : "light"

// Render different logos based on variant
```

### Extend theme toggle
```tsx
// In theme-toggle.tsx
const handleThemeToggle = async () => {
  // Add custom logic before theme switch
  setTheme(isDark ? "light" : "dark")
  // Add custom logic after theme switch
}
```

## Accessibility Checklist

- ✓ All interactive elements have ARIA labels
- ✓ Keyboard navigation supported
- ✓ Color contrast meets WCAG AA standards
- ✓ Semantic HTML structure used
- ✓ Motion is not essential to understanding content
- ✓ Animations don't prevent user interaction

To respect user preferences for reduced motion, add:

```tsx
import { useReducedMotion } from "framer-motion"

export function MyComponent() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={shouldReduceMotion ? {} : { opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
    >
      {/* Content */}
    </motion.div>
  )
}
```

## Debugging

### Blur not working?
1. Check browser support for `backdrop-filter`
2. Verify scroll event listener is active
3. Open DevTools and check `getComputedStyle` for blur value

### Theme toggle not animating?
1. Ensure next-themes provider is wrapping the app
2. Check that component is mounted (use `[mounted]` state)
3. Verify Framer Motion is imported

### Logo not showing?
1. Check theme provider is initialized
2. Verify SVG namespace is correct
3. Confirm currentColor is inherited from parent

## File Structure

```
components/
├── work-connect-section.tsx    # Main section with blur effect
├── work-section-logo.tsx       # Animated logo component
├── theme-toggle.tsx            # Enhanced theme switcher
└── [other components...]

app/
├── globals.css                 # Animation keyframes & styles
├── page.tsx                    # Includes WorkConnectSection
└── layout.tsx                  # Theme provider setup
```

## Production Deployment

1. **Test blur effect** - Verify smooth at various scroll speeds
2. **Check animations** - Ensure 60 FPS on target devices
3. **Validate accessibility** - Run through screen reader
4. **Optimize images** - Reduce impact of blur effect
5. **Monitor performance** - Use Web Vitals tools

---

For more information, see `IMPLEMENTATION_SUMMARY.md` for detailed technical documentation.
