import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateVideoDto } from '../dto/create-video.dto';
import { Supabase } from '../../common/supabase/supabase';
import { YouTubeClient } from '../../common/youtube/youtube.client';
@Injectable()
export class VideoService {
  constructor(
    private readonly supabase: Supabase,
    private readonly youtubeClient: YouTubeClient,
  ) {}

  public async createVideo(createVideoDto: CreateVideoDto) {
    const videoSource = this.classifyVideoSource(createVideoDto.url);

    if (videoSource === 'unknown') {
      throw new BadRequestException('올바르지 않은 영상 소스입니다.');
    }

    if (videoSource === 'youtube-full') {
      const videoInfo = await this.getYoutubeVideoInfo(createVideoDto.url);
      console.log(videoInfo);
    }

    if (videoSource === 'youtube-shorts') {
      const videoInfo = await this.getYoutubeVideoInfo(createVideoDto.url);
      console.log(videoInfo);
    }

    // const { data, error } = await this.supabase
    //   .getClient()
    //   .from('Video')
    //   .insert(createVideoDto);

    // if (error) throw error;
    // return data;
  }

  private classifyVideoSource(url) {
    const patterns = {
      'youtube-full': /youtube\.com\/watch\?v=/,
      'youtube-shorts': /youtube\.com\/shorts\//,
    };

    for (const type in patterns) {
      if (patterns[type].test(url)) {
        return type;
      }
    }

    return 'unknown';
  }

  private async getYoutubeVideoInfo(url: string) {
    const videoId = this.extractYoutubeVideoId(url);
    if (!videoId) {
      throw new BadRequestException('유효하지 않은 YouTube URL입니다.');
    }

    return this.youtubeClient.getVideoInfo(videoId);
  }

  private extractYoutubeVideoId(url: string): string | null {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  }
}
