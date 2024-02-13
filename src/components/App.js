import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  function addQuestion(newQuestion){
    const updatedQuestions = [...questions, newQuestion]
    setQuestions(updatedQuestions);
  }

  function deleteTodo(id) {
    const updatedQuestions = questions.filter(question => question.id !== id);
    setQuestions(updatedQuestions);
  }

  function updateQuestion(id, newAnswer){
    const updatedQuestions = questions.map(questions => {
      if(questions.id === id){
        return{...questions, newAnswer}
      }else{
        return questions
      }
    })
    setQuestions(updatedQuestions);
  }

  console.log(questions)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addQuestion}/> : <QuestionList questions={questions} onDeleteTodo = {deleteTodo} onUpdateQuestion={updateQuestion}/>}
    </main>
  );
}

export default App;
