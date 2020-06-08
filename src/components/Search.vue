<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
       .container
         input.input.is-medium(
           type="text",
           placeholder="Buscador de canciones",
           v-model="querySearch",
           @keyup.enter="search") 
         a.button.is-info.is-large(@click="search") buscar
         a.button.is-danger.is-large &times; limpiar
    
      .container 
        p
          small {{countTracksFound}}


      .container.results  
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack"
            )

</template>

<script>
import trackServices from '../services/track'

import PmNotification from './Notification.vue'
import PmLoader from './Loader.vue'
import PmTrack from './track.vue'

export default {
  name: 'app',
  components: { PmLoader, PmTrack, PmNotification },
  data () {
    return {
      querySearch: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.querySearch) { return }

      this.isLoading = true

      trackServices.search(this.querySearch)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    countTracksFound () {
      return 'encontrados: ' + this.tracks.length
    }
  }
}
</script>

<style lang="scss">
 .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #238bd1 solid;
  }
</style>
