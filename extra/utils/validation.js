const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'trainee2@succedfdssive.tech',
        reviewerEmail: 'reviewer2@successive.tech',
    },
    {
        traineeEmail: 'trainee3@successive.tech',
        reviewerEmail: 'reviewer3@successive.tech',
    },
    {
        traineeEmail: 'trainee3@successive.tec',
        reviewerEmail: 'reviewer3@successive.tech',
    }
]
function validateEmail(mail) {
    let re = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/
    if(re.test(mail)) {
        return true;
    }
    else {
        return false;
    }
}


let valid = 0, invalid = 0;
function validateUsers(user) {
    user.forEach( function(input) {
        const { traineeEmail, reviewerEmail} = input  //destruct array object
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail) ) {
            valid += 1;
        }
        else {
            invalid += 1;
        }          
    });
console.log(`valid emails are ${valid} and invalid emails are ${invalid}`)
}

validateUsers(users);


