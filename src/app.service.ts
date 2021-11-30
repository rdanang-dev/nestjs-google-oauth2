import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Google Oauth2 By Ridho Danang for assesment test from PT. Jelajah Teknologi Negri.<br><br>
    for login using google account please follow this pattern<br>
    <br>
    http://localhost:3000/login`;
  }
}
