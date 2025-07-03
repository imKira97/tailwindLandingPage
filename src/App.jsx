import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <h1 className="text-4xl text-center text-gray-900">Hello Tailwind</h1>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App
