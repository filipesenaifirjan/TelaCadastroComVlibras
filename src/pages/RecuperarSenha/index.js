import { Link } from "react-router-dom";
import { Button ,Header ,Footer} from "../../components/PrimaryButton/styles";


function RecuperarSenha() {
    return (
        
        
        <>
       
       <div className="container">
       <Header/>
         <form className="loginForm">
           <h3>Recuperar Senha</h3>
               
           

                
                      <Link to={"/"}>
                      <Button style={{width:"120px", margin:"50px"}} type="submit">RECUPERAR SENHA</Button>
                      </Link>
                    
                      <Link style={{textDecoration:"none", margin:"50px"}} to={"/"}>
                      <spam>voltar</spam> 
                      </Link>
                      
                 
             
        </form>
        <Footer/>
     </div>
     </>

    )
}export default RecuperarSenha;