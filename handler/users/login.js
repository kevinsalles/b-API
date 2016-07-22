var crypto = require('crypto'); 
var rand = require('csprng'); 
var mongoose = require('mongoose'); 
var m_users = require('../../model/model_users');  

exports.login = function(email,password,callback) {
    m_users.find({email: email},function(err,users){
        if(users.length != 0){
            var temp = users[0].salt; 
            var hash_db = users[0].hashed_password; 
            var id = users[0].token; 
            var newpass = temp + password; 
            var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex"); 
            if(hash_db == hashed_password){
                callback({'response':"Login Sucess",'res':true,'token':id});
            }
            else{
                callback({'response':"Invalid Password",'res':false});
            } 
        }
        else {
            callback({'response':"User does not exist",'res':false});  
        } 
    });
}
