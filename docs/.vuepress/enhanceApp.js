import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'
import TagMain from "./components/TagMain";

export default (
    {
        Vue, // the version of Vue being used in the VuePress app
        options, // the options for the root Vue instance
        router, // the router instance for the app
        siteData // site metadata
    }) => {
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({
        icons: {
            iconfont: 'mdi'
        }
    });
};