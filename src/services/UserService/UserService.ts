import User from "@/models/User";
import { Genre } from "@/models/enums/EnumGenre";
import { Role } from "@/models/enums/EnumsRole";
import { State, store, useStore } from "@/store";
import { REGISTER_USER } from "@/store/actions/UserActions";
import { AxiosResponse } from "axios";
import swal from "sweetalert";
import { Store } from "vuex";

export default class UserService{

    readonly urlUser: string = "/usuarios";
    store: Store<State>

    constructor(){
        this.store = useStore();
    }

    public async RegisterUser(user: User, isAdmin: boolean): Promise<void>{
        try{
            
            user = this.ValidationTypeFormUser(isAdmin, user)
            user = this.ValidationGenreUser(user);
            const response: AxiosResponse<User> = await store.dispatch(REGISTER_USER, user);
            
        }catch(erro){
            swal({
                text:"Erro ao cadastrar usuário",
                icon: "error",
                buttons: [true, "Ok"]
            })
          }
    }

    private ValidationTypeFormUser(isAdmin: boolean, user: User): User{
        if (isAdmin) 
            user.userRole = Role.Admin
        else
            user.userRole = Role.Limited

            return user;
    }

    private ValidationGenreUser(user: User){
        if (user.genre.toString() == "Male") 
        user.genre = Genre.Male;
      else if(user.genre.toString() == "Female")
        user.genre = Genre.Female;
      else 
        user.genre = Genre.NotInfo;

        return user;
    }
    

}