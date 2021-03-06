import React, { Component } from "react";
import BBsList from "./BBsList";
import BBsInsert from "./BBsInsert";
// import PropTypes from "prop-types";

const BBS_MAIN_URL = "http://localhost:5000/bbs";
const BBS_INSERT_URL = "http://localhost:5000/bbs/insert";

class BBsMain extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.timer = null;
  //     this.state = {
  //       isFetch: false,
  //       bbsList: []
  //     };
  //   }

  timer = "";
  state = {
    isFetch: false,
    bbsList: []
  };

  componentDidMount() {
    this.fetchBBsList();
    // setInterval( callback, timer )
    // 이전에 callback 함수가 종료되고 timer 시간이 경과하면 다시 반복하여 실행하라
    this.timer = setInterval(() => this.fetchBBsList(), 5000);
  }

  // 혹시 화면에 그려지는 여러 컴포넌트들의 연결이 끊어지면 실행되는 method인데 timer가 계속 작동되면 react 실행이 deadlock에 빠질 수 있다.
  // 반드시 WillunMount() method에서 timer를 멈추어 주어야 한다.
  componentWillUnmount() {
    this.timer = null;
  }

  // bbs 서버에서 리스트를 조회하여 오는 method
  // 처음에 isFetch 값을 false로 하고 fetch 함수가 실행되자마자 true로 세팅 하고 데이터를 가져오는 중이라고 표시할 수 있다
  // 그리고 함수가 완료되면 다시 false로
  fetchBBsList = () => {
    this.setState({ ...this.state, isFetch: true });

    // ES6 js에 새로운 Ajax method가 있는데 새로운 method를 사용해서 데이터를 조회해 오기
    fetch(BBS_MAIN_URL)
      .then(response => {
        // 문자열형으로 리턴된 가져온 데이터를 json type으로 변환하여 return하여 다음의 then result 변수에 주입이 된다.
        return response.json();
      })
      .then(result => {
        this.setState({
          bbsList: result,
          isFetch: false
        });
      })
      .catch(error => console.log(error));
  };

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  render() {
    const { bbsList } = this.state;

    return (
      <div className="w3-container">
        <header className="w3-green w3-padding-32 w3-center">
          <h2>BBS 2020</h2>
          <p>BBS 2020 Client with React</p>
        </header>
        <section className="w3-container">
          <p className="w3-container w3-gray">
            {this.state.isFetch ? "데이터 가져오는 중..." : "완료 ..."}
          </p>
          <BBsInsert bbs_main_url={BBS_MAIN_URL} />
          <BBsList bbsList={bbsList} bbs_main_url={BBS_MAIN_URL} />
        </section>
      </div>
    );
  }
}

// BBsMain.propTypes = {

// };

export default BBsMain;
