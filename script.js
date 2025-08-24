
let s = 0
let m = 0
let interval = null
let randomQ=null




const data ={
    "easy":[
        {"question":["Prompt the user to enter their name, and type: Hello, [name]!","Write HTML and JavaScript code to create a button that, when clicked, will change the page color to black (#000)." ]},
        {"answer":[` <input type="text" id="name">
        <button onclick="printName()">Print Name</button>
        <script>
          function printName() {
            console.log(document.getElementById('name').value);
          }
        </script>` ,`<button id="button" onclick="discolor()">exampel</button>
<script >
function discolor(){
    document.body.style.backgroundColor = "#000"
}
</script>`]}
    ],
    "normal":[
        {"question":['Create an HTML page with a button that toggles between Day Mode and Night Mode. When the user clicks the button, if the page is currently in Day Mode (with a white background and dark text), it should switch to Night Mode (with a dark background and white text), and the button text should change to "Switch to Day Mode". If the page is in Night Mode, it should switch back to Day Mode, and the button text should change to "Switch to Night Mode". Use JavaScript to handle the mode switching, and CSS classes to manage the visual styles.']},
        {"answer":[` <button id="button" onclick="dayOrNight()">day</button>  
  <p id="text">text</p>
  <script>
   function dayOrNight(){
    if (document.getElementById("button").innerText=== "day"){

        document.body.style.backgroundColor = "black"
        document.getElementById("text").style.color = "white"
        document.getElementById("button").innerText="night"

    }else{

        document.body.style.backgroundColor = "white"
        document.getElementById("text").style.color = "black"
        document.getElementById("button").innerText="day"
   }}
  </script>`]}
    ],
    "hard":[
        {"question":[`Create an HTML page with a button labeled "Activate Smart Mode". When the button is clicked, the program should get the current time from the user's device and determine whether it's day or night. If the time is between 6:00 AM and 6:00 PM, apply Day Mode by setting the background color to white, the text color to black, and display a message saying: "Good Morning – Day Mode Activated". If the time is between 6:00 PM and 6:00 AM, apply Night Mode by setting the background color to black, the text color to white, and display a message saying: "Good Evening – Night Mode Activated". The time check should happen each time the button is clicked.`]},
        {"answer":[`<button id="button" onclick="NightOrDay()">N/D</button>
<p id="text"></p>

<script>
    function NightOrDay(){

        const hours = new Date().getHours()  //You can change the time manually. ex const hours = 19
        

        if (hours >= 6 && hours < 18) {


           document.body.style.backgroundColor = "white"
           document.getElementById("text").style.color = "black"

           document.getElementById("text").innerText="Good Morning – Day Mode Activated"

        }else{
           
           document.body.style.backgroundColor = "black"
           document.getElementById("text").style.color = "white"
           
           document.getElementById("text").innerText="Good Evening – Night Mode Activated"

        }
    }
</script>`]}
    ]
}


  function start(){

 if (interval) clearInterval(interval);

 document.getElementById("PauseResume").style.display= "block"
 document.getElementById("answer").style.display= "none"

  randomQ=Math.round(Math.random());

  m = 0
  s = 0

document.getElementById("time").innerText = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`//Without it, time appears after a second.

  interval = timer()


    const difficulty=document.getElementById("difficultyOption").value
    if(difficulty==="easy"){
      
      document.getElementById("question").innerText = data.easy[0].question[randomQ];

    }
    if(difficulty==="normal"){
       document.getElementById("question").innerText = data.normal[0].question[0];
    }
    if(difficulty==="hard"){
      document.getElementById("question").innerText = data.hard[0].question[0]
    }
   
  }
  function giveUp(){

   clearInterval(interval)

   document.getElementById("PauseResume").style.display= "none"
   document.getElementById("answer").style.display= "block"

     const difficulty=document.getElementById("difficultyOption").value


    if(difficulty==="easy"){
      document.getElementById("answer").innerText = data.easy[1].answer[randomQ];

    }
    if(difficulty==="normal"){
       document.getElementById("answer").innerText = data.normal[1].answer[0];
    }
    if(difficulty==="hard"){
      document.getElementById("answer").innerText = data.hard[1].answer[0]; 
    }
  }

  function timer(){
   return  setInterval(()=>{

      s +=1

      if(s===60){

        m +=1 
        s=0

      }

      if (m===30){

        giveUp()
        
      }
      
      document.getElementById("time").innerText = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`

    },1000)
    
  }
  function PauseResume(){
    if(document.getElementById("PauseResume").innerText==="■"){

      document.getElementById("PauseResume").innerText="▶"
      if (interval) clearInterval(interval);

    }else{

      document.getElementById("PauseResume").innerText="■"
      if(interval) clearInterval(interval)
      interval=timer()

    }
    
  }
   function Check(){
    let QNum = 1
    if (document.getElementById(`q${QNum}`).innerText==="/"){
      document.getElementById(`q${QNum}`).style.backgroundColor="green"
      QNum +=1 
    }else{
      document.getElementById(`q${QNum}`).style.backgroundColor="red"
      QNum +=1
    }

     if (document.getElementById(`q${QNum}`).innerText==="div"){
      document.getElementById(`q${QNum}`).style.backgroundColor="green"
      QNum +=1 
    }else{document.getElementById(`q${QNum}`).style.backgroundColor="red"
  QNum +=1
  }
     if (document.getElementById(`q${QNum}`).innerText==="p"){
      document.getElementById(`q${QNum}`).style.backgroundColor="green"
      QNum +=1 
    }else{document.getElementById(`q${QNum}`).style.backgroundColor="red"
  QNum +=1}
    if (document.getElementById(`q${QNum}`).innerText==="p"){
      document.getElementById(`q${QNum}`).style.backgroundColor="green"
      QNum +=1 
    }else{document.getElementById(`q${QNum}`).style.backgroundColor="red"
  QNum +=1}
   let Q5EleTxt = document.getElementById(`q${QNum}`).innerText
  if (Q5EleTxt.endsWith(".com")|| Q5EleTxt.endsWith(".org")||Q5EleTxt.endsWith(".net")){
    document.getElementById(`q${QNum}`).style.backgroundColor="green"
    QNum+=1
  }else{
document.getElementById(`q${QNum}`).style.backgroundColor="red"
QNum +=1
  }
  let Q6EleTxt = document.getElementById(`q${QNum}`).innerText
  if(Q6EleTxt.endsWith(".png")||Q6EleTxt.endsWith(".jpg")||Q6EleTxt.endsWith(".tif")||Q6EleTxt.endsWith(".gif")){
        document.getElementById(`q${QNum}`).style.backgroundColor="green"
        QNum+=1

  }else{
    document.getElementById(`q${QNum}`).style.backgroundColor="red"
    QNum+=1
  }
  if(document.getElementById(`q${QNum}`).innerText==="text"){
    document.getElementById(`q${QNum}`).style.backgroundColor="green"
    QNum+=1
  }else{
document.getElementById(`q${QNum}`).style.backgroundColor="red"
QNum+=1
  }
  if(String(document.getElementById(`q${QNum}`).innerText)){
document.getElementById(`q${QNum}`).style.backgroundColor="green"
    QNum+=1
  }else{
    document.getElementById(`q${QNum}`).style.backgroundColor="red"
    QNum+=1
  }
   if(String(document.getElementById(`q${QNum}`).innerText)){
document.getElementById(`q${QNum}`).style.backgroundColor="green"
    QNum+=1
  }else{
    document.getElementById(`q${QNum}`).style.backgroundColor="red"
    QNum+=1
  }

     if(document.getElementById(`q${QNum}`).innerText==="script"){
document.getElementById(`q${QNum}`).style.backgroundColor="green"
    QNum+=1
  }else{
    document.getElementById(`q${QNum}`).style.backgroundColor="red"
    QNum+=1
  }
   if(document.getElementById(`q${QNum}`).innerText==="script"){
document.getElementById(`q${QNum}`).style.backgroundColor="green"
    QNum+=1
  }else{
    document.getElementById(`q${QNum}`).style.backgroundColor="red"
    QNum+=1
  }
  }