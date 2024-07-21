
import User from "@/domain/entities/users/User";
import { EnumGenre } from "@/domain/enums/EnumGenre";
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
        // try{
            
        //     user = this.ValidationTypeFormUser(isAdmin, user)
        //     user = this.ValidationGenreUser(user);
        //     const response: AxiosResponse<User> = await this.store.dispatch(REGISTER_USER, user);
        //     return response.data;
        // }catch(erro){
        //     Util.ShowAlert(undefined, "error", "Erro ao cadastrar usuário", [true, "Ok"]);
        //     return undefined;
        // }
        return user;
    }
    
    private ValidationGenreUser(user: User){
    //     if (user.getGenre().toString() == "Male") 
    //     user.setGenre(EnumGenre.Male);
    //   else if(user.genre.toString() == "Female")
    //     user.genre = EnumGenre.Female;
    //   else 
    //     user.genre = EnumGenre.NotInfo;

        return user;
    }
    

}