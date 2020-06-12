
// getUserMedia在Chrome 47+中只在https上工作，所以我们重定向到https.或者文件运行。
if (window.location.protocol == "file:") {
    // alert("You seem to be running this example directly from a file. Note that these examples only work when served from a server or localhost due to canvas cross-domain restrictions.");
} else if (window.location.hostname !== "localhost" && window.location.protocol !== "https:") {
    window.location.protocol = "https";
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32642923-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();