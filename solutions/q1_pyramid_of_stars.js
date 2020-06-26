const buildPyramid = (n) => {

     let str1="";
     let i=0;
     let j=0;
     let k=0;
 
     if (n<=0 || n==="") {
         return "";
     }        
 
      for(i=0;i<n;i+=1) {        
           let pattern="";
               for(j=0;j<n-i;j+=1) {
                   pattern+=" ";
               }
               for(k=0;k<=i;k+=1) {
                  pattern += "* ";
               }
               str1 = str1.concat(pattern).concat(" \n");
           }
           return str1;
 };
 module.exports = buildPyramid;