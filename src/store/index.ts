import { createStore } from 'vuex'
import authModule from './module/auth'

const store = createStore({
    modules: {
        auth: authModule
    }
});

export default store