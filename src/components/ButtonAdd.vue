<template>
  <button>
    <img src="@/images/plus.svg" alt="+">
    <slot></slot>
  </button>

</template>

<script setup>

</script>

<style scoped>
button {
  margin-top: 33px;
  position: absolute;
  right: 0;
  border-radius: 100px;
  border: 2px solid #01A7FD;
  display: inline-flex;
  padding: 10px 20px;
  align-items: center;
  background: rgba(110, 65, 226, 0);

  color:  #01A7FD;
  text-align: center;

  /* 16 Paragraph 2 */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
button:hover{
  background: rgba(110, 65, 226, 0.04);
}
button:focus{
  border: 2px solid rgba(17, 17, 17, 0.48);
  background: rgba(110, 65, 226, 0);
  outline: none;
}
button:active{
  background: rgba(110, 65, 226, 0.16);
}
img {
  margin-right: 4px;
}

</style>