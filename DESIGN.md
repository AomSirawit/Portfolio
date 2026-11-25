---
name: Sirawit Portfolio
description: A minimalist developer portfolio baseline.
colors:
  primary: "#2563eb" # blue-600 used in logo
  neutral-bg: "#0a0a0a"
  neutral-ink: "#ededed"
  navbar-btn: "#111827" # gray-900
typography:
  display:
    fontFamily: "Kanit, sans-serif"
    fontSize: "1.125rem" # text-lg
    fontWeight: 700
  body:
    fontFamily: "Kanit, sans-serif"
    fontSize: "0.875rem" # text-sm
    lineHeight: 1.5
rounded:
  md: "6px" # rounded-md
spacing:
  sm: "12px" # p-3
  md: "16px" # px-4, py-4
  lg: "24px" # px-6
components:
  button-primary:
    backgroundColor: "{colors.navbar-btn}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.md}"
    padding: "12px"
---

# Design System: Sirawit Portfolio

## 1. Overview

**Creative North Star: "The Minimalist Starter"**

This system represents a clean, baseline developer portfolio. It prioritizes dark-mode legibility and functional navigation. The aesthetic is utilitarian, using standard Tailwind scales and a neutral-heavy palette with a single blue accent.

**Key Characteristics:**
- High-contrast dark mode.
- Utilitarian component structure.
- Focused typography using the Kanit family.

## 2. Colors

The palette is anchored in deep neutrals with a vibrant blue accent for identity.

### Primary
- **Vibrant Blue** (#2563eb): Used as a brand accent in the logo.

### Neutral
- **Deep Onyx** (#0a0a0a): The primary background color.
- **Soft Platinum** (#ededed): The primary text color.
- **Charcoal Gray** (#111827): Used for secondary surfaces like buttons.

## 3. Typography

**Display Font:** Kanit (sans-serif)
**Body Font:** Kanit (sans-serif)

**Character:** Modern and highly legible, supporting both Thai and Latin scripts.

### Hierarchy
- **Display** (Bold, 1.125rem): Used for the brand name in the navbar.
- **Body** (Normal, 0.875rem): Used for general content and labels.

## 4. Elevation

The system is flat-by-default, relying on tonal contrast and blur effects for depth.

### Shadow Vocabulary
- **Backdrop Blur** (backdrop-filter: blur(4px)): Used on the fixed navigation bar to provide separation from content.

## 5. Components

### Buttons
- **Shape:** Softly rounded (6px)
- **Primary:** Dark charcoal background with white text.
- **Hover:** Transitions to black.

### Navigation
- **Style:** Fixed to top, full width, with a subtle backdrop blur for transparency.

## 6. Do's and Don'ts

### Do:
- **Do** maintain high contrast between text and background.
- **Do** use Kanit for all typographic elements.

### Don't:
- **Don't** use light-mode variants; this is a committed dark-mode system.
- **Don't** add complex gradients or shadows that deviate from the minimalist aesthetic.
