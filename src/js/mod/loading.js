import '../../scss/mod/loading.scss';


var elemLoading = $('#js-loading-block');
var o = {
    show: function (str) {
        elemLoading.find('p').html(str || '加载中...');
        elemLoading.show();
    },
    hide: function (){
        elemLoading.hide();
    }
}

export default o;