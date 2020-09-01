import React, {Component} from 'react';
//import Answer from './Answer';
//import OptionForm from './OptionForm'


class Choices extends Component {
	state = {
	  color: "red",
	  isTrue: true,
	  shown: true,
	  index: 0,
	  count: 3,
	  questionArray: [],
	  place: ["D", "E", "F", "G", "H"],
	  question: "",
	  answers: [
		{ value: "", id: "id1", placeholder: "A:" },
		{ value: "", id: "id2", placeholder: "B:" },
		{ value: "", id: "id3", placeholder: "C:" },
	  ],
	  dummyAnswers: [
		{ value: "Yes", id: "id1", placeholder: "A:" },
		{ value: "No", id: "id2", placeholder: "B:" },
	  ],
	};
  
	AddOPtion = (e) => {
	  e.preventDefault();
  
	  let answersCopy = [...this.state.answers];
	  this.setState((prevState) => ({
		count: prevState.count + 1,
		index: prevState.index + 1,
  
		answers: answersCopy.concat({
		  value: "",
		  id: "id".concat(prevState.count + 1),
		  placeholder: this.state.place[this.state.index] + ":",
		}),
	  }));
	};
  
	HandleChange = (e) => {
	  const currentIn = this.state.answers.find((man) => man.id === e.target.id);
	  currentIn.value = e.target.value;
	  let newVal = {
		value: currentIn.value,
		id: currentIn.id,
	  };
	  this.setState((prev) => ({
		...prev,
		answers: prev.answers.map((answer) =>
		  answer.id === currentIn.id ? newVal : answer
		),
	  }));
	};
	HandleQuest = (e) => {
	  this.setState({
		[e.target.id]: e.target.value,
	  });
	};
  
	handleAnswer = () => {
		
		
	  
	  this.setState({
		
		  
		shown: !this.state.shown,
		questionArray: this.state.questionArray.concat(
		  this.state.question.toLowerCase()
		),
		
	  });
	};
  
	handleQuestion = () => {
	  this.setState({
		shown: !this.state.shown,
		question: "",
		answers: [
			{ value: "yes", id: "id1", placeholder: "A:" },
			{ value: "no", id: "id2", placeholder: "B:" },
			{ value: "", id: "id3", placeholder: "C:" },
		  ],
		
	  });
	};
  
	AnswerToggle = () => {
	  this.setState({
		isTrue: !this.state.isTrue,
	  });
	};
  
	render() {
		let num = Math.floor(
			Math.random() * this.state.answers.filter((el) => el.value !== "").length
		  );
  
	
	
	  
	  
  
	  let answer = this.state.answers.map((final, index) => {
		if (final.value !== "") {
		  if (num === index) {
			return (
			  <li key={index} style={{ color: "blue" }}>
				{final.value}
			  </li>
			);
		  } else {
			return <li key={index}>{final.value}</li>;
		  }
		}
	  });
  
	 
  
	  let addOptions = (
		<button onClick={this.AddOPtion} className="add-btn1">
		  +Option
		</button>
	  );
	  if (this.state.count === 7) {
		addOptions = (
		  <button onClick={this.AddOPtion} className="add-btn1" disabled>
			+Option
		  </button>
		);
	  }
  
	  let question = this.state.question;
	  if (this.state.question === "") {
		question = "Some random question";
	  }
	  {
		let check = this.state.answers.every((answer) => answer.value == "");
		if(check){this.state.answers=this.state.dummyAnswers}
	  }
	 
  
	  let popularity = this.state.questionArray.filter(
		(el) => el === this.state.question.toLowerCase()
	  ).length;
  
	  return this.state.shown ? (
		<div>
		  <form>
			<div className="option-form">
			  <label htmlFor="question" className="labels">
				QUESTION
			  </label>
			  <input
				onChange={this.HandleQuest}
				placeholder="QUESTION:"
				id="question"
				name="question"
				className="input"
			  />
			  <label className="labels">OPTIONS</label>
  
			  {this.state.answers.map((ans, index) => (
				<input
				  key={index}
				  onChange={this.HandleChange}
				  id={ans.id}
				  placeholder={ans.placeholder}
				  className="input"
				/>
			  ))}
  
			  <div className="as-btns">
				{addOptions}
				<button onClick={this.handleAnswer} className="answer-btn">
				  Answer
				</button>
			  </div>
			</div>
		  </form>
		</div>
	  ) : (
		  <div>
		<div className="ans-box">
		  <div>
			<h2>{question}</h2>
			<ol>{answer}</ol>
		  </div>
		  <div className="btn2">
			<button className="again" onClick={this.AnswerToggle}>
			  Ask Again
			</button>
			<button onClick={this.handleQuestion}>
			  +Ask another reandom questions
			</button>
			
		  </div>
		</div>
		<p className='pop' > Your question's popularity is {popularity}</p>
		</div>
	  );
	  
	}
  }
  
  export default Choices;