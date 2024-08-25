import { Module } from '@nestjs/common';
import { YouTubeClient } from './youtube.client';

@Module({
  providers: [YouTubeClient],
  exports: [YouTubeClient],
})
export class YouTubeModule {}
