let tableof = function() {
    return({
        log: function(msg) {
          para = document.createElement('p');
          text = document.createTextNode(msg);
          para.appendChild(text);
        }
    });
}();

window.onload = function () {
    let toc = "";
    let level = 0;

    document.getElementById("contents").innerHTML =
        document.getElementById("contents").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,
            function (str, openLevel, titleText, closeLevel) {
                if (openLevel != closeLevel) {
				 tableof.log(openLevel)
                    return str + ' - ' + openLevel;
                }

                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ol>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ol>");
                }

                level = parseInt(openLevel);

                let anchor = titleText.replace(/ /g, "_");

                toc += "<li><a href=\"#" + anchor + "\">" + titleText
                    + "</a></li>";

                return "<h" + openLevel + "><a name=\"" + anchor + "\">"
                    + titleText + "</a></h" + closeLevel + ">";
            }
        );

    if (level) {
        toc += (new Array(level + 1)).join("</ol>");
    }
    document.getElementById("toc").innerHTML += toc;
};