//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { formatTime } from '../../utils/util'

const app = getApp<IMyApp>()

Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        msg: 'hello',
        markers: [{
            iconPath: '/resources/others.png',
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 50,
            height: 50
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            color: '#FF0000DD',
            width: 2,
            dottedLine: true
        }],
        controls: [{
            id: 1,
            iconPath: '/resources/location.png',
            position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50
            },
            clickable: true
        }]
    },
    //事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad() {
        this.setData!({
            logs: (wx.getStorageSync('logs') || []).map((log: number) => {
                return formatTime(new Date(log))
            })
        })

        if (app.globalData.userInfo) {
            this.setData!({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = (res) => {
                this.setData!({
                    userInfo: res,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData!({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },

    getUserInfo(e: any) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData!({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    clickMe() {
        if (this.data.msg === 'hello') {
            this.setData!({
                msg: 'hello world'
            })
        } else {
            wx.navigateTo({
                url: '../text/text'
            }) 
        }
    }
})
