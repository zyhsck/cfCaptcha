window.onload = function() {
    // 动态创建并插入样式
    const style = document.createElement('style');
    style.innerHTML = `
        .slider-container {
            position: relative;
            width: 300px;
            height: 50px;
            text-align: center;
        }

        .slider-bg {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #2196F3;
            border-radius: 25px;
            overflow: hidden;
        }

        .slider-block, .target-block {
            position: absolute;
            top: 0;
            width: 50px;
            height: 100%;
            background-color: #000;
            border-radius: 25px;
        }

        .slider-block {
            left: 0;
            cursor: pointer;
            transition: left 0.3s ease;
        }

        .target-block {
            background-color: #ff5722;
            pointer-events: none;
        }

        .slider-btn {
            position: absolute;
            width: 100%;
            padding: 10px;
            background-color: #ee2e05;
            color: white;
            font-size: 16px;
            border-radius: 20px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // 配置项
    const config = {
        captchaUrl: 'https://yourworkersurl.workers.dev/captcha',  // 获取验证码的 API
        verifyUrl: 'https://yourworkersurl.workers.dev/verify', // 验证的 API
        successCallback: handleSuccess, // 验证成功后的回调函数
        failureCallback: handleFailure, // 验证失败后的回调函数
    };

function _0x472b(){const _0x4d45ef=['410092qzMSRY','验证失败，重置滑块位置','catch','style','19041uNzDVx','3498564rTKnmI','captchaUrl','successCallback','error','滑块当前位置:','.slider-bg','&data=','transition','mousedown','sliderBlock','token','72136MuizNK','target-block','mousemove','ondragstart','stringify','32710UmYKsW','failureCallback','application/json','滑动验证按钮已点击','verifyUrl','left','touches','5fFHQqk','touchstart','touchmove','mouseup','querySelector','POST','clientX','appendChild','touchend','success','addEventListener','log','7122JVkssF','1141QFVqtg','abs','display','sliderPosition','click','12139344GewcKD','then','createElement','none','div','3908214KBIifY','getElementById','className','1202gOzzaG','0px'];_0x472b=function(){return _0x4d45ef;};return _0x472b();}function _0x2f15(_0x118a1e,_0x892167){const _0x472b50=_0x472b();return _0x2f15=function(_0x2f15a9,_0x40c84c){_0x2f15a9=_0x2f15a9-0x109;let _0x358a4b=_0x472b50[_0x2f15a9];return _0x358a4b;},_0x2f15(_0x118a1e,_0x892167);}const _0x2283e2=_0x2f15;(function(_0x5763c3,_0x188c55){const _0x256b5a=_0x2f15,_0x18a354=_0x5763c3();while(!![]){try{const _0x5ca4de=-parseInt(_0x256b5a(0x11f))/0x1+-parseInt(_0x256b5a(0x11d))/0x2*(parseInt(_0x256b5a(0x10f))/0x3)+-parseInt(_0x256b5a(0x124))/0x4+-parseInt(_0x256b5a(0x13b))/0x5*(-parseInt(_0x256b5a(0x11a))/0x6)+-parseInt(_0x256b5a(0x110))/0x7*(parseInt(_0x256b5a(0x12f))/0x8)+-parseInt(_0x256b5a(0x115))/0x9+-parseInt(_0x256b5a(0x134))/0xa*(-parseInt(_0x256b5a(0x123))/0xb);if(_0x5ca4de===_0x188c55)break;else _0x18a354['push'](_0x18a354['shift']());}catch(_0x3ec03a){_0x18a354['push'](_0x18a354['shift']());}}}(_0x472b,0xbf410),fetchCaptchaData(config[_0x2283e2(0x125)])[_0x2283e2(0x116)](_0x13a002=>{const _0x1c80b=_0x2283e2;if(_0x13a002['success']){const _0x2de389=_0x13a002['captcha'][_0x1c80b(0x113)],_0x346a6a=_0x13a002[_0x1c80b(0x12e)];initializeSlider(_0x2de389,_0x346a6a,config[_0x1c80b(0x138)],config[_0x1c80b(0x126)],config[_0x1c80b(0x135)]);}else console[_0x1c80b(0x10e)]('获取验证码失败');})[_0x2283e2(0x121)](_0x4cc43c=>{const _0x745b81=_0x2283e2;console[_0x745b81(0x127)]('Error:',_0x4cc43c);}));async function fetchCaptchaData(_0x36f2e6){const _0x22a66e=await fetch(_0x36f2e6);return await _0x22a66e['json']();}function initializeSlider(_0x45a095,_0x4efc0d,_0x2229d2,_0x5dd252,_0x13e78b){const _0x13b2af=_0x2283e2,_0x5e6f99=document[_0x13b2af(0x11b)](_0x13b2af(0x12d)),_0x536308=document['getElementById']('sliderBtn'),_0x5e2c7f=document[_0x13b2af(0x117)](_0x13b2af(0x119));_0x5e2c7f[_0x13b2af(0x11c)]=_0x13b2af(0x130),_0x5e2c7f['style'][_0x13b2af(0x139)]=_0x45a095+'px',document[_0x13b2af(0x13f)](_0x13b2af(0x129))[_0x13b2af(0x10a)](_0x5e2c7f);let _0x50f113=![],_0x56bfe1=0x0,_0x4729cb=0x0;_0x5e6f99['style'][_0x13b2af(0x139)]=_0x13b2af(0x11e),_0x536308['addEventListener'](_0x13b2af(0x114),()=>{const _0x496ad3=_0x13b2af;console['log'](_0x496ad3(0x137)),_0x536308[_0x496ad3(0x122)][_0x496ad3(0x112)]=_0x496ad3(0x118),_0x5e6f99[_0x496ad3(0x122)]['transition']=_0x496ad3(0x118);});const _0x12eaca=_0x450518=>{const _0x361f7f=_0x13b2af;_0x536308[_0x361f7f(0x122)][_0x361f7f(0x112)]===_0x361f7f(0x118)&&(_0x50f113=!![],_0x56bfe1=_0x450518,_0x5e6f99['style'][_0x361f7f(0x12b)]=_0x361f7f(0x118));},_0xa2265b=_0x13d752=>{const _0x473c18=_0x13b2af;if(!_0x50f113)return;let _0x3f93c7=_0x13d752-_0x56bfe1;if(_0x3f93c7<0x0)_0x3f93c7=0x0;if(_0x3f93c7>0xfa)_0x3f93c7=0xfa;_0x5e6f99['style'][_0x473c18(0x139)]=_0x3f93c7+'px',_0x4729cb=_0x3f93c7;},_0x4cc555=()=>{const _0x3f913d=_0x13b2af;if(!_0x50f113)return;_0x50f113=![],console[_0x3f913d(0x10e)](_0x3f913d(0x128),_0x4729cb);const _0x41da26=0x5;Math[_0x3f913d(0x111)](_0x45a095-parseInt(_0x4729cb))<=_0x41da26?(console[_0x3f913d(0x10e)]('验证通过'),verifyCaptcha(_0x4729cb,_0x4efc0d,_0x2229d2,_0x5dd252,_0x13e78b)):(console[_0x3f913d(0x10e)](_0x3f913d(0x120)),_0x5e6f99[_0x3f913d(0x122)][_0x3f913d(0x139)]=_0x3f913d(0x11e),_0x13e78b());};_0x5e6f99[_0x13b2af(0x10d)](_0x13b2af(0x12c),_0x1cb4f8=>_0x12eaca(_0x1cb4f8[_0x13b2af(0x109)])),document['addEventListener'](_0x13b2af(0x131),_0x5e8c89=>_0xa2265b(_0x5e8c89[_0x13b2af(0x109)])),document['addEventListener'](_0x13b2af(0x13e),_0x4cc555),_0x5e6f99[_0x13b2af(0x10d)](_0x13b2af(0x13c),_0x5ca4ba=>_0x12eaca(_0x5ca4ba[_0x13b2af(0x13a)][0x0][_0x13b2af(0x109)])),document['addEventListener'](_0x13b2af(0x13d),_0x15f1ac=>_0xa2265b(_0x15f1ac[_0x13b2af(0x13a)][0x0][_0x13b2af(0x109)])),document[_0x13b2af(0x10d)](_0x13b2af(0x10b),_0x4cc555),_0x5e6f99[_0x13b2af(0x132)]=()=>![];}async function verifyCaptcha(_0x20e10,_0x531098,_0x13915a,_0x3f9763,_0xa9e555){const _0x17ce15=_0x2283e2,_0x27a167=await fetch(_0x13915a+_0x17ce15(0x12a)+JSON[_0x17ce15(0x133)]({'sliderPosition':_0x20e10,'token':_0x531098}),{'method':_0x17ce15(0x140),'headers':{'Content-Type':_0x17ce15(0x136)}}),_0x3e8ee2=await _0x27a167['json']();_0x3e8ee2[_0x17ce15(0x10c)]?_0x3f9763():_0xa9e555();}

// 验证成功后的处理
function handleSuccess() {
    alert('验证通过');
    
}

// 验证失败后的处理
function handleFailure() {
    alert('验证失败，请重试');
    const sliderBlock = document.getElementById('sliderBlock');
    sliderBlock.style.left = '0px'; // 重置滑块位置
}
}
