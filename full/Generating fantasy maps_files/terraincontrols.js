function addSVG(div) {
  return div.insert("svg", ":first-child")
            .attr("height", 1200)
            .attr("width", 1200)
            .attr("viewBox", "-500 -500 1000 1000");
}
var finalDiv = d3.select("div#final");
var finalSVG = addSVG(finalDiv);
doMap(finalSVG, defaultParams);

