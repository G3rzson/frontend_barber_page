# Barber Landing Page - Portfolio Project (React)

This project is a modern, single-page barber landing page built for portfolio purposes.
The focus is clean visual design, responsive behavior, and practical interactive UI patterns.

## Links

- Live demo: https://frontend-barber-page-react.vercel.app
- Source code (React version): https://github.com/G3rzson/frontend_barber_page/tree/main/react

## Project Goals

- Build a realistic service-based landing page frontend with React.
- Keep the codebase component-driven and easy to extend.
- Provide strong UX with smooth one-page navigation, booking flow, and clear feedback states.
- Prepare a solid frontend foundation for future backend integration.

## Tech Stack

- React 19
- TypeScript
- Vite
- Bootstrap 5
- React-Bootstrap (Modal)
- Motion (animations)
- Lucide React (icons)

## Features

- Hero section with strong visual emphasis.
- Services section with pricing and duration cards.
- Barber profiles with image cards.
- Work gallery implemented with Bootstrap Carousel.
- Opening hours in a semantic table.
- FAQ section implemented with Bootstrap Accordion.
- Contact form using Bootstrap Floating Labels.
- Appointment booking flow with:
- service selection,
- barber selection,
- time slot selection,
- modal interaction,
- toast feedback after booking action.

## Key Technical Decisions

- Reusable UI components (Header, Modal, Services, Barbers, Works, Opening, Info, Contacts).
- Centralized static content in `src/constants/data.ts`.
- Bootstrap-first UI approach for consistency and faster iteration.
- React-Bootstrap modal for stable controlled behavior in React.
- Anchor-based one-page navigation for quick section access.
- Motion-based transitions for selected UI feedback (for example toast).

## Notes

This is currently a frontend-focused portfolio project with static data.
The booking flow demonstrates UI logic only; backend processing is not integrated yet.

## Future Improvements

- Backend API integration for real booking processing.
- Dynamic time slot availability from a database.
- Stronger form validation and server-side error handling.

## License

This project was created for learning and portfolio purposes.

## Author

G3rzson

- GitHub: [@G3rzson](https://github.com/G3rzson)
