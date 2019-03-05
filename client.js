const util =require('util');
const prompt = require('prompt');
const axios = require('axios');

const main = async () =>{
   prompt.start()
   prompt.message='';

   const get = util.promisify(prompt.get);

   try{
    const usernameSchema =[ {
       description:'Enter your username',
       name:'username',
       required:true
       }];
   
       const {username} = await get(usernameSchema);
       console.log(username);
 

   }
   catch(error){
      console.error(error);
       process.exit(1);
   }


   
}



main()