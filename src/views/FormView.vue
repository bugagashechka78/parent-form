<template>
  <body class="form">
  <form class="personal">
    <PersonalData/>
    <ButtonAdd v-if="tempStore.children.length<5" @click="addChild">Добавить ребенка</ButtonAdd>
    <ChildrenData/>
    <ButtonSave @click="saveChildren">Сохранить</ButtonSave>
  </form>
  </body>
</template>

<script setup>
// @ is an alias to /src
import PersonalData from '@/components/PersonalData';
import ButtonAdd from '@/components/ButtonAdd';
import ButtonSave from '@/components/ButtonSave';
import ChildrenData from '@/components/ChildrenData.vue';
import {useChildrenStore} from "@/store/childrenStore";

const childrenStore = useChildrenStore();
import {useTempStore} from "@/store/tempStore";

const tempStore = useTempStore();


function addChild() {
  tempStore.children.push({id: Date.now(), name: '', age: ''});
}

function saveChildren(event) {
  event.preventDefault();
  if (formFilled()) {
    childrenStore.children = [];
    for (let i=0;i<tempStore.children.length;i++) {
      childrenStore.children.push(tempStore.children[i]);
    }
    childrenStore.personalDate = {};
    for (let key in tempStore.personalDate){
      childrenStore.personalDate[key]=tempStore.personalDate[key];
    }
    console.log(1);
  }
}

function formFilled() {
  let count = 0;
  count = (tempStore.children.filter((t) => t.name === '')).length;
  count = count + (tempStore.children.filter((t) => t.age === '')).length;
  console.log(count === 0);
  if (tempStore.personalDate.name === '') count++;
  if (tempStore.personalDate.age === '') count++;
  return count === 0;
}

</script>

<style scoped>
body {
  width: 616px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
</style>
