(function() {
})(),
    function() {
        function l() {
            t.addClass("active"),
                u = +(new Date),
                h()
        }
        function c() {
            t.removeClass("active"),
                clearInterval(f);
            var e = +(new Date) - u;
            n.html(e),
                s.html(d(e));
            var r = p(e);
            console.log(r);
            document.title=r;
        }
        function h() {
            f = setInterval(function() {
                    var e = 1;
                    n.html(e)
                },
                16)
        }
        function p(e) {
            var t = "\u6211\u7684\u6781\u9650\u901f\u5ea6\u662f{ms}\u6beb\u79d2\uff0c\u6253\u8d25\u4e86{percent}%\u7684\u4eba\uff0c",
                n = (110 / e * 100).toFixed(0);
            return n = n >= 100 ? 99 : n,
            t.replace("{ms}", e).replace("{percent}", n) + d(e);
        }
        function d(e) {
            return e < 60 ? "\u5929\u4e86\u565c\uff01\u5355\u8eab20\u5e74\u624d\u80fd\u7ec3\u6210\u5427\uff1f": e <= 110 ? "\u4f17\u751f\u819c\u62dc\uff01\u7b80\u76f4\u795e\u4e00\u6837\u7684\u5b58\u5728\uff01": e <= 120 ? "\u6211\u52d2\u4e2a\u53bb\uff01\u8fd9\u662f\u5f00\u6302\u7684\u8282\u594f\u5440\uff01": e <= 135 ? "\u9707\u7cbe\u4e86\uff01\u79bb\u6781\u9650\u53ea\u6709\u4e00\u6b65\u4e4b\u9065\uff01": e <= 150 ? "\u68d2\u68d2\u54d2\uff01\u53ea\u5dee\u4e00\u70b9\u70b9\u513f\u4e86\u54e6\uff01": e <= 200 ? "\u4e0d\u9519\u5466\uff01\u8fd8\u662f\u5f88\u6709\u6f5c\u529b\u7684\u561b\uff01": e <= 250 ? "\u8fd8\u6709\u5e0c\u671b\uff01\u518d\u63a5\u518d\u5389\u8bd5\u8bd5\u770b\uff1f": e <= 400 ? "\u60e8\u4e0d\u5fcd\u7779\uff01\u5df2\u7ecf\u4e0d\u5fcd\u76f4\u89c6\u2026": "\u4eb2\uff0c\u8fd8\u80fd\u4e0d\u80fd\u6109\u5feb\u73a9\u800d\u5566\uff1f"
        }
        var t = $(".btn"),
            n = $(".msec"),
            r = $(".sec"),
            i = $(".min"),
            s = $(".desc"),
            o = $(".btn-close"),
            u,
            a = 0,
            f = null;
        t.on("touchstart",
            function(e) {
                e.preventDefault(),
                    a % 2 == 0 ? l() : c(),
                    a++
            }),
            o.on("click",
                function(e) {
                    e.preventDefault(),
                        $(".chromium-spread").hide()
                })
    } (),
    function() {
        window.monitor && monitor.setProject("360mse").getTrack().getClickAndKeydown()
    } ();