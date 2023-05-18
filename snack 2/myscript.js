const emailList = ['Carraway@gmail.com', 'Bachanan@gmail.com', 'Baker@gmail.com', 'Wilson@gmail.com']

const userName = prompt('Enter your email');

let correctMail = false;

for(let i = 0; i <  emailList.length; i++) {
    if(emailList[i] === userName){
        correctMail = true;
    }
}

if (correctMail){
    console.log ('You can joy the party');
} else {
    console.log ('you are not welcome')

    }