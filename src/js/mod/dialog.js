// import dice from './dice';
// console.log(dice);


// function createDice(id, callback) {
//     return dice(document.getElementById(id), {
//         edgeLength: 50, // 色子其实是个正方体，它的棱长。类型为数字，单位像素
//         radius: 5, // 12个顶点的圆角，一般设置为棱长的1/20为合适，因为这是一个空心正方体，实际上只有6个面，所以不宜设置过大，避免视线穿透。类型为数字，单位像素
//         hasShadow: true, // 色子下面是否有阴影，类型为布尔
//         shadowTop: 15, // 阴影离外层容器DOM顶部的距离，类型为数字，单位百分之（如设置为80则为80%）
//         keepAnimationTime: 1000, // 色子在旋转的时候首先会匀速旋转一段时间，这里定义这个时长。类型为数字，单位毫秒
//         endAnimationTime: 0, // 上述匀速旋转完毕后会逐渐减速停下来，这里定义这个减速到停下的时长。类型为数字，单位毫秒
//         onKeepAnimationEnd:function(){
//             callback && callback();
//         }
//         // onRollEnd: function () {
            
//         // } // 不论是否有动画效果和任何浏览器，在一次旋转完毕后的回调函数，其中this指向当前色子的实例，第一个参数本次旋转的结果。类型函数
//     });
// }
// myNewDice.roll(1);

export default function (resultArray, callback) {
    
    $('#js-dice-area1').find('.dice_wrapper').addClass('roll-' + resultArray[0]);
    
    setTimeout(function () {
        $('#js-dice-area2').find('.dice_wrapper').addClass('roll-' + resultArray[1]);
    }, 500);
    setTimeout(function () {
        $('#js-dice-area3').find('.dice_wrapper').addClass('roll-' + resultArray[2]);
        setTimeout(function () {
            callback && callback();
        }, 1200)
    }, 1000)

}