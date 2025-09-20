// trivial mock handlers
export function getUsersHandler(){ return { status:200, body:["alice","bob"]}; }
export function postLoginHandler(u,p){ return (u&&p) ? {status:200} : {status:400}; }
