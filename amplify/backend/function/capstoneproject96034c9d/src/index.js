exports.handler = async (event) => {
   console.log(event)
   const userId = event.pathParameters.userId;
   const user = {'userId': userId, 'userName': "User " + userId };
   const response = {
       statusCode: 200,
       headers: {
           "Access-Control-Allow-Origin": "*",
           "Access-Control_allow-Headers": "*"
       },
       body: JSON.stringify(user),
   };
   return response;
  
};
