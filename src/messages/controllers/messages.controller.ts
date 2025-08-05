import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common'
import { CreateMessageDto } from '../dtos/create-message.dto'
import { MessageService } from '../services/messages.service'

@Controller('messages')
export class MessagesController {
  messageService: MessageService

  constructor() {
    this.messageService = new MessageService()
  }

  @Get()
  listMessages() {
    return this.messageService.findAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content)
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messageService.findOne(id)

    if(!message) {
      throw new NotFoundException('Message not found')
    }

    return message
  }
}