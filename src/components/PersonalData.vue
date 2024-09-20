<template>
  <fieldset>
    <legend>Персональные данные</legend>
    <DataInput
        v-model="tempStore.personalDate.name"
        :inputId="String('name')"
        :inputPattern="String('[A-Za-zА-Яа-яЁё]+')"
        :inputLabel="String('Имя')"
        :inputPlaceholder="String('Например, Петр')"
    />
    <DataInput
        v-model="tempStore.personalDate.age"
        :inputId="String('age')"
        :inputPattern="String('[0-9]{1,3}')"
        :inputLabel="String('Возраст')"
        :inputPlaceholder="String('Например, 99')"
        :inputType="String('number')"
    />
  </fieldset>
</template>

<script setup>
import {useTempStore} from "@/store/tempStore";

const tempStore = useTempStore();

import DataInput from '@/components/DataInput.vue'

</script>

<style scoped>
fieldset {
  margin-top: 30px;
}

legend {
  text-align: start;
  margin-bottom: 10px;
  color: #111;
  /* 16 Paragraph 2 Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

</style>