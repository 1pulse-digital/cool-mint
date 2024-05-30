// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: masterClass/booking.manager.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface BookSessionRequest {
  /**
   * Class is the name of the class that the user wants to book
   */
  class: string;
  /**
   * User is the name of the user who is booking the class
   */
  user: string;
}

export interface BookSessionResponse {
  /**
   * Success is true if the class was booked successfully
   */
  success: boolean;
}

export interface ConfirmSessionRequest {}

export interface ConfirmSessionResponse {}

export interface CancelBookingRequest {
  /**
   * Class is the name of the class that the user wants to cancel
   */
  class: string;
  /**
   * User is the name of the user who is cancelling the class
   */
  user: string;
}

export interface CancelBookingResponse {
  /**
   * Success is true if the class was cancelled successfully
   */
  success: boolean;
}

//========================================//
//     BookingManager Protobuf Client     //
//========================================//

/**
 * BookSession is used to book a class
 * A user can book a class by choosing which session they want to attend
 * This will add the linked product to the user's cart and update the session's availability
 */
export async function BookSession(
  bookSessionRequest: BookSessionRequest,
  config?: ClientConfiguration,
): Promise<BookSessionResponse> {
  const response = await PBrequest(
    "/masterClass.BookingManager/BookSession",
    BookSessionRequest.encode(bookSessionRequest),
    config,
  );
  return BookSessionResponse.decode(response);
}

/**
 * This is intended to be a wrapper around the confirm order method
 * Open questions:
 * - What happens
 */
export async function ConfirmSession(
  confirmSessionRequest: ConfirmSessionRequest,
  config?: ClientConfiguration,
): Promise<ConfirmSessionResponse> {
  const response = await PBrequest(
    "/masterClass.BookingManager/ConfirmSession",
    ConfirmSessionRequest.encode(confirmSessionRequest),
    config,
  );
  return ConfirmSessionResponse.decode(response);
}

export async function CancelBooking(
  cancelBookingRequest: CancelBookingRequest,
  config?: ClientConfiguration,
): Promise<CancelBookingResponse> {
  const response = await PBrequest(
    "/masterClass.BookingManager/CancelBooking",
    CancelBookingRequest.encode(cancelBookingRequest),
    config,
  );
  return CancelBookingResponse.decode(response);
}

//========================================//
//       BookingManager JSON Client       //
//========================================//

/**
 * BookSession is used to book a class
 * A user can book a class by choosing which session they want to attend
 * This will add the linked product to the user's cart and update the session's availability
 */
export async function BookSessionJSON(
  bookSessionRequest: BookSessionRequest,
  config?: ClientConfiguration,
): Promise<BookSessionResponse> {
  const response = await JSONrequest(
    "/masterClass.BookingManager/BookSession",
    BookSessionRequestJSON.encode(bookSessionRequest),
    config,
  );
  return BookSessionResponseJSON.decode(response);
}

/**
 * This is intended to be a wrapper around the confirm order method
 * Open questions:
 * - What happens
 */
export async function ConfirmSessionJSON(
  confirmSessionRequest: ConfirmSessionRequest,
  config?: ClientConfiguration,
): Promise<ConfirmSessionResponse> {
  const response = await JSONrequest(
    "/masterClass.BookingManager/ConfirmSession",
    ConfirmSessionRequestJSON.encode(confirmSessionRequest),
    config,
  );
  return ConfirmSessionResponseJSON.decode(response);
}

export async function CancelBookingJSON(
  cancelBookingRequest: CancelBookingRequest,
  config?: ClientConfiguration,
): Promise<CancelBookingResponse> {
  const response = await JSONrequest(
    "/masterClass.BookingManager/CancelBooking",
    CancelBookingRequestJSON.encode(cancelBookingRequest),
    config,
  );
  return CancelBookingResponseJSON.decode(response);
}

//========================================//
//             BookingManager             //
//========================================//

export interface BookingManager<Context = unknown> {
  /**
   * BookSession is used to book a class
   * A user can book a class by choosing which session they want to attend
   * This will add the linked product to the user's cart and update the session's availability
   */
  BookSession: (
    bookSessionRequest: BookSessionRequest,
    context: Context,
  ) => Promise<BookSessionResponse> | BookSessionResponse;
  /**
   * This is intended to be a wrapper around the confirm order method
   * Open questions:
   * - What happens
   */
  ConfirmSession: (
    confirmSessionRequest: ConfirmSessionRequest,
    context: Context,
  ) => Promise<ConfirmSessionResponse> | ConfirmSessionResponse;
  CancelBooking: (
    cancelBookingRequest: CancelBookingRequest,
    context: Context,
  ) => Promise<CancelBookingResponse> | CancelBookingResponse;
}

export function createBookingManager<Context>(
  service: BookingManager<Context>,
) {
  return {
    name: "masterClass.BookingManager",
    methods: {
      BookSession: {
        name: "BookSession",
        handler: service.BookSession,
        input: { protobuf: BookSessionRequest, json: BookSessionRequestJSON },
        output: {
          protobuf: BookSessionResponse,
          json: BookSessionResponseJSON,
        },
      },
      ConfirmSession: {
        name: "ConfirmSession",
        handler: service.ConfirmSession,
        input: {
          protobuf: ConfirmSessionRequest,
          json: ConfirmSessionRequestJSON,
        },
        output: {
          protobuf: ConfirmSessionResponse,
          json: ConfirmSessionResponseJSON,
        },
      },
      CancelBooking: {
        name: "CancelBooking",
        handler: service.CancelBooking,
        input: {
          protobuf: CancelBookingRequest,
          json: CancelBookingRequestJSON,
        },
        output: {
          protobuf: CancelBookingResponse,
          json: CancelBookingResponseJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const BookSessionRequest = {
  /**
   * Serializes BookSessionRequest to protobuf.
   */
  encode: function (msg: PartialDeep<BookSessionRequest>): Uint8Array {
    return BookSessionRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes BookSessionRequest from protobuf.
   */
  decode: function (bytes: ByteSource): BookSessionRequest {
    return BookSessionRequest._readMessage(
      BookSessionRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes BookSessionRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BookSessionRequest>): BookSessionRequest {
    return {
      class: "",
      user: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookSessionRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.class) {
      writer.writeString(1, msg.class);
    }
    if (msg.user) {
      writer.writeString(2, msg.user);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BookSessionRequest,
    reader: protoscript.BinaryReader,
  ): BookSessionRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.class = reader.readString();
          break;
        }
        case 2: {
          msg.user = reader.readString();
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

export const BookSessionResponse = {
  /**
   * Serializes BookSessionResponse to protobuf.
   */
  encode: function (msg: PartialDeep<BookSessionResponse>): Uint8Array {
    return BookSessionResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes BookSessionResponse from protobuf.
   */
  decode: function (bytes: ByteSource): BookSessionResponse {
    return BookSessionResponse._readMessage(
      BookSessionResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes BookSessionResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<BookSessionResponse>,
  ): BookSessionResponse {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookSessionResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.success) {
      writer.writeBool(1, msg.success);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BookSessionResponse,
    reader: protoscript.BinaryReader,
  ): BookSessionResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.success = reader.readBool();
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

export const ConfirmSessionRequest = {
  /**
   * Serializes ConfirmSessionRequest to protobuf.
   */
  encode: function (_msg?: PartialDeep<ConfirmSessionRequest>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes ConfirmSessionRequest from protobuf.
   */
  decode: function (_bytes?: ByteSource): ConfirmSessionRequest {
    return {};
  },

  /**
   * Initializes ConfirmSessionRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmSessionRequest>,
  ): ConfirmSessionRequest {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<ConfirmSessionRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: ConfirmSessionRequest,
    _reader: protoscript.BinaryReader,
  ): ConfirmSessionRequest {
    return _msg;
  },
};

export const ConfirmSessionResponse = {
  /**
   * Serializes ConfirmSessionResponse to protobuf.
   */
  encode: function (_msg?: PartialDeep<ConfirmSessionResponse>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes ConfirmSessionResponse from protobuf.
   */
  decode: function (_bytes?: ByteSource): ConfirmSessionResponse {
    return {};
  },

  /**
   * Initializes ConfirmSessionResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmSessionResponse>,
  ): ConfirmSessionResponse {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<ConfirmSessionResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: ConfirmSessionResponse,
    _reader: protoscript.BinaryReader,
  ): ConfirmSessionResponse {
    return _msg;
  },
};

export const CancelBookingRequest = {
  /**
   * Serializes CancelBookingRequest to protobuf.
   */
  encode: function (msg: PartialDeep<CancelBookingRequest>): Uint8Array {
    return CancelBookingRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CancelBookingRequest from protobuf.
   */
  decode: function (bytes: ByteSource): CancelBookingRequest {
    return CancelBookingRequest._readMessage(
      CancelBookingRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CancelBookingRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CancelBookingRequest>,
  ): CancelBookingRequest {
    return {
      class: "",
      user: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CancelBookingRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.class) {
      writer.writeString(1, msg.class);
    }
    if (msg.user) {
      writer.writeString(2, msg.user);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CancelBookingRequest,
    reader: protoscript.BinaryReader,
  ): CancelBookingRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.class = reader.readString();
          break;
        }
        case 2: {
          msg.user = reader.readString();
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

export const CancelBookingResponse = {
  /**
   * Serializes CancelBookingResponse to protobuf.
   */
  encode: function (msg: PartialDeep<CancelBookingResponse>): Uint8Array {
    return CancelBookingResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CancelBookingResponse from protobuf.
   */
  decode: function (bytes: ByteSource): CancelBookingResponse {
    return CancelBookingResponse._readMessage(
      CancelBookingResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CancelBookingResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CancelBookingResponse>,
  ): CancelBookingResponse {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CancelBookingResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.success) {
      writer.writeBool(1, msg.success);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CancelBookingResponse,
    reader: protoscript.BinaryReader,
  ): CancelBookingResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.success = reader.readBool();
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

export const BookSessionRequestJSON = {
  /**
   * Serializes BookSessionRequest to JSON.
   */
  encode: function (msg: PartialDeep<BookSessionRequest>): string {
    return JSON.stringify(BookSessionRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes BookSessionRequest from JSON.
   */
  decode: function (json: string): BookSessionRequest {
    return BookSessionRequestJSON._readMessage(
      BookSessionRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes BookSessionRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BookSessionRequest>): BookSessionRequest {
    return {
      class: "",
      user: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookSessionRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.class) {
      json["class"] = msg.class;
    }
    if (msg.user) {
      json["user"] = msg.user;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BookSessionRequest,
    json: any,
  ): BookSessionRequest {
    const _class_ = json["class"];
    if (_class_) {
      msg.class = _class_;
    }
    const _user_ = json["user"];
    if (_user_) {
      msg.user = _user_;
    }
    return msg;
  },
};

export const BookSessionResponseJSON = {
  /**
   * Serializes BookSessionResponse to JSON.
   */
  encode: function (msg: PartialDeep<BookSessionResponse>): string {
    return JSON.stringify(BookSessionResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes BookSessionResponse from JSON.
   */
  decode: function (json: string): BookSessionResponse {
    return BookSessionResponseJSON._readMessage(
      BookSessionResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes BookSessionResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<BookSessionResponse>,
  ): BookSessionResponse {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookSessionResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.success) {
      json["success"] = msg.success;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BookSessionResponse,
    json: any,
  ): BookSessionResponse {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const ConfirmSessionRequestJSON = {
  /**
   * Serializes ConfirmSessionRequest to JSON.
   */
  encode: function (_msg?: PartialDeep<ConfirmSessionRequest>): string {
    return "{}";
  },

  /**
   * Deserializes ConfirmSessionRequest from JSON.
   */
  decode: function (_json?: string): ConfirmSessionRequest {
    return {};
  },

  /**
   * Initializes ConfirmSessionRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmSessionRequest>,
  ): ConfirmSessionRequest {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<ConfirmSessionRequest>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ConfirmSessionRequest,
    _json: any,
  ): ConfirmSessionRequest {
    return msg;
  },
};

export const ConfirmSessionResponseJSON = {
  /**
   * Serializes ConfirmSessionResponse to JSON.
   */
  encode: function (_msg?: PartialDeep<ConfirmSessionResponse>): string {
    return "{}";
  },

  /**
   * Deserializes ConfirmSessionResponse from JSON.
   */
  decode: function (_json?: string): ConfirmSessionResponse {
    return {};
  },

  /**
   * Initializes ConfirmSessionResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<ConfirmSessionResponse>,
  ): ConfirmSessionResponse {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<ConfirmSessionResponse>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: ConfirmSessionResponse,
    _json: any,
  ): ConfirmSessionResponse {
    return msg;
  },
};

export const CancelBookingRequestJSON = {
  /**
   * Serializes CancelBookingRequest to JSON.
   */
  encode: function (msg: PartialDeep<CancelBookingRequest>): string {
    return JSON.stringify(CancelBookingRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes CancelBookingRequest from JSON.
   */
  decode: function (json: string): CancelBookingRequest {
    return CancelBookingRequestJSON._readMessage(
      CancelBookingRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CancelBookingRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CancelBookingRequest>,
  ): CancelBookingRequest {
    return {
      class: "",
      user: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CancelBookingRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.class) {
      json["class"] = msg.class;
    }
    if (msg.user) {
      json["user"] = msg.user;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CancelBookingRequest,
    json: any,
  ): CancelBookingRequest {
    const _class_ = json["class"];
    if (_class_) {
      msg.class = _class_;
    }
    const _user_ = json["user"];
    if (_user_) {
      msg.user = _user_;
    }
    return msg;
  },
};

export const CancelBookingResponseJSON = {
  /**
   * Serializes CancelBookingResponse to JSON.
   */
  encode: function (msg: PartialDeep<CancelBookingResponse>): string {
    return JSON.stringify(CancelBookingResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes CancelBookingResponse from JSON.
   */
  decode: function (json: string): CancelBookingResponse {
    return CancelBookingResponseJSON._readMessage(
      CancelBookingResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CancelBookingResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CancelBookingResponse>,
  ): CancelBookingResponse {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CancelBookingResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.success) {
      json["success"] = msg.success;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CancelBookingResponse,
    json: any,
  ): CancelBookingResponse {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};