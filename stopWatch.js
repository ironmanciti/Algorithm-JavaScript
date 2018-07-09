//Stop Watch Program
//
//다음의 기능을 가진 Stop Watch 프로그램을 작성하라.
//start() method 를 부르면 시간 측정 시작.
//stop() method 를 부르면 시간 측정 종료.
//Stop Watch 에 저장된 duration 을 출력하면 start~stop 의 시간 보여줌.
//reset() method 를 부르면 duration 을 다시 0 으로 reset
//start 가 이미 되면 다시 start 시킬 수 없음
//stop 이 이미 되면 start 없이 stop  시킬 수 없음.
//사용방법: chrome-검사-console 에서 watch.start(), watch.stop(), watch.reset() 수행

//알고리즘
//StopWatch class 내에 start, stop, reset method 를 만든다.
//Stop watch 가 작동중인지 여부를 알 수 있는 변수를 만들고 start method 에서
// on 시키고, stop method 에서 off 시킨다.
//start method 에서는 start time 을 변수에 save 시킨다.
//stop method 에서는 top time 을 변수에 save 하고 stop - start 시간을
//초로 환산하여 return 한다.

function StopWatch(){
  let duration = 0
  let running = false
  let startTime, stopTime = 0;

  this.start = function(){
    if (running) {
      throw new Error("Stop watch is already running");
    }
    running = true;
    startTime = new Date();
  }
  this.stop = function(){
    if (!running){
      throw new Error("Stop watch is not running")
    }
    stopTime = new Date();
    duration = (stopTime.getTime() - startTime.getTime()) / 1000;
    return duration;
  }
  this.reset = function(){
    duration, startTime, stopTime = 0;
    running = false;
  }
}

watch = new StopWatch()
