function submit() {


        answer_word = document.getElementById("answer_input").value;
        answer= answer_word.toLowerCase();
        
        
       
          question_word = "<h4 id='word_display'> Q."+document.getElementById("answer_input").value;"</h4>";
          input_box = "<br>Answer : <input type='text' id='input_check_box'>";
          check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
          row = question_word + input_box + check_button ;
          document.getElementById("output").innerHTML = row;
          document.getElementById("input_box").value = "";
       
       
}