<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      &copy; 2020 - <a href="http://alexnd.kiev.ua">Alexnd</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}
.content {
  margin: 0 auto;
  margin-top: 60px;
  max-width: 780px;
  background-color: #eee;
}
.content-header {
  padding: 6px;
}
.content-body {
  border: 1px solid #eee;
  padding: 10px;
  background-color: #f6f6f6;
}
.footer {
  position: absolute; 
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
}
a {
  color: #42b983;
}
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
}
.pagination {
  margin-top: 10px;
}
.pagination a {
  display: inline-block;
  padding: 0 20px;
}
.pagination select {
  margin-left: 20px;
  margin-right: 20px;
}
.pagination .disabled {
  padding: 0 20px;
  color: gray;
}
.breadcrumbs {
  padding: 6px;
}
</style>
