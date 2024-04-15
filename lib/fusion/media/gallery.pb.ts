// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: media/gallery.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";

import * as mediaObject from "./object.pb";

//========================================//
//                 Types                  //
//========================================//

export interface Gallery {
  thumbnail: mediaObject.Object;
  images: mediaObject.Object[];
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Gallery = {
  /**
   * Serializes Gallery to protobuf.
   */
  encode: function (msg: PartialDeep<Gallery>): Uint8Array {
    return Gallery._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes Gallery from protobuf.
   */
  decode: function (bytes: ByteSource): Gallery {
    return Gallery._readMessage(
      Gallery.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes Gallery with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Gallery>): Gallery {
    return {
      thumbnail: mediaObject.Object.initialize(),
      images: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<Gallery>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.thumbnail) {
      writer.writeMessage(3, msg.thumbnail, mediaObject.Object._writeMessage);
    }
    if (msg.images?.length) {
      writer.writeRepeatedMessage(
        4,
        msg.images as any,
        mediaObject.Object._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: Gallery,
    reader: protoscript.BinaryReader,
  ): Gallery {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 3: {
          reader.readMessage(msg.thumbnail, mediaObject.Object._readMessage);
          break;
        }
        case 4: {
          const m = mediaObject.Object.initialize();
          reader.readMessage(m, mediaObject.Object._readMessage);
          msg.images.push(m);
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

export const GalleryJSON = {
  /**
   * Serializes Gallery to JSON.
   */
  encode: function (msg: PartialDeep<Gallery>): string {
    return JSON.stringify(GalleryJSON._writeMessage(msg));
  },

  /**
   * Deserializes Gallery from JSON.
   */
  decode: function (json: string): Gallery {
    return GalleryJSON._readMessage(GalleryJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes Gallery with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Gallery>): Gallery {
    return {
      thumbnail: mediaObject.ObjectJSON.initialize(),
      images: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<Gallery>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.thumbnail) {
      const _thumbnail_ = mediaObject.ObjectJSON._writeMessage(msg.thumbnail);
      if (Object.keys(_thumbnail_).length > 0) {
        json["thumbnail"] = _thumbnail_;
      }
    }
    if (msg.images?.length) {
      json["images"] = msg.images.map(mediaObject.ObjectJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: Gallery, json: any): Gallery {
    const _thumbnail_ = json["thumbnail"];
    if (_thumbnail_) {
      mediaObject.ObjectJSON._readMessage(msg.thumbnail, _thumbnail_);
    }
    const _images_ = json["images"];
    if (_images_) {
      for (const item of _images_) {
        const m = mediaObject.ObjectJSON.initialize();
        mediaObject.ObjectJSON._readMessage(m, item);
        msg.images.push(m);
      }
    }
    return msg;
  },
};