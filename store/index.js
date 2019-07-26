import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({

        state: {
            user: {
                authToken: null,

                id: null,
                createdAt: null,

                email: null,

                firstName: null,
                lastName: null,
            }
        },

        mutations: {
            setAuthToken(state, authToken) {
                state.user.authToken = authToken
            },

            setUser(state, user) {
                state.user.id = user.id
                state.user.createdAt = user.createdAt
                state.user.email = user.email
                state.user.firstName = user.firstName
                state.user.lastName = user.lastName
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
                        commit('setAuthToken', loginResult.data.access_token)

                        // Resolve and send the login data
                        resolve(loginResult.data)

                        // TODO: When time permits, work the refresh token function
                        // Could be through middleware in layout or nuxt.config
                    } catch (error) {

                        // Reject and send the error
                        reject(error)
                    }
                })
            },

            logout({ commit }) {
                return new Promise((resolve, reject) => {
                    commit('setAuthToken', null)
                    commit('setUser', null)
                    resolve()
                })
            },

            getUser({ commit }) {
                return new Promise(async (resolve, reject) => {
                    try {
                        let user = await this.$axios.$get(`${process.env.API_URL_BASE}user`)

                        console.log(user)
                        resolve(user)
                    } catch (error) {
                        console.log(error)
                        reject(error)
                    }
                })
            }
        }

    })
}

export default createStore