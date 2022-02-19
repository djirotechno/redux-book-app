import React ,{useState}from 'react'
import { connect } from 'react-redux'
import {addBook,deleteBook,deleteAll} from '../redux/actions/BookAction'
import FlipMove from 'react-flip-move'

const Addbooks = ({libraryData,addBook,deleteAllBook}) => {
   
    const initialState ={

        title:'',
        author:''
    }

    const [newData, setNewData] = useState(initialState)

    const HandleSubmit = e =>{
        e.preventDefault()
    //console.log(newData)
        addBook(newData)

    //vider input
    setNewData(initialState)
    }

    const displaydata = libraryData.length > 0 ? 

        <FlipMove>{
             libraryData.map(data=>{
            return( 
            <li key={data.id}  className="list-group-item list-group-light d-flex justify-content-between">
                <span>Titre: {data.title}</span>
                <span>Auteur: {data.author}</span>
                <span  
                className="btn btn-danger"
                onClick={() => deleteBook(data.id)}
                >X</span>
                
            </li>
            )
            }) }
        </FlipMove>
            :<p>Pas de Livre</p>

    const btnAllDataDelete = libraryData.length > 0 &&
    <div className="d-flex justify-content-center">
        <button 
        className="btn btn-danger mt-4"
        onClick={()=> deleteAllBook()}
        >Effacer tous les livres</button>
    </div>


  return (
   <main role="main">
       <div className="jumbotron jumbotron-fluid">
           <div className=" bg-secondary text-center">
                <h1 className="display-4 "> Books</h1>
                <p>Ajouter un livre</p>
                <form className="form-inline container justify-content-center" onSubmit={HandleSubmit}>
                    <div className="form-group">
                            <input 
                            value={newData.title}
                            type="text" 
                            className="form-control" 
                            placeholder="Titre" 
                            required 
                            onChange={e => setNewData({...newData,title:e.target.value})}
                            />
                    </div>
                    <div className="form-group">
                            <input 
                             value={newData.author}
                            type="text" 
                            className="form-control ml-3" 
                            placeholder="Auteur" 
                            required 
                            onChange={e => setNewData({...newData,author:e.target.value})}
                            />
                    </div>
   
                    <div className="form-group">
                        <button className="btn btn-outline-secondary bg-primary ml-3 mt-4 mb-4">Ajouter un livre</button>
                    </div>
       

                </form>
           </div>
        
           <div className="container" style={{minHeight:'200px'}}>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <ul className="list-group">
                           {displaydata}
                        </ul>
                    </div>
                   {btnAllDataDelete}
                </div>
           </div>
       </div>
   </main>
  )
}

const  mapStateToProps = (state) => {
    return {
        libraryData:state.library
    }
}


const  mapDispatchToProps = (dispatch) => {
    return {
        addBook: param => dispatch(addBook(param)),
        deleteBook:id => dispatch(deleteBook(id)),
        deleteAllBook:()=>dispatch(deleteAll())
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Addbooks)