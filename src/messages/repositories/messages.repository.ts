import { readFile, writeFile } from 'fs/promises'

export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf-8')
    const messages = JSON.parse(content)

    return messages[id]
  }

  async findAll() {

  }

  async create(message: string) {

  }
}