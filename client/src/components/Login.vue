<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="6" light tag="section">
          <v-card-title>
            <v-layout align-center justify-space-between>
              <h3 class="headline">
                {{ platformName }}
              </h3>
              <v-flex>
                <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="https://www.mobygames.com/images/i/12/25/1435075.png"></v-img>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>Sign in with your username and password:</p>
            <v-form name="erp-login-form">
              <v-text-field
                label="Email"
                prepend-icon="far fa-user"
                v-model="email"
              ></v-text-field>

              <v-text-field
                label="Password"
                prepend-icon="fa-key"
                :type="passshow ? 'text' : 'password'"
                :append-icon="passshow ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                hint="At least 8 characters"
                counter
                @click:append="passshow = !passshow"
                v-model="password"
                autocomplete="new-password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <div class="error" v-html="error" />
          <br>
          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-btn color="info">
              Forgot password?
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              @click="login"
              class="teal lighten-1" dark center>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm12 md6 offset-md3>
        <v-layout align-center justify-space-between>
          <p class="caption my-3">
            <a href="#">Privacy Policy</a>
            |
            <a href="#">Terms of Service</a>
          </p>
          <p class="caption my-3">Powered by <a href="#">StaffCircle</a></p>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      email: null,
      password: '',
      error: null,
      platformName: 'Koi Erp',
      passshow: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        // const response =
        await AuthService.login({
          email: this.email,
          password: this.password
        })
      // console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .error{
    color: white;
  }
</style>
