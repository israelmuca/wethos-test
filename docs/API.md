# Wethos Test
A hiring test from Wethos: Nuxt app to show a summary of the user's profile and projects

---

## API Info
- Powered by PHP 7.2.4
- Rate limited

---

## API Endpoints
### Signup
*Used to create a new user on the system, immediately after receiving, sends 200 and does an automatic login*  
https://staging.api.teams.wethos.co/api/v1/auth/signup  

**POST**  
- `` object
  - `checkbox` boolean
  - `email` string
  - `first_name` string
  - `last_name` string
  - `password` string
  - `user_type` string  

Afterwards, does:  
https://staging.api.teams.wethos.co/oauth/token  

**POST**
- `` object
  - `client_id` number, hardcoded
  - `client_secret` string, hardcoded
  - `grant_type` string, hardcoded
  - `password` string
  - `scope` string, hardcoded
  - `username` string  

Which in turn returns:
- `` object
  - `access_token` JWT
  - `expires_in` number
  - `refresh_token` string
  - `token_type` string

### Login
*Used to get the Bearer Token*  
https://staging.api.teams.wethos.co/oauth/token  

**POST**   
- `` object
  - `client_id` number, hardcoded
  - `client_secret` string, hardcoded
  - `grant_type` string, hardcoded
  - `password` string
  - `scope` string, hardcoded
  - `username` string

returns: 
  - `` object
    - `access_token` JWT
    - `expires_in` number
    - `refresh_token` string
    - `token_type` string

### Signout
*Used to signout, sends nothing, receives nothing, probably blacklists the token in the API?*  
https://staging.api.teams.wethos.co/api/v1/auth/signout  

**POST**

### Forgotpassword
*Used to send a recovery link to the email, returns 200 if the email exists, 404 if the email doesn't*  
https://staging.api.teams.wethos.co/api/v1/auth/resetpassword/  

**POST**
- `` object
  - `email` string

### Password
*Used to change the password*  
https://staging.api.teams.wethos.co/api/v1/auth/password/  

**PATCH**
- `` object
  - `confirmpassword` string
  - `oldpassword` string 
  - `password` string

### User
*Used to get the user's data*  
https://staging.api.teams.wethos.co/api/v1/user  

**GET**  

returns: 
- `` object
  - `active` boolean (number)
  - `checkpoints` ???
  - `created_at` date
  - `email` string
  - `first_name` string
  - `id` number
  - `last_login` ???
  - `last_name` string
  - `permissions` array (empty?)
  - `phone_number` string
  - `roles` array
    - `` object
      - `id` number
      - `name` string
      - `permissions` array
      - `slug` string
  - `updated_at` date

**PATCH**  
- `` object
  - `first_name` string
  - `last_name` string
  - `phone_number` string


### Network
*Not sure what this is used for*  
https://staging.api.teams.wethos.co/api/v1/network  

**GET**  

returns:
  - ???

### CurrentEspecialist
*Used to bring all the user's profile data*  
https://staging.api.teams.wethos.co/api/v1/currentspecialist   

**GET**  

returns:
  - `capabilities` array
    - `` object
      - `brief` string
      - `description` string
      - `id` number
      - `name` string
  - `causes` array
    - `` object
      - `description` string
      - `id` number
      - `name` string
      - `reason` string
  - `checkpoints` array
    - `` object
      - `created_at` date
      - `slug` string
  - `city` object
    - `id` number
    - `latitude` number
    - `longitude` number
    - `name` string
    - `region` object
      - `country` object
        - `id` number
        - `name` string
        - `slug` string
      - `id` number
      - `name` string
      - `slug` string
    - `slug` string
  - `description` string
  - `experience` array
    - `` object
      - `company` string
      - `description` string
      - `title` string
  - `id` number
  - `languages` array
    - `` object
      - `code` string
      - `level` number
  - `links` array
    - `` object
      - `title` string
      - `url` string
  - `profile_image` string
  - `projects` array
    - `` TODO: CONFIRM IF THEY WILL BE ADDED HERE
  - `raw` string
  - `roles` array
    - `` object
      - `description` string
      - `id` number
      - `name` string
  - `tasks` array
    - `` TODO: CONFIRM IF SOMETHING WILL BE ADDED HERE
  - `title` string
  - `user` object
    - `created_at` date
    - `email` string
    - `first_name` string
    - `id` number
    - `last_name` string
    - `phone_number` number ???

**PUT** for Specialist Details
- `` object
  - `city_id` number
  - `description` string, empty
  - `profile_image` string, (URL, careful with XSS)
  - `title` string  

returns:
  - whole data as in GET

**PUT** for Social Links
- `links` array
  - `` object
    - `title` string
    - `url` string  

returns:
  - whole data as in GET

**PUT** for Capabilities
- `capabilities` array
  - `` number (id of the capability)

returns:
  - whole data as in GET

**PUT** for Languages
- `languages` array
  - `` object
    - `code` string
    - `level` number

returns:
  - whole data as in GET

**PUT** for Causes
- `causes` array
  - `` object
    - `id` number
    - `reasons` string

returns:
  - whole data as in GET

**PUT** for Experience
- `experience` array
  - `` object
    - `company` string
    - `description` string  (HTML with inline styles, careful with XSS)
    - `title` 

returns:
  - whole data as in GET

### Causes
*Used to fill the dropdown for the individual `Causes` the user may have*  
*Supports pagination*  
https://staging.api.teams.wethos.co/api/v1/specialists/causes  

**GET**  

returns:
  - `data` array
    - `` object
      - `description` null
      - `id` number
      - `name` string
      - `reason` null
  - `links` for pagination
  - `meta` for pagination

### Capabilities
*Used to fill the selector for the individual `Capabilities` the user may have*  
*Supports pagination, however on the current page, 99,999 items are requested*  
https://staging.api.teams.wethos.co/api/v1/work/capabilities  

**GET**  

returns:
  - `data` array
    - `` object
      - `brief` string
      - `description` string
      - `id` number
      - `name` string
  - `links` for pagination
  - `meta` for pagination