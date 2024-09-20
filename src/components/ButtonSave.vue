<template>
  <button type="submit"><slot></slot></button>
</template>

<style scoped>
button {
  position: absolute;
  left: 0;
  margin-top: 30px;
  display: inline-flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  background: #01A7FD;
  color: #FFFFFF;
  text-align: center;
  border: 2px solid #01A7FD;

  /* 16 Paragraph 2 */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
button:hover{
  background: #0F79AF;
  border: 2px solid #0F79AF;
}
button:focus{
  border: 2px solid rgba(17, 17, 17, 0.48);
  background: #01A7FD;
  outline: none;
}
button:active{
  background: #59C79F;
  border: 2px solid #59C79F;
}
</style>