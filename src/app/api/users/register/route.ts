import { NextApiRequest } from "next"


export async function POST(req : Request) {
    const { user } = await req.json();
    return Response.json(user, { status : 200 })
}