<template>
  <div class="hello">
    <h1><span>{{count}} </span><span>{{index}}</span> <span>{{countName}}</span></h1>
    <h2>{{current}}</h2>
    <h2>{{doneCount}}</h2>
    <button @click="increment">点击增加</button>
    <button @click="decrement">点击减少</button>
    <button @click="changeIndex">点击改变index</button>
    <h2><router-link to="/xf">跳转到xf</router-link></h2>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
//  import store from '../store/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      current:6,
//      count:0
    }
  },
  methods:{
    increment() {
      this.$store.commit('increment',{m:10});
//      store.state.count++
    },
    decrement() {
      this.$store.commit('decrement');
    },
    changeIndex() {
      this.current++
    }
  },
  created:function () {
  
  },
  //写法3
  computed: {
    localComputed() {
//      return current
    },
    ...mapState({
      count(state) {
//        return this.$store.state.count + this.current
        return state.count + this.current
      },
      index:state => state.index + state.count,
      countName:'countName',//相当于：state => state.countName
      doneCount() {
//      return this.$store.state.todos.filter(tode => tode.done).length
        return this.$store.getters.doneTodos.length
      }
    })
  },
  //写法2
  /*  computed: mapState({
      count(state) {
        return state.count + this.current
      },
      index:state => state.index + state.count,
      countName:'countName'//相当于：state => state.countName
    }),*/
//写法1
 /* computed:{
    count() {
      return this.$store.state.count
    },
    index() {
      return this.$store.state.index
    },
    countName() {
      return this.$store.state.countName
    },
    doneCount() {
//      return this.$store.state.todos.filter(tode => tode.done).length
      return this.$store.getters.doneTodos.length
    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
