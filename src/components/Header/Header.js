import React, { Component, Fragment } from 'react';
import './Header.css'
import axios from "axios"
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "小米商城APP"
    }
    this.over = this.over.bind(this)
    this.out = this.out.bind(this)
    this.over1 = this.over1.bind(this)
    this.out1 = this.out1.bind(this)
  }
  componentDidMount() {
    // console.log('componentDidMount-----------组件挂在完成的时刻')
    axios.get('http://localhost:3000/name')
      .then(
        (res) => {
          console.log("获取数据成功" + JSON.stringify(res))
          this.setState({
            list: res.data.xm.data
          })
        })
      .catch((error) => { console.log("获取数据失败" + error) })

  }
  render() {
    return (
      <div className='header'>
        <div className='nav'>
          <div className='nav_left'>
            {
              this.state.list.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <a href="##" onMouseOver={() => this.over()}
                      onMouseOut={() => this.out()}
                    >{item.title}</a>
                    <span className='sep'>{item.gang}</span>
                  </Fragment>
                )
              })
            }
            <span className='download'>
              <div className='jiao'></div>
              {/* <span className='imgs' style={{background:'url(./img/ia_100000000.png)'}}></span> */}
              <img src="./img/ia_100000000.png" width="90" height="90" alt="" /><br />
              <p>{this.state.name}</p>
            </span>
          </div>
          <div className="center">
            <a href="##">登录</a>
            <span className="sep">|</span>
            <a href="##">注册</a>
            <span className="sep">|</span>
            <a href="##">消息通知</a>
          </div>
          <div className="nav_right" id="nav_right"
            onMouseOver={this.over1}
            onMouseOut={this.out1}
          >
            <a href="##">
              <img src="./img/ia_100000358.png" width="20" height="20" id="pic" alt='' />
              购物车
              <span className="ling" id="r_shop1">(0)</span>
            </a>
            <p className="shopping" id="shopping">
              <a href="##">购物车还没有商品，赶紧选购吧</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  over() {
    let odown = document.getElementsByClassName("download")[0];
    odown.style.display = "block";
  }
  out() {
    let odown = document.getElementsByClassName("download")[0];
    odown.style.display = "none";
  }
  over1() {
    let oshop = document.getElementsByClassName("shopping")[0];
    oshop.style.display = "block";
  }
  out1() {
    let oshop = document.getElementsByClassName("shopping")[0];
    oshop.style.display = "none"
  }
}

export default Header;