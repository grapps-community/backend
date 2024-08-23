import { Controller, Post, Body } from '@nestjs/common';
import { CreateVideoDto } from '../dto/create-video.dto';
import { VideoService } from '../service/video.service';

@Controller('/api/v1/video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  createVideo(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.createVideo(createVideoDto);
  }
}
