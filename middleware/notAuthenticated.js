// Middleware to confirm the user is NOT authenticated
// auth ? redirect(/) : do nothing
export default function ({ redirect }) {

    // Confirm we're in the browser
    if (!process.server) {

        // Wethos local storage found
        if (window.localStorage.wethos != undefined) {
            let wethosLS = JSON.parse(window.localStorage.wethos)

            // authToken found, go home!
            if (wethosLS.authToken) {
                return redirect('/')
            }
        }
    }
}