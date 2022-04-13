function setup(){
  createCanvas(1350,655)
  background("cyan")
  push()
  textSize(80) 
  fill("black")
  textStyle(BOLDITALIC)
  text("Test your General Knowledge",120,130)
  pop()

  textSize(30)
  fill("black")
  textStyle(BOLD)
  text("Enter your name :",400,350)
  login = createInput('')
  //login.style('font-style','BOLD')
  login.position(700,330,200,200)

  play = createButton("Submit")
  play.position(600,500,20,20)
  play.style('font-size','25px')
  play.style('background-color','yellow')

  play.mousePressed(()=>{
  name1 = login.value()
  if(name1 === ""){
    fill("red")
    text("Name can't be blank",500,450)
  }
  else{
    play.mouseClicked(greeting)
  }
  })
}
function greeting(){
  background("blue")
  play.hide()
  login.hide()
  user = login.value()
  Greeting = createElement("h1")
  Greeting.html("Hello "+user+"!")
  Greeting.position(600,250)
  
  play2 = createButton("Let's test your general knowledge")
  play2.position(500,450,10,10)
  play2.style('font-size','25px')
  play2.style('background-color','crimson')
  play2.mouseClicked(question1)



}
function question1(){
  background("pink")
  play2.hide()
  Greeting.hide()

  ques1 = createElement("h1")
  ques1.html("Q1. Which animal is known as the 'Ship of the Desert?")
  ques1.position(400,100)

  ques1opt1 = createButton("A: Elephant")
  ques1opt1.style('font-size','25px')
  ques1opt1.style('background-color','white')
  ques1opt1.style('color','black')
  ques1opt1.position(200,200)
  ques1opt1.mouseClicked(q1o1)

  ques1opt2 = createButton("B: Goat")
  ques1opt2.style('font-size','25px')
  ques1opt2.style('background-color','white')
  ques1opt2.style('color','black')
  ques1opt2.position(200,300)
  ques1opt2.mouseClicked(q1o2)

  ques1opt3 = createButton("C: Horse")
  ques1opt3.style('font-size','25px')
  ques1opt3.style('background-color','white')
  ques1opt3.style('color','black')
  ques1opt3.position(200,400)
  ques1opt3.mouseClicked(q1o3)

  ques1opt4 = createButton("D: Camel")
  ques1opt4.style('font-size','25px')
  ques1opt4.style('background-color','white')
  ques1opt4.style('color','black')
  ques1opt4.position(200,500)
  ques1opt4.mouseClicked(q1o4)

}

function q1o1(){
  ques1opt1.style('background-color','red')
  ques1opt4.style('background-color','green')
  ques1opt1.attribute('disabled','')
  ques1opt2.attribute('disabled','')
  ques1opt3.attribute('disabled','')
  ques1opt4.attribute('disabled','')

  wrongAnswer1 = createElement("h1")
  wrongAnswer1.html("Wrong Answer")
  wrongAnswer1.style('color','red')
  wrongAnswer1.position(200,600)

}
function q1o2(){
  ques1opt2.style('background-color','red')
  ques1opt4.style('background-color','green')
  ques1opt1.attribute('disabled','')
  ques1opt2.attribute('disabled','')
  ques1opt3.attribute('disabled','')
  ques1opt4.attribute('disabled','')

  wrongAnswer2 = createElement("h1")
  wrongAnswer2.html("Wrong Answer")
  wrongAnswer2.style('color','red')
  wrongAnswer2.position(200,600)

}
function q1o3(){
  ques1opt3.style('background-color','red')
  ques1opt4.style('background-color','green')
  ques1opt1.attribute('disabled','')
  ques1opt2.attribute('disabled','')
  ques1opt3.attribute('disabled','')
  ques1opt4.attribute('disabled','')

  wrongAnswer3 = createElement("h1")
  wrongAnswer3.html("Wrong Answer")
  wrongAnswer3.style('color','red')
  wrongAnswer3.position(200,600)

}
function q1o4(){
 // ques1opt3.style('background-color','red')
  ques1opt4.style('background-color','green')
  ques1opt1.attribute('disabled','')
  ques1opt2.attribute('disabled','')
  ques1opt3.attribute('disabled','')
  ques1opt4.attribute('disabled','')

  RightAnswer = createElement("h1")
  RightAnswer.html("Right Answer")
  RightAnswer.style('color','green')
  RightAnswer.position(200,600)

}