const oldname = `  hasan  `;
const oldnamelow = `  HASAN  `;
const hello = `  salom  `;
const hellolow = `  SALOM  `;
const java = ` javascript  `;
const javalow = `  JAVASCRIPT  `;
const alfa = `  abc  `;
const alfalow = `  ABC  `;
const world = `  salom dunyo  `;
const banana = `  banana  `;

console.log(oldname.split);

console.log(hello.toUpperCase()); 

console.log(oldname.toUpperCase()); 

console.log(java.toUpperCase()); 

console.log(alfa.toUpperCase());

console.log(oldname.toUpperCase()); 

console.log(hellolow.toLowerCase()); 

console.log(oldnamelow.toLowerCase()); 

console.log(javalow.toLowerCase()); 

console.log(oldnamelow.toLowerCase());

console.log(alfalow.toLowerCase());

console.log(hello.trim());

console.log(oldname.trim()); 

console.log(oldname.trim());

console.log(java.trim());

console.log(alfa.trim());

console.log(world.replace("dunyo", "olam")); 

console.log(oldname.replace("H", "F")); 

console.log(banana.replace("na", "TA")); 

console.log(java.replace("a", "A")); 

console.log(hello.replace("o", "0"));

console.log(world.split(" ")); 

console.log(alfa.split(",")); 

console.log(oldname.split("")); 

console.log(alfa.split("-")); 

console.log(alfa.split(" "));

console.log(oldname.substring(0, 3)); 

console.log(java.substring(4, 10)); 

console.log(hello.substring(1)); 

console.log(hello.substring(2, 4)); 

console.log(oldname.substring(4, 1)); 

console.log(oldname.charAt(0)); 

console.log(oldname.charAt(2));

console.log(java.charAt(4)); 

console.log(hello.charAt(10)); 

console.log(alfa.charAt(1)); 

console.log(oldname.length);          

console.log(oldnamelow.length);          

console.log(world.length);    

console.log(alfa.length);             

console.log(java.length);              

console.log("A".charCodeAt(0));       

console.log("a".charCodeAt(0));      

console.log(oldname.charCodeAt(2));   

console.log("Z".charCodeAt(0));    

console.log("123".charCodeAt(1)); 

console.log("A".codePointAt(0));      

console.log("-".codePointAt(0));     

console.log(oldname.codePointAt(1));  

console.log("Z".codePointAt(0));     

console.log("_".codePointAt(0));

console.log(oldname.concat(" Ali"));         

console.log(hello.concat(" Dunyo"));        

console.log("Java".concat("Script"));        

console.log(world.concat(" ", "World"));    

console.log("My".concat(" name", " is", " Hasan")); 

console.log(oldname.at(0));     

console.log(oldname.at(-1));   

console.log(world.at(4));     

console.log(world.at(-3));    

console.log(alfa.at(2));   

console.log(oldname[0]);      

console.log(oldname[2]);       

console.log(world[4]);       

console.log(world[1]);       

console.log(java[10]);

console.log(oldname.substr(0, 3));     

console.log(oldname.substr(1, 2));     

console.log(oldname.substr(2));        

console.log(java.substr(4, 6));

console.log(world.substr(-5));  

console.log(oldname.isWellFormed());    

console.log("*".isWellFormed());       

console.log(hello.isWellFormed());    

console.log(alfa.isWellFormed());      

console.log("^".isWellFormed());       

console.log(oldname.toWellFormed());     

console.log("%".toWellFormed());       

console.log(world.toWellFormed());    

console.log("ok".toWellFormed());       

console.log("&".toWellFormed());       

console.log(oldname.trimEnd());        

console.log(world.trimEnd());      

console.log(hello.trimEnd());         

console.log(java.trimEnd());         

console.log(alfa.trimEnd());         

console.log("5".padStart(3, "0"));      

console.log(oldname.padStart(10, "*"));  

console.log("12".padStart(4, "0"));     

console.log(alfa.padStart(6, "_"));    

console.log(java.padStart(5, "-"));      

console.log("5".padEnd(3, "0"));        

console.log(oldname.padEnd(10, "*"));    

console.log("12".padEnd(5, "0"));        

console.log(alfa.padEnd(6, "_"));       

console.log(java.padEnd(5, "-"));      

console.log("Ha".repeat(3));            

console.log("#".repeat(5));            

console.log("Hi ".repeat(2));            

console.log("OK".repeat(4));            

console.log("=".repeat(10));           

console.log(oldname," Hasan".replaceAll("Hasan", "Ali"));

console.log("aaa".replaceAll("a", "b"));               

console.log("123123".replaceAll("1", "9"));             

console.log("hello hello".replaceAll("hello", "hi"));   

console.log("x-x-x".replaceAll("-", "+"));           

console.log("=".repeat(10));           

console.log(oldname," Hasan".replaceAll("Hasan", "Ali"));

console.log("aaa".replaceAll("a", "b"));               

console.log("123123".replaceAll("1", "9"));             

console.log("hello hello".replaceAll("hello", "hi"));   

console.log("x-x-x".replaceAll("-", "+")); 