import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../Services/api";
import { Button } from "../../components/PrimaryButton/styles";


function ListarFuncionarios() {
//     // // const [newRepo, setNewRepo] = useState("");
//     // const [todosFuncionarios, setTodosFuncionarios] = useState([]);

//     // useEffect(() => {
        
//     //     async function fetchData() {
//     //         const response = await api.get(`/funcionarios/`);
//     //         setTodosfuncionarios(response.data);
//     //         console.log(response.data);
//     //     }
    
//     //     fetchData();

//     //     console.log(todosFuncionarios);
        
//     // }, []);

//     // function deletarFuncionario(e) {
//     //     e.preventDefault();
//     //    var response = api.delete(`/funcionario/${e}`);
//     //    alert(response);

//     // }

    return (
        <>
     
       
        <h1>Todos os funcionarios</h1>
        <div style={{color: "white", backgroundColor: "#420D09", width:"150px", borderRadius:"5px", textAlign: "center", textShadow: "black 1px 1px 1px", padding: "5px"}}>
            <Link class="btnVOLTA" style={{textDecoration: "none", color:"white"}}to={"/criafuncionario"}>Buscar funcionario por matricula</Link>
        </div>
      
                
     {
//     //         todosfuncionarios.map(funcionario => {
//     //             return (
//     //                 // <RepositoryCard key={funcionario?.id_funcionario}>
//     //                      <div className="eee">
//     //                     <Link to={`funcionario/${funcionario?.id_funcionario}`}>
//     //                         <div>
//     //                             <strong>{funcionario?.nomeCompleto}</strong>
//     //                             <p>Cpf: {funcionario?.cpf}</p>
//     //                             <p>Telefone: {funcionario?.telefone}</p>
//     //                             <p>Email: {funcionario?.email}</p>
//     //                             <p>Localidade: {funcionario?.enderecoDto.localidade}</p>
//     //                             <p>UF: {funcionario?.enderecoDto.uf}</p>
//     //                             <Button style={{backgroundColor: "#420D09"}} 
//     //                                 class="btnCRUD" type="button" value={funcionario?.id_funcionario} id={`btnDeletar${funcionario?.id_funcionario}`} 
//     //                                 onClick={(e) => {deletarFuncionario(e.target.value)}}>{`Deleta ${funcionario?.nomeCompleto}`}
//     //                             </Button>
//     //                             <Link class="btnCRUD" type="button" id={`btnDeletar${funcionario?.id_produto}`} style={{textDecoration:"none", color:"white", width:"150px", backgroundColor:"#7285A5", height:"20px", marginTop:"10px"}} to="/editafuncionarios">
//     //                                 {`Edita funcionario`}
//     //                             </Link>
//     //                         </div>
//     //                     </Link>
//     //                     </div>
//     //                 // </RepositoryCard>
//     //             )
//     //         })
        }
  
    </> 
    
    );
}

export default ListarFuncionarios;