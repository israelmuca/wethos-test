
// Plugin to logout user if 401 or 403 is returned by the API
export default function ({ $axios, store, router }) {
    $axios.onError(err => {
        let code = parseInt(err.response && err.response.status) // TC39 moved Optional Chaining to Stage 3 today 🥳

        if ([401, 403].includes(code)) {

            // Most surely the token has been blacklisted
            store.dispatch('logout').then(() => {
                router.push('/login')
            })
        }

        return Promise.reject(err)
    })
}