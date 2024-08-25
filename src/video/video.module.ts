import { Module } from '@nestjs/common';
import { VideoController } from './controller/video.controller';
import { VideoService } from './service/video.service';
import { SupabaseModule } from '../common/supabase/supabase.module';
import { YouTubeModule } from '../common/youtube/youtube.module';

@Module({
  imports: [SupabaseModule, YouTubeModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
