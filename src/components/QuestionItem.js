import React, {useEffect, useState} from "react";

function QuestionItem({ question, onDeleteTodo, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  // const [currentCorrectIndex, setCurrentCorrectIndex] = useState(correctIndex);


  function handleUpdate(newAnswer){
    console.log(newAnswer)
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"correctIndex": newAnswer})
    })
    .then((r)=>r.json())
    .then((updatedAnswer) => {
      console.log(updatedAnswer)
      onUpdateQuestion(updatedAnswer.id, updatedAnswer.correctIndex)
    })
  }

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then(()=>console.log("deleted"))
    .catch((error)=>console.log(error("Error deleting question: ", error)))
    onDeleteTodo(id)
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e)=> handleUpdate(e.target.value)}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;