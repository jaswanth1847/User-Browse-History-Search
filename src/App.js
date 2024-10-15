import BrowseHistory from "./components/BrowseHistory"
import {useState} from "react"
import "./App.css"
const initialBrowserHistoryList = [
  {
    id:1,
    time:"07:55 PM",
    imgIcon:<i className="fa-brands fa-instagram"></i>,
    name:"instagram",
    imgUrl:"instagram.com"
  },
  {
    id:2,
    time:"05:55 AM",
    imgIcon:<i className="fa-brands fa-twitter"></i>,
    name:"twitter",
    imgUrl:"twitter.com"
  },
  {
    id:3,
    time:"03:55 PM",
    imgIcon:<i className="fa-brands fa-facebook"></i>,
    name:"facebook",
    imgUrl:"facebook.com"
  },
  {
    id:4,
    time:"12:55 PM",
    imgIcon:<i className="fa-brands fa-linkedin"></i>,
    name:"linkedin",
    imgUrl:"linkedin"
  },
  {
    id:5,
    time:"07:55 AM",
    imgIcon:<i className="fa-brands fa-github"></i>,
    name:"github",
    imgUrl:"github.com"
  },{
    id:6,
    time:"07:05 AM",
    imgIcon:<i className="fa-brands fa-react"></i>,
    name:"react",
    imgUrl:"react.com"
  },
  {
    id:7,
    time:"12:55 PM",
    imgIcon:<i className="fa-brands fa-stack-overflow"></i>,
    name:"stackoverflow",
    imgUrl:"stackoverflow.com"
  }
]

const App=()=>{
  const [searchInput, setSearchInput] = useState("")
  const [browserHistoryList, setBrowserHistoryList] = useState(initialBrowserHistoryList); 

  // accessing search input value
  const searchInputValue = (event) =>{
    setSearchInput(event.target.value)
  }

  // filtering based on search input
  const filterRes = browserHistoryList.filter((eachItem)=>{
    return(
      eachItem.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    )
  })

  // deleting selected search input item in ul
  const deleteItem = (id) =>{
    const updRes = browserHistoryList.filter((eachItem)=>{
      return(
        eachItem.id !== id
      )
    })
    setBrowserHistoryList(updRes)
  }

  return(
    <div className="history-container">
      <div className="history-header">
        <p>HIST<i class="fa-solid fa-clock-rotate-left"></i>RY</p>
        <div className="history-search">
          <i class="fa-brands fa-searchengin"></i>
          <input type="search" placeholder="Search History" onChange={searchInputValue} />
        </div>
      </div>

      <ul className="history-list">
        {
          filterRes.map((eachItem)=>{
            return(
              <BrowseHistory 
              eachItem={eachItem}
              key={eachItem.id}
              deleteItem = {deleteItem}
              />
            )
          })
        }
      </ul>
    </div>
  )
}
export default App

