import Axios from "axios";
import React,{Component} from 'react'
import {readData} from './store/Action'
import {connect} from 'react-redux'
class Home extends Component{

    constructor(props) {
        super(props);
        this.state={
            showFavorite:false,
            name:""
        }
    }
    ChangeApi = () => {
        const Url = "https://jsonplaceholder.typicode.com/posts?userId=1"
        Axios.get(Url).then(
            res => {
                this.props.readData(res.data)
            }
        ).then(err => {
            throw err
        })
    }
    Change = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    render() {
        console.log(this.props)
        return(
            <div style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                marginTop:200
            }}>

                <div className='col-3 mr-auto  '>
                    <form >
                        <input  type="text" onChange={(e)=>this.Change(e)}/>
                    </form>
                    <div >
                        <button
                            style={{
                                backgroundColor:"green",
                                color:"white",
                                marginTop:20,
                                marginLeft:70,
                                padding:10
                            }}
                            onClick={()=>this.ChangeApi()}
                        >click

                        </button>
                    </div>

                    {
                        this.props.name && this.props.name.map((item)=>{
                            return(
                                <div className='container' key={item.id}>
                                    <p className='p-style'>{item.id}</p>
                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <p>
                                            {item.body}
                                        </p>
                                    </div>
                                    {/*<div className='button'>*/}
                                    {/*    <input onChange={(e)=>this.change(e)} type="`text`"/>*/}
                                    {/*    <button onChange={()=>this.ChangeApi} className='buttoncolor'>click</button>*/}
                                    {/*</div>*/}
                                    <style jsx>
                                        {`
        .container{
          display:flex;
          align-items:center;
          justify-content:center;
    flex-direction:column;
      margin-top:250px;
   
        }
        .p-style{
        margin-left: -80px;
        }
        .containerone{
        font-size:1.5rem;
        }
        .button{
     
        }
        .buttoncolor{
         padding:10px 20px;
        background-color: green;
          margin-left: 20px;
        font-size:1rem;
        color:#fff
        }
        `}


                                    </style>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}





const MapStateToProps=state=>({
    name:state.homePage.data
})
const MapDispatchToProps=dispatch=>{
    return{
        readData:data=>dispatch(readData((data)))
    }
}
export default connect (MapStateToProps,MapDispatchToProps)(Home)