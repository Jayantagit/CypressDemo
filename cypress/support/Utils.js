import { v4 as uuidv4 } from "uuid";

class Utils
{
    getRandomNumber(length=8)
    {
       return uuidv4().replace("-","_").substring(0,length).toString();
    }
}

export default new Utils();