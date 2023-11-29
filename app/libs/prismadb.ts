import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

//best practise for next js 13 with prisma for
// hotreloading can cause a bench new prisma clinent createddurin
const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV != 'production') globalThis.prisma = client

export default client;