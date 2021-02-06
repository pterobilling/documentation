/*
 * What does this script do?
 * It detects browsers that have ad blocking extensions installed.
 * 
 * How does it work?
 * It requires Cloudflare. Since most ad blockers hate Cloudflare so much, 
 * we can detect ad blockers by checking if Cloudflare scripts are running properly.
 * 
 * Can I use this script in my website?
 * Of course you can. This repo is licensed under MIT.
 * 
*/

function detectAdBlock(tries = 0) {
    setTimeout(function() {
        if (tries >= 3) {
            document.body.innerHTML = null;
            alert("Please disable your ad blocker before continuing to browse this website. If this is a false positive, please contact me (Alaister) to fix the bug. Thank you very much!");
            location.reload();
        } else if (typeof isCloudflareAppsEnabled == "undefined") {
            detectAdBlock(tries + 1);
            console.warn("Ad blocker detected!");
        }
    }, 1000);
}

detectAdBlock(0);
