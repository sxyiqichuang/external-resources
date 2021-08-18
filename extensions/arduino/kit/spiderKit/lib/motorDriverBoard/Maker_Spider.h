#ifndef __Maker_Spider_H
#define __Maker_Spider_H

#include "Emakefun_Motordriver.h"
#include "PS2X_lib.h"


class Maker_Spider
{
    public:
      Maker_Spider();
      Emakefun_MotorDriver getMakerSpiderDriver();
      void init();
      void robotReset();
      void forwardLoop(int step);
      void backLoop(int step);
      void leftLoop(int step);
      void rightLoop(int step);
      void squirmingUp();
      void pushUp();
      void wriggle();
      void lrWriggle();
      void initCwRotation();
      void cwRotation();
      void initCcwRotation();
      void ccwRotation();

      void spiderForward();
      void spiderBack();
      void spiderLeft();
      void spiderRight();


    private :
      void FTone();    //forward one
      void FTtwo();    //forward two
      void FTthree();
      void FTfour();
      void BTone();    //back one
      void BTtwo();    //back two
      void BTthree();
      void BTfour();
      void LTone();    //LEFT one
      void LTtwo();    //LEFT two
      void LTthree();
      void LTfour();
      void RTone();    //RIGHT one
      void RTtwo();    //RIGHT two
      void RTthree();
      void RTfour();
      void initAngle(int servo1Angle, int servo2Angle, int servo3Angle, int servo4Angle, int servo5Angle, int servo6Angle, int servo7Angle, int servo8Angle);
      void initAngle14(int servo1Angle, int servo2Angle, int servo3Angle, int servo4Angle);
      void initAngle58(int servo5Angle, int servo6Angle, int servo7Angle, int servo8Angle);
};

#endif
