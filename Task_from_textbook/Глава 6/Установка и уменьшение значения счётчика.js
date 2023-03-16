function makeCounter() {
    counter.count = 0;

    function counter(){
      return counter.count++;
    };

    counter.set = val => counter.count = val;

    counter.decrease = () => counter.count--

    return counter
}