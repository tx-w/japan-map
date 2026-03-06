# Japan Map - Improvement Ideas

## Visual & Styling

- [ ] **Color Palette**
  - Replace the `aqua` info-box with a softer color (white/cream with subtle shadow)
  - Use a gradient or more muted ocean color instead of flat `#a4d1dc`
  - Remove the red outline on Okinawa (debug styling)
  - Try regional coloring — different colors for Kanto, Kansai, Tohoku, etc.

- [ ] **Typography**
  - Add a custom font (Google Fonts like "Noto Sans JP", "Inter", or "Poppins")
  - Style the info-box text with better hierarchy (larger prefecture name, smaller details)

- [ ] **Hover/Interaction Effects**
  - Add a subtle scale transform on hover (`transform: scale(1.02)`)
  - Use a glow/drop-shadow effect instead of just color change
  - Smooth transitions on the map paths (`transition: fill 0.2s, transform 0.2s`)

- [ ] **Info Box**
  - Rounded corners, larger padding, better typography
  - Add the prefecture flag or a small icon
  - Consider a fixed sidebar instead of a floating tooltip

- [ ] **Background**
  - Add a subtle pattern or texture to the ocean
  - Or use a gradient (light blue to darker at edges)

## Features to Add

- [ ] **Search/Filter**
  - Add a search bar to quickly find a prefecture
  - Region filter buttons (Hokkaido, Tohoku, Kanto, etc.)

- [ ] **Legend/Stats Panel**
  - Show a sidebar with stats about the hovered/selected prefecture
  - Color-code by population density or other metrics

- [ ] **Animations**
  - Fade-in animation when the page loads
  - Animate path drawing on first load (using SVG stroke-dasharray)

- [ ] **Dark Mode** ⭐ HIGH PRIORITY
  - Add a toggle for dark/light theme

- [ ] **Multiple Subpages** ⭐ HIGH PRIORITY
  - Create dedicated subpages for each prefecture
  - Add an about page, regional overview pages, and a stats/comparison page
  - Implement consistent navigation between all pages

- [ ] **Prefecture Pages**
  - Add photos, more data, consistent styling with the main page
  - Share a common CSS file between all pages

## Quick Wins (Start Here)

| Change | Impact |
|--------|--------|
| Add Google Font | High |
| Remove Okinawa red outline | Quick fix |
| Soften info-box colors | Medium |
| Add `transition` to paths | Medium |
| Add `border-radius` to info-box | Quick |
