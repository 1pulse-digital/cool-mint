// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: workshop/tourBooking.manager.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";
import * as workshopTourBooking from "./tourBooking.pb";

//========================================//
//                 Types                  //
//========================================//

export interface BookRequest {
  time: string;
  tourist: workshopTourBooking.TourBooking.TouristDetails;
}

export interface BookResponse {
  tourTime: string;
}

export interface AvailableSlotsRequest {}

export interface AvailableSlotsResponse {
  slots: AvailableSlotsResponse.Slot[];
}

export declare namespace AvailableSlotsResponse {
  export interface Slot {
    time: string;
    available: boolean;
  }
}

//========================================//
//   TourBookingManager Protobuf Client   //
//========================================//

export async function Book(
  bookRequest: BookRequest,
  config?: ClientConfiguration,
): Promise<BookResponse> {
  const response = await PBrequest(
    "/workshop.TourBookingManager/Book",
    BookRequest.encode(bookRequest),
    config,
  );
  return BookResponse.decode(response);
}

export async function AvailableSlots(
  availableSlotsRequest: AvailableSlotsRequest,
  config?: ClientConfiguration,
): Promise<AvailableSlotsResponse> {
  const response = await PBrequest(
    "/workshop.TourBookingManager/AvailableSlots",
    AvailableSlotsRequest.encode(availableSlotsRequest),
    config,
  );
  return AvailableSlotsResponse.decode(response);
}

//========================================//
//     TourBookingManager JSON Client     //
//========================================//

export async function BookJSON(
  bookRequest: BookRequest,
  config?: ClientConfiguration,
): Promise<BookResponse> {
  const response = await JSONrequest(
    "/workshop.TourBookingManager/Book",
    BookRequestJSON.encode(bookRequest),
    config,
  );
  return BookResponseJSON.decode(response);
}

export async function AvailableSlotsJSON(
  availableSlotsRequest: AvailableSlotsRequest,
  config?: ClientConfiguration,
): Promise<AvailableSlotsResponse> {
  const response = await JSONrequest(
    "/workshop.TourBookingManager/AvailableSlots",
    AvailableSlotsRequestJSON.encode(availableSlotsRequest),
    config,
  );
  return AvailableSlotsResponseJSON.decode(response);
}

//========================================//
//           TourBookingManager           //
//========================================//

/**
 * This is a booking type for a tour of the workshop specifically
 */
export interface TourBookingManager<Context = unknown> {
  Book: (
    bookRequest: BookRequest,
    context: Context,
  ) => Promise<BookResponse> | BookResponse;
  AvailableSlots: (
    availableSlotsRequest: AvailableSlotsRequest,
    context: Context,
  ) => Promise<AvailableSlotsResponse> | AvailableSlotsResponse;
}

export function createTourBookingManager<Context>(
  service: TourBookingManager<Context>,
) {
  return {
    name: "workshop.TourBookingManager",
    methods: {
      Book: {
        name: "Book",
        handler: service.Book,
        input: { protobuf: BookRequest, json: BookRequestJSON },
        output: { protobuf: BookResponse, json: BookResponseJSON },
      },
      AvailableSlots: {
        name: "AvailableSlots",
        handler: service.AvailableSlots,
        input: {
          protobuf: AvailableSlotsRequest,
          json: AvailableSlotsRequestJSON,
        },
        output: {
          protobuf: AvailableSlotsResponse,
          json: AvailableSlotsResponseJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const BookRequest = {
  /**
   * Serializes BookRequest to protobuf.
   */
  encode: function (msg: PartialDeep<BookRequest>): Uint8Array {
    return BookRequest._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes BookRequest from protobuf.
   */
  decode: function (bytes: ByteSource): BookRequest {
    return BookRequest._readMessage(
      BookRequest.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes BookRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BookRequest>): BookRequest {
    return {
      time: "",
      tourist: workshopTourBooking.TourBooking.TouristDetails.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.time) {
      writer.writeString(1, msg.time);
    }
    if (msg.tourist) {
      writer.writeMessage(
        2,
        msg.tourist,
        workshopTourBooking.TourBooking.TouristDetails._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BookRequest,
    reader: protoscript.BinaryReader,
  ): BookRequest {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.time = reader.readString();
          break;
        }
        case 2: {
          reader.readMessage(
            msg.tourist,
            workshopTourBooking.TourBooking.TouristDetails._readMessage,
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

export const BookResponse = {
  /**
   * Serializes BookResponse to protobuf.
   */
  encode: function (msg: PartialDeep<BookResponse>): Uint8Array {
    return BookResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes BookResponse from protobuf.
   */
  decode: function (bytes: ByteSource): BookResponse {
    return BookResponse._readMessage(
      BookResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes BookResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BookResponse>): BookResponse {
    return {
      tourTime: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.tourTime) {
      writer.writeString(1, msg.tourTime);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: BookResponse,
    reader: protoscript.BinaryReader,
  ): BookResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.tourTime = reader.readString();
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

export const AvailableSlotsRequest = {
  /**
   * Serializes AvailableSlotsRequest to protobuf.
   */
  encode: function (_msg?: PartialDeep<AvailableSlotsRequest>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes AvailableSlotsRequest from protobuf.
   */
  decode: function (_bytes?: ByteSource): AvailableSlotsRequest {
    return {};
  },

  /**
   * Initializes AvailableSlotsRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<AvailableSlotsRequest>,
  ): AvailableSlotsRequest {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<AvailableSlotsRequest>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: AvailableSlotsRequest,
    _reader: protoscript.BinaryReader,
  ): AvailableSlotsRequest {
    return _msg;
  },
};

export const AvailableSlotsResponse = {
  /**
   * Serializes AvailableSlotsResponse to protobuf.
   */
  encode: function (msg: PartialDeep<AvailableSlotsResponse>): Uint8Array {
    return AvailableSlotsResponse._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes AvailableSlotsResponse from protobuf.
   */
  decode: function (bytes: ByteSource): AvailableSlotsResponse {
    return AvailableSlotsResponse._readMessage(
      AvailableSlotsResponse.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes AvailableSlotsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<AvailableSlotsResponse>,
  ): AvailableSlotsResponse {
    return {
      slots: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<AvailableSlotsResponse>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.slots?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.slots as any,
        AvailableSlotsResponse.Slot._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: AvailableSlotsResponse,
    reader: protoscript.BinaryReader,
  ): AvailableSlotsResponse {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = AvailableSlotsResponse.Slot.initialize();
          reader.readMessage(m, AvailableSlotsResponse.Slot._readMessage);
          msg.slots.push(m);
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

  Slot: {
    /**
     * Serializes AvailableSlotsResponse.Slot to protobuf.
     */
    encode: function (
      msg: PartialDeep<AvailableSlotsResponse.Slot>,
    ): Uint8Array {
      return AvailableSlotsResponse.Slot._writeMessage(
        msg,
        new protoscript.BinaryWriter(),
      ).getResultBuffer();
    },

    /**
     * Deserializes AvailableSlotsResponse.Slot from protobuf.
     */
    decode: function (bytes: ByteSource): AvailableSlotsResponse.Slot {
      return AvailableSlotsResponse.Slot._readMessage(
        AvailableSlotsResponse.Slot.initialize(),
        new protoscript.BinaryReader(bytes),
      );
    },

    /**
     * Initializes AvailableSlotsResponse.Slot with all fields set to their default value.
     */
    initialize: function (
      msg?: Partial<AvailableSlotsResponse.Slot>,
    ): AvailableSlotsResponse.Slot {
      return {
        time: "",
        available: false,
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<AvailableSlotsResponse.Slot>,
      writer: protoscript.BinaryWriter,
    ): protoscript.BinaryWriter {
      if (msg.time) {
        writer.writeString(1, msg.time);
      }
      if (msg.available) {
        writer.writeBool(2, msg.available);
      }
      return writer;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: AvailableSlotsResponse.Slot,
      reader: protoscript.BinaryReader,
    ): AvailableSlotsResponse.Slot {
      while (reader.nextField()) {
        const field = reader.getFieldNumber();
        switch (field) {
          case 1: {
            msg.time = reader.readString();
            break;
          }
          case 2: {
            msg.available = reader.readBool();
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
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const BookRequestJSON = {
  /**
   * Serializes BookRequest to JSON.
   */
  encode: function (msg: PartialDeep<BookRequest>): string {
    return JSON.stringify(BookRequestJSON._writeMessage(msg));
  },

  /**
   * Deserializes BookRequest from JSON.
   */
  decode: function (json: string): BookRequest {
    return BookRequestJSON._readMessage(
      BookRequestJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes BookRequest with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BookRequest>): BookRequest {
    return {
      time: "",
      tourist: workshopTourBooking.TourBookingJSON.TouristDetails.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookRequest>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.time) {
      json["time"] = msg.time;
    }
    if (msg.tourist) {
      const _tourist_ =
        workshopTourBooking.TourBookingJSON.TouristDetails._writeMessage(
          msg.tourist,
        );
      if (Object.keys(_tourist_).length > 0) {
        json["tourist"] = _tourist_;
      }
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: BookRequest, json: any): BookRequest {
    const _time_ = json["time"];
    if (_time_) {
      msg.time = _time_;
    }
    const _tourist_ = json["tourist"];
    if (_tourist_) {
      workshopTourBooking.TourBookingJSON.TouristDetails._readMessage(
        msg.tourist,
        _tourist_,
      );
    }
    return msg;
  },
};

export const BookResponseJSON = {
  /**
   * Serializes BookResponse to JSON.
   */
  encode: function (msg: PartialDeep<BookResponse>): string {
    return JSON.stringify(BookResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes BookResponse from JSON.
   */
  decode: function (json: string): BookResponse {
    return BookResponseJSON._readMessage(
      BookResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes BookResponse with all fields set to their default value.
   */
  initialize: function (msg?: Partial<BookResponse>): BookResponse {
    return {
      tourTime: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<BookResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.tourTime) {
      json["tourTime"] = msg.tourTime;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: BookResponse, json: any): BookResponse {
    const _tourTime_ = json["tourTime"];
    if (_tourTime_) {
      msg.tourTime = _tourTime_;
    }
    return msg;
  },
};

export const AvailableSlotsRequestJSON = {
  /**
   * Serializes AvailableSlotsRequest to JSON.
   */
  encode: function (_msg?: PartialDeep<AvailableSlotsRequest>): string {
    return "{}";
  },

  /**
   * Deserializes AvailableSlotsRequest from JSON.
   */
  decode: function (_json?: string): AvailableSlotsRequest {
    return {};
  },

  /**
   * Initializes AvailableSlotsRequest with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<AvailableSlotsRequest>,
  ): AvailableSlotsRequest {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<AvailableSlotsRequest>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: AvailableSlotsRequest,
    _json: any,
  ): AvailableSlotsRequest {
    return msg;
  },
};

export const AvailableSlotsResponseJSON = {
  /**
   * Serializes AvailableSlotsResponse to JSON.
   */
  encode: function (msg: PartialDeep<AvailableSlotsResponse>): string {
    return JSON.stringify(AvailableSlotsResponseJSON._writeMessage(msg));
  },

  /**
   * Deserializes AvailableSlotsResponse from JSON.
   */
  decode: function (json: string): AvailableSlotsResponse {
    return AvailableSlotsResponseJSON._readMessage(
      AvailableSlotsResponseJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes AvailableSlotsResponse with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<AvailableSlotsResponse>,
  ): AvailableSlotsResponse {
    return {
      slots: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<AvailableSlotsResponse>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.slots?.length) {
      json["slots"] = msg.slots.map(
        AvailableSlotsResponseJSON.Slot._writeMessage,
      );
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: AvailableSlotsResponse,
    json: any,
  ): AvailableSlotsResponse {
    const _slots_ = json["slots"];
    if (_slots_) {
      for (const item of _slots_) {
        const m = AvailableSlotsResponseJSON.Slot.initialize();
        AvailableSlotsResponseJSON.Slot._readMessage(m, item);
        msg.slots.push(m);
      }
    }
    return msg;
  },

  Slot: {
    /**
     * Serializes AvailableSlotsResponse.Slot to JSON.
     */
    encode: function (msg: PartialDeep<AvailableSlotsResponse.Slot>): string {
      return JSON.stringify(AvailableSlotsResponseJSON.Slot._writeMessage(msg));
    },

    /**
     * Deserializes AvailableSlotsResponse.Slot from JSON.
     */
    decode: function (json: string): AvailableSlotsResponse.Slot {
      return AvailableSlotsResponseJSON.Slot._readMessage(
        AvailableSlotsResponseJSON.Slot.initialize(),
        JSON.parse(json),
      );
    },

    /**
     * Initializes AvailableSlotsResponse.Slot with all fields set to their default value.
     */
    initialize: function (
      msg?: Partial<AvailableSlotsResponse.Slot>,
    ): AvailableSlotsResponse.Slot {
      return {
        time: "",
        available: false,
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<AvailableSlotsResponse.Slot>,
    ): Record<string, unknown> {
      const json: Record<string, unknown> = {};
      if (msg.time) {
        json["time"] = msg.time;
      }
      if (msg.available) {
        json["available"] = msg.available;
      }
      return json;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: AvailableSlotsResponse.Slot,
      json: any,
    ): AvailableSlotsResponse.Slot {
      const _time_ = json["time"];
      if (_time_) {
        msg.time = _time_;
      }
      const _available_ = json["available"];
      if (_available_) {
        msg.available = _available_;
      }
      return msg;
    },
  },
};
