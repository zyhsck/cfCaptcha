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

(function(_0x288cea,_0x2fbfa2){const _0x5ba318=_0x288cea();function _0x12e642(_0x5c4ece,_0x901e70,_0x9e38a7,_0x15fdc5){return _0x2d05(_0x5c4ece-0x263,_0x9e38a7);}function _0x465b1d(_0x2286f9,_0x3001f8,_0x1f1a15,_0x559a45){return _0x2d05(_0x3001f8-0x37a,_0x2286f9);}while(!![]){try{const _0x1eda03=parseInt(_0x465b1d(0x54c,0x52c,0x535,0x568))/(0x1348+-0x1b79*0x1+0x832)+parseInt(_0x12e642(0x440,0x407,0x467,0x42b))/(0x1b0e+-0x29*-0x3+0x1*-0x1b87)*(parseInt(_0x465b1d(0x553,0x530,0x4fc,0x545))/(0x10bf+0x2146+-0xad*0x4a))+parseInt(_0x12e642(0x452,0x442,0x41d,0x411))/(0x602+-0x2008+0x1a0a)*(parseInt(_0x12e642(0x46c,0x452,0x47c,0x4a9))/(0x690+-0x723+0x98))+parseInt(_0x12e642(0x47d,0x447,0x474,0x4bc))/(0x18b+0x1455+-0x15da)+parseInt(_0x465b1d(0x57e,0x5a7,0x5a9,0x5df))/(0x1f7b*0x1+0x61d*-0x1+-0x1*0x1957)*(parseInt(_0x465b1d(0x529,0x56a,0x5a7,0x569))/(0x1acb+0x24b6+-0x3f79))+parseInt(_0x465b1d(0x5c3,0x585,0x5ab,0x5a2))/(-0xf93+0x68f+-0x14b*-0x7)*(parseInt(_0x12e642(0x443,0x47a,0x402,0x411))/(-0x1aff+-0xd09+0x2812))+-parseInt(_0x465b1d(0x5af,0x58a,0x58e,0x5be))/(0x80e*-0x4+-0x1*0x73f+0x2782);if(_0x1eda03===_0x2fbfa2)break;else _0x5ba318['push'](_0x5ba318['shift']());}catch(_0x40d928){_0x5ba318['push'](_0x5ba318['shift']());}}}(_0x77b2,-0x1*0xe697b+-0x47b6f+0x1e0570),fetchCaptchaData(config[_0x3cdbfe(0x34e,0x392,0x315,0x351)])[_0x4b5d98(0x55a,0x539,0x525,0x569)](_0x328551=>{const _0x133a4e={'sbrpq':function(_0x328598,_0x125f51,_0xf8db2e,_0x225c68,_0x3ff442,_0x40e420){return _0x328598(_0x125f51,_0xf8db2e,_0x225c68,_0x3ff442,_0x40e420);},'GbzDj':_0x5c1f57(-0x2,0x9,-0xf,-0x2c)};function _0x3ee8a4(_0x597083,_0x1cb20d,_0x4a443f,_0xe42429){return _0x3cdbfe(_0x597083-0x24,_0x597083,_0x4a443f-0x1a7,_0xe42429- -0x33);}function _0x5c1f57(_0xf48861,_0x37bb7c,_0x586d2e,_0x41c53f){return _0x3cdbfe(_0xf48861-0x103,_0x37bb7c,_0x586d2e-0x41,_0x41c53f- -0x3af);}if(_0x328551['success']){const _0x55dc35=_0x328551['captcha'][_0x5c1f57(-0x65,-0x5f,-0x92,-0x88)+_0x5c1f57(-0x44,-0x70,-0x49,-0x43)],_0x4fcaae=_0x328551[_0x3ee8a4(0x363,0x334,0x33e,0x32f)];_0x133a4e[_0x3ee8a4(0x33e,0x2ee,0x2f1,0x312)](initializeSlider,_0x55dc35,_0x4fcaae,config[_0x5c1f57(-0x68,0x11,-0x41,-0x33)],config[_0x3ee8a4(0x33d,0x381,0x325,0x365)+_0x5c1f57(-0x6f,-0x51,-0x9c,-0x74)],config[_0x3ee8a4(0x360,0x35c,0x32b,0x358)+_0x3ee8a4(0x2e1,0x2d8,0x2d5,0x308)]);}else console[_0x5c1f57(-0x1c,-0x19,-0x15,-0x32)](_0x133a4e['GbzDj']);})['catch'](_0x309e8e=>{const _0x4cea2d={};_0x4cea2d[_0x594a8e(0x22,0x44,0x86,0x65)]=_0x391a0a(-0x139,-0xe8,-0x117,-0x12a);function _0x391a0a(_0x39836b,_0x4f58a2,_0x10cc39,_0xedcb13){return _0x3cdbfe(_0x39836b-0x79,_0x4f58a2,_0x10cc39-0x173,_0xedcb13- -0x498);}function _0x594a8e(_0x45ad27,_0x5184f5,_0x291fcc,_0x4121bc){return _0x3cdbfe(_0x45ad27-0xda,_0x45ad27,_0x291fcc-0x1c9,_0x5184f5- -0x314);}const _0xd29718=_0x4cea2d;console[_0x391a0a(-0xe9,-0xdf,-0x100,-0x105)](_0xd29718[_0x391a0a(-0x109,-0x144,-0x16e,-0x140)],_0x309e8e);}));function _0x77b2(){const _0x399314=['nZiXmdy4CwnHsgzT','ANnVBG','zMfPBhvYzunHBa','sNrwsKK','C2XPzgvYqNrU','rufks0q','qKnHt2S','5RUr5z2x5B2t5yMn5l2n572UoG','y29UC3rYDwn0BW','y2Pxu3m','zxjYB3i','DhjHBNnPDgLVBG','Dg9Y','ugLLrKe','zevSDLm','C3vJy2vZC0nHBa','qM9esfO','tMTOAeS','AKzIB3i','ntC2ntLhsKvivfy','wNLmq1y','D2fYBG','EfnPsfK','C3r5Bgu','Axfjyu4','te5HzuS','CfnoCg8','y3jLyxrLrwXLBq','DgfYz2v0lwjSBW','u0nPBNu','EuLxzxy','wKrlvu4','mZK0mJq0tg1QugPM','AvDyv04','kcGOlISPkYKRkq','u2z3wMK','ndC3mti2B0jNwgnZ','Aw5MBW','C2XPzgvYug9ZAq','wLzHvhG','zgL2','CgnSv3u','AeHXvMW','CxvLCNLtzwXLyW','DhjHy2u','rhnttLy','y2XHC3noyw1L','C2XPzgvYqMXVyW','sLjvqu4','Ehj6zwq','DgHLBG','BM9Uzq','thb1Bwu','CMv0DxjUicHMDq','yxbWBhK','Dg9tDhjPBMC','yvLQCgm','D1bRr2i','BgjHy2S','tgv1B2y','B25KCMfNC3rHCG','EMfcwum','De9pD1C','5RUr5yQO6AQm6k+b5OYj6zkU5BEY54k55yE7','zgLZCgXHEq','seLICvi','yMLUza','y1bLAMC','C2jYChe','B3nZB0m','yxPoEw4','ue9tva','DgLnuLm','vwz1ruO','C2vHCMnO','nhnJz0fYCq','EhnWEhm','ywrKrxzLBNrmAq','mtKZotmWBvP4sMD3','s3f4q0e','y2fWDgnOyvvYBa','z1n0z0e','BI9QC29U','t2DzA08','qxvfzu0','y2XPzw50wa','C0Dyr3a','uejtvKC','sfn2rve','BgvMDa','mhb4','ChjVDg90ExbL','vNfbtgW','ndGYmdHurLPRvvO','mta5nNP4yxrTza','AuvPvxe','rLbKsLe','Dg9Rzw4','zKr0rhi','DgfIBgu','6AQm6k+b5AsX6lsL77Ym6yEn572U5RUr5z2x5l2n','uuznu0e','ELfACg4','ywjZ','y29UC29Szq','vNDlCfu','B0rICLa','DgLVBG','Dg91y2HZDgfYDa','rxjYB3i6','qNLjza','ufzjrgu','r2HOvLC','zMTUuwO','BgvUz3rO','zxDbqMS','Dg91y2HLCW','z2v0rwXLBwvUDa','s0XRAfu','mZu1q3j3u2D4','EMzdrge','ndC3rxzsB01O','qwvsuNa','DMvYAwz5vxjS','Bg9N','C3rLBMvY','mZqYnJGWmtrxBfPMu0O','EgPmB1G','CM1dDhi','s2npA3G','6i635y+w6AQm6k+b56cb5AsX6lsL','y2fWDgnOyq','DeH4suG','C0ncCw4','EvnHtgi','vgfStxG'];_0x77b2=function(){return _0x399314;};return _0x77b2();}function _0x4b5d98(_0x1f37b1,_0x42a211,_0x1db517,_0x18da2f){return _0x2d05(_0x1f37b1-0x396,_0x1db517);}function _0x3cdbfe(_0x51d3aa,_0x3ee082,_0x4be55c,_0x436726){return _0x2d05(_0x436726-0x16f,_0x3ee082);}async function fetchCaptchaData(_0x4f9795){const _0x23830b={'TalMx':_0x5c341e(0x33c,0x351,0x321,0x35d),'iqIaN':_0x5c341e(0x369,0x336,0x36f,0x366),'EPWLT':_0x457caf(0x33f,0x375,0x303,0x352)+'+$','AuEeM':_0x5c341e(0x3a3,0x371,0x38c,0x3ad),'JtVJI':function(_0x1eeeb4,_0x423272){return _0x1eeeb4===_0x423272;},'woVtd':_0x5c341e(0x381,0x3a1,0x361,0x398),'pSNpo':_0x5c341e(0x389,0x362,0x393,0x346),'yIWev':function(_0x3de0d6,_0x23752c){return _0x3de0d6!==_0x23752c;},'cPejg':_0x5c341e(0x326,0x331,0x32c,0x2f1),'SfwZi':_0x457caf(0x3bb,0x3b2,0x39c,0x3a6),'bPUpo':function(_0x4ac88d,_0x116dd3){return _0x4ac88d+_0x116dd3;},'EAJKD':function(_0x5666a2,_0x9e9f5f){return _0x5666a2+_0x9e9f5f;},'DsSNV':'{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','NkhhK':function(_0x2ad3cc,_0x311791){return _0x2ad3cc(_0x311791);},'UfuEJ':_0x457caf(0x352,0x362,0x376,0x33b)+'nction()\x20','KLkhU':function(_0x178720,_0x5702c2){return _0x178720===_0x5702c2;},'lzyIi':'isOni','gStgA':_0x5c341e(0x3a6,0x3db,0x3d8,0x3c6),'KcOkx':_0x457caf(0x3af,0x3a6,0x382,0x36b),'LLoRG':_0x457caf(0x380,0x399,0x392,0x343),'BoDHZ':_0x457caf(0x349,0x36c,0x38b,0x349),'HSvEQ':function(_0x2ba126,_0x24f6b2){return _0x2ba126<_0x24f6b2;},'ossoC':function(_0x4bfc68,_0xb589c1,_0x5f2294){return _0x4bfc68(_0xb589c1,_0x5f2294);},'xspxs':function(_0x5906b0){return _0x5906b0();}},_0x51645c=(function(){let _0x1d849d=!![];return function(_0x2934dd,_0x4523d0){const _0x41a9a7=_0x1d849d?function(){if(_0x4523d0){const _0x3fda15=_0x4523d0['apply'](_0x2934dd,arguments);return _0x4523d0=null,_0x3fda15;}}:function(){};return _0x1d849d=![],_0x41a9a7;};}()),_0x3af354=_0x23830b[_0x5c341e(0x34e,0x318,0x31f,0x32a)](_0x51645c,this,function(){function _0x20307d(_0x5d6209,_0x2fa4a3,_0x581e55,_0x573922){return _0x5c341e(_0x573922- -0x4f,_0x2fa4a3-0x21,_0x581e55,_0x573922-0xd6);}function _0x4a28ff(_0x1f8cbc,_0xc11a3d,_0x12623d,_0x2fc66e){return _0x457caf(_0x2fc66e-0x23c,_0x12623d,_0x12623d-0x171,_0x2fc66e-0x1d7);}if(_0x23830b[_0x4a28ff(0x5fc,0x628,0x60c,0x5f9)]!==_0x23830b[_0x4a28ff(0x61a,0x626,0x614,0x5f9)])_0x22a18f[_0x4a28ff(0x5d2,0x5ec,0x63b,0x5f8)][_0x20307d(0x32d,0x31f,0x2e0,0x2fa)]===_0x23830b[_0x20307d(0x321,0x336,0x327,0x341)]&&(_0x1e4130=!![],_0x3ae356=_0x5c2608,_0x4b5f01[_0x4a28ff(0x5e6,0x5e2,0x5e7,0x5f8)][_0x20307d(0x36c,0x357,0x378,0x34d)]=_0x23830b[_0x20307d(0x317,0x31a,0x377,0x341)]);else return _0x3af354[_0x20307d(0x2c8,0x2bf,0x2e7,0x2f1)]()[_0x20307d(0x30a,0x329,0x305,0x304)](_0x23830b['EPWLT'])[_0x20307d(0x2de,0x323,0x2bb,0x2f1)]()[_0x4a28ff(0x5fd,0x60c,0x5da,0x5e9)+'r'](_0x3af354)['search'](_0x23830b['EPWLT']);});_0x23830b[_0x457caf(0x369,0x374,0x362,0x353)](_0x3af354);const _0x3e73c5=(function(){function _0x409646(_0x248c21,_0x2ddacd,_0x1a9a0f,_0x43f70e){return _0x457caf(_0x248c21-0x6f,_0x43f70e,_0x1a9a0f-0x149,_0x43f70e-0xfd);}function _0x2c3025(_0x42f93e,_0x522682,_0x54d26b,_0x225c7c){return _0x457caf(_0x42f93e- -0x549,_0x54d26b,_0x54d26b-0x10e,_0x225c7c-0x1b1);}if(_0x23830b[_0x2c3025(-0x20e,-0x226,-0x1f7,-0x1ea)](_0x23830b[_0x2c3025(-0x1e9,-0x203,-0x215,-0x1ae)],_0x23830b[_0x409646(0x3af,0x3b6,0x3a5,0x3d4)])){let _0x13ae82=!![];return function(_0x2b403a,_0xd91bcc){const _0x15d347={'dkArR':function(_0x23b18e,_0x357a35,_0xcaa683,_0x3f1bfd,_0x5d67f6,_0x2ef95f){return _0x23b18e(_0x357a35,_0xcaa683,_0x3f1bfd,_0x5d67f6,_0x2ef95f);},'ySaLb':function(_0x9767d){return _0x9767d();},'NXyza':_0x23830b[_0x17405c(-0x154,-0x17e,-0x16c,-0x15b)]};function _0x51032f(_0x26e8a8,_0x437d8c,_0xfb1f40,_0xf9d170){return _0x2c3025(_0x437d8c-0x177,_0x437d8c-0xd6,_0xfb1f40,_0xf9d170-0x7d);}function _0x17405c(_0x11ef1b,_0x20b4fc,_0xa85e56,_0x208f07){return _0x409646(_0x11ef1b- -0x534,_0x20b4fc-0x1b4,_0xa85e56-0x2b,_0x208f07);}if(_0x23830b[_0x51032f(-0x6b,-0x2a,-0x4c,-0x57)](_0x23830b['woVtd'],_0x23830b[_0x51032f(-0x22,-0x13,0x1c,-0xc)])){const _0x583831=_0x489822[_0x51032f(-0x41,-0x32,0x1,-0x6d)][_0x17405c(-0x182,-0x172,-0x186,-0x142)+_0x17405c(-0x13d,-0x144,-0x106,-0x12a)],_0x5e3845=_0x1ff14e[_0x17405c(-0x147,-0x13a,-0x163,-0x143)];_0x15d347['dkArR'](_0x2658ec,_0x583831,_0x5e3845,_0x30a082[_0x51032f(-0x7a,-0x3a,-0x52,-0x64)],_0x5c1e76['successCal'+_0x51032f(-0x85,-0x7b,-0x83,-0xab)],_0x2a0c82[_0x51032f(-0x1e,-0x2b,-0x34,-0x3e)+_0x17405c(-0x16e,-0x1a4,-0x1ab,-0x19e)]);}else{const _0x117609=_0x13ae82?function(){function _0x359945(_0x19e0b4,_0x15adc7,_0xdf9e41,_0x2a25b4){return _0x17405c(_0x2a25b4-0x4aa,_0x15adc7-0xbd,_0xdf9e41-0x2d,_0xdf9e41);}function _0x9a962d(_0x17e650,_0x47de7a,_0x2aa9ee,_0x498d9c){return _0x51032f(_0x17e650-0x1dc,_0x17e650-0x32a,_0x498d9c,_0x498d9c-0xf7);}if(_0x15d347['NXyza']!==_0x359945(0x373,0x3b0,0x397,0x39c))_0x15d347[_0x359945(0x361,0x3bb,0x394,0x388)](_0x41d12f);else{if(_0xd91bcc){const _0x489720=_0xd91bcc[_0x359945(0x344,0x31f,0x34f,0x338)](_0x2b403a,arguments);return _0xd91bcc=null,_0x489720;}}}:function(){};return _0x13ae82=![],_0x117609;}};}else{const _0x1f6e3e=_0xec4bd5[_0x2c3025(-0x1f6,-0x200,-0x231,-0x1d1)](_0x572402,arguments);return _0x5366a1=null,_0x1f6e3e;}}()),_0x3e62d9=_0x3e73c5(this,function(){let _0x116ecd;function _0x19f877(_0x2648a5,_0x49bf42,_0x51fc38,_0x4a2135){return _0x5c341e(_0x49bf42-0x2a,_0x49bf42-0x67,_0x51fc38,_0x4a2135-0x1cf);}function _0x5ec922(_0x1fcae3,_0x14e5a5,_0x2a26ab,_0x4c6494){return _0x457caf(_0x4c6494- -0x400,_0x2a26ab,_0x2a26ab-0xdb,_0x4c6494-0x179);}try{const _0x15a353=_0x23830b[_0x19f877(0x392,0x3cc,0x3b6,0x3b4)](Function,_0x23830b[_0x5ec922(-0x90,-0x71,-0x89,-0x56)](_0x23830b[_0x5ec922(-0x8b,-0x9e,-0x62,-0x9a)],_0x23830b[_0x5ec922(-0x8e,-0xa6,-0xda,-0xb6)])+');');_0x116ecd=_0x15a353();}catch(_0x50da28){if(_0x23830b[_0x19f877(0x39d,0x3a9,0x379,0x3bc)]('EgxVk',_0x23830b['lzyIi'])){const _0x145a2a=_0x4a696d['apply'](_0x236320,arguments);return _0x401e3f=null,_0x145a2a;}else _0x116ecd=window;}const _0x1d5e63=_0x116ecd[_0x5ec922(-0x62,-0x55,-0x6e,-0x7b)]=_0x116ecd[_0x5ec922(-0xb3,-0x5c,-0xb9,-0x7b)]||{},_0x5a974d=['log',_0x23830b[_0x19f877(0x36c,0x384,0x36f,0x37d)],_0x19f877(0x351,0x358,0x353,0x328),_0x23830b[_0x5ec922(-0x63,-0x8b,-0x2c,-0x62)],'exception',_0x23830b['LLoRG'],_0x23830b[_0x5ec922(-0x50,-0x15,-0x29,-0x4b)]];for(let _0x4d5e24=0x12c8+0x2*0x3ec+-0x1aa0;_0x23830b[_0x5ec922(-0x58,-0x57,-0x71,-0x8b)](_0x4d5e24,_0x5a974d[_0x19f877(0x3ab,0x3a5,0x3b8,0x3d1)]);_0x4d5e24++){if('vPJBd'!==_0x19f877(0x374,0x3a4,0x3a0,0x37f)){const _0x307d24=_0x3e73c5[_0x5ec922(-0x2c,-0x95,-0x3a,-0x53)+'r'][_0x5ec922(-0x92,-0xa5,-0xab,-0x88)][_0x19f877(0x378,0x375,0x34c,0x367)](_0x3e73c5),_0x2800ed=_0x5a974d[_0x4d5e24],_0x55dd13=_0x1d5e63[_0x2800ed]||_0x307d24;_0x307d24['__proto__']=_0x3e73c5[_0x5ec922(-0xc2,-0xce,-0xd1,-0xa1)](_0x3e73c5),_0x307d24[_0x19f877(0x37f,0x36a,0x3ac,0x3ac)]=_0x55dd13[_0x5ec922(-0xe7,-0x8e,-0xc0,-0xac)][_0x5ec922(-0xc0,-0x6b,-0xb8,-0xa1)](_0x55dd13),_0x1d5e63[_0x2800ed]=_0x307d24;}else{const _0x360179=_0x3b3a0c(ohDvvR['bPUpo'](ohDvvR[_0x19f877(0x3fd,0x3c0,0x39d,0x3a6)](_0x5ec922(-0x98,-0xec,-0xc5,-0xae)+'nction()\x20',ohDvvR[_0x19f877(0x386,0x360,0x371,0x397)]),');'));_0x421263=_0x360179();}}});_0x3e62d9();function _0x457caf(_0x512ca8,_0x50c92d,_0x5843f7,_0x2ea4da){return _0x4b5d98(_0x512ca8- -0x20b,_0x50c92d-0x30,_0x50c92d,_0x2ea4da-0x72);}const _0x4469e2=await _0x23830b[_0x457caf(0x3b6,0x3f3,0x3c8,0x3f5)](fetch,_0x4f9795);function _0x5c341e(_0x39c5ed,_0x379fce,_0xcd9a6b,_0x53052d){return _0x4b5d98(_0x39c5ed- -0x21f,_0x379fce-0xaa,_0xcd9a6b,_0x53052d-0xca);}return await _0x4469e2[_0x457caf(0x3a6,0x375,0x367,0x3a3)]();}function initializeSlider(_0x357369,_0x1483a6,_0x216347,_0x2835a7,_0x38d0b7){const _0x365265={'ZDKUN':_0xd6e9fa(0xc,0x62,0x47,0x1f),'HIbqR':_0x4a7b6d(-0x8c,-0x9b,-0xa4,-0xce),'QFMSA':'验证通过','cUJKr':function(_0xd606a5,_0x5a975f,_0x327805,_0x2bf861,_0x22b15f,_0xa88ee8){return _0xd606a5(_0x5a975f,_0x327805,_0x2bf861,_0x22b15f,_0xa88ee8);},'VXgHg':function(_0x30292c,_0x4ca214){return _0x30292c===_0x4ca214;},'KqxCA':_0x4a7b6d(-0x61,-0x30,-0x41,-0x6b),'OgYkO':_0x4a7b6d(-0xd8,-0xcf,-0xa7,-0x8e),'fDtDr':function(_0xf52de3,_0x10d10b){return _0xf52de3-_0x10d10b;},'ZVaTx':function(_0x5027a7,_0x350e98){return _0x5027a7<_0x350e98;},'tHxIH':function(_0x27536d,_0x34ed09){return _0x27536d>_0x34ed09;},'ZyLCV':function(_0x5d9d15,_0x23abc9){return _0x5d9d15+_0x23abc9;},'aYjpc':function(_0x14ccfd,_0x38e9ff){return _0x14ccfd<_0x38e9ff;},'YZGXQ':_0xd6e9fa(0x9,-0x2d,0x38,0x2)+'+$','xjLoX':_0x4a7b6d(-0x6e,-0x93,-0x71,-0x4f),'azNyn':_0xd6e9fa(0x42,0xa4,0x48,0x6f),'Leuof':function(_0x5a1578,_0x2b26e4){return _0x5a1578<=_0x2b26e4;},'BCaOk':function(_0x106b23,_0x1b8ad6){return _0x106b23-_0x1b8ad6;},'MQGEk':function(_0x1eddd0,_0x13ed30){return _0x1eddd0!==_0x13ed30;},'sCBqn':_0xd6e9fa(0x3a,0x99,0x89,0x5a),'LNaeK':_0x4a7b6d(-0x56,-0x4a,-0x73,-0xb6)+'置','vGvCK':function(_0x11ec97){return _0x11ec97();},'GhhVW':_0x4a7b6d(-0xc1,-0xc1,-0xa8,-0xa1)+'k','tiMRS':_0x4a7b6d(-0x2d,-0x83,-0x4b,-0x5b),'Lpume':_0x4a7b6d(-0x8c,-0xaa,-0xaf,-0xb1),'VqALl':_0xd6e9fa(-0x15,-0x6,-0x41,-0x4)+'ck','PVIDe':'.slider-bg','xrzed':_0xd6e9fa(0x17,0x14,0x3e,0x3a),'ewABk':'mousemove','wPkGb':'mouseup','hBYpX':_0x4a7b6d(-0x6a,-0x5e,-0x6b,-0x54),'iEiUq':'touchmove','pclWu':'touchend'},_0x4f85d8=document[_0xd6e9fa(0x81,0x23,0x4a,0x55)+_0x4a7b6d(-0x94,-0xa5,-0x69,-0x4a)](_0x365265[_0xd6e9fa(0x4c,0x31,0x17,0x50)]),_0xf68d83=document[_0xd6e9fa(0x24,0x6c,0x6c,0x55)+'ById'](_0x365265[_0xd6e9fa(0x32,0x5f,0x23,0x28)]),_0x5a86e3=document[_0xd6e9fa(0x36,-0x1c,-0x3f,-0x5)+'ent'](_0x365265[_0xd6e9fa(0x1f,0x1f,-0xf,0x14)]);_0x5a86e3[_0x4a7b6d(-0xa0,-0x9f,-0xa9,-0xe4)]=_0x365265[_0xd6e9fa(0x6d,0x55,0x2,0x3c)],_0x5a86e3[_0xd6e9fa(0x75,0xb0,0x66,0x7f)][_0xd6e9fa(-0x2,0xa,-0x5,0x39)]=_0x357369+'px',document[_0xd6e9fa(0x37,0x25,0x17,0xb)+_0x4a7b6d(-0x29,-0x3c,-0x43,-0x5a)](_0x365265[_0xd6e9fa(0x6f,0x4e,0x22,0x4f)])['appendChil'+'d'](_0x5a86e3);let _0x20fe8f=![],_0x438832=-0x8b3+-0x74+-0x1*-0x927,_0x604eea=0x91b*0x1+0x1066*0x2+-0x29e7;_0x4f85d8['style']['left']=_0x365265[_0xd6e9fa(-0x13,0x9,-0x20,0x11)];function _0x4a7b6d(_0x46524b,_0x38cca2,_0x14c09e,_0x3af551){return _0x3cdbfe(_0x46524b-0x1d3,_0x3af551,_0x14c09e-0x124,_0x14c09e- -0x3d8);}_0xf68d83['addEventLi'+_0x4a7b6d(-0x51,-0x31,-0x5a,-0x3e)]('click',()=>{console[_0x3224b5(0x540,0x563,0x577,0x592)](_0x365265[_0x3224b5(0x51e,0x553,0x51a,0x4f8)]);function _0x3a6718(_0x571187,_0x443fa7,_0x12295b,_0x43ef6d){return _0xd6e9fa(_0x571187-0x1be,_0x443fa7-0x6a,_0x12295b,_0x443fa7-0x173);}_0xf68d83[_0x3a6718(0x1e6,0x1f2,0x1c3,0x229)][_0x3224b5(0x57f,0x507,0x53b,0x530)]=_0x365265[_0x3a6718(0x187,0x194,0x1a4,0x162)];function _0x3224b5(_0x54843b,_0x144def,_0x5169b4,_0x35a524){return _0xd6e9fa(_0x54843b-0xf3,_0x144def-0x1a2,_0x35a524,_0x5169b4-0x51b);}_0x4f85d8['style'][_0x3a6718(0x1d2,0x1e6,0x21c,0x1d6)]=_0x365265[_0x3a6718(0x19c,0x194,0x15c,0x1b0)];});const _0x467e0f=_0x1a4172=>{function _0x4c02e8(_0x32b148,_0x2cfdcf,_0x279b81,_0x15780e){return _0xd6e9fa(_0x32b148-0x55,_0x2cfdcf-0x108,_0x15780e,_0x279b81-0x342);}function _0x28ed0c(_0x565835,_0x3e217b,_0x26b53,_0x40f2a0){return _0x4a7b6d(_0x565835-0x34,_0x3e217b-0x1ad,_0x26b53-0x3a0,_0x3e217b);}_0x365265['VXgHg'](_0xf68d83[_0x28ed0c(0x356,0x347,0x368,0x328)][_0x4c02e8(0x338,0x374,0x362,0x360)],_0x365265['HIbqR'])&&(_0x365265['VXgHg'](_0x365265[_0x4c02e8(0x390,0x391,0x371,0x346)],_0x365265[_0x28ed0c(0x2e2,0x34e,0x31c,0x301)])?(_0x51e53f[_0x28ed0c(0x30e,0x370,0x345,0x329)](_0x365265[_0x4c02e8(0x39b,0x396,0x387,0x3bc)]),_0x365265['cUJKr'](_0x5496f8,_0x1341b6,_0x18cd84,_0x5f069d,_0x10b3ea,_0x2a79c8)):(_0x20fe8f=!![],_0x438832=_0x1a4172,_0x4f85d8['style'][_0x28ed0c(0x32c,0x318,0x35c,0x320)]=_0x4c02e8(0x325,0x375,0x355,0x370)));},_0x3b2f28=_0x334b6c=>{function _0x151212(_0x2be86a,_0x160de0,_0x148c33,_0x582bdf){return _0xd6e9fa(_0x2be86a-0x84,_0x160de0-0x5a,_0x160de0,_0x2be86a-0x433);}if(!_0x20fe8f)return;let _0x5c5d73=_0x365265[_0x45474c(0x2ba,0x2d9,0x301,0x2cb)](_0x334b6c,_0x438832);if(_0x365265[_0x45474c(0x29c,0x29e,0x2c9,0x2d3)](_0x5c5d73,0x8*0x3ba+-0x79*0x42+0x162))_0x5c5d73=0xca0*0x3+-0x1*-0x1189+-0xb15*0x5;function _0x45474c(_0x55246a,_0x1957c1,_0x1de021,_0x32397b){return _0x4a7b6d(_0x55246a-0x135,_0x1957c1-0x5d,_0x1957c1-0x34e,_0x55246a);}if(_0x365265[_0x151212(0x497,0x4cf,0x457,0x45a)](_0x5c5d73,-0x175*-0x8+0x1*-0x130d+0x85f*0x1))_0x5c5d73=0x13bf*-0x1+0x9af*0x4+-0x1203;_0x4f85d8[_0x45474c(0x2fc,0x316,0x33e,0x2e0)][_0x45474c(0x2aa,0x2d0,0x308,0x2ae)]=_0x365265[_0x151212(0x4af,0x473,0x47b,0x482)](_0x5c5d73,'px'),_0x604eea=_0x5c5d73;};function _0xd6e9fa(_0x41d3b9,_0x38afd1,_0x5d3f32,_0x6b0f5f){return _0x3cdbfe(_0x41d3b9-0x6f,_0x5d3f32,_0x5d3f32-0x116,_0x6b0f5f- -0x321);}const _0x486317=()=>{function _0x557704(_0x3a40cd,_0x2c712e,_0x148d75,_0xc0b6a){return _0xd6e9fa(_0x3a40cd-0x193,_0x2c712e-0xf6,_0x3a40cd,_0x2c712e- -0xf9);}function _0x912d0e(_0x5586bc,_0x28e337,_0x5dde02,_0x29853b){return _0xd6e9fa(_0x5586bc-0x169,_0x28e337-0x42,_0x28e337,_0x29853b-0x33e);}if(_0x365265['VXgHg'](_0x365265[_0x557704(-0xd1,-0x9a,-0x7c,-0x8a)],_0x557704(-0xb7,-0xc3,-0x8c,-0xcf))){if(!_0x4ee128)return;let _0x56bd6e=_0x340239-_0xe67c9d;if(_0x365265[_0x557704(-0x123,-0xe1,-0x120,-0x9f)](_0x56bd6e,-0x36b*-0xa+-0x19a8+0x2*-0x443))_0x56bd6e=0x128*-0x11+-0x8b*-0x7+0xfdb;if(_0x56bd6e>-0x1d*0x44+0x7*-0x7c+0xc12)_0x56bd6e=0x2450+-0x2176+-0xa*0x30;_0x2add62[_0x912d0e(0x3e1,0x3eb,0x3f8,0x3bd)]['left']=_0x56bd6e+'px',_0x5697d9=_0x56bd6e;}else{if(!_0x20fe8f)return;_0x20fe8f=![],console['log'](_0x365265[_0x912d0e(0x382,0x38a,0x359,0x364)],_0x604eea);const _0x5a0ea2=0x1b29+-0x18e0+0x74*-0x5;if(_0x365265[_0x912d0e(0x340,0x380,0x385,0x359)](Math[_0x557704(-0xdd,-0xb2,-0x9f,-0x91)](_0x365265[_0x557704(-0x50,-0x8b,-0x8b,-0x69)](_0x357369,parseInt(_0x604eea))),_0x5a0ea2)){if(_0x365265['MQGEk'](_0x365265[_0x912d0e(0x36a,0x3aa,0x399,0x3a3)],_0x557704(-0xc8,-0x88,-0x5c,-0x65)))console[_0x912d0e(0x38e,0x3a2,0x368,0x39a)](_0x365265[_0x912d0e(0x390,0x384,0x37e,0x383)]),verifyCaptcha(_0x604eea,_0x1483a6,_0x216347,_0x2835a7,_0x38d0b7);else{if(_0x3b5aea){const _0x450981=_0x582df6[_0x557704(-0x118,-0xe3,-0xa7,-0xb3)](_0xd5784c,arguments);return _0x72f594=null,_0x450981;}}}else{if(_0x557704(-0x11f,-0xdc,-0xd1,-0xc7)!=='HaigK')console[_0x912d0e(0x3ab,0x37d,0x369,0x39a)](_0x365265[_0x557704(-0x9e,-0x78,-0x74,-0x5e)]),_0x4f85d8[_0x912d0e(0x3e1,0x3e8,0x384,0x3bd)][_0x912d0e(0x36e,0x389,0x362,0x377)]='0px',_0x365265['vGvCK'](_0x38d0b7);else return _0x32d87b[_0x912d0e(0x31e,0x314,0x37a,0x355)]()['search'](NmTQzV['YZGXQ'])['toString']()[_0x912d0e(0x3e7,0x3a1,0x3a6,0x3ae)+'r'](_0x440630)['search'](NmTQzV['YZGXQ']);}}};_0x4f85d8[_0xd6e9fa(0x28,0x46,0x44,0x2d)+_0xd6e9fa(0x88,0x84,0x6e,0x5d)]('mousedown',_0x3915a1=>_0x467e0f(_0x3915a1[_0x4a7b6d(-0x54,-0x84,-0x82,-0x91)])),document[_0xd6e9fa(0x2,0x6c,0x23,0x2d)+_0xd6e9fa(0x21,0x8b,0x32,0x5d)](_0x365265[_0x4a7b6d(-0x43,-0x2e,-0x64,-0x46)],_0x4181b5=>_0x3b2f28(_0x4181b5['clientX'])),document[_0x4a7b6d(-0x78,-0xc4,-0x8a,-0xb4)+_0xd6e9fa(0x59,0x29,0x26,0x5d)](_0x365265[_0x4a7b6d(-0x69,-0x84,-0x9e,-0xca)],_0x486317),_0x4f85d8['addEventLi'+'stener'](_0x365265['hBYpX'],_0x2c5967=>_0x467e0f(_0x2c5967[_0x4a7b6d(-0x4d,-0x81,-0x63,-0x38)][-0x46*-0x5c+-0x2*0xcf9+-0x2*-0x65]['clientX'])),document[_0xd6e9fa(-0x9,0x2c,0x62,0x2d)+_0xd6e9fa(0x7c,0x83,0x24,0x5d)](_0x365265[_0xd6e9fa(0x1,0x17,0x1a,0x3f)],_0x2f3329=>_0x3b2f28(_0x2f3329[_0xd6e9fa(0x87,0x53,0x21,0x54)][0x5*0x319+-0x8*0xba+-0x9ad*0x1][_0x4a7b6d(-0x97,-0x4c,-0x82,-0x99)])),document['addEventLi'+'stener'](_0x365265[_0xd6e9fa(-0x19,-0x36,0x42,0x9)],_0x486317),_0x4f85d8[_0xd6e9fa(0x5e,0x21,0x2c,0x1c)+'t']=()=>![];}function _0x2d05(_0x1e84b3,_0x1a1e45){const _0x45876b=_0x77b2();return _0x2d05=function(_0x326bb4,_0x48a51c){_0x326bb4=_0x326bb4-(-0x2*-0x32+0x1b40+-0x19f7);let _0x35e9e0=_0x45876b[_0x326bb4];if(_0x2d05['MPVUxS']===undefined){var _0x2f72a6=function(_0x3c8319){const _0x34e48e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x11051c='',_0xa9de7f='',_0x591c6d=_0x11051c+_0x2f72a6;for(let _0x28e51f=-0x114d+-0x1c88+0x2dd5,_0x4eb049,_0x559097,_0xf693e4=0x823*-0x1+0x1ef+0x634;_0x559097=_0x3c8319['charAt'](_0xf693e4++);~_0x559097&&(_0x4eb049=_0x28e51f%(0x1*-0xcc2+-0xf*0x137+0x1eff)?_0x4eb049*(-0x144a+-0x26*-0x19+0x10d4)+_0x559097:_0x559097,_0x28e51f++%(0x5f8+-0x27*0x2f+0x135))?_0x11051c+=_0x591c6d['charCodeAt'](_0xf693e4+(-0x2*0xd8b+0x665*0x2+-0x16f*-0xa))-(-0x8db+0x3bc+-0x1*-0x529)!==-0x1*0x7a7+0xc5+0x6e2?String['fromCharCode'](0x11*0x139+-0xd2d+0x69d*-0x1&_0x4eb049>>(-(0x6f7+-0x13b9+0xcc4*0x1)*_0x28e51f&-0x2176*-0x1+0xc57*0x3+0x425*-0x11)):_0x28e51f:-0x1cf*0xe+-0x19e*-0x1+0x17b4){_0x559097=_0x34e48e['indexOf'](_0x559097);}for(let _0x22c8b7=-0x143*0x1e+-0x1*-0x167a+0xf60,_0x890084=_0x11051c['length'];_0x22c8b7<_0x890084;_0x22c8b7++){_0xa9de7f+='%'+('00'+_0x11051c['charCodeAt'](_0x22c8b7)['toString'](0x1a7e+-0x228f+0x821*0x1))['slice'](-(-0x3f4+0x5f*0x3b+-0x11ef));}return decodeURIComponent(_0xa9de7f);};_0x2d05['yVSgDM']=_0x2f72a6,_0x1e84b3=arguments,_0x2d05['MPVUxS']=!![];}const _0x24aaef=_0x45876b[0x10*0x7a+0x14b*0x2+0x2*-0x51b],_0x1364b2=_0x326bb4+_0x24aaef,_0x3626b8=_0x1e84b3[_0x1364b2];if(!_0x3626b8){const _0x9dc405=function(_0x1631d3){this['BWjptW']=_0x1631d3,this['VrLsPY']=[0xd07+-0xe3a+0x134,0x193c+0x4*0x38+-0x1a1c,0xa7b+0x5*-0x127+-0x4b8],this['uZBOIO']=function(){return'newState';},this['PCTEOk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['swJeXZ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x9dc405['prototype']['HnClzs']=function(){const _0x3eb421=new RegExp(this['PCTEOk']+this['swJeXZ']),_0x3a020d=_0x3eb421['test'](this['uZBOIO']['toString']())?--this['VrLsPY'][0x2*0x10cb+0x1f32+-0x1*0x40c7]:--this['VrLsPY'][0x212d+-0x1c24+-0x509*0x1];return this['wBuuvH'](_0x3a020d);},_0x9dc405['prototype']['wBuuvH']=function(_0x4ac0c8){if(!Boolean(~_0x4ac0c8))return _0x4ac0c8;return this['BYPFOu'](this['BWjptW']);},_0x9dc405['prototype']['BYPFOu']=function(_0x47d6a3){for(let _0x3b3a0c=0x88*0xd+-0x1af9+0x1411,_0x421263=this['VrLsPY']['length'];_0x3b3a0c<_0x421263;_0x3b3a0c++){this['VrLsPY']['push'](Math['round'](Math['random']())),_0x421263=this['VrLsPY']['length'];}return _0x47d6a3(this['VrLsPY'][-0x381+-0x1bf4+0x1*0x1f75]);},new _0x9dc405(_0x2d05)['HnClzs'](),_0x35e9e0=_0x2d05['yVSgDM'](_0x35e9e0),_0x1e84b3[_0x1364b2]=_0x35e9e0;}else _0x35e9e0=_0x3626b8;return _0x35e9e0;},_0x2d05(_0x1e84b3,_0x1a1e45);}async function verifyCaptcha(_0x57712a,_0x4aa224,_0x17c209,_0x2c8ee0,_0xaa65e2){const _0x57e93d={'oDbrP':function(_0x31239d,_0x43fc93,_0x359236){return _0x31239d(_0x43fc93,_0x359236);},'PieFA':_0x5a929c(-0x1ae,-0x1c9,-0x18e,-0x1be),'VwKpU':'applicatio'+_0x5a929c(-0x18c,-0x174,-0x1a2,-0x1b3),'iWXWN':function(_0x5ba60c){return _0x5ba60c();},'Enndl':function(_0x14602b,_0x216f40){return _0x14602b!==_0x216f40;},'hHqVl':_0x4ae3a3(-0xad,-0x6a,-0xd4,-0x8b)},_0x59937e={};function _0x4ae3a3(_0x253de,_0x34a005,_0x464257,_0x409e20){return _0x3cdbfe(_0x253de-0x18a,_0x464257,_0x464257-0xf,_0x253de- -0x3ec);}_0x59937e[_0x4ae3a3(-0xc5,-0xf2,-0x8a,-0xb2)+_0x4ae3a3(-0x80,-0xad,-0x72,-0x9e)]=_0x57712a,_0x59937e[_0x4ae3a3(-0x8a,-0x9a,-0x7c,-0x5b)]=_0x4aa224;const _0x2350f4=await _0x57e93d[_0x4ae3a3(-0x81,-0x59,-0x98,-0x84)](fetch,_0x17c209,{'method':_0x57e93d[_0x4ae3a3(-0x56,-0x2c,-0x30,-0x74)],'headers':{'Content-Type':_0x57e93d[_0x5a929c(-0x16f,-0x1c0,-0x1b3,-0x19c)]},'body':JSON['stringify'](_0x59937e)});function _0x5a929c(_0x25bb61,_0x29c98f,_0xd111b,_0x173885){return _0x3cdbfe(_0x25bb61-0x183,_0xd111b,_0xd111b-0x198,_0x173885- -0x506);}const _0x3b4028=await _0x2350f4['json']();if(_0x3b4028['success'])_0x57e93d[_0x4ae3a3(-0xca,-0xc2,-0xd3,-0x86)](_0x2c8ee0);else{if(_0x57e93d['Enndl'](_0x57e93d[_0x4ae3a3(-0xc1,-0x99,-0xcc,-0xb1)],_0x4ae3a3(-0xad,-0xe7,-0x7e,-0x80))){const _0x3a0154=_0x1e53b2?function(){if(_0xbbc285){const _0x13a634=_0x3c7a6c['apply'](_0x28a88a,arguments);return _0x210cc3=null,_0x13a634;}}:function(){};return _0x30c237=![],_0x3a0154;}else _0x57e93d[_0x5a929c(-0x1ea,-0x214,-0x202,-0x1e4)](_0xaa65e2);}}

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
