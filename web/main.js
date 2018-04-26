/**
 * Created by Ryan on 03/03/2018.
 */
var config = {
    apiKey: "AIzaSyBp5_TSq1jQrQObN-Y_M0mg0aEzRz4FGyA",
    authDomain: "ce301-4f9e5.firebaseapp.com",
    databaseURL: "https://ce301-4f9e5.firebaseio.com",
    projectId: "ce301-4f9e5",
    storageBucket: "ce301-4f9e5.appspot.com",
    messagingSenderId: "96077995008"
};
firebase.initializeApp(config);
var db = firebase.database();
var sessions = db.ref('sessions');

var playerpositions = { 1:[462, 462], 2:[412, 462], 3:[362, 462], 4:[312, 462], 5:[262, 462], 6:[212, 462], 7:[162, 462], 8:[112, 462], 9:[62, 462], 10:[12, 462],
                        11:[12, 412], 12:[62, 412], 13:[112, 412], 14:[162, 412], 15:[212, 412], 16:[262, 412], 17:[312, 412], 18:[362, 412], 19:[412, 412], 20:[462, 412],
                        21:[462, 362], 22:[412, 362], 23:[362, 362], 24:[312, 362], 25:[262, 362], 26:[212, 362], 27:[162, 362], 28:[112, 362], 29:[62, 362], 30:[12, 362],
                        31:[12, 312], 32:[62, 312], 33:[112, 312], 34:[162, 312], 35:[212, 312], 36:[262, 312], 37:[312, 312], 38:[362, 312], 39:[412, 312], 40:[462, 312],
                        41:[462, 262], 42:[412, 262], 43:[362, 262], 44:[312, 262], 45:[262, 262], 46:[212, 262], 47:[162, 262], 48:[112, 262], 49:[62, 262], 50:[12, 262],
                        51:[12, 212], 52:[62, 212], 53:[112, 212], 54:[162, 212], 55:[212, 212], 56:[262, 212], 57:[312, 212], 58:[362, 212], 59:[412, 212], 60:[462, 212],
                        61:[462, 162], 62:[412, 162], 63:[362, 162], 64:[312, 162], 65:[262, 162], 66:[212, 162], 67:[162, 162], 68:[112, 162], 69:[62, 162], 70:[12, 162],
                        71:[12, 112], 72:[62, 112], 73:[112, 112], 74:[162, 112], 75:[212, 112], 76:[262, 112], 77:[312, 112], 78:[362, 112], 79:[412, 112], 80:[462, 112],
                        81:[462, 62], 82:[412, 62], 83:[362, 62], 84:[312, 62], 85:[262, 62], 86:[212, 62], 87:[162, 62], 88:[112, 62], 89:[62, 62], 90:[12, 62],
                        91:[12, 12], 92:[62, 12], 93:[112, 12], 94:[162, 12], 95:[212, 12], 96:[262, 12], 97:[312, 12], 98:[362, 12], 99:[412, 12], 100:[462, 12]};

var boardpositions = { 1:[450, 450], 2:[400, 450], 3:[350, 450], 4:[300, 450], 5:[250, 450], 6:[200, 450], 7:[150, 450], 8:[100, 450], 9:[50, 450], 10:[0, 450],
                       11:[0, 400], 12:[50, 400], 13:[100, 400], 14:[150, 400], 15:[200, 400], 16:[250, 400], 17:[300, 400], 18:[350, 400], 19:[400, 400], 20:[450, 400],
                       21:[450, 350], 22:[400, 350], 23:[350, 350], 24:[300, 350], 25:[250, 350], 26:[200, 350], 27:[150, 350], 28:[100, 350], 29:[50, 350], 30:[0, 350],
                       31:[0, 300], 32:[50, 300], 33:[100, 300], 34:[150, 300], 35:[200, 300], 36:[250, 300], 37:[300, 300], 38:[350, 300], 39:[400, 300], 40:[450, 300],
                       41:[450, 250], 42:[400, 250], 43:[350, 250], 44:[300, 250], 45:[250, 250], 46:[200, 250], 47:[150, 250], 48:[100, 250], 49:[50, 250], 50:[0, 250],
                       51:[0, 200], 52:[50, 200], 53:[100, 200], 54:[150, 200], 55:[200, 200], 56:[250, 250], 57:[300, 200], 58:[350, 200], 59:[400, 200], 60:[450, 200],
                       61:[450, 150], 62:[400, 150], 63:[350, 150], 64:[300, 150], 65:[250, 150], 66:[200, 150], 67:[150, 150], 68:[100, 150], 69:[50, 150], 70:[0, 150],
                       71:[0, 100], 72:[50, 100], 73:[100, 100], 74:[150, 100], 75:[200, 100], 76:[250, 100], 77:[300, 100], 78:[350, 100], 79:[400, 100], 80:[450, 100],
                       81:[450, 50], 82:[400, 50], 83:[350, 50], 84:[300, 50], 85:[250, 50], 86:[200, 50], 87:[150, 50], 88:[100, 50], 89:[50, 50], 90:[0, 50],
                       91:[0, 0], 92:[50, 0], 93:[100, 0], 94:[150, 0], 95:[200, 0], 96:[250, 0], 97:[300, 0], 98:[350, 0], 99:[400, 0], 100:[450, 0]};

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var current = false;

var sessionCount = 0;

var playernumber = 1;

var img;
var chance;
var chest;
var ladder;
var ladderTop;
var ladderBot;
var slope;
var slopeTop;
var slopeBot;
var jail;
var jailBig;
var p1;
var p2;
var greensquare;
var redsquare;
var loaders;

var count = 0;

var cash = 500;

var jailed = false;
var unjailattempts = 3;

var chanceMessages = ["You are required by the bank to pay a fee of £50.", "Congratulations, you won a prize of £10 in a raffle.", "You have been awarded an extra roll.", "Unfortunately you are required to pay a fine of £100.", "Move forwards by 3 squares.", "Move forwards by 5 squares."];
var chestMessages = ["Return to square 1 and collect your bonus.", "Congratulations, you have won a prize of £20.", "Congratulations, you have been awarded £100.", "Congratulations, you won a prize of £50"];

var p1email = "";
var p2email = "";

var fincount = 0;

var stop = false;

var rollCount = 0;


function create (p1) {
    p1email = p1;
    db.ref().child("sessions").once("value", function(snapshot) {
        snapshot.forEach(function(child) {
            sessionCount = sessionCount + 1;
        });
        generateGrid(sessionCount);
    });
}

function join (p2) {
    p2email = p2;
    playernumber = 2;
    var counter = 0;
    try {
        db.ref().child("sessions").once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                if (child.val().playercount == 1) {
                    if (counter == 0) {
                        displayGame(child.val().grid);
                        child.ref.update({playercount: 2});
                        sessionCount = child.val().gameid-1;
                        counter++;
                        updateEmail();
                        begin1();
                    }
                }
            });
        });
    } catch (e) {
    }
}

function joinSpecific (p2, p1email) {
    p2email = p2;
    playernumber = 2;
    var counter = 0;
    try {
        db.ref().child("sessions").once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                if (child.val().playercount == 1 && child.val().p1email == p1email) {
                    if (counter == 0) {
                        displayGame(child.val().grid);
                        child.ref.update({playercount: 2});
                        sessionCount = child.val().gameid-1;
                        counter++;
                        updateEmail();
                        begin1();
                    }
                }
            });
        });
    } catch (e) {
    }
}

function updateEmail() {
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function(childNodes) {
            if (childNodes.val().p2email != p2email) {
                childNodes.ref.update({p2email: p2email});
            }
        });
    });
}

function loadSprite(sprite, src) {
    var deferred = $.Deferred();
    sprite.onload = function() {
        deferred.resolve();
    };
    sprite.src = src;
    return deferred.promise();
}

function generateGrid(sessionCount) {
    var grid = [];

    for (i = 0; i < 10; i++) {
        grid.push(new Array(10).fill('E'))
    }

    var ladderRand1 = Math.floor(Math.random() * 8);
    var ladderRand2 = Math.floor(Math.random() * 8);
    while (Math.abs(ladderRand1 - ladderRand2) < 3) {
        ladderRand2 = Math.floor(Math.random() * 8);
    }

    var slopeRand1 = Math.floor(Math.random() * 7) + 3;
    var slopeRand2 = Math.floor(Math.random() * 7) + 3;
    while (Math.abs(slopeRand1 - slopeRand2) < 3) {
        slopeRand2 = Math.floor(Math.random() * 7) + 3;
    }

    var rand = Math.floor(Math.random() * 10);
    grid[ladderRand1][rand] = 'LT';
    grid[ladderRand1 + 1][rand] = 'L';
    grid[ladderRand1 + 2][rand] = 'LB';
    rand = Math.floor(Math.random() * 10);
    grid[ladderRand2][rand] = 'LT2';
    grid[ladderRand2 + 1][rand] = 'L2';
    grid[ladderRand2 + 2][rand] = 'LB2';
    rand = Math.floor(Math.random() * 10);
    while (grid[slopeRand1][rand] != 'E' || grid[slopeRand1 - 1][rand] != 'E' || grid[slopeRand1 - 2][rand] != 'E') {
        rand = Math.floor(Math.random() * 10);
    }
    grid[slopeRand1][rand] = 'SB';
    grid[slopeRand1 - 1][rand] = 'S';
    grid[slopeRand1 - 2][rand] = 'ST';
    rand = Math.floor(Math.random() * 10);
    while (grid[slopeRand2][rand] != 'E' || grid[slopeRand2 - 1][rand] != 'E' || grid[slopeRand2 - 2][rand] != 'E') {
        rand = Math.floor(Math.random() * 10);
    }
    grid[slopeRand2][rand] = 'SB2';
    grid[slopeRand2 - 1][rand] = 'S2';
    grid[slopeRand2 - 2][rand] = 'ST2';

    for (y = 0; y < 10; y++) {
        var rand = Math.floor(Math.random() * 10);
        while (grid[y][rand] != 'E') {
            rand = Math.floor(Math.random() * 10);
        }
        grid[y][rand] = "CHA";

        while (grid[y][rand] != 'E') {
            rand = Math.floor(Math.random() * 10);
        }
        grid[y][rand] = "CHE";
    }

    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    while (grid[rand1][rand2] != 'E') {
        rand1 = Math.floor(Math.random() * 10);
        rand2 = Math.floor(Math.random() * 10);
    }
    grid[rand1][rand2] = 'J';
    while (grid[rand1][rand2] != 'E') {
        rand1 = Math.floor(Math.random() * 10);
        rand2 = Math.floor(Math.random() * 10);
    }
    grid[rand1][rand2] = 'J';
    while (grid[rand1][rand2] != 'E') {
        rand1 = Math.floor(Math.random() * 10);
        rand2 = Math.floor(Math.random() * 10);
    }
    grid[rand1][rand2] = 'J';

    var data = {
        gameid: sessionCount + 1,
        playercount: 1,
        grid: grid,
        current: Math.floor(Math.random() * 2) + 1,
        p1pos: 0,
        p2pos: 0,
        p1prev: 0,
        p2prev: 0,
        p1owned: [-998, -999],
        p2owned: [-998, -999],
        p1injail: false,
        p2injail: false,
        gameover: false,
        winner: "",
        p1email: p1email,
        p2email: p2email,
        p1score: 0,
        p2score: 0
    };

    sessions.push(data);
    var call = 0;
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.on('value', function (snapshot) {
        if (call == 1) {
            displayGame(grid);
            begin1();
        }
        call++;
    });
}

function begin1() {
    document.getElementById('message').innerHTML = '';
    //Handle turns [CORE]
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.on('value', function (snapshot) {
        snapshot.forEach(function(childNodes) {
            console.log("CALLED");
            if (childNodes.val().gameover && !stop) {
                console.log("GAME OVER");
                setTimeout(function () {
                    alert("The game has been won by " + childNodes.val().winner + ". You will now be returned to the homepage.");
                    window.location = "index.html";
                    stop = true;
                }, 1);
                if (playernumber == 1 && !stop) {

                    if (childNodes.val().winner == "player 1" && childNodes.val().p1email != "None") {
                        var hsRef = db.ref('highscores');
                        var data = {
                            score: childNodes.val().p1score,
                            user: childNodes.val().p1email
                        };
                        hsRef.push(data);
                    }
                    if (childNodes.val().winner == "player 2" && childNodes.val().p2email != "None") {
                        var hsRef2 = db.ref('highscores');
                        var data2 = {
                            score: childNodes.val().p2score,
                            user: childNodes.val().p2email
                        };
                        hsRef2.push(data2);
                    }
                }
                stop = true;
            }
            var currentcollapsed = collapseGrid();
            if (playernumber == 1) {
                if (childNodes.val().current == 1) {
                    current = true;
                    document.getElementById('message').innerHTML = '<b>Player 1: It is your turn!</b>';
                } else {
                    document.getElementById('message').innerHTML = '';
                }

                if (childNodes.val().p2prev == 0) {
                    if (childNodes.val().p2pos != 0) {
                        ctx.drawImage(img, 510, 450);
                        if (childNodes.val().p1pos == 0) {
                            ctx.drawImage(p1, 522, 462);
                        }
                    }
                }
                if (childNodes.val().p1prev != 0) {
                    var pos1holder = boardpositions[childNodes.val().p1prev];
                    ctx.drawImage(img, pos1holder[0], pos1holder[1]);
                } else {
                }
                if (childNodes.val().p2prev != 0) {
                    var pos2holder = boardpositions[childNodes.val().p2prev];
                    ctx.drawImage(img, pos2holder[0], pos2holder[1]);
                } else {
                }
                drawSymbols();
                if (childNodes.val().p1pos != 0) {
                    var curr1 = playerpositions[childNodes.val().p1pos];
                    ctx.drawImage(p1, curr1[0], curr1[1]);
                }
                if (childNodes.val().p2pos != 0) {
                    var curr2 = playerpositions[childNodes.val().p2pos];
                    ctx.drawImage(p2, curr2[0], curr2[1]);
                }

                var collapsedholder2 = collapseGrid();
                var temppos2 = childNodes.val().p2pos;
                temppos2--;
                if (collapsedholder2[temppos2] == "E2") {
                    var squareholder2 = boardpositions[childNodes.val().p2pos];
                    ctx.drawImage(redsquare, squareholder2[0], squareholder2[1]);
                    var p2posholer = playerpositions[childNodes.val().p2pos];
                    ctx.drawImage(p2, p2posholer[0], p2posholer[1]);
                }
                if (childNodes.val().p2injail) {
                    ctx.drawImage(p2, 570, 60);
                } else {
                    ctx.fillStyle="white";
                    ctx.fillRect(570, 60, 30, 30);
                    ctx.fillStyle="black";
                }
            } else {
                if (childNodes.val().current == 2) {
                    current = true;
                    document.getElementById('message').innerHTML = '<b>Player 2: It is your turn!</b>';
                } else {
                    document.getElementById('message').innerHTML = '';
                }

                //Graphics handling
                if (childNodes.val().p1prev == 0) {
                    if (childNodes.val().p1pos != 0) {
                        ctx.drawImage(img, 510, 450);
                        if (childNodes.val().p2pos == 0) {
                            ctx.drawImage(p2, 522, 462);
                        }
                    }
                }
                if (childNodes.val().p2prev != 0) {
                    var pos2holder = boardpositions[childNodes.val().p2prev];
                    ctx.drawImage(img, pos2holder[0], pos2holder[1]);
                } else {
                }
                if (childNodes.val().p1prev != 0) {
                    var pos1holder = boardpositions[childNodes.val().p1prev];
                    ctx.drawImage(img, pos1holder[0], pos1holder[1]);
                } else {
                }
                drawSymbols();
                if (childNodes.val().p2pos != 0) {
                    var curr2 = playerpositions[childNodes.val().p2pos];
                    ctx.drawImage(p2, curr2[0], curr2[1]);
                }
                if (childNodes.val().p1pos != 0) {
                    var curr1 = playerpositions[childNodes.val().p1pos];
                    ctx.drawImage(p1, curr1[0], curr1[1]);
                }

                var collapsedholder = collapseGrid();
                var temppos = childNodes.val().p1pos;
                temppos--;
                if (collapsedholder[temppos] == "E1") {
                    var squareholder = boardpositions[childNodes.val().p1pos];
                    ctx.drawImage(redsquare, squareholder[0], squareholder[1]);
                    var p1posholer = playerpositions[childNodes.val().p1pos];
                    ctx.drawImage(p1, p1posholer[0], p1posholer[1]);
                }
                if (childNodes.val().p1injail) {
                    ctx.drawImage(p1, 570, 30);
                } else {
                    ctx.fillStyle="white";
                    ctx.fillRect(570, 30, 30, 30);
                    ctx.fillStyle="black";
                }
            }

            if (childNodes.val().p1pos == childNodes.val().p2pos) {
                if (childNodes.val().p2pos != 0) {
                    var boardpos = boardpositions[childNodes.val().p2pos];
                    ctx.drawImage(img, boardpos[0], boardpos[1]);
                    drawSymbols();
                    var playerpos = playerpositions[childNodes.val().p2pos];
                    if (playernumber == 1) {
                        console.log("on the same place");
                        ctx.drawImage(p2, playerpos[0] + 5, playerpos[1] + 5);
                        ctx.drawImage(p1, playerpos[0], playerpos[1]);
                    } else {
                        console.log("on the same place2");
                        ctx.drawImage(p1, playerpos[0] + 5, playerpos[1] + 5);
                        ctx.drawImage(p2, playerpos[0], playerpos[1]);
                    }
                }
            }
        });
    });
}

function checkforfour () {
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function (childNodes) {
            if (cash < 0) {
                if (playernumber == 1) {
                    console.log("PLAYER 1 LOST THE GAME BY RUNNING OUT OF MONEY!");
                    childNodes.ref.update({p2score: childNodes.val().p2score + 100});
                    childNodes.ref.update({winner: "player 2"});
                    childNodes.ref.update({gameover: true});
                } else {
                    console.log("PLAYER 2 LOST THE GAME BY RUNNING OUT OF MONEY!");
                    childNodes.ref.update({p1score: childNodes.val().p1score + 100});
                    childNodes.ref.update({winner: "player 1"});
                    childNodes.ref.update({gameover: true});
                }
            }
        });
    });
    var tempgrid;
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function(childNodes) {
            tempgrid = childNodes.val().grid;
            if (!childNodes.val().gameover) {
                checkrows(tempgrid);
                checkcols(tempgrid);
            }
        });
    });

}

function checkrows (rows) {

    console.log("checkrows called");
    var p1win = "E1,E1,E1,E1";
    var p2win = "E2,E2,E2,E2";
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function (childNodes) {
            for (var i = 0; i < 10; i++) {
                if ((rows[i].toString()).indexOf(p1win) !== -1) {
                    console.log("PLAYER 1 HAS WON THE GAME - VIA A ROW!!!");
                    childNodes.ref.update({p1score: childNodes.val().p1score + 100});
                    childNodes.ref.update({winner: "player 1"});
                    childNodes.ref.update({gameover: true});
                    break;
                }
                if ((rows[i].toString()).indexOf(p2win) !== -1) {
                    console.log("PLAYER 2 HAS WON THE GAME - VIA A ROW!!!");
                    childNodes.ref.update({p2score: childNodes.val().p2score + 100});
                    childNodes.ref.update({winner: "player 2"});
                    childNodes.ref.update({gameover: true});
                    break;
                }
            }
        });
    });
}

function checkcols (grid) {
    var p1win = "E1,E1,E1,E1";
    var p2win = "E2,E2,E2,E2";
    var cols = [];
    for (var i = 0; i < 10; i++) {
        var temp = [];
        for (var j = 0; j < 10; j++) {
            temp.push(grid[j][i]);
        }
        cols.push(temp);
    }
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function (childNodes) {
            for (var k = 0; k < 10; k++) {
                if ((cols[k].toString()).indexOf(p1win) !== -1) {
                    console.log("PLAYER 1 HAS WON THE GAME - VIA A COLUMN!!!");
                    childNodes.ref.update({p1score: childNodes.val().p1score + 100});
                    childNodes.ref.update({winner: "player 1"});
                    childNodes.ref.update({gameover: true});
                    break;
                }
                if ((cols[k].toString()).indexOf(p2win) !== -1) {
                    console.log("PLAYER 2 HAS WON THE GAME - VIA A COLUMN!!!");
                    childNodes.ref.update({p2score: childNodes.val().p2score + 100});
                    childNodes.ref.update({winner: "player 2"});
                    childNodes.ref.update({gameover: true});
                }
            }
        });
    });
}


function roll (number) {
    var extraRoll = false;
    if (current && rollCount == 0) {
        rollCount++;
        if (!jailed) {
            var placeholder = document.getElementById('placeholder');
            placeholder.innerHTML = number;
            var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
            sessRef.once('value', function (snapshot) {
                snapshot.forEach(function (childNodes) {
                    if (playernumber == 1) {
                        childNodes.ref.update({p1prev: childNodes.val().p1pos});
                        if (childNodes.val().p1pos == 0) {
                            ctx.drawImage(img, 510, 450);
                            if (childNodes.val().p2pos == 0) {
                                ctx.drawImage(p2, 522, 462);
                            } else {
                                var p2posarr = playerpositions[childNodes.val().p2pos];
                                ctx.drawImage(p2, p2posarr[0], p2posarr[1]);
                            }
                            var pos = playerpositions[number];
                            ctx.drawImage(p1, pos[0], pos[1]);
                        } else {
                            var pos2 = boardpositions[childNodes.val().p1pos];
                            ctx.drawImage(img, pos2[0], pos2[1]);
                            drawSymbols();
                            if ((childNodes.val().p1pos + number) <= 100) {
                                var pos3 = playerpositions[childNodes.val().p1pos + number];
                                ctx.drawImage(p1, pos3[0], pos3[1]);
                            } else {
                                var pos3 = playerpositions[(childNodes.val().p1pos + number) - 100];
                                ctx.drawImage(p1, pos3[0], pos3[1]);
                                cash += 200;
                                ctx.fillStyle = "#33ccff";
                                ctx.fillRect(540, 200, 200, 30);
                                ctx.font = "20px Helvetica";
                                ctx.fillStyle = "black";
                                ctx.fillText("Current Cash: £" + cash, 560, 225);
                            }
                        }
                        if ((childNodes.val().p1pos + number) <= 100) {
                            childNodes.ref.update({p1pos: childNodes.val().p1pos + number});
                        } else {
                            childNodes.ref.update({p1pos: (childNodes.val().p1pos + number) - 100});
                        }
                    } else {
                        childNodes.ref.update({p2prev: childNodes.val().p2pos});
                        if (childNodes.val().p2pos == 0) {
                            ctx.drawImage(img, 510, 450);
                            if (childNodes.val().p1pos == 0) {
                                ctx.drawImage(p1, 522, 462);
                            } else {
                                var p1posarr = playerpositions[childNodes.val().p1pos];
                                ctx.drawImage(p1, p1posarr[0], p1posarr[1]);
                            }
                            var pos = playerpositions[number];
                            ctx.drawImage(p2, pos[0], pos[1]);
                        } else {
                            var pos2 = boardpositions[childNodes.val().p2pos];
                            ctx.drawImage(img, pos2[0], pos2[1]);
                            drawSymbols();
                            if ((childNodes.val().p2pos + number) <= 100) {
                                var pos3 = playerpositions[childNodes.val().p2pos + number];
                                ctx.drawImage(p2, pos3[0], pos3[1]);
                            } else {
                                var pos3 = playerpositions[(childNodes.val().p2pos + number) - 100];
                                ctx.drawImage(p2, pos3[0], pos3[1]);
                                cash += 200;
                                ctx.fillStyle = "#33ccff";
                                ctx.fillRect(540, 200, 200, 30);
                                ctx.font = "20px Helvetica";
                                ctx.fillStyle = "black";
                                ctx.fillText("Current Cash: £" + cash, 560, 225);
                            }
                        }
                        if ((childNodes.val().p2pos + number) <= 100) {
                            childNodes.ref.update({p2pos: childNodes.val().p2pos + number});
                        } else {
                            childNodes.ref.update({p2pos: (childNodes.val().p2pos + number) - 100});
                        }
                    }

                    //HANDLE ACTION BASED ON THE SQUARE LANDED ON.
                    var gridcollapsed = collapseGrid();
                    if (playernumber == 1) {
                        //Purchasable square
                        if (cash >= 100) {
                            if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "E") {
                                setTimeout(function () {
                                    var answer = confirm("Would you like to purchase this square for £100?");
                                    if (answer) {
                                        console.log("Answer received");
                                        cash -= 100;
                                        ctx.fillStyle = "#33ccff";
                                        ctx.fillRect(540, 200, 200, 30);
                                        ctx.font = "20px Helvetica";
                                        ctx.fillStyle = "black";
                                        ctx.fillText("Current Cash: £" + cash, 560, 225);
                                        gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] = "E1";
                                        reconstructGrid(gridcollapsed);
                                        childNodes.ref.update({p1score: childNodes.val().p1score + 10});
                                        if (playernumber == 1) {
                                            childNodes.ref.update({current: 2});
                                        } else {
                                            childNodes.ref.update({current: 1});
                                        }
                                        current = false;
                                    }
                                    else {
                                        if (playernumber == 1) {
                                            childNodes.ref.update({current: 2});
                                        } else {
                                            childNodes.ref.update({current: 1});
                                        }
                                        current = false;
                                        //some code
                                    }
                                }, 5);
                            }
                        } else {
                            if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "E") {
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            }
                        }

                    } else {
                        //Purchasable square
                        if (cash >= 100) {
                            if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "E") {
                                setTimeout(function () {
                                    var answer = confirm("Would you like to purchase this square for £100?");
                                    if (answer) {
                                        cash -= 100;
                                        ctx.fillStyle = "#33ccff";
                                        ctx.fillRect(540, 200, 200, 30);
                                        ctx.font = "20px Helvetica";
                                        ctx.fillStyle = "black";
                                        ctx.fillText("Current Cash: £" + cash, 560, 225);
                                        gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] = "E2";
                                        reconstructGrid(gridcollapsed);
                                        childNodes.ref.update({p2score: childNodes.val().p2score + 10});
                                        if (playernumber == 1) {
                                            childNodes.ref.update({current: 2});
                                        } else {
                                            childNodes.ref.update({current: 1});
                                        }
                                        current = false;
                                    }
                                    else {
                                        if (playernumber == 1) {
                                            childNodes.ref.update({current: 2});
                                        } else {
                                            childNodes.ref.update({current: 1});
                                        }
                                        current = false;
                                        //some code
                                    }
                                }, 5);
                            }
                        } else {
                            if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "E") {
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            }
                        }
                    }

                    console.log("After purchable squares");

                    //Opponent square
                    if (playernumber == 1) {
                        if (cash >= 50) {
                            if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "E2") {
                                cash -= 50;
                                ctx.fillStyle = "#33ccff";
                                ctx.fillRect(540, 200, 200, 30);
                                ctx.font = "20px Helvetica";
                                ctx.fillStyle = "black";
                                ctx.fillText("Current Cash: £" + cash, 560, 225);
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            } else if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "E1") {
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            }
                        } else {
                            //GAME OVER - HANDLE THIS
                        }
                        var gridCollapsed2 = collapseGrid();
                        var sessRef2 = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
                        sessRef2.once('value', function (snapshot2) {
                            snapshot2.forEach(function (childNodes2) {
                                if (gridcollapsed[(childNodes.val().p2pos - 1)%100] === "E1") {
                                    cash += 50;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                }
                            });
                        });
                    } else {
                        if (cash >= 50) {
                            if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "E1") {
                                cash -= 50;
                                ctx.fillStyle = "#33ccff";
                                ctx.fillRect(540, 200, 200, 30);
                                ctx.font = "20px Helvetica";
                                ctx.fillStyle = "black";
                                ctx.fillText("Current Cash: £" + cash, 560, 225);
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            } else if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "E2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        } else {
                        }
                        var gridCollapsed2 = collapseGrid();
                        var sessRef2 = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
                        sessRef2.once('value', function (snapshot2) {
                            snapshot2.forEach(function (childNodes2) {
                                if (gridcollapsed[(childNodes.val().p1pos - 1)%100] === "E2") {
                                    cash += 50;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                }
                            });
                        });
                    }

                    //Ladder handling
                    if (playernumber == 1) {
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "LB") {
                            var posholder = boardpositions[childNodes.val().p1pos+number];
                            ctx.drawImage(img, posholder[0], posholder[1]);
                            drawSymbols();
                            if (childNodes.val().p2pos != 0) {
                                var p1hold = playerpositions[childNodes.val().p2pos];
                                ctx.drawImage(p2, p1hold[0], p1hold[1]);
                            }
                            childNodes.ref.update({p1pos: gridcollapsed.indexOf("LT") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "L") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)] === "LT") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "LB2") {
                            var posholder = boardpositions[childNodes.val().p1pos+number];
                            ctx.drawImage(img, posholder[0], posholder[1]);
                            drawSymbols();
                            if (childNodes.val().p2pos != 0) {
                                var p1hold = playerpositions[childNodes.val().p2pos];
                                ctx.drawImage(p2, p1hold[0], p1hold[1]);
                            }
                            childNodes.ref.update({p1pos: gridcollapsed.indexOf("LT2") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "L2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)] === "LT2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    } else {
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "LB") {
                            var posholder = boardpositions[childNodes.val().p2pos+number];
                            ctx.drawImage(img, posholder[0], posholder[1]);
                            drawSymbols();
                            if (childNodes.val().p1pos != 0) {
                                var p1hold = playerpositions[childNodes.val().p1pos];
                                ctx.drawImage(p1, p1hold[0], p1hold[1]);
                            }
                            childNodes.ref.update({p2pos: gridcollapsed.indexOf("LT") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "L") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "LT") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "LB2") {
                            var posholder = boardpositions[childNodes.val().p2pos+number];
                            ctx.drawImage(img, posholder[0], posholder[1]);
                            drawSymbols();
                            if (childNodes.val().p1pos != 0) {
                                var p1hold = playerpositions[childNodes.val().p1pos];
                                ctx.drawImage(p1, p1hold[0], p1hold[1]);
                            }
                            childNodes.ref.update({p2pos: gridcollapsed.indexOf("LT2") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "L2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "LT2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    }

                    //Slope handling
                    if (playernumber == 1) {
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "ST") {
                            if (childNodes.val().p1pos + number != 0) {
                                var posholder = boardpositions[childNodes.val().p1pos+number];
                                ctx.drawImage(img, posholder[0], posholder[1]);
                                drawSymbols();
                                if (childNodes.val().p2pos != 0) {
                                    var p1hold = playerpositions[childNodes.val().p2pos];
                                    ctx.drawImage(p2, p1hold[0], p1hold[1]);
                                }
                            }
                            childNodes.ref.update({p1pos: gridcollapsed.indexOf("SB") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)] === "S") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)] === "SB") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "ST2") {
                            if (childNodes.val().p1pos + number != 0) {
                                var posholder = boardpositions[childNodes.val().p1pos+number];
                                ctx.drawImage(img, posholder[0], posholder[1]);
                                drawSymbols();
                                if (childNodes.val().p2pos != 0) {
                                    var p1hold = playerpositions[childNodes.val().p2pos];
                                    ctx.drawImage(p2, p1hold[0], p1hold[1]);
                                }
                            }
                            childNodes.ref.update({p1pos: gridcollapsed.indexOf("SB2") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)] === "S2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p1pos - 1) + number)] === "SB2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    } else {
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "ST") {
                            if (childNodes.val().p2pos + number != 0) {
                                var posholder = boardpositions[childNodes.val().p2pos+number];
                                ctx.drawImage(img, posholder[0], posholder[1]);
                                drawSymbols();
                                if (childNodes.val().p1pos != 0) {
                                    var p1hold = playerpositions[childNodes.val().p1pos];
                                    ctx.drawImage(p1, p1hold[0], p1hold[1]);
                                }
                            }
                            childNodes.ref.update({p2pos: gridcollapsed.indexOf("SB") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "S") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "SB") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "ST2") {
                            if (childNodes.val().p2pos + number != 0) {
                                var posholder = boardpositions[childNodes.val().p2pos+number];
                                ctx.drawImage(img, posholder[0], posholder[1]);
                                drawSymbols();
                                if (childNodes.val().p1pos != 0) {
                                    var p1hold = playerpositions[childNodes.val().p1pos];
                                    ctx.drawImage(p1, p1hold[0], p1hold[1]);
                                }
                            }
                            childNodes.ref.update({p2pos: gridcollapsed.indexOf("SB2") + 1});
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "S2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                        if (gridcollapsed[((childNodes.val().p2pos - 1) + number)] === "SB2") {
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    }

                    //Jail handling
                    if (playernumber == 1) {
                        if ((gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "J")) {
                            jailed = true;
                            ctx.drawImage(p1, 570, 30);
                            childNodes.ref.update({p1injail: true});
                            setTimeout(function () {
                                alert("You have been jailed. You have 3 attempts to roll a 6 before being fined £50");
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            }, 5);
                        }
                    } else {
                        if ((gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "J")) {
                            jailed = true;
                            ctx.drawImage(p2, 570, 60);
                            childNodes.ref.update({p2injail: true});
                            setTimeout(function () {
                                alert("You have been jailed. You have 3 attempts to roll a 6 before being fined £50");
                                if (playernumber == 1) {
                                    childNodes.ref.update({current: 2});
                                } else {
                                    childNodes.ref.update({current: 1});
                                }
                                current = false;
                            }, 5);
                        }
                    }

                    //Chance handling
                    if (playernumber == 1) {
                        if ((gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "CHA")) {
                            var random = Math.floor(Math.random() * 6);
                            switch (random) {
                                case 0:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    cash -= 50;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 1:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    cash += 10;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 2:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    extraRoll = true;
                                    break;
                                case 3:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    cash -= 100;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 4:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    if (childNodes.val().p1pos+3+number <= 100) {
                                        childNodes.ref.update({p1pos: childNodes.val().p1pos + 3 + number});
                                    } else {
                                        childNodes.ref.update({p1pos: (childNodes.val().p1pos + 3 + number)-100});
                                        cash += 200;
                                        ctx.fillStyle = "#33ccff";
                                        ctx.fillRect(540, 200, 200, 30);
                                        ctx.font = "20px Helvetica";
                                        ctx.fillStyle = "black";
                                        ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    }
                                    break;
                                case 5:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    if (childNodes.val().p1pos+5+number <= 100) {
                                        childNodes.ref.update({p1pos: childNodes.val().p1pos + 5 + number});
                                    } else {
                                        childNodes.ref.update({p1pos: (childNodes.val().p1pos + 5 + number) - 100});
                                        cash += 200;
                                        ctx.fillStyle = "#33ccff";
                                        ctx.fillRect(540, 200, 200, 30);
                                        ctx.font = "20px Helvetica";
                                        ctx.fillStyle = "black";
                                        ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    }
                                    break;
                            }
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    } else {
                        if ((gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "CHA")) {
                            var random = Math.floor(Math.random() * 6);
                            switch (random) {
                                case 0:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    cash -= 50;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 1:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    cash += 10;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 2:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    extraRoll = true;
                                    break;
                                case 3:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    cash -= 100;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 4:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    if (childNodes.val().p2pos+3+number <= 100) {
                                        childNodes.ref.update({p2pos: childNodes.val().p2pos + 3 + number});
                                    } else {
                                        childNodes.ref.update({p2pos: (childNodes.val().p2pos + 3 + number)-100});
                                        cash += 200;
                                        ctx.fillStyle = "#33ccff";
                                        ctx.fillRect(540, 200, 200, 30);
                                        ctx.font = "20px Helvetica";
                                        ctx.fillStyle = "black";
                                        ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    }
                                    break;
                                case 5:
                                    setTimeout(function () {
                                        alert(chanceMessages[random]);
                                    }, 5);
                                    if (childNodes.val().p2pos+5+number <= 100) {
                                        childNodes.ref.update({p2pos: childNodes.val().p2pos + 5 + number});
                                    } else {
                                        childNodes.ref.update({p2pos: (childNodes.val().p2pos + 5 + number)-100});
                                        cash += 200;
                                        ctx.fillStyle = "#33ccff";
                                        ctx.fillRect(540, 200, 200, 30);
                                        ctx.font = "20px Helvetica";
                                        ctx.fillStyle = "black";
                                        ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    }
                                    break;
                            }
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    }

                    //CHEST HANDLING
                    if (playernumber == 1) {
                        if ((gridcollapsed[((childNodes.val().p1pos - 1) + number)%100] === "CHE")) {
                            var random = Math.floor(Math.random() * 4);
                            switch (random) {
                                case 0:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    var posholder = boardpositions[childNodes.val().p1pos+number];
                                    ctx.drawImage(img, posholder[0], posholder[1]);
                                    drawSymbols();
                                    if (childNodes.val().p2pos != 0) {
                                        var p1hold = playerpositions[childNodes.val().p2pos];
                                        ctx.drawImage(p2, p1hold[0], p1hold[1]);
                                    }
                                    childNodes.ref.update({p1pos: (childNodes.val().p1pos - childNodes.val().p1pos)+1});
                                    cash += 200;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.font = "20px Helvetica";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 1:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    cash += 20;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 2:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    cash += 100;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 3:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    cash += 50;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                            }
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    } else {
                        if ((gridcollapsed[((childNodes.val().p2pos - 1) + number)%100] === "CHE")) {
                            var random = Math.floor(Math.random() * 4);
                            switch (random) {
                                case 0:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    var posholder = boardpositions[childNodes.val().p2pos+number];
                                    ctx.drawImage(img, posholder[0], posholder[1]);
                                    drawSymbols();
                                    if (childNodes.val().p1pos != 0) {
                                        var posholder2 = playerpositions[(childNodes.val().p1pos)];
                                        ctx.drawImage(p1, posholder2[0], [posholder2[1]]);
                                    }
                                    childNodes.ref.update({p2pos: (childNodes.val().p2pos - childNodes.val().p2pos)+1});
                                    cash += 200;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 1:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    cash += 20;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 2:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    cash += 100;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                                case 3:
                                    setTimeout(function () {
                                        alert(chestMessages[random]);
                                    }, 5);
                                    cash += 50;
                                    ctx.fillStyle = "#33ccff";
                                    ctx.fillRect(540, 200, 200, 30);
                                    ctx.font = "20px Helvetica";
                                    ctx.fillStyle = "black";
                                    ctx.fillText("Current Cash: £" + cash, 560, 225);
                                    break;
                            }
                            if (playernumber == 1) {
                                childNodes.ref.update({current: 2});
                            } else {
                                childNodes.ref.update({current: 1});
                            }
                            current = false;
                        }
                    }

                    if (!extraRoll) {
                    } else {
                        if (playernumber == 1) {
                            childNodes.ref.update({current: 1});
                        } else {
                            childNodes.ref.update({current: 2});
                        }
                    }

                });
            });
        } else {
            var placeholder = document.getElementById('placeholder');
            placeholder.innerHTML = number;
            var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
            sessRef.once('value', function (snapshot) {
                snapshot.forEach(function (childNodes) {
                    if (playernumber == 1) {
                        if (unjailattempts > 1) {
                            if (number != 6) {
                                unjailattempts--;
                            } else {
                                setTimeout(function () {
                                    alert("Congratulations, You have been released from jail without charge.");
                                }, 5);
                                jailed = false;
                                unjailattempts = 3;
                                childNodes.ref.update({p1injail: false});
                                ctx.fillStyle="white";
                                ctx.fillRect(570, 30, 30, 30);
                                ctx.fillStyle="black";
                            }
                        } else {
                            //DEDUCT CASH IF POSSIBLE
                            if (number == 6) {
                                setTimeout(function () {
                                    alert("Congratulations, You have been released from jail without charge.");
                                }, 5);
                                jailed = false;
                                unjailattempts = 3;
                                childNodes.ref.update({p1injail: false});
                                ctx.fillStyle="white";
                                ctx.fillRect(570, 30, 30, 30);
                                ctx.fillStyle="black";
                            } else {
                                setTimeout(function () {
                                    alert("You have been released from jail and charged £50.");
                                }, 5);
                                jailed = false;
                                unjailattempts = 3;
                                childNodes.ref.update({p1injail: false});
                                ctx.fillStyle = "white";
                                ctx.fillRect(570, 30, 30, 30);
                                ctx.fillStyle = "black";
                                cash -= 50;
                                ctx.fillStyle = "#33ccff";
                                ctx.fillRect(540, 200, 200, 30);
                                ctx.font = "20px Helvetica";
                                ctx.fillStyle = "black";
                                ctx.fillText("Current Cash: £" + cash, 560, 225);
                            }
                        }
                    } else {
                        if (unjailattempts > 1) {
                            if (number != 6) {
                                unjailattempts--;
                            } else {
                                setTimeout(function () {
                                    alert("Congratulations, You have been released from jail without charge.");
                                }, 5);
                                jailed = false;
                                unjailattempts = 3;
                                childNodes.ref.update({p2injail: false});
                                ctx.fillStyle="white";
                                ctx.fillRect(570, 60, 30, 30);
                                ctx.fillStyle="black";
                            }
                        } else {
                            if (number == 6) {
                                setTimeout(function () {
                                    alert("Congratulations, You have been released from jail without charge.");
                                }, 5);
                                jailed = false;
                                unjailattempts = 3;
                                childNodes.ref.update({p2injail: false});
                                ctx.fillStyle="white";
                                ctx.fillRect(570, 60, 30, 30);
                                ctx.fillStyle="black";
                            } else {
                                //DEDUCT CASH IF POSSIBLE
                                setTimeout(function () {
                                    alert("You have been released from jail and charged £50.");
                                }, 5);
                                jailed = false;
                                unjailattempts = 3;
                                childNodes.ref.update({p2injail: false});
                                ctx.fillStyle = "white";
                                ctx.fillRect(570, 60, 30, 30);
                                ctx.fillStyle = "black";
                                cash -= 50;
                                ctx.fillStyle = "#33ccff";
                                ctx.fillRect(540, 200, 200, 30);
                                ctx.font = "20px Helvetica";
                                ctx.fillStyle = "black";
                                ctx.fillText("Current Cash: £" + cash, 560, 225);
                            }
                        }
                    }
                    if (playernumber == 1) {
                        childNodes.ref.update({current: 2});
                    } else {
                        childNodes.ref.update({current: 1});
                    }
                    current = false;
                });
            });
        }
        rollCount = 0;
        checkforfour();
    }
}

function collapseGrid() {
    var gridHolder;
    var collapsed = [];
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function(childNodes) {
            gridHolder = childNodes.val().grid;
        });
    });
    for (var i = 9; i>=0; i--) {
        if (i%2==0) {
            collapsed = collapsed.concat(gridHolder[i]);
        } else {
            collapsed = collapsed.concat(gridHolder[i].reverse());
        }
    }
    return collapsed;
}

function reconstructGrid (collapsed) {
    var gridtemp = [];
    i = collapsed.length;
    count = 1;
    while (i > 0) {
        if (count%2 == 0) {
            var temp = collapsed.slice(i - 10, i);
            temp = temp.reverse();
            gridtemp.push(temp);
        } else {
            gridtemp.push(collapsed.slice(i - 10, i));
        }
        i -= 10;
        count++;
    }
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function(childNodes) {
            childNodes.ref.update({grid: gridtemp});
            if (playernumber == 1) {
                var holder = childNodes.val().p1owned;
                holder.push(childNodes.val().p1pos);
                childNodes.ref.update({p1owned: holder});
                var p1pos = boardpositions[childNodes.val().p1pos];
                ctx.drawImage(greensquare, p1pos[0], p1pos[1]);
                var p1playerpos = playerpositions[childNodes.val().p1pos];
                ctx.drawImage(p1, p1playerpos[0], p1playerpos[1]);
            } else {
                var holder = childNodes.val().p2owned;
                holder.push(childNodes.val().p2pos);
                childNodes.ref.update({p2owned: holder});
                var p2pos = boardpositions[childNodes.val().p2pos];
                ctx.drawImage(greensquare, p2pos[0], p2pos[1]);
                var p2playerpos = playerpositions[childNodes.val().p2pos];
                ctx.drawImage(p2, p2playerpos[0], p2playerpos[1]);
            }
        });
    });

}

function displayGame(grid) {
    img = new Image();
    chance = new Image();
    chest = new Image();
    ladder = new Image();
    ladderTop = new Image();
    ladderBot = new Image();
    slope = new Image();
    slopeTop = new Image();
    slopeBot = new Image();
    jail = new Image();
    jailBig = new Image();
    p1 = new Image();
    p2 = new Image();
    greensquare = new Image();
    redsquare = new Image();
    loaders = [];
    loaders.push(loadSprite(img, "images/gamesquare.png"));
    loaders.push(loadSprite(jailBig, "images/jailbig.png"));
    loaders.push(loadSprite(chance, "images/chance.png"));
    loaders.push(loadSprite(chest, "images/chest.png"));
    loaders.push(loadSprite(ladder, "images/ladder.png"));
    loaders.push(loadSprite(ladderTop, "images/laddertop.png"));
    loaders.push(loadSprite(ladderBot, "images/ladderbot.png"));
    loaders.push(loadSprite(slope, "images/slope.png"));
    loaders.push(loadSprite(slopeTop, "images/slopetop.png"));
    loaders.push(loadSprite(slopeBot, "images/slopebot.png"));
    loaders.push(loadSprite(jail, "images/jail.png"));
    loaders.push(loadSprite(p1, "images/p1.png"));
    loaders.push(loadSprite(p2, "images/p2.png"));
    loaders.push(loadSprite(greensquare, "images/greensquare.png"));
    loaders.push(loadSprite(redsquare, "images/redsquare.png"));
    $.when.apply(null, loaders).done(function() {
        if (count == 0) {
            ctx.drawImage(jailBig, 555, -5);
            for (y = 0; y < 10; y++) {
                for (x = 0; x < 10; x++) {
                    if (grid[y][x] == 'CHA') {
                        ctx.drawImage(chance, x * 50, y * 50);
                    } else if (grid[y][x] == 'CHE') {
                        ctx.drawImage(chest, x * 50, y * 50);
                    } else if (grid[y][x] == 'LT' || grid[y][x] == 'LT2') {
                        ctx.drawImage(ladderTop, x * 50, y * 50);
                    } else if (grid[y][x] == 'L' || grid[y][x] == 'L2') {
                        ctx.drawImage(ladder, x * 50, y * 50);
                    } else if (grid[y][x] == 'LB' || grid[y][x] == 'LB2') {
                        ctx.drawImage(ladderBot, x * 50, y * 50);
                    } else if (grid[y][x] == 'ST' || grid[y][x] == 'ST2') {
                        ctx.drawImage(slopeTop, x * 50, y * 50);
                    } else if (grid[y][x] == 'S' || grid[y][x] == 'S2') {
                        ctx.drawImage(slope, x * 50, y * 50);
                    } else if (grid[y][x] == 'SB' || grid[y][x] == 'SB2') {
                        ctx.drawImage(slopeBot, x * 50, y * 50);
                    } else if (grid[y][x] == 'J') {
                        ctx.drawImage(jail, x * 50, y * 50);
                    } else {
                        if (grid[y][x] == 'E') {
                            ctx.drawImage(img, x * 50, y * 50);
                            if (y == 0) {
                                ctx.drawImage(img, 510, 450);
                                if (playernumber == 1) {
                                    ctx.drawImage(p2, 525, 465);
                                    ctx.drawImage(p1, 520, 460);
                                } else {
                                    ctx.drawImage(p1, 520, 460);
                                    ctx.drawImage(p2, 525, 465);
                                }
                            }
                        } else if (grid[y][x] == "E1") {
                            if (playernumber == 1) {
                                ctx.drawImage(greensquare, x * 50, y * 50);
                            } else {
                                ctx.drawImage(redsquare, x * 50, y * 50);
                            }
                        } else {
                            if (playernumber == 2) {
                                ctx.drawImage(greensquare, x * 50, y * 50);
                            } else {
                                ctx.drawImage(redsquare, x * 50, y * 50);
                            }
                        }
                    }
                }
            }
            ctx.font = "20px Helvetica";
            ctx.fillText("Current Cash: £" + cash,560,225);
        }
        count++;
    });
}

function drawSymbols () {
    var grid;
    var sessRef = sessions.orderByChild("gameid").equalTo(sessionCount + 1);
    sessRef.once('value', function (snapshot) {
        snapshot.forEach(function(childNodes){
           grid = childNodes.val().grid;
        });
    });
    for (y = 0; y < 10; y++) {
        for (x = 0; x < 10; x++) {
            if (grid[y][x] == 'CHA') {
                ctx.drawImage(chance, x * 50, y * 50);
            } else if (grid[y][x] == 'CHE') {
                ctx.drawImage(chest, x * 50, y * 50);
            } else if (grid[y][x] == 'LT' || grid[y][x] == 'LT2') {
                ctx.drawImage(ladderTop, x * 50, y * 50);
            } else if (grid[y][x] == 'L' || grid[y][x] == 'L2') {
                ctx.drawImage(ladder, x * 50, y * 50);
            } else if (grid[y][x] == 'LB' || grid[y][x] == 'LB2') {
                ctx.drawImage(ladderBot, x * 50, y * 50);
            } else if (grid[y][x] == 'ST' || grid[y][x] == 'ST2') {
                ctx.drawImage(slopeTop, x * 50, y * 50);
            } else if (grid[y][x] == 'S' || grid[y][x] == 'S2') {
                ctx.drawImage(slope, x * 50, y * 50);
            } else if (grid[y][x] == 'SB' || grid[y][x] == 'SB2') {
                ctx.drawImage(slopeBot, x * 50, y * 50);
            } else if (grid[y][x] == 'J') {
                ctx.drawImage(jail, x * 50, y * 50);
            } else if (grid[y][x] == 'E1') {
                if (playernumber == 1) {
                    ctx.drawImage(greensquare, x * 50, y * 50);
                } else {
                    ctx.drawImage(redsquare, x * 50, y * 50);
                }
            } else if (grid[y][x] == 'E2') {
                if (playernumber == 2) {
                    ctx.drawImage(greensquare, x * 50, y * 50);
                } else {
                    ctx.drawImage(redsquare, x * 50, y * 50);
                }
            } else if (grid[y][x] == 'E') {
                ctx.drawImage(img, x * 50, y * 50);
            }
        }
    }
}




