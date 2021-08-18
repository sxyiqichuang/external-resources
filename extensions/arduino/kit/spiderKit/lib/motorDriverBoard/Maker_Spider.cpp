#include "Maker_Spider.h"

/**
*
* init servo
*
**/
Emakefun_MotorDriver makerSpiderDriver = Emakefun_MotorDriver(0x60, 5);
Emakefun_Servo *servo1 = makerSpiderDriver.getServo(1);
Emakefun_Servo *servo2 = makerSpiderDriver.getServo(2);
Emakefun_Servo *servo3 = makerSpiderDriver.getServo(3);
Emakefun_Servo *servo4 = makerSpiderDriver.getServo(4);
Emakefun_Servo *servo5 = makerSpiderDriver.getServo(5);
Emakefun_Servo *servo6 = makerSpiderDriver.getServo(6);
Emakefun_Servo *servo7 = makerSpiderDriver.getServo(7);
Emakefun_Servo *servo8 = makerSpiderDriver.getServo(8);

float  Q = 90.0, F = 90.0, E = 90.0, W = 90.0, D = 30.0, C = 90.0, B = 30.0, A = 90.0;
float BA = 30, BB = 90, BC = 30, BD = 90, BW = 90, BE = 90, BF = 90, BQ = 90;
float LA = 0, LB = 60, LC = 0, LD = 60, LW = 90, LE = 90, LF = 90, LQ = 90;

float RA = 0, RB = 60, RC = 0, RD = 60, RW = 90, RE = 90, RF =90, RQ = 90;
char T = 1, X = 1, BT = 1, BY = 1, LT = 1, LO = 1, RT = 1, N = 0, RP = 1;

float SA = 90, SB = 1, SF = 1;
float PA = 90, PB = 1, PF = 1;

float WA = 90, WB = 1, WC = 1, WD = 45, WE = 1, WF = 1;

float  LRC = 1, LRD = 45, LRE = 1;

float CWRW = 90,  CWRT = 1, CWRN = 45, CWRQ = 90, CWRX = 1, CWRY = 1;
float CCWRW = 90, CCWRT = 1, CCWRN = 45, CCWRQ = 90, CCWRX = 1, CCWRY = 1;

Maker_Spider::Maker_Spider() {
}

Emakefun_MotorDriver Maker_Spider::getMakerSpiderDriver(){
  return makerSpiderDriver;
}

void Maker_Spider::init() {
    makerSpiderDriver.begin(50);
}

void Maker_Spider::initAngle(int servo1Angle, int servo2Angle, int servo3Angle, int servo4Angle, int servo5Angle, int servo6Angle, int servo7Angle, int servo8Angle) {
    initAngle14(servo1Angle, servo2Angle, servo3Angle, servo4Angle);
    initAngle58(servo5Angle, servo6Angle, servo7Angle, servo8Angle);
  }

void Maker_Spider::initAngle14(int servo1Angle, int servo2Angle, int servo3Angle, int servo4Angle) {
    servo1->writeServo(servo1Angle);
    servo2->writeServo(servo2Angle);
    servo3->writeServo(servo3Angle);
    servo4->writeServo(servo4Angle);
}

  void Maker_Spider::initAngle58(int servo5Angle, int servo6Angle, int servo7Angle, int servo8Angle) {
    servo5->writeServo(servo5Angle);
    servo6->writeServo(servo6Angle);
    servo7->writeServo(servo7Angle);
    servo8->writeServo(servo8Angle);
  }

void Maker_Spider::robotReset() {
    initAngle(60, 60, 60, 60, 90, 90, 90, 90);
}

void Maker_Spider::FTone() {
    if (T == 1) {
      if (X == 1) {
        if (((int)B) > 0 && (((int)D) < 60 && (((int)W) < 150 && ((int)A) > 0 && ((int)C) > 60))) {
          A = A - 4.5;
          B = B - 1.5;
          C = C - 1.5;
          D = D + 1.5;
          W = W + 6;
          delay(1);
        } else {
          if (((int)A) == 45 && ((int)W) == 150) {
            X = 2;
          }
        }
      }
      if (X == 2) {
        if (((int)W) > 90 && ((int)C) > 60) {
          A = A - 4.5;
          B = B - 1.5;
          C = C - 1.5;
          D = D + 1.5;
          W = W - 6;
          delay(1);
        } else {
          if (((int)W) == 90 && ((int)C) == 60) {
            X = 3;
            T = 2;
          }
        }
      }
    }
}

void Maker_Spider::FTtwo() {
    if (T == 2) {
      if (X == 3) {
        if ((int)(B) < 90 && (((int)Q) < 150 && (((int)A) < 30 && ((int)D) < 90 && ((int)C) > 30))) {
          B = B + 4.5;
          A = A + 1.5;
          C = C - 1.5;
          D = D + 1.5;
          Q = Q + 6;
          delay(1);
        } else {
          if (((int)B) == 45 && ((int)Q) == 150) {
            X = 4;
          }
        }
      }
      if (X == 4) {
        if (((int)Q) > 90 && ((int)C) > 30) {
          B = B + 4.5;
          A = A + 1.5;
          C = C - 1.5;
          D = D + 1.5;
          Q = Q - 6;
          delay(1);
        } else {
          if (((int)Q) == 90 && ((int)C) == 30) {
            X = 5;
            T = 3;
          }
        }
      }
    }
}

void Maker_Spider::FTthree() {
    if (T == 3) {
      if (X == 5) {
        if (((int)E) < 150 && (((int)A) < 60 && (((int)D) > 0 && ((int)C) > 0 && ((int)B) > 60))) {
          D = D - 4.5;
          A = A + 1.5;
          B = B - 1.5;
          C = C - 1.5;
          E = E + 6;
          delay(1);
        } else {
          if (((int)D) == 45 && ((int)E) == 150) {
            X = 6;
          }
        }
      }
      if (X == 6) {
        if (((int)E) > 90 && ((int)C) > 0) {
          D = D - 4.5;
          A = A + 1.5;
          C = C - 1.5;
          B = B - 1.5;
          E = E - 6;
          delay(1);
        } else {
          if (((int)E) == 90 && ((int)C) == 0) {
            X = 7;
            T = 4;
          }
        }
      }
    }
}

void Maker_Spider::FTfour() {
      if (T == 4) {
        if (X == 7) {
          if (((int)F) < 150 && ((int)C) < 90 && (((int)A) > 30 && ((int)D) < 30 && ((int)B) > 30)) {
            C = C + 4.5;
            D = D + 1.5;
            A = A + 1.5;
            B = B - 1.5;
            F = F + 6;
            delay(1);
          } else {
            if (((int)D) == 15 && ((int)F) == 150) {
              X = 8;
            }
          }
        }
      if (X == 8) {
        if (((int)F) > 90 && ((int)C) < 90) {
          C = C + 4.5;
          D = D + 1.5;
          A = A + 1.5;
          B = B - 1.5;
          F = F - 6;
          delay(1);
        } else {
          if (((int)F) == 90 && ((int)C) == 90) {
            X = 1;
            T = 1;
            N = 1;
          }
        }
      }
    }
}

//back
void Maker_Spider::BTone () {
  if (BT == 1) {
    if (BY == 1) {
      if (((int)BA) < 60 && (((int)BB) > 0 && (((int)BC) > 0 && ((int)BD) > 60 && ((int)BW) < 150))) {
        BB = BB - 4.5;
        BD = BD - 1.5;
        BC = BC - 1.5;
        BA = BA + 1.5;
        BW = BW + 6;
        delay(1);
      } else {
        if (((int)BA) == 45 && ((int)BW) == 150) {
          BY = 2;
        }
      }
    }
    if (BY == 2) {
      if (((int)BW) > 90 && ((int)BD) > 60) {
        BB = BB - 4.5;
        BD = BD - 1.5;
        BC = BC - 1.5;
        BA = BA + 1.5;
        BW = BW - 6;
        delay(1);
      } else {
        if (((int)BW) == 90 && ((int)BD) == 60) {
          BY = 3;
          BT = 2;
        }
      }
    }
  }
}

void Maker_Spider::BTtwo () {
  if (BT == 2) {
    if (BY == 3) {
      if (((int)BA) < 90 && (((int)BB) < 30 && (((int)BC) < 90 && ((int)BD) > 30 && ((int)BQ) < 150))) {
        BC = BC + 4.5;
        BA = BA + 1.5;
        BD = BD - 1.5;
        BB = BB + 1.5;
        BQ = BQ + 6;
        delay(1);
      } else {
        if (((int)BC) == 45 && ((int)BQ) == 150) {
          BY = 4;
        }
      }
    }
    if (BY == 4) {
      if (((int)BQ) > 90 && ((int)BD) > 30) {
        BC = BC + 4.5;
        BA = BA + 1.5;
        BD = BD - 1.5;
        BB = BB + 1.5;
        BQ = BQ - 6;
        delay(1);
      } else {
        if (((int)BQ) == 90 && ((int)BD) == 30) {
          BY = 5;
          BT = 3;
        }
      }
    }
  }
}
void Maker_Spider::BTthree () {
  if (BT == 3) {
    if (BY == 5) {
      if (((int)BA) > 0 && (((int)BB) < 60 && (((int)BC) > 60 && ((int)BD) > 0 && ((int)BE) < 150))) {
        BA = BA - 4.5;
        BB = BB + 1.5;
        BC = BC - 1.5;
        BD = BD - 1.5;
        BE = BE + 6;
        delay(1);
      } else {
        if (((int)BA) == 45 && ((int)BE) == 150) {
          BY = 6;
        }
      }
    }
    if (BY == 6) {
      if (((int)BE) > 90 && ((int)BD) > 0) {
        BA = BA - 4.5;
        BB = BB + 1.5;
        BC = BC - 1.5;
        BD = BD - 1.5;
        BE = BE - 6;
        delay(1);
      } else {
        if (((int)BE) == 90 && ((int)BD) == 0) {
          BY = 7;
          BT = 4;
        }
      }
    }
  }
}

void Maker_Spider::BTfour () {
  if (BT == 4) {
    if (BY == 7) {
      if (((int)BA) < 30 && (((int)BB) < 90 && (((int)BC) > 30 && ((int)BD) < 90 && ((int)BF) < 150))) {
        BD = BD + 4.5;
        BA = BA + 1.5;
        BB = BB + 1.5;
        BC = BC - 1.5;
        BF = BF + 6;
        delay(1);
      } else {
        if (((int)BA) == 15 && ((int)BF) == 150) {
          BY = 8;
        }
      }
    }
    if (BY == 8) {
      if (((int)BF) > 90 && ((int)BD) < 90) {
        BD = BD + 4.5;
        BA = BA + 1.5;
        BB = BB + 1.5;
        BC = BC - 1.5;
        BF = BF - 6;
        delay(1);
      } else {
        if (((int)BF) == 90 && ((int)BD) == 90) {
          BY = 1;
          BT = 1;
        }
      }
    }
  }
}

void Maker_Spider::LTone () {
  if (LT == 1) {
    if (LO == 1) {
      if (((int)LA) < 90 && (((int)LB) < 90 && (((int)LC) < 30 && ((int)LD) > 30 && ((int)LW) < 150))) {
        LA = LA + 4.5;
        LD = LD - 1.5;
        LC = LC + 1.5;
        LB = LB + 1.5;
        LW = LW + 6;
        delay(1);
      } else {
        if (((int)LA) == 45 && ((int)LW) == 150) {
          LO = 2;
        }
      }
    }
    if (LO == 2) {
      if (((int)LW) > 90 && ((int)LD) > 30) {
        LA = LA + 4.5;
        LD = LD - 1.5;
        LC = LC + 1.5;
        LB = LB + 1.5;
        LW = LW - 6;
        delay(1);
      } else {
        if (((int)LW) == 90 && ((int)LD) == 30) {
          LO = 3;
          LT = 2;
        }
      }
    }
  }
}

void Maker_Spider::LTtwo () {
  if (LT == 2) {
    if (LO == 3) {
      if (((int)LA) > 60 && (((int)LB) > 0 && (((int)LC) < 60 && ((int)LD) > 0 && ((int)LQ) < 150))) {
        LB = LB - 4.5;
        LA = LA - 1.5;
        LC = LC + 1.5;
        LD = LD - 1.5;
        LQ = LQ + 6;
        delay(1);
      } else {
        if (((int)LB) == 45 && ((int)LQ) == 150) {
          LO = 4;
        }
      }
    }
    if (LO == 4) {
      if (((int)LQ) > 90 && ((int)LD) > 0) {
        LB = LB - 4.5;
        LA = LA - 1.5;
        LC = LC + 1.5;
        LD = LD - 1.5;
        LQ = LQ - 6;
        delay(1);
      } else {
        if (((int)LQ) == 90 && ((int)LD) == 0) {
          LO = 5;
          LT = 3;
        }
      }
    }
  }
}

void Maker_Spider::LTthree () {
  if (LT == 3) {
    if (LO == 5) {
      if (((int)LA) > 30 && (((int)LB) < 30 && (((int)LC) < 90 && ((int)LD) < 90 && ((int)LE) < 150))) {
        LD = LD + 4.5;
        LB = LB + 1.5;
        LC = LC + 1.5;
        LA = LA - 1.5;
        LE = LE + 6;
        delay(1);
      } else {
        if (((int)LD) == 45 && ((int)LE) == 150) {
          LO = 6;
        }
      }
    }
    if (LO == 6) {
      if (((int)LE) > 90 && ((int)LB) < 30) {
        LD = LD + 4.5;
        LB = LB + 1.5;
        LC = LC + 1.5;
        LA = LA - 1.5;
        LE = LE - 6;
        delay(1);
      } else {
        if (((int)LE) == 90 && ((int)LB) == 30) {
          LO = 7;
          LT = 4;
        }
      }
    }
  }
}

void Maker_Spider::LTfour () {
  if (LT == 4) {
    if (LO == 7) {
      if (((int)LA) > 0 && (((int)LB) < 60 && (((int)LC) > 0 && ((int)LD) > 60 && ((int)LF) < 150))) {
        LC = LC - 4.5;
        LD = LD - 1.5;
        LB = LB + 1.5;
        LA = LA - 1.5;
        LF = LF + 6;
        delay(1);
      } else {
        if (((int)LC) == 45 && ((int)LF) == 150) {
          LO = 8;
        }
      }
    }
    if (LO == 8) {
      if (((int)LF) > 90 && ((int)LD) > 60) {
        LC = LC - 4.5;
        LD = LD - 1.5;
        LB = LB + 1.5;
        LA = LA - 1.5;
        LF = LF - 6;
        delay(1);
      } else {
        if (((int)LF) == 90 && ((int)LD) == 60) {
          LO = 1;
          LT = 1;
        }
      }
    }
  }
}

//RIGHT
void Maker_Spider::RTone () {
  if (RT == 1) {
    if (RP == 1) {
      if (((int)RA) < 30 && (((int)RB) > 30 && (((int)RC) < 90 && ((int)RD) < 90 && ((int)RW) < 150))) {
        RC = RC + 4.5;
        RB = RB - 1.5;
        RD = RD + 1.5;
        RA = RA + 1.5;
        RW = RW + 6;
        delay(1);
      } else {
        if (((int)RC) == 45 && ((int)RW) == 150) {
         RP = 2;
        }
      }
    }
  if (RP == 2) {
      if (((int)RW) > 90 && ((int)RD) < 90) {
        RC = RC + 4.5;
        RB = RB - 1.5;
        RD = RD + 1.5;
        RA = RA + 1.5;
        RW = RW - 6;
        delay(1);
      } else {
        if (((int)RW) == 90 && ((int)RD) == 90) {
          RP = 3;
          RT = 2;
        }
      }
    }
  }
}

void Maker_Spider::RTtwo () {
  if (RT == 2) {
    if (RP == 3) {
      if (((int)RA) < 60 && (((int)RB) > 0 && (((int)RC) > 60 && ((int)RD) > 0 && ((int)RQ) < 150))) {
        RD = RD - 4.5;
        RA = RA + 1.5;
        RB = RB - 1.5;
        RC = RC - 1.5;
        RQ = RQ + 6;
        delay(1);
      } else {
        if (((int)RD) == 45 && ((int)RQ) == 150) {
          RP = 4;
        }
      }
    }
    if (RP == 4) {
      if (((int)RQ) > 90 && ((int)RD) > 0) {
        RD = RD - 4.5;
        RA = RA + 1.5;
        RB = RB - 1.5;
        RC = RC - 1.5;
        RQ = RQ - 6;
        delay(1);
      } else {
        if (((int)RQ) == 90 && ((int)RD) == 0) {
          RP = 5;
          RT = 3;
        }
      }
    }
  }
}

void Maker_Spider::RTthree () {
  if (RT == 3) {
    if (RP == 5) {
      if (((int)RA) < 90 && (((int)RB) < 90 && (((int)RC) > 30 && ((int)RD) < 30 && ((int)RE) < 150))) {
        RB = RB + 4.5;
        RA = RA + 1.5;
        RC = RC - 1.5;
        RD = RD + 1.5;
        RE = RE + 6;
        delay(1);
      } else {
        if (((int)RB) == 45 && ((int)RE) == 150) {
          RP = 6;
        }
      }
    }
  if (RP == 6) {
      if (((int)RE) > 90 && ((int)RD) < 30) {
        RB = RB + 4.5;
        RA = RA + 1.5;
        RC = RC - 1.5;
        RD = RD + 1.5;
        RE = RE - 6;
        delay(1);
      } else {
        if (((int)RE) == 90 && ((int)RD) == 30) {
            RP = 7;
            RT = 4;
        }
      }
    }
  }
}

void Maker_Spider::RTfour () {
  if (RT == 4) {
    if (RP == 7) {
    if (((int)RA) > 0 && (((int)RB) > 60 && (((int)RC) > 0 && ((int)RD) < 60 && ((int)RF) < 150))) {
      RA = RA - 4.5;
      RB = RB - 1.5;
      RC = RC - 1.5;
      RD = RD + 1.5;
      RF = RF + 6;
      delay(1);
    } else {
        if (((int)RA) == 45 && ((int)RF) == 150) {
          RP = 8;
        }
      }
    }
  if (RP == 8) {
    if (((int)RF) > 90 && ((int)RD) < 60) {
      RA = RA - 4.5;
      RB = RB - 1.5;
      RC = RC - 1.5;
      RD = RD + 1.5;
      RF = RF - 6;
      delay(1);
    } else {
        if (((int)RF) == 90 && ((int)RD) == 60) {
          RP = 1;
          RT = 1;
        }
      }
    }
  }
}

void Maker_Spider::spiderForward() {
    FTone();
    FTtwo();
    FTthree();
    FTfour();
    initAngle14((int)B, (int)C, (int)D, (int)A);
    servo8->writeServo((int)W);
    servo5->writeServo((int)Q);
    servo7->writeServo((int)E);
    servo6->writeServo((int)F);
    delay(20);
}

void Maker_Spider::spiderBack() {
    BTone();
    BTtwo();
    BTthree();
    BTfour();
    initAngle14((int)BA, (int)BB, (int)BC, (int)BD);
    servo6->writeServo((int)BW);
    servo7->writeServo((int)BQ);
    servo5->writeServo((int)BE);
    servo8->writeServo((int)BF);
    delay(20);
}

void Maker_Spider::spiderLeft() {
    LTone();
    LTtwo();
    LTthree();
    LTfour();
    initAngle14((int)LA, (int)LB, (int)LC, (int)LD);
    servo5->writeServo((int)LW);
    servo6->writeServo((int)LQ);
    servo8->writeServo((int)LE);
    servo7->writeServo((int)LF);
    delay(20);
}

void Maker_Spider::spiderRight() {
    RTone();
    RTtwo();
    RTthree();
    RTfour();
    initAngle14((int)RA, (int)RB, (int)RC, (int)RD);
    servo7->writeServo((int)RW);
    servo8->writeServo((int)RQ);
    servo6->writeServo((int)RE);
    servo5->writeServo((int)RF);
    delay(20);
}

void Maker_Spider::forwardLoop(int step) {
    initAngle14((int)B, (int)C, (int)D, (int)A);
    servo8->writeServo((int)W);
    servo5->writeServo((int)Q);
    servo7->writeServo((int)E);
    servo6->writeServo((int)F);
    for(int i = 0 ; i < 80 * step; i++){
        spiderForward();
    }
}

void Maker_Spider::backLoop (int step) {
    initAngle14((int)BA, (int)BB, (int)BC, (int)BD);
    servo6->writeServo((int)BW);
    servo7->writeServo((int)BQ);
    servo5->writeServo((int)BE);
    servo8->writeServo((int)BF);
		for(int i = 0 ; i < 80 * step; i++){
			spiderBack();
		}
}

void Maker_Spider::leftLoop (int step) {
    initAngle14((int)LA, (int)LB, (int)LC, (int)LD);
    servo5->writeServo((int)LW);
    servo6->writeServo((int)LQ);
    servo8->writeServo((int)LE);
    servo7->writeServo((int)LF);
		for(int i = 0 ; i < 80 * step ; i++){
			spiderLeft();
		}
	}

void Maker_Spider::rightLoop (int step) {
    initAngle14((int)RA, (int)RB, (int)RC, (int)RD);
    servo7->writeServo((int)RW);
    servo8->writeServo((int)RQ);
    servo6->writeServo((int)RE);
    servo5->writeServo((int)RF);
		for(int i = 0 ; i < 80 * step ; i++){
			spiderRight();
		}
	}

  void Maker_Spider::squirmingUp () {
    initAngle(45, 45, 45, 45, 90, 90, 90, 90);
    delay(1000);
    for(int i = 0; i < 20; i ++){
    while(SF < 4){
      if (SB == 1) {
        if(((int)SA) < 144 ){
          SA = (SA + 1.5);
          delay(10);
        }else{
          if(((int)SA) == 144){
            SB = 0;
          }
        }
      }
      if (SB == 0) {
        if (((int)SA) > 40) {
          SA = SA - 1.5;
          delay(10);
        }else {
          if (((int)SA) <= 40) {
            SB = 1;
            SF = SF + 1;
          }
        }
      }
      servo5->writeServo(((int)SA));
      servo6->writeServo(((int)SA));
      servo7->writeServo(((int)SA));
      servo8->writeServo(((int)SA));
      delay(10);
    }
    initAngle(45, 45, 45, 45, 90, 90, 90, 90);
    delay(20);
     }
  }

  void Maker_Spider::pushUp (){
    initAngle(5, 0, 0, 5, 90, 90, 90, 90);
    delay(1000);
    for(int i = 0 ; i < 20; i++){
    while(PF < 4){
      if (PB == 1) {
        if(((int)PA) < 144 ){
          PA = (PA + 1.5);
          delay(10);
        }else{
          if(((int)PA) == 144){
            PB = 0;
          }
        }
      }
      if (PB == 0) {
        if (((int)PA) > 40) {
          PA = PA - 1.5;
          delay(10);
        }else {
          if (((int)PA) <= 40) {
            PB = 1;
            PF = SF + 1;
          }
        }
      }
    }
    initAngle58(((int)PA), ((int)PA), ((int)PA), ((int)PA));
    delay(10);
     }
  }



  void Maker_Spider::wriggle () {
    initAngle(60, 60, 60, 60, 90, 90, 90, 90);
    delay(1000);
    for(int i = 0; i< 100; i++){

    while(WF < 6){
      if(WB == 1){
        if(((int)WA) < 144){
          WA = WA + 1.5;
          delay(10);
        }else {
          if(((int)WA) == 144){
            WB = 0;
          }
        }
      }
      if(WB == 0){
        if(((int)WA) > 40){
          WA = WA - 1.5;
           delay(10);
        }else{
          if (((int)WA) <= 40 ){
            WB = 1;
            WF = WF + 1;
          }
        }
      }
      initAngle58(((int)WA), ((int)WA), ((int)WA), ((int)WA));
    }
    initAngle(45, 45, 45, 45, 90, 90, 90, 90);
    delay(20);
    while(WE < 6){
      if(WC == 1){
          if(((int)WD) < 90){
            WD = WD + 1.5;
            delay(10);
          }else{
            if(((int)WD) == 90){
              WC = 0;
            }
          }
      }
      if(WC == 0){
        if(((int)WD) > 0){
            WD = WD - 1.5;
            delay(10);
        }else {
          if(((int)WD) <= 0 ){
            WC = 1;
            WE = WE + 1;
          }
        }
      }
      servo1->writeServo(((int)WD));
      servo3->writeServo(((int)WD));
      servo2->writeServo(90 - ((int)WD));
      servo4->writeServo(90 - ((int)WD));
      delay(10);
     }
    }
  }

void Maker_Spider::lrWriggle() {
  initAngle(45, 45, 45, 45, 90, 90, 90, 90);
  delay(1000);
  for(int i = 0; i < 20; i++){
    while(LRE < 4){
      if(LRC == 1){
        if(((int)LRD) < 90){
          LRD = LRD + 1.5;
          delay(10);
        }else{
          if(((int)LRD) == 90){
            LRC = 0;
          }
        }
      }
      if(LRC == 0){
        if(((int)LRD) > 0){
          LRD = LRD - 1.5;
          delay(10);
        }else{
          if(((int)LRD) <= 0){
            LRC = 1;
            LRE = LRE + 1;
          }
        }
      }
      servo1->writeServo((int(LRD)));
      servo3->writeServo((int(LRD)));
      servo2->writeServo((90 - (int(LRD))));
      servo4->writeServo((90 -(int(LRD))));
      delay(10);
    }
    initAngle(45, 45, 45, 45, 90, 90, 90, 90);
    delay(20);
  }
}

void Maker_Spider::cwRotation(){
  initAngle(45, 45, 45, 45, 90, 90, 90, 90);
  delay(1000);
  for(int i = 0; i < 1000; i++){
  if(CWRT == 1){
    if(CWRX == 1){
      if((int(CWRW)) < 120 && (int(CWRN)) < 75){
        CWRW = CWRW + 3;
        CWRN = CWRN + 1.5;
        delay(5);
      }else{
        if((int(CWRN)) == 60 && (int(CWRW)) == 120){
          CWRX = 2;
        }
      }
    }
    if(CWRX == 2){
      if(90 < (int(CWRW)) && (int(CWRN)) < 75){
        CWRW = CWRW -3;
        CWRN = CWRN + 1.5;
        delay(5);
      }else{
        if((int(CWRW)) == 90 && (int(CWRN)) == 75){
          CWRX = 1;
          CWRT = 2;
        }
      }
    }
  }
  if(CWRT == 2){
    if(CWRY == 1){
      if((int(CWRQ)) < 120 && (int(CWRN)) > 45 ){
        CWRQ = CWRQ + 3;
        CWRN = CWRN - 1.5;
        delay(5);
      }else{
        if((int(CWRN)) == 60 && (int(CWRQ)) == 120){
          CWRY = 2;
        }
      }
    }
    if(CWRY == 2){
      if((int(CWRQ)) > 90 && (int(CWRN)) < 75 ){
        CWRQ = CWRQ - 3;
        CWRN = CWRN - 1.5;
        delay(5);
      }else{
        if((int(CWRN)) == 45 && (int(CWRQ)) == 90){
          CWRY = 1;
          CWRT = 1;
        }
      }
    }
  }
  servo5->writeServo(int(CWRW));
  servo7->writeServo(int(CWRW));
  servo6->writeServo(int(CWRQ));
  servo8->writeServo(int(CWRQ));
  servo2->writeServo(int(CWRN));
  servo4->writeServo(int(CWRN));
  servo1->writeServo(int(CWRN));
  servo3->writeServo(int(CWRN));
  delay(20);
    }
}

void Maker_Spider::ccwRotation(){
  initAngle(45, 45, 45, 45, 90, 90, 90, 90);
  delay(1000);
  for(int i = 0 ; i < 1000; i++){
  if(CCWRT == 1){
    if(CCWRX == 1){
      if((int(CCWRW)) < 120 && (int(CCWRN)) > 15){
        CCWRW = CCWRW + 3;
        CCWRN = CCWRN - 1.5;
        delay(5);
      }else{
        if((int(CCWRN)) == 30  && ((int(CCWRW)) == 120 || (int(CCWRW)) > 120)){
          CCWRX = 2;
        }
      }
    }
    if(CCWRX == 2){
      if(90 < (int(CCWRW)) && (int(CCWRN)) > 15){
        CCWRW = CCWRW - 3;
        CCWRN = CCWRN - 1.5;
        delay(5);
      }else{
        if((int(CCWRW)) == 90 && (int(CCWRN)) == 15){
          CCWRX = 1;
          CCWRT = 2;
        }
      }
    }
  }
  if(CCWRT == 2){
    if(CCWRY == 1){
      if((int(CCWRQ)) < 120 && (int(CCWRN)) < 45){
        CCWRQ = CCWRQ + 3;
        CCWRN = CCWRN + 1.5;
        delay(5);
      }else{
        if((int(CCWRN)) == 30 && ((int(CCWRQ)) == 120 || (int(CCWRQ)) > 120)){
          CCWRY = 2;
        }
      }
    }
    if(CCWRY == 2){
      if((int(CCWRQ)) > 90 && (int(CCWRN)) < 45){
        CCWRQ = CCWRQ - 3;
        CCWRN = CCWRN + 1.5;
        delay(5);
      }else{
        if((int(CCWRQ)) == 90 && (int(CCWRN)) == 45 ){
          CCWRY = 1;
          CCWRT = 1;
        }
      }
    }
  }
  servo5->writeServo(int(CCWRW));
  servo7->writeServo(int(CCWRW));
  servo6->writeServo(int(CCWRQ));
  servo8->writeServo(int(CCWRQ));
  servo2->writeServo(int(CCWRN));
  servo4->writeServo(int(CCWRN));
  servo1->writeServo(int(CCWRN));
  servo3->writeServo(int(CCWRN));
  delay(20);
  }
}
