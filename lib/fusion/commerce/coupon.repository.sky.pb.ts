// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: commerce/coupon.repository.sky.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as commerceCoupon from "./coupon.pb";

//========================================//
//                 Types                  //
//========================================//

export interface ListCouponsRequest {
  /**
   * Filter allows you to search by fields set as searchable.
   * TODO Generate the list of searchable fields for this comment
   */
  filter: string;
  /**
   * The maximum number of items to return.
   */
  pageSize: number;
  /**
   * The next_page_token value returned from a previous List request, if any.
   */
  pageToken: string;
}

export interface ListCouponsResponse {
  /**
   * There will be a maximum number of records returned based on the page_size field in the request.
   */
  Coupons: commerceCoupon.Coupon[];
  total: bigint;
  /**
   * Token to retrieve the next page of results, or empty if there are no
   * more results in the list.
   */
  nextPageToken: string;
}

export interface CreateCouponRequest {
  /**
   * The name to use for the coupon, which will become the final component of
   * the coupon's resource name.
   *
   * This value should be 4-63 characters, and valid characters
   * are /[a-z][0-9]-/.
   */
  couponId: string;
  /**
   * The coupon to create.
   */
  coupon: commerceCoupon.Coupon;
}

export interface GetCouponRequest {
  name: string;
}

export interface UpdateCouponRequest {
  /**
   * The coupon to update.
   *
   * The coupon's 'name' field is used to identify the coupon to be updated.
   * Format: commerce/coupon}}
   */
  coupon: commerceCoupon.Coupon;
  /**
   * The list of fields to be updated.
   */
  updateMask: protoscript.FieldMask;
}

export interface DeleteCouponRequest {
  name: string;
}

//========================================//
//    CouponRepository Protobuf Client    //
//========================================//

export async function ListCoupons(
  listCouponsRequest: ListCouponsRequest,
  config?: ClientConfiguration,
): Promise<ListCouponsResponse> {
  const response = await PBrequest(
    "/commerce.CouponRepository/ListCoupons",
    ListCouponsRequest.encode(listCouponsRequest),
    config,
  );
  return ListCouponsResponse.decode(response);
}

export async function CreateCoupon(
  createCouponRequest: CreateCouponRequest,
  config?: ClientConfiguration,
): Promise<commerceCoupon.Coupon> {
  const response = await PBrequest(
    "/commerce.CouponRepository/CreateCoupon",
    CreateCouponRequest.encode(createCouponRequest),
    config,
  );
  return commerceCoupon.Coupon.decode(response);
}

export async function GetCoupon(
  getCouponRequest: GetCouponRequest,
  config?: ClientConfiguration,
): Promise<commerceCoupon.Coupon> {
  const response = await PBrequest(
    "/commerce.CouponRepository/GetCoupon",
    GetCouponRequest.encode(getCouponRequest),
    config,
  );
  return commerceCoupon.Coupon.decode(response);
}

export async function UpdateCoupon(
  updateCouponRequest: UpdateCouponRequest,
  config?: ClientConfiguration,
): Promise<commerceCoupon.Coupon> {
  const response = await PBrequest(
    "/commerce.CouponRepository/UpdateCoupon",
    UpdateCouponRequest.encode(updateCouponRequest),
    config,
  );
  return commerceCoupon.Coupon.decode(response);
}

export async function DeleteCoupon(
  deleteCouponRequest: DeleteCouponRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await PBrequest(
    "/commerce.CouponRepository/DeleteCoupon",
    DeleteCouponRequest.encode(deleteCouponRequest),
    config,
  );
  return protoscript.Empty.decode(response);
}

//========================================//
//      CouponRepository JSON Client      //
//========================================//

export async function ListCouponsJSON(
  listCouponsRequest: ListCouponsRequest,
  config?: ClientConfiguration,
): Promise<ListCouponsResponse> {
  const response = await JSONrequest(
    "/commerce.CouponRepository/ListCoupons",
    ListCouponsRequestJSON.encode(listCouponsRequest),
    config,
  );
  return ListCouponsResponseJSON.decode(response);
}

export async function CreateCouponJSON(
  createCouponRequest: CreateCouponRequest,
  config?: ClientConfiguration,
): Promise<commerceCoupon.Coupon> {
  const response = await JSONrequest(
    "/commerce.CouponRepository/CreateCoupon",
    CreateCouponRequestJSON.encode(createCouponRequest),
    config,
  );
  return commerceCoupon.CouponJSON.decode(response);
}

export async function GetCouponJSON(
  getCouponRequest: GetCouponRequest,
  config?: ClientConfiguration,
): Promise<commerceCoupon.Coupon> {
  const response = await JSONrequest(
    "/commerce.CouponRepository/GetCoupon",
    GetCouponRequestJSON.encode(getCouponRequest),
    config,
  );
  return commerceCoupon.CouponJSON.decode(response);
}

export async function UpdateCouponJSON(
  updateCouponRequest: UpdateCouponRequest,
  config?: ClientConfiguration,
): Promise<commerceCoupon.Coupon> {
  const response = await JSONrequest(
    "/commerce.CouponRepository/UpdateCoupon",
    UpdateCouponRequestJSON.encode(updateCouponRequest),
    config,
  );
  return commerceCoupon.CouponJSON.decode(response);
}

export async function DeleteCouponJSON(
  deleteCouponRequest: DeleteCouponRequest,
  config?: ClientConfiguration,
): Promise<protoscript.Empty> {
  const response = await JSONrequest(
    "/commerce.CouponRepository/DeleteCoupon",
    DeleteCouponRequestJSON.encode(deleteCouponRequest),
    config,
  );
  return protoscript.EmptyJSON.decode(response);
}

//========================================//
//            CouponRepository            //
//========================================//

/**
 *
 * CouponRepository allows you to manage Coupons.
 */
export interface CouponRepository<Context = unknown> {
  ListCoupons: (
    listCouponsRequest: ListCouponsRequest,
    context: Context,
  ) => Promise<ListCouponsResponse> | ListCouponsResponse;
  CreateCoupon: (
    createCouponRequest: CreateCouponRequest,
    context: Context,
  ) => Promise<commerceCoupon.Coupon> | commerceCoupon.Coupon;
  GetCoupon: (
    getCouponRequest: GetCouponRequest,
    context: Context,
  ) => Promise<commerceCoupon.Coupon> | commerceCoupon.Coupon;
  UpdateCoupon: (
    updateCouponRequest: UpdateCouponRequest,
    context: Context,
  ) => Promise<commerceCoupon.Coupon> | commerceCoupon.Coupon;
  DeleteCoupon: (
    deleteCouponRequest: DeleteCouponRequest,
    context: Context,
  ) => Promise<protoscript.Empty> | protoscript.Empty;
}

export function createCouponRepository<Context>(
  service: CouponRepository<Context>,
) {
  return {
    name: "commerce.CouponRepository",
    methods: {
      ListCoupons: {
        name: "ListCoupons",
        handler: service.ListCoupons,
        input: { protobuf: ListCouponsRequest, json: ListCouponsRequestJSON },
        output: {
          protobuf: ListCouponsResponse,
          json: ListCouponsResponseJSON,
        },
      },
      CreateCoupon: {
        name: "CreateCoupon",
        handler: service.CreateCoupon,
        input: { protobuf: CreateCouponRequest, json: CreateCouponRequestJSON },
        output: {
          protobuf: commerceCoupon.Coupon,
          json: commerceCoupon.CouponJSON,
        },
      },
      GetCoupon: {
        name: "GetCoupon",
        handler: service.GetCoupon,
        input: { protobuf: GetCouponRequest, json: GetCouponRequestJSON },
        output: {
          protobuf: commerceCoupon.Coupon,
          json: commerceCoupon.CouponJSON,
        },
      },
      UpdateCoupon: {
        name: "UpdateCoupon",
        handler: service.UpdateCoupon,
        input: { protobuf: UpdateCouponRequest, json: UpdateCouponRequestJSON },
        output: {
          protobuf: commerceCoupon.Coupon,
          json: commerceCoupon.CouponJSON,
        },
      },
      DeleteCoupon: {
        name: "DeleteCoupon",
        handler: service.DeleteCoupon,
        input: { protobuf: DeleteCouponRequest, json: DeleteCouponRequestJSON },
        output: { protobuf: protoscript.Empty, json: protoscript.EmptyJSON },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const ListCouponsRequest = {
  /**
   * Serializes ListCouponsRequest to protobuf.
   */
  encode: function (msg: PartialDeep<ListCouponsRequest>): Uint8Array {
    return ListCouponsRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListCouponsRequest from protobuf.
   */
  decode: function (bytes: ByteSource): ListCouponsRequest {
    return ListCouponsRequest._readMessage(
      ListCouponsRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListCouponsRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListCouponsRequest>): ListCouponsRequest {
    return {
      filter: "",
      pageSize: 0,
      pageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListCouponsRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.filter) {
      writer.writeString(1, msg.filter);
    }
    if (msg.pageSize) {
      writer.writeInt32(2, msg.pageSize);
    }
    if (msg.pageToken) {
      writer.writeString(3, msg.pageToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListCouponsRequest,
    reader: protoscript.BinaryReader,
  ): ListCouponsRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.filter = reader.readString();
          break;
        }
        case 2: {
          msg.pageSize = reader.readInt32();
          break;
        }
        case 3: {
          msg.pageToken = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const ListCouponsResponse = {
  /**
   * Serializes ListCouponsResponse to protobuf.
   */
  encode: function (msg: PartialDeep<ListCouponsResponse>): Uint8Array {
    return ListCouponsResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes ListCouponsResponse from protobuf.
   */
  decode: function (bytes: ByteSource): ListCouponsResponse {
    return ListCouponsResponse._readMessage(
      ListCouponsResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes ListCouponsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListCouponsResponse>,
  ): ListCouponsResponse {
    return {
      Coupons: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListCouponsResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.Coupons?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.Coupons as any,
        commerceCoupon.Coupon._writeMessage,
      );
    }
    if (msg.total) {
      writer.writeInt64String(2, msg.total.toString() as any);
    }
    if (msg.nextPageToken) {
      writer.writeString(3, msg.nextPageToken);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListCouponsResponse,
    reader: protoscript.BinaryReader,
  ): ListCouponsResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = commerceCoupon.Coupon.initialize();
          reader.readMessage(m, commerceCoupon.Coupon._readMessage);
          msg.Coupons.push(m);
          break;
        }
        case 2: {
          msg.total = BigInt(reader.readInt64String());
          break;
        }
        case 3: {
          msg.nextPageToken = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CreateCouponRequest = {
  /**
   * Serializes CreateCouponRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CreateCouponRequest>): Uint8Array {
    return CreateCouponRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateCouponRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CreateCouponRequest {
    return CreateCouponRequest._readMessage(
      CreateCouponRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateCouponRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCouponRequest>,
  ): CreateCouponRequest {
    return {
      couponId: "",
      coupon: commerceCoupon.Coupon.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCouponRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.couponId) {
      writer.writeString(1, msg.couponId);
    }
    if (msg.coupon) {
      writer.writeMessage(2, msg.coupon, commerceCoupon.Coupon._writeMessage);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCouponRequest,
    reader: protoscript.BinaryReader,
  ): CreateCouponRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.couponId = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(msg.coupon, commerceCoupon.Coupon._readMessage);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetCouponRequest = {
  /**
   * Serializes GetCouponRequest to protobuf.
   */
  encode: function (msg: PartialDeep<GetCouponRequest>): Uint8Array {
    return GetCouponRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetCouponRequest from protobuf.
   */
  decode: function (bytes: ByteSource): GetCouponRequest {
    return GetCouponRequest._readMessage(
      GetCouponRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetCouponRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetCouponRequest>): GetCouponRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCouponRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCouponRequest,
    reader: protoscript.BinaryReader,
  ): GetCouponRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const UpdateCouponRequest = {
  /**
   * Serializes UpdateCouponRequest to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateCouponRequest>): Uint8Array {
    return UpdateCouponRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateCouponRequest from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateCouponRequest {
    return UpdateCouponRequest._readMessage(
      UpdateCouponRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateCouponRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateCouponRequest>,
  ): UpdateCouponRequest {
    return {
      coupon: commerceCoupon.Coupon.initialize(),
      updateMask: protoscript.FieldMask.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateCouponRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.coupon) {
      writer.writeMessage(1, msg.coupon, commerceCoupon.Coupon._writeMessage);
    }
    if (msg.updateMask) {
      writer.writeMessage(
        2,
        msg.updateMask,
        protoscript.FieldMask._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateCouponRequest,
    reader: protoscript.BinaryReader,
  ): UpdateCouponRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          reader.readMessage(msg.coupon, commerceCoupon.Coupon._readMessage);
          break;
        }
        case 2: {
          reader.readMessage(
            msg.updateMask,
            protoscript.FieldMask._readMessage,
          );
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const DeleteCouponRequest = {
  /**
   * Serializes DeleteCouponRequest to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteCouponRequest>): Uint8Array {
    return DeleteCouponRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteCouponRequest from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteCouponRequest {
    return DeleteCouponRequest._readMessage(
      DeleteCouponRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteCouponRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCouponRequest>,
  ): DeleteCouponRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCouponRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeleteCouponRequest,
    reader: protoscript.BinaryReader,
  ): DeleteCouponRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const ListCouponsRequestJSON = {
  /**
   * Serializes ListCouponsRequest to JSON.
   */
  encode: function (msg: PartialDeep<ListCouponsRequest>): string {
    return JSON.stringify(ListCouponsRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListCouponsRequest from JSON.
   */
  decode: function (json: string): ListCouponsRequest {
    return ListCouponsRequestJSON._readMessage(
      ListCouponsRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListCouponsRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<ListCouponsRequest>): ListCouponsRequest {
    return {
      filter: "",
      pageSize: 0,
      pageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListCouponsRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.filter) {
      json["filter"] = msg.filter;
    }
    if (msg.pageSize) {
      json["pageSize"] = msg.pageSize;
    }
    if (msg.pageToken) {
      json["pageToken"] = msg.pageToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListCouponsRequest,
    json: any,
  ): ListCouponsRequest {
    const _filter_ = json["filter"];
    if (_filter_) {
      msg.filter = _filter_;
    }
    const _pageSize_ = json["pageSize"] ?? json["page_size"];
    if (_pageSize_) {
      msg.pageSize = protoscript.parseNumber(_pageSize_);
    }
    const _pageToken_ = json["pageToken"] ?? json["page_token"];
    if (_pageToken_) {
      msg.pageToken = _pageToken_;
    }
    return msg;
  },
};

export const ListCouponsResponseJSON = {
  /**
   * Serializes ListCouponsResponse to JSON.
   */
  encode: function (msg: PartialDeep<ListCouponsResponse>): string {
    return JSON.stringify(ListCouponsResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes ListCouponsResponse from JSON.
   */
  decode: function (json: string): ListCouponsResponse {
    return ListCouponsResponseJSON._readMessage(
      ListCouponsResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes ListCouponsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ListCouponsResponse>,
  ): ListCouponsResponse {
    return {
      Coupons: [],
      total: 0n,
      nextPageToken: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<ListCouponsResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.Coupons?.length) {
      json["Coupons"] = msg.Coupons.map(
        commerceCoupon.CouponJSON._writeMessage,
      );
    }
    if (msg.total) {
      json["total"] = String(msg.total);
    }
    if (msg.nextPageToken) {
      json["nextPageToken"] = msg.nextPageToken;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ListCouponsResponse,
    json: any,
  ): ListCouponsResponse {
    const _Coupons_ = json["Coupons"];
    if (_Coupons_) {
      for (const item of _Coupons_) {
        const m = commerceCoupon.CouponJSON.initialize();
        commerceCoupon.CouponJSON._readMessage(m, item);
        msg.Coupons.push(m);
      }
    }
    const _total_ = json["total"];
    if (_total_) {
      msg.total = BigInt(_total_);
    }
    const _nextPageToken_ = json["nextPageToken"] ?? json["next_page_token"];
    if (_nextPageToken_) {
      msg.nextPageToken = _nextPageToken_;
    }
    return msg;
  },
};

export const CreateCouponRequestJSON = {
  /**
   * Serializes CreateCouponRequest to JSON.
   */
  encode: function (msg: PartialDeep<CreateCouponRequest>): string {
    return JSON.stringify(CreateCouponRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateCouponRequest from JSON.
   */
  decode: function (json: string): CreateCouponRequest {
    return CreateCouponRequestJSON._readMessage(
      CreateCouponRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateCouponRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCouponRequest>,
  ): CreateCouponRequest {
    return {
      couponId: "",
      coupon: commerceCoupon.CouponJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCouponRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.couponId) {
      json["couponId"] = msg.couponId;
    }
    if (msg.coupon) {
      const _coupon_ = commerceCoupon.CouponJSON._writeMessage(msg.coupon);
      if (Object.keys(_coupon_).length > 0) {
        json["coupon"] = _coupon_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCouponRequest,
    json: any,
  ): CreateCouponRequest {
    const _couponId_ = json["couponId"] ?? json["coupon_id"];
    if (_couponId_) {
      msg.couponId = _couponId_;
    }
    const _coupon_ = json["coupon"];
    if (_coupon_) {
      commerceCoupon.CouponJSON._readMessage(msg.coupon, _coupon_);
    }
    return msg;
  },
};

export const GetCouponRequestJSON = {
  /**
   * Serializes GetCouponRequest to JSON.
   */
  encode: function (msg: PartialDeep<GetCouponRequest>): string {
    return JSON.stringify(GetCouponRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetCouponRequest from JSON.
   */
  decode: function (json: string): GetCouponRequest {
    return GetCouponRequestJSON._readMessage(
      GetCouponRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetCouponRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<GetCouponRequest>): GetCouponRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCouponRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: GetCouponRequest, json: any): GetCouponRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const UpdateCouponRequestJSON = {
  /**
   * Serializes UpdateCouponRequest to JSON.
   */
  encode: function (msg: PartialDeep<UpdateCouponRequest>): string {
    return JSON.stringify(UpdateCouponRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateCouponRequest from JSON.
   */
  decode: function (json: string): UpdateCouponRequest {
    return UpdateCouponRequestJSON._readMessage(
      UpdateCouponRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateCouponRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateCouponRequest>,
  ): UpdateCouponRequest {
    return {
      coupon: commerceCoupon.CouponJSON.initialize(),
      updateMask: protoscript.FieldMaskJSON.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateCouponRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.coupon) {
      const _coupon_ = commerceCoupon.CouponJSON._writeMessage(msg.coupon);
      if (Object.keys(_coupon_).length > 0) {
        json["coupon"] = _coupon_;
      }
    }
    if (msg.updateMask) {
      const _updateMask_ = protoscript.FieldMaskJSON._writeMessage(
        msg.updateMask,
      );
      if (Object.keys(_updateMask_).length > 0) {
        json["updateMask"] = _updateMask_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateCouponRequest,
    json: any,
  ): UpdateCouponRequest {
    const _coupon_ = json["coupon"];
    if (_coupon_) {
      commerceCoupon.CouponJSON._readMessage(msg.coupon, _coupon_);
    }
    const _updateMask_ = json["updateMask"] ?? json["update_mask"];
    if (_updateMask_) {
      protoscript.FieldMaskJSON._readMessage(msg.updateMask, _updateMask_);
    }
    return msg;
  },
};

export const DeleteCouponRequestJSON = {
  /**
   * Serializes DeleteCouponRequest to JSON.
   */
  encode: function (msg: PartialDeep<DeleteCouponRequest>): string {
    return JSON.stringify(DeleteCouponRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteCouponRequest from JSON.
   */
  decode: function (json: string): DeleteCouponRequest {
    return DeleteCouponRequestJSON._readMessage(
      DeleteCouponRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteCouponRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCouponRequest>,
  ): DeleteCouponRequest {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCouponRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeleteCouponRequest,
    json: any,
  ): DeleteCouponRequest {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};