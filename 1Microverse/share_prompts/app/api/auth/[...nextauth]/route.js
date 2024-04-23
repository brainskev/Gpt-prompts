import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleAuth from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";

import {connectToDb} from "utils/database";

const handler = NextAuth ({
    providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: 'process.env.GOOGLE_SECRET',
    })
],

async session({session}){

},
async signIn({profile}){
    try {
        await connectToDb();
    } catch (error) {
        
    }

}
})

export { handler as GET, handler as POST };