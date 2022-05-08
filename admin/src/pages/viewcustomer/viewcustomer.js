import axios from 'axios';
import React,{Component} from 'react';
export default class viewcustomer extends Component{
              
    constructor(props){
        super(props);
    
        this.state={
            posts:[]
        };
    }

    componentDidMount(){
      this.retrievePosts();
    }

    retrievePosts(){
      axios.get("http://localhost:8070/customer/:id").then(res =>{
        if(res.data.success){
          this.setState({
            posts:res.data.existingPosts
        }); 
        console.log(this.state.posts)
   } 

  });

    }
    onDelete =(id) =>{
      axios.delete(`http://localhost:8070/customer/delete/:id`).then((_res) =>{
          alert("Customer Details are Deleted");
          this.retrievePosts();
  })
  }
    render(){
      return(
        <div className="container">
     <h1> <center><b><p>CUSTOMER MANAGEMENT</p></b></center></h1>
        <table class="table">
        <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">#</th> 
                       <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Vehicle NO</th>
                        <th scope="col">ACTION</th>
                        </tr>
        </thead>
        <tbody>
            {this.state.posts.map((posts,index) =>
            <tr>
              <th scope="row">{index+1}</th>
              <td>
                 <a href={`/post/${posts._id}`}style={{textDecoration:'none'}}>              
                  {posts.NIC}
                  </a>
                  </td>
              <td>{posts.Firstname}</td>
              <td>{posts.Lastname}</td>
              <td>{posts.NIC}</td>
              <td>{posts.Address}</td>
              <td>{posts.Email}</td>
              <td>{posts.Gender}</td>
              <td>{posts.Phonenumber}</td>
              <td>{posts.VehicleNo}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                <i className ="fa fa-trash-alt"></i>&nbsp;EDIT
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#"onClick={() =>this.onDelete(posts._id)}>
                <i className="far fa-trash-alt"></i>&nbsp;DELETE
                </a>
            </td>
            </tr>
        )} 
        </tbody>
        </table>
        </div>
        
        )}
            }
            