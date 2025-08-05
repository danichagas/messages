import { Module } from '@nestjs/common'
import { MessagesController } from '../messages/controllers/messages.controller'

@Module({
  controllers: [MessagesController]
})
export class MessagesModule {}
