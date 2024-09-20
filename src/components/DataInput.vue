<template>
  <p>
    <label :for="inputId">{{ inputLabel }}</label>
    <input
        v-model="model"
        :id="inputId"
        :name="inputId"
        :placeholder="inputPlaceholder"
        :pattern="inputPattern"
        :type="inputType"
        required
    />
  </p>

</template>

<script setup>
import {useTempStore} from "@/store/tempStore";
const tempStore = useTempStore();

const model = defineModel()

const props = defineProps({
  inputLabel: String,
  inputPlaceholder: String,
  inputId: String,
  inputPattern: String,
  inputType: String,
})

</script>

<style scoped>

p {
  height: 56px;
  border: solid 1px #F1F1F1;
  border-radius: 4px;
  margin-top: 10px;
  min-width: 260px;
}
p:hover{
  box-shadow: 0 4px 4px 0 rgba(51, 51, 51, 0.04), 0 4px 56px 0 rgba(51, 51, 51, 0.16);

}
label {
  display: block;
  text-align: start;
  margin: 8px 16px 2px;
  color: rgba(17, 17, 17, 0.48);
  /* 13 Paragraph 3 */
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}
input {
  background: rgba(17, 17, 17, 0);
  display: block;
  color:  #111;
  /* 16 Paragraph 2 */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 4px;

}
input:focus{
  outline: none;
}
.notFilled{
  background: #F9E3E3;
}
</style>