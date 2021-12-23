import { Link } from "react-router-dom";
import { Button ,Header ,Footer} from "../../components/PrimaryButton/styles";
import { Title } from "./styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';

function Home() {
    return (
        
        
        <>
       
       <div className="container">
      
         <form className="loginForm">
         <LogImage/>
           <h1>Olá, {"user"} ! Bem vindo a Tic Social.</h1>
               
           
                      <Link to={"/listarFuncionarios"}>
                      <Button style={{width:"120px", margin:"50px"}} type="submit">Listar funcionarios</Button>
                      </Link>
                
                      <Link to={"/cadastro"}>
                      <Button style={{width:"120px", margin:"50px"}} type="submit">FAZER CADASTRO</Button>
                      </Link>
                    
                      <Link style={{textDecoration:"none", margin:"50px"}} to={"/"}>
                      <spam>voltar</spam> 
                      </Link>
                      
                 
             
        </form>
        <Footer/>
     </div>
    





       {/* <Link to="/home">
               <PrimaryButton message="Link to Home" />
           </Link>
          

       <Link to="/home/products">
       <PrimaryButton message="Link to Products" />
       </Link> */}



        </>
    )
}

export default Home;