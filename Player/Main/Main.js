function iserBuilder(name,age){
    let user ={name, age}
    return{
        getAge(){
            return user.age;
        }
    }
}


let ret=iserBuilder('xxx',111);
ret.setname()=>{}