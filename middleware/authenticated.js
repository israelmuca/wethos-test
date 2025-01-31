// Middleware to confirm the user is authenticated
// auth ? set Bearer token : go back to login
export default function ({ app, redirect }) {

    // Confirm we're in the browser
    if (!process.server) {

        // No Wethos local storage, go to login
        if (window.localStorage.wethos == undefined) {
            return redirect('/login')
        } else {
            let wethosLS = JSON.parse(window.localStorage.wethos)

            // No Wethos authToken, go to login
            if (!wethosLS.user.authToken) {
                return redirect('/login')
            }

            // Wethos authToken found, set it globally
            if (wethosLS.user.authToken) {
                app.$axios.setToken(wethosLS.user.authToken, 'Bearer')
                app.$axios.setHeader('Content-Type', 'application/json')
                app.$axios.setHeader('X-Requested-With', 'XMLHttpRequest')
            }
        }
    }

}