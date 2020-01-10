var choiceNum = Math.floor((Math.random() * 3) + 1);
console.log(choiceNum);
var choice;
var colour;
var myPick;
var score = 0
var num



function winLose() {
    if ((choiceNum == 3 && myPick == 2) || (choiceNum == 2 && myPick == 1) || (choiceNum == 1 && myPick == 3)) {
        $(".result").css("visibility", "visible");
        $(".result h1").text("You Lose");
    } else if (choiceNum == myPick) {
        $(".result").css("visibility", "visible");
        $(".result h1").text("Draw");
    } else {
        $(".result").css("visibility", "visible");
        $(".result h1").text("You win");
        score = score + 1;
        $(".game-score h1").text(score);

    };
}



function paper() {
    $(".your-icon").css("border", "10px solid hsl(39, 89%, 49%)");
    $(".your-icon img").attr("src", " images/icon-paper.svg");
}

function scissors() {
    $(".your-icon").css("border", " 10px solid hsl(349, 71%, 52%)");
    $(".your-icon img").attr("src", "images/icon-scissors.svg");
}

function step2() {
    $(".selectors").hide();
    $(".step-2").css("visibility", "visible");
}

function step3() {
    if (choiceNum == 1) {
        choice = "images/icon-rock.svg";
        colour = "10px solid hsl(230, 89%, 62%";
    } else
    if (choiceNum == 2) {
        choice = "images/icon-paper.svg";
        colour = "10px solid hsl(39, 89%, 49%)"
    } else {
        choice = "images/icon-scissors.svg";
        colour = " 10px solid hsl(349, 71%, 52%)"
    };
    $(".blank").hide();
    $(".computer-picked-image").css("visibility", "visible");
    $(".computer-picked-image").css("border", colour);
    $(".computer-picked-image img").attr("src", choice);
}





$(document).ready(function() {
    $(".rules").click(function() {
        $(".modal-container").css("visibility", "visible");
    });
    $(".modal-close").click(function() {
        $(".modal-container").css("visibility", "hidden");
    });
    $(".play-again").click(function() {
        $(".selectors").show();
        $(".blank").show();
        $(".step-2").css("visibility", "hidden");
        $(".result").css("visibility", "hidden");
        $(".computer-picked-image").css("visibility", "hidden");
        choiceNum = Math.floor((Math.random() * 3) + 1);
    });

    $(".rock").click(function() {
        step2();
        setTimeout(function() {
            step3();
            myPick = 1;
            winLose();
        }, 700);


    });
    $(".paper").click(function() {
        paper();
        step2();
        setTimeout(function() {
            step3();
            myPick = 2;
            winLose();
        }, 700);

    });
    $(".scissors").click(function() {
        scissors();
        step2();
        setTimeout(function() {
            step3();
            myPick = 3;
            winLose();
        }, 700);

    });


});