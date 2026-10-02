/* SPDX-License-Identifier: GPL-3.0-or-later
 * Offline register trace renderer. No interpreter, MIDI bank substitution, or
 * game logic is linked into this executable. Nuked-OPL3 is vendored separately.
 * Input: little-endian u32 register count, duration ticks, rate, then events
 * {u32 tick,u8 chip,u16 register,u8 value}. Output: stereo 16-bit PCM WAV.
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include "vendor/opl3.h"
static uint32_t readle(FILE *f, int size) { uint32_t n=0; for(int i=0;i<size;i++){int b=fgetc(f);if(b<0){fprintf(stderr,"Truncated OPL trace\n");exit(2);}n|=(uint32_t)b<<(i*8);}return n; }
static void writele(FILE *f,uint32_t n,int size){for(int i=0;i<size;i++)fputc((n>>(i*8))&255,f);}
typedef struct {uint32_t tick;uint8_t chip;uint16_t reg;uint8_t value;} Event;
int main(int argc,char **argv){
 if(argc!=3){fprintf(stderr,"Usage: render_opl input.trace output.wav\n");return 2;}
 FILE *in=fopen(argv[1],"rb");if(!in){perror("trace");return 2;}
 uint32_t count=readle(in,4),ticks=readle(in,4),rate=readle(in,4);
 if(count>4000000||ticks>60*60*60||rate<8000||rate>96000)return 2;
 Event *events=calloc(count,sizeof(Event));if(!events)return 2;
 for(uint32_t i=0;i<count;i++){events[i].tick=readle(in,4);events[i].chip=readle(in,1);events[i].reg=readle(in,2);events[i].value=readle(in,1);if(events[i].chip>1||events[i].reg>511||(i&&events[i].tick<events[i-1].tick))return 2;}
 fclose(in);FILE *out=fopen(argv[2],"wb");if(!out){perror("wav");return 2;}
 uint32_t frames=(uint64_t)ticks*rate/60,bytes=frames*4;
 fwrite("RIFF",1,4,out);writele(out,36+bytes,4);fwrite("WAVEfmt ",1,8,out);writele(out,16,4);writele(out,1,2);writele(out,2,2);writele(out,rate,4);writele(out,rate*4,4);writele(out,4,2);writele(out,16,2);fwrite("data",1,4,out);writele(out,bytes,4);
 opl3_chip chips[2];OPL3_Reset(&chips[0],rate);OPL3_Reset(&chips[1],rate);
 uint32_t at=0;
 for(uint32_t frame=0;frame<frames;frame++){
  while(at<count&&(uint64_t)events[at].tick*rate/60<=frame){Event e=events[at++];OPL3_WriteRegBuffered(&chips[e.chip],e.reg,e.value);}
  int16_t left[2],right[2];OPL3_GenerateResampled(&chips[0],left);OPL3_GenerateResampled(&chips[1],right);
  writele(out,(uint16_t)left[0],2);writele(out,(uint16_t)right[0],2);
 }
 free(events);if(fclose(out))return 2;return 0;
}
