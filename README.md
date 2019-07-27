# Wethos Test
A hiring test from Wethos: Nuxt app to show a summary of the user's profile and projects 

---

## Performance Analysis
Click [here](./docs/performance/PERFORMANCE.md) for more info 

---

## Accessibility Analysis
Click [here](./docs/a11y/A11Y.md) for more info 

---

## SEO Analysis
Not done, as this is an internal dashboard 

---

## Requirements
Click [here](./docs/reqs/REQUIREMENTS.md) for more info

---

## Competitors Analysis
Click [here](./docs/competitors/COMPANALYSIS.md) for more info

---

## API Info
Click [here](./docs/api/API.md) for more info 

---

## Tech stack

[Nuxt.js](https://nuxtjs.org/) will be used due to the development speed, as it being opinionated, it helps us avoid Vue's boilerplate code and easily output a static site to host on [Netlify](https://netlify.com)

---

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# upload to GitHub & Netlify (CI Pipeline)
$ git push
``` 

---

## Notes
- There's a secret hardcoded, correct?
- `currentspecialist` is receiving PUT with incomplete data, should be PATCH to adhere to REST
- When updating `currentspecialist` with PUT, the API sends back the whole object again, and then something GETs the whole object again...
- No validation of `remove`; easy to make mistakes and erase something valuable
- `Password` and `User` handle PATCH correctly
- Link in header sends to /admin/dashboard but there's a mixin there to redirect if regular user to /home
- No mobile menu, impossible to access projects on the phone
- icons licence: https://iconmonstr.com/license/

## TODOs
- 'login': Improve the login screen, too basic
- 'SignIn': Add better comments to the component
- '/': Try the bottom navbar with individual items, not hamburguer menu
- Move 'SignIn' loading indicator to the store, same for 'BasicInfo'
- Set Skeleton screens for the image and text loading
- Verify which domains are used the most for the links, get the appropiate svg's and map them so we add the proper icon depending on the domain (eg. Twitter, Linkedin, etc...)