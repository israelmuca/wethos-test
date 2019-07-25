import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({

        state: {
            authToken: null,

            user: {
                id: null,
                createdAt: null,

                email: null,

                firstName: null,
                lastName: null,
            }
        },

        mutations: {
            setAuthToken(state, authToken) {
                state.authToken = authToken
            },

            setUser(state, user) {
                state.user = { ...user }
            }
        },

        actions: {
            login({ commit }, user) {
                return new Promise(async (resolve, reject) => {
                    try {

                        // Try to login
                        let loginResult = await this.$axios.post(process.env.OAUTH_URL, {
                            username: user.email,
                            password: user.password,
                            grant_type: process.env.GRANT_TYPE,
                            client_secret: process.env.CLIENT_SECRET,
                            scope: process.env.SCOPE,
                            client_id: process.env.CLIENT_ID
                        })

                        // Save token for future use
                        commit('setAuth', loginResult.data.token)

                        // Resolve and send the login data
                        resolve(data)

                        // TODO: Refresh token is not currently used
                    } catch (error) {

                        // Reject and send the error
                        reject(error)
                    }
                })
            }
        }

    })
}

export default createStore