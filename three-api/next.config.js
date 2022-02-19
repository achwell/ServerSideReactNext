const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


module.exports = (phase,{ defaultConfig }) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env:{
        DB_USER:'axelwulff',
        DB_PASSWORD:'tMeO1ePoWptrlxrb'
      },
      //basePath:'/doggy',
      // async redirects(){
      //     return [
      //         {
      //             source:'/posts',
      //             destination:'/',
      //             permanent:true
      //         }
      //     ]
      // },
      async headers(){
        return [
          {
            source:'/posts',
            headers:[
              {
                key:'x-awesome',
                value:'my awesome value'
              }
            ]
          }
        ]
      },
      // compress:false
    }
  }

  return {
    env:{
      DB_USER:'axelwulff',
      DB_PASSWORD:'tMeO1ePoWptrlxrb'
    }
  }

}