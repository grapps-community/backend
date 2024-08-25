import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from '../dto/create-video.dto';
import { Supabase } from '../../common/supabase/supabase';

@Injectable()
export class VideoService {
  constructor(private readonly supabase: Supabase) {}

  public async createVideo(createVideoDto: CreateVideoDto) {
    console.log(createVideoDto);
    // const { data, error } = await this.supabase
    //   .getClient()
    //   .from('Video')
    //   .insert(createVideoDto);

    // if (error) throw error;
    // return data;
  }
}
