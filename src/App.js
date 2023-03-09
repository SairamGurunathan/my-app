import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Box 
        Title1 = "FREE" Price="$0" Validate="/month"
        list1 = "✔ Single User"
        list2 = "✔ 5GB Storage"
        list3 = "✔ Unlimited Public Projects"
        list4 = "✔ Community Access"
        list5 = "✖ Unlimited Private Projects"
        list6 = "✖ Dedicated Phone Support"
        list7 = "✖ Free Subdomain"
        list8 = "✖ Monthly Status Reports"/>

        <Box 
        Title1 = "PLUS" Price="$9" Validate="/month"
        list1 = "✔ 5 Users"
        list2 = "✔ 50GB Storage"
        list3 = "✔ Unlimited Public Projects"
        list4 = "✔ Community Access"
        list5 = "✔ Unlimited Private Projects"
        list6 = "✔ Dedicated Phone Support"
        list7 = "✔ Free Subdomain"
        list8 = "✖ Monthly Status Reports"/>

        <Box 
        Title1 = "PRO" Price="$49" Validate="/month"
        list1 = "✔ Unlimited Users"
        list2 = "✔ 150GB Storage"
        list3 = "✔ Unlimited Public Projects"
        list4 = "✔ Community Access"
        list5 = "✔ Unlimited Private Projects"
        list6 = "✔ Dedicated Phone Support"
        list7 = "✔ Unlimited Free Subdomain"
        list8 = "✔ Monthly Status Reports"/>
      </div>
    </div>
  );
}

function Box(props){
  return(
    <div className="column">
      <p className="H1">{props.Title1}</p>
      <p className="H2">{props.Price}<span>{props.Validate}</span></p>
      <hr/>
      <ul>
      <li>{props.list1}</li>
      <li>{props.list2}</li>
      <li>{props.list3}</li>
      <li>{props.list4}</li>
      <li>{props.list5}</li>
      <li>{props.list6}</li>
      <li>{props.list7}</li>
      <li>{props.list8}</li>
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

var wrong = document.getElementsByTagName('li')
for(let i of wrong){
  if(i.innerText.includes("✖")){
    i.style.opacity=".5"
  }
}

var bold = document.getElementsByTagName('li')
for(let i of bold){
  if(i.innerText.includes('Users')){
    i.style.fontWeight = "bold"
  }
}