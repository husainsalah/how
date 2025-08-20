<script>
import { createWebHistory, createRouter } from 'vue-router'
import Index from '../pages/index.vue'
import Music from '../pages/discog.vue'
import Press from '../pages/press.vue'
import Contact from '../pages/contact.vue'
import Artist from '../pages/artists.vue'

import Books from '../pages/books.vue'
import Video from '../pages/video.vue'
import ReleaseDet from './releaseDet.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/discog',
    component: Music,
  },
{
    path: '/press',
    component: Press,
    },
    {
        path: '/contact',
    component: Contact
    },
  {
    path: '/artist',
    component: Artist,
  },
  

]

const router = createRouter({
  history,
  routes,
})

export default router
</script>
