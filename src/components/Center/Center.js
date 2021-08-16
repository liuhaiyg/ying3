import React, { Component, Fragment } from 'react';
import './Center.css'
import axios from "axios"
import 'element-theme-default';
import { Carousel, Tabs, } from 'element-react';
import Aside from "../aside"
import Nav from "./Nav"
class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navlist: [],
            searchlist: [],
            contair1: [],
            lunbo: [],
            aside1: [],
            isToggleOn: true,
            dispaly: 'block',
            border: '1px solid #b0b0b0',
            span1: [],
            span2: [],
            bannerbox: [],
            bannerboxs: [],
            banner3: [],
            bannerbox2: [],
            aside: [],
            pop: []

        }
        this.handleClick = this.handleClick.bind(this);
        this.popClink = this.popClink.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:3000/name')
            .then(
                (res) => {
                    console.log("获取数据成功" + JSON.stringify(res))
                    this.setState({
                        navlist: res.data.xm.nav_list,
                        searchlist: res.data.xm.search_list,
                        contair1: res.data.xm.nav_list,
                        lunbo: res.data.xm.lunbo,
                        aside1: res.data.xm.aside1,
                        span1: res.data.xm.span1,
                        span2: res.data.xm.span2,
                        bannerbox: res.data.xm.bannerbox,
                        bannerboxs: res.data.xm.bannerbox1,
                        banner3: res.data.xm.banner3,
                        bannerbox2: res.data.xm.bannerbox2,
                        aside: res.data.xm.aside,
                        pop: res.data.xm.pop
                    })
                })
            .catch((error) => { console.log("获取数据失败" + error) })
    }

    render() {
        return (
            <div className="Center">
                <div className="con-nav">
                    <div className="con-logo">
                        <img src="./static/imgages/ia_100000415.png" width="56" height="56" alt="" />
                    </div>
                    <Nav />
                    {/* <!-- 搜索模块 --> */}
                    <div className="con-search" onClick={this.search}>
                        <input type="text" className="search" style={{ border: this.state.border }} onClick={this.handleClick} />
                        <button className="submit" style={{ border: this.state.border }}>
                            <img
                                src="./assets/img/搜索.png"
                                width="20"
                                height="20"
                                className="submitimg"
                                alt=''
                            />
                        </button>
                        <div className="search-list" style={{ display: this.state.display }}>
                            <ul>
                                {
                                    this.state.searchlist.map((item, index) => {
                                        return (
                                            <li className="list-first" key={item + index} onMouseOver={this.list}>
                                                <a href="##">{item.name}</a>
                                            </li>
                                        )

                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 轮播 */}
                <div className='lunbo'>
                    <div className="block">
                        <span className="demonstration"></span>
                        <Carousel trigger="click" height="460px">
                            {
                                this.state.lunbo.map((item, index) => {
                                    return (
                                        <Carousel.Item key={item + index}>
                                            <img src={item.pic} alt='' />
                                        </Carousel.Item>
                                    )
                                })
                            }
                            <Aside />
                        </Carousel>
                    </div>
                </div>
                <div className="hero-sub">
                    <ul className="span1">
                        {this.state.span1.map((item, index) => {
                            return (
                                <li key={item + index}>
                                    <a href='##'><img src={item.pic} alt='' />{item.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="span2">
                        {
                            this.state.span2.map((item, index) => {
                                return (
                                    <li key={item + index}>
                                        <a href='##'><img src={item.pic} alt='' /></a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="page-main">
                    <div className="main-contair">
                        {/* <!-- 手机模块 --> */}
                        {
                            this.state.bannerbox.map((item, index) => {
                                return (
                                    <Fragment key={item + index}>
                                        <div className="banner-box1-1">
                                            <img src={item.pic} alt='' width="1226" height="120" />
                                        </div>
                                        <div className="main-title">
                                            <h2>{item.name}</h2>
                                            {
                                                item.small.map((Item, Index) => {
                                                    return (
                                                        <Fragment key={Item + Index}>
                                                            <div className="more">
                                                                <a href="##">{Item.r_name1}
                                                                    <b>{Item.fuhao}</b>
                                                                </a>
                                                            </div>

                                                        </Fragment>

                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="main-hb">
                                            <ul className="hb-R">
                                                {
                                                    item.hbr.map((hbrItem, hbrINdex) => {
                                                        return (
                                                            <li key={hbrItem + hbrINdex}><a href="##"><img src={hbrItem.pic} alt='' /></a></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="hb-L">
                                                <ul className="banner1">
                                                    {
                                                        item.banner1.map((bItem, bIndex) => {
                                                            return (
                                                                <li className="banner1-item" key={bItem + bIndex}>
                                                                    <a href="##">
                                                                        <div className="item-img">
                                                                            <img src={bItem.pic} width="160" height="160" alt='' />
                                                                        </div>
                                                                        <h3>{bItem.name}</h3>
                                                                        <p className="desc">{bItem.desc}</p>
                                                                        <span className="num">{bItem.num}</span>
                                                                        <del className="num2">{bItem.num2}</del>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                        {
                            this.state.bannerboxs.map((item, index) => {
                                return (
                                    <Fragment key={item + index}>
                                        <div className="banner-box1">
                                            <img src={item.pic} alt='' width="1226" height="120" />
                                        </div>
                                        <h2>{item.name}</h2>
                                        {
                                            item.small.map((Item, Index) => {
                                                return (
                                                    <Fragment key={Item + Index}>
                                                        <Tabs activeName="2" onTabClick={(tab) => console.log(tab.props.name)} key={Item + Index}>
                                                            <Tabs.Pane label={Item.r_name1} name="1">
                                                                <div className="hb-L">
                                                                    {
                                                                        item.banner1.map((bItem, bIndex) => {

                                                                            return (
                                                                                <ul className="banner1" key={bItem + bIndex}>
                                                                                    {
                                                                                        bItem.banner1item.map((banItem, banIndex) => {
                                                                                            return (
                                                                                                <li className="banner1-item" key={banItem + banIndex}>
                                                                                                    <a href="##">
                                                                                                        <div className="item-img">
                                                                                                            <img src={banItem.pic} width="160" height="160" alt='' />
                                                                                                        </div>
                                                                                                        <h3>{banItem.name}</h3>
                                                                                                        <p className="desc">{banItem.desc}</p>
                                                                                                        <span className="num">{banItem.num}</span>
                                                                                                        <del className="num2">{banItem.num2}</del>
                                                                                                    </a>
                                                                                                </li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>

                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </Tabs.Pane>
                                                            <Tabs.Pane label={Item.r_name2} name="2">
                                                                <div className="hb-L">
                                                                    {
                                                                        item.banner2.map((bItem, bIndex) => {

                                                                            return (
                                                                                <ul className="banner1" key={bItem + bIndex}>
                                                                                    {
                                                                                        bItem.banner1item.map((banItem, banIndex) => {
                                                                                            return (
                                                                                                <li className="banner1-item" key={banItem + banIndex}>
                                                                                                    <a href="##">
                                                                                                        <div className="item-img">
                                                                                                            <img src={banItem.pic} width="160" height="160" alt='' />
                                                                                                        </div>
                                                                                                        <h3>{banItem.name}</h3>
                                                                                                        <p className="desc">{banItem.desc}</p>
                                                                                                        <span className="num">{banItem.num}</span>
                                                                                                        <del className="num2">{banItem.num2}</del>
                                                                                                    </a>
                                                                                                </li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>

                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </Tabs.Pane>
                                                            <Tabs.Pane label={Item.r_name3} name="3">
                                                                <div className="hb-L">

                                                                    {
                                                                        this.state.banner3.map((bItem, bIndex) => {

                                                                            return (
                                                                                <ul className="banner1" key={bItem + bIndex}>
                                                                                    {
                                                                                        bItem.banner1item.map((banItem, banIndex) => {
                                                                                            return (
                                                                                                <li className="banner1-item" key={banItem + banIndex}>
                                                                                                    <a href="##">
                                                                                                        <div className="item-img">
                                                                                                            <img src={banItem.pic} width="160" height="160" alt='' />
                                                                                                        </div>
                                                                                                        <h3>{banItem.name}</h3>
                                                                                                        <p className="desc">{banItem.desc}</p>
                                                                                                        <span className="num">{banItem.num}</span>
                                                                                                        <del className="num2">{banItem.num2}</del>
                                                                                                    </a>
                                                                                                </li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>

                                                                            )
                                                                        })
                                                                    }


                                                                </div>
                                                            </Tabs.Pane>
                                                        </Tabs>

                                                    </Fragment>

                                                )
                                            })
                                        }
                                        <div className="main-hb">
                                            <ul className="hb-R">
                                                {
                                                    item.hbR.map((hbrItem, hbrINdex) => {
                                                        return (
                                                            <li key={hbrItem + hbrINdex}><a href="##"><img src={hbrItem.pic} alt='' /></a></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                        {
                            this.state.bannerbox2.map((item, index) => {
                                return (
                                    <Fragment key={item + index}>
                                        <div className="banner-box1">
                                            <img src={item.pic} width="1226" height="120" alt='' />
                                        </div>
                                        <div className="main-title">
                                            <h2>{item.name}</h2>
                                            <div className="more">
                                                {
                                                    item.small.map((sItem, sIndex) => {
                                                        return (
                                                            <a href="##" key={sItem + sIndex}>{sItem.r_name}
                                                                <b></b>
                                                            </a>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="main-hd">
                                            <ul className="video-list">
                                                {
                                                    item.videoitem.map((vItem, vIndex) => {
                                                        return (
                                                            <li className="video-item" key={vItem + vIndex}>
                                                                <a href="##" title="点击播放视频">
                                                                    <div className="video-img">
                                                                        <img src={vItem.pic} width="296" height="180" alt='' />
                                                                        <span className="play" onClick={() => this.popClink()}>
                                                                            <i></i>
                                                                        </span>
                                                                    </div>
                                                                    <h3>{vItem.name}</h3>
                                                                    <p>{vItem.text}</p>
                                                                </a>
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </Fragment>

                                )

                            })
                        }

                    </div>

                </div>
                {
                    this.state.pop.map((item, index) => {
                        return (
                            <div className="pop" key={item + index}>
                                <div className="pop-opacity"></div>
                                <div className="pop-video">
                                    <div className="pop-header">
                                        <span className="pop-text">{item.text}</span>
                                        <span className="pop-del">{item.del}</span>
                                    </div>
                                    <div className="pop-mp4">
                                        <video className="Player" autoPlay="autoplay" loop="loop" controls muted="muted">
                                            <source src={item.video} className="source" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                <div className="aside1">
                    {
                        this.state.aside.map((item, index) => {
                            return (
                                <Fragment key={item + index}>
                                    <a className="aside1-item" key={item + index} href='##'>
                                        <div className="aside1-imgs">
                                            <img src={item.pic} className="aside1-img1" alt='' />
                                        </div>
                                        <span className="aside1-text">{item.text}</span>
                                    </a>
                                    <div className="aside1-content">
                                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/78c30d4f259ed43ab20e810a522a6249.png" className="content-img" alt='' />
                                        <span className="content-desc">扫码领取新人百元红包</span>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            display: prevState.isToggleOn ? 'block' : 'none',
            border: prevState.isToggleOn ? '1px solid #ff6700' : '1px solid #b0b0b0'
        }));
    }
    // 视频播放
    popClink() {
        let oplay = document.getElementsByClassName("play");
        let opop = document.getElementsByClassName("pop");
        let opopdel = document.getElementsByClassName("pop-del");
        let osource = document.getElementsByClassName("source");
        for (var i = 0; i < oplay.length; i++) {
            oplay[i].index = i;
            oplay[i].onmouseover = function () {
                this.style.background = "#ff6700";
                this.style.border = "2px solid #ff6700";
            }
            oplay[i].onmousedown = function () {
                opop[this.index].style.display = "block";
                osource[this.index].src = "http://localhost:3000/video/e25d81c4922fca5ebe51877717ef9b76.mp4";
            }
            oplay[i].onmouseout = function () {
                this.style.background = "";
                this.style.border = "";
            }
            for (var j = 0; j < opopdel.length; j++) {
                opopdel[j].index = j;
                opopdel[j].onmouseover = function () {
                    this.style.background = "rgba(243,83,83,1)";
                    this.style.color = "#fff";
                }
                opopdel[j].onmouseout = function () {
                    this.style.background = "";
                    this.style.color = "";
                }
                opopdel[j].onclick = function () {
                    opop[this.index].style.display = "none";
                    osource[this.index].src = "";
                }
            }

        }
    }
}

export default Center;