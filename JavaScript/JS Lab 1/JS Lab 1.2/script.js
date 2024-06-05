var n = 0, sum = 0;
do{
    n = prompt(isNaN(n)? 'Enter numeric value only!': "Enter a number here.")
    if(!isNaN(n)){
        sum += +n
        console.log(sum)
    }
}while(sum <= 100 && n != 0)


document.write('<h1>The sum of entererd N values is ' + sum +'</h1>')