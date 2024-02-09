import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then(()=>console.log("deleted"))
    .catch((error)=>console.log(error("Error deleting question: ", error)))
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
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
