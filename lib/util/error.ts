import { TwirpError } from "twirpscript"

export const parseError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }

  if (error instanceof TwirpError) {
    return error.msg
  }

  if (typeof error === "string") {
    return error
  }

  return "an unknown error occurred"
}