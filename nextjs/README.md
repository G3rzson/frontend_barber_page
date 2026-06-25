# Barber Landing Page – Portfolio Project

This project is a modern, single-page barber landing page built for portfolio purposes.
The focus was on clean visual design, responsive behavior, and interactive UI elements.

## Links

- Live demo:
- Source code:

## Project Goals

- Build a realistic service-based landing page frontend with Next.js.
- Create a clear, component-driven architecture.
- Deliver strong UX with smooth navigation, modal-based booking flow, and micro-animations.
- Provide a scalable foundation for future backend integration.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Motion (animations)
- Lucide React (icons)

## Features

- Hero section with strong visual focus.
- Service list with price and duration.
- Barber profiles.
- Work gallery.
- Opening hours displayed in a semantic table.
- FAQ section with animated accordion behavior.
- Contact form with modal feedback.
- Appointment booking modal with:
- service selection,
- barber selection using image cards,
- timeslot selection,
- toast feedback after booking action.

## Key Technical Decisions

- Reusable components: Header, Modal, Button, Services, Info, Works, Contacts.
- Centralized static data management in constants/data.ts.
- Dedicated body scroll lock hook for modal and mobile navigation states.
- Anchor-based one-page navigation with smooth scrolling.
- Portal-based modal rendering for stable layering.
- Motion-driven enter/exit animations for modal and toast UI.

## Notes

This is currently a frontend-focused portfolio project with static data.
The booking flow is demonstrated on the UI layer only; backend processing is not yet integrated.

## Future Improvements

- Backend API integration for real booking handling.
- Dynamic appointment availability from a database.
- Extended form validation and error handling.

## License

This project was created for learning and portfolio purposes.

## Author

**G3rzson**

- GitHub: [@G3rzson](https://github.com/G3rzson)
