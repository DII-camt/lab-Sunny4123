const hanoi = (n, a, c, b) => {
    if (n == 0) {
        return;
    }
    hanoi(n - 1, a, b, c)
    console.log(a + " -> " + c);
    hanoi(n - 1, b, c, a)

};
hanoi(3,'a','c','b');