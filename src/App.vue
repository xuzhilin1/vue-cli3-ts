<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  // import Component from "vue-class-component";
  // import { State, Mutation, Getter } from 'vuex-class';
   @Component
   export default class App extends Vue {
     private loading: boolean = true;
     private title: string = '我的标题';
     public value: any = new Date(2019, 6, 12, 18, 40);
  //   @Getter loading: boolean;
  //   @Mutation('SHOW_LOADING') isShow;
  //   mounted () {
  //     this.closeLoad()
  //   }
  //   closeLoad ():void {
  //     setTimeout(() => {
  //       this.isShow(false);
  //     },1000);
  //   }
   }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  height: 100vh;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
