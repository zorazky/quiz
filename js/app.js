$(document).ready(function(){

	

	var questions = [];
	questions[0] = "What was the first object launched into space that was made by humans?";
	questions[1] = "Sputnik 1, the first artificial satellite to orbit Earth, was launched on 4 October 1957. How long did it stay in orbit?";
	questions[2] = "What was the first spacecraft to reach the Moon's surface?";
	questions[3] = "From which planet did the first planetary lander successfully transmit data from the surface?";
	questions[4] = "Which was the first successful mission to land on the surface of Mars?";
	
	var correctAnswer = [];
	correctAnswer[0] = "tres";
	correctAnswer[1] = "dos";
	correctAnswer[2] = "cuatro";
	correctAnswer[3] = "tres";
	correctAnswer[4] = "dos";

	var correctAnswerText = [];
	correctAnswerText[0] = "A4 rocket";
	correctAnswerText[1] = "Three months";
	correctAnswerText[2] = "Luna 2";
	correctAnswerText[3] = "Venus";
	correctAnswerText[4] = "Mars 3";

	var answers = [
	["Sputnik 1","Explorer 1","A4 rocket","Jupiter 1"],
	["One day","Three months","One year","It's still in space"],
	["Apollo 11","Luna 9","Surveyor 1","Luna 2"],
	["Mars","Jupiter","Venus","Mercury"],
	["Viking 1","Mars 3","Curiosity rover","Pathfinder"]

	];

	

	var questionCounter = 1;
	var questionTotal = 5;
	var points = 0;

	function newGame(){

		questionCounter = 1;
		points = 0;

		$("#questionCounter").empty();
		$("#questionCounter").append("Question: 1 of 5");

		$("#points").empty();
		$("#points").append("Points: 0");

		$("#question").empty();
		$("#question").append(questions[0]);

		$("#f-label").empty();
		$("#f-label").append(answers[0][0]);

		$("#s-label").empty();
		$("#s-label").append(answers[0][1]);

		$("#t-label").empty();
		$("#t-label").append(answers[0][2]);

		$("#u-label").empty();
		$("#u-label").append(answers[0][3]);

		$("#correctA").empty();

		$("label").removeClass("correct");
		$("label").removeClass("incorrect");

		$('input').removeAttr('checked');
		$("input:radio").attr('disabled',false);
	};

	function nextQuestion(questionNum) {

		if ($('input:radio').is(':checked')) {
			if (questionCounter < questionTotal) {
		
			questionCounter = questionNum + 1;
			console.log(questionCounter);

			$("#question").empty();
			$("#question").append(questions[questionNum]);

			$("#f-label").empty();
			$("#f-label").append(answers[questionNum][0]);

			$("#s-label").empty();
			$("#s-label").append(answers[questionNum][1]);

			$("#t-label").empty();
			$("#t-label").append(answers[questionNum][2]);

			$("#u-label").empty();
			$("#u-label").append(answers[questionNum][3]);

			$("#questionCounter").empty();
			$("#correctA").empty();

			$("label").removeClass("correct");
			$("label").removeClass("incorrect");

			$('input').removeAttr('checked');

			$("input:radio").attr('disabled',false);

			$("#questionCounter").append("Question: " + questionCounter+ " of 5");
			} else {

			alert("Congrats you did " + points + " points start a new game!");
			newGame();

			
			}
		} else {
			alert("please select an option");
		}

		

		

	};

	$("#mybutton").click(function(){

    	event.preventDefault();
    	nextQuestion(questionCounter);
    	

    });


	newGame();

	 $("input[type='radio']").click(function(){
            var radioValue = $("input[name='selector']:checked").val();
            $("input:radio").attr('disabled',true);
            if(radioValue === correctAnswer[questionCounter - 1]){
            	
               $("label[for='" + this.id + "']").addClass("correct");

                
                $("#points").empty();
                points = points + 10;
                $("#points").append("Points: " + points);

            } else {
            	
            	$("label[for='" + this.id + "']").addClass("incorrect");
            	$("#correctA").append("Correct answer is: " + correctAnswerText[questionCounter - 1]);
            	
            }
        });
});

