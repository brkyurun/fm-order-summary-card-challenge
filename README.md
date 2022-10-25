# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/brkyurun/fm-order-summary-card-challenge)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static type-checking for JS
- [Vite](https://vitejs.dev/) - Fast, no-config module bundler
- [ESLint](https://eslint.org/) - Code quality checker and linter
- [Prettier](https://prettier.io/) - Code style enforcer

### What I learned

During the development process, I tried to utilize a component-based, mobile-first workflow. For quick styling, I chose to use TailwindCSS as it is one of my favorite ways to write CSS, and I can always incorporate vanilla CSS in places where I need, for example like setting the whole documents font-family like shown belown:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: "Red Hat Display", sans-serif;
  }
}
```

However, working with TailwindCSS is not always a sunny day walk in the park. A very common pain point many developers utilizing the power of TailwindCSS face is the lack of brevity and cleanliness of their markup. To combat this, for each component that had styling, I created a "styles" object and wrote CSS class names for key and the required TailwindCSS classes as the value, even if I only used a single TailwindCSS class.

Example:

```js
// src/components/CardPlan.tsx
const styles = {
  wrapper: "flex items-center p-5 bg-very-pale-blue rounded-xl",
  image: "mr-6",
  pricing: {
    wrapper: "flex flex-col items-center justify-center",
    title: "font-black",
    price: "text-base text-desaturated-blue",
  },
  link: "ml-auto text-bright-blue hover:text-bright-blue/70 underline hover:no-underline text-sm font-bold",
};
```

I highly recommend this way of organizing your TailwindCSS classes as it greatly reduces clutter and you can use CSS naming conventions to name your HTML tags (i.e "card", "cardBody", "footer" etc.).

## Author

- LinkedIn - [Berkay Urun](https://www.linkedin.com/in/berkayurun/)
- Frontend Mentor - [@brkyurun](https://www.frontendmentor.io/profile/brkyurun)
- Twitter - [@darkhorizontal](https://twitter.com/darkhorizontal)
