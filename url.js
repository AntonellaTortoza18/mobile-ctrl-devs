let apiUrl = "http://192.168.1.105:8000/"




if(process.env.NODE_ENV==="production"){
    apiUrl = process.env.REACT_APP_URL
}

module.exports=apiUrl