import axios from "axios";

const getApprovedDemande = async () =>{
    try{
      const response = await axios.get("http://localhost:8091/getalldemande")
      console.log(response);
      return response.data ;
    }catch(error){
      console.log(error);
    }
}

const demandeService = {
    getApprovedDemande
}

export default demandeService;