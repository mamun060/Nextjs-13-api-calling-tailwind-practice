import Link from "next/link";

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("faild to fetch users");
    }
    return  await response.json();
}

const Users = async () => {
    const userData = await getUsers();
    return (
        <div className=" text-center p-10">
            <h1 className=" text-2xl font-bold">User</h1>
            {
                userData.map((user)=> {
                    return (
                        <>
                            <div key={user.id} className=" border flex gap-5 items-center">
                                <Link href={`/users/${user.id}`} >
                                    <p className=" text-black font-2xl font-bold pr-5">Name: {user.name}</p>
                                </Link>
                            </div>
                                {/* <p className=" text-orange-600 text-2xl font-bold">Email: {user.email}</p> */}
                        </>
                    )
                })
            }
        </div>
    );
}
 
export default Users;