<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  margin-top: 11px;
  color: #01A7FD;
  background: rgba(110, 65, 226, 0);
  /* 16 Paragraph 2 */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  border-radius: 100px;
  padding: 5px 10px;
  margin-left: -10px;

}
button:hover{
  background: rgba(110, 65, 226, 0.04);
}
button:focus{
  border: 2px solid rgba(17, 17, 17, 0.48);
  background:  rgba(110, 65, 226, 0);
  outline: none;
}
button:active{
  background: rgba(110, 65, 226, 0.16);
}
</style>