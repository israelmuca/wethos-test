import VuexPersistence from 'vuex-persist'

// Plugin to save the Vuex store on Local Storage for persistence
export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            key: 'wethos',
            storage: localStorage
        }).plugin(store)
    })
}