export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string[];
    wallets: WalletData[]
}

export interface WalletData {
    number: string;
    bank: string;
    holder: string;
}

export const users: UserData[] = [
    {
        id: 1,
        firstName: "Catharine",
        lastName: "Widjaya",
        age: 25,
        email: ["catharine.widjaya@gmail.com",],
        wallets: []
    },
    {
        id: 2,
        firstName: "Fredrick",
        lastName: "Widjaya",
        age: 22,
        email: ["f.widjaya20@gmail.com", "fwidjaya20games@gmail.com"],
        wallets: [
            {
                bank: "BCA", holder: "Fredrick Widjaya", number: "5271531169"
            }
        ]
    },
    {
        id: 3,
        firstName: "Jeffrey",
        lastName: "Widjaya",
        age: 19,
        email: ["jeffrey.widjaya@gmail.com"],
        wallets: []
    },
];