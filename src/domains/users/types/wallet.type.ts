import {Field, ObjectType} from "type-graphql";

@ObjectType()
class WalletType {
    @Field()
    holder: string;

    @Field()
    number: string;

    @Field()
    bank: string;
}

export default WalletType;