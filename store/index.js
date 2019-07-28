import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({

        state: {

            loadingCurEsp: null,

            user: {
                authToken: null,

                id: null,
                createdAt: null,

                email: null,

                firstName: null,
                lastName: null,
            },

            curEsp: {

                capabilities: [],
                causes: [],
                city: {},
                description: null,
                experience: [],
                id: null,
                languages: [],
                links: [],
                profileImage: null,
                projects: [],
                title: null

            }
        },

        mutations: {
            setAuthToken(state, authToken) {
                state.user.authToken = authToken
            },

            setUser(state, user) {
                state.user.id = user.id
                state.user.createdAt = user.created_at
                state.user.email = user.email
                state.user.firstName = user.first_name
                state.user.lastName = user.last_name
            },

            setLoadingCurEsp(state, loadStatus) {
                state.loadingCurEsp = loadStatus
            },

            setCurEsp(state, curEsp) {
                state.curEsp.capabilities = curEsp.capabilities
                state.curEsp.causes = curEsp.causes
                state.curEsp.city = curEsp.city
                state.curEsp.description = curEsp.description
                state.curEsp.experience = curEsp.experience
                state.curEsp.id = curEsp.id
                state.curEsp.languages = curEsp.languages
                state.curEsp.links = curEsp.links
                state.curEsp.profileImage = curEsp.profile_image
                state.curEsp.projects = curEsp.projects
                state.curEsp.title = curEsp.title
            }
        },

        actions: {

            login({ commit }, user) {
                return new Promise(async (resolve, reject) => {
                    try {

                        // Try to login
                        let login = await this.$axios.post(process.env.OAUTH_URL, {
                            username: user.email,
                            password: user.password,
                            grant_type: process.env.GRANT_TYPE,
                            client_secret: process.env.CLIENT_SECRET,
                            scope: process.env.SCOPE,
                            client_id: process.env.CLIENT_ID
                        })

                        // Save token for future use
                        commit('setAuthToken', login.data.access_token)

                        // Resolve and send the login data
                        resolve(login.data)

                        // TODO: When time permits, work the refresh token function (it is ignored here)
                        // Could be through middleware in layout or nuxt.config
                        // Or also through an axios interceptor!

                    } catch (error) {

                        // Reject and send the error
                        reject(error)

                    }
                })
            },

            getUser({ commit }) {
                return new Promise(async (resolve, reject) => {
                    try {

                        // Get the User's info
                        let user = await this.$axios.$get(`${process.env.API_URL_BASE}user`)

                        // Save the info to the store
                        commit('setUser', user.data)

                        // Resolve and send the login data
                        resolve(user.data)

                    } catch (error) {

                        // Reject and send the error
                        reject(error)

                    }
                })
            },

            getCurrentSpecialist({ commit }) {

                // Start loading
                commit('setLoadingCurEsp', true)

                return new Promise(async (resolve, reject) => {
                    try {

                        // Get the Current Specialist info
                        let curEsp = await this.$axios.$get(`${process.env.API_URL_BASE}currentspecialist`)

                        // Save the info to the store
                        commit('setCurEsp', curEsp.data)

                        // Done loading
                        commit('setLoadingCurEsp', false)

                        // Resolve and send the current especialist data
                        resolve(curEsp.data)

                    } catch (error) {

                        // Done loading
                        commit('setLoadingCurEsp', false)

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
            }

        }

    })
}

export default createStore