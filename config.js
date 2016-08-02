function wx_share_info()
{
	wx.onMenuShareAppMessage({
				title: document.title,
				desc: "快来挑战吧~~~",
				link: "http://www.shuozhoutv.com/games/2003/110ms.php?plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_usr=1&plg_dev=1&plg_nld=1&plg_vkey=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_usr=1&plg_dev=1&plg_nld=...&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1",
				imgUrl: document.getElementsByTagName("img")[0].src,
				trigger: function(res) {},
				success: function(res) {
					location.href = aboutus;
				},
				cancel: function(res) {},
				fail: function(res) {
					alert(JSON.stringify(res));
				}
			});
			
			wx.onMenuShareTimeline({
				title: document.title,
				desc: "快来挑战吧~~~",
				link: "http://www.shuozhoutv.com/games/2003/110ms.php?plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_usr=1&plg_dev=1&plg_nld=1&plg_vkey=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_usr=1&plg_dev=1&plg_nld=...&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&plg_nld=1&plg_dev=1&plg_uin=1&plg_usr=1&plg_vkey=1&plg_nld=1&plg_uin=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1",
				imgUrl: document.getElementsByTagName("img")[0].src,
				trigger: function(res) {},
				success: function(res) {
					location.href = aboutus;
				},
				cancel: function(res) {},
				fail: function(res) {
					alert(JSON.stringify(res));
				}
			});
}

function wx_share_flow()
{	
	wx.config({
			debug     : false,
			appId     : wxAppId,
			timestamp : wxTimeStamp,
			nonceStr  : wxNonceStr,
			signature : wxSignature,
			jsApiList : [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo'
			]
		});

		wx.ready(function() {
			wx_share_info();
		});
		
		wx.error(function(res) {
			alert(res.errMsg);
		});		
}

setTimeout("wx_share_flow()", 1000);