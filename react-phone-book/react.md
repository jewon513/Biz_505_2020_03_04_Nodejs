## React에서 변수

- props와 state형 변수가 존재

  > - props  
  >   상위(부모) 컴포넌트로 부터 전달받은 모든 값들
  > - state  
  >   현재 컴포넌트내에서 자유롭게 읽고, 제한적으로 변경할 수 있는 변수

- state의 제한적 변경
  > - react는 sate형 변수의 값이 변동되면, 화면을 다시 rendering 하기 때문에 함부로 변경하지 못하도록 하고 반드시 this.setState() 메서드 내에서만 변경하도록 허락한다
  > - 즉 this.aa = 3 과 같은 코드는 절대로 사용이 불가능 하다.
  > - this.setState( {this.aa : 3}) 과 같은 방식으로 변경 한다.
  > - this.setState() 메섣에서 state형 변수를 변경하면, 정해진 LifeCycle에 따라 화면을 다시 rendering 한다.

## React에서 컴포넌트 공통변수 사용

- Main 컴포넌트에 포함된 Sub 컴포넌트에서 공통으로 변수를 사용하고자 할때는 Main 컴포넌트에서 state 형 변수를 선언하고 각각 Sub 컴포넌트에 props로 내려 보내면 된다. 단, Sub 컴포넌트에서 이 변수는 절대 변경이 불가능하다. 그렇다면 어떻게 변경을 해야 할까?

- Sub 컴포넌트에서 변화가 생긴 변수값을 이웃하는 컴포넌트에서도 공유하기
  > - 서브로 연결되어 있는 컴포넌트 1곳에서 변수를 변경하면 다른 이웃하는 또는 연관던 컴포넌트들에 변경된 변수값이 보이도록 하고자 할때가 있다
  >   - 첫번째 Main 컴포넌트에서 state 변수 선언
  >   - 두번째 Main 컴포넌트에서 state 변수를 변경하는 method를 선언
  >   - 세번째 이 method를 값을 변경하고자 하는 sub 컴포넌트에게 props로 전달
  >   - 이때 Main에 선언된 컴포넌트에 매개변수를 받을 수 있도록 선언할 수 있다.
  >   - 네번째 props로 전달받은 method를 callback으로 호출한다.
  >   - 그러면, 실제로는 main 컴포넌트에 선언된 method가 실행되면서 main 컴포넌틍 선언된 state 변수가 변경이 될 것이다.

## 단방향 변수 전달 방식

- Main 컴포넌트에서 state로 선언된 변수는 Main 컴포넌트 어디에서나 this.setState() method를 사용하여 값을 변경할 수 있다. 하지만 props로 Sub 컴포넌트로 전달이 되는 순간 그 변수는 모두 readonly 가 된다. 이러한 방식을 하향식, 단방향 변수 전달 방식이라고 한다. React는 state 변수들의 변화를 감지하여 화면을 rendering 하는 엔진을 가지고 있다. state로 선언된 변수를 Sub 컴포넌트에서 변경을 하게 되면 rendering이 수시로 생길 수 있고, 성능상 여러가지 문제를 일으킬 수 있다. 특히 메모리 누수 등으로 인하여 서버가 다운 될 수도 있다. 그러한 이유로 변수 변경을 제한하는 방식을 React에서는 사용하고 있고, 이는 철저한 캡슐화의 원칙이 담겨 있다고 볼 수 있다.
