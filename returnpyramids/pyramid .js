//The task is very simple.You must to return pyramids. 
//Given a number n you print a pyramid with n floors.

function pyramid(n){
    var empty = []
        for (var i = n; i > 1; i--)
        empty.push((' ').repeat(i-1) + '/' + (' ').repeat((n-i)*2) + '\\' + '\n')
        return empty.join([,]) +
            (((' ').repeat(0) + '/' + ('_').repeat((n-1)*2) + '\\' + '\n'))
    }