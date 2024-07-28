"use server"
import { initTransport } from "@/lib/transport"

initTransport()

export async function sendContactEmail(){
    console.log("sendContactEmail")
}
