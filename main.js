// initialize data, and svg content

var data = d3.csv("filteredSubset.csv")
    .then(setData)

var width = 420,
    height = 800;

var svg = d3.select("#chart")
    .append("svg")
    .append("g")

var svg1 = d3.select("#legend")
    .append("svg")
    .append("g")

var svg3 = d3.select("#panel1")
    .append("svg")
    .append("g")

var svg4 = d3.select("#panel2")
    .append("svg")
    .append("g")

var legend = svg1
    .append('g')
    .attr('class', 'legend')
    .attr("filter", "url(#dropshadow");

const legendX = 100
const legendXcircle = legendX - 70
const legendXtext = legendX - 50
const legendY = 30
legend.append("rect")
    .attr("x", legendX)
    .attr("y", legendY)
    .attr('width', 200)
    .attr('height', 605)
    .attr('fill', '#1c2442')
    .attr("rx", 20)
    .attr("ry", 20)
legend.append("rect")
    .attr("x", legendX)
    .attr("y", legendY + 615)
    .attr('width', 200)
    .attr('height', 265)
    .attr('fill', '#1c2442')
    .attr("rx", 20)
    .attr("ry", 20)
// Activision button
appendButton(legend, "./assets/Activision.svg",legendX+15, legendY+625, legendX+30, legendY+630, "gray", "activision")
// Bethesda button
appendButton(legend, "./assets/Bethesda_Softworks_Logo.svg",legendX+15, legendY+675, legendX+30, legendY+680, "white", "bethesda softworks")
// EA button
appendButton(legend, "./assets/ea.svg",legendX+15, legendY+725, legendX+30, legendY+728, "white", "electronic arts")
// Nintendo button
appendButton(legend, "./assets/Nintendo.svg",legendX+15, legendY+775, legendX+30, legendY+778, "#e60012", "nintendo")
// Ubisoft button
appendButton(legend, "./assets/ubisoft.svg",legendX+15, legendY+825, legendX+30, legendY+830, "white", "ubisoft")

var bubbleChart = svg
    .append('g')
    .attr('class', 'bubbleChart')
    .attr("filter", "url(#dropshadow");

bubbleChart.append("rect")
    .attr("x", 20)
    .attr("y", 30)
    .attr('width', 900)
    .attr('height', 870)
    .attr('fill', '#1c2442')
    .attr("rx", 20)
    .attr("ry", 20)

const panel = svg3
    .append("g")
    .attr("class", "panel")
    .attr("filter", "url(#dropshadow");
const panelX = 50;
const panelY = 30;
panel.append("rect")
    .attr("x", panelX)
    .attr("y", panelY)
    .attr('width', 450)
    .attr('height', 720)
    .attr('fill', '#1c2442')
    .attr("rx", 20)
    .attr("ry", 20)
// initialize panel text
initPanelText();

function initPanelText() {
    appendText(panel, "30px", panelX + 30, panelY + 60, true, "How do I use this? ")
    appendText(panel, "18px", panelX + 30, panelY + 100, false, "1. Hover nodes to reveal genre data")
    appendText(panel, "18px", panelX + 30, panelY + 140, false, "2. Click node to reveal game data")
    appendText(panel, "18px", panelX + 30, panelY + 180, false, "3. Hover publisher logos to reveal publisher data")
}


// drop shadow
// ref from: https://stackoverflow.com/questions/12277776/how-to-add-drop-shadow-to-d3-js-pie-or-donut-chart
/* For the drop shadow filter... */

var defs = svg.append("defs");

var filter = defs.append("filter")
    .attr("id", "dropshadow")

filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 5)
    .attr("result", "blur");
filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 2)
    .attr("dy", 2)
    .attr("result", "offsetBlur");

var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

// initialize legend
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",60).attr("r", 10).style("fill", "#FBA4FF")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",110).attr("r", 10).style("fill", "#8CD9FF")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",160).attr("r", 10).style("fill", "#ECDA00")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",210).attr("r", 10).style("fill", "#FF9900")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",260).attr("r", 10).style("fill", "#FF4F4F")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",310).attr("r", 10).style("fill", "#4FFF54")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",360).attr("r", 10).style("fill", "#AC1AFF")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",410).attr("r", 10).style("fill", "#0100FF")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",460).attr("r", 10).style("fill", "#FFFFFF")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",510).attr("r", 10).style("fill", "#00FFEE")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",560).attr("r", 10).style("fill", "#000000")
legend.append("circle").attr("cx",legendX+legendXcircle).attr("cy",610).attr("r", 10).style("fill", "#89550B")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 60).text("Platform").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 110).text("Racing").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 160).text("Sports").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 210).text("Fighting").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 260).text("Shooter").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 310).text("Role-Playing").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 360).text("Strategy").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 410).text("Action").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 460).text("Misc").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 510).text("Simulation").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 560).text("Puzzle").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")
legend.append("text").attr("x", legendX+legendXtext).attr("y", 610).text("Adventure").style("font-size", "25px").attr("alignment-baseline","middle").attr("fill", "#99a4cf").attr("font-family", "Roboto")

var simulation = d3.forceSimulation()
    .force("xForce", d3.forceX(width + 70).strength(0.05))
    .force("yForce", d3.forceY((height/2)+70).strength(0.05))
    .force("collide", d3.forceCollide(function(d) {
        return radiusScale(d.Global_Sales) + 2;
    }))

var radiusScale = d3.scaleSqrt([1,83]).range([1,10])
var loadedData

function filterData(publisher) {
    // clear drawn circles
    bubbleChart.selectAll("circle").remove();

    if (publisher === "None") {
        drawCircles(loadedData)
    }
    else {
        let filteredGames = loadedData
        for (i = 0; i < filteredGames.length; i++) {
            if (filteredGames[i].Publisher != publisher) {
                filteredGames.pop(filteredGames[i]);
            }
            drawCircles(filteredGames)
        }

        // re-draw circles based on filter
        drawCircles(filteredGames)
    }
}

function setData(games) {
    loadedData = games;
    drawCircles(games);
}

function drawCircles(games) {
    var circles = bubbleChart.selectAll(".Game")
        .data(games)
        .enter().append("circle")
        .attr("class", "Game")
        .attr("id", d => {return d.Name})
        .attr("class", d => {return d.Genre})
        .attr("r", function(d) {
            return radiusScale(d.Global_Sales)
        })
        .attr("fill", function(d) {
            switch(d.Genre) {
                case "Platform":
                    return "#FBA4FF"
                case "Racing":
                    return "#8CD9FF"
                case "Sports":
                    return "#ECDA00"
                case "Fighting":
                    return "#FF9900"
                case "Shooter":
                    return "#FF4F4F"
                case "Role-Playing":
                    return "#4FFF54"
                case "Strategy":
                    return "#AC1AFF"
                case "Action":
                    return "#0100FF"
                case "Misc":
                    return "#FFFFFF"
                case "Simulation":
                    return "#00FFEE"
                case "Puzzle":
                    return "#000000"
                case "Adventure":
                    return "#89550B"
            }
        })
        .attr("stroke", "none")
        .attr("stroke-width", 3)
        .attr("cx", 100)
        .attr("cy", 100)
        .on("click", handleClick)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut)
        .text(function(d) {
            return d.Name;
        })


    simulation.nodes(games)
        .on("tick", ticked)

    function ticked() {
        circles
            .attr("cx", function(d) {
                return d.x
            })
            .attr("cy", function(d) {
                return d.y
            })
    }

}

function handleClick(d) {
    console.log(d.path[0].__data__.Name);
    let title = d.path[0].__data__.Name;

    let games = bubbleChart.selectAll("circle")._groups[0]
    let selected = []
    let notSelected = []
    games.forEach(elem => {
        if (elem.id == title) {
            selected.push(elem)
        }
        else {
            notSelected.push(elem)
        }
    })
    notSelected.forEach(elem => {
        d3.select(elem).transition().duration(400).style("fill", "#485482").attr("opacity", 0.1)
    })
    console.log(d.path[0].__data__)

    displayGameData(d.path[0].__data__);

}

function handleMouseOver(d) {

    // update each node color
    let selectedGenre = d.path[0].__data__.Genre
    let games = bubbleChart.selectAll("circle")._groups[0]
    let selected = []
    let notSelected = []
    games.forEach(elem => {
        if (elem.className.baseVal == selectedGenre) {
            selected.push(elem)
        }
        else {
            notSelected.push(elem)
        }
    })
    notSelected.forEach(elem => {
        d3.select(elem).transition().duration(400).style("fill", "#485482").attr("opacity", 0.1)
    })

    // display data about genre
    displayGenreData(d, selectedGenre)
}

function appendButton(svgElem, src, buttonx, buttony, labelx, labely, color, arg) {
    let buttonGroup = svgElem.append("g")
    buttonGroup.append("rect")
        .attr("x", buttonx)
        .attr("y", buttony)
        .attr('width', 170)
        .attr('height', 40)
        .attr('fill', color)
        .attr("rx", 10)
        .attr("ry", 10)
    buttonGroup.append("svg:image")
        .attr("xlink:href", src)
        .attr("width", 140)
        .attr("height", 35)
        .attr("x", labelx)
        .attr("y", labely)
    buttonGroup
        .on("mouseover", () => this.filterByPub(arg))
        .on("mouseout", handleMouseOut)

}

function appendText(svgElem, fontSize, x, y, isBold, content) {
    if (!isBold) {
        svgElem
            .append("text")
            .attr("font-family", "Roboto")
            .attr("class", "data")
            .attr("x", x)
            .attr("y", y)
            .attr("alignment-baseline","middle")
            .attr("fill", "white")
            .text(content).style("font-size", fontSize)
    }
    else {
        svgElem
            .append("text")
            .attr("font-weight", "bold")
            .attr("font-family", "Roboto")
            .attr("class", "data")
            .attr("x", x)
            .attr("y", y)
            .attr("alignment-baseline","middle")
            .attr("fill", "#99a4cf")
            .text(content).style("font-size", fontSize)
    }
}

function filterByPub(publisher) {
    let publisherTitles = []
    let maxSales = Number.MIN_SAFE_INTEGER;
    let topTitle = ""
    let totalGlobalSales = 0
    let numCriticScore = 0;
    let numUserScore = 0;
    let sumCriticScore = 0;
    let sumUserScore = 0;
    loadedData.forEach(elem => {
        if(elem.Publisher.toUpperCase() === publisher.toUpperCase() ) {
            publisherTitles.push(elem.Name)
            if (parseFloat(elem.Global_Sales) > maxSales) {
                maxSales = parseFloat(elem.Global_Sales);
                topTitle = elem.Name;
                totalGlobalSales += parseFloat(elem.Global_Sales)
                if(elem.Critic_Score.length != 0 && elem.User_Score.length != 0) {
                    sumCriticScore += parseFloat(elem.Critic_Score);
                    // since user score is measured /10
                    sumUserScore += parseFloat(elem.User_Score * 10);
                    numCriticScore += 1;
                    numUserScore += 1;
                }
            }
        }
    })

    let avgCriticScore = Number(sumCriticScore / numCriticScore).toFixed(2);
    let avgUserScore = Number(sumUserScore / numUserScore).toFixed(2);

    let games = bubbleChart.selectAll("circle")._groups[0]
    let selected = []
    let notSelected = []

    games.forEach(elem => {
        if (publisherTitles.includes(elem.id)) {
            selected.push(elem)
        }
        else {
            notSelected.push(elem)
        }
    })
    notSelected.forEach(elem => {
        d3.select(elem).transition().duration(400).style("fill", "#485482").attr("opacity", 0.1)
    })

    // update panel text
    panel.selectAll("text").remove();
    // set labels
    appendText(panel, "30px", panelX+30, panelY+60, true, "All games by: ")
    appendText(panel, "30px", panelX+30, panelY+160, true, "Total global sales (in millions): ")
    appendText(panel, "30px", panelX+30, panelY+260, true, "Highest selling title: ")
    appendText(panel, "30px", panelX+30, panelY+360, true, "Avg critic score: ")
    appendText(panel, "30px", panelX+30, panelY+460, true, "Avg user score: ")

    appendText(panel, "20px", panelX+30, panelY+100, false, publisher)
    appendText(panel, "20px", panelX+30, panelY+200, false, totalGlobalSales)
    appendText(panel, "20px", panelX+30, panelY+300, false, topTitle)
    appendText(panel, "20px", panelX+30, panelY+400, false, avgCriticScore + "%")
    appendText(panel, "20px", panelX+30, panelY+500, false, avgUserScore + "%")

}

function displayGameData(selectedGame) {
    // clear text on panel
    panel.selectAll("text").remove();

    // calculate user score
    userScore = selectedGame.User_Score.length > 0 ? (parseFloat(selectedGame.User_Score) * 10) : ""

    // set labels
    appendText(panel, "30px", panelX+30, panelY+60, true, "Title: ")
    appendText(panel, "30px", panelX+30, panelY+160, true, "Global sales in millions: ")
    appendText(panel, "30px", panelX+30, panelY+260, true, "Avg critic score: ")
    appendText(panel, "30px", panelX+30, panelY+360, true, "Avg user score: ")
    appendText(panel, "30px", panelX+30, panelY+460, true, "Publisher: ")
    appendText(panel, "30px", panelX+30, panelY+560, true, "Platform: ")
    appendText(panel, "30px", panelX+250, panelY+560, true, "Rating: ")

    // set data
    appendText(panel, "20px", panelX+30, panelY+100, false, selectedGame.Name)
    appendText(panel, "20px", panelX+30, panelY+200, false, selectedGame.Global_Sales)
    appendText(panel, "20px", panelX+30, panelY+300, false, selectedGame.Critic_Score.lentgth > 0 ? selectedGame.Critic_Score + "%" : "N/A")
    appendText(panel, "20px", panelX+30, panelY+400, false, selectedGame.User_Score.length > 0 ? userScore + "%" : "N/A")
    appendText(panel, "20px", panelX+30, panelY+500, false, selectedGame.Publisher)
    appendText(panel, "20px", panelX+30, panelY+590, false, selectedGame.Platform)
    if (selectedGame.Rating.length > 0) {
        console.log(selectedGame.Rating)
        panel.append("svg:image")
            .attr("xlink:href", function () {
                switch (selectedGame.Rating) {
                    case "E10+":
                        return "./assets/ESRB_Everyone_10.svg"
                    case "E":
                        return "./assets/ESRB_Everyone.svg"
                    case "T":
                        return "./assets/ESRB_Teen.svg"
                    case "M":
                        return "./assets/ESRB_Mature_17+.svg"
                }
            })
            .attr("width", 80)
            .attr("height", 100)
            .attr("x", panelX + 250)
            .attr("y", panelY + 590);
    }
    else {
        appendText(panel, "20px", panelX+250, panelY+590, false, "N/A")
    }

}

function displayGenreData(d, selectedGenre) {
    let numSales = 0;
    let numCriticScore = 0;
    let numUserScore = 0;
    let sumSales = 0;
    let sumCriticScore = 0;
    let sumUserScore = 0;
    let maxSales = Number.MIN_SAFE_INTEGER;
    let topPublisher = ""

    loadedData.forEach(elem => {
        if(elem.Genre == selectedGenre && elem.Critic_Score.length != 0 && elem.User_Score.length != 0) {
            numSales += 1;
            numCriticScore += 1;
            numUserScore += 1;
            sumSales += parseFloat(elem.Global_Sales);
            sumCriticScore += parseFloat(elem.Critic_Score);
            // since user score is measured /10
            sumUserScore += parseFloat(elem.User_Score * 10);
            if (parseFloat(elem.Global_Sales) > maxSales) {
                maxSales = parseFloat(elem.Global_Sales);
                topPublisher = elem.Publisher;
            }
        }
    })

    let avgGlobalSales = Number(sumSales / numSales).toFixed(2);
    let avgCriticScore = Number(sumCriticScore / numCriticScore).toFixed(2);
    let avgUserScore = Number(sumUserScore / numUserScore).toFixed(2);

    // remove text
    panel.selectAll("Text").remove();

    // display labels
    appendText(panel, "30px", panelX + 30, panelY + 60, true, "Genre: ")
    appendText(panel, "30px", panelX + 30, panelY + 160, true, "Avg global sales in millions: ")
    appendText(panel, "30px", panelX + 30, panelY + 260, true, "Avg critic score: ")
    appendText(panel, "30px", panelX + 30, panelY + 360, true, "Avg user score: ")
    appendText(panel, "30px", panelX + 30, panelY + 460, true, "Highest selling publisher: ")

    // display data
    appendText(panel, 20, panelX+30, panelY+110, false, selectedGenre)
    appendText(panel, 20, panelX+30, panelY+210, false, avgGlobalSales)
    appendText(panel, 20, panelX+30, panelY+310, false, avgCriticScore + "%")
    appendText(panel, 20, panelX+30, panelY+410, false, avgUserScore + "%")
    appendText(panel, 20, panelX+30, panelY+510, false, topPublisher)

}

function handleMouseOut(d) {

    // reset colors
    let games = bubbleChart.selectAll("circle")._groups[0]
    games.forEach(elem => {
        let genre = elem.className.baseVal
        d3.select(elem)
            .interrupt()
            .style("fill", function(d) {
                switch(d.Genre) {
                    case "Platform":
                        return "#FBA4FF"
                    case "Racing":
                        return "#8CD9FF"
                    case "Sports":
                        return "#ECDA00"
                    case "Fighting":
                        return "#FF9900"
                    case "Shooter":
                        return "#FF4F4F"
                    case "Role-Playing":
                        return "#4FFF54"
                    case "Strategy":
                        return "#AC1AFF"
                    case "Action":
                        return "#0100FF"
                    case "Misc":
                        return "#FFFFFF"
                    case "Simulation":
                        return "#00FFEE"
                    case "Puzzle":
                        return "#000000"
                    case "Adventure":
                        return "#89550B"
                }
            })
            .attr("opacity", 1.0)
    })
    // remove text
    panel.selectAll("text").remove();
    // re-init panel text
    panel.selectAll("text")._groups[0].length == 0 ? initPanelText() : ""
    // remove image
    panel.selectAll("image").remove();
}