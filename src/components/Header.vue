<template lang="pug">
  section.hero.is-info
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻  Robles Music
            .nav-right.nav-menu
              router-link.nav-item.is-(to="/") Buscar
              router-link.nav-item(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title  Robles Music
        h2.subtitle Canciones que estan Vue-nisimas!
        pm-player
</template>

<script>
import PmPlayer from './Player.vue'

export default {
  components: { PmPlayer }
}
</script>