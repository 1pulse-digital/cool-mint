"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"
import { authHeader } from "../actions"
import { ContactUs, ContactUsRequest } from "@/lib/fusion/workshop/contact.service.pb"

initTransport()


export const contactUsSubmit = async (request: ContactUsRequest) => {
    try {
        return await ContactUs(request, {
            headers: await authHeader(),
        })
    } catch (e: unknown) {
        if (e instanceof TwirpError) {
            console.error("contactUs", e)
            throw new Error(`contactUs: ${e.code}: ${e.msg}`)
        }
    }
}