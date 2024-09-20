<template>
  <body class="preview">
    <h2>Персональные данные</h2>
    <p v-if="childrenStore.personalDate.name!==undefined">{{ childrenStore.personalDate.name }}, {{ childrenStore.personalDate.age }} лет</p>
    <h2 class = "heading_child">Дети</h2>
    <div v-for="child in childrenStore.children">
      <p class = "child">{{ child.name }}, {{ child.age }} лет</p>
    </div>

  </body>
</template>

<script setup>
import {useChildrenStore} from "@/store/childrenStore";

const childrenStore = useChildrenStore();

</script>

<style scoped>
body {
  width: 616px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: start;
}
h2 {
  margin-top: 30px;

  color: #111;
  /* 16 Paragraph 2 Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
p {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  margin-top: 20px;

}
p.child {
  display: inline-flex;
  padding: 10px 20px;
  border-radius: 5px;
  background: #F1F1F1;
  margin-left: 0;

}
div {
  display: block;
}
.heading_child {
  margin-top: 60px;

}

</style>