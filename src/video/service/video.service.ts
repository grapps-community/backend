import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateVideoDto } from '../dto/create-video.dto';
import { Supabase } from '../../common/supabase/supabase';

@Injectable()
export class VideoService {
  constructor(private readonly supabase: Supabase) {}

  public async createVideo(createVideoDto: CreateVideoDto) {
    const videoSource = this.classifyVideoSource(createVideoDto.url);

    if (videoSource === 'unknown') {
      throw new BadRequestException('올바르지 않은 영상 소스입니다.');
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
}
