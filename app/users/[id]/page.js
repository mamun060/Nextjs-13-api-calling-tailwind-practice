const getuser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){
        throw new Error("There was an Error");
    }
    return response.json();
}

const getUserPostList = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    
    if(!response.ok){
        throw new Error("There was an Error")
    }
    return response.json()
}

const User = async ({ params: {id}}) => {
    const userData =  getuser(id);
    const userPostList = getUserPostList(id);
    const [user, posts] = await Promise.all([userData, userPostList])

    return (
       <div>
         <div className=" text-center p-10">
             <h1 className=" text-2xl font-bold">Single User Information</h1>
             <p className=" text-orange-600 text-2xl font-bold">Name: {user.name}</p>
             <p className=" text-orange-600 text-2xl font-bold">Email: {user.email}</p>
        </div>
        <div className=" text-center p-10">
            <h2 className=" text-black text-3xl font-bold text-center pb-10">User Blog</h2>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 items-center flex-wrap">
            {
                posts?.map((item)=> {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className=" h-[200px] text-left shadow-lg rounded-xl p-5">
                            <h2 className=" text-xl font-bold text-left">{item.title}</h2>
                            <p className=" text-left mt-2 text-sm">{item.body}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
       </div>
    );
}
 
export default User;