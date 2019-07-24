# Wethos Test
A hiring test from Wethos: Nuxt app to show a summary of the user's profile and projects

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

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org) and [Netlify docs](https://www.netlify.com/docs/)  

---

## API Info
Click [here](./docs/API.md) for more info 

---

## Notes
- There's a secret hardcoded, correct?
- `currentspecialist` is receiving PUT with incomplete data, should be PATCH to adhere to REST
- When updating `currentspecialist` with PUT, the API sends back the whole object again, and then something GETs the whole object again...
- No validation of `remove`; easy to make mistakes and erase something valuable
- `Password` and `User` handle PATCH correctly