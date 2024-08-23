import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './common/superbase/superbase.module';

@Module({
  imports: [ConfigModule.forRoot(), SupabaseModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
