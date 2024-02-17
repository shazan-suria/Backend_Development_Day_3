function greet(name, callback){
    const greeting = "Hello "+name
    console.log(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("Shazan",displayGreeting)

// Callback hell 

getUser(function(user){
    getComputedStyle(user.id ,function(post){
        displayUserInfoAndPost(user,post,function(){
            console.log("User info and post succesfully displayed")
        })
    })
})
