import { Body, Controller, Get, Param, Post } from '@nestjs/common'
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
  getMessages(@Param('id') id: string) {
    return this.messageService.findOne(id)
  }
}