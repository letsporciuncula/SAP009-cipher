const cipher = {
  encode: function (caixa1, deslocamento) {
    if(!caixa1 || !deslocamento) {
      throw new TypeError('bad arguments');
    }
    let mensagem = ""
    for (let i = 0; i < caixa1.length; i ++) {
      const formula = ((caixa1.charCodeAt(i) - 65 + deslocamento) % 26) + 65;
      mensagem += String.fromCharCode(formula);} 
   
    return mensagem},

  decode: function (caixa1, deslocamento) {
    if(!caixa1 || !deslocamento) {
      throw new TypeError('bad arguments');
    }
    let mensagem = ""
    for (let i = 0; i < caixa1.length; i ++) {
      const formula = ((caixa1.charCodeAt(i) - 65 - deslocamento) % 26) + 65;
      mensagem += String.fromCharCode(formula);} 
    return mensagem} 
}
 

export default cipher;