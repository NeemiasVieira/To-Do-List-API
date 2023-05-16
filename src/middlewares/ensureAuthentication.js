import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { AppException } from '../application/errors/AppException.js';
import { prisma } from '../database/PrismaClient.js';

export async function ensureAuthentication(request, response, next){
  const authHeader = request.headers.authorization;

  if(!authHeader) throw new AppException(401, "Invalid Token.")


  //Bearer sadjoasdfj0weopfk65262dsfg2sdfg2we (exemplo de output do authHeader)

  const [, token] = authHeader.split(" ");

  //[Bearer, sadjoasdfj0weopfk65262dsfg2sdfg2we]

  try{  
    
    const verification = verify(token, process.env.JWT_SECRET);
    const user_id = verification.sub;
  
    const user = await prisma.users.findUnique({where:{userid: user_id}})


    if(!user) throw new AppException(400, "User does't exists.");

    
    request.user = {
      id: user_id,
    };

    next();
  }
  catch{
    throw new AppException(400, "Invalid Token.");
  }
}