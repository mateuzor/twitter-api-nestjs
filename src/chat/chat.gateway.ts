// chat.gateway.ts

import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private chatMessages: string[] = [];

  afterInit(server: Server) {
    // Initialize any necessary setup after the WebSocket server is initialized
  }

  handleConnection(client: Socket) {
    client.on('chatMessage', (message: string) => {
      this.handleMessage(client, message);
    });
  }

  handleDisconnect(client: Socket) {
    // Handle a client disconnection
  }

  handleMessage(client: Socket, message: string) {
    this.chatMessages.push(message);
    this.server.emit('chatMessage', message);
  }
}
