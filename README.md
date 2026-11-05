# FRYDT Laundry Shop – ReactJS Homepage

ReactJS (Vite) + Tailwind CSS implementation of the FRYDT homepage and staff sign-in.
Content follows Project Deliverable #1 (FRYDT Laundry Shop Management System).

## Run it

```bash
npm install
npm run dev      # development server (http://localhost:5173)
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  assets/        logo image
  data/          content.js – all homepage text, passed down as props
  hooks/         useMediaQuery.js, useTheme.js
  components/
    Header, Hero, LoginCard, Features, Roles, HowItWorks, Footer   (page sections)
    Carousel, FeatureCard, RoleCard, BulletList, SectionHeading, ThemeToggle, Icon, Modal (reusable)
  App.jsx        page layout + shared role state
```

## Interactive features (React state + event handling)

1. Mobile menu toggle (Header) – menu drops down from the top; closes on link click, backdrop click or Esc.
2. Role switch (LoginCard + Roles) – Owner/Handler state lives in App and also highlights the matching role card.
3. Sign-in form – controlled inputs, validation message, show/hide password.
4. Forgot password modal (Modal).
5. Expandable "More detail" on each feature card (FeatureCard).

Sign-in is a front-end demo only; it will connect to `laundry_shop_db` later.
6. Features carousel (Carousel) – previous/next buttons, dots and swipe; 1/2/3 cards per view on mobile/tablet/desktop.
7. Dark mode (ThemeToggle + useTheme) – icon button before Sign In; choice is remembered.
