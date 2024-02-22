import React from "react";
import Image from "next/image";
import gallery from "../../images/banner.webp";

export const MeetTheTeam = () => {
  return (
    <div className="bg-background py-8">
      <h1
        className={
          "py-16 text-center font-helvetica text-headings font-bold text-secondary"
        }
      >
        Meet the Team<span className="text-primary">.</span>
      </h1>

      <div className="mx-6 rounded-xl bg-[#2c3033]">
        <div className="rounded-md">
          <Image
            src={gallery}
            alt="team member"
            placeholder={"blur"}
            className="rounded-t-lg"
          />
        </div>
        <div
          className={
            "grid content-center p-5 py-8 font-helvetica sm:p-10 md:max-w-prose"
          }
        >
          <h3
            className={
              "text-start font-helvetica text-BodyText font-semibold text-textColor"
            }
          >
            Name
          </h3>
          <span className="py-2 pb-6 font-helvetica text-sm text-primary">
            Position
          </span>
          <p
            className={
              "text-start font-helvetica text-BodyText text-sm font-light text-textColor"
            }
          >
            Dummy text is text that is used in the publishing industry or by web
            designers to occupy the space which will later be filled with real
            content. This is required when, for example, the final text is not
            yet available. Dummy text is also known as fill text. It is said
            that song composers of the past used dummy texts as lyrics when
            writing melodies in order to have a ready-made text to sing with the
            melody. Dummy texts have been in use by typesetters since the 16th
            century.
          </span>
        </div>
      </div>

      <div className="mx-6 rounded-xl bg-[#2c3033]">
        <div className="rounded-md">
          <Image
            src={gallery}
            alt="team member"
            placeholder={"blur"}
            className="rounded-t-lg"
          />
        </div>
        <div
          className={
            "grid content-center p-5 py-8 font-helvetica sm:p-10 md:max-w-prose"
          }
        >
          <h3
            className={
              "text-start font-helvetica text-BodyText font-semibold text-textColor"
            }
          >
            Name
          </h3>
          <span className="py-2 pb-6 font-helvetica text-sm text-primary">
            Position
          </span>
          <p
            className={
              "text-start font-helvetica text-BodyText text-sm font-light text-textColor"
            }
          >
            Dummy text is text that is used in the publishing industry or by web
            designers to occupy the space which will later be filled with real
            content. This is required when, for example, the final text is not
            yet available. Dummy text is also known as fill text. It is said
            that song composers of the past used dummy texts as lyrics when
            writing melodies in order to have a ready-made text to sing with the
            melody. Dummy texts have been in use by typesetters since the 16th
            century.
          </span>
        </div>
      </div>
    </div>
  );
};
