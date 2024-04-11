// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: auth/membership.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

//========================================//
//                 Types                  //
//========================================//

export type MembershipState = "ACTIVE" | "INACTIVE" | "EXPIRED" | "OVERDUE";

export interface Membership {
  name: string;
  uid: string;
  displayName: string;
  description: string;
  price: bigint;
  state: MembershipState;
  purchasedAt: string;
  activatedAt: string;
  expiresAt: string;
  maxVisits: number;
  maxAccessCards: number;
}

export interface AccessCard {
  id: string;
  state: string;
  issuedAt: string;
  expiresAt: string;
  personId: string;
  clientId: string;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const MembershipState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  EXPIRED: "EXPIRED",
  OVERDUE: "OVERDUE",
  /**
   * @private
   */
  _fromInt: function (i: number): MembershipState {
    switch (i) {
      case 0: {
        return "ACTIVE";
      }
      case 1: {
        return "INACTIVE";
      }
      case 2: {
        return "EXPIRED";
      }
      case 3: {
        return "OVERDUE";
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as MembershipState;
      }
    }
  },
  /**
   * @private
   */
  _toInt: function (i: MembershipState): number {
    switch (i) {
      case "ACTIVE": {
        return 0;
      }
      case "INACTIVE": {
        return 1;
      }
      case "EXPIRED": {
        return 2;
      }
      case "OVERDUE": {
        return 3;
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as number;
      }
    }
  },
} as const;

export const Membership = {
  /**
   * Serializes Membership to protobuf.
   */
  encode: function (msg: PartialDeep<Membership>): Uint8Array {
    return Membership._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Membership from protobuf.
   */
  decode: function (bytes: ByteSource): Membership {
    return Membership._readMessage(
      Membership.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Membership with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Membership>): Membership {
    return {
      name: "",
      uid: "",
      displayName: "",
      description: "",
      price: 0n,
      state: MembershipState._fromInt(0),
      purchasedAt: "",
      activatedAt: "",
      expiresAt: "",
      maxVisits: 0,
      maxAccessCards: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Membership>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.uid) {
      writer.writeString(2, msg.uid);
    }
    if (msg.displayName) {
      writer.writeString(3, msg.displayName);
    }
    if (msg.description) {
      writer.writeString(4, msg.description);
    }
    if (msg.price) {
      writer.writeInt64String(5, msg.price.toString() as any);
    }
    if (msg.state && MembershipState._toInt(msg.state)) {
      writer.writeEnum(6, MembershipState._toInt(msg.state));
    }
    if (msg.purchasedAt) {
      writer.writeString(7, msg.purchasedAt);
    }
    if (msg.activatedAt) {
      writer.writeString(8, msg.activatedAt);
    }
    if (msg.expiresAt) {
      writer.writeString(9, msg.expiresAt);
    }
    if (msg.maxVisits) {
      writer.writeInt32(10, msg.maxVisits);
    }
    if (msg.maxAccessCards) {
      writer.writeInt32(11, msg.maxAccessCards);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Membership,
    reader: protoscript.BinaryReader,
  ): Membership {
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
          msg.displayName = reader.readString();
          break;
        }
        case 4: {
          msg.description = reader.readString();
          break;
        }
        case 5: {
          msg.price = BigInt(reader.readInt64String());
          break;
        }
        case 6: {
          msg.state = MembershipState._fromInt(reader.readEnum());
          break;
        }
        case 7: {
          msg.purchasedAt = reader.readString();
          break;
        }
        case 8: {
          msg.activatedAt = reader.readString();
          break;
        }
        case 9: {
          msg.expiresAt = reader.readString();
          break;
        }
        case 10: {
          msg.maxVisits = reader.readInt32();
          break;
        }
        case 11: {
          msg.maxAccessCards = reader.readInt32();
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

export const AccessCard = {
  /**
   * Serializes AccessCard to protobuf.
   */
  encode: function (msg: PartialDeep<AccessCard>): Uint8Array {
    return AccessCard._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes AccessCard from protobuf.
   */
  decode: function (bytes: ByteSource): AccessCard {
    return AccessCard._readMessage(
      AccessCard.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes AccessCard with all fields set to their default value.
   */
  initialize: function (msg?: Partial<AccessCard>): AccessCard {
    return {
      id: "",
      state: "",
      issuedAt: "",
      expiresAt: "",
      personId: "",
      clientId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<AccessCard>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.state) {
      writer.writeString(2, msg.state);
    }
    if (msg.issuedAt) {
      writer.writeString(3, msg.issuedAt);
    }
    if (msg.expiresAt) {
      writer.writeString(4, msg.expiresAt);
    }
    if (msg.personId) {
      writer.writeString(5, msg.personId);
    }
    if (msg.clientId) {
      writer.writeString(6, msg.clientId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: AccessCard,
    reader: protoscript.BinaryReader,
  ): AccessCard {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.state = reader.readString();
          break;
        }
        case 3: {
          msg.issuedAt = reader.readString();
          break;
        }
        case 4: {
          msg.expiresAt = reader.readString();
          break;
        }
        case 5: {
          msg.personId = reader.readString();
          break;
        }
        case 6: {
          msg.clientId = reader.readString();
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

export const MembershipStateJSON = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  EXPIRED: "EXPIRED",
  OVERDUE: "OVERDUE",
  /**
   * @private
   */
  _fromInt: function (i: number): MembershipState {
    switch (i) {
      case 0: {
        return "ACTIVE";
      }
      case 1: {
        return "INACTIVE";
      }
      case 2: {
        return "EXPIRED";
      }
      case 3: {
        return "OVERDUE";
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as MembershipState;
      }
    }
  },
  /**
   * @private
   */
  _toInt: function (i: MembershipState): number {
    switch (i) {
      case "ACTIVE": {
        return 0;
      }
      case "INACTIVE": {
        return 1;
      }
      case "EXPIRED": {
        return 2;
      }
      case "OVERDUE": {
        return 3;
      }
      // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
      default: {
        return i as unknown as number;
      }
    }
  },
} as const;

export const MembershipJSON = {
  /**
   * Serializes Membership to JSON.
   */
  encode: function (msg: PartialDeep<Membership>): string {
    return JSON.stringify(MembershipJSON._writeMessage(msg));
  },

  /**
   * Deserializes Membership from JSON.
   */
  decode: function (json: string): Membership {
    return MembershipJSON._readMessage(
      MembershipJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes Membership with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Membership>): Membership {
    return {
      name: "",
      uid: "",
      displayName: "",
      description: "",
      price: 0n,
      state: MembershipState._fromInt(0),
      purchasedAt: "",
      activatedAt: "",
      expiresAt: "",
      maxVisits: 0,
      maxAccessCards: 0,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Membership>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.uid) {
      json["uid"] = msg.uid;
    }
    if (msg.displayName) {
      json["displayName"] = msg.displayName;
    }
    if (msg.description) {
      json["description"] = msg.description;
    }
    if (msg.price) {
      json["price"] = String(msg.price);
    }
    if (msg.state && MembershipStateJSON._toInt(msg.state)) {
      json["state"] = msg.state;
    }
    if (msg.purchasedAt) {
      json["purchasedAt"] = msg.purchasedAt;
    }
    if (msg.activatedAt) {
      json["activatedAt"] = msg.activatedAt;
    }
    if (msg.expiresAt) {
      json["expiresAt"] = msg.expiresAt;
    }
    if (msg.maxVisits) {
      json["maxVisits"] = msg.maxVisits;
    }
    if (msg.maxAccessCards) {
      json["maxAccessCards"] = msg.maxAccessCards;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Membership, json: any): Membership {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _uid_ = json["uid"];
    if (_uid_) {
      msg.uid = _uid_;
    }
    const _displayName_ = json["displayName"];
    if (_displayName_) {
      msg.displayName = _displayName_;
    }
    const _description_ = json["description"];
    if (_description_) {
      msg.description = _description_;
    }
    const _price_ = json["price"];
    if (_price_) {
      msg.price = BigInt(_price_);
    }
    const _state_ = json["state"];
    if (_state_) {
      msg.state = MembershipState._fromInt(_state_);
    }
    const _purchasedAt_ = json["purchasedAt"];
    if (_purchasedAt_) {
      msg.purchasedAt = _purchasedAt_;
    }
    const _activatedAt_ = json["activatedAt"];
    if (_activatedAt_) {
      msg.activatedAt = _activatedAt_;
    }
    const _expiresAt_ = json["expiresAt"];
    if (_expiresAt_) {
      msg.expiresAt = _expiresAt_;
    }
    const _maxVisits_ = json["maxVisits"];
    if (_maxVisits_) {
      msg.maxVisits = protoscript.parseNumber(_maxVisits_);
    }
    const _maxAccessCards_ = json["maxAccessCards"];
    if (_maxAccessCards_) {
      msg.maxAccessCards = protoscript.parseNumber(_maxAccessCards_);
    }
    return msg;
  },
};

export const AccessCardJSON = {
  /**
   * Serializes AccessCard to JSON.
   */
  encode: function (msg: PartialDeep<AccessCard>): string {
    return JSON.stringify(AccessCardJSON._writeMessage(msg));
  },

  /**
   * Deserializes AccessCard from JSON.
   */
  decode: function (json: string): AccessCard {
    return AccessCardJSON._readMessage(
      AccessCardJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes AccessCard with all fields set to their default value.
   */
  initialize: function (msg?: Partial<AccessCard>): AccessCard {
    return {
      id: "",
      state: "",
      issuedAt: "",
      expiresAt: "",
      personId: "",
      clientId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<AccessCard>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.state) {
      json["state"] = msg.state;
    }
    if (msg.issuedAt) {
      json["issuedAt"] = msg.issuedAt;
    }
    if (msg.expiresAt) {
      json["expiresAt"] = msg.expiresAt;
    }
    if (msg.personId) {
      json["personId"] = msg.personId;
    }
    if (msg.clientId) {
      json["clientId"] = msg.clientId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: AccessCard, json: any): AccessCard {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _state_ = json["state"];
    if (_state_) {
      msg.state = _state_;
    }
    const _issuedAt_ = json["issuedAt"] ?? json["issued_at"];
    if (_issuedAt_) {
      msg.issuedAt = _issuedAt_;
    }
    const _expiresAt_ = json["expiresAt"] ?? json["expires_at"];
    if (_expiresAt_) {
      msg.expiresAt = _expiresAt_;
    }
    const _personId_ = json["personId"] ?? json["person_id"];
    if (_personId_) {
      msg.personId = _personId_;
    }
    const _clientId_ = json["clientId"] ?? json["client_id"];
    if (_clientId_) {
      msg.clientId = _clientId_;
    }
    return msg;
  },
};
