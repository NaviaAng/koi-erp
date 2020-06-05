import Vue from 'vue'
import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' //mdi
import 'material-design-icons-iconfont/dist/material-design-icons.css' // md
import 'font-awesome/css/font-awesome.min.css' // fa4
import '@fortawesome/fontawesome-free/css/all.css'// fa

const MY_ICONS = {
  complete: '...',
  cancel: '...',
  close: '...',
  delete: '...', // delete (e.g. v-chip close)
  clear: '...',
  success: '...',
  info: '...',
  warning: '...',
  error: '...',
  prev: '...',
  next: '...',
  checkboxOn: '...',
  checkboxOff: '...',
  checkboxIndeterminate: '...',
  delimiter: '...', // for carousel
  sort: '...',
  expand: '...',
  menubar: '...',
  subgroup: '...',
  dropdown: '...',
  radioOn: '...',
  radioOff: '...',
  edit: '...',
  ratingEmpty: '...',
  ratingFull: '...',
  ratingHalf: '...',
  loading: '...',
  first: '...',
  last: '...',
  unfold: '...',
  file: '...',
}

Vue.use(Vuetify)

const opts = {
  icons: {
    // iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    iconfont: 'mdi' || 'fa',
    values : MY_ICONS
  }
}
export default new Vuetify(opts)