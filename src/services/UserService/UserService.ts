import User from "@/domain/users/User";
import { Genre } from "@/models/enums/EnumGenre";
import { Role } from "@/models/enums/EnumsRole";
import { State, useStore } from "@/store";
import { REGISTER_USER } from "@/store/actions/UserActions";
import Util from "@/util/Util";
import { AxiosResponse } from "axios";
import { Store } from "vuex";

export default class  UserService{

    private store: Store<State>

    constructor(){
        this.store = useStore();
    }

    public async RegisterUser(user: User, isAdmin: boolean): Promise<User | undefined>{
        try{
            
            user = this.ValidationTypeFormUser(isAdmin, user)
            user = this.ValidationGenreUser(user);
            const response: AxiosResponse<User> = await this.store.dispatch(REGISTER_USER, user);
            return response.data;
        }catch(erro){
            Util.ShowAlert(undefined, "error", "Erro ao cadastrar usuário", [true, "Ok"]);
            return undefined;
        }
    }
    
    private ValidationGenreUser(user: User){
        if (user.getGenre().toString() == "Male") 
        user.setGenre(Genre.Male);
      else if(user.genre.toString() == "Female")
        user.genre = Genre.Female;
      else 
        user.genre = Genre.NotInfo;

        return user;
    }
    

}