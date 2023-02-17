<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable -->
<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 py-5">
        <h1>Generate a thumbnail of a website</h1>

        <form v-on:submit.prevent="makeWebsiteThumbnail">
          <div class="form-group">
            <input v-model="websiteUrl" type="text" id="website-input" placeholder="Enter a website" class="form-control">
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Generate!</button>
          </div>
        </form>
        <img class="thumbnail" :src="thumbnailUrl" alt="Website Screenshot" />
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      websiteUrl: '',
      thumbnailUrl: '',
    };
  },

  methods: {
    makeWebsiteThumbnail() {
      axios.post('http://localhost:3000/api/thumbnail', {
        url: this.websiteUrl,
      })
        .then((response) => {
          this.thumbnailUrl = response.data.screenshot;
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          window.alert(`The API returned an error: ${error}`);
        });
    },
  },
};

</script>

<style lang="scss">
#body {
  background-color: #2c3e50;
  color: #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #2c3e50;
}

div {
  background-color: #2c3e50;
  color: #ffffff;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.thumbnail {
  width: max-content;
  height: fit-content;
}
</style>
