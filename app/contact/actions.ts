"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"
import { authHeader } from "../actions"
import { SendEmail, SendEmailRequest } from "@/lib/fusion/workshop/email.service.pb"

initTransport()

export async function sendContactEmail(request: SendEmailRequest) {
    try {
        return await SendEmail(request, {
            headers: await authHeader(),
        })
    } catch (e: unknown) {
        if (e instanceof TwirpError) {
            console.error("sendContactEmail", e)
            throw new Error(`sendContactEmail: ${e.code}: ${e.msg}`)
        }
    }
}
