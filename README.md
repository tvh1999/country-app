# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage - Done
- Search for a country using an `input` field - Done
- Filter countries by region - Done
- Click on a country to see more detailed information on a separate page - Done (kind of)
- Click through to the border countries on the detail page - Done
- Toggle the color scheme between light and dark mode _(optional)_ - Done

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- The Process is straight forward. Each button will refer to the according AJAX calls.
- Each of these AJAX calls will bring back data that will be used in the app.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

- Learn how to build a complete app from scratch.
- Use and apply modern MVC pattern.

- If try to apply css to async DOM elements. Use DOM methods like getElementsByClassname() that create HTMLCollection as they will be automatically updated when the elements appeard. Don't use querySelector()

- To fit image to the container. Apply:
  width: 100%;
  height: 100%;
  object-fit: cover;

- Remember to use svg for best quality of the images.

### Continued development

- Just need to finish completely responsive part. But the requirement responsive css is completed.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@tvh1999](https://www.frontendmentor.io/profile/tvh1999)
