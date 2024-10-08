// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: masterClass/masterClass.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as mediaGallery from "../media/gallery.pb";

//========================================//
//                 Types                  //
//========================================//

export interface MasterClass {
  name: string;
  uid: string;
  /**
   * DisplayName is the name of the master class
   */
  displayName: string;
  /**
   * StandardPrice is the standard price of the master class (When no discount is applied)
   */
  standardPrice: bigint;
  salePrice: bigint;
  /**
   * Duration of a session in minutes
   */
  duration: number;
  /**
   * Presenter of the session
   */
  presenter: string;
  /**
   * MaxAttendees is the maximum number of attendees allowed in a session
   */
  maxAttendees: number;
  /**
   * Description summarise what the class is about in max 200 characters
   */
  description: string;
  /**
   * ShortDescription summarise what the class is about in 80 characters
   */
  shortDescription: string;
  /**
   * Tags are a list of tags that can be used to filter the master class
   * e.g. [ "woodwork", "metalwork", "engineering" ]
   */
  tags: string[];
  gallery: mediaGallery.Gallery;
  /**
   * Difficulty rating of the master class
   */
  difficulty: MasterClass.Difficulty;
}

export declare namespace MasterClass {
  export type Difficulty =
    | "UNSPECIFIED"
    | "BEGINNER"
    | "INTERMEDIATE"
    | "ADVANCED";
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const MasterClass = {
  /**
   * Serializes MasterClass to protobuf.
   */
  encode: function (msg: PartialDeep<MasterClass>): Uint8Array {
    return MasterClass._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes MasterClass from protobuf.
   */
  decode: function (bytes: ByteSource): MasterClass {
    return MasterClass._readMessage(
      MasterClass.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes MasterClass with all fields set to their default value.
   */
  initialize: function (msg?: Partial<MasterClass>): MasterClass {
    return {
      name: "",
      uid: "",
      displayName: "",
      standardPrice: 0n,
      salePrice: 0n,
      duration: 0,
      presenter: "",
      maxAttendees: 0,
      description: "",
      shortDescription: "",
      tags: [],
      gallery: mediaGallery.Gallery.initialize(),
      difficulty: MasterClass.Difficulty._fromInt(0),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<MasterClass>,
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
    if (msg.standardPrice) {
      writer.writeInt64String(4, msg.standardPrice.toString() as any);
    }
    if (msg.salePrice) {
      writer.writeInt64String(5, msg.salePrice.toString() as any);
    }
    if (msg.duration) {
      writer.writeInt32(6, msg.duration);
    }
    if (msg.presenter) {
      writer.writeString(7, msg.presenter);
    }
    if (msg.maxAttendees) {
      writer.writeInt32(8, msg.maxAttendees);
    }
    if (msg.description) {
      writer.writeString(9, msg.description);
    }
    if (msg.shortDescription) {
      writer.writeString(10, msg.shortDescription);
    }
    if (msg.tags?.length) {
      writer.writeRepeatedString(11, msg.tags);
    }
    if (msg.gallery) {
      writer.writeMessage(12, msg.gallery, mediaGallery.Gallery._writeMessage);
    }
    if (msg.difficulty && MasterClass.Difficulty._toInt(msg.difficulty)) {
      writer.writeEnum(13, MasterClass.Difficulty._toInt(msg.difficulty));
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: MasterClass,
    reader: protoscript.BinaryReader,
  ): MasterClass {
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
          msg.standardPrice = BigInt(reader.readInt64String());
          break;
        }
        case 5: {
          msg.salePrice = BigInt(reader.readInt64String());
          break;
        }
        case 6: {
          msg.duration = reader.readInt32();
          break;
        }
        case 7: {
          msg.presenter = reader.readString();
          break;
        }
        case 8: {
          msg.maxAttendees = reader.readInt32();
          break;
        }
        case 9: {
          msg.description = reader.readString();
          break;
        }
        case 10: {
          msg.shortDescription = reader.readString();
          break;
        }
        case 11: {
          msg.tags.push(reader.readString());
          break;
        }
        case 12: {
          reader.readMessage(msg.gallery, mediaGallery.Gallery._readMessage);
          break;
        }
        case 13: {
          msg.difficulty = MasterClass.Difficulty._fromInt(reader.readEnum());
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

  Difficulty: {
    UNSPECIFIED: "UNSPECIFIED",
    BEGINNER: "BEGINNER",
    INTERMEDIATE: "INTERMEDIATE",
    ADVANCED: "ADVANCED",
    /**
     * @private
     */
    _fromInt: function (i: number): MasterClass.Difficulty {
      switch (i) {
        case 0: {
          return "UNSPECIFIED";
        }
        case 1: {
          return "BEGINNER";
        }
        case 2: {
          return "INTERMEDIATE";
        }
        case 3: {
          return "ADVANCED";
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as MasterClass.Difficulty;
        }
      }
    },
    /**
     * @private
     */
    _toInt: function (i: MasterClass.Difficulty): number {
      switch (i) {
        case "UNSPECIFIED": {
          return 0;
        }
        case "BEGINNER": {
          return 1;
        }
        case "INTERMEDIATE": {
          return 2;
        }
        case "ADVANCED": {
          return 3;
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as number;
        }
      }
    },
  } as const,
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const MasterClassJSON = {
  /**
   * Serializes MasterClass to JSON.
   */
  encode: function (msg: PartialDeep<MasterClass>): string {
    return JSON.stringify(MasterClassJSON._writeMessage(msg));
  },

  /**
   * Deserializes MasterClass from JSON.
   */
  decode: function (json: string): MasterClass {
    return MasterClassJSON._readMessage(
      MasterClassJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes MasterClass with all fields set to their default value.
   */
  initialize: function (msg?: Partial<MasterClass>): MasterClass {
    return {
      name: "",
      uid: "",
      displayName: "",
      standardPrice: 0n,
      salePrice: 0n,
      duration: 0,
      presenter: "",
      maxAttendees: 0,
      description: "",
      shortDescription: "",
      tags: [],
      gallery: mediaGallery.GalleryJSON.initialize(),
      difficulty: MasterClass.Difficulty._fromInt(0),
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<MasterClass>,
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
    if (msg.standardPrice) {
      json["standardPrice"] = String(msg.standardPrice);
    }
    if (msg.salePrice) {
      json["salePrice"] = String(msg.salePrice);
    }
    if (msg.duration) {
      json["duration"] = msg.duration;
    }
    if (msg.presenter) {
      json["presenter"] = msg.presenter;
    }
    if (msg.maxAttendees) {
      json["maxAttendees"] = msg.maxAttendees;
    }
    if (msg.description) {
      json["description"] = msg.description;
    }
    if (msg.shortDescription) {
      json["shortDescription"] = msg.shortDescription;
    }
    if (msg.tags?.length) {
      json["tags"] = msg.tags;
    }
    if (msg.gallery) {
      const _gallery_ = mediaGallery.GalleryJSON._writeMessage(msg.gallery);
      if (Object.keys(_gallery_).length > 0) {
        json["gallery"] = _gallery_;
      }
    }
    if (msg.difficulty && MasterClassJSON.Difficulty._toInt(msg.difficulty)) {
      json["difficulty"] = msg.difficulty;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: MasterClass, json: any): MasterClass {
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
    const _standardPrice_ = json["standardPrice"];
    if (_standardPrice_) {
      msg.standardPrice = BigInt(_standardPrice_);
    }
    const _salePrice_ = json["salePrice"];
    if (_salePrice_) {
      msg.salePrice = BigInt(_salePrice_);
    }
    const _duration_ = json["duration"];
    if (_duration_) {
      msg.duration = protoscript.parseNumber(_duration_);
    }
    const _presenter_ = json["presenter"];
    if (_presenter_) {
      msg.presenter = _presenter_;
    }
    const _maxAttendees_ = json["maxAttendees"];
    if (_maxAttendees_) {
      msg.maxAttendees = protoscript.parseNumber(_maxAttendees_);
    }
    const _description_ = json["description"];
    if (_description_) {
      msg.description = _description_;
    }
    const _shortDescription_ = json["shortDescription"];
    if (_shortDescription_) {
      msg.shortDescription = _shortDescription_;
    }
    const _tags_ = json["tags"];
    if (_tags_) {
      msg.tags = _tags_;
    }
    const _gallery_ = json["gallery"];
    if (_gallery_) {
      mediaGallery.GalleryJSON._readMessage(msg.gallery, _gallery_);
    }
    const _difficulty_ = json["difficulty"];
    if (_difficulty_) {
      msg.difficulty = MasterClass.Difficulty._fromInt(_difficulty_);
    }
    return msg;
  },

  Difficulty: {
    UNSPECIFIED: "UNSPECIFIED",
    BEGINNER: "BEGINNER",
    INTERMEDIATE: "INTERMEDIATE",
    ADVANCED: "ADVANCED",
    /**
     * @private
     */
    _fromInt: function (i: number): MasterClass.Difficulty {
      switch (i) {
        case 0: {
          return "UNSPECIFIED";
        }
        case 1: {
          return "BEGINNER";
        }
        case 2: {
          return "INTERMEDIATE";
        }
        case 3: {
          return "ADVANCED";
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as MasterClass.Difficulty;
        }
      }
    },
    /**
     * @private
     */
    _toInt: function (i: MasterClass.Difficulty): number {
      switch (i) {
        case "UNSPECIFIED": {
          return 0;
        }
        case "BEGINNER": {
          return 1;
        }
        case "INTERMEDIATE": {
          return 2;
        }
        case "ADVANCED": {
          return 3;
        }
        // unknown values are preserved as numbers. this occurs when new enum values are introduced and the generated code is out of date.
        default: {
          return i as unknown as number;
        }
      }
    },
  } as const,
};
