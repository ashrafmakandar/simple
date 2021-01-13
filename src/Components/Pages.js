import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./styles.css";
export default function Pages() {

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    const getData = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const data = res.data;
                  const slice = data.slice(offset, offset + perPage)
                  const postData = slice.map(pd => <div class="card">
                  <div class="card-body">
                 
                  
      
             <table>
             <tr>
                 <td> <p><h6>  {pd.title}</h6></p></td>
             </tr>
            
             </table>
               
                
                  </div>
                </div>)
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        getData()
      }, [offset])

    return (
        <div className="App">
      {data}
       <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
    )
}
