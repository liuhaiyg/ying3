import React, { Component, Fragment } from 'react';
import "./Footer.css"
import axios from "axios"



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            text: [],
            txt: []
        }
    }

    componentDidMount() {
        // console.log('componentDidMount-----------组件挂在完成的时刻')
        axios.get('http://localhost:3000/name')
            .then(
                (res) => {
                    console.log("获取数据成功" + JSON.stringify(res))
                    this.setState({
                        list: res.data.xm.container,
                        text: res.data.xm.container
                    })
                })
            .catch((error) => { console.log("获取数据失败" + error) })

    }

    render() {
        return (
            <div>
                <div className="site-footer">
                    <div className="container">
                        <div className="footer-service">
                            <ul className="list-service">
                                {
                                    this.state.list.map((item, index) => {
                                        return (
                                            <Fragment key={item + index}>
                                                {
                                                    item.footerservice.map((fooItem, fooIndex) => {
                                                        return (
                                                            <li key={fooItem + fooIndex}>
                                                                <a href="##">{fooItem.text}</a>
                                                            </li>
                                                        )

                                                    })
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="footer-links">
                            {
                                this.state.text.map((item, index) => {
                                    return (
                                        <Fragment key={item + index}>
                                            {
                                                item.collinks.map((colItem, colIndex) => {
                                                    return (
                                                        <dl className='col-links' key={colItem + colIndex}>
                                                            <dt>{colItem.title}</dt>
                                                            {
                                                                colItem.text1.map((Titem, Tindex) => {
                                                                    return (
                                                                        <dd key={Titem + Tindex}><a href='##'>{Titem.text}</a></dd>
                                                                    )
                                                                })
                                                            }
                                                        </dl>
                                                    )
                                                })
                                            }
                                            <div className="col-right">
                                                <div className="phone">{item.phone}</div>
                                                <p className="time">{item.time}</p>
                                                <a className="kefu" href='##'>
                                                    <em className="img"></em>
                                                    <span className="text">{item.text}</span>
                                                </a>
                                                <div className="follow">
                                                    {item.text1}
                                                    <img src={item.pic1} width="24" height="24" className="wb" alt="" />
                                                    <img src={item.pic2} width="24" height="24" className="wx" alt='' />
                                                </div>
                                            </div>
                                            <img src={item.pic3} width="126" height="126" className="wm" alt='' />
                                        </Fragment>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="site-info">
                    <div className="container">
                        <div className="logo ir"></div>
                        <div className="info-text">
                            {
                                this.state.text.map((item, index) => {
                                    return (
                                        <Fragment key={item + index}>
                                            {
                                                item.sites.map((sitesItem, sitesIndex) => {
                                                    return (
                                                        <p className='sites' key={sitesItem + sitesIndex}>
                                                            {
                                                                sitesItem.link.map((linkItem, linkIndex) => {
                                                                    return (
                                                                        <span key={linkItem + linkIndex}>
                                                                            <a href="##" >{linkItem.name}</a>
                                                                            <span className="sep">{linkItem.gang}</span>
                                                                        </span>
                                                                    )
                                                                })
                                                            }
                                                        </p>
                                                    )
                                                })
                                            }
                                        </Fragment>
                                    )
                                })
                            }

                            <p>©
                                <a href="##">mi.com</a> 京ICP证110507号
                                <a href="##">京ICP备10046444号</a>
                                <a href="##">京公网安备11010802020134号</a>
                                <a href="##">京网文[2020]0276-042号</a> <br />
                                <a href="##">（京）网械平台备字（2018）第00005号</a>
                                <a href="##">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
                                <a href="##">营业执照</a>
                                <a href="##">医疗器械质量公告</a> <br />
                                <a href="##">增值电信业务许可证</a>&nbsp;网络食品经营备案 京食药网食备202010048 &nbsp;
                                <a href="##">食品经营许可证</a> <br />
                                违法和不良信息举报电话：171-5104-4404&nbsp;
                                <a href="##">知识产权侵权投诉</a>&nbsp;本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                            </p>
                        </div>
                        <div className="info-links">
                            <a href="##"><img src="http://localhost:3000/images/ia_100000343.png" alt='' /></a>
                            <a href="##"><img src="http://localhost:3000/images/ia_100000344.png" alt='' /></a>
                            <a href="##"><img src="http://localhost:3000/images/ia_100000345.png" alt='' /></a>
                            <a href="##"><img src="http://localhost:3000/images/ia_100000346.png" alt='' /></a>
                            <a href="##" className="safe-auth">
                                <img src="http://localhost:3000/images/ia_100000347.png" className="img1" alt='' />
                                {/* <!-- <img src="./assets/img/ia_100000348.png" class="img2"> --> */}
                            </a>
                        </div>
                    </div>
                    <div className="slogan"></div>
                </div>
            </div>

        );
    }
}

export default Footer;