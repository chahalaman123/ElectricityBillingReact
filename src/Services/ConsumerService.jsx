import axios from 'axios';

const CONSUMER_API_BASE_URL = "http://ec2-3-136-255-165.us-east-2.compute.amazonaws.com:8081/cg/ebs";

class ConsumerService {

  
    validateConsumer(consumer){
        return axios.post(CONSUMER_API_BASE_URL + '/consumer' , consumer);
    }
    
    }
   
    


    
    

export default new ConsumerService()
