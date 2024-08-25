import { Injectable } from '@nestjs/common';
import { google, youtube_v3 } from 'googleapis';

@Injectable()
export class YouTubeClient {
  private youtube: youtube_v3.Youtube;

  constructor() {
    this.youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY,
    });
  }

  async getVideoInfo(
    videoId: string,
    part: string[] = ['snippet', 'contentDetails', 'statistics'],
  ) {
    try {
      const response = await this.youtube.videos.list({
        part,
        id: [videoId],
      });

      return response.data.items[0];
    } catch (error) {
      throw new Error('YouTube API 요청 중 오류 발생');
    }
  }
}
