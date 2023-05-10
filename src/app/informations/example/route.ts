import { NextResponse } from "next/server"


export async function GET(request: Request){
    const res = await fetch('https://api.github.com/users/junior725')
    const data_github = await res.json()
    return NextResponse.json(data_github)
}