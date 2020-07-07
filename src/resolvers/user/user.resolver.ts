import {Arg, FieldResolver, Query, Resolver, Root} from "type-graphql";
import {users} from "../../data";
import UserType from "../../domains/users/types/user.type";

@Resolver(of => UserType)
class UserResolver {

    @Query(returns => [UserType])
    async users() {
        return users;
    }

    @Query(returns => UserType, { nullable: true })
    async user(
        @Arg("name") name: string
    ) : Promise<UserType | any> {
        return users.find((p) => `${p.firstName} ${p.lastName}` === name);
    }

    @FieldResolver({nullable: true})
    async wallets(
        @Root() user: UserType
    ) {
        return user.wallets
    }
}

export default UserResolver;