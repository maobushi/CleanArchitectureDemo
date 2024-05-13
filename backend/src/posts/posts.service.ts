import { Injectable } from '@nestjs/common';
import { PostType } from './posts.interface';
import { prisma } from '@/lib/prisma';

@Injectable()
export class PostsService {
  private readonly items: PostType[] = [];
  async findAll(): Promise<PostType[]> {
    const items = await prisma.postType.findMany();
    return items;
  }

  async create(itemData: PostType) {
    await prisma.postType.create({
      data: {
        image: itemData.image,
        hashtags: itemData.hashtags,
        title: itemData.title,
        description: itemData.description,
        entryNumber: itemData.entryNumber,
        companyLogo: itemData.companyLogo,
        companyName: itemData.companyName,
        shareNumber: itemData.shareNumber,
      },
    });
  }
}
