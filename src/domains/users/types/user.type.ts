import {Field, Int, ObjectType} from "type-graphql";
import WalletType from "./wallet.type";

@ObjectType()
class UserType {
    @Field(type => Int)
    id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(type => Int)
    age: number;

    @Field(type => [String])
    emails: string[];

    @Field(type => [WalletType])
    wallets: WalletType[];
}

export default UserType;