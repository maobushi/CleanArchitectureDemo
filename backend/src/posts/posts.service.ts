import { Injectable } from '@nestjs/common';
import { PostType } from './posts.interface';

@Injectable()
export class PostsService {
  private readonly items: PostType[] = [];
  findAll(): PostType[] {
    return this.items;
  }
  create(itemData: PostType) {
    this.items.push(itemData);
  }
}
