---
title: F@*k the Arduino
description: At the end of every month, Henry Levine’s mother would go to Benmore Gardens shopping centre to get her groceries. She’d fill her shopping trolley, pay, and then push the trolley to her 18-wheeler fully articulated Mercedes-Benz lorry, where she’d proceed to unload the groceries into the back of the trailer. The car guard would guide her out of the parking bay and into Grayston Drive, and she would be on her way.
date: November 27, 2019
author: Henry Levine
imageUrl: /icons/F@*k the Arduino.png
categories: News
filter: news
---

At the end of every month, Henry Levine’s mother would go to Benmore Gardens shopping centre to get her groceries. She’d fill her shopping trolley, pay, and then push the trolley to her 18-wheeler fully articulated Mercedes-Benz lorry, where she’d proceed to unload the groceries into the back of the trailer. The car guard would guide her out of the parking bay and into Grayston Drive, and she would be on her way.
<br/><br/>
Although the truck was very spacious, her Toyota Corolla would’ve done the job just as well – without all the difficult manoeuvring and giving the car guard palpitations.
<br/><br/>
You may ask: what has Henry’s mom got to do with an <span className="text-primary"> <a href= "https://learn.sparkfun.com/tutorials/what-is-an-arduino/all" target="_blank">Arduino</a> </span>, and why must said Arduino be f@\*ked?
<br/><br/>
Well, the same idea applies to electrical engineering and, particularly, software-based micro-controllers – which is essentially what an Arduino is. Like Henry’s mom’s Mercedes truck, there are times when an Arduino – even though it’s amazing and open source and perfect for those who are new to electronics – ends up creating over-complicated solutions, when a much simpler solution would be just as effective. Like the Corolla.
<br/><br/>

<img src="/icons/image-1.webp" alt="F@*k the Arduino" style="width: 100%; height: 100%;" />

<br/><br/>
“I love the Arduino. It’s one of my favourite micro-controllers around. My only gripe is that people are forgetting the basics and using this very powerful, very flexible platform to do the simplest things when it’s completely unnecessary,” says Henry.
<br/><br/>
An Arduino is a small, simple open-source computer that is function-specific – it’s often used for building electronics projects. Arduino boards are able to be programmed to do pretty much anything from turning on a light when it senses that a microwave door is open, to scanning your fingerprint to unlock a door. An Arduino is a programmer’s and electrical engineer’s dream cheat sheet to getting something done in half the time and at a fraction of the price.
<br/><br/>
All you have to do is buy an Arduino board and buy a program which wires up to the switch. Then you’d write a simple program using code (a simplified version of C++) to tell the Arduino exactly what you want it to do. An Arduino doesn’t need a separate piece of hardware to load new code onto the board – you just need a USB cable.
<br/><br/>
So if an Arduino is so flexible, powerful, and inexpensive, how is it that they are making projects so unnecessarily complicated?
<br/><br/>

<img src="/icons/image-2.webp" alt="F@*k the Arduino" style="width: 100%; height: 100%;" />

<br/><br/>
Let’s use an example that we can all relate to (this one doesn’t involve Henry’s mom or a car guard): automatic hands-free taps in public restrooms. You place your hands underneath the tap and the tap automatically turns on. Likewise, it turns off when you remove your hands. An infrared sensor picks up your hand in front of it and a signal is triggered. In theory, you could:
<br/><br/>

- Use an Arduino to detect the signal on one of the digital pins and use a simple “if/else” coding statement to either open or close the electronic water valve. The valve may need to be triggered with an external voltage source through a relay.<br/><br/>
  OR
  <br/><br/>

- Couple the signal wire of the infrared sensor to the trigger pin of the relay, and the water valve would be connected between the common and normally open pin of the relay. By placing your hands under the sensor, it would trigger the relay and open the water valve. By moving your hands away, the sensor would trigger the relay to change and the valve would close.
  “Both of these solutions would work, of course, but a typical public bathroom has at least five taps and, if you were to go the Arduino route, you’d have to purchase and program one for each tap. But if you go back to basics and use a relay, it’s a simpler and cheaper way of doing the same thing.”
  <br/><br/>
  “Often established electro-mechanical solutions are better than a computer or microcontroller-based ones,” Henry adds.
  <br/><br/>
  “I have great respect for the people who develop, maintain and manufacture the Arduino microcontrollers and I certainly don’t wish to anger the Arduino gods. I simply want to remind all the die-hard Makers out there that a microcontroller-based solution is not always the best,” says Henry.
  <br/><br/>

<img src="/icons/image-4.webp" alt="F@*k the Arduino" style="width: 100%; height: 100%;" />

<br/><br/>
“I’ve seen people use an Arduino for things that do work but are very impractical,” he adds.
<br/><br/>
“So, no, actually… f@\*k the Arduino – there are simpler ways and we’re forgetting the basics.”
<br/><br/>
Want to get back to basics? Find out more about Made In Workshop; contact them on 087 701 4156, or pop by and take a look around at 65 Maria Street, Fontainebleau.
