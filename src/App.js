// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//practice project  
// import "./App.css";

// let pageContent = {
//     title :"02.15.20201.notes",
//     paragraph1:
//     "this is paragrah one content",
//     paragraph2:
//     "this is parageaph two content"
// };

// function App(){
//     return (
//     <div className = "App">
//         <h1>{pageContent.title}</h1>
//         <p>{pageContent.paragraph1}</p>
//         <p>{pageContent.paragraph2}</p>
//     </div>
//     );
// }

 export default App;
/// 02.17.2021 practice
let studentData = [
    {
      id: 1,
      name: "Eddy",
      color: "chartreuse",
      school: "Nebula Academy",
    },
    {
      id: 2,
      name: "Chelsea",
      color: "purple",
      school: "Nebula Academy",
    },
    {
      id: 3,
      name: "Tauseef",
      color: "orange",
      school: "Nebula Academy",
    },
    {
      id: 4,
      name: "Maurice",
      color: "red",
      school: "Nebula Academy",
    },
    {
      id: 5,
      name: "D'aja",
      color: "blue",
      school: "Nebula Academy",
    },
    {
      id: 6,
      name: "Jasmine",
      color: "pink",
      school: "Nebula Academy",
    },
    {
      id: 7,
      name: "Anitria",
      color: "blue",
      school: "Nebula Academy",
    },
  ];
  
  function App(){
    return (
      <div>
        <studentList />
        <studentList />
        <studentList />
        <studentList />
      </div>
    );
  }
    function App() {
        return studentData.map((student) => (
            <div className="studentCard">
                <h1>Hi {student.name}</h1>
                <p>
                    {student.name}'s favorite color is {student.color}
                </p>
            </div>
        ));
    }