<template>
  <div class="hello">
    <h1><span>{{count}} </span><span>{{index}}</span> <span>{{countName}}</span></h1>
    <h2>current:{{current}}</h2>
    <h2>doneCount:{{doneCount}}</h2>
    <h2>doneTodosCount:{{doneTodosCount}}</h2>
    <h2>getTodoById:{{getTodoById}}</h2>
    <h2>doneTodosText:{{doneTodosText}}</h2>
    <h2>noParam:{{noParam}}</h2>
    <button @click="increment">点击增加</button>
    <button @click="decrement">点击减少</button>
    <button @click="changeIndex">点击改变index</button>

  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations} from 'vuex'
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
        this.$store.commit({
          type:'increment',
          m:15
        });
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
      vue.
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
          return this.$store.getters.doneTodos
        },
        doneTodosCount() {
//      return this.$store.state.todos.filter(tode => tode.done).length
          return this.$store.getters.doneTodosCount
        },
        getTodoById() {
//      return this.$store.state.todos.filter(tode => tode.done).length
          return this.$store.getters.getTodoById(3)
        },
        noParam(state) {
          return state.noParam
        }
      }),
      ...mapGetters([
         'doneTodosText',
      ])
//      ...mapGetters({
//        doneTodosText: 'doneTodosText'
//      }),
    }
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
