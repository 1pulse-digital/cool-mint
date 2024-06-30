// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: workshop/tourBooking.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as auditEntry from "../audit/entry.pb";

//========================================//
//                 Types                  //
//========================================//

/**
 * This is a booking type for a tour of the workshop specifically
 */
export interface TourBooking {
  name: string;
  uid: string;
  auditEntry: auditEntry.Entry;
  time: string;
  duration: number;
  status: TourBooking.Status;
  tourist: TourBooking.TouristDetails;
}

export declare namespace TourBooking {
  export type Status =
    | "BOOKING_STATUS_UNSPECIFIED"
    | "CONFIRMED"
    | "PENDING"
    | "CANCELLED"
    | "REJECTED"
    | "COMPLETED";

  export interface TouristDetails {
    /**
     * First Name + Last Name
     */
    displayName: string;
    /**
     * Email address
     */
    email: string;
    /**
     * Phone number of the tourist
     */
    phone: string;
    /**
     * The fields a tourist is interested in
     */
    interests: string[];
  }
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const TourBooking = {
  /**
   * Serializes TourBooking to protobuf.
   */
  encode: function (msg: PartialDeep<TourBooking>): Uint8Array {
    return TourBooking._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes TourBooking from protobuf.
   */
  decode: function (bytes: ByteSource): TourBooking {
    return TourBooking._readMessage(
      TourBooking.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes TourBooking with all fields set to their default value.
   */
  initialize: function (msg?: Partial<TourBooking>): TourBooking {
    return {
      name: "",
      uid: "",
      auditEntry: auditEntry.Entry.initialize(),
      time: "",
      duration: 0,
      status: TourBooking.Status._fromInt(0),
      tourist: TourBooking.TouristDetails.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<TourBooking>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.auditEntry) {
      writer.writeMessage(3, msg.auditEntry, auditEntry.Entry._writeMessage);
    }
    if (msg.time) {
      writer.writeString(4, msg.time);
    }
    if (msg.duration) {
      writer.writeInt32(5, msg.duration);
    }
    if (msg.status && TourBooking.Status._toInt(msg.status)) {
      writer.writeEnum(6, TourBooking.Status._toInt(msg.status));
    }
    if (msg.tourist) {
      writer.writeMessage(
        7,
        msg.tourist,
        TourBooking.TouristDetails._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: TourBooking,
    reader: protoscript.BinaryReader,
  ): TourBooking {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        case 2: {
          msg.uid = reader.readString();
          break;
        }
        case 3: {
          reader.readMessage(msg.auditEntry, auditEntry.Entry._readMessage);
          break;
        }
        case 4: {
          msg.time = reader.readString();
          break;
        }
        case 5: {
          msg.duration = reader.readInt32();
          break;
        }
        case 6: {
          msg.status = TourBooking.Status._fromInt(reader.readEnum());
          break;
        }
        case 7: {
          reader.readMessage(
            msg.tourist,
            TourBooking.TouristDetails._readMessage,
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

  Status: {
    /**
     * Unspecified status
     */
    BOOKING_STATUS_UNSPECIFIED: "BOOKING_STATUS_UNSPECIFIED",
    /**
     * The booking is confirmed
     */
    CONFIRMED: "CONFIRMED",
    /**
     * The booking is pending
     */
    PENDING: "PENDING",
    /**
     * The booking is cancelled
     */
    CANCELLED: "CANCELLED",
    /**
     * The booking is rejected
     */
    REJECTED: "REJECTED",
    /**
     * The booking is completed
     */
    COMPLETED: "COMPLETED",
    /**
     * @private
     */
    _fromInt: function (i: number): TourBooking.Status {
      switch (i) {
        case 0: {
          return "BOOKING_STATUS_UNSPECIFIED";
        }
        case 1: {
          return "CONFIRMED";
        }
        case 2: {
          return "PENDING";
        }
        case 3: {
          return "CANCELLED";
        }
        case 4: {
          return "REJECTED";
        }
        case 5: {
          return "COMPLETED";
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as TourBooking.Status;
        }
      }
    },
    /**
     * @private
     */
    _toInt: function (i: TourBooking.Status): number {
      switch (i) {
        case "BOOKING_STATUS_UNSPECIFIED": {
          return 0;
        }
        case "CONFIRMED": {
          return 1;
        }
        case "PENDING": {
          return 2;
        }
        case "CANCELLED": {
          return 3;
        }
        case "REJECTED": {
          return 4;
        }
        case "COMPLETED": {
          return 5;
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as number;
        }
      }
    },
  } as const,

  TouristDetails: {
    /**
     * Serializes TourBooking.TouristDetails to protobuf.
     */
    encode: function (
      msg: PartialDeep<TourBooking.TouristDetails>,
    ): Uint8Array {
      return TourBooking.TouristDetails._writeMessage(
        msg,
        new protoscript.BinaryWriter(),
      ).getResultBuffer();
    },

    /**
     * Deserializes TourBooking.TouristDetails from protobuf.
     */
    decode: function (bytes: ByteSource): TourBooking.TouristDetails {
      return TourBooking.TouristDetails._readMessage(
        TourBooking.TouristDetails.initialize(),
        new protoscript.BinaryReader(bytes),
      );
    },

    /**
     * Initializes TourBooking.TouristDetails with all fields set to their default value.
     */
    initialize: function (
      msg?: Partial<TourBooking.TouristDetails>,
    ): TourBooking.TouristDetails {
      return {
        displayName: "",
        email: "",
        phone: "",
        interests: [],
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<TourBooking.TouristDetails>,
      writer: protoscript.BinaryWriter,
    ): protoscript.BinaryWriter {
      if (msg.displayName) {
        writer.writeString(1, msg.displayName);
      }
      if (msg.email) {
        writer.writeString(2, msg.email);
      }
      if (msg.phone) {
        writer.writeString(3, msg.phone);
      }
      if (msg.interests?.length) {
        writer.writeRepeatedString(4, msg.interests);
      }
      return writer;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: TourBooking.TouristDetails,
      reader: protoscript.BinaryReader,
    ): TourBooking.TouristDetails {
      while (reader.nextField()) {
        const field = reader.getFieldNumber();
        switch (field) {
          case 1: {
            msg.displayName = reader.readString();
            break;
          }
          case 2: {
            msg.email = reader.readString();
            break;
          }
          case 3: {
            msg.phone = reader.readString();
            break;
          }
          case 4: {
            msg.interests.push(reader.readString());
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

export const TourBookingJSON = {
  /**
   * Serializes TourBooking to JSON.
   */
  encode: function (msg: PartialDeep<TourBooking>): string {
    return JSON.stringify(TourBookingJSON._writeMessage(msg));
  },

  /**
   * Deserializes TourBooking from JSON.
   */
  decode: function (json: string): TourBooking {
    return TourBookingJSON._readMessage(
      TourBookingJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes TourBooking with all fields set to their default value.
   */
  initialize: function (msg?: Partial<TourBooking>): TourBooking {
    return {
      name: "",
      uid: "",
      auditEntry: auditEntry.EntryJSON.initialize(),
      time: "",
      duration: 0,
      status: TourBooking.Status._fromInt(0),
      tourist: TourBookingJSON.TouristDetails.initialize(),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<TourBooking>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.auditEntry) {
      const _auditEntry_ = auditEntry.EntryJSON._writeMessage(msg.auditEntry);
      if (Object.keys(_auditEntry_).length > 0) {
        json["auditEntry"] = _auditEntry_;
      }
    }
    if (msg.time) {
      json["time"] = msg.time;
    }
    if (msg.duration) {
      json["duration"] = msg.duration;
    }
    if (msg.status && TourBookingJSON.Status._toInt(msg.status)) {
      json["status"] = msg.status;
    }
    if (msg.tourist) {
      const _tourist_ = TourBookingJSON.TouristDetails._writeMessage(
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
  _readMessage: function (msg: TourBooking, json: any): TourBooking {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _auditEntry_ = json["auditEntry"];
    if (_auditEntry_) {
      auditEntry.EntryJSON._readMessage(msg.auditEntry, _auditEntry_);
    }
    const _time_ = json["time"];
    if (_time_) {
      msg.time = _time_;
    }
    const _duration_ = json["duration"];
    if (_duration_) {
      msg.duration = protoscript.parseNumber(_duration_);
    }
    const _status_ = json["status"];
    if (_status_) {
      msg.status = TourBooking.Status._fromInt(_status_);
    }
    const _tourist_ = json["tourist"];
    if (_tourist_) {
      TourBookingJSON.TouristDetails._readMessage(msg.tourist, _tourist_);
    }
    return msg;
  },

  Status: {
    /**
     * Unspecified status
     */
    BOOKING_STATUS_UNSPECIFIED: "BOOKING_STATUS_UNSPECIFIED",
    /**
     * The booking is confirmed
     */
    CONFIRMED: "CONFIRMED",
    /**
     * The booking is pending
     */
    PENDING: "PENDING",
    /**
     * The booking is cancelled
     */
    CANCELLED: "CANCELLED",
    /**
     * The booking is rejected
     */
    REJECTED: "REJECTED",
    /**
     * The booking is completed
     */
    COMPLETED: "COMPLETED",
    /**
     * @private
     */
    _fromInt: function (i: number): TourBooking.Status {
      switch (i) {
        case 0: {
          return "BOOKING_STATUS_UNSPECIFIED";
        }
        case 1: {
          return "CONFIRMED";
        }
        case 2: {
          return "PENDING";
        }
        case 3: {
          return "CANCELLED";
        }
        case 4: {
          return "REJECTED";
        }
        case 5: {
          return "COMPLETED";
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as TourBooking.Status;
        }
      }
    },
    /**
     * @private
     */
    _toInt: function (i: TourBooking.Status): number {
      switch (i) {
        case "BOOKING_STATUS_UNSPECIFIED": {
          return 0;
        }
        case "CONFIRMED": {
          return 1;
        }
        case "PENDING": {
          return 2;
        }
        case "CANCELLED": {
          return 3;
        }
        case "REJECTED": {
          return 4;
        }
        case "COMPLETED": {
          return 5;
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as number;
        }
      }
    },
  } as const,

  TouristDetails: {
    /**
     * Serializes TourBooking.TouristDetails to JSON.
     */
    encode: function (msg: PartialDeep<TourBooking.TouristDetails>): string {
      return JSON.stringify(TourBookingJSON.TouristDetails._writeMessage(msg));
    },

    /**
     * Deserializes TourBooking.TouristDetails from JSON.
     */
    decode: function (json: string): TourBooking.TouristDetails {
      return TourBookingJSON.TouristDetails._readMessage(
        TourBookingJSON.TouristDetails.initialize(),
        JSON.parse(json),
      );
    },

    /**
     * Initializes TourBooking.TouristDetails with all fields set to their default value.
     */
    initialize: function (
      msg?: Partial<TourBooking.TouristDetails>,
    ): TourBooking.TouristDetails {
      return {
        displayName: "",
        email: "",
        phone: "",
        interests: [],
        ...msg,
      };
    },

    /**
     * @private
     */
    _writeMessage: function (
      msg: PartialDeep<TourBooking.TouristDetails>,
    ): Record<string, unknown> {
      const json: Record<string, unknown> = {};
      if (msg.displayName) {
        json["displayName"] = msg.displayName;
      }
      if (msg.email) {
        json["email"] = msg.email;
      }
      if (msg.phone) {
        json["phone"] = msg.phone;
      }
      if (msg.interests?.length) {
        json["interests"] = msg.interests;
      }
      return json;
    },

    /**
     * @private
     */
    _readMessage: function (
      msg: TourBooking.TouristDetails,
      json: any,
    ): TourBooking.TouristDetails {
      const _displayName_ = json["displayName"];
      if (_displayName_) {
        msg.displayName = _displayName_;
      }
      const _email_ = json["email"];
      if (_email_) {
        msg.email = _email_;
      }
      const _phone_ = json["phone"];
      if (_phone_) {
        msg.phone = _phone_;
      }
      const _interests_ = json["interests"];
      if (_interests_) {
        msg.interests = _interests_;
      }
      return msg;
    },
  },
};
