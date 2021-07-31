const vpn = 'The QUIck brown fox jumps over the lazy dog.';
const isPangram = (vpn = '') => {
   vpn = vpn.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = vpn[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(vpn));
