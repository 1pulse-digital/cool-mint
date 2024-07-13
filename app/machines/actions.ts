"use server"

import { initTransport } from "@/lib/transport"
import { TwirpError } from "twirpscript"

import { Machine } from "@/lib/fusion/workshop/machine.pb"
import {
  GetMachine,
  GetMachineRequest,
  ListMachines,
  ListMachinesRequest,
  ListMachinesResponse,
} from "@/lib/fusion/workshop/machine.repository.sky.pb"

initTransport()

export async function getMachine(request: GetMachineRequest): Promise<Machine> {
  try {
    return await GetMachine(request, {})
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to get machine")
  }
}

export async function listMachines(
  request: ListMachinesRequest,
): Promise<ListMachinesResponse> {
  try {
    const response = await ListMachines(request, {})
    return response
  } catch (e: unknown) {
    console.error("ListMachines error", e)
    if (e instanceof TwirpError) {
      throw new Error(e.msg)
    }
    throw new Error("Failed to list machines")
  }
}
