import { Body, Controller, Delete, Get, Put, Param, Post } from '@nestjs/common';
import { Book, ReadingListItem } from '@tmo/shared/models';
import { ReadingListService } from './reading-list.service';

@Controller()
export class ReadingListController {
  constructor(private readonly readingList: ReadingListService) {}

  @Get('/reading-list/')
  async getReadingList() {
    return await this.readingList.getList();
  }

  @Put('/reading-list/:id/finished')
  async updateMarkAsRead(@Param() params, @Body() book: ReadingListItem) {
    return await this.readingList.markBookAsRead(book, params.id);
  }

  @Post('/reading-list/')
  async addToReadingList(@Body() item: Book) {
    return await this.readingList.addBook(item);
  }

  @Delete('/reading-list/:id')
  async removeFromReadingList(@Param() params) {
    return await this.readingList.removeBook(params.id);
  }
}
