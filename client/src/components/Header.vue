<template>
  <v-card
    flat
    height="100px"
    tile
  >
    <v-toolbar dark color="teal darken-3" dense >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-4">
        <span class="home" @click="navigateTo({name:'root'})">
          Title
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <!-- navigateTo juga bisa menggunakan router-link -->
        <v-btn text>
          <router-link style="text-decoration: none; color: inherit;" :to="'login'">
            Sign In
          </router-link>
        </v-btn>
        <v-btn text>
          <router-link style="text-decoration: none; color: inherit;" :to="'register'">
            Sign Up
          </router-link>
        </v-btn>

      </v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-toolbar>

  </v-card>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  cursor: pointer;
}

.home:hover{
  color: darkseagreen;
}

.routerlink{
    text-decoration: none!important;
}

</style>
