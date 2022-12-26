import React ,{useState,useEffect}from 'react'
import ReactDom from 'react-dom'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
    const [loading, setLoading] = useState(true)
    const [tours,setTours]=useState([])
    const removeTour= (id)=>{
        const newtour=tours.filter((tour)=>tour.id!=id)
        setTours(newtour)   
    }
    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTours()
    }, [])
    useEffect(() => {
        fetchTours()
    }, [])
    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }
    if (tours.length === 0) {
        return (
            <main>
                <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={() => fetchTours()}>
                        refresh
                    </button>
                </div>
            </main>
        )
    }
    return (
        <div className='container'>
           <Tours tours={tours} removeTour={removeTour}/>
        </div>
    )
}
export default App