import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import TravelData from "./Data"
import Joke from "./components/Joke"

function App() {
  const TravelList = TravelData.map((item) => {
    return (
        <Entry
          key={item.id}
          {...item}
        />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {TravelList}
      </main>
    </>
  )
}

export default App
