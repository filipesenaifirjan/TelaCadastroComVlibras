import React from "react";
import { Link } from "react-router-dom";
import "./cadastro.scss";
import { Button ,Header ,Footer} from "../../components/PrimaryButton/styles";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../Services/api";

// const schema = yup.object().shape({
// matricula: yup.string().required('*O preenchimento do campo é obrigatório.'),
// senha: yup.string().required('*O preenchimento do campo é obrigatório.'),
// nome: yup.string().required('*O preenchimento do campo é obrigatório.'),
// data_nascimento: yup.string().required('*O preenchimento do campo é obrigatório.'),
// sexo: yup.string().required('*O preenchimento do campo é obrigatório.'),
// estado_civil: yup.string().required('*O preenchimento do campo é obrigatório.'),
// nacionalidade: yup.string().required('*O preenchimento do campo é obrigatório.'),
// naturalidade: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // nome_pai: yup.string().required('*O preenchimento do campo é obrigatório.'),
// nome_mae: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // pne: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // data_admissao: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // data_demissao: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // motivo_demissao: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // valor_recisao: yup.string().required('*O preenchimento do campo é obrigatório.'),
// cep: yup.string().required('*O preenchimento do campo é obrigatório.'),
// logradouro: yup.string().required('*O preenchimento do campo é obrigatório.'),
// // numero: yup.string().required('*O preenchimento do campo é obrigatório.'),
// })

// function Cadastro() {
//     const { register, handleSubmit ,formState:{errors}} = useForm({
//         resolver:yupResolver(schema)
    
//     });
function Cadastro(){

    const [funcionario, setFuncionario] = useState({
      cpf: "",
      id_funcionario: 0,
      nome: "",
      salario: ""
      }
  );

function handleSubmit(){
  api.post("/funcionario", funcionario).then( alert("Fucionario Cadastrado com sucesso!"))
  alert("Fucionario Cadastrado com sucesso!")
}
    
//     function handleLogin(dados){
//         console.log(dados)
      
//     }


    return (
        <>
       
        <div className="container">
        <Header/>
          <form  onSubmit={() => handleSubmit()} className="loginForm">
            <h1>Formulario de cadastro</h1>
              
                <div>
                    <label>Nome completo</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo "
                     value={funcionario?.nome} onChange={(event) => { setFuncionario({...funcionario, nome: event.target.value}) }}
                        
                  
                        />
                   
                  </div>
              
                 <div>
                    <label>Matricula</label>
                        <input
                        type="text"
                        name="matricula"
                        placeholder="Digite sua matrícula "
                   
                        />
                  
                  </div>

                  <div>
                        <label>Data Nascimento </label>
                        <input
                        type="date"
                        name="data_nascimento"
                        placeholder="Informe sua data de nascimento"
                   
                        />
                    

                  </div>

                  <div>
                        <label>Sexo</label>
                        <input

                        type="text"
                        name="sexo"
                        placeholder="Digite seu sexo"
                  
                        />
                      

                  </div>

                  <div>
                        <label>Estado civil </label>
                        <input
                        type="text"
                        name="estado_civil"
                        placeholder="Digite seu estado civil"
                   
                        />
                   

                  </div>

                  <div>
                        <label>Nacionalidade</label>
                        <input
                        type="text"
                        name="nacionalidade"
                        placeholder="Digite sua nacionalidade"
                    
                        />
                  

                  </div>

                  <div>
                        <label>Telefone</label>
                        <input
                        type="text"
                        name="Telefone"
                        placeholder="Digite seu telefone"
                   
                        />
                    

                  </div>

                  <div>
                        <label>Nome do pai </label>
                        <input
                        type="text"
                        name="nome_pai"
                        placeholder="Digite o nome do pai"
                
                        />
                     

                  </div>

                  <div>
                        <label>Nome da mãe</label>
                        <input
                        type="text"
                        name="nome_mae"
                        placeholder="Digite o nome da mãe"
                   
                        />
                 

                  </div>

                  <div>
                        <label>Salario</label>
                        <input
                        type="text"
                        name="salario"
                 
                        />
                   

                  </div>

                  <div>
                        <label>Celular</label>
                        <input
                        type="string"
                        name="Celular"
                        placeholder="Informe o numero do celular"
                  
                        />
                   

                  </div>

                  <div>
                        <label>Cargo</label>
                        <input
                        type="String"
                        name="cargo"
                        placeholder="Informe o cargo"
                   
                        />
                       

                  </div>

                  <div>
                        <label>Funcao na plataforma</label>
                        <input
                        type="text"
                        name="funcao_plataforma"
                        placeholder="Informe a funcao na plataforma"
                  
                        />
                     

                  </div>

                  <div>
                        <label>Valor da recisão</label>
                        <input
                        type="double"
                        name="valor_recisao"
                        placeholder="Informe o valor da recisâo"
               
                        />
                  

                  </div>

                  <div>
                        <label>Cep</label>
                        <input
                        type="cep"
                        name="cep"
                        placeholder="Informe seu cep"
              
                        />
                       

                  </div>

                  <div>
                        <label>Logradouro</label>
                        <input
                        type="text"
                        name="logradouro"
                        placeholder="Informe seu logradouro"
                  
                        />
                     

                  </div>

                  <div>
                        <label>Numero</label>
                        <input
                        type="number"
                        name="numero"
                        placeholder="Informe seu numero"
                  
                        />
              

                  </div>

                  <div>
                        <label>Complemento</label>
                        <input
                        type="text"
                        name="complemento"
                        placeholder="Informe o complemento"
                
                        />
                   

                  </div>

                  <div>
                        <label>Bairro</label>
                        <input
                        type="text"
                        name="bairo"
                        placeholder="Informe seu bairro"
                   
                        />
                  

                  </div>

                  <div>
                        <label>Cidade</label>
                        <input
                        type="cidade"
                        name="cidade"
                        placeholder="Informe seu cidade"
               
                        />
                  

                  </div>

                  <div>
                        <label>Telefone</label>
                        <input
                        type="telefone"
                        name="telefone"
                        placeholder="Informe seu telefone"
                 
                        />
                       

                  </div>






                    <div className="botao">
                       {/* <Link type="submit" to={"/home"}> */}
                       <button type="submit">Seguinte</button>
                       {/* </Link> */}
                     
                       <Link style={{margin:"50px" , textDecoration:"none"}} to={"/"}>
                       <spam>Voltar</spam> 
                       </Link>
                       
                    </div>        
              
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
    
    )}export default Cadastro;

