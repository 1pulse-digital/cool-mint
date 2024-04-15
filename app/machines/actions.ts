"use server"

import { transport } from "@/lib/transport"
import { revalidateTag } from "next/cache"
import { TwirpError } from "twirpscript"

import { authHeader } from "@/app/actions"
import { Machine } from "@/lib/fusion/workshop/machine.pb"
import {
  CreateMachine,
  CreateMachineRequest,
  DeleteMachine,
  DeleteMachineRequest,
  GetMachine,
  GetMachineRequest,
  ListMachines,
  ListMachinesRequest,
  ListMachinesResponse,
  UpdateMachine,
  UpdateMachineRequest,
} from "@/lib/fusion/workshop/machine.repository.sky.pb"

export async function createMachine(
  request: CreateMachineRequest,
): Promise<Machine> {
  try {
    const response = await CreateMachine(request, {
      headers: await authHeader(),
    })
    // See: https://nextjs.org/docs/app/api-reference/functions/revalidateTag
    revalidateTag("machines")
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.machine.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function updateMachine(
  request: UpdateMachineRequest,
): Promise<Machine> {
  try {
    const response = await UpdateMachine(request, {
      headers: await authHeader(),
    })
    revalidateTag(request.machine.name)
    return response
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.machine.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function getMachine(request: GetMachineRequest): Promise<Machine> {
  try {
    return await GetMachine(request, {
      rpcTransport: transport(["machines", request.name]),
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function deleteMachine(
  request: DeleteMachineRequest,
): Promise<void> {
  try {
    await DeleteMachine(request, {
      headers: await authHeader(),
    })
    revalidateTag("machines")
    return
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${request.name} - ${e.msg}`)
    }
    throw e
  }
}

export async function listMachines(
  request: ListMachinesRequest,
): Promise<ListMachinesResponse> {
  try {
    return await ListMachines(request, {
      rpcTransport: transport(["machines"]),
      headers: await authHeader(),
    })
  } catch (e: unknown) {
    if (e instanceof TwirpError) {
      throw new Error(`${e.msg}`)
    }
    throw e
  }
}
