import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteTodo, onUpdateQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>{
        return(
          <QuestionItem key={question.id} question={question} onDeleteTodo={onDeleteTodo} onUpdateQuestion={onUpdateQuestion}/>
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
