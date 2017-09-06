// import {isArray} from 'lodash';
import '../scss/index.scss';
import music from './mod/music';
import loading from './mod/loading';
import Toast from './mod/toast';
import Coin from './mod/coin';
var userTpl = require('./tpl/userList.tpl');
var bettingTpl = require('./tpl/betting.tpl');
var porkTpl = require('./tpl/porkOpen.tpl');
var coinTpl = require('./tpl/coin.tpl');
var dialogTpl = require('./tpl/bettingDialog.tpl');
var historyTpl = require('./tpl/history.tpl');
var myHistoryTpl = require('./tpl/myHistory.tpl');
// console.log(music);
FastClick.attach(document.body);
/**
 * 报错问题
 */
$.ajaxSettings = $.extend($.ajaxSettings, {
    error: function () {
        Toast('网络不给力~', function () {}, 5000);
        // loading.hide();

        setTimeout(function () {
            // location.reload();
        }, 2000);
    }
});

function App(opts) {
    var defaults = {};
    if (!(this instanceof App)) {
        return new App(opts);
    }
    this.config = $.extend(defaults, opts);
    this.myJb = 0; // 我的金币
    this.myJbOld = 0;
    this.myZs = 0; // 我的钻石
    this.issue = 0; //期号
    this.countTime = 0; // 倒计时
    this.countTimer = null; // 倒计时定时器
    this.isOpening = false; // 是否在开奖
    this.userList = []; //用户列表
    this.otherBetting = {}; //其他用户的下注
    this.myBetting = {}; // 用户自己的下注
    this.thisTimeBetting = 10; //下注金额 每次
    this.currentBetting = {};
    this.oldBettingHtml = '';
    this.currentIssueWinGold = []; // 当前赢钱数量
    this.robotsID = []; // 机器人id
    this.winner = null;
    this.init();
}

App.prototype.init = function () {
    var self = this;
    this.getCurrentInfo();
    this.loadImg();
    this.eventInit();

    setInterval(function () {
        self.diffGetInfo();
    }, 5000)
};

App.prototype.eventInit = function () {
    var self = this;
    // var elemBettingMain = $('#js-betting-main');
    // $(window).on('focus', function () {
    //     location.reload(true);
    // });
    $('.js-pork-item').on('click', function () {
        var elemThis = $(this);
        elemThis.find('.back').addClass("out").removeClass("in");
        setTimeout(function () {
            elemThis.find('.face').addClass("in").removeClass("out");
        }, 225)
    });
    // 关闭/开启 背景音乐
    $('.js-close-bg').on('click', function (e) {
        e.preventDefault();
        var elemThis = $(this);
        if (elemThis.hasClass('close')) {
            elemThis.removeClass('close');
            music.playBg();
        } else {
            elemThis.addClass('close');
            music.stopBg();
        }
    });
    // 下注
    $('#js-betting-main').on('click', 'div', function () {
        var index = $(this).index();
        if (self.myJb - self.thisTimeBetting < 0) {
            $('.js-dialog-charge').show();
            return;
        }
        if (self.isOpening) {
            return;
        }
        if (self.currentBetting[index + 1]) {
            self.currentBetting[index + 1] += self.thisTimeBetting;
        } else {
            self.currentBetting[index + 1] = self.thisTimeBetting;
        }
        self.myJb -= self.thisTimeBetting;
        $('.js-xyb').html(self.myJb);
        var elem = $('<div class="jb-item active" data-num="' + self.thisTimeBetting + '"></div>').appendTo($('.betting-all-wrapper').find('.betting-wrapper').eq(index + 5));
        setTimeout(function () {
            elem.removeClass('active');
        }, 100)
        $('.js-butn-betting').removeClass('gray');
    });
    //确定按钮
    $('.js-butn-betting').on('click', function () {
        var tmpArray = [];
        var totalNum = 0;
        if ($(this).hasClass('gray') || self.isOpening) {
            return;
        }
        $.each(self.currentBetting, function (key, v) {
            tmpArray.push({
                type: parseInt(key),
                value: v
            });
            totalNum += v;
        });
        $('.js-dialog-confirm').show().find('.js-betting-all').html(dialogTpl({
            list: tmpArray,
            totalNum: totalNum
        }));
    });
    //不下注
    $('.js-dialog-cancel').on('click', function (e) {
        e.preventDefault();
        $('.dialog-confirm').hide();
    });
    // 确定下注
    $('.js-dialog-ok').on('click', function (e) {
        e.preventDefault();

        self.ajaxBetting($(this));
    });
    //选择下注金额
    $('.js-butn-select').on('click', 'a', function () {
        self.thisTimeBetting = $(this).data('num');
        $(this).addClass('active').siblings().removeClass('active');
    })
    
    // 清除按钮
    $('.js-butn-cancel').on('click', function () {
        if ($('.js-butn-betting').hasClass('gray')) {
            return;
        }
        $('.js-xyb').html(self.myJbOld);
        $('.betting-all-wrapper').html(self.oldBettingHtml);
        // self.renderBetting(self.oldBetting);
    });
    // 往期开奖
    $('.js-butn-history').on('click', function () {
        self.getHistory();
    });
    // 关闭弹窗
    $('.js-butn-close').on('click', function () {
        $(this).parents('.dialog-default').hide();
    })
    // 我的历史
    $('.js-butn-my').on('click', function () {
        self.getMyHistory();
    })
}
/**
 * 图片资源加载
 */
App.prototype.loadImg = function () {
    var imgs = $('#js-img-all').find('img');
    var index = 0;
    // var self = this;
    // console.log();
    // loading.show('加载中...');
    imgs.each(function () {
        var img = new Image();
        img.src = $(this).attr('src');

        img.onload = function () {
            index += 1;
            // console.log(index);
            $('.js-process').css('width', (index / imgs.length * 90) + '%');
            if (index >= imgs.length) {
                // self.imgLoadedAll = true;
                // if (self.isGettedUserInfo) {

                // }
                setTimeout(function () {
                    $('.js-process').css('width', '100%');
                    setTimeout(function () {
                        $('.game-loading').hide();
                        $('.game-main').show();
                    }, 400)

                }, 1600)

            }
        }
    })
}
/**
 * 获取本期 信息
 */
App.prototype.getCurrentInfo = function () {
    var self = this;
    loading.show('加载中...');
    $.ajax({
        type: 'get',
        url: '/api/bjl/getRunningIssue',
        dataType: 'json',
        data: {
            _token: window._token
        },
        success: function (res) {
            loading.hide();

            // elem.removeClass('disabled');
            if (res.code == 0) {
                var userInfo = res.data.userPayInfo[0];
                self.myJbOld = self.myJb = Math.ceil(Number(userInfo.JB));
                self.myZs = Math.ceil(Number(userInfo.ZS));
                self.countTime = res.data.openAfter < 3 ? 3 : res.data.openAfter;
                self.issue = res.data.currentIssueId;

                $('.js-zs').html(self.myZs);
                $('.js-xyb').html(self.myJb);
                $('.js-nick').html(userInfo.nickname);
                $('.js-avatar').attr('src', userInfo.avatar);
                $('.js-issue').html(self.issue);
                self.countFn();
                self.renderUser(res.data.userPayInfo);
                self.renderBetting(res.data.userPayInfo);
                self.otherListOrders(res.data.userPayInfo);
            } else {
                loading.hide();
                Toast(res.msg);
            }
        }
    });
}
/**
 * 每隔5s 请求一次 对比数据
 */
App.prototype.diffGetInfo = function () {
    var self = this;
    if (self.isOpening) {
        return;
    }
    $.ajax({
        type: 'get',
        url: '/api/bjl/getRunningIssue',
        dataType: 'json',
        data: {
            _token: window._token
        },
        success: function (res) {

            if (res.code == 0) {
                self.diffOtherListOrders(res.data.userPayInfo);
                self.otherListOrders(res.data.userPayInfo);

            }
        }
    });
}
/**
 * 记录其他用户下注情况
 */
App.prototype.otherListOrders = function (list) {
    if (list.length > 0) {
        for (var i = 1; i < 5; i++) {
            this.otherBetting[list[i].userId] = list[i].paySumInfo;
        }
    }
}
/**
 * 对比两次数据的不同
 */
App.prototype.diffOtherListOrders = function (list) {
    var self = this;
    if (list.length > 0) {
        for (var i = 1; i < 5; i++) {
            // otherBetting[list[i].userId] = list[i].paySumInfo;
            if (this.otherBetting[list[i].userId]) {
                var tmp = this.otherBetting[list[i].userId];
                var index = 1;
                if (index < 3) {
                    index = i - 1;
                } else {
                    index = i;
                }
                $.each(list[i].paySumInfo, function (key, value) {
                    if (value > tmp[key]) {
                        var tmpArray = self.calculateNum(value);
                        var html = '';
                        tmpArray.forEach(function (v) {
                            html += `
                                <div class="jb-item active-${index}" data-num="${v}"></div>
                            `;
                        });
                        $(html).appendTo($('.betting-wrapper').eq(parseInt(key) - 1));
                        setTimeout(function () {
                            $('.betting-wrapper').eq(parseInt(key) - 1).find('.jb-item').removeClass(`active-${index}`);
                        }, 0)
                    }
                })
            }
        }
    }
}
/**
 * 渲染用户列表
 */
App.prototype.renderUser = function (list) {
    var self = this;
    self.userList[2] = list[0];
    for (var i = 1; i < 5; i++) {
        if (i < 3) {
            self.userList[i - 1] = list[i];
        } else {
            self.userList[i] = list[i];
        }
    }
    $('.js-user-list').html(userTpl({
        list: list
    }));
}
/**
 * 渲染用户下注情况
 */
App.prototype.renderBetting = function (list) {
    var self = this;
    var otherList = [];
    var myList = {};
    var key;

    if (list && list.length > 0) {
        for (var i = 1; i < 5; i++) {
            var tmp = {};
            for (key in list[i].paySumInfo) {
                tmp[key] = self.calculateNum(list[i].paySumInfo[key]);
            }
            self.robotsID.push(list[i].userId);
            otherList.push(tmp);
        }

        for (key in list[0].paySumInfo) {
            myList[key] = self.calculateNum(list[0].paySumInfo[key]);
        }
        self.oldBettingHtml = bettingTpl({
            otherList: otherList,
            myList: myList
        });
    } else {
        self.oldBettingHtml = `
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>

            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
            <div class="betting-wrapper"></div>
        `;
    }

    $('.betting-all-wrapper').html(self.oldBettingHtml);
}
/**
 * 计算 值
 */
App.prototype.calculateNum = function (num) {
    var nowNum = parseInt(num, 10);
    var tmp = [];
    while (nowNum >= 10) {
        if (nowNum - 1000 >= 0) {
            tmp.push(1000);
            nowNum -= 1000;
        } else if (nowNum - 100 >= 0) {
            tmp.push(100);
            nowNum -= 100;
        } else if (nowNum - 50 >= 0) {
            tmp.push(50);
            nowNum -= 50;
        } else if (nowNum - 10 >= 0) {
            tmp.push(10);
            nowNum -= 10;
        }
    }
    return tmp;
}
/**
 *  定时器
 */
App.prototype.countFn = function () {
    var self = this;
    console.log('重新开始计时');
    self.renderCount();
    this.countTimer = setInterval(function () {
        self.countTime -= 1;
        if (self.countTime < 0) {
            self.countTime = 0;
        }
        self.renderCount();
    }, 1000);
}
/**
 * 倒计时
 */
App.prototype.renderCount = function () {
    var self = this;

    $('.js-count-time').html(self.countTime);
    if (self.countTime <= 5 && !self.isOpening) {
        self.isOpening = true;
        $('.js-dialog-confirm').hide()
        $('.js-butn-betting').addClass('gray');
        loading.show('正在封盘...');
        // console.log('正在开票');
        // self.rendBetting(self.oldBetting);
        self.renderBetting(self.oldBetting);
        self.getOpenResult();
    }
    if (self.countTime <= 0) {
        clearInterval(self.countTimer);
        setTimeout(function () {
            // self.openTouzi();
        }, 300)
    }

}
/**
 * 下注
 */
App.prototype.ajaxBetting = function (elem) {
    var self = this;
    if (elem.hasClass('disabled') || self.isOpening) {
        return;
    }
    elem.addClass('disabled');
    loading.show();

    $.ajax({
        type: 'post',
        url: '/api/bjl/doPay',
        data: {
            payList: self.currentBetting,
            issue: self.issue,
            _token: window._token
        },
        dataType: 'json',
        success: function (res) {
            elem.removeClass('disabled');
            loading.hide();
            $('.js-dialog-confirm').hide();
            $('.js-butn-betting').addClass('gray');
            // self.oldBetting = res.data.paySumInfo;
            if (res.code == 0) {
                // 下注成功
                self.currentBetting = {};
                self.oldBettingHtml = $('.betting-all-wrapper').html();
            } else {
                Toast(res.msg);
                // self.rendBetting(self.oldBetting);
                $('.betting-all-wrapper').html(self.oldBettingHtml);
            }
            if (res.data.JB) {
                self.myJbOld = self.myJB = Math.ceil(Number(res.data.JB));
                self.myZs = Math.ceil(Number(res.data.ZS));
                $('.js-xyb').html(self.myJB);
                $('.js-zs').html(self.myZs);
            }
            // console.log(self.currentBetting);
        },
        error: function () {
            loading.hide();
            elem.removeClass('disabled');
            Toast('网络不给力~', function () {}, 3000);
        }
    });
};

/**
 * 开奖结果
 */
App.prototype.getOpenResult = function () {
    var self = this;
    $.ajax({
        type: 'post',
        url: '/api/bjl/getIssueOpenResult',
        dataType: 'json',
        data: {
            _token: window._token,
            issue: self.issue,
            robotsID: self.robotsID
        },
        success: function (res) {
            // elem.removeClass('disabled');
            if (res.code == 0) {
                self.issue = res.data.currentIssueId;
                // self.currentIssueWinGold = res.data.winGold;
                self.countTime = res.data.openAfter;
                self.myJB = Math.ceil(res.data.JB);
                self.myZs = Math.ceil(res.data.ZS);
                self.currentIssueWinGold = res.data.winner;
                self.renderResult(res.data.winType);
                self.winner = res.data.winner;
                self.countFn();
                $('.js-issue').html(self.issue);

            } else {
                // loading.hide();
                // Toast(res.msg);
                setTimeout(function () {
                    self.getOpenResult();
                }, 1000)
            }
        }
    });
};
/**
 * 出牌结果
 */
App.prototype.renderResult = function (winType) {
    var self = this;
    var tmpWin1 = [];
    var tmpWin2 = [];
    var openIndex = 0;
    winType.split(',').forEach(function (v, index) {
        var tmp = {};
        tmp.value = Math.ceil(parseInt(v) / 4);
        switch (parseInt(v) % 4) {
            case 1:
                tmp.type = 'fang';
                break;
            case 2:
                tmp.type = 'mei';
                break;
            case 3:
                tmp.type = 'hong';
                break;
            default:
                tmp.type = 'hei';
        }
        if (index < 3) {
            tmpWin1.push(tmp);
        } else {
            tmpWin2.push(tmp);
        }
    });
    loading.hide();
    // console.log(tmpWin);
    $('.js-open-main').eq(0).html(porkTpl({
        list: tmpWin1
    }));
    $('.js-open-main').eq(1).html(porkTpl({
        list: tmpWin2
    }));
    $('.js-pork-item').each(function (index) {
        var elemThis = $(this);
        var time = [1, 3, 5, 2, 4, 6];
        setTimeout(function () {
            elemThis.find('.back').addClass("out").removeClass("in");
            setTimeout(function () {
                openIndex += 1;
                elemThis.find('.face').addClass("in").removeClass("out");
                if (openIndex > 5) {
                    self.allOpen();
                }
            }, 225)
        }, 1000 * time[index]);
    });
}

/**
 *  开牌完成后的 执行下一轮
 */
App.prototype.allOpen = function () {
    var self = this;
    // if (this.winner[0] && this.winner[0].winGold > 0){
    //     console.log('中奖了');
    // }

    this.winner.forEach(function (v, index) {
        // console.log(v, index);
        if (index == 0 && v.winGold > 0) {
            $('.js-dialog-lotteryed').show().find('p').html(v.winGold);
            setTimeout(function () {
                $('.js-dialog-lotteryed').hide().find('p').html('-');
            }, 3000)
            new Coin({
                density: parseInt(v.winGold / 4)
            });
            setTimeout(function () {
                $('.js-user-item').eq(2).find('span').addClass('active').html(v.winGold);
            }, 800)
        } else if (index < 3 && v.winGold > 0) {
            setTimeout(function () {
                $('.js-user-item').eq(index - 1).find('span').addClass('active').html(v.winGold);
            }, 800)
        } else if (index >= 3 && v.winGold > 0) {
            setTimeout(function () {
                $('.js-user-item').eq(index).find('span').addClass('active').html(v.winGold);
            }, 800)
        }

    })
    $('.js-coin-wrapper').html(coinTpl({
        list: this.winner
    }))
    /**
     * 3s 后清除 发奖的数据
     */
    setTimeout(function () {
        self.reInitData();

        $('.js-user-item').find('span').removeClass('active').html('');
        $('.js-coin-wrapper').html('');
    }, 2000);


}
/**
 * 重新初始化数据
 */
App.prototype.reInitData = function () {
    this.isOpening = false; // 是否在开奖
    this.otherBetting = {}; //其他用户的下注
    this.myBetting = {}; // 用户自己的下注
    this.currentBetting = {};
    this.oldBettingHtml = '';
    this.currentIssueWinGold = []; // 当前赢钱数量
    this.winner = null;
}
/**
 * 往期开奖
 */
App.prototype.getHistory = function () {
    var self = this;
    var elem = $('.js-butn-history');
    if (elem.hasClass('disabled')) {
        return;
    }
    elem.addClass('disabled');
    loading.show();

    $.ajax({
        type: 'get',
        url: '/api/bjl/getLatestIssueInfo',
        dataType: 'json',
        data: {
            _token: window._token,
            size: 10
        },
        success: function (res) {
            loading.hide();
            elem.removeClass('disabled');
            if (res.code == 0) {
                $('.js-dialog-history').show().find('.history-list').html(self.changePork(res.data));
            } else {
                Toast(res.msg);
            }
        }
    });
}
/**
 * 计算值
 */
App.prototype.changePork = function (list, type) {
    var self = this;
    list.forEach(function (v) {
        var tmpArray = v.winType.split(',');
        v.zhuan = self.calculatePork(tmpArray[0], tmpArray[1], tmpArray[2]);
        v.xian = self.calculatePork(tmpArray[3], tmpArray[4], tmpArray[5]);
    });
    if (type) {
        return myHistoryTpl({
            list: list
        });
    }
    return historyTpl({
        list: list
    });

}
/**
 * 计算 牌面大小
 */
App.prototype.calculatePork = function (num1, num2, num3) {
    var html = '';
    var num = 0;
    num1 = Math.ceil(num1 / 4);
    num2 = Math.ceil(num2 / 4);
    num3 = Math.ceil(num3 / 4);
    if (num1 < 10) {
        num += num1;
    }
    if (num2 < 10) {
        num += num2;
    }
    if (num3 < 10) {
        num += num3;
    }
    html += (num % 10) + '点';
    if (num1 == num2 || num1 == num3 || num3 == num2) {
        html += ', 对';
    }
    return html;
}
/**
 * 往期开奖
 */
App.prototype.getMyHistory = function () {
    var self = this;
    var elem = $('.js-butn-my');
    if (elem.hasClass('disabled')) {
        return;
    }
    elem.addClass('disabled');
    loading.show();

    $.ajax({
        type: 'get',
        url: '/api/bjl/getOrderList',
        dataType: 'json',
        data: {
            _token: window._token,
            size: 10
        },
        success: function (res) {
            loading.hide();
            elem.removeClass('disabled');
            if (res.code == 0) {
                $('.js-dialog-my').show().find('.record-list').html(self.changePork(res.data, true));
            } else {
                Toast(res.msg);
            }
        }
    });
}
App.prototype.changeMyBetting = function (list) {

}
App();