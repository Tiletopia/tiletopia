const resolvers = {
    Query: {
        async getUsers(){
            try{
                const Users = await Users.find();
                return Users;
            } catch (err){
                throw new ErrorEvent(err);
            }
        }
    }
};