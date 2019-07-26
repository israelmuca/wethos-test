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
            if (!wethosLS.authToken) {
                return redirect('/login')
            }

            // Wethos authToken found, set it globally
            if (wethosLS.authToken) {
                app.$axios.setToken(wethosLS.authToken, 'Bearer')
            }
        }
    }

}