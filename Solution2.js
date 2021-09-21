// 2.  Questions:a, b and c are based on the following two arrays:
// users and products
// 	```js
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '17/05/2019 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '17/05/2019 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];


// 	a. Imagine you are getting the above users collection from a MongoDB 
// database. 

// 		a. Create a function called ***signUp*** which allows user 
// to add to the collection. If user exists, 
// inform the user that he has already an account.

function signUp(newEntry) {
    for (let uname of users) {
        if (uname.email == newEntry.email) {
            return "User already exists"
        }
    }
    var today = new Date()
    var ap = "AM"
    var hr = today.getHours()
    if (hr >= 12) {
        ap = "PM"
        hr = hr - 12
    }
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' ' + hr + ':' + today.getMinutes() + ' ' + ap
    // console.log(date)
    var charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var id = '';
    for ( var i = 0; i < 6; i++ ) {
        id += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    users.push({
        _id: id,
        username: newEntry.username,
        email: newEntry.email,
        password: newEntry.password,
        createdAt: date,
        isLoggedIn: false
    })
    return " User is signed up"
}

let newEntry = {
    username: 'shubhra',
    email: 'shubhra@gmail.com',
    password: '897635'
}
console.log(signUp(newEntry))
// console.log(users)


// 		b. Create a function called ***signIn*** which allows user 
// to sign in to the application


function signIn(user_det){
    for (let uname of users) {
        if (uname.email == user_det.email && uname.password == user_det.password) {
            uname.isLoggedIn = true
            return " User signed in"
        }
    }
}

console.log(signIn({email: 'shubhra@gmail.com',password: '897635'}))
// console.log(users)

// 	b. The products array has  three elements and each of them has 
// six properties. 

// 		a. Create a function called ***rateProduct*** which rates the 
// product

function rateProduct(user_rating){
    for(let product of products){
        if(product._id == user_rating.pid){
            const obj = {}
            obj["userId"] = user_rating.userId;
            obj["rate"] = user_rating.rate;
            
            product.ratings.push(obj)
            console.log(product.ratings)
            return product
        }
    }
}


user_rating = { 
    pid :  'aegfal',
    userId: 'lsde80', 
    rate: 3.5
}

// console.log(rateProduct(rating))
rateProduct(user_rating)
// console.log(Object.values(products))


// 		b. Create a function called ***averageRating*** which calculate
//  the average rating of a product
function avg_Rating(pid){
    let total_rating=0
    let total_users =0
    for(let product of products){
        if(product._id == pid){
            total_users = product.ratings.length;
            total_rating = product.ratings.map(pr=> total_rating+pr.rate)
            // for(let pr of product.ratings){
            //     total_rating=total_rating+pr.rate
            //     console.log(pr.rate)
            // }
        }
    }
    let avg = total_rating/total_users;
    
    return avg
}
console.log(avg_Rating("aegfal"))


// 	c. Create a function called ***likeProduct***. 
// This function will helps to like to the product if it is not liked and remove like if it was liked.


function like(pid,uid){
    for(let pr of products){
        if(pr._id == pid){
            console.log(pr.likes)
            for(let user of pr.likes){
                if(uid == user){
                    pr.likes.splice(pr.likes.indexOf(uid),1)
                    return pr.likes.length
                }
            }
            pr.likes.push(uid)
            return pr.likes.length
            
        }
    }
    
}
let pid ="aegfal";
let uid = "lsde80";  // 'fg12cy';//
console.log(like(pid,uid))
