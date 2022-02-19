const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase,{ defaultConfig }) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env:{
                DB_USER:TODO,
                DB_PASS:TODO,
                DB_NAME:TODO,
                EMAIL_USER:TODO,
                EMAIL_PASS:TODO
            }
        }
    }

    return defaultConfig;
}