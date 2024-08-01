"use server"
import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"
import { authHeader } from "../actions"
import { SubmitInquiry, SubmitInquiryRequest } from "@/lib/fusion/workshop/contact.service.pb"

initTransport()


export const submitInquiry = async (request: SubmitInquiryRequest) => {
    try {
        return await SubmitInquiry(request, {
            headers: await authHeader(),
        })
    } catch (e: unknown) {
        if (e instanceof TwirpError) {
            console.error("SubmitInquiry", e)
            throw new Error(`SubmitInquiry: ${e.code}: ${e.msg}`)
        }
    }
}