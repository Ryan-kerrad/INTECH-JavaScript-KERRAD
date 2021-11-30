hanoi(3, 1, 3)

function hanoi(n, t1, t3){
    const t2 = 6-t1-t3
    if (n == 1) {
        console.log(t1 + " ==> " + t3)
    }
    else{
        hanoi(n-1, t1, t2)
        console.log(t1 + " ==> " + t3)
        hanoi(n-1, t2, t3)
    }
}