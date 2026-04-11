# BarbeR – Landing Page | Frontend Only

Simple, responsive barber landing page built with **Bootstrap** + custom CSS.

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5 (CDN)

## Features

- Responsive navbar with mobile view
- Gallery implemented with Bootstrap carousel
- Services/prices cards using Bootstrap grid
- FAQ (collapse) with expandable questions
- Contact form: client-side validation + feedback modal
- "Back to top" button

## Accessibility & UX

- Skip link for keyboard navigation
- Decorative icons hidden from screen readers (`aria-hidden`)
- Modals enhanced with `aria-describedby` attributes
- Scrollbar space maintained when modals open (reduces layout shifts)

## Performance

- Gallery images use `loading="lazy"` + `decoding="async"`

## Running Locally

1. Clone the repository
2. Open the project folder in VS Code
3. Install the **Live Server** extension
4. Right-click on `index.html` and select **Open with Live Server**

## Future Improvements

- Appointment booking system is not yet implemented (currently a placeholder modal)
- Form submission currently does not send emails / save to backend (UI feedback only)

## 👤 Author

**G3rzson**

- GitHub: [@G3rzson](https://github.com/G3rzson)
