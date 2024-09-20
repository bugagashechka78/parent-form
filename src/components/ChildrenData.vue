<template>
    <fieldset>
      <legend>Дети (макс. 5)</legend>
      <div
          v-for="child in tempStore.children"
          :key = "child.id"

      >
        <DataInput
            v-model="child.name"
            :inputId="String('name')"
            :inputPattern="String('[A-Za-zА-Яа-яЁё]+')"
            :inputLabel="String('Имя')"
            :inputPlaceholder="String('Например, Петр')"

        />
        <DataInput
            v-model="child.age"
            :inputId="String('age')"
            :inputPattern="String('[0-9]{1,3}')"
            :inputLabel="String('Возраст')"
            :inputPlaceholder="String('Например, 99')"
            :inputType="String('number')"
        />
        <ButtonDelete @click="removeChild(child.id)">Удалить</ButtonDelete>
      </div>
    </fieldset>
</template>

<script setup>
import DataInput from '@/components/DataInput.vue'
import ButtonDelete from '@/components/ButtonDelete.vue'
import {useTempStore} from "@/store/tempStore";
const tempStore = useTempStore();

function removeChild(childId){
  tempStore.children = tempStore.children.filter((t) => t.id !== childId);
}

</script>

<style scoped>
fieldset {
  margin-top: 44px;
}
div {
  display: flex;
}
legend {
  text-align: start;
  margin-bottom: 10px;
  color:  #111;
  /* 16 Paragraph 2 Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
p {
  margin-right: 18px;
}
</style>